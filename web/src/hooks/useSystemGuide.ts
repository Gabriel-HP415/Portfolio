import { useCallback, useEffect, useRef, useState } from 'react'
import {
  MESSAGE_DISPLAY_MS,
  OBSERVED_SECTIONS,
  PROJECT_INSIGHTS,
  SECTION_DEBOUNCE_MS,
  SECTION_MESSAGES,
  type ObservedSection,
} from '../data/systemGuide'

const STORAGE_VISIBLE = 'nhp-system-guide-visible'
const STORAGE_HINTS = 'nhp-system-guide-hints'

function readStorage(key: string, fallback: boolean): boolean {
  try {
    const v = localStorage.getItem(key)
    return v === null ? fallback : v === 'true'
  } catch {
    return fallback
  }
}

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/** Matches main: mx-auto max-w-[1200px] px-6 */
const CONTENT_MAX_WIDTH = 1200
const CONTENT_GUTTER_PX = 24
const ORB_RADIUS = 26
/** Inset from content right edge — orb sits near column, not viewport rim */
const INSET_FROM_CONTENT_RIGHT = 20

const RAIL_MARGIN_TOP = 112
const RAIL_MARGIN_BOTTOM = 128

function getRailX(): number {
  const w = window.innerWidth
  const contentWidth = Math.min(CONTENT_MAX_WIDTH, w - CONTENT_GUTTER_PX * 2)
  const contentRight = (w - contentWidth) / 2 + contentWidth
  const gutter = w - contentRight

  // Center of orb: hug the content column (slightly inside the right edge)
  const nearContentX = contentRight - ORB_RADIUS - INSET_FROM_CONTENT_RIGHT

  // Never park on the viewport rim — keep ~40% of side gutter as dead zone
  const rimClearance = Math.max(72, gutter * 0.42)
  const awayFromRimX = w - rimClearance

  const minX = ORB_RADIUS + 12
  return Math.max(minX, Math.min(nearContentX, awayFromRimX))
}

function randomRailY(): number {
  const h = window.innerHeight
  const travel = Math.max(160, h - RAIL_MARGIN_TOP - RAIL_MARGIN_BOTTOM)
  return RAIL_MARGIN_TOP + Math.random() * travel
}

function clampRailY(y: number): number {
  const h = window.innerHeight
  return Math.max(RAIL_MARGIN_TOP, Math.min(h - RAIL_MARGIN_BOTTOM, y))
}

export function useSystemGuide() {
  const [visible, setVisibleState] = useState(() => readStorage(STORAGE_VISIBLE, true))
  const [hintsEnabled, setHintsEnabledState] = useState(() => readStorage(STORAGE_HINTS, true))
  const [position, setPosition] = useState({ x: 120, y: 140 })
  const [message, setMessage] = useState<string | null>(null)
  const [isTyping, setIsTyping] = useState(false)
  const [activeSection, setActiveSection] = useState<ObservedSection | null>(null)

  const posRef = useRef({ x: 120, y: 140 })
  const targetRef = useRef({ x: 120, y: 140 })
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const sectionTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const projectHoverRef = useRef<string | null>(null)
  const activeSectionRef = useRef<ObservedSection | null>(null)
  const hintsRef = useRef(hintsEnabled)
  const visibleRef = useRef(visible)

  activeSectionRef.current = activeSection
  hintsRef.current = hintsEnabled
  visibleRef.current = visible

  const setVisible = useCallback((value: boolean) => {
    setVisibleState(value)
    try {
      localStorage.setItem(STORAGE_VISIBLE, String(value))
    } catch {
      /* ignore */
    }
    if (!value) {
      setMessage(null)
      setIsTyping(false)
    }
  }, [])

  const setHintsEnabled = useCallback((value: boolean) => {
    setHintsEnabledState(value)
    try {
      localStorage.setItem(STORAGE_HINTS, String(value))
    } catch {
      /* ignore */
    }
    if (!value) {
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current)
      setMessage(null)
      setIsTyping(false)
    }
  }, [])

  const showMessage = useCallback((text: string, persist = false) => {
    if (!visibleRef.current || !hintsRef.current) return
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current)
    setIsTyping(true)
    setMessage(null)

    const revealDelay = 280
    window.setTimeout(() => {
      if (!hintsRef.current) return
      setIsTyping(false)
      setMessage(text)
    }, revealDelay)

    if (!persist) {
      hideTimerRef.current = setTimeout(() => {
        setMessage(null)
      }, MESSAGE_DISPLAY_MS + revealDelay)
    }
  }, [])

  // Section observer
  useEffect(() => {
    const visibleMap = new Map<string, number>()

    const pickSection = () => {
      let bestId: string | null = null
      let bestRatio = 0
      visibleMap.forEach((ratio, id) => {
        if (ratio > bestRatio) {
          bestRatio = ratio
          bestId = id
        }
      })
      if (!bestId || bestRatio < 0.12) return

      const section = bestId as ObservedSection
      if (section === activeSectionRef.current) return

      if (sectionTimerRef.current) clearTimeout(sectionTimerRef.current)
      sectionTimerRef.current = setTimeout(() => {
        setActiveSection(section)
        if (!projectHoverRef.current && hintsRef.current && visibleRef.current) {
          const msg = SECTION_MESSAGES[section]
          if (msg) showMessage(msg)
        }
      }, SECTION_DEBOUNCE_MS)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id
          if (!OBSERVED_SECTIONS.includes(id as ObservedSection)) return
          if (entry.isIntersecting) {
            visibleMap.set(id, entry.intersectionRatio)
          } else {
            visibleMap.delete(id)
          }
        })
        pickSection()
      },
      { threshold: [0.12, 0.25, 0.4, 0.55, 0.7] },
    )

    OBSERVED_SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => {
      observer.disconnect()
      if (sectionTimerRef.current) clearTimeout(sectionTimerRef.current)
    }
  }, [showMessage])

  // Project hover
  useEffect(() => {
    const onOver = (e: Event) => {
      const target = (e.target as HTMLElement).closest<HTMLElement>('[data-guide-project]')
      if (!target || !hintsRef.current || !visibleRef.current) return
      const id = target.getAttribute('data-guide-project')
      if (!id) return
      const insight = PROJECT_INSIGHTS[id]
      if (!insight) return
      projectHoverRef.current = id
      showMessage(insight, true)
    }

    const onOut = (e: Event) => {
      const related = (e as MouseEvent).relatedTarget as HTMLElement | null
      if (related?.closest('[data-guide-project]')) return
      projectHoverRef.current = null
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current)
      hideTimerRef.current = setTimeout(() => {
        const section = activeSectionRef.current
        if (!projectHoverRef.current && section && hintsRef.current) {
          const msg = SECTION_MESSAGES[section]
          if (msg) showMessage(msg)
        }
      }, 300)
    }

    const root = document.getElementById('projects')
    root?.addEventListener('mouseover', onOver)
    root?.addEventListener('mouseout', onOut)
    return () => {
      root?.removeEventListener('mouseover', onOver)
      root?.removeEventListener('mouseout', onOut)
    }
  }, [showMessage])

  // Vertical-only drift on the right edge (fixed X)
  useEffect(() => {
    if (!visible) return

    const syncRail = (y?: number) => {
      const x = getRailX()
      const nextY = clampRailY(y ?? window.innerHeight * 0.45)
      posRef.current = { x, y: nextY }
      targetRef.current = { x, y: nextY }
      setPosition({ x, y: nextY })
    }

    syncRail()

    if (prefersReducedMotion()) {
      const onResize = () => syncRail(posRef.current.y)
      window.addEventListener('resize', onResize)
      return () => window.removeEventListener('resize', onResize)
    }

    targetRef.current.y = randomRailY()

    const pickNextY = () => {
      targetRef.current = { x: getRailX(), y: randomRailY() }
    }

    const waypointInterval = window.setInterval(pickNextY, 12000)
    const onResize = () => {
      const x = getRailX()
      posRef.current.x = x
      targetRef.current.x = x
      posRef.current.y = clampRailY(posRef.current.y)
      targetRef.current.y = clampRailY(targetRef.current.y)
    }
    window.addEventListener('resize', onResize)

    let raf = 0
    const tick = () => {
      const t = targetRef.current
      const p = posRef.current
      const ease = 0.022

      p.x = getRailX()
      p.y += (t.y - p.y) * ease
      p.y += Math.sin(Date.now() * 0.0005) * 0.18
      p.y = clampRailY(p.y)

      setPosition({ x: p.x, y: p.y })
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      clearInterval(waypointInterval)
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(raf)
    }
  }, [visible])

  useEffect(() => {
    return () => {
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current)
    }
  }, [])

  return {
    visible,
    setVisible,
    hintsEnabled,
    setHintsEnabled,
    position,
    message,
    isTyping,
    activeSection,
    showMessage,
  }
}

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { SYSTEM_GUIDE_NAME } from '../../../data/systemGuide'
import { useSystemGuide } from '../../../hooks/useSystemGuide'
import { GuideBubble } from './GuideBubble'
import { GuideControls } from './GuideControls'
import { GuideOrb } from './GuideOrb'

export function SystemGuide() {
  const {
    visible,
    setVisible,
    hintsEnabled,
    setHintsEnabled,
    position,
    message,
    isTyping,
  } = useSystemGuide()

  const [controlsOpen, setControlsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (!controlsOpen) return
    const onPointerDown = (e: PointerEvent) => {
      const root = rootRef.current
      if (root && !root.contains(e.target as Node)) {
        setControlsOpen(false)
      }
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [controlsOpen])

  const bubblePlacement = 'left' as const

  if (!mounted) return null

  if (!visible) {
    return (
      <motion.button
        type="button"
        data-system-guide
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-6 left-6 z-[45] rounded-full border border-primary-container/25 bg-surface-container/80 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-primary-container shadow-lg backdrop-blur-xl transition-colors hover:border-primary-container/50"
        onClick={() => setVisible(true)}
      >
        {SYSTEM_GUIDE_NAME}
      </motion.button>
    )
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[45]" aria-hidden={false}>
      <motion.div
        ref={rootRef}
        data-system-guide
        className="pointer-events-auto absolute"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
        }}
        initial={false}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 22 }}
      >
        <div className="relative">
          <GuideControls
            open={controlsOpen}
            hintsEnabled={hintsEnabled}
            visible={visible}
            onToggleHints={() => setHintsEnabled(!hintsEnabled)}
            onToggleVisible={() => {
              setVisible(false)
              setControlsOpen(false)
            }}
          />

          <GuideBubble
            message={message}
            isTyping={isTyping}
            visible={hintsEnabled}
            placement={bubblePlacement}
          />

          <GuideOrb
            active={hintsEnabled}
            docked={false}
            minimized={false}
            onActivate={() => setControlsOpen((o) => !o)}
          />
        </div>

        <AnimatePresence>
          {!controlsOpen && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="pointer-events-none absolute left-1/2 top-full mt-2 w-max -translate-x-1/2 font-mono text-[9px] uppercase tracking-widest text-on-surface-variant/40"
            >
              Nhấn để điều khiển
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

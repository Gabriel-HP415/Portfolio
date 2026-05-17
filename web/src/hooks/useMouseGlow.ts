import { useEffect, useState } from 'react'

export function useMouseGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)')
    setEnabled(mq.matches)

    const onMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    if (mq.matches) {
      window.addEventListener('mousemove', onMove, { passive: true })
    }

    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return { position, enabled }
}

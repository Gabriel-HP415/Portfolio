import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type GlassCardProps = {
  children: ReactNode
  className?: string
  hoverGlow?: boolean
}

export function GlassCard({ children, className = '', hoverGlow = true }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hoverGlow ? { y: -4 } : undefined}
      transition={{ duration: 0.3 }}
      className={`glass rounded-xl p-6 transition-colors duration-300 hover:border-primary-container/30 hover:shadow-[0_0_24px_rgba(125,211,252,0.08)] ${className}`}
    >
      {children}
    </motion.div>
  )
}

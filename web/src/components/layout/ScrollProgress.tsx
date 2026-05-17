import { motion } from 'framer-motion'
import { useScrollProgress } from '../../hooks/useScrollProgress'

export function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-surface-container-low">
      <motion.div
        className="h-full bg-gradient-to-r from-primary-container via-surface-tint to-secondary"
        style={{ width: `${progress}%` }}
        transition={{ duration: 0.15 }}
      />
    </div>
  )
}

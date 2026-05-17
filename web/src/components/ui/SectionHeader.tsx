import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type SectionHeaderProps = {
  label: string
  title: string
  description?: string
  icon?: ReactNode
}

export function SectionHeader({ label, title, description, icon }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="mb-10 md:mb-12"
    >
      <span className="text-label-caps text-secondary mb-3 block">{label}</span>
      <h2 className="font-display text-3xl md:text-4xl font-semibold text-on-surface flex items-center gap-3">
        {icon}
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-lg text-on-surface-variant">{description}</p>
      )}
    </motion.div>
  )
}

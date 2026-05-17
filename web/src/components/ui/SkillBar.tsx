import { motion } from 'framer-motion'

type SkillBarProps = {
  name: string
  level: number
}

export function SkillBar({ name, level }: SkillBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="space-y-2"
    >
      <motion.div className="flex justify-between text-sm">
        <span className="font-mono text-on-surface">{name}</span>
        <span className="font-mono text-on-surface-variant">{level}%</span>
      </motion.div>
      <div className="h-1.5 rounded-full bg-surface-container-highest overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-primary-container to-secondary"
        />
      </div>
    </motion.div>
  )
}

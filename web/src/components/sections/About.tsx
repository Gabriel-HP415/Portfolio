import { motion } from 'framer-motion'
import { Cpu, Puzzle, Users, Zap } from 'lucide-react'
import { aboutPillars, careerTimeline } from '../../data/experience'
import { SectionHeader } from '../ui/SectionHeader'

const iconMap = {
  puzzle: Puzzle,
  cpu: Cpu,
  zap: Zap,
  users: Users,
}

export function About() {
  return (
    <section id="about" className="section-padding">
      <SectionHeader label="About" title="Engineering identity" />

      <motion.blockquote
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mx-auto max-w-3xl text-center mb-16"
      >
        <p className="font-display text-2xl md:text-3xl text-on-surface leading-snug">
          &ldquo;I enjoy building systems that remain clean, reliable, and maintainable as they
          scale.&rdquo;
        </p>
      </motion.blockquote>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        {aboutPillars.map((pillar, i) => {
          const Icon = iconMap[pillar.icon as keyof typeof iconMap]
          return (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-xl p-5"
            >
              <Icon className="text-primary-container mb-3" size={22} />
              <h3 className="font-display font-semibold text-on-surface mb-2">{pillar.title}</h3>
              <p className="text-sm text-on-surface-variant">{pillar.description}</p>
            </motion.div>
          )
        })}
      </div>

      <h3 className="text-label-caps text-secondary mb-8">Career journey</h3>
      <div className="relative border-l border-outline-variant/30 ml-3 space-y-10 pl-8">
        {careerTimeline.map((item, i) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative"
          >
            <span className="absolute -left-[2.4rem] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-primary-container bg-background" />
            <span className="font-mono text-sm text-primary-container">{item.year}</span>
            <h4 className="font-display text-lg font-semibold text-on-surface mt-1">{item.title}</h4>
            <p className="text-sm text-secondary">{item.subtitle}</p>
            <p className="mt-2 text-on-surface-variant">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

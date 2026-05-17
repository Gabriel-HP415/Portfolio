import { motion } from 'framer-motion'
import { Layers, Gauge, ShieldCheck } from 'lucide-react'
import { approachPrinciples } from '../../data/experience'
import { SectionHeader } from '../ui/SectionHeader'

const icons = {
  layers: Layers,
  'shield-check': ShieldCheck,
  gauge: Gauge,
}

export function Approach() {
  return (
    <section id="approach" className="section-padding">
      <SectionHeader
        label="The philosophy"
        title="Building systems that scale seamlessly and fail gracefully"
        description="How I think about backend engineering — aligned with production-minded teams."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {approachPrinciples.map((principle, i) => {
          const Icon = icons[principle.icon as keyof typeof icons] ?? Layers
          return (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-8"
            >
              <Icon className="text-primary-container mb-4" size={28} />
              <h3 className="font-display text-xl font-semibold text-on-surface mb-3">
                {principle.title}
              </h3>
              <p className="text-on-surface-variant leading-relaxed">{principle.description}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

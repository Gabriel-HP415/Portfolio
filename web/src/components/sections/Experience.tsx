import { motion } from 'framer-motion'
import { coursework, education } from '../../data/experience'
import { GlassCard } from '../ui/GlassCard'
import { SectionHeader } from '../ui/SectionHeader'

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <SectionHeader
        label="Trajectory"
        title="Education & technical foundation"
        description="Academic background and specialized focus areas."
      />

      <GlassCard className="mb-10">
        <div className="flex flex-col sm:flex-row items-start gap-6">
          <img
            src={education.logo}
            alt="UTH logo"
            className="h-20 w-auto object-contain rounded-lg bg-surface-container-lowest/50 p-2"
          />
          <div>
            <h3 className="font-display text-xl font-semibold text-on-surface">{education.degree}</h3>
            <p className="text-on-surface mt-2 font-medium">{education.institution}</p>
            <p className="text-secondary font-mono text-sm mt-1">{education.institutionShort}</p>
            <p className="text-on-surface-variant text-sm mt-2">
              {education.period} · {education.focus}
            </p>
          </div>
        </div>
      </GlassCard>

      <h3 className="text-label-caps text-secondary mb-4">Relevant coursework</h3>
      <div className="flex flex-wrap gap-2 mb-10">
        {coursework.map((course) => (
          <span
            key={course}
            className="rounded-full border border-outline-variant/30 bg-surface-variant/40 px-4 py-2 font-mono text-xs text-on-surface-variant hover:border-primary-container/40 hover:text-on-surface transition-colors"
          >
            {course}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            title: 'Self-learning',
            desc: 'Spring Boot, system design, and backend interview preparation.',
          },
          {
            title: 'Hackathons',
            desc: 'Rapid API prototyping with clean commits and measurable demos.',
          },
          {
            title: 'Projects',
            desc: 'Auth systems, REST APIs, and real-time messaging in coursework.',
          },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass rounded-xl p-5"
          >
            <h4 className="font-display font-semibold text-on-surface">{item.title}</h4>
            <p className="text-sm text-on-surface-variant mt-2">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

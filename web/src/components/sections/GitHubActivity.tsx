import { motion } from 'framer-motion'
import { profile } from '../../data/profile'
import { SectionHeader } from '../ui/SectionHeader'

// Mock contribution grid — replace with GitHub API or github-readme-streak
function generateGrid() {
  const levels = [0, 1, 2, 3, 4]
  return Array.from({ length: 52 }, () =>
    Array.from({ length: 7 }, () => levels[Math.floor(Math.random() * levels.length)]),
  )
}

const LEVEL_COLORS = [
  'bg-surface-container-high',
  'bg-primary-container/20',
  'bg-primary-container/40',
  'bg-primary-container/60',
  'bg-primary-container',
]

export function GitHubActivity() {
  const grid = generateGrid()

  return (
    <section id="github" className="section-padding">
      <SectionHeader
        label="Activity"
        title="GitHub contributions"
        description="Consistent building habit — connect your username in profile.ts for live stats."
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="glass rounded-xl p-6 overflow-x-auto"
      >
        <div className="flex gap-1 min-w-max">
          {grid.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-1">
              {week.map((level, di) => (
                <div
                  key={`${wi}-${di}`}
                  className={`h-3 w-3 rounded-sm ${LEVEL_COLORS[level]}`}
                  title={`Level ${level}`}
                />
              ))}
            </div>
          ))}
        </div>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block font-mono text-xs text-on-surface-variant hover:text-primary-container transition-colors"
        >
          github.com/{profile.githubUsername}
        </a>
      </motion.div>
    </section>
  )
}

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import type { Project } from '../../data/projects'

type ProjectModalProps = {
  project: Project | null
  onClose: () => void
}

const fields = [
  ['Problem', 'problem'],
  ['Solution', 'solution'],
  ['Technologies', 'technologies'],
  ['Challenges', 'challenges'],
  ['Results', 'results'],
  ['What I Learned', 'learned'],
] as const

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-[80] md:max-w-2xl md:w-full max-h-[90vh] overflow-y-auto glass rounded-xl p-6 md:p-8"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface"
              aria-label="Close"
            >
              <X size={22} />
            </button>
            <div className="flex flex-wrap items-center gap-3 pr-8">
              <h3 className="font-display text-2xl font-semibold text-on-surface">{project.title}</h3>
              {project.inProgress && (
                <span className="rounded-full border border-secondary/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-secondary">
                  Đang phát triển
                </span>
              )}
            </div>
            <p className="mt-2 font-mono text-sm text-primary-container">{project.impact}</p>
            <div className="mt-6 space-y-5">
              {fields.map(([label, key]) => (
                <div key={key}>
                  <h4 className="text-label-caps text-secondary mb-1">{label}</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{project[key]}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

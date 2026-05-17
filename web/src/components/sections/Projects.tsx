import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { useState } from 'react'
import { projects, type Project } from '../../data/projects'
import { ProjectModal } from '../features/ProjectModal'
import { SectionHeader } from '../ui/SectionHeader'

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)
  const featured = projects.filter((p) => p.featured)

  return (
    <section id="projects" className="section-padding">
      <SectionHeader
        label="Selected works"
        title="Projects that prove impact"
        description="Each case study follows how recruiters evaluate engineering work: problem → solution → measurable results."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {featured.map((project, i) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group glass rounded-xl overflow-hidden hover:border-primary-container/40 transition-all duration-300"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="h-full w-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold text-on-surface">{project.title}</h3>
              <p className="mt-2 font-mono text-xs text-primary-container">{project.impact}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-outline-variant/30 bg-surface-variant/50 px-3 py-1 font-mono text-xs text-on-surface-variant"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-outline-variant/40 px-4 py-2 text-sm hover:border-primary-container/50 hover:text-primary-container transition-colors"
                >
                  <Github size={16} /> GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    className="inline-flex items-center gap-2 rounded-lg border border-outline-variant/40 px-4 py-2 text-sm hover:border-primary-container/50 transition-colors"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setSelected(project)}
                  className="inline-flex items-center gap-2 rounded-lg bg-primary-container/20 text-primary-container px-4 py-2 text-sm hover:bg-primary-container/30 transition-colors"
                >
                  Case study
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects
          .filter((p) => !p.featured)
          .map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -2 }}
              className="glass rounded-xl p-5 flex flex-col sm:flex-row gap-4 cursor-pointer"
              onClick={() => setSelected(project)}
            >
              <img
                src={project.thumbnail}
                alt=""
                className="w-full sm:w-28 h-24 object-cover rounded-lg opacity-70"
              />
              <div>
                <h4 className="font-display font-semibold text-on-surface">{project.title}</h4>
                <p className="text-sm text-on-surface-variant mt-1 line-clamp-2">{project.impact}</p>
              </div>
            </motion.div>
          ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}

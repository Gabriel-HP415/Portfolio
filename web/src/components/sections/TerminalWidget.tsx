import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const LINES = [
  '$ whoami',
  '→ nong-hung-phi',
  '$ cat role.txt',
  '→ Backend Developer Intern',
  '$ skills --list --top 3',
  '→ Java · Spring Boot · MySQL',
  '$ open projects --featured',
  '→ Loading case studies... ✓',
]

export function TerminalWidget() {
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    if (visibleCount >= LINES.length) return
    const t = setTimeout(() => setVisibleCount((c) => c + 1), 600)
    return () => clearTimeout(t)
  }, [visibleCount])

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-8"
    >
      <div className="glass rounded-xl overflow-hidden max-w-2xl mx-auto">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-outline-variant/20 bg-surface-container-lowest">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
          <span className="h-3 w-3 rounded-full bg-green-400/80" />
          <span className="ml-2 font-mono text-xs text-on-surface-variant">phi@portfolio — zsh</span>
        </div>
        <div className="p-4 font-mono text-sm min-h-[180px]">
          {LINES.slice(0, visibleCount).map((line, i) => (
            <p
              key={i}
              className={
                line.startsWith('→')
                  ? 'text-primary-container mb-2'
                  : 'text-on-surface-variant mb-1'
              }
            >
              {line}
            </p>
          ))}
          <span className="inline-block w-2 h-4 bg-primary-container animate-pulse" />
        </div>
      </div>
    </motion.section>
  )
}

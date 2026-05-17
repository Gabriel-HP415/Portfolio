import { marqueeTech } from '../../data/skills'

export function TechMarquee() {
  const items = [...marqueeTech, ...marqueeTech]

  return (
    <section className="overflow-hidden border-y border-outline-variant/10 py-4 bg-surface-container-low/40">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="mx-8 font-mono text-sm text-on-surface-variant/80 flex items-center gap-2"
          >
            <span className="text-primary-container">●</span>
            {tech}
          </span>
        ))}
      </div>
    </section>
  )
}

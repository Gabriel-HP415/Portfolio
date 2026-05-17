import { Database, Layout, Server, Shield, Wrench } from 'lucide-react'
import { skillGroups } from '../../data/skills'
import { GlassCard } from '../ui/GlassCard'
import { SectionHeader } from '../ui/SectionHeader'
import { SkillBar } from '../ui/SkillBar'

const icons: Record<string, typeof Server> = {
  server: Server,
  layout: Layout,
  database: Database,
  wrench: Wrench,
  shield: Shield,
}

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <SectionHeader
        label="Capabilities"
        title="Engineering dashboard"
        description="Honest proficiency levels — focused on backend depth with full-stack awareness."
        icon={<Server className="text-primary-container" size={28} />}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group) => {
          const Icon = icons[group.icon] ?? Server
          return (
            <GlassCard key={group.id}>
              <div className="flex items-center gap-3 mb-5">
                <Icon className="text-secondary" size={20} />
                <h3 className="text-label-caps text-secondary">{group.title}</h3>
              </div>
              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </GlassCard>
          )
        })}
      </div>
    </section>
  )
}

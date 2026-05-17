export type SkillGroup = {
  id: string
  title: string
  icon: string
  skills: { name: string; level: number }[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'backend',
    title: 'Backend',
    icon: 'server',
    skills: [
      { name: 'Java', level: 85 },
      { name: 'Python', level: 82 },
      { name: 'C++', level: 78 },
      { name: 'OOP', level: 88 },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'layout',
    skills: [
      { name: 'HTML/CSS/JS', level: 82 },
      { name: 'ReactJS', level: 70 },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    icon: 'database',
    skills: [
      { name: 'MySQL', level: 78 },
      { name: 'Database Design', level: 72 },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: 'wrench',
    skills: [
      { name: 'Git/GitHub', level: 85 },
      { name: 'Android Development', level: 65 },
    ],
  },
  {
    id: 'security',
    title: 'Networking & Security',
    icon: 'shield',
    skills: [
      { name: 'Networking', level: 68 },
      { name: 'Security', level: 62 },
    ],
  },
]

export const marqueeTech = [
  'Java',
  'Python',
  'C++',
  'MySQL',
  'React',
  'REST',
  'JWT',
  'Git',
  'OOP',
  'Clean Architecture',
  'Docker',
  'Linux',
  'Android',
]

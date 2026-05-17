export type TimelineItem = {
  year: string
  title: string
  subtitle: string
  description: string
  type: 'education' | 'learning' | 'project' | 'cert'
}

export const careerTimeline: TimelineItem[] = [
  {
    year: '2022',
    title: 'IT Foundation',
    subtitle: 'Core CS fundamentals',
    description: 'Mastered OOP, data structures, and programming discipline through structured coursework.',
    type: 'education',
  },
  {
    year: '2023',
    title: 'Backend Focus',
    subtitle: 'Java & Spring Boot',
    description: 'Shifted toward server-side development, REST APIs, and relational database design.',
    type: 'learning',
  },
  {
    year: '2024',
    title: 'Production-Style Projects',
    subtitle: 'Auth, APIs, real-time',
    description: 'Built full-stack features with measurable performance and security requirements.',
    type: 'project',
  },
  {
    year: '2025',
    title: 'Internship Ready',
    subtitle: 'Backend Developer Intern',
    description: 'Targeting roles where I can contribute to scalable services and learn from senior engineers.',
    type: 'cert',
  },
]

export const education = {
  degree: 'Bachelor of Information Technology',
  institution: 'Trường Đại học Giao thông Vận tải TP.HCM',
  institutionShort: 'UTH · HCMC',
  logo: `${import.meta.env.BASE_URL}images/uth-logo.png`,
  period: '2021 — Present',
  focus: 'Software Engineering · Backend Systems',
}

export const coursework = [
  'OOP',
  'Database',
  'Web Programming',
  'Networking',
  'Operating Systems',
  'Security',
  'Cloud Computing',
  'Data Mining',
  'AI',
]

export const aboutPillars = [
  {
    title: 'Problem Solving',
    description: 'Break complex requirements into testable units with clear acceptance criteria.',
    icon: 'puzzle',
  },
  {
    title: 'Backend Mindset',
    description: 'Design for reliability, observability, and maintainable service boundaries.',
    icon: 'cpu',
  },
  {
    title: 'Fast Learner',
    description: 'Ship small iterations, document learnings, and iterate from feedback.',
    icon: 'zap',
  },
  {
    title: 'Teamwork',
    description: 'Communicate trade-offs early and write code others can extend confidently.',
    icon: 'users',
  },
]

export const approachPrinciples = [
  {
    title: 'Clean Architecture',
    description:
      'Separate domain logic from infrastructure. Dependencies point inward — frameworks are details.',
    icon: 'layers',
  },
  {
    title: 'Fail Gracefully',
    description:
      'Design explicit error contracts, timeouts, and degradation paths before scaling traffic.',
    icon: 'shield-check',
  },
  {
    title: 'Measure Impact',
    description:
      'Optimize what you can prove — latency, throughput, and correctness over premature abstraction.',
    icon: 'gauge',
  },
]

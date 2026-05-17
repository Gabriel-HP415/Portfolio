import { publicAsset } from '../lib/assetUrl'
import { profile } from './profile'

export type TimelineItem = {
  year: string
  title: string
  subtitle: string
  description: string
  type: 'education' | 'learning' | 'project' | 'cert'
}

export const careerTimeline: TimelineItem[] = [
  {
    year: '2023',
    title: profile.universityShort,
    subtitle: profile.major,
    description: `Started ${profile.degree} at ${profile.universityEn}.`,
    type: 'education',
  },
  {
    year: '2024',
    title: 'IT Foundation',
    subtitle: 'Core CS fundamentals',
    description: 'OOP, data structures, and programming discipline through coursework at UTH.',
    type: 'education',
  },
  {
    year: '2025',
    title: 'Backend Focus',
    subtitle: 'Java & Spring Boot',
    description: 'Server-side development, REST APIs, and relational database design.',
    type: 'learning',
  },
  {
    year: '2026',
    title: 'Production-Style Projects',
    subtitle: 'Auth, APIs, real-time',
    description: 'Built features with measurable performance and security requirements.',
    type: 'project',
  },
]

export const education = {
  degree: profile.degree,
  institution: profile.university,
  institutionEn: profile.universityEn,
  logo: publicAsset('images/uth-logo.png'),
  period: `${profile.studyStartYear} — Present`,
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

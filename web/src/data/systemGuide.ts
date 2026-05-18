export const SYSTEM_GUIDE_NAME = 'NHP System Guide'

export const SECTION_MESSAGES: Record<string, string> = {
  hero: 'Welcome. Exploring backend engineering portfolio.',
  about: 'Focused on clean architecture and maintainable backend systems.',
  skills: 'Primary focus: backend systems, APIs, databases, and scalable architecture.',
  projects: 'Selected engineering work. Hover a project for architecture notes.',
  approach: 'Layered design, measurable performance, and defensive system boundaries.',
  experience: 'Academic foundation in information technology and systems engineering.',
  github: 'Development rhythm across backend services and applied systems.',
  contact: 'Currently open for internship opportunities and engineering collaboration.',
}

export const PROJECT_INSIGHTS: Record<string, string> = {
  aura: 'Microservices with AI inference pipeline and async retinal screening APIs.',
  'car-rental':
    'PHP booking platform: MySQL relational design, VNPAY payments, realtime availability checks.',
  messzola:
    'Node.js realtime stack — Express REST, WebSocket messaging, WebRTC video, SQLite persistence.',
  hydromate: 'Kotlin Android: Room storage, MVVM state layer, scheduled hydration notifications.',
  skincare:
    'Spring Boot service management — appointments, catalog modules, role-based access in progress.',
}

export const OBSERVED_SECTIONS = [
  'hero',
  'about',
  'skills',
  'projects',
  'approach',
  'experience',
  'github',
  'contact',
] as const

export type ObservedSection = (typeof OBSERVED_SECTIONS)[number]

export const MESSAGE_DISPLAY_MS = 5200
export const SECTION_DEBOUNCE_MS = 400

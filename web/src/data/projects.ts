import realtimeChatThumb from '../assets/projects/realtime-chat.svg'

export type Project = {
  id: string
  title: string
  thumbnail: string
  stack: string[]
  github: string
  demo?: string
  impact: string
  problem: string
  solution: string
  technologies: string
  challenges: string
  results: string
  learned: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'auth-api',
    title: 'JWT Authentication API',
    thumbnail:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    stack: ['Java', 'Spring Boot', 'MySQL', 'JWT'],
    github: 'https://github.com/Gabriel-HP415',
    impact: 'Built authentication system supporting 100+ test users with role-based access.',
    problem:
      'Course management needed secure login without exposing credentials or mixing authorization logic in controllers.',
    solution:
      'Designed a layered Spring Boot API with JWT stateless auth, BCrypt hashing, and refresh token rotation.',
    technologies: 'Spring Security, JPA, MySQL normalized schema (8 tables), RESTful endpoints.',
    challenges: 'Balancing token expiry vs UX; preventing N+1 queries on permission checks.',
    results: 'Reduced login flow latency by 35% after query optimization and connection pooling.',
    learned: 'Security is a system design problem — not a single annotation.',
    featured: true,
  },
  {
    id: 'ecommerce-backend',
    title: 'E-Commerce Backend Service',
    thumbnail:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    stack: ['Java', 'Spring Boot', 'MySQL'],
    github: 'https://github.com/Gabriel-HP415',
    demo: '#',
    impact: 'Implemented order pipeline handling 500+ simulated transactions in load tests.',
    problem: 'Monolithic prototype could not scale product catalog and checkout independently.',
    solution:
      'Developed modular services: catalog, cart, orders with repository pattern and DTO mapping.',
    technologies: 'Spring Data JPA, transactional boundaries, indexed MySQL queries.',
    challenges: 'Race conditions on inventory decrement during concurrent checkouts.',
    results: 'Achieved consistent stock levels using pessimistic locking on critical rows.',
    learned: 'Transactions and isolation levels matter as much as API design.',
    featured: true,
  },
  {
    id: 'realtime-chat',
    title: 'Real-Time Messaging API',
    thumbnail: realtimeChatThumb,
    stack: ['Spring Boot', 'WebSocket', 'MySQL'],
    github: 'https://github.com/Gabriel-HP415',
    impact: 'Delivered sub-200ms message delivery for 50 concurrent WebSocket sessions.',
    problem: 'Polling-based chat caused high server load and delayed message sync.',
    solution: 'Implemented WebSocket gateway with session registry and persistent message store.',
    technologies: 'STOMP over WebSocket, Spring messaging, MySQL message history.',
    challenges: 'Handling reconnections and offline message delivery.',
    results: 'Cut server requests by 80% vs polling baseline in benchmark.',
    learned: 'Real-time systems need explicit failure modes and reconnection contracts.',
    featured: true,
  },
  {
    id: 'network-lab',
    title: 'Network Security Mini Lab',
    thumbnail:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
    stack: ['Java', 'Networking', 'Security'],
    github: 'https://github.com/Gabriel-HP415',
    impact: 'Documented 12 attack vectors with mitigation notes for coursework portfolio.',
    problem: 'Abstract security concepts needed hands-on validation in controlled environment.',
    solution: 'Built packet inspection utilities and firewall rule simulator with logging.',
    technologies: 'Socket programming, TLS basics, structured security checklists.',
    challenges: 'Parsing binary protocols without over-engineering the toolset.',
    results: 'Produced reproducible lab reports used in peer study sessions.',
    learned: 'Defense in depth starts with observability and least privilege.',
  },
  {
    id: 'android-tasks',
    title: 'Android Task Manager',
    thumbnail:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    stack: ['Android', 'SQLite', 'Java'],
    github: 'https://github.com/Gabriel-HP415',
    impact: 'Shipped offline-first app with local persistence for 200+ task records.',
    problem: 'Users needed reliable task tracking without constant network dependency.',
    solution: 'Designed Room/SQLite schema with MVVM and repository abstraction.',
    technologies: 'Android SDK, SQLite, Material Design components.',
    challenges: 'Migrating schema versions without data loss.',
    results: 'Maintained 99.9% crash-free sessions in internal testing.',
    learned: 'Mobile backends begin with disciplined local data modeling.',
  },
]

export const navLinks = [
  { label: 'Capabilities', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Approach', href: '#approach' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
] as const

import { profile } from './profile'

export const commandItems = [
  { id: 'home', label: 'Go to Home', href: '#hero' },
  { id: 'skills', label: 'View Skills', href: '#skills' },
  { id: 'projects', label: 'View Projects', href: '#projects' },
  { id: 'approach', label: 'Engineering Approach', href: '#approach' },
  { id: 'experience', label: 'Experience & Education', href: '#experience' },
  { id: 'contact', label: 'Contact Me', href: '#contact' },
  { id: 'cv', label: 'Download CV', href: profile.cvPath, external: true },
] as const

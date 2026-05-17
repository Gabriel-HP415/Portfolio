import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../../data/profile'

export function Footer() {
  return (
    <footer className="border-t border-outline-variant/10 bg-surface py-16">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <p className="text-label-caps text-on-surface">
          © {new Date().getFullYear()} {profile.name}. Built with precision.
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-6">
          <li>
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 font-mono text-sm text-on-surface-variant hover:text-primary-container transition-colors"
            >
              <Github size={16} /> GitHub
            </a>
          </li>
          <li>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 font-mono text-sm text-on-surface-variant hover:text-primary-container transition-colors"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </li>
          <li>
            <a
              href={profile.social.email}
              className="flex items-center gap-2 font-mono text-sm text-on-surface-variant hover:text-primary-container transition-colors"
            >
              <Mail size={16} /> Email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

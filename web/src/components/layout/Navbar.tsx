import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { profile } from '../../data/profile'
import { navLinks } from '../../data/navigation'
import { Button } from '../ui/Button'

type NavbarProps = {
  onOpenCommand: () => void
}

export function Navbar({ onOpenCommand }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0.5 w-full z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'bg-surface/90 backdrop-blur-xl border-outline-variant/20 shadow-lg shadow-black/10'
          : 'bg-surface/70 backdrop-blur-xl border-outline-variant/10'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        <a href="#hero" className="text-label-caps text-on-surface tracking-widest">
          {profile.tagline}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-on-surface-variant transition-colors hover:text-on-surface hover:bg-surface-variant/20 px-3 py-2 rounded-md"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={onOpenCommand}
            className="hidden lg:inline-flex font-mono text-xs text-on-surface-variant border border-outline-variant/30 rounded px-2 py-1 hover:border-primary-container/50"
          >
            ⌘K
          </button>
        </nav>

        <div className="flex items-center gap-3">
          <Button href="#contact" variant="primary" className="!px-4 !py-2 text-sm hidden sm:inline-flex">
            Connect
          </Button>
          <button
            type="button"
            className="md:hidden text-on-surface p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden border-t border-outline-variant/10 bg-surface-container-low/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="py-3 text-on-surface-variant hover:text-primary-container border-b border-outline-variant/10 last:border-0"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

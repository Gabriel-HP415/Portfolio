import { motion } from 'framer-motion'
import { Download, Mail, Terminal } from 'lucide-react'
import { profile } from '../../data/profile'
import { useTypingEffect } from '../../hooks/useTypingEffect'
import { Button } from '../ui/Button'

const longestPhrase = profile.typingPhrases.reduce((a, b) => (a.length >= b.length ? a : b))

export function Hero() {
  const typed = useTypingEffect(profile.typingPhrases)

  return (
    <section id="hero" className="relative flex min-h-[90vh] flex-col items-center gap-12 pt-28 pb-20 lg:flex-row lg:gap-16 lg:pt-32">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex w-full flex-col items-start gap-6 lg:w-1/2"
      >
        <span className="text-label-caps rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-secondary">
          Backend Engineer Portfolio
        </span>

        <h1 className="font-display text-4xl font-bold leading-tight text-on-surface md:text-6xl lg:text-7xl tracking-tight">
          {profile.name}
        </h1>

        <p className="font-subtitle text-xl font-medium text-primary-container md:text-2xl">
          {profile.role}
        </p>

        <div className="relative max-w-lg w-full border-l-2 border-primary-container pl-4 min-h-[5.5rem] sm:min-h-[3.25rem]">
          <p
            className="text-lg leading-snug text-on-surface-variant invisible select-none pointer-events-none"
            aria-hidden="true"
          >
            {longestPhrase}
          </p>
          <p className="absolute top-0 left-0 pl-4 text-lg leading-snug text-on-surface-variant">
            <span className="font-mono text-primary-container">{'>'} </span>
            <span>{typed}</span>
            <span className="animate-pulse text-primary-container">|</span>
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button href="#projects">View Projects</Button>
          <Button href={profile.cvPath} variant="ghost">
            <Download size={18} /> Download CV
          </Button>
          <Button href="#contact" variant="outline">
            <Mail size={18} /> Contact Me
          </Button>
        </div>

        <p className="font-mono text-sm text-on-surface-variant leading-relaxed max-w-lg">
          <Terminal size={16} className="text-primary-container shrink-0 inline mr-2 align-text-bottom" />
          {profile.major} · {profile.universityShort}
        </p>
        <p className="text-sm text-on-surface-variant/90 max-w-lg leading-snug">
          {profile.university}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative flex h-[380px] w-full items-center justify-center overflow-hidden rounded-xl border border-outline-variant/20 bg-surface-container lg:h-[520px] lg:w-1/2"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container/10 via-transparent to-secondary/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container to-transparent" />

        <div className="relative z-10 flex flex-col items-center gap-6">
          <div className="flex h-36 w-36 items-center justify-center rounded-full border border-primary-container/30 bg-surface/50 shadow-[0_0_60px_rgba(125,211,252,0.15)] backdrop-blur-md">
            <div className="relative">
              <div className="absolute -inset-2 rounded-full border border-dashed border-primary-container/40 animate-spin [animation-duration:20s]" />
              <span className="font-mono text-5xl text-primary-container">{'</>'}</span>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="h-1 w-16 rounded bg-gradient-to-r from-transparent to-primary-container" />
            <div className="h-1 w-16 rounded bg-gradient-to-l from-transparent to-secondary" />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

import { AmbientBackground } from './components/layout/AmbientBackground'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { ScrollProgress } from './components/layout/ScrollProgress'
import { CommandPalette } from './components/features/CommandPalette'
import { ThemeToggle } from './components/features/ThemeToggle'
import { About } from './components/sections/About'
import { Approach } from './components/sections/Approach'
import { Contact } from './components/sections/Contact'
import { Experience } from './components/sections/Experience'
import { GitHubActivity } from './components/sections/GitHubActivity'
import { Hero } from './components/sections/Hero'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { TechMarquee } from './components/sections/TechMarquee'
import { TerminalWidget } from './components/sections/TerminalWidget'
import { useCommandPalette } from './hooks/useCommandPalette'

export default function App() {
  const { open, toggle, close } = useCommandPalette()

  return (
    <>
      <ScrollProgress />
      <AmbientBackground />
      <Navbar onOpenCommand={toggle} />
      <CommandPalette open={open} onClose={close} />
      <ThemeToggle />

      <main className="relative z-10 mx-auto max-w-[1200px] px-6">
        <Hero />
        <TechMarquee />
        <TerminalWidget />
        <About />
        <Skills />
        <Projects />
        <Approach />
        <Experience />
        <GitHubActivity />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

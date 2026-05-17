import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [light, setLight] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('light', light)
  }, [light])

  return (
    <button
      type="button"
      onClick={() => setLight(!light)}
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full glass border border-outline-variant/30 text-on-surface hover:border-primary-container/50 transition-colors"
      aria-label="Toggle theme"
    >
      {light ? <Moon size={20} /> : <Sun size={20} className="text-primary-container" />}
    </button>
  )
}

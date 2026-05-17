import { AnimatePresence, motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { commandItems } from '../../data/navigation'

type CommandPaletteProps = {
  open: boolean
  onClose: () => void
}

export function CommandPalette({ open, onClose }: CommandPaletteProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            className="fixed left-1/2 top-[20%] z-[100] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 glass rounded-xl overflow-hidden shadow-2xl"
          >
            <div className="flex items-center gap-3 border-b border-outline-variant/20 px-4 py-3">
              <Search size={18} className="text-on-surface-variant" />
              <input
                autoFocus
                placeholder="Jump to section..."
                className="flex-1 bg-transparent text-on-surface placeholder:text-on-surface-variant focus:outline-none font-mono text-sm"
              />
              <kbd className="font-mono text-xs text-on-surface-variant border border-outline-variant/30 rounded px-1.5">
                esc
              </kbd>
            </div>
            <ul className="max-h-64 overflow-y-auto py-2">
              {commandItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={onClose}
                    {...('external' in item && item.external
                      ? { target: '_blank', rel: 'noreferrer' }
                      : {})}
                    className="block px-4 py-3 text-sm text-on-surface-variant hover:bg-surface-variant/30 hover:text-primary-container transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

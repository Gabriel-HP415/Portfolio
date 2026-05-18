import { Eye, EyeOff, MessageSquare, MessageSquareOff } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

type GuideControlsProps = {
  open: boolean
  hintsEnabled: boolean
  visible: boolean
  onToggleHints: () => void
  onToggleVisible: () => void
}

export function GuideControls({
  open,
  hintsEnabled,
  visible,
  onToggleHints,
  onToggleVisible,
}: GuideControlsProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          data-system-guide
          initial={{ opacity: 0, y: 6, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 4, scale: 0.97 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-full right-0 mb-2 min-w-[200px] rounded-lg border border-outline-variant/25 bg-surface-container/95 p-1.5 shadow-xl backdrop-blur-xl"
        >
          <p className="px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-on-surface-variant/70">
            Điều khiển
          </p>
          <button
            type="button"
            onClick={onToggleHints}
            className="flex w-full items-center gap-2 rounded-md px-3 py-2.5 font-mono text-[11px] uppercase tracking-wider text-on-surface-variant transition-colors hover:bg-primary-container/10 hover:text-primary-container"
          >
            {hintsEnabled ? <MessageSquareOff size={14} /> : <MessageSquare size={14} />}
            {hintsEnabled ? 'Tắt chú thích' : 'Bật chú thích'}
          </button>
          <button
            type="button"
            onClick={onToggleVisible}
            className="flex w-full items-center gap-2 rounded-md px-3 py-2.5 font-mono text-[11px] uppercase tracking-wider text-on-surface-variant transition-colors hover:bg-primary-container/10 hover:text-primary-container"
          >
            {visible ? <EyeOff size={14} /> : <Eye size={14} />}
            {visible ? 'Ẩn trợ lý' : 'Hiện trợ lý'}
          </button>
          <p className="px-3 pb-1 font-mono text-[9px] leading-relaxed text-on-surface-variant/50">
            {hintsEnabled
              ? 'Chú thích theo từng mục đang bật.'
              : 'Orb vẫn di chuyển nhẹ — không hiện chú thích.'}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

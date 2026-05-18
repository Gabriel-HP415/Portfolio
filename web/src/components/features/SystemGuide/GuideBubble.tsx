import { AnimatePresence, motion } from 'framer-motion'
import { SYSTEM_GUIDE_NAME } from '../../../data/systemGuide'

type GuideBubbleProps = {
  message: string | null
  isTyping: boolean
  visible: boolean
  placement: 'top' | 'bottom' | 'left'
}

export function GuideBubble({ message, isTyping, visible, placement }: GuideBubbleProps) {
  const show = visible && (isTyping || Boolean(message))

  const positionClass =
    placement === 'left'
      ? 'right-full top-1/2 mr-3 -translate-y-1/2'
      : placement === 'top'
        ? 'bottom-full mb-3 right-0'
        : 'top-full mt-3 right-0'

  const motionY =
    placement === 'left' ? { initial: 8, exit: 6 } : placement === 'top' ? { initial: 8, exit: 6 } : { initial: -8, exit: -6 }

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          key={message ?? 'typing'}
          data-system-guide
          initial={{ opacity: 0, x: placement === 'left' ? 10 : 0, y: motionY.initial, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          exit={{ opacity: 0, x: placement === 'left' ? 8 : 0, y: motionY.exit, scale: 0.98 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className={`pointer-events-none absolute z-10 w-[min(260px,calc(100vw-6rem))] ${positionClass}`}
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          <motion.div
            className="glass rounded-xl border border-primary-container/20 px-4 py-3 shadow-lg shadow-black/20"
            style={{
              background:
                'linear-gradient(135deg, rgba(13,28,45,0.85) 0%, rgba(18,33,49,0.75) 100%)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <p className="text-label-caps mb-1.5 text-primary-container/80">{SYSTEM_GUIDE_NAME}</p>
            {isTyping ? (
              <div className="flex items-center gap-1.5 py-1" aria-hidden>
                <span className="system-guide-dot h-1.5 w-1.5 rounded-full bg-primary-container" />
                <span className="system-guide-dot system-guide-dot--2 h-1.5 w-1.5 rounded-full bg-primary-container/70" />
                <span className="system-guide-dot system-guide-dot--3 h-1.5 w-1.5 rounded-full bg-primary-container/40" />
              </div>
            ) : (
              <p className="font-mono text-xs leading-relaxed text-on-surface-variant">{message}</p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

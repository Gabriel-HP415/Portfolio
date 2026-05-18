import { motion } from 'framer-motion'

type GuideOrbProps = {
  active: boolean
  docked: boolean
  minimized: boolean
  onActivate: () => void
}

export function GuideOrb({ active, docked, minimized, onActivate }: GuideOrbProps) {
  const size = minimized || docked ? 40 : 48

  return (
    <motion.button
      type="button"
      data-system-guide
      onClick={onActivate}
      aria-label="NHP System Guide"
      className="relative flex items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-container/60"
      style={{ width: size, height: size }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
    >
      {/* Outer glow */}
      <span
        className={`absolute inset-0 rounded-full transition-opacity duration-700 ${
          active ? 'opacity-100' : 'opacity-40'
        }`}
        style={{
          background:
            'radial-gradient(circle, rgba(125,211,252,0.35) 0%, rgba(206,189,255,0.12) 45%, transparent 70%)',
          filter: 'blur(8px)',
          transform: 'scale(1.8)',
        }}
      />

      {/* Glass shell */}
      <span className="absolute inset-0 rounded-full border border-primary-container/25 bg-surface-container/40 backdrop-blur-xl" />

      {/* Core */}
      <span
        className={`system-guide-core absolute rounded-full ${
          active ? 'system-guide-core--active' : ''
        }`}
        style={{
          width: size * 0.55,
          height: size * 0.55,
          background:
            'radial-gradient(circle at 35% 30%, rgba(197,234,255,0.95), rgba(125,211,252,0.5) 40%, rgba(79,49,156,0.35) 100%)',
          boxShadow:
            '0 0 20px rgba(125,211,252,0.45), inset 0 0 12px rgba(255,255,255,0.15)',
        }}
      />

      {/* Voice wave rings */}
      {active && !minimized && (
        <>
          <span className="system-guide-ring absolute inset-0 rounded-full border border-primary-container/20" />
          <span className="system-guide-ring system-guide-ring--delay absolute inset-0 rounded-full border border-secondary/15" />
        </>
      )}

      {active && (
        <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-primary-container shadow-[0_0_8px_rgba(125,211,252,0.9)]" />
      )}
    </motion.button>
  )
}

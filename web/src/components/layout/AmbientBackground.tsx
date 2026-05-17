import { useMouseGlow } from '../../hooks/useMouseGlow'

const FLOATERS = ['{ }', '</>', 'API', 'SQL', 'JWT', 'REST']

export function AmbientBackground() {
  const { position, enabled } = useMouseGlow()

  return (
  <>
    <div className="fixed inset-0 z-0 pointer-events-none glow-radial" />
    <div className="fixed inset-0 z-0 pointer-events-none grid-bg opacity-60" />
    <div className="fixed inset-0 z-0 pointer-events-none noise-bg" />
    <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary-container/10 rounded-full blur-[120px] pointer-events-none z-0" />
    <div className="fixed bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[100px] pointer-events-none z-0" />

    {enabled && (
      <div
        className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(125,211,252,0.06), transparent 40%)`,
        }}
      />
    )}

    {FLOATERS.map((label, i) => (
      <span
        key={label}
        className="fixed font-mono text-xs text-primary-container/20 pointer-events-none z-0 select-none"
        style={{
          top: `${15 + i * 12}%`,
          left: `${8 + (i % 3) * 28}%`,
          animation: `float ${5 + i}s ease-in-out infinite alternate`,
          animationDelay: `${i * 0.5}s`,
        }}
      >
        {label}
      </span>
    ))}

    <style>{`
      @keyframes float {
        from { transform: translateY(0) rotate(-2deg); }
        to { transform: translateY(-12px) rotate(2deg); }
      }
    `}</style>
  </>
  )
}

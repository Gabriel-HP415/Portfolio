import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'ghost' | 'outline'

type BaseProps = {
  variant?: Variant
  children: ReactNode
  className?: string
}

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type LinkProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

const variants: Record<Variant, string> = {
  primary:
    'bg-primary-container text-on-primary-container shadow-[inset_0_1px_1px_rgba(255,255,255,0.35)] hover:brightness-110',
  ghost: 'border border-outline-variant/50 text-on-surface hover:bg-surface-variant/30',
  outline:
    'border border-secondary/30 text-secondary hover:bg-secondary/10 hover:border-secondary/50',
}

export function Button({
  variant = 'primary',
  children,
  className = '',
  href,
  ...props
}: ButtonProps | LinkProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-all duration-200 ${variants[variant]} ${className}`

  if (href) {
    const { href: _h, ...anchorProps } = props as LinkProps
    return (
      <a href={href} className={classes} {...anchorProps}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}

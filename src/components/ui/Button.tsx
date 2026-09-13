import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

export type ButtonVariant = 'gold' | 'plum' | 'outline-light' | 'outline-dark'

const variants: Record<ButtonVariant, string> = {
  gold: 'bg-gold-400 text-plum-950 hover:bg-gold-200',
  plum: 'bg-plum-900 text-ivory hover:bg-plum-700',
  'outline-light': 'border border-ivory/35 text-ivory hover:border-ivory hover:bg-ivory hover:text-plum-950',
  'outline-dark': 'border border-plum-900/25 text-plum-900 hover:border-plum-900 hover:bg-plum-900 hover:text-ivory',
}

export function buttonClasses(variant: ButtonVariant = 'gold', className?: string) {
  return cn(
    'group inline-flex min-h-13 items-center justify-center gap-3 rounded-[2px] px-7 py-4',
    'text-[0.6875rem] font-semibold uppercase tracking-[0.22em] whitespace-nowrap',
    'transition-[background-color,color,border-color] duration-500 ease-luxe',
    'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400',
    variants[variant],
    className,
  )
}

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant
  icon?: ReactNode
  /** Opens in a new tab (e.g. WhatsApp). */
  external?: boolean
}

/** All site CTAs are links (anchors, tel:, mailto:, wa.me), so the button renders an <a>. */
export function Button({ variant = 'gold', icon, external, className, children, ...rest }: ButtonProps) {
  return (
    <a
      className={buttonClasses(variant, className)}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {icon && (
        <span aria-hidden className="flex size-4 items-center justify-center [&>svg]:size-4">
          {icon}
        </span>
      )}
      <span>{children}</span>
    </a>
  )
}

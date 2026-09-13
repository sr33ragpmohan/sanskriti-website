import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '../../lib/cn'

export type ButtonVariant = 'primary' | 'light' | 'outline' | 'outline-light'

/** Each variant also sets the colour of its hover shine (`before:via-*`). */
const variants: Record<ButtonVariant, string> = {
  primary: 'bg-plum-900 text-ivory hover:bg-plum-700 hover:shadow-[0_14px_28px_-16px_rgba(46,12,37,0.6)] before:via-white/20',
  light: 'bg-ivory text-plum-900 hover:bg-white hover:shadow-[0_14px_28px_-16px_rgba(0,0,0,0.55)] before:via-gold-300/40',
  outline: 'border border-plum-900/20 text-plum-900 hover:border-plum-900/70 before:via-gold-300/35',
  'outline-light': 'border border-ivory/35 text-ivory hover:border-ivory/80 hover:bg-ivory/[0.06] before:via-white/15',
}

export function buttonClasses(variant: ButtonVariant = 'primary', className?: string) {
  return cn(
    'group relative isolate inline-flex h-13 items-center justify-center gap-3 overflow-hidden rounded-[1px] px-7',
    'text-[0.6875rem] font-semibold tracking-[0.22em] whitespace-nowrap uppercase',
    // Hover: a 2px lift, a soft shadow and the colour change, all on one easing.
    'transition-[background-color,color,border-color,box-shadow,translate] duration-500 ease-luxe hover:-translate-y-0.5',
    // Shine: a soft diagonal highlight that sweeps across once, behind the label.
    'before:pointer-events-none before:absolute before:inset-y-0 before:left-0 before:-z-10 before:w-1/2 before:-translate-x-[120%] before:skew-x-[-20deg]',
    'before:bg-linear-to-r before:from-transparent before:to-transparent before:transition-transform before:duration-[1100ms] before:ease-luxe hover:before:translate-x-[260%]',
    'motion-reduce:hover:translate-y-0 motion-reduce:before:hidden',
    'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500',
    variants[variant],
    className,
  )
}

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant
  /** Leading icon (e.g. WhatsApp, phone). */
  icon?: ReactNode
  /** Trailing arrow that nudges on hover. */
  arrow?: boolean
  /** Opens in a new tab (e.g. WhatsApp). */
  external?: boolean
}

/** All site CTAs are links (anchors, tel:, mailto:, wa.me), so the button renders an <a>. */
export function Button({ variant = 'primary', icon, arrow, external, className, children, ...rest }: ButtonProps) {
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
      {arrow && (
        <ArrowRight
          aria-hidden
          strokeWidth={1.5}
          className="size-4 transition-transform duration-500 ease-luxe group-hover:translate-x-1"
        />
      )}
    </a>
  )
}

interface TextLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  tone?: 'dark' | 'light'
}

/** Secondary action: uppercase label with a gold hairline underline and arrow. */
export function TextLink({ tone = 'dark', className, children, ...rest }: TextLinkProps) {
  return (
    <a
      className={cn(
        'group inline-flex items-center gap-3 py-2 text-[0.6875rem] font-semibold tracking-[0.22em] uppercase',
        'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500',
        tone === 'dark' ? 'text-plum-900' : 'text-ivory',
        className,
      )}
      {...rest}
    >
      <span className="relative">
        {children}
        <span
          aria-hidden
          className={cn(
            'absolute inset-x-0 -bottom-1.5 h-px transition-colors duration-500',
            tone === 'dark' ? 'bg-gold-500/60 group-hover:bg-plum-900' : 'bg-gold-300/60 group-hover:bg-ivory',
          )}
        />
      </span>
      <ArrowRight
        aria-hidden
        strokeWidth={1.5}
        className="size-4 transition-transform duration-500 ease-luxe group-hover:translate-x-1"
      />
    </a>
  )
}

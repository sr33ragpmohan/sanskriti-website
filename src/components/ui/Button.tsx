import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '../../lib/cn'

export type ButtonVariant = 'primary' | 'light' | 'outline' | 'outline-light'

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-plum-900 text-ivory hover:bg-plum-700',
  light: 'bg-ivory text-plum-900 hover:bg-white',
  outline: 'border border-plum-900/20 text-plum-900 hover:border-plum-900/70',
  'outline-light': 'border border-ivory/35 text-ivory hover:border-ivory/80 hover:bg-ivory/[0.06]',
}

export function buttonClasses(variant: ButtonVariant = 'primary', className?: string) {
  return cn(
    'group inline-flex h-13 items-center justify-center gap-3 rounded-[1px] px-7',
    'text-[0.6875rem] font-semibold tracking-[0.22em] whitespace-nowrap uppercase',
    'transition-[background-color,color,border-color] duration-500 ease-luxe',
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

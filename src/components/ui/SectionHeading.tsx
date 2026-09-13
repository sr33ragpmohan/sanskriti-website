import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface SectionHeadingProps {
  /** Short uppercase label. May contain responsive spans to shorten it on mobile. */
  eyebrow: ReactNode
  /** Wrap part of the title in <em> for the italic accent. */
  title: ReactNode
  /** Editorial section number, e.g. "01". */
  index?: string
  id?: string
  tone?: 'light' | 'dark'
  /** `center` applies from the lg breakpoint; small screens always read left-aligned. */
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({ eyebrow, title, index, id, tone = 'light', align = 'left', className }: SectionHeadingProps) {
  const dark = tone === 'dark'
  const centered = align === 'center'

  return (
    <div className={cn(centered && 'lg:mx-auto lg:text-center', className)}>
      <p className={cn('flex items-center gap-4', centered && 'lg:justify-center')}>
        {index && (
          <span className={cn('font-serif text-[1.05rem] leading-none italic', dark ? 'text-gold-300' : 'text-gold-600')}>
            {index}
          </span>
        )}
        <span aria-hidden className={cn('h-px w-10 shrink-0', dark ? 'bg-gold-300/50' : 'bg-gold-500/60')} />
        <span className={cn('eyebrow', dark ? 'text-ivory/80' : 'text-plum-700')}>{eyebrow}</span>
      </p>
      <h2
        id={id}
        className={cn(
          'mt-5 font-serif text-[clamp(2.4rem,4.6vw,4rem)] leading-[1.04] font-normal tracking-[-0.015em] sm:mt-6',
          '[&_em]:italic',
          dark ? 'text-ivory [&_em]:text-gold-200' : 'text-plum-900 [&_em]:text-plum-700',
        )}
      >
        {title}
      </h2>
    </div>
  )
}

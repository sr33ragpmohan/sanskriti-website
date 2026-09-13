import type { ReactNode } from 'react'
import { m } from 'framer-motion'
import { cn } from '../../lib/cn'
import { EASE_LUXE, revealMotion } from '../../lib/motion'

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

/**
 * Animates itself on scroll: the eyebrow fades up and its gold hairline draws in,
 * then the heading rises. Sections add their descriptions with a later delay.
 */
export function SectionHeading({ eyebrow, title, index, id, tone = 'light', align = 'left', className }: SectionHeadingProps) {
  const dark = tone === 'dark'
  const centered = align === 'center'

  return (
    <div className={cn(centered && 'lg:mx-auto lg:text-center', className)}>
      <m.p {...revealMotion(0, 12)} className={cn('flex items-center gap-4', centered && 'lg:justify-center')}>
        {index && (
          <span className={cn('font-serif text-[1.05rem] leading-none italic', dark ? 'text-gold-300' : 'text-gold-600')}>
            {index}
          </span>
        )}
        <m.span
          aria-hidden
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '0px 0px -10% 0px' }}
          transition={{ duration: 1.2, ease: EASE_LUXE, delay: 0.15 }}
          className={cn('h-px w-10 shrink-0 origin-left', dark ? 'bg-gold-300/50' : 'bg-gold-500/60')}
        />
        <span className={cn('eyebrow', dark ? 'text-ivory/80' : 'text-plum-700')}>{eyebrow}</span>
      </m.p>
      <m.h2
        {...revealMotion(0.1, 26)}
        id={id}
        className={cn(
          'mt-5 font-serif text-[clamp(2.4rem,4.6vw,4rem)] leading-[1.04] font-normal tracking-[-0.015em] sm:mt-6',
          '[&_em]:italic',
          dark ? 'text-ivory [&_em]:text-gold-200' : 'text-plum-900 [&_em]:text-plum-700',
        )}
      >
        {title}
      </m.h2>
    </div>
  )
}

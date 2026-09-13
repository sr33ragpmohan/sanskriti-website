import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface SectionHeadingProps {
  eyebrow: string
  /** Wrap part of the title in <em> for the italic gold accent. */
  title: ReactNode
  id?: string
  tone?: 'light' | 'dark'
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({ eyebrow, title, id, tone = 'light', align = 'left', className }: SectionHeadingProps) {
  const dark = tone === 'dark'

  return (
    <div className={cn(align === 'center' && 'mx-auto text-center', className)}>
      <p
        className={cn(
          'eyebrow flex items-center gap-4',
          align === 'center' && 'justify-center',
          dark ? 'text-gold-300' : 'text-gold-700',
        )}
      >
        <span aria-hidden className="h-px w-8 bg-current opacity-60" />
        {eyebrow}
      </p>
      <h2
        id={id}
        className={cn(
          'mt-5 font-serif text-[clamp(2.35rem,5vw,4.1rem)] leading-[1.05] font-medium tracking-[-0.01em]',
          '[&_em]:font-normal [&_em]:italic',
          dark ? 'text-ivory [&_em]:text-gold-300' : 'text-plum-900 [&_em]:text-gold-600',
        )}
      >
        {title}
      </h2>
    </div>
  )
}

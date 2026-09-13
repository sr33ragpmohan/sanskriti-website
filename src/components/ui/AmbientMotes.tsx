import type { CSSProperties } from 'react'
import { cn } from '../../lib/cn'

interface Mote {
  left: string
  top: string
  /** Diameter in px. */
  size: number
  /** Seconds for one rise. */
  duration: number
  /** Negative, so motes are already mid-flight on load. */
  delay: number
  /** Sideways drift over one rise, in px. */
  drift: number
}

/** Hand-placed (not random) so prerendered and client markup always match. */
const MOTES: Mote[] = [
  { left: '12%', top: '80%', size: 7, duration: 17, delay: -3, drift: 14 },
  { left: '46%', top: '86%', size: 9, duration: 19, delay: -7, drift: 18 },
  { left: '78%', top: '88%', size: 8, duration: 18, delay: -12, drift: 12 },
  { left: '63%', top: '66%', size: 6, duration: 23, delay: -15, drift: -16 },
  { left: '28%', top: '62%', size: 6, duration: 21, delay: -11, drift: -10 },
  { left: '88%', top: '58%', size: 6, duration: 25, delay: -19, drift: -8 },
  { left: '36%', top: '42%', size: 5, duration: 22, delay: -9, drift: 10 },
  { left: '70%', top: '38%', size: 5, duration: 26, delay: -5, drift: -12 },
]

interface AmbientMotesProps {
  /** `gold` for ivory grounds, `ember` for dark, lamp-lit panels. */
  tone?: 'gold' | 'ember'
  className?: string
}

/**
 * A few slow, warm specks of light rising through the air, like lamp light.
 * Pure CSS (transform + opacity only). Three on phones, none with reduced motion.
 */
export function AmbientMotes({ tone = 'gold', className }: AmbientMotesProps) {
  return (
    <div aria-hidden className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}>
      {MOTES.map((mote, i) => (
        <span
          key={i}
          className={cn('mote', tone === 'ember' ? 'mote-ember' : 'mote-gold', i >= 3 && 'max-md:hidden')}
          style={
            {
              left: mote.left,
              top: mote.top,
              width: mote.size,
              height: mote.size,
              animationDuration: `${mote.duration}s`,
              animationDelay: `${mote.delay}s`,
              '--mote-drift': `${mote.drift}px`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  )
}

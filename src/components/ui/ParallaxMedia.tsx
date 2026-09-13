import { useRef, type ReactNode } from 'react'
import { m, useReducedMotion } from 'framer-motion'
import { useParallax } from '../../hooks/useParallax'
import { cn } from '../../lib/cn'
import type { ImageAsset } from '../../lib/images'
import { EASE_LUXE } from '../../lib/motion'
import { ResponsiveImage } from './ResponsiveImage'

interface ParallaxMediaProps {
  image: ImageAsset
  sizes: string
  widths?: number[]
  /** Frame classes — size/aspect, border, background. The frame always clips. */
  className?: string
  /** Extra <img> classes, e.g. a group-hover zoom. */
  imgClassName?: string
  /** Vertical drift of the photograph inside its frame, in px (keep ~10–30). */
  distance?: number
  /** Unveil with a mask wipe and a slow settle when scrolled into view. */
  reveal?: boolean
  delay?: number
  /** Overlays rendered above the photograph, e.g. a lamp glow. */
  children?: ReactNode
}

/**
 * A photograph that drifts slightly slower than the page inside a fixed frame —
 * the frame never moves, so the layout and composition stay exactly as designed.
 */
export function ParallaxMedia({
  image,
  sizes,
  widths,
  className,
  imgClassName,
  distance = 20,
  reveal = true,
  delay = 0,
  children,
}: ParallaxMediaProps) {
  const frameRef = useRef<HTMLDivElement>(null)
  const y = useParallax(frameRef, distance)
  const reduceMotion = useReducedMotion()
  const bleed = Math.abs(distance)

  return (
    <m.div
      ref={frameRef}
      className={cn('relative overflow-hidden', className)}
      initial={reveal ? 'hidden' : false}
      whileInView="shown"
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      variants={{
        hidden: { clipPath: 'inset(100% 0% 0% 0%)' },
        shown: {
          clipPath: 'inset(0% 0% 0% 0%)',
          transition: { duration: reduceMotion ? 0 : 1.3, ease: EASE_LUXE, delay },
        },
      }}
    >
      {/* Oversized by `bleed` above and below so the drift never exposes an edge. */}
      <m.div
        className="absolute inset-x-0"
        style={{ y, top: -bleed, bottom: -bleed }}
        variants={{
          hidden: { scale: 1.12 },
          shown: { scale: 1, transition: { duration: reduceMotion ? 0 : 1.9, ease: EASE_LUXE, delay } },
        }}
      >
        <ResponsiveImage image={image} sizes={sizes} widths={widths} className={cn('size-full object-cover', imgClassName)} />
      </m.div>
      {children}
    </m.div>
  )
}

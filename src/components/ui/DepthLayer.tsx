import { useRef, type CSSProperties, type ReactNode } from 'react'
import { m } from 'framer-motion'
import { useParallax } from '../../hooks/useParallax'

interface DepthLayerProps {
  /** px; negative moves ahead of the page (closer), positive lags behind (further). */
  distance: number
  /** Only move at or above this viewport width. */
  minWidth?: number
  className?: string
  style?: CSSProperties
  children: ReactNode
}

/** Moves its contents a little faster or slower than the page to layer depth. */
export function DepthLayer({ distance, minWidth, className, style, children }: DepthLayerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const y = useParallax(ref, distance, { minWidth })

  return (
    <m.div ref={ref} className={className} style={{ ...style, y }}>
      {children}
    </m.div>
  )
}

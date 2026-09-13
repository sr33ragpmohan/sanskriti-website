import type { RefObject } from 'react'
import { useScroll, useTransform } from 'framer-motion'
import { useMotionFactor } from './useMotionFactor'

type ScrollOffset = NonNullable<NonNullable<Parameters<typeof useScroll>[0]>['offset']>

const THROUGH_VIEWPORT: ScrollOffset = ['start end', 'end start']
const LEAVING_VIEWPORT: ScrollOffset = ['start start', 'end start']

interface ParallaxOptions {
  /**
   * `through` (default): the offset runs from -distance to +distance while the
   *   element crosses the viewport. Use for content further down the page.
   * `exit`: starts at 0 and reaches +distance as the element scrolls away. Use for
   *   elements visible on load (the hero), so nothing jumps when motion starts.
   */
  mode?: 'through' | 'exit'
  /** Disable below this viewport width, e.g. 1024 for desktop-only layering. */
  minWidth?: number
}

/**
 * Scroll-linked vertical offset in px, applied as a transform. A positive distance
 * makes an element lag behind the page (reads as further away); a negative one
 * makes it lead (closer). Zero with reduced motion; gentler on phones.
 */
export function useParallax(
  target: RefObject<HTMLElement | null>,
  distance: number,
  { mode = 'through', minWidth = 0 }: ParallaxOptions = {},
) {
  const factor = useMotionFactor(minWidth)
  const { scrollYProgress } = useScroll({
    target,
    offset: mode === 'exit' ? LEAVING_VIEWPORT : THROUGH_VIEWPORT,
  })

  return useTransform(scrollYProgress, (progress) => {
    const travel = mode === 'exit' ? progress : progress * 2 - 1
    return travel * distance * factor.current
  })
}

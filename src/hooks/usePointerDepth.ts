import { useEffect } from 'react'
import { useMotionValue, useSpring, useTransform, type MotionValue } from 'framer-motion'

export interface PointerDepth {
  x: MotionValue<number>
  y: MotionValue<number>
}

const SPRING = { stiffness: 40, damping: 18, mass: 0.8 }

/**
 * Smoothed pointer position from -1 to 1 across the viewport, used to layer depth.
 * Listens only on desktop devices with a fine pointer and never when reduced
 * motion is requested — elsewhere both values simply stay at 0.
 */
export function usePointerDepth(): PointerDepth {
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const x = useSpring(rawX, SPRING)
  const y = useSpring(rawY, SPRING)

  useEffect(() => {
    const capable = window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 1024px)')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')

    const onMove = (event: PointerEvent) => {
      if (!capable.matches || reduce.matches) return
      rawX.set((event.clientX / window.innerWidth) * 2 - 1)
      rawY.set((event.clientY / window.innerHeight) * 2 - 1)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [rawX, rawY])

  return { x, y }
}

/** Offsets for one layer, in px. Larger amounts read as closer to the viewer. */
export function useDepthLayer(depth: PointerDepth, amount: number) {
  const x = useTransform(depth.x, (value) => value * amount)
  const y = useTransform(depth.y, (value) => value * amount)
  return { x, y }
}

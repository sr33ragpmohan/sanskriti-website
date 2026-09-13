import { useEffect, useLayoutEffect, useRef } from 'react'

const useIsomorphicLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect

/**
 * Strength multiplier for scroll- and pointer-linked motion. Kept in a ref (not
 * state) so it never changes rendered markup: the prerendered HTML and the first
 * client render both use 0, and motion is switched on after mount.
 *
 *   0   → reduced motion requested, or viewport narrower than `minWidth`
 *   0.6 → phones (gentler movement)
 *   1   → tablet and desktop
 */
export function useMotionFactor(minWidth = 0) {
  const factor = useRef(0)

  useIsomorphicLayoutEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    const allowed = window.matchMedia(`(min-width: ${minWidth}px)`)
    const wide = window.matchMedia('(min-width: 768px)')
    const queries = [reduce, allowed, wide]

    const update = () => {
      factor.current = reduce.matches || !allowed.matches ? 0 : wide.matches ? 1 : 0.6
    }

    update()
    queries.forEach((query) => query.addEventListener('change', update))
    return () => queries.forEach((query) => query.removeEventListener('change', update))
  }, [minWidth])

  return factor
}

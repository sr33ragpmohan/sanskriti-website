/** Shared easing — a slow, soft settle rather than a bounce. */
export const EASE_LUXE = [0.22, 1, 0.36, 1] as const

/** Spread onto any `m.*` element for a restrained fade-up when it scrolls into view. */
export function revealMotion(delay = 0, y = 24) {
  return {
    initial: { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '0px 0px -10% 0px' },
    transition: { duration: 1.05, ease: EASE_LUXE, delay },
  } as const
}

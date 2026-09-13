import { m, type HTMLMotionProps } from 'framer-motion'
import { revealMotion } from '../../lib/motion'

interface RevealProps extends HTMLMotionProps<'div'> {
  delay?: number
}

/** Fades content up once as it enters the viewport. Respects reduced-motion (see App). */
export function Reveal({ delay = 0, children, ...rest }: RevealProps) {
  return (
    <m.div {...revealMotion(delay)} {...rest}>
      {children}
    </m.div>
  )
}

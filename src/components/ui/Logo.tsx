import { site } from '../../config/site'
import { cn } from '../../lib/cn'

interface LogoProps {
  className?: string
  /** Use when the surrounding link/heading already names the brand. */
  decorative?: boolean
}

/** The circular Sanskriti medallion. The source file has a white ground, so it is clipped to a circle. */
export function Logo({ className, decorative = false }: LogoProps) {
  return (
    <img
      src={site.logo.src}
      alt={decorative ? '' : site.logo.alt}
      width={512}
      height={512}
      decoding="async"
      className={cn('rounded-full bg-white object-cover', className)}
    />
  )
}

import type { ImgHTMLAttributes } from 'react'
import { cn } from '../../lib/cn'
import { sizedSrc, srcSetFor, type ImageAsset } from '../../lib/images'

interface ResponsiveImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt' | 'srcSet'> {
  image: ImageAsset
  /** Candidate widths for srcset (remote images only). */
  widths?: number[]
  /** Above-the-fold images: load eagerly with high fetch priority. */
  priority?: boolean
  /** Apply the shared photo grade (default true). */
  graded?: boolean
}

export function ResponsiveImage({
  image,
  widths = [480, 800, 1200, 1600],
  sizes = '100vw',
  priority = false,
  graded = true,
  className,
  style,
  ...rest
}: ResponsiveImageProps) {
  return (
    <img
      src={sizedSrc(image.src, widths[widths.length - 1])}
      srcSet={srcSetFor(image.src, widths)}
      sizes={sizes}
      alt={image.alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : 'auto'}
      className={cn(graded && 'photo-grade', className)}
      style={{ objectPosition: image.position, ...style }}
      {...rest}
    />
  )
}

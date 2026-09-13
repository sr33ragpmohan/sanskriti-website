import type { ImgHTMLAttributes } from 'react'
import { sizedSrc, srcSetFor, type ImageAsset } from '../../lib/images'

interface ResponsiveImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt' | 'srcSet'> {
  image: ImageAsset
  /** Candidate widths for srcset (remote images only). */
  widths?: number[]
  /** Above-the-fold images: load eagerly with high fetch priority. */
  priority?: boolean
}

export function ResponsiveImage({
  image,
  widths = [480, 800, 1200, 1600],
  sizes = '100vw',
  priority = false,
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
      style={{ objectPosition: image.position, ...style }}
      {...rest}
    />
  )
}

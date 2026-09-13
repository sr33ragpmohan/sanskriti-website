export interface ImageAsset {
  /** Local path (e.g. /images/gallery/haldi.jpg) or a remote URL. */
  src: string
  alt: string
  /**
   * true = temporary inspiration imagery, NOT a photograph of a Sanskriti event.
   * Set to false (or remove) once replaced with the company's own photography.
   */
  placeholder?: boolean
  /** Photographer / source credit for placeholder imagery. */
  credit?: string
  /** CSS object-position, for fine-tuning crops. Defaults to centre. */
  position?: string
}

const UNSPLASH_HOST = 'images.unsplash.com'

/** Returns a sized URL for Unsplash images; local images are returned as-is. */
export function sizedSrc(src: string, width: number) {
  if (!src.includes(UNSPLASH_HOST)) return src
  return `${src}?auto=format&fit=crop&w=${width}&q=72`
}

export function srcSetFor(src: string, widths: number[]) {
  if (!src.includes(UNSPLASH_HOST)) return undefined
  return widths.map((w) => `${sizedSrc(src, w)} ${w}w`).join(', ')
}

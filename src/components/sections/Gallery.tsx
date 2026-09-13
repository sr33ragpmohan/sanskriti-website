import { m } from 'framer-motion'
import { galleryItems } from '../../content/images'
import { revealMotion } from '../../lib/motion'
import { Container } from '../ui/Container'
import { ResponsiveImage } from '../ui/ResponsiveImage'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

/**
 * Editorial masonry with captions beneath each photograph. Aspect ratios
 * repeat every six images, so adding photos to `galleryItems` stays balanced.
 */
const aspectPattern = ['4 / 5', '1 / 1', '3 / 4', '3 / 4', '4 / 5', '1 / 1']

export function Gallery() {
  const hasPlaceholders = galleryItems.some((item) => item.image.placeholder)

  return (
    <section id="gallery" aria-labelledby="gallery-title" className="bg-parchment pt-24 pb-16 sm:pt-32 lg:pt-40 lg:pb-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <SectionHeading
              id="gallery-title"
              index="04"
              eyebrow="Weddings & Events"
              title={
                <>
                  Celebrations, <em>beautifully considered.</em>
                </>
              }
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <p className="text-[1.0625rem] leading-[1.8] text-muted">
              Ceremonies, rituals and the quiet moments in between — each shaped by its setting, its traditions and the
              people at its heart.
            </p>
            {hasPlaceholders && (
              <p className="mt-4 text-xs leading-relaxed text-muted/80">
                Imagery shown is for visual inspiration. Photographs from Sanskriti celebrations will be added here.
              </p>
            )}
          </Reveal>
        </div>

        <ul className="mt-14 columns-2 gap-4 sm:gap-6 lg:mt-20 lg:columns-3 lg:gap-10">
          {galleryItems.map((item, i) => (
            // Opacity-only reveal: transforms inside CSS columns can render unevenly.
            <m.li key={item.image.src} {...revealMotion((i % 3) * 0.08, 0)} className="mb-8 break-inside-avoid lg:mb-12">
              <figure className="group">
                <div className="overflow-hidden bg-sand" style={{ aspectRatio: aspectPattern[i % aspectPattern.length] }}>
                  <ResponsiveImage
                    image={item.image}
                    sizes="(min-width: 1024px) 30vw, 50vw"
                    widths={[400, 700, 1000]}
                    className="size-full object-cover transition-transform duration-[1400ms] ease-luxe group-hover:scale-[1.04]"
                  />
                </div>
                <figcaption className="mt-3 flex items-baseline justify-between gap-3 border-b border-plum-900/10 pb-3">
                  <span className="font-serif text-[1.05rem] text-plum-900 italic sm:text-[1.2rem]">{item.caption}</span>
                  <span aria-hidden className="text-[0.65rem] font-semibold tracking-[0.2em] text-gold-600">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </figcaption>
              </figure>
            </m.li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

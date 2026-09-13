import type { CSSProperties } from 'react'
import { m } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { galleryItems } from '../../content/images'
import { revealMotion } from '../../lib/motion'
import { Container } from '../ui/Container'
import { ResponsiveImage } from '../ui/ResponsiveImage'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

/**
 * Phones: a swipeable, edge-to-edge row of large portrait photographs.
 * md+: editorial masonry. Aspect ratios repeat every six images, so adding
 * photos to `galleryItems` stays balanced.
 */
const aspectPattern = ['4 / 5', '1 / 1', '3 / 4', '3 / 4', '4 / 5', '1 / 1']

export function Gallery() {
  const hasPlaceholders = galleryItems.some((item) => item.image.placeholder)

  return (
    <section id="gallery" aria-labelledby="gallery-title" className="bg-parchment pt-20 pb-16 sm:pt-32 lg:pt-40 lg:pb-24">
      <Container>
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-12 lg:items-end">
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
            <p className="text-[1.0625rem] leading-[1.75] text-muted sm:leading-[1.8]">
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

        <ul
          className={
            'no-scrollbar mt-10 -mx-6 flex snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto px-6 ' +
            'sm:-mx-10 sm:mt-14 sm:scroll-px-10 sm:px-10 ' +
            'md:mx-0 md:block md:columns-2 md:gap-6 md:overflow-visible md:px-0 ' +
            'lg:mt-20 lg:columns-3 lg:gap-10'
          }
        >
          {galleryItems.map((item, i) => (
            // Opacity-only reveal: transforms inside CSS columns can render unevenly.
            <m.li
              key={item.image.src}
              {...revealMotion((i % 3) * 0.08, 0)}
              className="w-[80%] shrink-0 snap-start sm:w-[46%] md:mb-8 md:w-auto md:break-inside-avoid lg:mb-12"
            >
              <figure className="group">
                <div
                  className="aspect-[4/5] overflow-hidden bg-sand md:aspect-(--tile-ratio)"
                  style={{ '--tile-ratio': aspectPattern[i % aspectPattern.length] } as CSSProperties}
                >
                  <ResponsiveImage
                    image={item.image}
                    sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 80vw"
                    widths={[400, 700, 1000]}
                    className="size-full object-cover transition-transform duration-[1400ms] ease-luxe group-hover:scale-[1.04]"
                  />
                </div>
                <figcaption className="mt-3 flex items-baseline justify-between gap-3 border-b border-plum-900/10 pb-3">
                  <span className="font-serif text-[1.2rem] text-plum-900 italic">{item.caption}</span>
                  <span aria-hidden className="text-[0.65rem] font-semibold tracking-[0.2em] text-gold-600">
                    {String(i + 1).padStart(2, '0')}
                    <span className="text-muted/70 md:hidden"> / {String(galleryItems.length).padStart(2, '0')}</span>
                  </span>
                </figcaption>
              </figure>
            </m.li>
          ))}
        </ul>

        <p aria-hidden className="eyebrow mt-6 flex items-center gap-3 text-muted md:hidden">
          Swipe to explore
          <ArrowRight strokeWidth={1.5} className="size-4" />
        </p>
      </Container>
    </section>
  )
}

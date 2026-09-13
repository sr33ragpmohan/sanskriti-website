import type { CSSProperties } from 'react'
import { ArrowRight } from 'lucide-react'
import { galleryImages } from '../../content/images'
import { Container } from '../ui/Container'
import { DepthLayer } from '../ui/DepthLayer'
import { ParallaxMedia } from '../ui/ParallaxMedia'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

/**
 * Phones: a swipeable, edge-to-edge row of large portrait photographs.
 * md+: editorial masonry. Aspect ratios repeat every six images, so adding
 * photos to `galleryImages` stays balanced.
 *
 * Motion: tiles unveil column by column with a mask wipe; each photograph
 * drifts inside its frame at its own speed, and on desktop the middle column
 * moves slightly ahead of the page for layered depth.
 */
const aspectPattern = ['4 / 5', '1 / 1', '3 / 4', '3 / 4', '4 / 5', '1 / 1']
/** Inner drift per tile, in px — varied so neighbouring photographs never move in lockstep. */
const driftPattern = [18, 30, 26, 14, 32, 20]

export function Gallery() {
  const hasPlaceholders = galleryImages.some((image) => image.placeholder)

  return (
    <section id="gallery" aria-labelledby="gallery-title" className="bg-parchment pt-20 pb-16 sm:pt-32 lg:pt-40 lg:pb-24">
      <Container>
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
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
          </div>
          <Reveal delay={0.2} className="lg:col-span-4 lg:col-start-9">
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
          {galleryImages.map((image, i) => {
            const inMiddleColumn = i === 2 || i === 3
            return (
              <li
                key={image.src}
                className="group w-[80%] shrink-0 snap-start sm:w-[46%] md:mb-6 md:w-auto md:break-inside-avoid lg:mb-10"
                style={{ '--tile-ratio': aspectPattern[i % aspectPattern.length] } as CSSProperties}
              >
                <DepthLayer distance={inMiddleColumn ? -22 : 0} minWidth={1024}>
                  <ParallaxMedia
                    image={image}
                    sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 80vw"
                    widths={[400, 700, 1000]}
                    distance={driftPattern[i % driftPattern.length]}
                    delay={Math.floor(i / 2) * 0.15}
                    className="aspect-[4/5] bg-sand md:aspect-(--tile-ratio)"
                    imgClassName="transition-transform duration-[1600ms] ease-luxe group-hover:scale-[1.04]"
                  />
                </DepthLayer>
              </li>
            )
          })}
        </ul>

        <p aria-hidden className="eyebrow mt-6 flex items-center gap-3 text-muted md:hidden">
          Swipe to explore
          <ArrowRight strokeWidth={1.5} className="size-4" />
        </p>
      </Container>
    </section>
  )
}

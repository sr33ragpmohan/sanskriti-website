import { m } from 'framer-motion'
import { galleryItems } from '../../content/images'
import { cn } from '../../lib/cn'
import { revealMotion } from '../../lib/motion'
import { Container } from '../ui/Container'
import { ResponsiveImage } from '../ui/ResponsiveImage'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

/**
 * Editorial mosaic. The pattern repeats every six images, so adding more
 * photos to `galleryItems` keeps the layout balanced.
 */
const tileLayout = [
  { className: 'col-span-2 row-span-2 lg:col-span-7', sizes: '(min-width: 1024px) 58vw, 100vw' },
  { className: 'lg:col-span-5', sizes: '(min-width: 1024px) 42vw, 50vw' },
  { className: 'lg:col-span-5', sizes: '(min-width: 1024px) 42vw, 50vw' },
  { className: 'lg:col-span-4', sizes: '(min-width: 1024px) 33vw, 50vw' },
  { className: 'lg:col-span-4', sizes: '(min-width: 1024px) 33vw, 50vw' },
  { className: 'col-span-2 lg:col-span-4', sizes: '(min-width: 1024px) 33vw, 100vw' },
]

export function Gallery() {
  const hasPlaceholders = galleryItems.some((item) => item.image.placeholder)

  return (
    <section id="gallery" aria-labelledby="gallery-title" className="bg-ivory py-24 sm:py-32 lg:py-40">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <SectionHeading
              id="gallery-title"
              eyebrow="Weddings & Events"
              title={
                <>
                  Celebrations, <em>beautifully considered.</em>
                </>
              }
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="leading-relaxed text-muted lg:text-lg">
              Ceremonies, receptions and the moments in between — each one shaped by its setting, its traditions and
              the people at its heart.
            </p>
            {hasPlaceholders && (
              <p className="mt-4 text-xs tracking-wide text-muted/80">
                Imagery shown is for visual inspiration. Photographs from Sanskriti celebrations will be added here.
              </p>
            )}
          </Reveal>
        </div>

        <ul className="mt-14 grid auto-rows-[11rem] grid-cols-2 gap-3 sm:auto-rows-[15rem] sm:gap-4 lg:mt-20 lg:auto-rows-[17rem] lg:grid-cols-12">
          {galleryItems.map((item, i) => {
            const tile = tileLayout[i % tileLayout.length]
            return (
              <m.li
                key={item.image.src}
                {...revealMotion((i % 3) * 0.08)}
                className={cn('group relative overflow-hidden bg-sand', tile.className)}
              >
                <figure className="size-full">
                  <ResponsiveImage
                    image={item.image}
                    sizes={tile.sizes}
                    widths={[400, 700, 1000, 1400]}
                    className="size-full object-cover transition-transform duration-[1400ms] ease-luxe group-hover:scale-[1.045]"
                  />
                  <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-plum-950/70 to-transparent px-5 pt-16 pb-4 text-ivory transition-opacity duration-500 lg:opacity-0 lg:group-hover:opacity-100">
                    <span className="eyebrow">{item.caption}</span>
                  </figcaption>
                </figure>
              </m.li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}

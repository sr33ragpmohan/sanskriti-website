import { images } from '../../content/images'
import { site } from '../../config/site'
import { Button, TextLink } from '../ui/Button'
import { Container } from '../ui/Container'
import { Logo } from '../ui/Logo'
import { LotusMark } from '../ui/Lotus'
import { ResponsiveImage } from '../ui/ResponsiveImage'

/**
 * Editorial split hero: large serif headline beside an arch-framed image
 * (the arch echoes temple doorways; the overlapping medallion is the logo).
 * DOM order is headline → image → copy, so mobile reads naturally; on desktop
 * the image spans both text rows. Entrance animations are CSS (index.css).
 */
export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden bg-ivory pt-24 pb-20 sm:pt-28 lg:pt-28 lg:pb-24">
      <Container className="grid gap-y-14 lg:min-h-[calc(100svh-8rem)] lg:grid-cols-12 lg:grid-rows-[1fr_auto] lg:gap-x-10 lg:gap-y-0">
        <div className="pt-6 lg:col-span-7 lg:row-start-1 lg:self-end lg:pt-0">
          <p className="hero-rise flex items-center gap-4" style={{ animationDelay: '100ms' }}>
            <LotusMark className="h-4 w-7 shrink-0 text-gold-500" />
            <span className="eyebrow text-plum-700 sm:hidden">
              {site.location.city} · {site.location.region}
            </span>
            <span className="eyebrow hidden text-plum-700 sm:inline">
              {site.tagline} · {site.location.city}
            </span>
          </p>

          <h1
            id="hero-title"
            className="hero-rise mt-7 font-serif text-[clamp(3.2rem,8vw,6.9rem)] leading-[0.92] font-normal tracking-[-0.025em] text-plum-900"
            style={{ animationDelay: '220ms' }}
          >
            <span className="block">Your Moment.</span>{' '}
            <span className="block text-plum-700 italic">Perfectly</span>{' '}
            <span className="block pl-[0.9em] text-plum-700 italic">Planned.</span>
          </h1>
        </div>

        <div className="relative lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1 lg:self-center">
          <div className="relative isolate mx-auto w-[86%] max-w-[26rem] sm:max-w-[28rem] lg:w-full lg:max-w-none">
            <div
              aria-hidden
              className="hero-rise absolute inset-0 -z-10 translate-x-3 -translate-y-3 rounded-t-full border border-gold-500/45 sm:translate-x-5 sm:-translate-y-5"
              style={{ animationDelay: '700ms' }}
            />
            <div className="hero-arch aspect-[4/5] overflow-hidden rounded-t-full bg-sand lg:aspect-auto lg:h-[min(40rem,70svh)]">
              <ResponsiveImage
                image={images.hero}
                priority
                sizes="(min-width: 1024px) 40vw, 86vw"
                widths={[480, 720, 960, 1280, 1600]}
                className="hero-settle size-full object-cover"
              />
            </div>
            <div
              className="hero-rise absolute -bottom-9 -left-6 rounded-full bg-ivory p-1.5 shadow-[0_18px_40px_-18px_rgba(46,12,37,0.45)] sm:-left-10 lg:bottom-14 lg:-left-14"
              style={{ animationDelay: '900ms' }}
            >
              <Logo className="size-22 sm:size-28" />
            </div>
          </div>
          <p
            className="hero-rise eyebrow mt-8 hidden justify-end gap-3 text-muted lg:flex"
            style={{ animationDelay: '1000ms' }}
          >
            Planning <span className="text-gold-500">·</span> Design <span className="text-gold-500">·</span> Coordination
          </p>
        </div>

        <div className="lg:col-span-6 lg:row-start-2 lg:pt-10">
          <p className="hero-rise max-w-md text-[1.0625rem] leading-[1.8] text-muted" style={{ animationDelay: '380ms' }}>
            From intimate celebrations to grand weddings, Sanskriti brings together planning, design and seamless event
            coordination to create celebrations worth remembering.
          </p>
          <div
            className="hero-rise mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-9"
            style={{ animationDelay: '520ms' }}
          >
            <Button href="#contact" variant="primary" arrow>
              Plan Your Event
            </Button>
            <TextLink href="#services">Explore Our Services</TextLink>
          </div>
        </div>
      </Container>
    </section>
  )
}

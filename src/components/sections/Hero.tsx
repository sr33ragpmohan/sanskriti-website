import { ArrowRight } from 'lucide-react'
import { images } from '../../content/images'
import { site } from '../../config/site'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { ResponsiveImage } from '../ui/ResponsiveImage'

const pillars = ['Planning', 'Design', 'Coordination']

/** Hero entrance uses CSS keyframes (index.css) so it plays before hydration. */
export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-plum-950 text-ivory"
    >
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <ResponsiveImage
          image={images.hero}
          priority
          sizes="100vw"
          widths={[640, 960, 1440, 1920, 2400]}
          className="hero-settle size-full object-cover"
        />
      </div>
      <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-t from-plum-950 via-plum-950/55 to-plum-950/35" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-r from-plum-950/80 via-plum-950/25 to-transparent" />
      {/* Keeps the transparent navigation legible over bright image areas. */}
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-44 bg-linear-to-b from-plum-950/70 to-transparent" />

      <Container className="pt-36 pb-10 sm:pb-14 lg:pb-16">
        <div className="max-w-[46rem]">
          <p className="hero-rise eyebrow flex items-center gap-4 text-gold-300" style={{ animationDelay: '150ms' }}>
            <span aria-hidden className="h-px w-10 bg-gold-400/70" />
            <span className="sm:hidden">
              {site.location.city} · {site.location.region}
            </span>
            <span className="hidden sm:inline">
              {site.tagline} · {site.location.city}
            </span>
          </p>

          <h1
            id="hero-title"
            className="hero-rise mt-6 font-serif text-[clamp(2.9rem,10.5vw,6.75rem)] leading-[0.98] font-medium tracking-[-0.015em]"
            style={{ animationDelay: '300ms' }}
          >
            Your Moment.{' '}
            <span className="block font-normal text-gold-200 italic">Perfectly Planned.</span>
          </h1>

          <p
            className="hero-rise mt-7 max-w-xl text-[1.0625rem] leading-relaxed text-ivory/80 sm:text-lg"
            style={{ animationDelay: '480ms' }}
          >
            From intimate celebrations to grand weddings, Sanskriti brings together planning, design and seamless event
            coordination to create celebrations worth remembering.
          </p>

          <div className="hero-rise mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4" style={{ animationDelay: '640ms' }}>
            <Button href="#contact" variant="gold" icon={<ArrowRight />}>
              Plan Your Event
            </Button>
            <Button href="#services" variant="outline-light">
              Explore Our Services
            </Button>
          </div>
        </div>

        <div
          className="hero-rise mt-16 hidden items-center justify-between border-t border-ivory/15 pt-6 md:flex"
          style={{ animationDelay: '900ms' }}
        >
          <ul className="eyebrow flex items-center gap-6 text-ivory/60">
            {pillars.map((pillar, i) => (
              <li key={pillar} className="flex items-center gap-6">
                {i > 0 && <span aria-hidden className="size-1 rotate-45 bg-gold-400/70" />}
                {pillar}
              </li>
            ))}
          </ul>
          <a href="#about" className="eyebrow flex items-center gap-4 text-ivory/60 transition-colors hover:text-ivory">
            Scroll
            <span aria-hidden className="relative h-10 w-px overflow-hidden bg-ivory/20">
              <span className="scroll-cue absolute inset-0 bg-gold-300" />
            </span>
          </a>
        </div>
      </Container>
    </section>
  )
}

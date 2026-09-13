import { Phone } from 'lucide-react'
import { images } from '../../content/images'
import { telHref, whatsappHref } from '../../lib/contact-links'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { LotusMark } from '../ui/Lotus'
import { ResponsiveImage } from '../ui/ResponsiveImage'
import { Reveal } from '../ui/Reveal'
import { WhatsAppIcon } from '../ui/WhatsAppIcon'

/** An inset photographic panel that bridges the parchment gallery and the ivory contact section. */
export function CallToAction() {
  return (
    <section
      aria-labelledby="cta-title"
      className="bg-[linear-gradient(to_bottom,var(--color-parchment)_50%,var(--color-ivory)_50%)]"
    >
      <Container>
        {/* Edge-to-edge on phones; an inset panel from sm up. */}
        <Reveal className="relative isolate -mx-6 overflow-hidden bg-plum-950 px-6 py-16 text-center text-ivory sm:mx-0 sm:px-12 sm:py-24 lg:py-32">
          <ResponsiveImage
            image={images.cta}
            sizes="(min-width: 1344px) 1232px, 100vw"
            widths={[640, 1024, 1600, 2200]}
            className="absolute inset-0 -z-20 size-full object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(29,8,23,0.62)_0%,rgba(29,8,23,0.8)_100%)]"
          />

          <LotusMark className="mx-auto h-6 w-11 text-gold-300" />
          <h2
            id="cta-title"
            className="mx-auto mt-8 max-w-3xl font-serif text-[clamp(2.5rem,5.6vw,4.75rem)] leading-[1.02] font-normal tracking-[-0.015em]"
          >
            Let’s Create Something <em className="text-gold-200 italic">Beautiful.</em>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-[1.0625rem] leading-[1.8] text-ivory/75">
            Tell us about your wedding or event, and let’s start planning a celebration that feels uniquely yours.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button href={whatsappHref()} external variant="light" icon={<WhatsAppIcon />} className="w-full sm:w-auto">
              WhatsApp Us
            </Button>
            <Button href={telHref()} variant="outline-light" icon={<Phone />} className="w-full sm:w-auto">
              Call Us
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

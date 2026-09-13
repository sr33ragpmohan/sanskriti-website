import { Phone } from 'lucide-react'
import { images } from '../../content/images'
import { telHref, whatsappHref } from '../../lib/contact-links'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { Logo } from '../ui/Logo'
import { ResponsiveImage } from '../ui/ResponsiveImage'
import { Reveal } from '../ui/Reveal'
import { WhatsAppIcon } from '../ui/WhatsAppIcon'

export function CallToAction() {
  return (
    <section aria-labelledby="cta-title" className="relative isolate overflow-hidden bg-plum-950 text-ivory">
      <ResponsiveImage
        image={images.cta}
        sizes="100vw"
        widths={[640, 1024, 1600, 2200]}
        className="absolute inset-0 -z-20 size-full object-cover opacity-70"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-plum-950/55" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-plum-950)_85%)]"
      />

      <Container className="py-28 text-center sm:py-36 lg:py-44">
        <Reveal className="mx-auto max-w-3xl">
          <div className="inline-block rounded-full border border-gold-300/35 p-1.5">
            <Logo decorative className="size-20" />
          </div>
          <h2
            id="cta-title"
            className="mt-10 font-serif text-[clamp(2.6rem,6.5vw,5.25rem)] leading-[1.02] font-medium tracking-[-0.01em]"
          >
            Let’s Create Something <em className="font-normal text-gold-200 italic">Beautiful.</em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ivory/75">
            Tell us about your wedding or event, and let’s start planning a celebration that feels uniquely yours.
          </p>
          <div className="mt-11 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <Button href={whatsappHref()} external variant="gold" icon={<WhatsAppIcon />}>
              WhatsApp Us
            </Button>
            <Button href={telHref()} variant="outline-light" icon={<Phone />}>
              Call Us
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

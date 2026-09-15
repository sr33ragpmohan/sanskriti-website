import { useRef } from 'react'
import { m } from 'framer-motion'
import { Phone } from 'lucide-react'
import { images } from '../../content/images'
import { useParallax } from '../../hooks/useParallax'
import { telHref, whatsappHref } from '../../lib/contact-links'
import { revealMotion } from '../../lib/motion'
import { useContactChooser } from '../contact/ContactChooser'
import { AmbientMotes } from '../ui/AmbientMotes'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { LotusMark } from '../ui/Lotus'
import { ResponsiveImage } from '../ui/ResponsiveImage'
import { WhatsAppIcon } from '../ui/WhatsAppIcon'

/**
 * An inset photographic panel that bridges the parchment gallery and the ivory
 * contact section. The lamp photograph drifts behind the panel, a warm glow
 * breathes over it and a few specks of lamp light rise; the copy arrives in turn.
 */
export function CallToAction() {
  const chooseNumber = useContactChooser()
  const panelRef = useRef<HTMLDivElement>(null)
  const backdropDrift = useParallax(panelRef, 28)

  return (
    <section
      aria-labelledby="cta-title"
      className="bg-[linear-gradient(to_bottom,var(--color-parchment)_50%,var(--color-ivory)_50%)]"
    >
      <Container>
        {/* Edge-to-edge on phones; an inset panel from sm up. */}
        <m.div
          ref={panelRef}
          {...revealMotion(0, 28)}
          className="relative isolate -mx-6 overflow-hidden bg-plum-950 px-6 py-16 text-center text-ivory sm:mx-0 sm:px-12 sm:py-24 lg:py-32"
        >
          <m.div aria-hidden className="absolute inset-x-0 -top-10 -bottom-10 -z-20" style={{ y: backdropDrift }}>
            <ResponsiveImage
              image={images.cta}
              sizes="(min-width: 1344px) 1232px, 100vw"
              widths={[640, 1024, 1600, 2200]}
              className="size-full object-cover"
            />
          </m.div>
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(29,8,23,0.62)_0%,rgba(29,8,23,0.8)_100%)]"
          />
          <div
            aria-hidden
            className="glow-breathe absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_90%,rgba(237,190,120,0.2),transparent_60%)]"
          />
          <AmbientMotes tone="ember" className="-z-10" />

          <LotusMark className="float-soft mx-auto h-6 w-11 text-gold-300" />
          <m.h2
            {...revealMotion(0.15, 24)}
            id="cta-title"
            className="mx-auto mt-8 max-w-3xl font-serif text-[clamp(2.5rem,5.6vw,4.75rem)] leading-[1.02] font-normal tracking-[-0.015em]"
          >
            Let’s Create Something <em className="text-gold-200 italic">Beautiful.</em>
          </m.h2>
          <m.p {...revealMotion(0.3, 18)} className="mx-auto mt-6 max-w-lg text-[1.0625rem] leading-[1.8] text-ivory/75">
            Tell us about your wedding or event, and let’s start planning a celebration that feels uniquely yours.
          </m.p>
          <m.div
            {...revealMotion(0.42, 14)}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          >
            <Button
              href={whatsappHref()}
              external
              variant="light"
              icon={<WhatsAppIcon />}
              onClick={chooseNumber('whatsapp')}
              className="w-full sm:w-auto"
            >
              WhatsApp Us
            </Button>
            <Button
              href={telHref()}
              variant="outline-light"
              icon={<Phone />}
              onClick={chooseNumber('call')}
              className="w-full sm:w-auto"
            >
              Call Us
            </Button>
          </m.div>
        </m.div>
      </Container>
    </section>
  )
}

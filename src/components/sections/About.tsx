import { m } from 'framer-motion'
import { aboutParagraphs, principles } from '../../content/about'
import { images } from '../../content/images'
import { revealMotion } from '../../lib/motion'
import { Container } from '../ui/Container'
import { Logo } from '../ui/Logo'
import { ResponsiveImage } from '../ui/ResponsiveImage'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-ivory py-24 sm:py-32 lg:py-40">
      <Container className="grid items-center gap-20 lg:grid-cols-12 lg:gap-16 xl:gap-24">
        <Reveal className="relative isolate mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
          <div aria-hidden className="absolute -top-4 -left-4 -z-10 size-full border border-gold-500/40 sm:-top-6 sm:-left-6" />
          <div className="aspect-[4/5] overflow-hidden bg-sand">
            <ResponsiveImage
              image={images.about}
              sizes="(min-width: 1024px) 38vw, 90vw"
              widths={[480, 720, 960, 1280]}
              className="size-full object-cover"
            />
          </div>
          <div className="absolute -right-3 -bottom-10 rounded-full bg-ivory p-1.5 shadow-[0_24px_60px_-24px_rgba(53,10,44,0.5)] sm:-right-10">
            <Logo className="size-24 sm:size-32" />
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <SectionHeading
              id="about-title"
              eyebrow="About Sanskriti"
              title={
                <>
                  One thoughtful partner for <em>every part of your celebration.</em>
                </>
              }
            />
          </Reveal>

          <Reveal delay={0.1} className="mt-8 space-y-5 text-[1.0625rem] leading-relaxed text-muted">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>

          <ul className="mt-12 grid gap-x-10 gap-y-7 border-t border-plum-900/10 pt-10 sm:grid-cols-2">
            {principles.map((principle, i) => (
              <m.li key={principle.title} {...revealMotion(0.04 * i, 16)} className="flex gap-4">
                <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rotate-45 bg-gold-500" />
                <div>
                  <h3 className="font-serif text-[1.35rem] leading-snug font-medium text-plum-900">{principle.title}</h3>
                  <p className="mt-1 text-[0.9375rem] leading-relaxed text-muted">{principle.description}</p>
                </div>
              </m.li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}

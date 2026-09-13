import { m } from 'framer-motion'
import { aboutParagraphs, principles } from '../../content/about'
import { images } from '../../content/images'
import { revealMotion } from '../../lib/motion'
import { Container } from '../ui/Container'
import { Ornament } from '../ui/Lotus'
import { ResponsiveImage } from '../ui/ResponsiveImage'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-ivory pb-28 sm:pb-32 lg:pb-40">
      <Container>
        <Ornament className="text-gold-500" />

        <div className="mt-20 grid gap-24 lg:mt-28 lg:grid-cols-12 lg:gap-12">
          {/* Editorial pair: portrait with an inset detail image. */}
          <Reveal className="relative self-start lg:col-span-5 lg:mt-4">
            <div className="aspect-[3/4] w-[80%] overflow-hidden bg-sand">
              <ResponsiveImage
                image={images.about}
                sizes="(min-width: 1024px) 32vw, 80vw"
                widths={[480, 720, 960, 1280]}
                className="size-full object-cover"
              />
            </div>
            <div className="absolute right-0 -bottom-16 aspect-[4/5] w-[50%] overflow-hidden border-[6px] border-ivory bg-sand sm:border-8">
              <ResponsiveImage
                image={images.aboutDetail}
                sizes="(min-width: 1024px) 20vw, 50vw"
                widths={[320, 560, 800]}
                className="size-full object-cover"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7 lg:pt-4">
            <Reveal>
              <SectionHeading
                id="about-title"
                index="01"
                eyebrow="About Sanskriti"
                title={
                  <>
                    One thoughtful partner for <em>every part of your celebration.</em>
                  </>
                }
              />
            </Reveal>

            <Reveal delay={0.1} className="mt-8 max-w-xl space-y-5 text-[1.0625rem] leading-[1.8] text-muted">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </Reveal>

            <ul className="mt-14 grid gap-x-10 sm:grid-cols-2">
              {principles.map((principle, i) => (
                <m.li key={principle.title} {...revealMotion(0.04 * i, 12)} className="border-t border-plum-900/10 py-5">
                  <h3 className="font-serif text-[1.3rem] leading-snug text-plum-900">{principle.title}</h3>
                  <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted">{principle.description}</p>
                </m.li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}

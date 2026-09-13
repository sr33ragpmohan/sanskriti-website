import { m } from 'framer-motion'
import { guruvayoorIntro, principles } from '../../content/about'
import { images } from '../../content/images'
import { revealMotion } from '../../lib/motion'
import { Container } from '../ui/Container'
import { LotusMark, Ornament } from '../ui/Lotus'
import { ResponsiveImage } from '../ui/ResponsiveImage'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

/**
 * Opening section: the Guruvayoor wedding story and Sanskriti's promise.
 * Mobile reads heading → story → promise → photographs → principles.
 * Desktop places the photographs in the left column beside both text blocks.
 */
export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-ivory pb-20 sm:pb-32 lg:pb-40">
      <Container>
        <Ornament className="text-gold-500" />

        <div className="mt-14 grid gap-y-14 sm:mt-20 lg:mt-28 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-12 lg:gap-y-0">
          <div className="lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:pt-4">
            <Reveal>
              <SectionHeading
                id="about-title"
                index="01"
                eyebrow={guruvayoorIntro.eyebrow}
                title={
                  <>
                    A wedding at Guruvayoor is <em>more than a ceremony.</em>
                  </>
                }
              />
            </Reveal>

            <Reveal delay={0.1} className="mt-7 max-w-xl space-y-5 text-[1.0625rem] leading-[1.75] text-muted sm:mt-8 sm:leading-[1.8]">
              {guruvayoorIntro.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </Reveal>

            {/* The promise — the one idea every visitor should leave with. */}
            <Reveal delay={0.15} className="mt-10 border-l border-gold-500/50 pl-6 sm:mt-12 sm:pl-8">
              <LotusMark className="h-4 w-7 text-gold-500" />
              <p className="mt-4 font-serif text-[clamp(1.75rem,2.6vw,2.3rem)] leading-[1.18] text-plum-900">
                {guruvayoorIntro.promise.map((line, i) => (
                  <span key={line} className={i === guruvayoorIntro.promise.length - 1 ? 'block text-plum-700 italic' : 'block'}>
                    {line}
                  </span>
                ))}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-muted">{guruvayoorIntro.company}</p>
            </Reveal>
          </div>

          {/* Editorial pair: portrait with an inset detail image. */}
          {/* Sticky on desktop so the photographs stay beside the longer story as it scrolls. */}
          <Reveal className="relative mb-14 self-start lg:sticky lg:top-28 lg:col-span-5 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:mt-4 lg:mb-0">
            <div className="aspect-[3/4] w-[78%] overflow-hidden bg-sand sm:w-[80%]">
              <ResponsiveImage
                image={images.about}
                sizes="(min-width: 1024px) 32vw, 80vw"
                widths={[480, 720, 960, 1280]}
                className="size-full object-cover"
              />
            </div>
            <div className="absolute right-0 -bottom-14 aspect-[4/5] w-[50%] overflow-hidden border-[6px] border-ivory bg-sand sm:-bottom-16 sm:border-8">
              <ResponsiveImage
                image={images.aboutDetail}
                sizes="(min-width: 1024px) 20vw, 50vw"
                widths={[320, 560, 800]}
                className="size-full object-cover"
              />
            </div>
          </Reveal>

          {/* Two-up on phones (titles only) so the list scans at a glance; descriptions from sm. */}
          <ul className="grid grid-cols-2 gap-x-6 lg:col-span-6 lg:col-start-7 lg:row-start-2 lg:mt-14 lg:gap-x-10">
            {principles.map((principle, i) => (
              <m.li key={principle.title} {...revealMotion(0.04 * i, 12)} className="border-t border-plum-900/10 py-4 sm:py-5">
                <h3 className="font-serif text-[1.2rem] leading-snug text-plum-900 sm:text-[1.3rem]">{principle.title}</h3>
                <p className="mt-1.5 hidden text-[0.9375rem] leading-relaxed text-muted sm:block">{principle.description}</p>
              </m.li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}

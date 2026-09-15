import { m } from 'framer-motion'
import { weddingIntro, principles } from '../../content/about'
import { images } from '../../content/images'
import { revealMotion } from '../../lib/motion'
import { Container } from '../ui/Container'
import { DepthLayer } from '../ui/DepthLayer'
import { LotusMark, Ornament } from '../ui/Lotus'
import { ParallaxMedia } from '../ui/ParallaxMedia'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

/**
 * Opening section: temple weddings (Guruvayoor first, other Kerala temples too),
 * where Sanskriti plans them, and the promise.
 * Mobile reads heading → story → temples → promise → photographs → principles.
 * Desktop places the photographs in the left column beside both text blocks.
 *
 * Depth: the two photographs unveil in turn and drift at different speeds, and
 * the inset lamp photograph moves ahead of the portrait as a separate layer.
 */
export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-ivory pb-20 sm:pb-32 lg:pb-40">
      <Container>
        <Ornament className="text-gold-500" />

        <div className="mt-14 grid gap-y-14 sm:mt-20 lg:mt-28 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-12 lg:gap-y-0">
          <div className="lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:pt-4">
            <SectionHeading
              id="about-title"
              index="01"
              eyebrow={weddingIntro.eyebrow}
              title={
                <>
                  A temple wedding is <em>more than a ceremony.</em>
                </>
              }
            />

            <Reveal delay={0.2} className="mt-7 max-w-xl space-y-5 text-[1.0625rem] leading-[1.75] text-muted sm:mt-8 sm:leading-[1.8]">
              {weddingIntro.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </Reveal>

            {/* Where we plan weddings — Guruvayoor first as the main focus. */}
            <Reveal delay={0.25} className="mt-10 max-w-xl sm:mt-12">
              <h3 className="eyebrow text-plum-700">{weddingIntro.temples.heading}</h3>
              <p className="mt-3 text-[1.0625rem] leading-[1.75] text-muted">{weddingIntro.temples.intro}</p>
              <ul className="mt-5 border-t border-plum-900/10">
                {weddingIntro.temples.names.map((name, i) => (
                  <li key={name} className="flex items-center gap-4 border-b border-plum-900/10 py-3.5">
                    <LotusMark className="h-3.5 w-6 shrink-0 text-gold-500" />
                    <span className={i === 0 ? 'font-serif text-[1.35rem] text-plum-900' : 'font-serif text-[1.2rem] text-plum-900'}>
                      {name}
                    </span>
                    {i === 0 && <span className="eyebrow ml-auto text-gold-600">Our focus</span>}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* The promise — the one idea every visitor should leave with. */}
            <Reveal delay={0.3} className="mt-10 border-l border-gold-500/50 pl-6 sm:mt-12 sm:pl-8">
              <LotusMark className="float-soft h-4 w-7 text-gold-500" />
              <p className="mt-4 font-serif text-[clamp(1.75rem,2.6vw,2.3rem)] leading-[1.18] text-plum-900">
                {weddingIntro.promise.map((line, i) => (
                  <span key={line} className={i === weddingIntro.promise.length - 1 ? 'block text-plum-700 italic' : 'block'}>
                    {line}
                  </span>
                ))}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-muted">{weddingIntro.company}</p>
            </Reveal>
          </div>

          {/* Editorial pair, sticky on desktop so the photographs stay beside the longer story. */}
          <div className="relative mb-14 self-start lg:sticky lg:top-28 lg:col-span-5 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:mt-4 lg:mb-0">
            <ParallaxMedia
              image={images.about}
              sizes="(min-width: 1024px) 32vw, 80vw"
              widths={[480, 720, 960, 1280]}
              distance={22}
              className="aspect-[3/4] w-[78%] bg-sand sm:w-[80%]"
            />
            <DepthLayer distance={-18} className="absolute right-0 -bottom-14 w-[50%] sm:-bottom-16">
              <ParallaxMedia
                image={images.aboutDetail}
                sizes="(min-width: 1024px) 20vw, 50vw"
                widths={[320, 560, 800]}
                distance={30}
                delay={0.25}
                className="aspect-[4/5] border-[6px] border-ivory bg-sand sm:border-8"
              >
                {/* Warm glow over the lamp flame. */}
                <div
                  aria-hidden
                  className="glow-breathe pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_38%_58%,rgba(255,196,110,0.32),transparent_45%)] mix-blend-screen"
                />
              </ParallaxMedia>
            </DepthLayer>
          </div>

          {/* Two-up on phones (titles only) so the list scans at a glance; descriptions from sm. */}
          <ul className="grid grid-cols-2 gap-x-6 lg:col-span-6 lg:col-start-7 lg:row-start-2 lg:mt-14 lg:gap-x-10">
            {principles.map((principle, i) => (
              <m.li key={principle.title} {...revealMotion(0.05 * i, 14)} className="border-t border-plum-900/10 py-4 sm:py-5">
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

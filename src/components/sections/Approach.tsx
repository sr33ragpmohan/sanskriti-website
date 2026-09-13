import { m } from 'framer-motion'
import { approachSteps } from '../../content/approach'
import { revealMotion } from '../../lib/motion'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Approach() {
  return (
    <section
      id="approach"
      aria-labelledby="approach-title"
      className="relative isolate overflow-hidden bg-plum-950 py-24 text-ivory sm:py-32 lg:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-48 -right-48 -z-10 size-[40rem] rounded-full bg-plum-700/30 blur-3xl"
      />

      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <SectionHeading
              id="approach-title"
              tone="dark"
              eyebrow="Why Sanskriti · Our Approach"
              title={
                <>
                  Thoughtful from the first conversation <em>to the final moment.</em>
                </>
              }
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="leading-relaxed text-ivory/70 lg:text-lg">
              Every celebration is different, so our planning begins with you. This is the approach we bring to each
              wedding and event — four stages that keep every detail considered and every moving piece in step.
            </p>
          </Reveal>
        </div>

        <ol className="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          {approachSteps.map((step, i) => (
            <m.li key={step.title} {...revealMotion(i * 0.1)} className="border-t border-gold-400/30 pt-8">
              <span aria-hidden className="block font-serif text-6xl leading-none font-light text-gold-300">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="eyebrow mt-8 text-[0.75rem] tracking-[0.3em] text-ivory">{step.title}</h3>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-ivory/65">{step.description}</p>
            </m.li>
          ))}
        </ol>
      </Container>
    </section>
  )
}

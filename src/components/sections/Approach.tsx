import { m } from 'framer-motion'
import { approachSteps } from '../../content/approach'
import { EASE_LUXE, revealMotion } from '../../lib/motion'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function Approach() {
  return (
    <section id="approach" aria-labelledby="approach-title" className="bg-ivory py-20 sm:py-32 lg:py-40">
      <Container>
        <div className="lg:mx-auto lg:max-w-3xl lg:text-center">
          <SectionHeading
            id="approach-title"
            index="03"
            align="center"
            eyebrow={
              <>
                <span className="sm:hidden">Our Approach</span>
                <span className="hidden sm:inline">Why Sanskriti · Our Approach</span>
              </>
            }
            title={
              <>
                Thoughtful from the first conversation <em>to the final moment.</em>
              </>
            }
          />
          <m.p
            {...revealMotion(0.2, 18)}
            className="mt-6 max-w-2xl text-[1.0625rem] leading-[1.75] text-muted sm:mt-7 sm:leading-[1.8] lg:mx-auto"
          >
            Every celebration is different, so our planning begins with you. This is the approach we bring to each
            wedding and event — four stages that keep every detail considered and every moving piece in step.
          </m.p>
        </div>

        <ol className="relative mt-12 grid gap-9 sm:mt-16 sm:gap-12 lg:mt-24 lg:grid-cols-4 lg:gap-10">
          {/*
            Connecting thread: vertical on mobile, horizontal on desktop. It draws in
            from its start — scaling both axes means the same animation works for either.
          */}
          <m.span
            aria-hidden
            initial={{ scaleX: 0, scaleY: 0 }}
            whileInView={{ scaleX: 1, scaleY: 1 }}
            viewport={{ once: true, margin: '0px 0px -15% 0px' }}
            transition={{ duration: 1.8, ease: EASE_LUXE, delay: 0.2 }}
            className="absolute top-7 bottom-7 left-7 w-px origin-top-left bg-gold-500/35 sm:top-9 sm:bottom-9 sm:left-9 lg:right-[12.5%] lg:bottom-auto lg:left-[12.5%] lg:h-px lg:w-auto"
          />
          {approachSteps.map((step, i) => (
            <m.li
              key={step.title}
              {...revealMotion(0.15 + i * 0.12, 18)}
              className="relative grid grid-cols-[3.5rem_1fr] gap-5 sm:grid-cols-[4.5rem_1fr] sm:gap-6 lg:grid-cols-1 lg:justify-items-center lg:gap-0 lg:text-center"
            >
              <span
                aria-hidden
                className="flex size-14 items-center justify-center rounded-full border border-gold-500/50 bg-ivory font-serif text-[1.4rem] text-plum-900 italic sm:size-18 sm:text-[1.7rem]"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="pt-2.5 sm:pt-4 lg:pt-8">
                <h3 className="eyebrow text-[0.75rem] tracking-[0.3em] text-plum-900">{step.title}</h3>
                <p className="mt-2.5 text-[0.9375rem] leading-[1.7] text-muted sm:mt-3 sm:leading-[1.75] lg:mx-auto lg:max-w-[16rem]">
                  {step.description}
                </p>
              </div>
            </m.li>
          ))}
        </ol>
      </Container>
    </section>
  )
}

import { m } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { services, type Service } from '../../content/services'
import { revealMotion } from '../../lib/motion'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

const number = (n: number) => String(n).padStart(2, '0')

function FeaturedServiceCard({ service }: { service: Service }) {
  const Icon = service.icon
  return (
    <m.li
      {...revealMotion()}
      className="relative isolate flex min-h-[21rem] flex-col overflow-hidden border-r border-b border-plum-900/12 bg-plum-900 p-8 text-ivory sm:col-span-2 sm:p-12"
    >
      {/* Concentric arcs echo the circular medallion of the logo. */}
      <span aria-hidden className="absolute -right-24 -bottom-32 -z-10 size-96 rounded-full border border-gold-400/15" />
      <span aria-hidden className="absolute -right-10 -bottom-18 -z-10 size-64 rounded-full border border-gold-400/10" />

      <div className="flex items-start justify-between">
        <span className="flex size-14 items-center justify-center rounded-full border border-gold-400/50 text-gold-300">
          <Icon className="size-6" strokeWidth={1.3} aria-hidden />
        </span>
        <span aria-hidden className="font-serif text-lg text-gold-300/60">
          {number(1)}
        </span>
      </div>

      <div className="mt-auto pt-12">
        <p className="eyebrow text-gold-300">End-to-end</p>
        <h3 className="mt-3 font-serif text-[clamp(2.1rem,4vw,3rem)] leading-tight font-medium">{service.title}</h3>
        <p className="mt-4 max-w-lg leading-relaxed text-ivory/72">{service.description}</p>
        <a
          href="#contact"
          className="eyebrow group mt-8 inline-flex items-center gap-3 text-gold-300 transition-colors hover:text-gold-200"
        >
          Start planning
          <ArrowRight aria-hidden className="size-4 transition-transform duration-500 ease-luxe group-hover:translate-x-1" />
        </a>
      </div>
    </m.li>
  )
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon
  return (
    <m.li
      {...revealMotion((index % 3) * 0.08)}
      className="group relative flex min-h-[17.5rem] flex-col border-r border-b border-plum-900/12 p-8 transition-colors duration-500 ease-luxe hover:bg-ivory sm:p-10"
    >
      <div className="flex items-start justify-between">
        <span className="flex size-12 items-center justify-center rounded-full border border-gold-500/40 text-gold-600 transition-colors duration-500 ease-luxe group-hover:border-plum-900 group-hover:bg-plum-900 group-hover:text-gold-300">
          <Icon className="size-5" strokeWidth={1.4} aria-hidden />
        </span>
        <span aria-hidden className="font-serif text-lg text-muted/55">
          {number(index)}
        </span>
      </div>

      <h3 className="mt-auto pt-10 font-serif text-[1.6rem] leading-tight font-medium text-plum-900">{service.title}</h3>
      <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{service.description}</p>

      <span
        aria-hidden
        className="absolute bottom-0 left-0 h-px w-0 bg-gold-500 transition-[width] duration-700 ease-luxe group-hover:w-full"
      />
    </m.li>
  )
}

export function Services() {
  const [featured, ...rest] = services

  return (
    <section id="services" aria-labelledby="services-title" className="bg-cream py-24 sm:py-32 lg:py-40">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <SectionHeading
              id="services-title"
              eyebrow="Our Services"
              title={
                <>
                  Everything your celebration needs, <em>in one place.</em>
                </>
              }
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="leading-relaxed text-muted lg:text-lg">
              Choose complete wedding planning, or only the services you need. For weddings and events in Trivandrum,
              across Kerala and at the destination of your choice.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid border-t border-l border-plum-900/12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          <FeaturedServiceCard service={featured} />
          {rest.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i + 2} />
          ))}
        </ul>
      </Container>
    </section>
  )
}

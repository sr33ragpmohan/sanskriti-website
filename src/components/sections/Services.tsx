import { m } from 'framer-motion'
import { images } from '../../content/images'
import { services, type Service } from '../../content/services'
import { revealMotion } from '../../lib/motion'
import { TextLink } from '../ui/Button'
import { Container } from '../ui/Container'
import { ResponsiveImage } from '../ui/ResponsiveImage'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

const number = (n: number) => String(n).padStart(2, '0')

function ServiceIcon({ service, large }: { service: Service; large?: boolean }) {
  const Icon = service.icon
  return (
    <span
      className={
        (large ? 'size-14 ' : 'size-12 ') +
        'flex items-center justify-center rounded-full border border-gold-500/40 text-plum-700 transition-colors duration-500 ease-luxe group-hover:border-plum-900 group-hover:bg-plum-900 group-hover:text-gold-200'
      }
    >
      <Icon className={large ? 'size-6' : 'size-5'} strokeWidth={1.25} aria-hidden />
    </span>
  )
}

function FeaturedServiceCard({ service }: { service: Service }) {
  return (
    <m.li {...revealMotion()} className="group grid bg-ivory sm:col-span-2 md:grid-cols-2">
      <div className="relative min-h-64 overflow-hidden bg-sand md:order-2 md:min-h-full">
        <ResponsiveImage
          image={images.featuredService}
          sizes="(min-width: 1024px) 32vw, (min-width: 768px) 50vw, 100vw"
          widths={[480, 800, 1200]}
          className="absolute inset-0 size-full object-cover transition-transform duration-[1400ms] ease-luxe group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-col p-8 sm:p-10 lg:p-12">
        <div className="flex items-start justify-between">
          <ServiceIcon service={service} large />
          <span aria-hidden className="font-serif text-lg text-gold-600 italic">
            {number(1)}
          </span>
        </div>
        <div className="mt-auto pt-14">
          <p className="eyebrow text-plum-700">End-to-end</p>
          <h3 className="mt-3 font-serif text-[clamp(2rem,3.2vw,2.75rem)] leading-[1.05] text-plum-900">{service.title}</h3>
          <p className="mt-4 max-w-sm text-[0.9375rem] leading-[1.75] text-muted">{service.description}</p>
          <TextLink href="#contact" className="mt-7">
            Start planning
          </TextLink>
        </div>
      </div>
    </m.li>
  )
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <m.li
      {...revealMotion((index % 3) * 0.06, 16)}
      className="group relative flex min-h-[18rem] flex-col bg-parchment p-8 transition-colors duration-500 ease-luxe hover:bg-ivory sm:p-10"
    >
      <div className="flex items-start justify-between">
        <ServiceIcon service={service} />
        <span aria-hidden className="font-serif text-lg text-gold-600/80 italic">
          {number(index)}
        </span>
      </div>

      <h3 className="mt-auto pt-12 font-serif text-[1.55rem] leading-tight text-plum-900">{service.title}</h3>
      <p className="mt-3 text-[0.9375rem] leading-[1.7] text-muted">{service.description}</p>

      <span
        aria-hidden
        className="absolute top-0 left-0 h-px w-0 bg-gold-500 transition-[width] duration-700 ease-luxe group-hover:w-full"
      />
    </m.li>
  )
}

export function Services() {
  const [featured, ...rest] = services

  return (
    <section id="services" aria-labelledby="services-title" className="bg-parchment py-24 sm:py-32 lg:py-40">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <SectionHeading
              id="services-title"
              index="02"
              eyebrow="Our Services"
              title={
                <>
                  Everything your celebration needs, <em>in one place.</em>
                </>
              }
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <p className="text-[1.0625rem] leading-[1.8] text-muted">
              Choose complete wedding planning, or only the services you need — for weddings and events in
              Trivandrum, across Kerala and at the destination of your choice.
            </p>
          </Reveal>
        </div>

        {/* gap-px over a tinted background draws consistent hairlines between cells. */}
        <ul className="mt-14 grid gap-px border border-plum-900/10 bg-plum-900/10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          <FeaturedServiceCard service={featured} />
          {rest.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i + 2} />
          ))}
        </ul>
      </Container>
    </section>
  )
}

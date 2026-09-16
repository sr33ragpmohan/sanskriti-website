import { m } from 'framer-motion'
import { Plus } from 'lucide-react'
import { images } from '../../content/images'
import { services, type Service } from '../../content/services'
import { cn } from '../../lib/cn'
import { revealMotion } from '../../lib/motion'
import { TextLink } from '../ui/Button'
import { Container } from '../ui/Container'
import { ParallaxMedia } from '../ui/ParallaxMedia'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

const number = (n: number) => String(n).padStart(2, '0')

const iconSizes = {
  sm: { box: 'size-10', glyph: 'size-[1.125rem]' },
  md: { box: 'size-12', glyph: 'size-5' },
  lg: { box: 'size-14', glyph: 'size-6' },
}

function ServiceIcon({ service, size = 'md', className }: { service: Service; size?: keyof typeof iconSizes; className?: string }) {
  const Icon = service.icon
  return (
    <span
      className={cn(
        iconSizes[size].box,
        'flex shrink-0 items-center justify-center rounded-full border border-gold-500/40 text-plum-700 transition-colors duration-500 ease-luxe',
        'group-hover:border-plum-900 group-hover:bg-plum-900 group-hover:text-gold-200',
        className,
      )}
    >
      {/* The glyph tilts and grows a touch on hover. */}
      <Icon
        className={cn(
          iconSizes[size].glyph,
          'transition-transform duration-700 ease-luxe group-hover:-rotate-6 group-hover:scale-110 motion-reduce:transition-none',
        )}
        strokeWidth={1.25}
        aria-hidden
      />
    </span>
  )
}

function FeaturedServiceCard({ service }: { service: Service }) {
  return (
    <m.li
      {...revealMotion()}
      className="group relative grid bg-ivory transition-shadow duration-700 ease-luxe hover:z-10 hover:shadow-[0_32px_60px_-42px_rgba(46,12,37,0.5)] sm:col-span-2 md:grid-cols-2"
    >
      <ParallaxMedia
        image={images.featuredService}
        sizes="(min-width: 1024px) 32vw, (min-width: 768px) 50vw, 100vw"
        widths={[480, 800, 1200]}
        distance={20}
        className="aspect-[3/2] bg-sand sm:aspect-auto sm:min-h-64 md:order-2 md:min-h-full"
        imgClassName="transition-transform duration-[1400ms] ease-luxe group-hover:scale-[1.05]"
      />
      <div className="flex flex-col p-7 sm:p-10 lg:p-12">
        <div className="hidden items-start justify-between sm:flex">
          <ServiceIcon service={service} size="lg" />
          <span aria-hidden className="font-serif text-lg text-gold-600 italic">
            {number(1)}
          </span>
        </div>
        <div className="sm:mt-auto sm:pt-14">
          <p className="eyebrow text-plum-700">End-to-end</p>
          <h3 className="mt-3 font-serif text-[clamp(2rem,3.2vw,2.75rem)] leading-[1.05] text-plum-900">{service.title}</h3>
          <p className="mt-4 max-w-sm text-[0.9375rem] leading-[1.75] text-muted">{service.description}</p>
          <TextLink href="#contact" className="mt-6 min-h-11 sm:mt-7">
            Start planning
          </TextLink>
        </div>
      </div>
    </m.li>
  )
}

/** Tablet/desktop card. Hidden on phones, where ServiceList takes over. */
function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <m.li
      {...revealMotion((index % 3) * 0.08, 18)}
      className={cn(
        'group relative hidden min-h-[18rem] flex-col bg-parchment p-8 sm:flex sm:p-10',
        // Hover: a 4px lift, a soft shadow and the lighter ground.
        'transition-[background-color,translate,box-shadow] duration-500 ease-luxe',
        'hover:z-10 hover:-translate-y-1 hover:bg-ivory hover:shadow-[0_28px_50px_-36px_rgba(46,12,37,0.5)] motion-reduce:hover:translate-y-0',
      )}
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

/**
 * Phone layout: an index of service names that expand to their description.
 * Ten full cards would be several screens of scrolling; this keeps every
 * service scannable in about one screen. Native <details>, no JavaScript.
 */
function ServiceList({ items }: { items: Service[] }) {
  return (
    <Reveal className="mt-12 sm:hidden">
      <p className="eyebrow text-muted">Or choose individual services</p>
      <ul className="mt-4 border-t border-plum-900/10">
        {items.map((service) => (
          <li key={service.id} className="border-b border-plum-900/10">
            <details className="group">
              <summary className="flex min-h-[4.5rem] cursor-pointer list-none items-center gap-4 py-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 [&::-webkit-details-marker]:hidden">
                <ServiceIcon
                  service={service}
                  size="sm"
                  className="group-open:border-plum-900 group-open:bg-plum-900 group-open:text-gold-200"
                />
                <h3 className="flex-1 font-serif text-[1.35rem] leading-tight text-plum-900">{service.title}</h3>
                <Plus
                  aria-hidden
                  strokeWidth={1.25}
                  className="size-5 shrink-0 text-gold-600 transition-transform duration-500 ease-luxe group-open:rotate-45"
                />
              </summary>
              <p className="pr-9 pb-5 pl-14 text-[0.9375rem] leading-[1.7] text-muted">{service.description}</p>
            </details>
          </li>
        ))}
      </ul>
    </Reveal>
  )
}

export function Services() {
  const [featured, ...rest] = services

  return (
    <section id="services" aria-labelledby="services-title" className="bg-parchment py-20 sm:py-32 lg:py-40">
      <Container>
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
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
          </div>
          <Reveal delay={0.2} className="lg:col-span-4 lg:col-start-9">
            <p className="text-[1.0625rem] leading-[1.75] text-muted sm:leading-[1.8]">
              Choose complete wedding planning, or only the services you need — for weddings at Guruvayur and other
              temples across Kerala, and for events of your own.
            </p>
          </Reveal>
        </div>

        {/* gap-px over a tinted background draws consistent hairlines between cells. */}
        <ul className="mt-10 grid gap-px border border-plum-900/10 bg-plum-900/10 sm:mt-14 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          <FeaturedServiceCard service={featured} />
          {rest.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i + 2} />
          ))}
        </ul>

        <ServiceList items={rest} />
      </Container>
    </section>
  )
}

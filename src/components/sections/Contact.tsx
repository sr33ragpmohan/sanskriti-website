import type { ReactNode } from 'react'
import { Globe, Mail, MapPin, Phone } from 'lucide-react'
import { site } from '../../config/site'
import { mailtoHref, telHref } from '../../lib/contact-links'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { EnquiryForm } from './EnquiryForm'

const linkClass =
  'text-plum-900 underline decoration-gold-500/40 underline-offset-4 transition-colors hover:decoration-gold-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500'

function DetailRow({ icon, label, children }: { icon: ReactNode; label: string; children: ReactNode }) {
  return (
    <div className="flex gap-5 py-6">
      <span aria-hidden className="mt-0.5 text-gold-600 [&>svg]:size-5">
        {icon}
      </span>
      <div className="min-w-0">
        <dt className="eyebrow text-muted">{label}</dt>
        <dd className="mt-2 text-[1.0625rem] leading-relaxed text-ink">{children}</dd>
      </div>
    </div>
  )
}

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-ivory py-24 sm:py-32 lg:py-40">
      <Container className="grid gap-16 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeading
              id="contact-title"
              index="05"
              eyebrow="Contact"
              title={
                <>
                  Start planning <em>with Sanskriti.</em>
                </>
              }
            />
            <p className="mt-6 leading-relaxed text-muted lg:text-lg">
              Share a few details about your wedding or event — the date, the place and the kind of celebration you have
              in mind — and we will get back to you to talk it through.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="mt-10 divide-y divide-plum-900/10 border-y border-plum-900/10">
              <DetailRow icon={<MapPin strokeWidth={1.4} />} label="Location">
                {site.location.city} ({site.location.cityOfficial}), {site.location.region}, {site.location.country}
              </DetailRow>
              <DetailRow icon={<Phone strokeWidth={1.4} />} label="Phone">
                <ul className="space-y-1">
                  {site.contact.phones.map((phone) => (
                    <li key={phone.e164}>
                      <a href={telHref(phone.e164)} className={linkClass}>
                        {phone.display}
                      </a>
                    </li>
                  ))}
                </ul>
              </DetailRow>
              <DetailRow icon={<Mail strokeWidth={1.4} />} label="Email">
                <a href={mailtoHref()} className={`${linkClass} [overflow-wrap:anywhere]`}>
                  {site.contact.email}
                </a>
              </DetailRow>
              <DetailRow icon={<Globe strokeWidth={1.4} />} label="Website">
                <a href={site.url} className={linkClass}>
                  {site.domain}
                </a>
              </DetailRow>
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="lg:col-span-7">
          <EnquiryForm />
        </Reveal>
      </Container>
    </section>
  )
}

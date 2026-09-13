import type { ReactNode } from 'react'
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import { site } from '../../config/site'
import { cn } from '../../lib/cn'
import { mailtoHref, telHref, whatsappHref } from '../../lib/contact-links'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { WhatsAppIcon } from '../ui/WhatsAppIcon'
import { EnquiryForm } from './EnquiryForm'

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500'

function RowIcon({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        'flex size-11 shrink-0 items-center justify-center rounded-full border border-gold-500/40 text-plum-700 [&>svg]:size-[1.125rem]',
        className,
      )}
    >
      {children}
    </span>
  )
}

function RowArrow({ className }: { className?: string }) {
  return (
    <ArrowRight
      aria-hidden
      strokeWidth={1.5}
      className={cn(
        'size-4 shrink-0 text-gold-600 transition-transform duration-500 ease-luxe group-hover:translate-x-1',
        className,
      )}
    />
  )
}

function RowText({ label, valueClassName, children }: { label: string; valueClassName?: string; children: ReactNode }) {
  return (
    <span className="min-w-0 flex-1">
      <span className="eyebrow block text-muted">{label}</span>
      <span className={cn('mt-1 block text-[1.0625rem] leading-snug text-plum-900', valueClassName)}>{children}</span>
    </span>
  )
}

/** Breaks the address after "@" so it wraps cleanly on narrow screens. */
function EmailAddress() {
  const [user, domain] = site.contact.email.split('@')
  return (
    <>
      {user}@<wbr />
      {domain}
    </>
  )
}

const rowLink = cn('group flex min-h-[4.75rem] items-center gap-4 py-4', focusRing)

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-ivory py-20 sm:py-32 lg:py-40">
      {/* grid-cols-1 (minmax(0,1fr)) stops long unbreakable text from widening the page on phones. */}
      <Container className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
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
            <p className="mt-6 leading-[1.75] text-muted lg:text-lg">
              Share a few details about your wedding or event — the date, the place and the kind of celebration you have
              in mind — and we will get back to you to talk it through.
            </p>
          </Reveal>

          {/* Full-width, thumb-sized contact rows — WhatsApp first. */}
          <Reveal delay={0.1}>
            <ul className="mt-10 divide-y divide-plum-900/10 border-y border-plum-900/10">
              <li>
                <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className={rowLink}>
                  <RowIcon>
                    <WhatsAppIcon />
                  </RowIcon>
                  <RowText label="WhatsApp">Message us directly</RowText>
                  <RowArrow />
                </a>
              </li>

              <li className="flex gap-4 py-4">
                <RowIcon className="mt-0.5">
                  <Phone strokeWidth={1.4} />
                </RowIcon>
                <div className="min-w-0 flex-1">
                  <p className="eyebrow pt-1 text-muted">Call us</p>
                  <ul className="mt-1 divide-y divide-plum-900/10">
                    {site.contact.phones.map((phone) => (
                      <li key={phone.e164}>
                        <a
                          href={telHref(phone.e164)}
                          className={cn('group flex min-h-12 items-center justify-between gap-3 text-[1.0625rem] text-plum-900', focusRing)}
                        >
                          {phone.display}
                          <RowArrow />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              <li>
                <a href={mailtoHref()} className={rowLink}>
                  <RowIcon>
                    <Mail strokeWidth={1.4} />
                  </RowIcon>
                  {/* The address is long: slightly smaller on phones, arrow dropped on the narrowest screens. */}
                  <RowText label="Email" valueClassName="text-[0.9375rem] [overflow-wrap:anywhere] min-[400px]:text-[1.0625rem]">
                    <EmailAddress />
                  </RowText>
                  <RowArrow className="max-[399px]:hidden" />
                </a>
              </li>

              <li className="flex min-h-[4.75rem] items-center gap-4 py-4">
                <RowIcon>
                  <MapPin strokeWidth={1.4} />
                </RowIcon>
                <RowText label="Location">
                  {site.location.city} ({site.location.cityOfficial}), {site.location.region}
                </RowText>
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="lg:col-span-7">
          <EnquiryForm />
        </Reveal>
      </Container>
    </section>
  )
}

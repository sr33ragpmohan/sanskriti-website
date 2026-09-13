import { navigation } from '../../content/navigation'
import { site } from '../../config/site'
import { mailtoHref, primaryPhone, telHref, whatsappHref } from '../../lib/contact-links'
import { Container } from '../ui/Container'
import { Logo } from '../ui/Logo'

const linkClass = 'transition-colors hover:text-ivory focus-visible:text-ivory focus-visible:outline-none'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-plum-950 text-sm text-ivory/65">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a href="#top" className="inline-flex items-center gap-4" aria-label={`${site.legalName} — back to top`}>
              <Logo decorative className="size-16 ring-1 ring-gold-400/40" />
              <span className="leading-none">
                <span className="block font-serif text-2xl font-semibold tracking-[0.22em] text-ivory uppercase">
                  {site.name}
                </span>
                <span className="mt-2 block text-[0.6rem] font-semibold tracking-[0.2em] text-gold-300/85 uppercase">
                  {site.tagline}
                </span>
              </span>
            </a>
            <p className="mt-7 max-w-sm leading-relaxed">
              Wedding planning and event management in {site.location.city}, {site.location.region} — planning, design
              and coordination under one roof.
            </p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-3">
            <p className="eyebrow text-gold-300">Explore</p>
            <ul className="mt-5 space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={linkClass}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <p className="eyebrow text-gold-300">Get in touch</p>
            <ul className="mt-5 space-y-3">
              <li>
                <a href={telHref()} className={linkClass}>
                  {primaryPhone.display}
                </a>
              </li>
              <li>
                <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={mailtoHref()} className={`${linkClass} [overflow-wrap:anywhere]`}>
                  {site.contact.email}
                </a>
              </li>
              <li>
                {site.location.city} ({site.location.cityOfficial}), {site.location.region}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-ivory/10 pt-8 text-xs text-ivory/45 sm:flex-row sm:justify-between">
          <p>
            © {year} {site.legalName}
          </p>
          <p>{site.domain}</p>
        </div>
      </Container>
    </footer>
  )
}

import { m } from 'framer-motion'
import { navigation } from '../../content/navigation'
import { site } from '../../config/site'
import { mailtoHref, primaryPhone, telHref, whatsappHref } from '../../lib/contact-links'
import { revealMotion } from '../../lib/motion'
import { Container } from '../ui/Container'
import { Logo } from '../ui/Logo'
import { Ornament } from '../ui/Lotus'

const linkClass = 'transition-colors duration-300 hover:text-ivory focus-visible:text-ivory focus-visible:outline-none'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-plum-950 text-ivory/60">
      <Container className="pt-16 pb-[max(2.5rem,env(safe-area-inset-bottom))] sm:pt-20 lg:pt-24">
        {/* Brand block, then navigation, then contact details arrive in turn. */}
        <m.div {...revealMotion(0, 18)} className="flex flex-col items-center text-center">
          <a href="#top" aria-label={`${site.legalName} — back to top`} className="rounded-full">
            <Logo decorative className="size-20 ring-1 ring-gold-300/25" />
          </a>
          <p className="mt-7 font-serif text-[1.9rem] leading-none tracking-[0.3em] text-ivory uppercase">{site.name}</p>
          <p className="mt-3 text-[0.6rem] font-semibold tracking-[0.24em] text-gold-300/75 uppercase">{site.tagline}</p>
          <Ornament className="mt-10 w-full max-w-sm text-gold-300/70" />
        </m.div>

        <m.nav {...revealMotion(0.12, 12)} aria-label="Footer" className="mt-10">
          <ul className="eyebrow flex flex-wrap justify-center gap-x-7 text-ivory/70 sm:gap-x-9">
            {navigation.map((item) => (
              <li key={item.href}>
                {/* Vertical padding gives each label a 44px tap target. */}
                <a href={item.href} className={`${linkClass} inline-block py-4`}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </m.nav>

        <m.ul {...revealMotion(0.22, 12)} className="mt-10 flex flex-col items-center gap-1 text-center text-sm sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8 sm:gap-y-3 [&_a]:inline-flex [&_a]:min-h-11 [&_a]:items-center [&>li]:flex [&>li]:min-h-11 [&>li]:items-center sm:[&_a]:min-h-0 sm:[&>li]:min-h-0">
          <li>
            <a href={telHref()} className={linkClass}>
              {primaryPhone.display}
            </a>
          </li>
          {/* `!` so the row's `[&>li]:flex` tap-target rule cannot reveal separators on phones. */}
          <li aria-hidden className="hidden! text-gold-300/40 sm:block!">
            ·
          </li>
          <li>
            <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className={linkClass}>
              WhatsApp
            </a>
          </li>
          <li aria-hidden className="hidden! text-gold-300/40 sm:block!">
            ·
          </li>
          <li>
            <a href={mailtoHref()} className={`${linkClass} [overflow-wrap:anywhere]`}>
              {site.contact.email}
            </a>
          </li>
          <li aria-hidden className="hidden! text-gold-300/40 sm:block!">
            ·
          </li>
          <li>
            {site.location.city} ({site.location.cityOfficial}), {site.location.region}
          </li>
        </m.ul>

        <div className="mt-14 flex flex-col items-center gap-2 border-t border-ivory/10 pt-8 text-center text-xs leading-relaxed text-ivory/40 sm:mt-16 sm:flex-row sm:justify-between sm:text-left">
          <p>
            © {year} {site.legalName}
          </p>
          <p>{site.domain}</p>
        </div>
      </Container>
    </footer>
  )
}

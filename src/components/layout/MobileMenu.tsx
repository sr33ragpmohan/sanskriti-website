import { useEffect, useRef, type MouseEvent } from 'react'
import { m } from 'framer-motion'
import { Phone } from 'lucide-react'
import { navigation } from '../../content/navigation'
import { site } from '../../config/site'
import { mailtoHref, telHref, whatsappHref } from '../../lib/contact-links'
import { EASE_LUXE } from '../../lib/motion'
import { useContactChooser, type ContactKind } from '../contact/ContactChooser'
import { Button } from '../ui/Button'
import { Ornament } from '../ui/Lotus'
import { WhatsAppIcon } from '../ui/WhatsAppIcon'

interface MobileMenuProps {
  onNavigate: () => void
}

export function MobileMenu({ onNavigate }: MobileMenuProps) {
  const firstLinkRef = useRef<HTMLAnchorElement>(null)
  const chooseNumber = useContactChooser()

  useEffect(() => {
    firstLinkRef.current?.focus({ preventScroll: true })
  }, [])

  /** Close the menu, then let the visitor pick a number. */
  const contact = (kind: ContactKind) => (event: MouseEvent<HTMLElement>) => {
    onNavigate()
    chooseNumber(kind)(event)
  }

  return (
    <m.div
      id="mobile-menu"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: EASE_LUXE }}
      className="fixed inset-0 -z-10 flex flex-col overflow-y-auto bg-ivory px-6 pt-28 pb-[max(2rem,env(safe-area-inset-bottom))] sm:px-10 lg:hidden"
    >
      <nav aria-label="Mobile">
        <ul>
          {navigation.map((item, i) => (
            <m.li
              key={item.href}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE_LUXE, delay: 0.05 + i * 0.05 }}
            >
              <a
                ref={i === 0 ? firstLinkRef : undefined}
                href={item.href}
                onClick={onNavigate}
                className="flex items-baseline gap-5 border-b border-plum-900/10 py-4 text-plum-900 focus-visible:text-plum-700 focus-visible:outline-none"
              >
                <span aria-hidden className="w-6 font-serif text-base text-gold-600 italic">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-serif text-[2.35rem] leading-tight">{item.label}</span>
              </a>
            </m.li>
          ))}
        </ul>
      </nav>

      <m.div
        className="mt-auto pt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Ornament className="text-gold-500" />
        <p className="eyebrow mt-5 text-center text-muted">
          {site.location.city} · {site.location.region}
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <Button href={whatsappHref()} external variant="primary" icon={<WhatsAppIcon />} onClick={contact('whatsapp')}>
            WhatsApp Us
          </Button>
          <Button href={telHref()} variant="outline" icon={<Phone />} onClick={contact('call')}>
            Call Us
          </Button>
        </div>
        <a href={mailtoHref()} className="mt-5 block text-center text-sm text-muted [overflow-wrap:anywhere]">
          {site.contact.email}
        </a>
      </m.div>
    </m.div>
  )
}

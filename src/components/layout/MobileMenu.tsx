import { useEffect, useRef } from 'react'
import { m } from 'framer-motion'
import { Phone } from 'lucide-react'
import { navigation } from '../../content/navigation'
import { site } from '../../config/site'
import { mailtoHref, telHref, whatsappHref } from '../../lib/contact-links'
import { EASE_LUXE } from '../../lib/motion'
import { Button } from '../ui/Button'
import { WhatsAppIcon } from '../ui/WhatsAppIcon'

interface MobileMenuProps {
  onNavigate: () => void
}

export function MobileMenu({ onNavigate }: MobileMenuProps) {
  const firstLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    firstLinkRef.current?.focus({ preventScroll: true })
  }, [])

  return (
    <m.div
      id="mobile-menu"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: EASE_LUXE }}
      className="fixed inset-0 -z-10 flex flex-col overflow-y-auto bg-plum-950 px-6 pt-28 pb-[max(2.5rem,env(safe-area-inset-bottom))] text-ivory sm:px-10 lg:hidden"
    >
      <nav aria-label="Mobile">
        <ul>
          {navigation.map((item, i) => (
            <m.li
              key={item.href}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE_LUXE, delay: 0.06 + i * 0.05 }}
            >
              <a
                ref={i === 0 ? firstLinkRef : undefined}
                href={item.href}
                onClick={onNavigate}
                className="flex items-baseline justify-between border-b border-ivory/10 py-4 font-serif text-[2.4rem] leading-tight focus-visible:text-gold-300 focus-visible:outline-none"
              >
                {item.label}
                <span aria-hidden className="eyebrow text-gold-300/70">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </a>
            </m.li>
          ))}
        </ul>
      </nav>

      <m.div
        className="mt-auto pt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.35 }}
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <Button href={whatsappHref()} external variant="gold" icon={<WhatsAppIcon />}>
            WhatsApp Us
          </Button>
          <Button href={telHref()} variant="outline-light" icon={<Phone />}>
            Call Us
          </Button>
        </div>
        <a href={mailtoHref()} className="mt-6 block text-center text-sm text-ivory/60 [overflow-wrap:anywhere] hover:text-ivory">
          {site.contact.email}
        </a>
      </m.div>
    </m.div>
  )
}

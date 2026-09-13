import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navigation } from '../../content/navigation'
import { site } from '../../config/site'
import { whatsappHref } from '../../lib/contact-links'
import { cn } from '../../lib/cn'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { Logo } from '../ui/Logo'
import { WhatsAppIcon } from '../ui/WhatsAppIcon'
import { MobileMenu } from './MobileMenu'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const root = document.documentElement
    root.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
    const onResize = () => window.innerWidth >= 1024 && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      root.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [menuOpen])

  // Solid ivory bar once the page scrolls; transparent over the hero and the open mobile menu.
  const solid = scrolled && !menuOpen

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,color,box-shadow] duration-500 ease-luxe',
        solid
          ? 'bg-ivory/95 text-plum-900 shadow-[0_1px_0_rgba(53,10,44,0.08)] backdrop-blur-md'
          : 'bg-transparent text-ivory',
      )}
    >
      <Container className={cn('flex items-center justify-between transition-[height] duration-500', solid ? 'h-18' : 'h-20 lg:h-24')}>
        <a
          href="#top"
          className="flex items-center gap-3 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400"
          aria-label={`${site.legalName} — back to top`}
          onClick={() => setMenuOpen(false)}
        >
          <Logo decorative className="size-11 ring-1 ring-gold-400/50 lg:size-12" />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-[1.35rem] font-semibold tracking-[0.22em] uppercase">{site.name}</span>
            <span
              className={cn(
                'mt-1.5 text-[0.53rem] font-semibold tracking-[0.2em] uppercase max-[399px]:hidden',
                solid ? 'text-gold-700' : 'text-gold-200/90',
              )}
            >
              {site.tagline}
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-10">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={cn(
                    'eyebrow relative py-2 opacity-85 transition-opacity hover:opacity-100',
                    'after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-current',
                    'after:transition-transform after:duration-500 after:ease-luxe hover:after:scale-x-100',
                    'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400',
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Button href={whatsappHref()} external variant={solid ? 'plum' : 'gold'} icon={<WhatsAppIcon />} className="min-h-11 px-5 py-3">
            WhatsApp Us
          </Button>
        </div>

        <button
          type="button"
          className="-mr-2 flex size-11 items-center justify-center focus-visible:outline-2 focus-visible:outline-gold-400 lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="size-6" strokeWidth={1.5} /> : <Menu className="size-6" strokeWidth={1.5} />}
        </button>
      </Container>

      <AnimatePresence>{menuOpen && <MobileMenu onNavigate={() => setMenuOpen(false)} />}</AnimatePresence>
    </header>
  )
}

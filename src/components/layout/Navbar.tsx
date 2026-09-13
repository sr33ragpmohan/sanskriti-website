import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
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
    const onScroll = () => setScrolled(window.scrollY > 24)
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

  const solid = scrolled && !menuOpen

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 text-plum-900 transition-[background-color,box-shadow] duration-500 ease-luxe',
        solid ? 'bg-ivory/90 shadow-[0_1px_0_rgba(46,12,37,0.08)] backdrop-blur-md' : 'bg-transparent',
      )}
    >
      <Container
        className={cn(
          'flex items-center justify-between transition-[height] duration-500 ease-luxe',
          solid ? 'h-18' : 'h-20 lg:h-24',
        )}
      >
        <a
          href="#top"
          className="flex items-center gap-3.5 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500"
          aria-label={`${site.legalName} — back to top`}
          onClick={() => setMenuOpen(false)}
        >
          <Logo decorative className="size-11 ring-1 ring-gold-500/30 lg:size-12" />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-[1.4rem] font-medium tracking-[0.24em] uppercase">{site.name}</span>
            <span className="mt-1.5 text-[0.53rem] font-semibold tracking-[0.22em] text-gold-600 uppercase max-[399px]:hidden">
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
                    'eyebrow relative py-2 text-plum-900/70 transition-colors duration-300 hover:text-plum-900',
                    'after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-gold-500',
                    'after:transition-transform after:duration-500 after:ease-luxe hover:after:scale-x-100',
                    'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500',
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Button href={whatsappHref()} external variant="primary" icon={<WhatsAppIcon />} className="h-11 px-5">
            WhatsApp Us
          </Button>
        </div>

        <button
          type="button"
          className="-mr-1 flex h-11 items-center gap-3 focus-visible:outline-2 focus-visible:outline-gold-500 lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="eyebrow">{menuOpen ? 'Close' : 'Menu'}</span>
          <span aria-hidden className="relative block h-3 w-6">
            <span
              className={cn(
                'absolute left-0 h-px w-6 bg-current transition-all duration-500 ease-luxe',
                menuOpen ? 'top-1.5 rotate-45' : 'top-0',
              )}
            />
            <span
              className={cn(
                'absolute right-0 h-px bg-current transition-all duration-500 ease-luxe',
                menuOpen ? 'top-1.5 w-6 -rotate-45' : 'top-3 w-4',
              )}
            />
          </span>
        </button>
      </Container>

      <AnimatePresence>{menuOpen && <MobileMenu onNavigate={() => setMenuOpen(false)} />}</AnimatePresence>
    </header>
  )
}

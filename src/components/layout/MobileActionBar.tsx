import { useEffect, useState } from 'react'
import { Phone } from 'lucide-react'
import { telHref, whatsappHref } from '../../lib/contact-links'
import { cn } from '../../lib/cn'
import { Button } from '../ui/Button'
import { WhatsAppIcon } from '../ui/WhatsAppIcon'

/**
 * Small-screen contact bar. Appears once the hero is scrolled past and hides
 * again while the Contact section or footer (which carry the same actions) are visible.
 */
export function MobileActionBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let pastHero = false
    const onScreen = new Set<Element>()
    const update = () => setVisible(pastHero && onScreen.size === 0)

    const onScroll = () => {
      pastHero = window.scrollY > window.innerHeight * 0.85
      update()
    }

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) onScreen.add(entry.target)
        else onScreen.delete(entry.target)
      }
      update()
    })
    document.querySelectorAll('#contact, footer').forEach((el) => observer.observe(el))

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <div
      inert={!visible}
      className={cn(
        'fixed inset-x-0 bottom-0 z-40 border-t border-plum-900/10 bg-ivory/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md',
        'transition-transform duration-500 ease-luxe lg:hidden',
        visible ? 'translate-y-0' : 'translate-y-full',
      )}
    >
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
        <Button href={whatsappHref()} external variant="primary" icon={<WhatsAppIcon />} className="h-12 px-4">
          WhatsApp
        </Button>
        <Button href={telHref()} variant="outline" icon={<Phone />} className="h-12 bg-ivory px-4">
          Call Us
        </Button>
      </div>
    </div>
  )
}

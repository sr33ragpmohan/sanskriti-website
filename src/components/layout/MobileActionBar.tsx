import { useEffect, useState } from 'react'
import { Phone } from 'lucide-react'
import { telHref, whatsappHref } from '../../lib/contact-links'
import { cn } from '../../lib/cn'
import { useContactChooser } from '../contact/ContactChooser'
import { Button } from '../ui/Button'
import { WhatsAppIcon } from '../ui/WhatsAppIcon'

/**
 * Small-screen contact bar in the thumb zone. Slides in shortly after load (so a
 * visitor arriving from Instagram or WhatsApp has an action on the first screen)
 * and steps aside while the Contact section or footer — which carry the same
 * actions — are on screen. Both buttons open the number chooser.
 */
export function MobileActionBar() {
  const [visible, setVisible] = useState(false)
  const chooseNumber = useContactChooser()

  useEffect(() => {
    let ready = false
    const onScreen = new Set<Element>()
    const update = () => setVisible(ready && onScreen.size === 0)

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) onScreen.add(entry.target)
        else onScreen.delete(entry.target)
      }
      update()
    })
    document.querySelectorAll('#contact, footer').forEach((el) => observer.observe(el))

    // Let the hero entrance play before the bar arrives.
    const timer = window.setTimeout(() => {
      ready = true
      update()
    }, 900)

    return () => {
      window.clearTimeout(timer)
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
      <div className="mx-auto grid max-w-lg grid-cols-[1.5fr_1fr] gap-2.5">
        <Button
          href={whatsappHref()}
          external
          variant="primary"
          icon={<WhatsAppIcon />}
          onClick={chooseNumber('whatsapp')}
          className="h-12 px-4 tracking-[0.18em]"
        >
          WhatsApp Us
        </Button>
        <Button
          href={telHref()}
          variant="outline"
          icon={<Phone />}
          onClick={chooseNumber('call')}
          className="h-12 bg-ivory px-4 tracking-[0.18em]"
        >
          Call
        </Button>
      </div>
    </div>
  )
}

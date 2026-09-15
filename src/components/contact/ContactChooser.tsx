import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type MouseEvent,
  type ReactNode,
} from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { ArrowRight, Phone, X } from 'lucide-react'
import { site } from '../../config/site'
import { telHref, whatsappHref } from '../../lib/contact-links'
import { EASE_LUXE } from '../../lib/motion'
import { WhatsAppIcon } from '../ui/WhatsAppIcon'

export type ContactKind = 'whatsapp' | 'call'

interface ChooserRequest {
  kind: ContactKind
  /** Prefilled WhatsApp message (e.g. from the enquiry form). */
  message?: string
}

type OpenChooser = (request: ChooserRequest) => void

const ChooserContext = createContext<OpenChooser | null>(null)

/** Opens the number chooser directly, e.g. after a form submit. Null outside the provider. */
export function useOpenContactChooser() {
  return useContext(ChooserContext)
}

/**
 * Click handler factory for WhatsApp / Call links. The link keeps its normal
 * href (the first number) so it still works without JavaScript; with the
 * provider mounted, clicking opens the chooser instead.
 */
export function useContactChooser() {
  const open = useContext(ChooserContext)
  return useCallback(
    (kind: ContactKind, message?: string) => (event: MouseEvent<HTMLElement>) => {
      if (!open) return
      event.preventDefault()
      open({ kind, message })
    },
    [open],
  )
}

const copy = {
  whatsapp: { eyebrow: 'WhatsApp', title: 'Choose a number to message', action: 'Message' },
  call: { eyebrow: 'Call', title: 'Choose a number to call', action: 'Call' },
} satisfies Record<ContactKind, { eyebrow: string; title: string; action: string }>

export function ContactChooserProvider({ children }: { children: ReactNode }) {
  const [request, setRequest] = useState<ChooserRequest | null>(null)
  const returnFocus = useRef<HTMLElement | null>(null)

  const open = useCallback<OpenChooser>((next) => {
    returnFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null
    setRequest(next)
  }, [])
  const close = useCallback(() => setRequest(null), [])

  return (
    <ChooserContext.Provider value={open}>
      {children}
      <AnimatePresence onExitComplete={() => returnFocus.current?.focus({ preventScroll: true })}>
        {request && <ChooserDialog key="contact-chooser" request={request} onClose={close} />}
      </AnimatePresence>
    </ChooserContext.Provider>
  )
}

function ChooserDialog({ request, onClose }: { request: ChooserRequest; onClose: () => void }) {
  const titleId = useId()
  const dialogRef = useRef<HTMLDivElement>(null)
  const text = copy[request.kind]
  const icon = request.kind === 'whatsapp' ? <WhatsAppIcon /> : <Phone strokeWidth={1.4} />

  useEffect(() => {
    dialogRef.current?.querySelector<HTMLElement>('a[href]')?.focus({ preventScroll: true })
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  /** Keeps Tab focus inside the dialog. */
  const trapFocus = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Tab' || !dialogRef.current) return
    const items = [...dialogRef.current.querySelectorAll<HTMLElement>('a[href], button')]
    const first = items[0]
    const last = items[items.length - 1]
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }

  return (
    <m.div
      className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: EASE_LUXE }}
    >
      <div aria-hidden className="absolute inset-0 bg-plum-950/55 backdrop-blur-[2px]" onClick={onClose} />

      {/* Bottom sheet on phones, centred card from sm up. */}
      <m.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onKeyDown={trapFocus}
        className="relative w-full max-w-md border-t border-gold-500/40 bg-ivory px-6 pt-7 pb-[max(1.75rem,env(safe-area-inset-bottom))] shadow-[0_-24px_60px_-30px_rgba(29,8,23,0.6)] sm:border sm:border-plum-900/10 sm:px-9 sm:py-9"
        initial={{ y: 32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 24, opacity: 0 }}
        transition={{ duration: 0.45, ease: EASE_LUXE }}
      >
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="eyebrow flex items-center gap-3 text-plum-700 [&>svg]:size-4">
              {icon}
              {text.eyebrow}
            </p>
            <h2 id={titleId} className="mt-3 font-serif text-[1.9rem] leading-tight text-plum-900">
              {text.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="-mt-1 -mr-2 flex size-11 shrink-0 cursor-pointer items-center justify-center text-plum-900 focus-visible:outline-2 focus-visible:outline-gold-500"
          >
            <X className="size-5" strokeWidth={1.5} aria-hidden />
          </button>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted">All three numbers reach the Sanskriti team.</p>

        <ul className="mt-6 border-t border-plum-900/10">
          {site.contact.phones.map((phone) => (
            <li key={phone.e164} className="border-b border-plum-900/10">
              <a
                href={request.kind === 'whatsapp' ? whatsappHref(request.message, phone.e164) : telHref(phone.e164)}
                {...(request.kind === 'whatsapp' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                onClick={onClose}
                className="group flex min-h-16 items-center gap-4 py-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
              >
                <span
                  aria-hidden
                  className="flex size-11 shrink-0 items-center justify-center rounded-full border border-gold-500/40 text-plum-700 transition-colors duration-500 ease-luxe group-hover:border-plum-900 group-hover:bg-plum-900 group-hover:text-gold-200 [&>svg]:size-[1.125rem]"
                >
                  {icon}
                </span>
                <span className="flex-1 text-[1.125rem] text-plum-900">{phone.display}</span>
                <span className="eyebrow flex items-center gap-2 text-gold-600">
                  {text.action}
                  <ArrowRight
                    aria-hidden
                    strokeWidth={1.5}
                    className="size-4 transition-transform duration-500 ease-luxe group-hover:translate-x-1"
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </m.div>
    </m.div>
  )
}

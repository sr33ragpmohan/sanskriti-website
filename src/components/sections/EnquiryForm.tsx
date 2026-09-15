import { useId, type FormEvent, type ReactNode } from 'react'
import { ChevronDown, Phone } from 'lucide-react'
import { eventTypes } from '../../content/enquiry'
import { mailtoHref, telHref, whatsappHref } from '../../lib/contact-links'
import { useContactChooser, useOpenContactChooser } from '../contact/ContactChooser'
import { buttonClasses } from '../ui/Button'
import { WhatsAppIcon } from '../ui/WhatsAppIcon'

const fieldClass =
  'mt-2 block w-full rounded-none border-0 border-b border-plum-900/20 bg-transparent px-0 py-3 text-base text-ink ' +
  'placeholder:text-muted/55 transition-[border-color,box-shadow] duration-300 ' +
  'focus:border-gold-600 focus:shadow-[0_1px_0_0_var(--color-gold-600)] focus:outline-none'

function Field({ label, htmlFor, optional, children }: { label: string; htmlFor: string; optional?: boolean; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="eyebrow text-muted">
        {label}
        {optional && <span className="ml-2 font-normal tracking-normal normal-case opacity-70">(optional)</span>}
      </label>
      {children}
    </div>
  )
}

/**
 * No backend needed: the enquiry is composed into a WhatsApp message. The
 * visitor picks which of our numbers to send it to, then reviews and sends it
 * in WhatsApp themselves.
 */
export function EnquiryForm() {
  const id = useId()
  const openChooser = useOpenContactChooser()
  const chooseNumber = useContactChooser()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const value = (key: string) => String(data.get(key) ?? '').trim()

    const lines = [
      'Hello Sanskriti, I would like to enquire about an event.',
      '',
      `Name: ${value('name')}`,
      `Event: ${value('eventType')}`,
    ]
    if (value('date')) lines.push(`Date: ${value('date')}`)
    if (value('location')) lines.push(`Location: ${value('location')}`)
    if (value('message')) lines.push('', value('message'))

    const message = lines.join('\n')
    if (openChooser) openChooser({ kind: 'whatsapp', message })
    else window.open(whatsappHref(message), '_blank', 'noopener,noreferrer')
  }

  return (
    // Edge-to-edge on phones so fields get the full screen width; a bordered card from sm up.
    <div className="-mx-6 border-y border-plum-900/10 bg-white px-6 py-10 sm:mx-0 sm:border-x sm:p-12">
      <h3 className="font-serif text-[2.1rem] leading-tight text-plum-900">Send us an enquiry</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Your details open in WhatsApp, ready for you to review and send. Nothing is stored on this website.
      </p>

      <form onSubmit={handleSubmit} className="mt-10 grid gap-8 sm:grid-cols-2">
        <Field label="Your name" htmlFor={`${id}-name`}>
          <input id={`${id}-name`} name="name" type="text" required autoComplete="name" className={fieldClass} />
        </Field>

        <Field label="Event type" htmlFor={`${id}-event`}>
          <div className="relative">
            <select id={`${id}-event`} name="eventType" defaultValue={eventTypes[0]} className={`${fieldClass} appearance-none pr-8`}>
              {eventTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
            <ChevronDown aria-hidden className="pointer-events-none absolute top-1/2 right-0 size-4 -translate-y-1/2 text-muted" />
          </div>
        </Field>

        <Field label="Date or month" htmlFor={`${id}-date`} optional>
          <input id={`${id}-date`} name="date" type="text" placeholder="e.g. January 2027" className={fieldClass} />
        </Field>

        <Field label="Location" htmlFor={`${id}-location`} optional>
          <input id={`${id}-location`} name="location" type="text" placeholder="City or venue" className={fieldClass} />
        </Field>

        <div className="sm:col-span-2">
          <Field label="Tell us about your celebration" htmlFor={`${id}-message`} optional>
            <textarea
              id={`${id}-message`}
              name="message"
              rows={3}
              placeholder="Guest count, ceremonies, the feel you have in mind…"
              className={`${fieldClass} resize-none`}
            />
          </Field>
        </div>

        <div className="flex flex-col gap-5 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
          <button type="submit" className={buttonClasses('primary', 'w-full cursor-pointer sm:w-auto')}>
            <WhatsAppIcon className="size-4" />
            Continue on WhatsApp
          </button>
          <p className="text-center text-sm text-muted sm:text-left">
            Or{' '}
            <a
              href={telHref()}
              onClick={chooseNumber('call')}
              className="inline-flex min-h-11 items-center gap-1.5 text-plum-900 underline decoration-gold-500/40 underline-offset-4 hover:decoration-gold-600"
            >
              <Phone aria-hidden className="size-3.5" />
              call us
            </a>
            <span className="mx-2 text-muted/50">·</span>
            <a href={mailtoHref()} className="inline-flex min-h-11 items-center text-plum-900 underline decoration-gold-500/40 underline-offset-4 hover:decoration-gold-600">
              email us
            </a>
          </p>
        </div>
      </form>
    </div>
  )
}

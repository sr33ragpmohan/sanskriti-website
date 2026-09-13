import { site } from '../config/site'

const DEFAULT_WHATSAPP_MESSAGE = `Hello Sanskriti, I would like to talk about planning an event.`

export const primaryPhone = site.contact.phones[0]

export function telHref(e164: string = primaryPhone.e164) {
  return `tel:${e164}`
}

export function whatsappHref(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`
}

export function mailtoHref(subject = 'Event enquiry') {
  return `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}`
}

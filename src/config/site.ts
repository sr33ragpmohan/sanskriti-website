/**
 * Single source of truth for business details.
 * Update contact information here — every section reads from this file.
 * (index.html also contains the same details in its SEO metadata / JSON-LD.)
 */

export interface PhoneNumber {
  /** Human-friendly format shown on the page. */
  display: string
  /** E.164 format used for tel: and WhatsApp links. */
  e164: string
}

export const site = {
  name: 'Sanskriti',
  legalName: 'Sanskriti Wedding Planners and Event Organizers',
  tagline: 'Wedding Planners & Event Organizers',
  url: 'https://sanskritieventplanners.online',
  domain: 'sanskritieventplanners.online',

  location: {
    city: 'Trivandrum',
    cityOfficial: 'Thiruvananthapuram',
    region: 'Kerala',
    country: 'India',
  },

  contact: {
    /**
     * Every "WhatsApp Us" and "Call Us" button lets the visitor choose one of
     * these numbers (all on WhatsApp). The first is also the no-JavaScript
     * fallback and the number shown in the footer.
     */
    phones: [
      { display: '+91 81569 68892', e164: '+918156968892' },
      { display: '+91 94972 64928', e164: '+919497264928' },
      { display: '+91 97785 17611', e164: '+919778517611' },
    ] satisfies PhoneNumber[],
    email: 'sanskritieventplannersonline@gmail.com',
  },

  logo: {
    src: '/brand/sanskriti-logo.jpg',
    alt: 'Sanskriti Wedding Planners and Event Organizers logo',
  },
} as const

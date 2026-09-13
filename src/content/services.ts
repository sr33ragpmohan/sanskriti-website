import {
  BedDouble,
  Brush,
  Camera,
  ClipboardCheck,
  Flower2,
  Landmark,
  MailOpen,
  MapPinned,
  Music,
  ShieldCheck,
  UtensilsCrossed,
  type LucideIcon,
} from 'lucide-react'

export interface Service {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

/** The first service is shown as the featured card. */
export const services: Service[] = [
  {
    id: 'full-wedding-planning',
    title: 'Full Wedding Planning',
    description:
      'Complete planning and coordination for your wedding — budget, vendors, rituals, guests and the day itself — brought together as one seamless plan.',
    icon: ClipboardCheck,
  },
  {
    id: 'destination-weddings',
    title: 'Destination Weddings',
    description:
      'Celebrations planned away from home, with venue, travel and guest logistics organised into a single itinerary.',
    icon: MapPinned,
  },
  {
    id: 'venue',
    title: 'Venue',
    description:
      'Finding a setting that suits your guest list, ceremonies, budget and the atmosphere you have in mind.',
    icon: Landmark,
  },
  {
    id: 'catering',
    title: 'Catering & Beverages',
    description: 'Menus and service planned around your guests, your traditions and the flow of the celebration.',
    icon: UtensilsCrossed,
  },
  {
    id: 'decoration',
    title: 'Decoration & Styling',
    description: 'Stage, mandapam, florals and lighting designed together as one cohesive visual story.',
    icon: Flower2,
  },
  {
    id: 'photography',
    title: 'Photography & Videography',
    description: 'Photo and film teams coordinated so every ritual, portrait and candid moment is captured.',
    icon: Camera,
  },
  {
    id: 'makeup-attire',
    title: 'Make-up & Attire',
    description: 'Bridal and family styling, make-up and attire arranged to suit each ceremony.',
    icon: Brush,
  },
  {
    id: 'entertainment',
    title: 'Entertainment',
    description: 'Music, performances and programme elements chosen to match the mood of every event.',
    icon: Music,
  },
  {
    id: 'accommodation-transport',
    title: 'Accommodation & Transport',
    description: 'Guest stays and movement planned so family and friends arrive comfortably and on time.',
    icon: BedDouble,
  },
  {
    id: 'security',
    title: 'Security & Crowd Management',
    description: 'Planned entry, guest flow and on-ground coordination for a calm, well-managed event.',
    icon: ShieldCheck,
  },
  {
    id: 'invitations',
    title: 'Invitations',
    description: 'Invitation design and distribution that sets the tone for your celebration from the first glance.',
    icon: MailOpen,
  },
]

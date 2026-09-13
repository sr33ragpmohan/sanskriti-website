export interface Principle {
  title: string
  description: string
}

/** Opening section copy — Sanskriti's focus on Guruvayoor weddings. */
export const guruvayoorIntro = {
  eyebrow: 'Weddings at Guruvayoor',
  paragraphs: [
    'It is a deeply meaningful occasion that brings together tradition, family and countless details.',
    'Sanskriti brings together the essential services required to plan and execute your wedding seamlessly — from venue and catering to décor, photography, accommodation, transportation and guest management.',
  ],
  /** Rendered as a three-line pull statement. */
  promise: ['One team.', 'One point of coordination.', 'Every detail taken care of.'],
  company: 'Sanskriti Wedding Planners & Event Organizers is based in Trivandrum and was started by four partners.',
}

export const principles: Principle[] = [
  { title: 'Thoughtful planning', description: 'A clear plan shaped around your family, traditions and priorities.' },
  { title: 'Attention to detail', description: 'The small things considered, so nothing important is left to chance.' },
  { title: 'Coordination', description: 'Vendors, schedules and people working to a single plan.' },
  { title: 'Aesthetics', description: 'Décor and styling that feel cohesive, elegant and personal.' },
  { title: 'Guest experience', description: 'Arrivals, comfort and hospitality planned with your guests in mind.' },
  { title: 'Smooth execution', description: 'A calm, well-run day, managed on the ground from start to finish.' },
]

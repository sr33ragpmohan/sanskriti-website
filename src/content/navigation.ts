export interface NavItem {
  label: string
  href: `#${string}`
}

export const navigation: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Approach', href: '#approach' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

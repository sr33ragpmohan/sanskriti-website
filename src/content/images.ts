import type { ImageAsset } from '../lib/images'

/**
 * ALL SITE IMAGERY LIVES HERE.
 *
 * Every image below is a temporary placeholder (Unsplash / Pexels, free
 * licences), used as visual inspiration only — none are photographs of
 * Sanskriti events. Apart from the hero, they show details, décor and temples
 * rather than identifiable faces, so the site never presents another family's
 * wedding as Sanskriti's work.
 *
 * To replace one with real photography:
 *   1. Put the file in /public/images/ (e.g. /public/images/gallery/guruvayoor-ceremony.jpg).
 *   2. Change `src` to '/images/gallery/guruvayoor-ceremony.jpg'.
 *   3. Update `alt`, and set `placeholder: false` (or delete the line).
 * Once no gallery image is a placeholder, the "visual inspiration" note disappears.
 *
 * Only use photographs Sanskriti owns or has permission to publish.
 *
 * Crops: the hero sits in a tall arch, the About images are portrait, the
 * featured service image is roughly square. `position` fine-tunes the crop.
 * `credit` links to the original photo page.
 */

export const images = {
  hero: {
    src: 'https://images.unsplash.com/photo-1654156577076-e0350ba86cc1',
    alt: 'A bride and groom’s hands joined beside the sacred fire during a Hindu wedding ritual',
    placeholder: true,
    credit: 'https://unsplash.com/photos/a-close-up-of-two-people-holding-hands-lAze38kfdAs',
    position: '46% 50%',
  },
  about: {
    src: 'https://images.unsplash.com/photo-1680490964820-7afb13f2e35c',
    alt: 'A bride’s hands with red bridal bangles and henna, holding a bouquet of red roses',
    placeholder: true,
    credit: 'https://unsplash.com/photos/a-close-up-of-a-brides-hands-holding-a-bouquet-of-flowers-ZQJzMDWyqEI',
    position: '55% 50%',
  },
  aboutDetail: {
    src: 'https://images.unsplash.com/photo-1775427528127-a66ce3bb2bcb',
    alt: 'A lit brass oil lamp',
    placeholder: true,
    credit: 'https://unsplash.com/photos/a-brass-oil-lamp-with-two-flames-burning-7tzPYzbCQtM',
    position: '40% 50%',
  },
  featuredService: {
    src: 'https://images.unsplash.com/photo-1745573674206-1d4805fcc427',
    alt: 'A wedding stage decorated with red and white flowers, drapes and seating for the couple',
    placeholder: true,
    credit: 'https://unsplash.com/photos/a-beautifully-decorated-stage-for-a-wedding-owF2GbJnxlc',
    position: '50% 55%',
  },
  cta: {
    // Decorative background — empty alt on purpose.
    src: 'https://images.unsplash.com/photo-1771929712047-3e7022669175',
    alt: '',
    placeholder: true,
    credit: 'https://unsplash.com/photos/many-brass-oil-lamps-lit-with-flickering-flames-xQBOW3d1uxo',
  },
} satisfies Record<string, ImageAsset>

/**
 * Gallery photographs, no captions. On desktop the masonry fills column by
 * column, so items 1, 3 and 5 form the top row and 2, 4 and 6 the second row.
 */
export const galleryImages: ImageAsset[] = [
  {
    src: 'https://images.unsplash.com/photo-1768341395921-93a8444e007e',
    alt: 'Hands tying a sacred thread during a traditional Hindu wedding ceremony',
    placeholder: true,
    credit: 'https://unsplash.com/photos/hands-tying-a-sacred-thread-during-a-traditional-ceremony-3Dj4SNHu28c',
  },
  {
    // Pexels serves resized images via query parameters.
    src: 'https://images.pexels.com/photos/33928310/pexels-photo-33928310.jpeg?auto=compress&cs=tinysrgb&w=1000',
    alt: 'A traditional Kerala temple with a golden flagstaff and marigold garlands',
    placeholder: true,
    credit: 'https://www.pexels.com/photo/traditional-temple-in-tropical-landscape-33928310/',
  },
  {
    src: 'https://images.unsplash.com/photo-1731441326210-bfcb6595e93a',
    alt: 'A bride’s hands with gold bangles and henna resting on gold embroidered fabric',
    placeholder: true,
    credit: 'https://unsplash.com/photos/a-close-up-of-a-womans-hands-with-gold-jewelry-MOT1EDUYJTU',
  },
  {
    src: 'https://images.unsplash.com/photo-1744805624954-a6686543c3ff',
    alt: 'A wedding mandap decorated with cascading golden floral strands',
    placeholder: true,
    credit: 'https://unsplash.com/photos/a-beautifully-decorated-stage-set-for-a-ceremony-UX3-_dGbCzk',
  },
  {
    src: 'https://images.unsplash.com/photo-1772127822454-8566c23084df',
    alt: 'A jasmine garland with pearls beside brass lamps',
    placeholder: true,
    credit: 'https://unsplash.com/photos/jasmine-garland-with-pearls-on-a-table-3lUv0ZynLLE',
  },
  {
    src: 'https://images.unsplash.com/photo-1772127822562-a898d9f5733c',
    alt: 'An outdoor wedding mandap decorated with flowers, with seating for guests',
    placeholder: true,
    credit: 'https://unsplash.com/photos/outdoor-wedding-ceremony-setup-with-elegant-seating-arrangements--fEotnMjQ70',
  },
]

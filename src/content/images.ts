import type { ImageAsset } from '../lib/images'

/**
 * ALL SITE IMAGERY LIVES HERE.
 *
 * Every image below is a temporary placeholder from Unsplash (free licence),
 * used as visual inspiration only — none are photographs of Sanskriti events.
 * Apart from the hero, they deliberately show details (jasmine, brass lamps,
 * sadya, rituals, temple architecture) rather than identifiable couples, so the
 * site never presents another family's wedding as Sanskriti's work.
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
 * `credit` links to the original Unsplash page.
 */

export interface GalleryItem {
  image: ImageAsset
  caption: string
}

export const images = {
  hero: {
    src: 'https://images.unsplash.com/photo-1654156577076-e0350ba86cc1',
    alt: 'A bride and groom’s hands joined beside the sacred fire during a Hindu wedding ritual',
    placeholder: true,
    credit: 'https://unsplash.com/photos/a-close-up-of-two-people-holding-hands-lAze38kfdAs',
    position: '46% 50%',
  },
  about: {
    src: 'https://images.unsplash.com/photo-1783255166275-412695f76a2a',
    alt: 'Strands of jasmine woven into a bride’s long dark hair',
    placeholder: true,
    credit: 'https://unsplash.com/photos/long-dark-hair-adorned-with-jasmine-flowers-oLeO8eLkuEs',
    position: '50% 40%',
  },
  aboutDetail: {
    src: 'https://images.unsplash.com/photo-1775427528127-a66ce3bb2bcb',
    alt: 'A lit brass oil lamp',
    placeholder: true,
    credit: 'https://unsplash.com/photos/a-brass-oil-lamp-with-two-flames-burning-7tzPYzbCQtM',
    position: '40% 50%',
  },
  featuredService: {
    src: 'https://images.unsplash.com/photo-1783255166346-b7c82195ba34',
    alt: 'A brass pot with coconut, bananas and oil lamps arranged for a wedding ritual',
    placeholder: true,
    credit: 'https://unsplash.com/photos/brass-pot-coconut-bananas-and-oil-lamps-for-a-ritual-gc-JtFntUSU',
    position: '50% 60%',
  },
  cta: {
    // Decorative background — empty alt on purpose.
    src: 'https://images.unsplash.com/photo-1771929712047-3e7022669175',
    alt: '',
    placeholder: true,
    credit: 'https://unsplash.com/photos/many-brass-oil-lamps-lit-with-flickering-flames-xQBOW3d1uxo',
  },
} satisfies Record<string, ImageAsset>

export const galleryItems: GalleryItem[] = [
  {
    caption: 'Rituals',
    image: {
      src: 'https://images.unsplash.com/photo-1768341395921-93a8444e007e',
      alt: 'Hands tying a sacred thread during a traditional Hindu wedding ceremony',
      placeholder: true,
      credit: 'https://unsplash.com/photos/hands-tying-a-sacred-thread-during-a-traditional-ceremony-3Dj4SNHu28c',
    },
  },
  {
    caption: 'Temple Traditions',
    image: {
      src: 'https://images.unsplash.com/photo-1788614347238-05fdd744d60d',
      alt: 'A traditional Kerala temple with a tiled roof beside a green temple pond',
      placeholder: true,
      credit: 'https://unsplash.com/photos/kerala-temple-beside-green-pond-BL2Y0aaVl24',
      position: '55% 50%',
    },
  },
  {
    caption: 'Jasmine',
    image: {
      src: 'https://images.unsplash.com/photo-1780247584867-d332ed89d423',
      alt: 'Strings of white jasmine garlands hanging in rows',
      placeholder: true,
      credit: 'https://unsplash.com/photos/white-jasmine-flower-garlands-hanging-from-a-wooden-stick-od2IVIAMIjM',
    },
  },
  {
    caption: 'Sadya',
    image: {
      src: 'https://images.unsplash.com/photo-1625398407796-82650a8c135f',
      alt: 'A traditional Kerala sadya served on a banana leaf',
      placeholder: true,
      credit: 'https://unsplash.com/photos/traditional-south-indian-meal-on-leaf-yCIcDyKm440',
    },
  },
  {
    caption: 'Details',
    image: {
      src: 'https://images.unsplash.com/photo-1772127822454-8566c23084df',
      alt: 'A jasmine garland with pearls beside brass lamps',
      placeholder: true,
      credit: 'https://unsplash.com/photos/jasmine-garland-with-pearls-on-a-table-3lUv0ZynLLE',
    },
  },
  {
    caption: 'Brass & Light',
    image: {
      src: 'https://images.unsplash.com/photo-1760835249761-dc1ad2d7d759',
      alt: 'Ornate traditional brass oil lamps',
      placeholder: true,
      credit: 'https://unsplash.com/photos/several-ornate-brass-oil-lamps-with-lit-flames-CfcTreCI3pg',
    },
  },
]

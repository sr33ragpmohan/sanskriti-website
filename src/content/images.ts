import type { ImageAsset } from '../lib/images'

/**
 * ALL SITE IMAGERY LIVES HERE.
 *
 * Every image below is a temporary placeholder from Unsplash (Hindu / Kerala
 * wedding imagery), used as visual inspiration only — none are photographs of
 * Sanskriti events.
 *
 * To replace one with real photography:
 *   1. Put the file in /public/images/ (e.g. /public/images/gallery/guruvayur-ceremony.jpg).
 *   2. Change `src` to '/images/gallery/guruvayur-ceremony.jpg'.
 *   3. Update `alt`, and set `placeholder: false` (or delete the line).
 * Once no gallery image is a placeholder, the "visual inspiration" note disappears.
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
    src: 'https://images.unsplash.com/photo-1727430228383-aa1fb59db8bf',
    alt: 'A bride in a traditional Kerala silk saree with gold jewellery',
    placeholder: true,
    credit: 'https://unsplash.com/photos/a-woman-in-a-sari-posing-for-a-picture-Rm9DL9DmGi4',
    position: '50% 25%',
  },
  aboutDetail: {
    src: 'https://images.unsplash.com/photo-1727430201245-fb796167e302',
    alt: 'A Kerala bride and groom embraced by family members',
    placeholder: true,
    credit: 'https://unsplash.com/photos/a-couple-of-people-that-are-hugging-each-other-VJP7K4uihUA',
    position: '40% 40%',
  },
  featuredService: {
    src: 'https://images.unsplash.com/photo-1744805624954-a6686543c3ff',
    alt: 'A wedding stage decorated with cascading golden floral strands at dusk',
    placeholder: true,
    credit: 'https://unsplash.com/photos/a-beautifully-decorated-stage-set-for-a-ceremony-UX3-_dGbCzk',
  },
  cta: {
    // Decorative background — empty alt on purpose.
    src: 'https://images.unsplash.com/photo-1779540894601-f852a255efbe',
    alt: '',
    placeholder: true,
    credit: 'https://unsplash.com/photos/traditional-building-and-tree-illuminated-with-festive-lights-at-night-pMReUvJTyQA',
  },
} satisfies Record<string, ImageAsset>

export const galleryItems: GalleryItem[] = [
  {
    caption: 'Ceremonies',
    image: {
      src: 'https://images.unsplash.com/photo-1574017144578-85168ddb5040',
      alt: 'A South Indian Hindu bride and groom in garlands during their wedding ceremony',
      placeholder: true,
      credit: 'https://unsplash.com/photos/people-gathering-in-wedding-ceremony-surrounded-with-people-sDHb-yIvGvg',
      position: '30% 50%',
    },
  },
  {
    caption: 'Portraits',
    image: {
      src: 'https://images.unsplash.com/photo-1671852781674-c7dca34a1964',
      alt: 'A Kerala bride and groom wearing wedding garlands',
      placeholder: true,
      credit: 'https://unsplash.com/photos/a-man-and-a-woman-standing-next-to-each-other-ZghCtT63KMk',
      position: '38% 50%',
    },
  },
  {
    caption: 'Rituals',
    image: {
      src: 'https://images.unsplash.com/photo-1754782915842-aa4fca6c203a',
      alt: 'A couple showered with flower petals during a traditional Hindu wedding ceremony',
      placeholder: true,
      credit: 'https://unsplash.com/photos/couple-showered-with-flower-petals-during-traditional-indian-wedding-ceremony-v5sG5-zYthE',
    },
  },
  {
    caption: 'The Bride',
    image: {
      src: 'https://images.unsplash.com/photo-1673413349218-ba4de23c2958',
      alt: 'A bride in a silk saree and temple jewellery',
      placeholder: true,
      credit: 'https://unsplash.com/photos/a-woman-in-a-sari-and-jewelry-posing-for-a-picture-wrRVsNyuCW4',
    },
  },
  {
    caption: 'Blessings',
    image: {
      src: 'https://images.unsplash.com/photo-1741201864879-c5e7f81c98b0',
      alt: 'A bride receiving blessings as petals fall during a Hindu wedding',
      placeholder: true,
      credit: 'https://unsplash.com/photos/bride-and-groom-celebrate-a-hindu-wedding-ceremony-etDySNihXU0',
    },
  },
  {
    caption: 'Moments',
    image: {
      src: 'https://images.unsplash.com/photo-1682933766299-81bf6fc4f2cb',
      alt: 'A Kerala bride and groom in wedding garlands walking hand in hand',
      placeholder: true,
      credit: 'https://unsplash.com/photos/a-man-and-woman-walking-down-a-street-holding-hands-b9xLrj7w2AY',
    },
  },
]

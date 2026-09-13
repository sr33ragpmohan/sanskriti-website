# Sanskriti — Wedding Planners & Event Organizers

Single-page website for **sanskritieventplanners.online** (Trivandrum, Kerala).

React 19 · TypeScript · Vite 7 · Tailwind CSS 4 · Framer Motion (LazyMotion) · Lucide icons · self-hosted fonts (Cormorant Garamond + Manrope).

## Commands

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck → client build → SSR build → prerender into dist/index.html
npm run preview    # serve the production build
```

`dist/` is a static site — deploy it to any static host (Netlify, Vercel, Cloudflare Pages, S3, cPanel).

## Where to edit things

| What | File |
| --- | --- |
| Phone numbers, WhatsApp number, email, domain, logo path | `src/config/site.ts` |
| Colours, fonts, easing (brand tokens) | `src/index.css` (`@theme`) |
| **All images** (hero, about, CTA, gallery) | `src/content/images.ts` |
| Services (title, description, icon) | `src/content/services.ts` |
| About copy + principles | `src/content/about.ts` |
| Approach steps | `src/content/approach.ts` |
| Navigation links | `src/content/navigation.ts` |
| Enquiry form event types | `src/content/enquiry.ts` |
| SEO title/description, Open Graph, JSON-LD | `index.html` |

Contact details also appear in `index.html` (JSON-LD + `<noscript>`) — update both when they change.

## Replacing placeholder photography

Every image is currently an Unsplash placeholder (Hindu / Kerala wedding imagery) marked
`placeholder: true`. They are **not** photographs of Sanskriti events.

1. Add the photo to `public/images/…` (e.g. `public/images/gallery/guruvayur-ceremony.jpg`).
2. In `src/content/images.ts`, set `src: '/images/gallery/guruvayur-ceremony.jpg'`, update `alt`, remove `placeholder`.
3. Optional: `position: '50% 30%'` fine-tunes the crop.

The gallery's "visual inspiration" note disappears automatically once no gallery item is a placeholder.
The mosaic layout repeats every six images, so adding more keeps it balanced.

Local images are served as-is — export them at a sensible size (≈2400px wide for the hero, ≈1400px for gallery tiles) and compress them (WebP/AVIF or quality ~75 JPEG).

## Structure

```
src/
  config/site.ts            business details (single source of truth)
  content/                  copy, services, images — data only
  components/
    layout/                 Navbar, MobileMenu, Footer
    sections/               Hero, About, Services, Approach, Gallery, CallToAction, Contact, EnquiryForm
    ui/                     Button, Container, SectionHeading, Reveal, Logo, ResponsiveImage, WhatsAppIcon
  lib/                      contact links (tel/wa.me/mailto), image helpers, motion presets
  entry-server.tsx          build-time prerender entry
scripts/prerender.mjs       injects rendered HTML into dist/index.html
public/                     logo, favicon, robots.txt, sitemap.xml
```

## Notes

- **WhatsApp** uses the first phone number (`site.contact.whatsapp`). Change it there if another partner handles WhatsApp.
- The enquiry form has no backend: it composes a WhatsApp message the visitor reviews and sends.
- Motion respects `prefers-reduced-motion`. The hero entrance is pure CSS so it plays before hydration.
- `public/brand/business-card-reference.jpg` is the original brand reference and is not used on the page — delete it before deploying if you prefer.

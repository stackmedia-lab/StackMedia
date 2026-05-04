# Stack Media — Performance Marketing Studio

A complete Next.js 14 website with Sanity CMS for Stack Media, a performance marketing agency.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Sanity v3** (CMS + Studio)
- **Vercel** (deployment)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up Sanity

1. Go to [sanity.io/manage](https://sanity.io/manage) and create a new project
2. Copy your **Project ID** and **Dataset** name
3. Create a `.env.local` file:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
```

4. In your Sanity project settings → API → CORS Origins, add:
   - `http://localhost:3000` (for local dev)
   - `https://your-domain.vercel.app` (for production)

### 3. Run locally

```bash
npm run dev
```

Visit:
- **Website:** http://localhost:3000
- **Sanity Studio:** http://localhost:3000/studio

## Deploying to Vercel

1. Push your code to GitHub
2. Import the repo in [vercel.com](https://vercel.com)
3. Add environment variables:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
4. Deploy — it just works.

## Content Management (Sanity Studio)

After deploying, visit `/studio` to manage:

- **Case Studies** — Add/edit projects with metrics, images, and full body content
- **Blog Posts** — Write articles with rich text, author, and category
- **Services** — Override the static service data with CMS content
- **Settings** — Site title, contact email, social links, SEO defaults

## Project Structure

```
app/
├── page.tsx              # Homepage
├── about/page.tsx        # Studio/About page
├── contact/page.tsx      # Contact form
├── projects/             # Case studies
│   ├── page.tsx
│   └── [slug]/page.tsx
├── blog/                 # Insights/Blog
│   ├── page.tsx
│   └── [slug]/page.tsx
├── services/             # Services
│   ├── page.tsx
│   └── [slug]/page.tsx   # Dynamic service pages
└── studio/               # Sanity Studio (embedded)

components/
├── Header.tsx            # Sticky nav with mega menu
├── Footer.tsx            # Footer with CTA
├── Reveal.tsx            # Scroll animation wrapper
├── Marquee.tsx           # Scrolling client ticker
└── Stat.tsx              # Animated counter

lib/
├── mock.ts               # All static fallback data
├── serviceData.ts        # Detailed service page content
└── sanity.ts             # Sanity client & helpers

sanity/
└── schemas/              # All Sanity document types
    ├── project.ts
    ├── post.ts
    ├── service.ts
    └── settings.ts
```

## Customization

- **Colors:** Edit `tailwind.config.ts` — `accent`, `ink`, `cream`, `line`
- **Agency name/data:** Edit `lib/mock.ts` and `lib/serviceData.ts`
- **Fonts:** Edit `app/layout.tsx` — currently using DM Sans from Google Fonts
- **Contact form:** `app/contact/page.tsx` — wire up to Resend, Formspree, or any API

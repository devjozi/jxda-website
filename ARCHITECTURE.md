# Architecture — JX Distribution
<!-- Purpose: Summarize architecture and deployment model. -->

## Stack

- **Next.js for entire project:** Main site and commerce are in the same Next.js app (server-capable), with static export used on current hosting plan.
- **Main site:** TypeScript, Bootstrap/template CSS and JS in `/public`; design matches `reference/original-template/`
- **Commerce (planned):** Product list, product detail, checkout, payment; route TBD (e.g. `/shop`) or subdomain
- **Build:** `npm run build` (server) or `npm run build:static` (current hosting)
- **Hosting:** Hostinger static now; upgrade to Node.js plan later

## Structure

- `app/` — Next.js App Router (layout, pages, components)
- `public/` — CSS, JS, images, fonts (template assets)
- Commerce routes or separate app TBD

## Data

- Product data: static (e.g. JSON) at build time for now; backend/API later if needed
- Payment: provider TBD (e.g. Paystack, Stripe); integrate when checkout is in place
- **Services metadata:** Centralized in `lib/services-data.ts` (single source of truth for title, slug, description, and image filenames across all pages)

## Images

Services use a **context-aware folder structure** to support independent updates:

- `public/images/services/home/` — Homepage service card images (service1.jpg–service8.jpg)
- `public/images/services/catalog/` — Services listing and detail page images (slug-based filenames: `route-to-market.jpg`, `social-media-marketing.jpg`, etc.)
- `public/images/banner/` — Page banner backgrounds
- `public/images/slider/` — Homepage carousel images (bg1.jpg–bg5.jpg)
- `public/images/clients/` — Testimonial avatars and logos
- `public/images/parallax/` — Parallax section backgrounds
- `public/images/team/` — Team member photos (future)

**Key Design:**
- `lib/services-data.ts` centralizes service metadata and image filenames, preventing drift
- Homepage and services listing/detail pages can use different images for the same service
- Slug-based naming in catalog makes images self-documenting (no need to guess which service "service3.jpg" belongs to)

**Updating Images:** See [IMAGE_UPDATES.md](IMAGE_UPDATES.md) for comprehensive instructions.

## CI/CD

- GitHub Actions: static export deploy to Hostinger via SSH (see `.github/workflows/deploy.yml`)

### Static Export Constraints
- API routes (e.g., `/api/contact`) are not available on static hosting.
- Use external serverless endpoints for forms and email.

## Deployment

### Development
- Local: `npm run dev` (http://localhost:3000)
- Hot reload enabled

### Preview/Staging
- **Trigger:** Push to `develop`
- **URL:** `https://preview.jxdistributionafrica.com`
- **Purpose:** Internal preview before production

### Production (Automatic)
- **Trigger:** Push to `main`
- **URL:** `https://www.jxdistributionafrica.com` (custom domain)
- **Process:**
	1. Push to `main`
	2. GitHub Actions deploys static export
	3. Verify production

### Environment Variables
- **Local:** `.env.local` (gitignored)
- **Hostinger:** Not required for static export
- **Required (static):**
	- `NEXT_PUBLIC_CONTACT_FORM_ACTION` -- Serverless form endpoint
	- `NEXT_PUBLIC_WHATSAPP_NUMBER` -- WhatsApp business number (future)

# Preview and publish — JX Distribution
<!-- Purpose: Steps for local preview, internal preview, and publish. -->

Use this to **preview locally** and then **publish** the site.

---

## Part 1: Local preview

### 1. Start the dev server

```bash
npm install
npm run dev
```

Open **http://localhost:3000** (or the URL shown in the terminal).

---

### 2. What you should see and do in the browser

#### Homepage (http://localhost:3000 or http://localhost:3000/)

- **Header**  
  - Logo (top left): click → goes to home.  
  - Top bar: phone and email from `lib/site.ts` (placeholders until you update).  
  - Nav: **Home**, **Shop**, Company (dropdown), Services, Features, News, **Contact**.  
  - **Contact** and **Request a Quote** (right): click → page scrolls to the “Request a call back” form at the bottom.

- **Hero carousel**  
  - Three slides with background images.  
  - **Expect:** After a few seconds the slide may auto-advance (if Bootstrap carousel runs).  
  - **Click:** Left/right arrows or the dots at the bottom → slide changes.  
  - **Click:** “Know More” → scrolls to features; “View Products” → goes to `/shop`.

- **Features (3 boxes)**  
  - Reliable Services, Global Coverage, Cost Savings.  
  - **Click:** “Read More” → `/shop`.

- **Why JX Distribution**  
  - Section with 6 benefit items and a center image.  
  - **Expect:** Layout matches template; no interaction needed.

- **Our Services (6 cards)**  
  - Air Freight, Ocean Freight, etc.  
  - **Click:** “View Products” → `/shop`.

- **FAQ + Testimonials**  
  - **FAQ:** Click each question → that answer expands/collapses (Bootstrap accordion).  
  - **Testimonials:** If Owl Carousel loaded, you may see a slider with arrows; otherwise two quote boxes.

- **Facts (stats)**  
  - “Experience in Logistics & Distribution” and three numbers.  
  - **Expect:** Numbers may animate (counterUp) when you scroll to the section, if waypoints/custom.js ran.

- **Quote / Request a call back**  
  - Form: Full Name, Email, Comments.  
  - **Do:** Fill Name and Email, add a comment, click **Contact Us**.  
  - **Expect:** Form is replaced by “Thank you — We’ll be in touch” (no real submission yet).

- **Footer**  
  - JX name and tagline; Quick Links (Home, Shop, Our Services, FAQs, Contact Us); address/email/phone from `lib/site.ts`; copyright; social icons.  
  - **Click:** Quick Links → home, shop, or scroll to sections/contact.

---

#### Shop (http://localhost:3000/shop)

- **Expect:** Four product cards (Express Freight, Ocean Cargo, Warehouse Storage, Ground Transport) with image, short description, price (GHS), and **View details**.
- **Click:** **View details** on one product → product detail page.

---

#### Product detail (e.g. http://localhost:3000/shop/express-freight)

- **Expect:** Breadcrumb (Home → Shop → product name), large image, name, description, price, **Add to cart / Checkout**, **Back to shop**.
- **Click:** **Add to cart / Checkout** → `/shop/checkout?product=express-freight`.
- **Click:** **Back to shop** → `/shop`.

---

#### Checkout (http://localhost:3000/shop/checkout)

- **Expect:** “Checkout” heading and a short “Coming soon” message; **Back to shop** link.
- **Click:** **Back to shop** → `/shop`.

---

#### 404 (e.g. http://localhost:3000/shop/invalid-slug or http://localhost:3000/any-missing-page)

- **Expect:** “Page not found” with **Home** and **Shop** buttons.
- **Click:** **Home** or **Shop** → back to site.

---

### 3. Quick checklist (what to click and expect)

| Where | Action | Expected result |
|-------|--------|-----------------|
| Home | Click logo | Back to top of home |
| Home | Click “Shop” in nav | Go to `/shop` |
| Home | Click “Request a Quote” or “Contact” | Scroll to quote form |
| Home | Carousel arrows/dots | Slide changes |
| Home | FAQ question | Answer expands/collapses |
| Home | Fill form, “Contact Us” | “Thank you” message |
| Home | Footer “Shop” | Go to `/shop` |
| Shop | “View details” on a product | Product detail page |
| Product | “Add to cart / Checkout” | Checkout page (coming soon) |
| Product | “Back to shop” | Back to `/shop` |
| Checkout | “Back to shop” | Back to `/shop` |
| Any invalid URL | — | 404 with Home/Shop links |

---

## Part 2: Build and publish (static hosting)

### 1. Build static export

```bash
npm run build:static
```

- **Expect:** Build finishes without errors and outputs `/out`.

### 2. Test the built site locally (optional)

```bash
npx serve out
```

Open the URL shown. Click through Home → Shop → one product → Checkout and 404 as above to confirm behavior matches dev.

### 3. Publish to Hostinger (static)

**CI/CD (recommended):**
- Push to `develop` for internal preview at `https://preview.jxdistributionafrica.com`.
- Push to `main` for production; GitHub Actions deploys `/out` to Hostinger.

**GitHub Secrets required (Actions):**
- `HOSTINGER_SSH_KEY`
- `HOSTINGER_HOST`
- `HOSTINGER_PORT`
- `HOSTINGER_USER`
- `HOSTINGER_DEPLOY_PATH_PREVIEW` (preview root path)
- `HOSTINGER_DEPLOY_PATH_PROD` (production root path)

Preview contract:
- Canonical preview URL: `https://preview.jxdistributionafrica.com/`
- `HOSTINGER_DEPLOY_PATH_PREVIEW` must exactly match the hPanel document root for that subdomain.
- Deploy workflow now verifies remote `index.html` and `.htaccess`, then checks HTTP status immediately after deploy.

**Manual (if needed):**
1. Upload the **contents of `/out`** to the preview folder:
  - `/home/u959952771/domains/jxdistributionafrica.com/public_html/preview`
2. Upload the **contents of `/out`** to production:
  - `/home/u959952771/domains/jxdistributionafrica.com/public_html`

### 4. After publish — what to check on the live site

- Homepage loads; carousel, FAQ, form thank-you, and footer work.  
- `/shop` shows the four products.  
- `/shop/express-freight` (and other product slugs) load.  
- `/shop/checkout` shows “Coming soon”.  
- A wrong URL (e.g. `/shop/not-a-product`) shows the 404 page.  
- Update **`lib/site.ts`** with real Ghana contact details and social links, then rebuild and re-upload so the live site shows correct info.

### 5. Contact form (serverless)

- Set `NEXT_PUBLIC_CONTACT_FORM_ACTION` in `.env.local` to your provider endpoint (Formspree/Getform/etc.).
- Example (Formspree): `https://formspree.io/f/yourFormId`

---

## Summary

- **Preview:** `npm run dev` → open http://localhost:3000 → use the table and sections above to click and verify.  
- **Publish:** `npm run build:static` → deploy `/out` to Hostinger (CI/CD preferred) → re-check the same flows on the live URL.  
- **Content:** Edit `lib/site.ts` (and optionally `lib/products.ts`) when you have final copy, then build and deploy again.

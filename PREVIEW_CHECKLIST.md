# Preview checklist — after `npm run dev`

Use this when previewing changes at http://localhost:3000 (or the port shown in the terminal).

---

## Homepage (/)

- [ ] **Header** — Logo links to home; top bar shows JX contact (phone, email from `lib/site.ts`); nav has Home, Shop, Company, Services, etc.; Contact and “Request a Quote” go to #quote-area.
- [ ] **Hero carousel** — Three slides with background images; arrows/indicators work (Bootstrap JS); “Know More” / “View Products” links go to #ts-features-light and /shop.
- [ ] **Features Light** — Three service boxes (Reliable, Global Coverage, Cost Savings); images load; “Read More” → /shop.
- [ ] **Why JX Distribution** — Section title “Why JX Distribution?”; 6 benefit boxes + center image; no broken images.
- [ ] **Our Services** — “What We Do” / “Our Services”; 6 service cards with images; “View Products” → /shop.
- [ ] **FAQ + Testimonials** — FAQ accordion (click to expand/collapse); testimonial area visible (carousel may need owl.carousel JS if not loaded).
- [ ] **Facts** — “Experience in Logistics & Distribution” and three stats (counterUp may need waypoints/counter JS).
- [ ] **Quote / CTA** — “Get a Quick Quote”; “Request a call back” form; transport image; “Contact Us” button.
- [ ] **Footer** — JX name and tagline; Quick Links (Home, Shop, Our Services, FAQs, Contact Us); address/email/phone from `lib/site.ts`; copyright “JX Distribution”; social icons.

---

## Shop (/shop)

- [ ] **Product list** — Four product cards (Express Freight, Ocean Cargo, Warehouse Storage, Ground Transport); images and prices (GHS); “View details” links to /shop/[slug].
- [ ] **Header/Footer** — Same as homepage.

---

## Product detail (/shop/express-freight, etc.)

- [ ] **Breadcrumb** — Home → Shop → Product name.
- [ ] **Content** — Product image, name, description, price; “Add to cart / Checkout” → /shop/checkout?product=…; “Back to shop” → /shop.
- [ ] **404** — /shop/invalid-slug shows Not Found.

---

## Checkout (/shop/checkout)

- [ ] **Placeholder** — “Coming soon” message; “Back to shop” link.

---

## General

- [ ] **Images** — All under `/images/` load (no 404s in Network tab).
- [ ] **CSS** — Bootstrap + style.css applied; layout not broken on narrow viewport (responsive).
- [ ] **Links** — Internal links use `/` and `/shop` (no .html); anchor links (#quote-area, #ts-services, #testimonial-area) scroll correctly.
- [ ] **Build** — `npm run build` completes; `out/` contains static HTML for /, /shop, /shop/express-freight, etc.

---

**After checking:** Note any failing items and fix or document in PROGRESS.md (Known issues).

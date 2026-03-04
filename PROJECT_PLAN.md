# PROJECT PLAN — JX Distribution E-Commerce

**Version:** 1.0.0  
**Last Updated:** 2026-02-15  
**Status:** Planning Complete → Execution Ready

---

## 🎯 **PROJECT GOAL**

Transform JX Distribution Africa website from a marketing-only site to a **full-featured e-commerce platform** with:
- Real product catalog (50+ products)
- Shopping cart and checkout
- WhatsApp-based order workflow (pending payment integration)
- Production-ready CI/CD pipeline
- Internal preview environment for testing

---

## 📋 **COMPLETE TODO LIST → SPRINT MAPPING**

### **PRIORITY 0: DEPLOYMENT FOUNDATION** ⚡ **(DO THIS FIRST)**

**Goal:** Get current site deployed to preview environment with proper CI/CD

| # | Task | Branch | Status |
|---|------|--------|--------|
| 0.1 | Remove static export limitation | `feature/enable-server-routes` | 🔴 Not Started |
| 0.2 | Update CI/CD for Node.js deployment | `feature/enable-server-routes` | 🔴 Not Started |
| 0.3 | Configure preview environment | `feature/enable-server-routes` | 🔴 Not Started |
| 0.4 | Test deployment pipeline | `feature/enable-server-routes` | 🔴 Not Started |
| 0.5 | Document go-live process | `feature/enable-server-routes` | 🔴 Not Started |

**Acceptance Criteria:**
- ✅ Site runs without `output: 'export'` in next.config
- ✅ CI/CD deploys to preview URL on feature branch push
- ✅ `/api/contact` route works in preview
- ✅ Clear instructions exist for promoting to production
- ✅ All stakeholders can access preview link

**Branch:** `feature/enable-server-routes`  
**Dependencies:** None — blocking all other work  
**Estimated Time:** 2-4 hours

---

### **SPRINT 1: WHATSAPP CTA INTEGRATION**

**Goal:** Make all CTAs functional with WhatsApp links

| # | Task | Branch | Status |
|---|------|--------|--------|
| 1.1 | Add WhatsApp config to site.ts | `feature/whatsapp-integration` | ✅ Done |
| 1.2 | Update homepage carousel CTAs | `feature/whatsapp-integration` | ✅ Done |
| 1.3 | Update features "Read More" links | `feature/whatsapp-integration` | ✅ Done |
| 1.4 | Update services "Talk to our Team" | `feature/whatsapp-integration` | ✅ Done |
| 1.5 | Update header "Request a Quote" | `feature/whatsapp-integration` | ✅ Done |
| 1.6 | Update request callback form | `feature/whatsapp-integration` | ✅ Done |
| 1.7 | Add 4th carousel slide | `feature/carousel-updates` | ✅ Done |
| 1.8 | Add consumer/vendor slides | `feature/carousel-updates` | ✅ Done |

**Acceptance Criteria:**
- ✅ All CTAs link to WhatsApp with pre-filled messages
- ✅ WhatsApp opens in new tab/app correctly
- ✅ Message templates are contextually appropriate
- ✅ Mobile and desktop both work

**Branches:** `feature/whatsapp-integration`, `feature/carousel-updates`  
**Dependencies:** Priority 0 complete  
**Estimated Time:** 4-6 hours

---

### **SPRINT 2: PRODUCT CATALOG**

**Goal:** Replace placeholder products with real JX Distribution product list

| # | Task | Branch | Status |
|---|------|--------|--------|
| 2.1 | Collect product list from client | `feature/product-catalog` | ✅ Done |
| 2.2 | Search web for product images | `feature/product-catalog` | 🔴 Not Started |
| 2.3 | Download and optimize images | `feature/product-catalog` | 🔴 Not Started |
| 2.4 | Update lib/products.ts with data | `feature/product-list-import` | ✅ Done |
| 2.5 | Add product categories | `feature/product-list-import` | ✅ Done |
| 2.6 | Implement category filtering | `feature/product-list-import` | ✅ Done |
| 2.7 | Add product search | `feature/product-list-import` | ✅ Done |
| 2.8 | Update homepage services images | `feature/product-catalog` | 🔴 Not Started |

**Acceptance Criteria:**
- ✅ All real products displayed with images
- ✅ Product data includes: name, description, price, category, image
- ✅ Images optimized for web (< 200KB each)
- ✅ Categories are meaningful and accurate
- ✅ Search and filtering work on shop page

**Branches:** `feature/product-catalog`, `feature/product-filtering`, `feature/product-search`  
**Dependencies:** Priority 0 complete  
**Estimated Time:** 8-12 hours

---

### **SPRINT 3: SHOPPING CART & CHECKOUT**

**Goal:** Enable customers to add products and complete order workflow

| # | Task | Branch | Status |
|---|------|--------|--------|
| 3.1 | Build cart UI component | `feature/shopping-cart` | ✅ Done |
| 3.2 | Implement add-to-cart logic | `feature/shopping-cart` | ✅ Done |
| 3.3 | Cart persistence (localStorage) | `feature/shopping-cart` | ✅ Done |
| 3.4 | Update shop page e-commerce design | `feature/shop-redesign` | 🔴 Not Started |
| 3.5 | Build checkout page UI | `feature/whatsapp-integration` | ✅ Done |
| 3.6 | Implement form validation | `feature/checkout-flow` | 🔴 Not Started |
| 3.7 | Create order submission API | `feature/checkout-flow` | 🔴 Not Started |
| 3.8 | Send order confirmation email | `feature/checkout-flow` | 🔴 Not Started |
| 3.9 | WhatsApp order notification | `feature/whatsapp-integration` | ✅ Done |

**Acceptance Criteria:**
- ✅ Add to cart works from product detail page
- ✅ Cart persists across page refreshes
- ✅ Cart shows correct totals
- ✅ Checkout form validates all required fields
- ✅ Order submits successfully
- ✅ Customer receives email confirmation
- ✅ Admin receives order via email/WhatsApp

**Branches:** `feature/shopping-cart`, `feature/shop-redesign`, `feature/checkout-flow`  
**Dependencies:** Sprint 2 complete (real products needed)  
**Estimated Time:** 12-16 hours

---

### **SPRINT 4: CONTENT & BRANDING UPDATES**

**Goal:** Update all placeholder content with real JX information

| # | Task | Branch | Status |
|---|------|--------|--------|
| 4.1 | Update contact info site-wide | `feature/contact-info-update` | 🔴 Not Started |
| 4.2 | Fix FAQ answers | `feature/faq-updates` | 🔴 Not Started |
| 4.3 | Update client testimonials | `feature/testimonials-update` | 🔴 Not Started |
| 4.4 | Update facts section | `feature/facts-update` | 🔴 Not Started |
| 4.5 | Update footer logo to white | `feature/footer-branding` | 🔴 Not Started |
| 4.6 | Update footer slogan | `feature/footer-branding` | 🔴 Not Started |
| 4.7 | Remove theme copyright text | `feature/footer-branding` | 🔴 Not Started |
| 4.8 | Update social media links | `feature/footer-branding` | 🔴 Not Started |
| 4.9 | Update About page image | `feature/about-page-updates` | 🔴 Not Started |
| 4.10 | Update About page copy | `feature/about-page-updates` | 🔴 Not Started |
| 4.11 | Remove "Don't miss a thing" | `feature/about-page-updates` | 🔴 Not Started |
| 4.12 | Update core values | `feature/about-page-updates` | 🔴 Not Started |

**Acceptance Criteria:**
- ✅ All contact information is accurate
- ✅ FAQs have complete, helpful answers
- ✅ Testimonials are real (or removed if not available)
- ✅ Footer matches JX branding
- ✅ About page reflects actual company info

**Branches:** `feature/contact-info-update`, `feature/faq-updates`, `feature/testimonials-update`, `feature/facts-update`, `feature/footer-branding`, `feature/about-page-updates`  
**Dependencies:** Priority 0 complete  
**Estimated Time:** 6-8 hours

---

### **SPRINT 5: ADDITIONAL PAGES & FEATURES**

**Goal:** Complete remaining navigation items and features

| # | Task | Branch | Status |
|---|------|--------|--------|
| 5.1 | Create news page structure | `feature/news-page` | ✅ Done |
| 5.2 | Add 1 sample news post | `feature/news-page` | ✅ Done |
| 5.3 | Create gallery page | `feature/gallery-page` | ✅ Done |
| 5.4 | Add gallery to nav | `feature/gallery-page` | ✅ Done |
| 5.5 | Implement newsletter signup | `feature/newsletter` | 🔴 Not Started |
| 5.6 | Add interactive map to contact | `feature/contact-map` | 🔴 Not Started |
| 5.7 | Update Contact Us info | `feature/contact-page-updates` | 🔴 Not Started |
| 5.8 | Complete contact form | `feature/contact-page-updates` | 🔴 Not Started |

**Acceptance Criteria:**
- ✅ News page template exists with 1 post
- ✅ Gallery page displays project images
- ✅ Newsletter signup saves to database/email service
- ✅ Map shows JX Distribution location
- ✅ Contact page is complete and functional

**Branches:** `feature/news-page`, `feature/gallery-page`, `feature/newsletter`, `feature/contact-map`, `feature/contact-page-updates`  
**Dependencies:** Priority 0 complete  
**Estimated Time:** 8-10 hours

---

### **SPRINT 6: UX & RESPONSIVE FIXES**

**Goal:** Ensure excellent user experience across all devices

| # | Task | Branch | Status |
|---|------|--------|--------|
| 6.1 | Fix mobile nav dropdown | `fix/mobile-navigation` | 🔴 Not Started |
| 6.2 | Test logo responsiveness | `fix/responsive-images` | 🔴 Not Started |
| 6.3 | Test CTA button sizing | `fix/responsive-buttons` | 🔴 Not Started |
| 6.4 | Test font sizes on mobile | `fix/responsive-typography` | 🔴 Not Started |
| 6.5 | Fix "Get in touch" button | `fix/cta-buttons` | 🔴 Not Started |
| 6.6 | Cross-browser testing | `fix/browser-compatibility` | 🔴 Not Started |
| 6.7 | Accessibility audit | `fix/accessibility` | 🔴 Not Started |
| 6.8 | Performance optimization | `fix/performance` | 🔴 Not Started |
| 6.9 | Fix navbar current-page indicator stuck on Home | `fix/nav-active-indicator` | ✅ Done |

**Acceptance Criteria:**
- ✅ Site works perfectly on mobile, tablet, desktop
- ✅ Navigation is intuitive on all screen sizes
- ✅ Images load quickly and scale properly
- ✅ Text is readable at all viewport sizes
- ✅ Site is accessible (WCAG 2.1 AA)
- ✅ Lighthouse score: Performance > 90, Accessibility > 95

**Branches:** `fix/mobile-navigation`, `fix/responsive-images`, `fix/responsive-buttons`, `fix/responsive-typography`, `fix/cta-buttons`, `fix/browser-compatibility`, `fix/accessibility`, `fix/performance`  
**Dependencies:** Sprint 1-5 complete (test final site)  
**Estimated Time:** 8-12 hours

---

### **SPRINT 9: EXPERIENCE POLISH (MINIMAL + HIGH IMPACT)**

**Goal:** Add efficient, professional, minimal interaction polish that improves engagement without bloating the site.

| # | Task | Branch | Status |
|---|------|--------|--------|
| 9.1 | Add site-wide minimal professional animations/effects (Apple-like polish, performance-first) | `feature/minimal-motion-polish` | 🔴 Not Started |

**Acceptance Criteria:**
- ✅ Animations are subtle, purposeful, and consistent across key UI surfaces
- ✅ Motion respects reduced-motion preference (`prefers-reduced-motion`)
- ✅ No significant performance regressions (Lighthouse/real UX stays strong)
- ✅ UX improvements are intuitive, not distracting

**Branch:** `feature/minimal-motion-polish`  
**Dependencies:** Sprint 6 complete  
**Estimated Time:** 4-6 hours

---

### **SPRINT 10: PRE-LAUNCH QUALITY & CONVERSION (USER-RAISED 2026-03-01)**

**Goal:** Resolve final UX/content/performance blockers before `develop → main` release PR.

| # | Task | Branch | Status |
|---|------|--------|--------|
| 10.1 | Replace services section images with suitable licensed assets | `feature/services-image-refresh` | 🔴 Not Started |
| 10.2 | Verify and approve product prices using shared pricelist | `chore/price-verification` | 🔴 Not Started (Needs Input) |
| 10.3 | Update sales channel records with approved “million” profile numbers | `feature/facts-metrics-update` | 🔴 Not Started (Needs Input) |
| 10.4 | Replace “How We Work” with true testimonials and maintainable data source | `feature/testimonials-refresh` | ✅ Done |
| 10.5 | Investigate and optimize `/shop` → product detail navigation latency in local preview | `fix/shop-navigation-latency` | ✅ Done (first-hit compile clarified + guided discovery implemented) |
| 10.6 | Fix product detail order-area visual overlay artifact | `fix/product-detail-overlay` | ✅ Done |
| 10.7 | Improve shop first-open discoverability (guided search/category-first UX) | `feature/shop-guided-discovery` | ✅ Done |
| 10.8 | Add useful animated product highlight text (cookie/preference aware, privacy-safe) | `feature/personalized-motion-copy` | 🔴 Not Started |
| 10.9 | Add animated WhatsApp delivery promise broadcast (1h–48h CTA) | `feature/delivery-promise-banner` | 🔴 Not Started |

**Acceptance Criteria:**
- ✅ No confusing overlays or duplicate decorative layers on product detail pages
- ✅ First-time shop visitors are guided to search or category selection before full browsing
- ✅ Testimonials are editable via structured content data (no hardcoded JSX blocks)
- ✅ Release-critical data (prices, channel metrics, legal copy) is approved by stakeholder source
- ✅ Any personalization respects user privacy and consent requirements

**Branches:** `feature/services-image-refresh`, `chore/price-verification`, `feature/facts-metrics-update`, `fix/shop-navigation-latency`, `feature/personalized-motion-copy`, `feature/delivery-promise-banner`  
**Dependencies:** Sprint 4 + Sprint 6 baseline complete, stakeholder approvals for content-sensitive tasks  
**Estimated Time:** 10-18 hours (excluding external approvals)

---

### **SPRINT 11: USER-FRIENDLY PRODUCT CMS (FUTURE, NODE-FIRST)**

**Goal:** Move product/shop management from developer CSV edits to a non-technical content workflow with safer publishing controls.

| # | Task | Branch | Status |
|---|------|--------|--------|
| 11.1 | Select CMS approach and confirm operating model | `chore/cms-approach-evaluation` | 🔴 Not Started |
| 11.2 | Model product/category schema + validation rules | `feature/cms-product-schema` | 🔴 Not Started |
| 11.3 | Build product CRUD workflow for non-technical editors | `feature/cms-product-crud` | 🔴 Not Started |
| 11.4 | Add category management and storefront mapping | `feature/cms-category-management` | 🔴 Not Started |
| 11.5 | Add media library workflow for product images | `feature/cms-media-workflow` | 🔴 Not Started |
| 11.6 | Add editorial workflow (draft → review → publish) | `feature/cms-editorial-workflow` | 🔴 Not Started |
| 11.7 | Migrate current catalog from CSV/products.ts to CMS | `chore/cms-catalog-migration` | 🔴 Not Started |
| 11.8 | Add fallback strategy to last good static snapshot | `feature/cms-publish-fallback` | 🔴 Not Started |

**User-friendly alternatives (to choose in 11.1):**

| Option | Editor UX | Best Fit | Tradeoffs |
|---|---|---|---|
| Headless CMS (Sanity/Contentful/Strapi Cloud) | Strong GUI, roles, workflows | Preferred long-term once Node hosting is available | More setup + vendor/platform overhead |
| Git-based CMS (Decap) | Simple admin UI over Git | Low-cost, static-friendly teams | Editorial flow tied to Git/PR model |
| Airtable/Google Sheets + sync script | Very familiar UI for non-devs | Fastest initial adoption | Weaker governance/media lifecycle |

**Acceptance Criteria:**
- ✅ Non-technical user can create/edit/archive products without touching code
- ✅ Category/tags/media are manageable from admin UI
- ✅ Draft/review/publish path is in place
- ✅ Catalog migration from current CSV/static source is completed and verified
- ✅ If CMS publishing fails, storefront can recover from last valid build snapshot

**Branches:** `chore/cms-approach-evaluation`, `feature/cms-product-schema`, `feature/cms-product-crud`, `feature/cms-category-management`, `feature/cms-media-workflow`, `feature/cms-editorial-workflow`, `chore/cms-catalog-migration`, `feature/cms-publish-fallback`  
**Dependencies:** Node-capable hosting migration complete (server routes and CMS sync path available)  
**Estimated Time:** 1.5–2.5 weeks (excluding stakeholder UAT sign-off)

---

### **SPRINT 7: SEO & ANALYTICS**

**Goal:** Ensure site is discoverable and trackable

| # | Task | Branch | Status |
|---|------|--------|--------|
| 7.1 | Add meta tags to all pages | `feature/seo-metadata` | 🔴 Not Started |
| 7.2 | Generate sitemap.xml | `feature/seo-metadata` | 🔴 Not Started |
| 7.3 | Add robots.txt | `feature/seo-metadata` | 🔴 Not Started |
| 7.4 | Implement structured data | `feature/seo-metadata` | 🔴 Not Started |
| 7.5 | Add Google Analytics | `feature/analytics` | 🔴 Not Started |
| 7.6 | Add error monitoring (Sentry) | `feature/monitoring` | 🔴 Not Started |
| 7.7 | Set up uptime monitoring | `feature/monitoring` | 🔴 Not Started |

**Acceptance Criteria:**
- ✅ All pages have unique, descriptive meta tags
- ✅ Sitemap exists and is submitted to Google
- ✅ Structured data validates (schema.org)
- ✅ Analytics tracks page views and conversions
- ✅ Errors are captured and logged

**Branches:** `feature/seo-metadata`, `feature/analytics`, `feature/monitoring`  
**Dependencies:** Sprint 1-6 complete (finalize content first)  
**Estimated Time:** 4-6 hours

---

### **SPRINT 8: PRODUCTION LAUNCH**

**Goal:** Deploy to production and monitor

| # | Task | Branch | Status |
|---|------|--------|--------|
| 8.1 | Final QA on staging | `release/v1.0.0` | 🔴 Not Started |
| 8.2 | Merge develop → main | N/A (manual) | 🔴 Not Started |
| 8.3 | Deploy to production | N/A (CI/CD) | 🔴 Not Started |
| 8.4 | Configure custom domain | N/A (Hostinger) | 🔴 Not Started |
| 8.5 | SSL certificate setup | N/A (Hostinger) | 🔴 Not Started |
| 8.6 | Smoke test production | N/A (manual) | 🔴 Not Started |
| 8.7 | Monitor for 24 hours | N/A (manual) | 🔴 Not Started |

**Acceptance Criteria:**
- ✅ All features work in production
- ✅ Custom domain points to production site
- ✅ SSL certificate is valid
- ✅ No errors in first 24 hours
- ✅ Users can place orders successfully

**Branch:** `release/v1.0.0`  
**Dependencies:** All sprints complete  
**Estimated Time:** 4-6 hours

---

### **POST-LAUNCH: PAYMENT INTEGRATION**

| # | Task | Branch | Status |
|---|------|--------|--------|
| 9.1 | Choose payment provider (Paystack) | `feature/payment-integration` | 🔴 Not Started |
| 9.2 | Set up Paystack account | N/A (manual) | 🔴 Not Started |
| 9.3 | Integrate Paystack SDK | `feature/payment-integration` | 🔴 Not Started |
| 9.4 | Test in sandbox mode | `feature/payment-integration` | 🔴 Not Started |
| 9.5 | Update checkout flow | `feature/payment-integration` | 🔴 Not Started |
| 9.6 | Handle payment webhooks | `feature/payment-integration` | 🔴 Not Started |
| 9.7 | Go live with payments | `feature/payment-integration` | 🔴 Not Started |

**Branch:** `feature/payment-integration`  
**Dependencies:** Sprint 8 complete (production site live)  
**Estimated Time:** 12-16 hours

---

## 📊 **PROGRESS TRACKING**

**Overall Completion:** 35% (22/62 tasks)

| Sprint | Tasks | Completed | Progress |
|--------|-------|-----------|----------|
| Priority 0: Deployment | 5 | 0 | 0% |
| Sprint 1: WhatsApp CTAs | 8 | 8 | 100% |
| Sprint 2: Product Catalog | 8 | 5 | 63% |
| Sprint 3: Cart & Checkout | 9 | 5 | 56% |
| Sprint 4: Content Updates | 12 | 0 | 0% |
| Sprint 5: Pages & Features | 8 | 4 | 50% |
| Sprint 6: UX & Responsive | 9 | 1 | 11% |
| Sprint 7: SEO & Analytics | 7 | 0 | 0% |
| Sprint 8: Production Launch | 7 | 0 | 0% |
| Sprint 9: Experience Polish | 1 | 0 | 0% |
| Post-Launch: Payments | 7 | 0 | 0% |

---

## 🎓 **LEARNING RESOURCES**

Each sprint should include teaching moments on:

**Priority 0:**
- How static vs server-side export works in Next.js
- Why API routes need server capability
- How CI/CD pipelines deploy code
- Environment variables and secrets management

**Sprint 1:**
- WhatsApp deep linking (`wa.me` API)
- URL encoding for pre-filled messages
- State management for forms

**Sprint 2:**
- Product data modeling
- Image optimization techniques
- Search/filter algorithms

**Sprint 3:**
- Client-side state management (localStorage)
- E-commerce checkout flows
- Order processing architecture

**Sprints 4-8:**
- SEO best practices
- Responsive design principles
- Accessibility standards
- Performance optimization

---

## 📝 **UPDATE LOG**

| Date | Version | Changes |
|------|---------|---------|
| 2026-02-15 | 1.0.0 | Initial plan created with all todos mapped to branches |

---

**Next Action:** Execute Priority 0 to get deployment pipeline working

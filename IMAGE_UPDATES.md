# Image Updates Guide — JX Distribution Africa Website

> **Last Updated:** May 6, 2026  
> **Purpose:** Comprehensive instructions for updating all site images within the new best-practice folder structure.

## Overview

The site uses a **centralized image architecture** with separate folders for different contexts:

- **`public/images/services/home/`** — Homepage service cards (service1-8.jpg)
- **`public/images/services/catalog/`** — Services listing & detail pages (slug-based filenames)
- **`public/images/banner/`** — Page banners across the site
- **`public/images/slider/`** — Homepage carousel images (bg1-5.jpg)
- **`public/images/clients/`** — Testimonial avatars and logos
- **`public/images/parallax/`** — Parallax section backgrounds
- **`public/images/team/`** — Team member photos (future)

## Architecture Design

### Services Images (Critical to Update)

**Single Source of Truth:** `lib/services-data.ts`

This TypeScript file centralizes all service metadata:
- **Title, slug, description** — text content
- **catalogImg** — filename used by `/services` listing and `/services/[slug]` detail pages
- **homeImg** — filename used by homepage service cards

**Benefits:**
- Prevents drift between pages (one source controls both)
- Easy to rename images or swap filenames without touching multiple files
- Enables future API/CMS integration

**Affected Pages:**
- [app/services/page.tsx](app/services/page.tsx) — services listing grid
- [app/services/[slug]/page.tsx](app/services/[slug]/page.tsx) — service detail pages
- [app/page.tsx](app/page.tsx) — homepage service cards
- [app/services/direct-execution/page.tsx](app/services/direct-execution/page.tsx) — hero image

### Folder Structure Rationale

**Home vs. Catalog Split:**
- **Home images** (`services/home/`) can be promotional or overview-style shots
- **Catalog images** (`services/catalog/`) are typically larger, more detailed for the dedicated service pages
- Allows independent updates: e.g., refresh homepage without affecting service detail pages

**Slug-Based Naming in Catalog:**
- **Old:** `service1.jpg`, `service2.jpg` (brittle, no meaning)
- **New:** `route-to-market.jpg`, `social-media-marketing.jpg` (semantic, auditable)
- Makes it obvious which service each image belongs to

---

## How to Update Images

### Quick Replacement (Same Filename)

**Best For:** One-off image refreshes without renaming.

**Steps:**
1. Prepare new image file with **exact same filename** (e.g., `service1.jpg`)
2. Upload via Hostinger File Manager (FTP):
   - Navigate to `public_html/images/services/home/` or `public_html/images/services/catalog/`
   - Replace the file (or upload and overwrite)
3. **No code changes needed**
4. **No rebuild required** (for static hosting, image is served as-is)
5. Verify in browser (may need hard-refresh: Ctrl+Shift+R)

### Full Refresh (New Filenames + Code Changes)

**Best For:** Comprehensive image updates with renames (e.g., moving to slug-based naming).

**Steps:**

#### Phase 1: Prepare New Images Locally
```bash
# Inside your workspace, create or update image files in:
public/images/services/home/
public/images/services/catalog/
```

#### Phase 2: Update Code References (If Filenames Changed)

**For services images, edit `lib/services-data.ts`:**

```typescript
export const servicesData: Record<string, ServiceMetadata> = {
  'route-to-market-and-route-to-consumer-development': {
    // ... other fields ...
    catalogImg: 'route-to-market.jpg',  // ← Change this if you use a different filename
    homeImg: 'service1.jpg',             // ← Or change this
  },
  // ... other services ...
};
```

**For banner images, edit `app/page.tsx`, `app/services/page.tsx`, etc.:**

Find lines like:
```typescript
style={{backgroundImage: 'url(/images/banner/banner1.jpg)'}}
```

Change `banner1.jpg` to your new filename:
```typescript
style={{backgroundImage: 'url(/images/banner/banner-homepage.jpg)'}}
```

**For slider carousel, edit `app/page.tsx`:**

Search for `bg1.jpg`, `bg2.jpg`, etc., and update paths as needed.

#### Phase 3: Test Locally
```bash
npm run dev
# Visit http://localhost:3000
# Verify all image paths render correctly
# Check dev console for 404 errors
```

#### Phase 4: Build and Deploy
```bash
npm run build:static
# Or npm run build (server)
git add public/images/ lib/services-data.ts app/page.tsx # ... other files
git commit -m "Update images: [describe changes]"
git push origin [branch-name]
```

---

## Services Image Update Checklist

### Homepage Service Cards (service1.jpg – service8.jpg)

**Location:** `public/images/services/home/`

| Service Name | Current Filename | Recommended Slug-Based Name |
|---|---|---|
| Route-to-Market & Route-to-Consumer | service1.jpg | service1.jpg (no change in home) |
| Social Media Marketing & Activation | service2.jpg | service2.jpg (no change in home) |
| Distribution & Logistics | service3.jpg | service3.jpg (no change in home) |
| Market Research & Consumer Intelligence | service4.jpg | service4.jpg (no change in home) |
| Procurement | service5.jpg | service5.jpg (no change in home) |
| Sales Team Training & Performance | service6.jpg | service6.jpg (no change in home) |
| Call Center Services | service7.jpg | service7.jpg (no change in home) |
| Sales Automation & Reporting | service8.jpg | service8.jpg (no change in home) |

**File:** `lib/services-data.ts` → `homeImg` field

### Services Listing & Detail Page Images (Slug-Based)

**Location:** `public/images/services/catalog/`

| Service Name | Slug | Filename |
|---|---|---|
| Route-to-Market | route-to-market-and-route-to-consumer-development | route-to-market.jpg |
| Social Media Marketing | social-media-marketing-and-activation-campaigns | social-media-marketing.jpg |
| Distribution & Logistics | distribution-and-logistics-coordination | distribution-logistics.jpg |
| Market Research | market-research-and-consumer-intelligence | market-research.jpg |
| Procurement | procurement | procurement.jpg |
| Sales Team Training | sales-team-training-and-performance-management | sales-training.jpg |
| Call Center Services | call-center-services-for-companies | call-center-services.jpg |
| Sales Automation | sales-automation-and-reporting | sales-automation.jpg |
| Direct Execution | direct-execution | direct-execution.png |

**File:** `lib/services-data.ts` → `catalogImg` field for each service

---

## Other Site Images

### Banner Images

**Location:** `public/images/banner/`

| Page | Filename | Code Location |
|---|---|---|
| Shop | _(no banner image)_ | Banner removed from `app/shop/page.tsx` |
| Services | banner5.jpg | `app/services/page.tsx` |
| Service Detail | banner4.jpg | `app/services/[slug]/page.tsx` |
| Direct Execution | banner2.jpg | `app/services/direct-execution/page.tsx` |

**To Update:**
1. Replace image in `public/images/banner/`
2. No code changes needed (unless you rename the file)

### Slider Carousel

**Location:** `public/images/slider/`

**Filenames:** `bg1.jpg`, `bg2.jpg`, `bg3.jpg`, `bg4.jpg`, `bg5.jpg`

**Code Location:** `app/page.tsx` (lines ~98-140)

**To Update:**
1. Upload new images to `public/images/slider/`
2. Update `app/page.tsx` references if filenames changed (e.g., `bg2.jpg` → `bg-summer.jpg`)

### Testimonial & Client Images

**Location:** `public/images/clients/`

**Current Files:** `testimonial1.png` (Gabriel Denis, OKT)

**Code Locations:**
- `app/page.tsx` (homepage testimonials)
- `app/services/[slug]/page.tsx` (service detail testimonials)

---

## Image Specifications

### Recommended Sizes & Formats

| Image Type | Recommended Size | Format | Quality Notes |
|---|---|---|---|
| Service Cards (home) | 400×300 px | JPG | High quality, 80-85% compression |
| Service Detail Images | 600×400 px | JPG | High quality, 80-85% compression |
| Banner Images | 1920×600 px | JPG | Full-width, optimized for responsive |
| Carousel Images | 1920×600 px | JPG | Full-width hero, high quality |
| Testimonial Avatars | 100×100 px | PNG | Transparent background preferred |
| Team Photos | 300×400 px | JPG | Portrait orientation |

### File Size Goals

- Service cards: < 150 KB each
- Banners: < 300 KB each
- Carousel: < 400 KB each

**Tip:** Use tools like [TinyPNG](https://tinypng.com) or [ImageOptim](https://imageoptim.com) to compress before upload.

---

## Deployment Methods

### Method 1: Local Build + Git Push (Recommended)

Use for new filenames or complete image overhauls.

```bash
# 1. Add/replace images in public/images/
# 2. Update code references if needed
# 3. Test locally
npm run dev

# 4. Build static export
npm run build:static

# 5. Commit and push
git add public/images/ lib/ app/
git commit -m "Update site images: [describe changes]"
git push origin feat/your-branch

# 6. Create PR to develop or main as needed
```

### Method 2: Direct FTP Upload (Quick Fixes Only)

Use for same-filename replacements only (no code changes).

**Steps:**
1. Connect to Hostinger via FTP (use Hostinger File Manager or FTP client)
2. Navigate to `public_html/images/` (production) or `public_html/preview/images/` (preview)
3. Drag & drop new images (replace existing files)
4. Verify in browser (hard-refresh: Ctrl+Shift+R or Cmd+Shift+R)

**Limitations:**
- Only for existing filenames (don't rename)
- No code changes possible
- Build process can't verify links

---

## Testing Checklist

After updating images, verify:

- [ ] **Homepage loads without 404 errors**
  - Open browser console (F12)
  - Check Network tab for failed image requests
  - Visual check: all service cards have images

- [ ] **Services listing page (`/services`) loads correctly**
  - All 9 service cards display images
  - Grid layout is intact
  - "Read More" links work

- [ ] **Service detail pages load**
  - Visit at least 3 services (e.g., `/services/route-to-market-...`)
  - Hero image displays
  - Sidebar testimonial image loads
  - "Contact Us" button functional

- [ ] **Direct Execution page (`/services/direct-execution`)**
  - Hero image displays
  - Stat cards visible and readable

- [ ] **Mobile responsiveness**
  - Resize browser to mobile width (375px)
  - Images scale and remain visible
  - No broken layouts

- [ ] **Production preview (if deploying)**
  - Visit `https://preview.jxdistributionafrica.com` (or `https://www.jxdistributionafrica.com`)
  - All images load from preview/production environment

---

## Troubleshooting

### Images Not Showing After Update

**Issue:** New images don't appear after upload.

**Solutions:**
1. Hard-refresh browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Check console (F12) for 404 errors on specific image paths
3. Verify file path is correct (e.g., `/images/services/home/service1.jpg`)
4. Confirm file extension matches code (`.jpg` not `.jpeg`, case-sensitive on Linux servers)
5. If deployed to Hostinger, verify file was uploaded to correct directory

### Build Fails After Image Changes

**Issue:** `npm run build` or `npm run build:static` fails.

**Solutions:**
1. Check for TypeScript errors in `lib/services-data.ts`
   - Run `npm run lint` to see errors
2. Verify no broken imports in updated code files
3. Confirm all referenced images exist in `public/images/`
4. Check `package.json` build script doesn't have syntax errors

### Images Load Locally But Not On Hostinger

**Issue:** Works on `localhost:3000` but not on live server.

**Solutions:**
1. Verify file was actually uploaded to Hostinger (check via FTP or hPanel File Manager)
2. Check file permissions (should be 644 or 755)
3. Verify path in code matches Hostinger directory structure
4. Check `.htaccess` routing isn't interfering (see ARCHITECTURE.md)

---

## Long-Term Image Management

### Using a CMS (Future)

Once Sanity CMS is integrated (Sprint 11A):
- Image URLs will be managed in Sanity DAM
- File paths in `lib/services-data.ts` will be replaced with CMS URLs
- No more manual file uploads (Sanity handles optimization)

### Versioning & Backup

- Keep old images in Git history (first 5 commits of images are backed up in `.git`)
- For major updates, tag the commit: `git tag image-refresh-2026-05`
- Store high-res originals in a shared drive (outside this repo)

---

## Related Documentation

- [ARCHITECTURE.md](ARCHITECTURE.md) — overall stack and deployment
- [lib/services-data.ts](lib/services-data.ts) — services metadata source
- [DEV_SETUP.md](DEV_SETUP.md) — environment setup
- [PREVIEW_AND_PUBLISH.md](PREVIEW_AND_PUBLISH.md) — how to view changes before push

---

**Questions?** Check [PROJECT_PLAN.md](PROJECT_PLAN.md) for task breakdowns or ask the development team.

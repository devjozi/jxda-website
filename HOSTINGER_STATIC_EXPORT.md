# Deployment Foundation — Hostinger Static Export

**Date:** February 19, 2026  
**Status:** Priority 0 Setup  
**Deployment Mode:** Static Export (Hostinger Premium)

---

## Architecture Decision

JX Distribution website uses **static export (Next.js output: 'export')** as the primary deployment method because:

✅ **Hostinger Premium** does not include Node.js app hosting  
✅ Static hosting is faster, simpler, and more cost-effective  
✅ All critical features work without backend:  
  - Product catalog (static pages)
  - WhatsApp order integration  
  - Contact form (via Formspree)
  - Homepage with all sections

🔄 **Future-Ready:** Code structure prepared for Node.js migration to Vercel when needed

---

## Static Export Build

### Build locally for testing

```bash
npm install
npm run build:static
```

This creates `/out` directory with static HTML files.

### Start production server locally

```bash
npm install
npm run build:static
npm run start  # Serves the /out directory
```

Then visit `http://localhost:3000` and verify:
- ✓ Homepage loads with all sections
- ✓ `/shop` page shows product list
- ✓ Product detail pages work
- ✓ Contact form accepts input (will post to Formspree)
- ✓ WhatsApp CTAs open correctly

---

## Environment Variables Setup

### Required (all environments)

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=233538838135      # Ghana: +233 53 883 8135
NEXT_PUBLIC_WHATSAPP_MESSAGE=Hi, I'm interested in JX Distribution services
```

### For Contact Form (choose one)

**Option A: Formspree (Recommended for static)**

1. Go to https://formspree.io
2. Sign up (free tier available)
3. Create a new form
4. Copy the form endpoint
5. Set in `.env.local`:

```env
NEXT_PUBLIC_CONTACT_FORM_ACTION=https://formspree.io/f/YOUR_FORM_ID
```

**Option B: Getform (Alternative)**

1. Go to https://getform.io
2. Create a form
3. Copy the form endpoint
4. Set in `.env.local`:

```env
NEXT_PUBLIC_CONTACT_FORM_ACTION=https://getform.io/f/YOUR_FORM_ID
```

---

## GitHub Actions CI/CD Pipeline

### Secrets Required (add to GitHub repository)

Go to **Settings → Secrets and variables → Actions** and add:

| Secret | Value | Example |
|--------|-------|---------|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Your WhatsApp Business number | `233538838135` |
| `NEXT_PUBLIC_WHATSAPP_MESSAGE` | Default WhatsApp message | `Hi, I'm interested in...` |
| `HOSTINGER_HOST` | Hostinger SSH host | `mail.yourdomain.com` or IP |
| `HOSTINGER_USER` | Hostinger SSH username | `your_cpanel_user` |
| `HOSTINGER_PORT` | Hostinger SSH port | `22` or custom |
| `HOSTINGER_SSH_KEY` | Your private SSH key | (multiline secret) |
| `HOSTINGER_DEPLOY_PATH_PREVIEW` | Path for preview deploy | `/home/user/public_html_preview` |
| `HOSTINGER_DEPLOY_PATH_PROD` | Path for production deploy | `/home/user/public_html` |

### Branch Deployment Strategy

- **`develop` branch** → Builds & deploys to preview environment
  - URL: https://www.preview.jxdistributionafrica.com
  - For testing new features

- **`main` branch** → Builds & deploys to production
  - URL: https://www.jxdistributionafrica.com
  - Customer-facing live site

### Workflow File

See `.github/workflows/deploy.yml` for details.

---

## Deployment Process

### 1. Local Testing

```bash
git checkout develop
npm install
npm run build:static
npm run start

# Test in browser:
# - Visit http://localhost:3000 (or actual preview domain)
# - Check all pages load
# - Test contact form submission
# - Verify WhatsApp links work
```

### 2. Deploy to Preview

```bash
git add .
git commit -m "Feature: [description]"
git push origin develop

# GitHub Actions automatically:
# 1. Builds static export (npm run build:static)
# 2. Uploads /out directory to Hostinger preview path
# 3. Archives old files
# 4. Done! Visit preview URL
```

### 3. QA Checklist (Preview)

- [ ] All pages load without 404s
- [ ] Images display correctly
- [ ] Navigation works (links between pages)
- [ ] Contact form accepts input and sends to Formspree
- [ ] WhatsApp CTAs open correct chat
- [ ] Product pages render with prices
- [ ] Shop filter and search work
- [ ] Mobile responsive (test on phone)
- [ ] CSS/JS loaded (no console errors)

### 4. Promote to Production

```bash
# Only when preview is verified and approved
# Option A: Use GitHub UI
git checkout main
git merge develop  
git push origin main

# Option B: Command line (requires write access)
# GitHub Actions will automatically build and deploy to production
```

---

## Troubleshooting

### Black screen / 404 pages

**Cause:** .htaccess routing misconfigured for static export

**Fix:** Hostinger automatically handles static file routing. If needed, add `.htaccess`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^(.*)$ index.html [QSA,L]
</IfModule>
```

### Form submissions not working

**Cause:** `NEXT_PUBLIC_CONTACT_FORM_ACTION` not set or invalid endpoint

**Fix:**
1. Set `NEXT_PUBLIC_CONTACT_FORM_ACTION` in GitHub Secrets
2. Verify the Formspree/Getform endpoint is correct
3. Rebuild and redeploy

### WhatsApp CTAs not working

**Cause:** `NEXT_PUBLIC_WHATSAPP_NUMBER` missing or in wrong format

**Fix:**
1. Set `NEXT_PUBLIC_WHATSAPP_NUMBER` correctly (digits only, with country code)
2. Format: `233538838135` (not `+233 53 883 8135`)
3. Rebuild and test

---

## Future: Migrate to Node.js Hosting

When upgrading to Node.js-capable hosting (Vercel, Hostinger Business, etc.):

1. Remove `STATIC_EXPORT=true` from `npm run build:static` script
2. Update `.github/workflows/deploy.yml` to use `npm run build` (not `build:static`)
3. Add `RESEND_API_KEY` secret to GitHub
4. Update contact form to use `/api/contact` route (already coded)
5. Redeploy

API route already exists at `app/api/contact/route.ts` and is ready when Node.js hosting becomes available.

---

## Monitoring & Verification

After each deployment, verify:

```bash
# Check preview/production URL
curl https://www.preview.jxdistributionafrica.com/
# Should return HTML with "JX Distribution" content

# Check specific pages
curl https://www.preview.jxdistributionafrica.com/shop/
curl https://www.preview.jxdistributionafrica.com/services/
curl https://www.preview.jxdistributionafrica.com/contact/

# All should return 200
```

Or use browser DevTools:
1. Open Network tab
2. Reload page
3. All requests should be 200 (except maybe analytics which can fail)
4. No red errors in Console tab

---

## Quick Reference

| Task | Command |
|------|---------|
| **Local dev** | `npm run dev` |
| **Test build** | `npm run build:static` |
| **Start production build** | `npm run start` |
| **Deploy to preview** | `git push origin develop` |
| **Deploy to production** | `git push origin main` |

---

## See Also

- [PREVIEW_AND_PUBLISH.md](PREVIEW_AND_PUBLISH.md) — Browser testing checklist
- [.github/workflows/deploy.yml](.github/workflows/deploy.yml) — CI/CD configuration
- [next.config.ts](next.config.ts) — Next.js config with conditional export
- [lib/site.ts](lib/site.ts) — JX branding and contact config


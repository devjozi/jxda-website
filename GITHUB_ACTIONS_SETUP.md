# GitHub Actions Setup — JX Distribution Static Deploy

**Date:** February 19, 2026  
**Task:** Enable CI/CD for automatic deployment to Hostinger

---

## Quick Setup (5 minutes)

### Step 1: Get Hostinger SSH Credentials

1. Log into Hostinger hPanel
2. Go to **Account** → **SSH Access**
3. Create or retrieve SSH credentials:
   - **SSH Host:** (e.g., `mail.yourdomain.com` or IP address)
   - **SSH Port:** 22 (or custom if changed)
   - **SSH Username:** Your cPanel username
   - **Private Key:** Generate or upload your SSH key

If you don't have an SSH key:
```bash
ssh-keygen -t rsa -b 4096 -f ~/.ssh/hostinger_key -N ""
# Then upload ~/.ssh/hostinger_key.pub to Hostinger SSH Access
```

### Step 2: Add GitHub Secrets

Go to your GitHub repository:
1. **Settings → Secrets and variables → Actions**
2. Click "New repository secret" for each:

| Secret Name | Value | Example |
|-------------|-------|---------|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Your WhatsApp number (digits only) | `233538838135` |
| `NEXT_PUBLIC_WHATSAPP_MESSAGE` | Default WhatsApp message | `Hi, I'm interested in JX Distribution services` |
| `NEXT_PUBLIC_CONTACT_FORM_ACTION` | Your Formspree/Getform endpoint | `https://formspree.io/f/xyzabc123` |
| `HOSTINGER_HOST` | SSH host from Step 1 | `mail.yourdomain.com` |
| `HOSTINGER_PORT` | SSH port from Step 1 | `22` |
| `HOSTINGER_USER` | cPanel username | `yourusername` |
| `HOSTINGER_SSH_KEY` | Your private SSH key (multiline) | Copy full content of `~/.ssh/hostinger_key` |
| `HOSTINGER_DEPLOY_PATH_PREVIEW` | Preview deploy path | `/home/yourusername/public_html_preview` |
| `HOSTINGER_DEPLOY_PATH_PROD` | Production deploy path | `/home/yourusername/public_html` |

**Important:** The `HOSTINGER_SSH_KEY` should be your **private key** (starts with `-----BEGIN RSA PRIVATE KEY-----`), not the public key.

### Step 3: Set Up Formspree for Contact Form

1. Go to https://formspree.io
2. Sign up (free tier allows up to 50 submissions/month)
3. Create a new form
4. Note the form endpoint: `https://formspree.io/f/YOUR_FORM_ID`
5. Add to GitHub Secret: `NEXT_PUBLIC_CONTACT_FORM_ACTION`

When form is submitted on your site, Formspree will email you at the registered email address.

### Step 4: Test Deployment

1. Make a small change locally and commit:
```bash
git checkout develop
echo "# Test" >> README.md
git add README.md
git commit -m "Test: trigger CI/CD pipeline"
git push origin develop
```

2. Go to GitHub repository → **Actions** tab
3. Watch the "Build & Deploy Static (Hostinger)" workflow
4. Check logs for any errors
5. Once complete, visit your preview domain to verify

---

## Workflow Behavior

### On `develop` push
- ✓ Builds static export (`npm run build:static`)
- ✓ Deploys `/out` to Hostinger preview path
- ✓ Visit: `https://www.preview.jxdistributionafrica.com`

### On `main` push
- ✓ Builds static export (`npm run build:static`)
- ✓ Deploys `/out` to Hostinger production path
- ✓ Visit: `https://www.jxdistributionafrica.com`

---

## Troubleshooting

### Workflow fails with "SSH key permission denied"

**Cause:** `HOSTINGER_SSH_KEY` is invalid or in wrong format

**Fix:**
1. Verify SSH key starts with `-----BEGIN RSA PRIVATE KEY-----`
2. Paste entire key (including beginning and ending lines) into GitHub Secret
3. Ensure no extra whitespace at end
4. Test locally: `ssh -i ~/.ssh/hostinger_key -p 22 yourusername@mail.yourdomain.com`

### Workflow fails with "HOSTINGER_SSH_KEY != ''"

**Cause:** Secret not properly set in GitHub

**Fix:**
1. Go to Settings → Secrets and verify `HOSTINGER_SSH_KEY` exists
2. Re-add it if missing
3. Run workflow again

### Portfolio shows old files after deploy

**Cause:** Browser cache or rsync didn't complete

**Fix:**
1. Force refresh: `Ctrl+Shift+R` (or Cmd+Shift+R on Mac)
2. Check GitHub Actions logs to see if rsync completed successfully
3. If rsync failed, check SSH connection: `ssh -T username@host`

### Contact form not receiving emails

**Cause:** `NEXT_PUBLIC_CONTACT_FORM_ACTION` is wrong or Formspree account not verified

**Fix:**
1. Test Formspree is working: visit https://formspree.io dashboard
2. Verify the form endpoint URL is correct
3. Check spam folder for Formspree verification emails
4. Verify GitHub Secret matches exactly: `https://formspree.io/f/...`

---

## Local Testing Before Deploy

Always test locally before pushing to develop:

```bash
# Build static export locally
npm install
npm run build:static

# Start the built site
npm run start

# Visit http://localhost:3000 and verify:
# ✓ Homepage loads
# ✓ `/shop` page shows products
# ✓ Product detail pages work
# ✓ Contact form loads (can submit if Formspree endpoint is set)
# ✓ No 404 errors
# ✓ CSS/JS loaded correctly
```

---

## Future: Migrate to Node.js Hosting

When you upgrade Hostinger to Node.js-capable package:

1. Update `.github/workflows/deploy.yml`:
   - Change `npm run build:static` → `npm run build`
   - Remove `STATIC_EXPORT=true` 
   - Add server restart step

2. Add to GitHub Secrets:
   - `RESEND_API_KEY` (for email)

3. Redeploy

Use this architecture for future Node.js hosting:
- Frontend stays the same
- `/api/contact` route starts working
- Can add database, payment, etc.

---

## See Also

- [HOSTINGER_STATIC_EXPORT.md](HOSTINGER_STATIC_EXPORT.md) — Full deployment architecture
- [.github/workflows/deploy.yml](.github/workflows/deploy.yml) — CI/CD configuration
- [.env.example](.env.example) — Environment variables reference


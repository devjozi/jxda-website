# Hostinger Deployment Guide

This guide explains how to deploy the JX Distribution website to Hostinger hosting.

## Prerequisites

- Hostinger account with hosting plan
- FTP/SFTP access credentials from Hostinger
- Static site built in `out/` directory

## Quick Start

### 1. Build Static Site Locally

```bash
npm run build:static
```

This generates all static HTML files in the `out/` directory.

### 2. Access Hostinger File Manager

1. Login to your Hostinger account
2. Go to **Hosting → File Manager** (or use FTP/SFTP)
3. Navigate to the **public_html** directory (or your domain's root)

### 3. Upload Files

**Option A: Using Hostinger File Manager (Recommended)**

1. Select all files in the `out/` directory from your local machine
2. Drag & drop into **public_html** folder in Hostinger File Manager
3. Wait for upload to complete
4. Verify files are uploaded:
   - `index.html` (main homepage)
   - `shop/` directory (product pages)
   - `_next/` directory (Next.js assets)
   - `public/`, `css/`, `fonts/`, `images/`, `js/` directories

**Option B: Using FTP/SFTP Clients (Filezilla, WinSCP)**

```bash
# Using Filezilla
1. File → Site Manager
2. Add new site:
   - Host: sftp.hostinger.com (or your domain)
   - Port: 22 (for SFTP)
   - Protocol: SFTP
   - Username: Your Hostinger account
   - Password: Your Hostinger password
3. Connect
4. Navigate to public_html/
5. Upload contents of out/ directory
```

### 4. Verify Deployment

After uploading, test your site:

1. Visit `https://yourdomain.com` (check homepage loads)
2. Check `https://yourdomain.com/shop` (product listing)
3. Click on a product to view details: `https://yourdomain.com/shop/[product-slug]`
4. Test WhatsApp order button on product page
5. Test checkout: `https://yourdomain.com/shop/checkout`

## WhatsApp Integration

The WhatsApp order workflow is **fully functional** on static hosting. All WhatsApp links work without server-side processing because:

- WhatsApp conversation blocks are generated on the client side (JavaScript)
- No backend API calls are needed
- Works immediately after deployment

### Testing WhatsApp Orders

1. Visit any product page: `/shop/[slug]`
2. Scroll to "Order This Product" section
3. Fill in your details (Name, Email, Phone)
4. Select quantity
5. Click "Send Order via WhatsApp"
6. You'll be redirected to WhatsApp Web or mobile app
7. Review the pre-filled order message
8. Send the message

## Hostinger Specific Settings

### 1. Domain Configuration

If you have a custom domain:

1. **Hostinger Control Panel → Domains**
2. Point your domain to your hosting account
3. Wait for DNS propagation (5-30 minutes)

### 2. SSL/HTTPS

Hostinger provides **free SSL certificate**:

1. **Hosting → Manage → SSL**
2. Enable "AutoSSL" or request manual SSL
3. Wait for certificate activation
4. Update your site URL to `https://`

### 3. Redirect HTTP to HTTPS

If you need to redirect HTTP to HTTPS in Hostinger:

Create `.htaccess` file in `public_html/`:

```apache
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteCond %{HTTPS} off
    RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>
```

### 4. Performance Optimization

**Enable Gzip Compression** (usually automatic on Hostinger):

Add to `.htaccess`:

```apache
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>
```

**Set Caching Headers** (in `.htaccess`):

```apache
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/html "access plus 1 day"
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
</IfModule>
```

### 5. URL Rewriting (If Needed)

If links don't work properly, add to `.htaccess`:

```apache
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
</IfModule>
```

### 6. File Permissions

Hostinger automatically sets correct permissions. If you encounter issues:

- HTML files should be **644** (readable)
- Directories should be **755** (readable/executable)
- No need to set executable permissions for static files

## Updating Products

To add or update products after deployment:

### On Your Local Machine

1. Update `PRODUCT-DATA-TEMPLATE.csv` with new product data
2. Run: `npm run import-products PRODUCT-DATA-TEMPLATE.csv`
3. Run: `npm run build:static`
4. Upload updated files from `out/` directory to Hostinger

### What Gets Uploaded

After running `npm run build:static`, upload:

- All new product pages in `/shop/[slug]/` directory
- Updated `_next/` assets
- Any changed images or resources

## Troubleshooting

### Website Returns 404 Errors

**Problem:** Product pages return 404 even though files exist

**Solution 1:** Check `.htaccess` configuration (see URL Rewriting section above)

**Solution 2:** Verify all files uploaded to `public_html/`:

```
public_html/
├── index.html ✓
├── shop/
│   ├── index.html ✓
│   └── [product-slugs]/index.html ✓
├── _next/ ✓
├── public/ ✓
└── ...
```

### JavaScript Not Loading

**Problem:** Page loads but styles/scripts don't work

**Solution 1:** Check if `_next/` directory uploaded completely

**Solution 2:** Verify relative paths in `.htaccess`

**Solution 3:** Check browser console for 404 errors

### WhatsApp Button Not Working

**Problem:** WhatsApp link doesn't open

**Solution 1:** Check if JavaScript is enabled in browser

**Solution 2:** Verify WhatsApp number is set in environment:
- Check `lib/site.ts` has valid `whatsapp.number`
- Default: `233531873637` (Ghana number)

**Solution 3:** Test on mobile device (better WhatsApp integration)

### Slow Loading

**Problem:** Website loads slowly

**Solution 1:** Enable Gzip compression in `.htaccess` (see above)

**Solution 2:** Optimize images (run locally before deployment)

**Solution 3:** Enable Hostinger caching:
- **Hosting → Performance → Cache**

## Maintenance

### Backup Your Site

1. **Hosting → Backups**
2. Download regular backups
3. Keep local copies of `out/` directory

### Monitor Performance

1. **Hosting → Analytics** - View traffic and stats
2. Check error logs: **Hosting → Advanced → Error Logs**
3. Monitor SSL certificate expiration

### Regular Updates

Every time you update products:

1. Run `npm run import-products your-file.csv`
2. Run `npm run build:static`
3. Upload new `out/` directory to Hostinger

## Support

For Hostinger-specific issues:

1. **Hostinger Support** → Contact support for hosting issues
2. **Next.js Docs** → https://nextjs.org/docs/app/building-your-application/deploying
3. **Static Deployment Issues** → Check our project documentation

## Environment Variables

For Hostinger, the site uses defaults:

- **WhatsApp Number:** `+233 53 187 3637` (from `lib/site.ts`)
- **Contact Email:** `info@jxdistributionafrica.com`
- **Company Phone:** `+233 53 187 3637`

To change these values:

1. Edit `lib/site.ts` with your contact details
2. Run `npm run build:static`
3. Upload updated files to Hostinger

## SSL Certificate

Hostinger provides free SSL. After deployment:

1. Visit `https://yourdomain.com` (with HTTPS)
2. You should see a green lock icon
3. SSL is automatically renewed by Hostinger

## Final Checklist

Before going live:

- [ ] All files uploaded to `public_html/`
- [ ] Website accessible via domain
- [ ] Homepage loads without errors
- [ ] Product pages load correctly
- [ ] WhatsApp buttons work
- [ ] Checkout page functional
- [ ] Mobile responsive
- [ ] SSL certificate active (green lock)
- [ ] Analytics set up (optional)
- [ ] Backup created

## Ready for Launch! 🚀

Your JX Distribution website is now live on Hostinger and ready to receive orders via WhatsApp.

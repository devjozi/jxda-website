# QUICK START DEPLOYMENT TO HOSTINGER

**TL;DR - Deploy in 3 Steps**

## STEP 1: Copy .htaccess to out/ directory (important for URLs to work)

```bash
cd /mnt/c/Users/USER/projects/jxda-website
cp .htaccess.hostinger out/.htaccess
```

## STEP 2: Upload everything in out/ to public_html/

Using **Hostinger File Manager** or **FTP/SFTP**:
- Navigate to public_html/
- Drag & drop all files from `out/` folder
- Wait for upload to complete

## STEP 3: Test your site

Visit: `https://yourdomain.com`

Done! ✓

---

## TESTING CHECKLIST

After upload, verify:

1. **Homepage loads** → https://yourdomain.com
2. **Shop page loads** → https://yourdomain.com/shop
3. **Product pages load** → https://yourdomain.com/shop/toyota-corolla-air-filter
4. **Checkout works** → https://yourdomain.com/shop/checkout
5. **WhatsApp buttons work** → Click button on any product page
6. **Contact form works** → https://yourdomain.com/contact
7. **Mobile responsive** → Test on phone

If all tests pass, you're live! 🚀

---

## TROUBLESHOOTING QUICK FIXES

**"Page not found" errors?**
→ Make sure `.htaccess` is in public_html/

**WhatsApp button doesn't open?**
→ Refresh page, try on mobile

**Images not showing?**
→ Upload `images/` folder from out/

**Site is slow?**
→ Wait 15 min (caching) then refresh

---

## FILE STRUCTURE

What's in the `out/` folder that gets uploaded:

```
out/
├── .htaccess ← MUST copy this from .htaccess.hostinger
├── index.html ← Homepage
├── shop/
│   ├── index.html ← Product listing
│   ├── checkout/
│   │   └── index.html ← Checkout page
│   └── [products]/ ← 53 product folders with index.html
├── _next/ ← JavaScript & CSS
├── css/ → Stylesheets
├── images/ → All images
├── fonts/ → Font files
├── js/ → JavaScript code
└── 404.html ← Error page
```

Upload ALL of this to `public_html/`

---

## UPDATING PRODUCTS

To add/update products after going live:

```bash
# 1. Update CSV
nano PRODUCT-DATA-TEMPLATE.csv

# 2. Import
npm run import-products PRODUCT-DATA-TEMPLATE.csv

# 3. Rebuild
npm run build:static

# 4. Upload new out/ folder to Hostinger
```

---

## SUPPORT CONTACTS

**Website Inquiries:** info@jxdistributionafrica.com  
**WhatsApp:** +233 53 883 8135  
**Phone:** +233 53 883 8135

---

## DEPLOYMENT TIME

From upload start to live: **10-15 minutes**

That's it! Your JX Distribution site is now running on Hostinger with full WhatsApp order integration. 🎉

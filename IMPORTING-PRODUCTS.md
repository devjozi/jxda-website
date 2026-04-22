# Product Import Guide

This guide explains how to import product data into the JX Distribution shop catalog.

## Overview

The shop uses a simple CSV-based import system that allows you to easily add, update, or replace products. The system validates your data, generates URL-friendly slugs, and updates the static site automatically.

## Quick Start

1. Prepare your product data in CSV format (see template below)
2. Run `npm run import-products your-products.csv`
3. Review the import report
4. Test with `npm run dev`
5. Build static site with `npm run build:static`
6. Deploy the `out/` directory to your hosting

## CSV Template

Use the provided `PRODUCT-DATA-TEMPLATE.csv` file as a starting point. The CSV must have the following columns:

| Column | Required | Description | Example |
|--------|----------|-------------|---------|
| Name | Yes | Product name | "Premium Vegetable Oil 5L" |
| Category | Yes | Product category | "FMCG" (see valid categories below) |
| Description | Yes | Product description (50-500 chars recommended) | "High-quality vegetable cooking oil..." |
| Price | No | Product price (use 0 or leave empty for "Price on Request") | 45.00 |
| SKU | No | Stock Keeping Unit for inventory | "FMCG-001" |
| Image | Yes | Image filename in `public/images/products/` (filename only) | "pf63e-gm-vehicles-oil-filter.jpg" |

### Valid Categories

- **FMCG** - Fast-Moving Consumer Goods
- **Spareparts** - Automotive and mechanical parts
- **Electronics** - Electronic devices and accessories
- **Fabrics** - Textiles and fabric materials
- **Agricultural Inputs** - Fertilizers, seeds, farm supplies

### Example CSV

```csv
Name,Category,Description,Price,SKU,Image
Premium Vegetable Oil 5L,Food & Beverages,"High-quality vegetable cooking oil ideal for retail distribution.",45.00,FMCG-001,organic-zomi-palm-oil.webp
Rice 25kg Bag,Food & Beverages,"Premium quality rice perfect for retail and wholesale distribution.",180.00,FMCG-002,snap-rice-5kg.png
GM Vehicles Oil Filter (PF63E),Autoparts,"High-efficiency oil filter for GM vehicles. Part No. PF63E.",78,PF63E,pf63e-gm-vehicles-oil-filter.jpg
LED Bulb 12W,Electronics,"Energy-efficient 12W LED bulb with long lifespan.",18.00,ELEC-001,tv-guard.png
Cotton Print Fabric,Fabrics,"High-quality printed cotton fabric for tailoring.",0,FAB-001,reed-diffuser.webp
NPK Fertilizer 50kg,Agricultural Inputs,"Balanced NPK fertilizer for crop enhancement.",220.00,AGRI-001,washing-powder.jpg
```

## Import Process

### Step 1: Prepare CSV File

Create or update your CSV file with product data following the template format above.

**Tips:**
- Use quotes around descriptions that contain commas
- Keep descriptions between 50-500 characters for best display
- Use 0 for price if you want "Price on Request" displayed
- Ensure category names match exactly (case-sensitive)

### Step 2: Run Import Script

```bash
npm run import-products path/to/your-products.csv
```

**Example:**
```bash
npm run import-products PRODUCT-DATA-TEMPLATE.csv
```

### Step 3: Review Import Report

The script will display a report showing:

- **Errors**: Critical issues that prevent import (missing required fields, invalid categories)
- **Warnings**: Non-critical issues (short/long descriptions)
- **Warnings**: Non-critical issues (short/long descriptions, skipped rows due to missing images)
- **Success Summary**: Number of products imported, breakdown by category

**Example Report:**
```
=== Product Import Report ===

WARNINGS:
  ⚠ Row 5: Description is short (45 chars). Recommended: 50-500 characters.

SUCCESS:
  ✓ Imported 12 products
  - CSV rows processed: 14
  - Skipped (missing image): 2

Breakdown by category:
  - FMCG: 4 products
  - Spareparts: 3 products
  - Electronics: 2 products
  - Fabrics: 2 products
  - Agricultural Inputs: 1 products

✓ Updated /path/to/lib/products.ts

Import completed successfully!
```

### Step 4: Test in Development

```bash
npm run dev
```

Visit `http://localhost:3000/shop` to see your imported products. Check:
- All products display correctly
- Category filtering works
- Search functionality works
- Product detail pages load
- Prices display correctly (including "Price on Request")

### Step 5: Build Static Site

```bash
npm run build:static
```

This generates static HTML pages for all products in the `out/` directory.

### Step 6: Deploy

Upload the contents of the `out/` directory to your static hosting provider.

## Auto-Generated Fields

The import script automatically generates the following fields:

| Field | How It's Generated |
|-------|-------------------|
| ID | Sequential numbers (1, 2, 3, ...) |
| Slug | URL-friendly version of product name (e.g., "premium-vegetable-oil-5l") |
| Currency | Defaults to "GHS" |
| inStock | Defaults to `true` |

The `Image` field is now read directly from CSV and must reference an existing file in `public/images/products/`.

## Data Validation

The import script validates your data and will report errors if:

- **Missing required fields**: Name, Category, or Description is empty
- **Invalid category**: Category doesn't match one of the 5 valid categories
- **Invalid price**: Price is not a valid number
- **Duplicate product names**: Multiple products with identical names (slugs will be auto-numbered)

Warnings (non-critical) are shown for:

- **Short descriptions**: Less than 50 characters
- **Long descriptions**: More than 500 characters

## Updating Products

### Add New Products

1. Add new rows to your CSV file
2. Run import script
3. Rebuild and deploy

### Update Existing Products

1. Modify rows in your CSV file
2. Run import script (this will replace all products)
3. Rebuild and deploy

### Remove Products

1. Delete rows from your CSV file
2. Run import script
3. Rebuild and deploy

**Note:** The import script replaces the entire product array, so make sure your CSV contains all products you want in the shop.

## Product Images

### Current Setup (Real Product Images)

Products use filenames provided in CSV and resolve to `/images/products/{filename}` at runtime.

### Adding Real Product Images

**Option 1: Organized by Category (Recommended)**

```
public/images/products/
├── fmcg/
│   ├── premium-vegetable-oil-5l.jpg
│   ├── rice-25kg-bag.jpg
├── spareparts/
│   ├── automotive-oil-filter.jpg
├── electronics/
├── fabrics/
└── agric-inputs/
```

**Option 2: Flat Directory**

```
public/images/products/
├── premium-vegetable-oil-5l.jpg
├── rice-25kg-bag.jpg
├── automotive-oil-filter.jpg
...
```

**Image Naming Convention:**
- Name images to match the product slug
- For example, "Premium Vegetable Oil 5L" becomes `premium-vegetable-oil-5l.jpg`
- Supported formats: JPG, PNG, WEBP
- Recommended size: < 200KB, optimized for web

**Required workflow:**
1. Add/rename images in `public/images/products/`
2. Set `Image` column in CSV with filename only
3. Re-import products
4. Rebuild static site

If a CSV row references a missing image file, that row is skipped and reported as a warning (not a hard error).

## Troubleshooting

### Import Fails with "Invalid Category"

**Problem:** Category name doesn't match exactly

**Solution:** Ensure category is one of:
- FMCG (all caps)
- Spareparts (capital S)
- Electronics (capital E)
- Fabrics (capital F)
- Agricultural Inputs (both capitals, with space)

### Products Not Showing on Shop Page

**Problem:** Build didn't regenerate static pages

**Solution:**
1. Delete the `out/` directory
2. Run `npm run build:static` again
3. Check for build errors

### "Price on Request" Not Showing

**Problem:** Price is not set to 0

**Solution:** In CSV, set Price column to `0` (not empty, not "N/A", just `0`)

### Import Script Not Found

**Problem:** npm script not configured

**Solution:** Ensure `package.json` has:
```json
"scripts": {
  "import-products": "tsx scripts/import-products.ts"
}
```

And ensure `tsx` is installed:
```bash
npm install --save-dev tsx
```

## Advanced Usage

### Custom Image Paths

Edit `lib/product-data-import.ts` to customize image assignment:

```typescript
// Current (cyclical assignment from service images)
const image = AVAILABLE_IMAGES[index % AVAILABLE_IMAGES.length];

// Option: Use category-based paths
const categorySlug = category.toLowerCase().replace(' ', '-');
const image = `/images/products/${categorySlug}/${slug}.jpg`;

// Option: Use SKU for images
const image = `/images/products/${row.SKU}.jpg`;
```

### Adding More Product Fields

1. Update `Product` type in `lib/products.ts`
2. Update `ProductCSVRow` in `lib/product-data-import.ts`
3. Add validation in `validateProductRow()`
4. Update `convertCSVToProducts()` to handle new field
5. Update shop pages to display new field

### Batch Processing Multiple CSV Files

```bash
# Import from multiple sources
npm run import-products catalog-fmcg.csv
npm run import-products catalog-electronics.csv
npm run import-products catalog-spareparts.csv
```

**Note:** Each import replaces all products, so consider merging CSV files first.

## Support

For issues or questions:
1. Check this documentation
2. Review error messages from the import script
3. Verify CSV format against template
4. Test with the provided `PRODUCT-DATA-TEMPLATE.csv` first

## Next Steps

- **Import your product data**: Use the provided CSV template
- **Add category images**: Create category-specific banner images
- **Implement pagination**: If catalog grows beyond 200 products
- **Add product variants**: For products with sizes, colors, etc.
- **Connect to real checkout**: Replace placeholder checkout with payment gateway

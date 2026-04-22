#!/usr/bin/env node

/**
 * Product Import Script
 * Usage: npm run import-products path/to/products.csv
 */

import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'csv-parse/sync';
import {
  ProductCSVRow,
  convertCSVToProducts,
  generateProductsCode,
} from '../lib/product-data-import';

const PRODUCTS_FILE = path.join(__dirname, '..', 'lib', 'products.ts');
const PRODUCT_IMAGES_DIR = path.join(__dirname, '..', 'public', 'images', 'products');

/**
 * Read and parse CSV file
 */
function readCSV(filePath: string): ProductCSVRow[] {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const records = parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
      trim: true,
    }) as unknown[];

    if (records.some((record) => typeof record !== 'object' || record === null)) {
      throw new Error('CSV parse result contains non-object rows');
    }

    return records as ProductCSVRow[];
  } catch (error) {
    console.error(`Error reading CSV file: ${error}`);
    process.exit(1);
  }
}

/**
 * Update products.ts with new product array
 */
function updateProductsFile(productsCode: string): void {
  try {
    // Read current products.ts
    const currentContent = fs.readFileSync(PRODUCTS_FILE, 'utf-8');

    // Replace the PRODUCTS array
    const regex = /export const PRODUCTS: Product\[\] = \[[\s\S]*?\];/;
    const newContent = currentContent.replace(regex, productsCode);

    // Write back to file
    fs.writeFileSync(PRODUCTS_FILE, newContent, 'utf-8');
    console.log(`✓ Updated ${PRODUCTS_FILE}`);
  } catch (error) {
    console.error(`Error updating products file: ${error}`);
    process.exit(1);
  }
}

/**
 * Print import report
 */
function printReport(result: ReturnType<typeof convertCSVToProducts>): void {
  console.log('\n=== Product Import Report ===\n');

  if (result.errors.length > 0) {
    console.log('ERRORS:');
    result.errors.forEach(err => console.log(`  ✗ ${err}`));
    console.log('');
  }

  if (result.warnings.length > 0) {
    console.log('WARNINGS:');
    result.warnings.forEach(warn => console.log(`  ⚠ ${warn}`));
    console.log('');
  }

  if (result.success) {
    console.log('SUCCESS:');
    console.log(`  ✓ Imported ${result.summary.imported} products`);
    console.log(`  - CSV rows processed: ${result.summary.totalRows}`);
    console.log(`  - Skipped (missing image): ${result.summary.skippedMissingImage}`);
    console.log('\nBreakdown by category:');
    Object.entries(result.summary.byCategory).forEach(([category, count]) => {
      console.log(`  - ${category}: ${count} products`);
    });
    console.log('');
  } else {
    console.log('FAILED: Import could not complete due to errors above.');
    console.log('');
    process.exit(1);
  }
}

/**
 * Main function
 */
function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.error('Usage: npm run import-products <path-to-csv-file>');
    console.error('Example: npm run import-products products.csv');
    process.exit(1);
  }

  const csvPath = args[0];

  // Check if file exists
  if (!fs.existsSync(csvPath)) {
    console.error(`Error: File not found: ${csvPath}`);
    process.exit(1);
  }

  console.log(`Reading CSV file: ${csvPath}\n`);

  // Read and parse CSV
  const rows = readCSV(csvPath);
  console.log(`Parsed ${rows.length} rows from CSV\n`);

  // Convert to products
  const result = convertCSVToProducts(rows, {
    imageExists: (imageFileName: string) => {
      if (!imageFileName || imageFileName.trim() === '') {
        return false;
      }

      // Normalize to a plain filename to prevent path traversal via CSV input.
      // path.basename strips any directory components; if the result differs from
      // the original input the value contained separators and must be rejected.
      const safeName = path.basename(imageFileName.trim());
      if (!safeName || safeName !== imageFileName.trim()) {
        return false;
      }

      const imagePath = path.join(PRODUCT_IMAGES_DIR, safeName);
      return fs.existsSync(imagePath);
    },
  });

  // Print report
  printReport(result);

  if (result.success) {
    // Generate and update products.ts
    const productsCode = generateProductsCode(result.products);
    updateProductsFile(productsCode);

    console.log('Import completed successfully!');
    console.log('\nNext steps:');
    console.log('  1. Run: npm run dev (to test in development)');
    console.log('  2. Run: npm run build:static (to build static site)');
    console.log('  3. Deploy the out/ directory to your hosting\n');
  }
}

main();

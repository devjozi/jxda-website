/**
 * Product data import utilities
 * Converts CSV data to Product array with validation
 */

import { Product, PRODUCT_CATEGORIES, ProductCategory } from './products';

/**
 * CSV row data structure
 */
export interface ProductCSVRow {
  Name: string;
  Category: string;
  Description: string;
  Price?: string | number;
  SKU?: string;
  Image?: string;
}

/**
 * Validation result
 */
export interface ValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
}

/**
 * Import result
 */
export interface ImportResult {
  success: boolean;
  products: Product[];
  errors: string[];
  warnings: string[];
  summary: {
    totalRows: number;
    imported: number;
    skippedMissingImage: number;
    total: number;
    byCategory: Record<string, number>;
  };
}

/**
 * Generate URL-friendly slug from product name
 */
export function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-')          // Replace spaces with hyphens
    .replace(/-+/g, '-')           // Replace multiple hyphens with single
    .replace(/^-|-$/g, '');        // Remove leading/trailing hyphens
}

/**
 * Ensure slug is unique by appending number if needed
 */
export function ensureUniqueSlug(slug: string, existingSlugs: Set<string>): string {
  let uniqueSlug = slug;
  let counter = 1;

  while (existingSlugs.has(uniqueSlug)) {
    uniqueSlug = `${slug}-${counter}`;
    counter++;
  }

  return uniqueSlug;
}

/**
 * Validate category against PRODUCT_CATEGORIES
 */
export function isValidCategory(category: string): boolean {
  return Object.values(PRODUCT_CATEGORIES).includes(category as ProductCategory);
}

/**
 * Validate a single product row
 */
export function validateProductRow(
  row: ProductCSVRow,
  rowNumber: number
): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Required fields
  if (!row.Name || row.Name.trim() === '') {
    errors.push(`Row ${rowNumber}: Product name is required`);
  }

  if (!row.Category || row.Category.trim() === '') {
    errors.push(`Row ${rowNumber}: Category is required`);
  } else if (!isValidCategory(row.Category)) {
    errors.push(
      `Row ${rowNumber}: Invalid category "${row.Category}". Must be one of: ${Object.values(PRODUCT_CATEGORIES).join(', ')}`
    );
  }

  if (!row.Description || row.Description.trim() === '') {
    errors.push(`Row ${rowNumber}: Description is required`);
  } else {
    const descLength = row.Description.trim().length;
    if (descLength < 50) {
      warnings.push(
        `Row ${rowNumber}: Description is short (${descLength} chars). Recommended: 50-500 characters.`
      );
    } else if (descLength > 500) {
      warnings.push(
        `Row ${rowNumber}: Description is long (${descLength} chars). Recommended: 50-500 characters.`
      );
    }
  }

  // Optional price validation
  if (row.Price !== undefined && row.Price !== '') {
    const price = typeof row.Price === 'number' ? row.Price : parseFloat(row.Price);
    if (isNaN(price)) {
      errors.push(`Row ${rowNumber}: Price must be a valid number`);
    } else if (price < 0) {
      errors.push(`Row ${rowNumber}: Price cannot be negative`);
    }
  }

  if (!row.Image || row.Image.trim() === '') {
    errors.push(`Row ${rowNumber}: Image is required`);
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}

export interface ImportOptions {
  imageExists?: (imageFileName: string) => boolean;
}

/**
 * Convert CSV rows to Product array
 */
export function convertCSVToProducts(
  rows: ProductCSVRow[],
  options: ImportOptions = {}
): ImportResult {
  const products: Product[] = [];
  const allErrors: string[] = [];
  const allWarnings: string[] = [];
  const existingSlugs = new Set<string>();
  const categoryCount: Record<string, number> = {};
  let skippedMissingImage = 0;

  rows.forEach((row, index) => {
    const rowNumber = index + 1;

    // Validate row
    const validation = validateProductRow(row, rowNumber);
    allErrors.push(...validation.errors);
    allWarnings.push(...validation.warnings);

    // Skip invalid rows
    if (!validation.valid) {
      return;
    }

    // Generate slug
    const baseSlug = generateSlug(row.Name);
    const slug = ensureUniqueSlug(baseSlug, existingSlugs);
    existingSlugs.add(slug);

    // Parse price
    let price = 0;
    if (row.Price !== undefined && row.Price !== '') {
      price = typeof row.Price === 'number' ? row.Price : parseFloat(row.Price);
    }

    const imageFileName = row.Image?.trim() || '';
    // Reject filenames containing path separators or traversal sequences to prevent
    // generating broken URLs or referencing paths outside the products image folder.
    if (imageFileName.includes('/') || imageFileName.includes('\\') || imageFileName.includes('..')) {
      skippedMissingImage++;
      allWarnings.push(
        `Row ${rowNumber}: Skipped product "${row.Name.trim()}" because image filename contains invalid path characters: ${imageFileName}`
      );
      return;
    }
    if (options.imageExists && !options.imageExists(imageFileName)) {
      skippedMissingImage++;
      allWarnings.push(
        `Row ${rowNumber}: Skipped product "${row.Name.trim()}" because image file was not found: ${imageFileName}`
      );
      return;
    }
    const image = `/images/products/${imageFileName}`;

    // Count by category
    const category = row.Category.trim();
    categoryCount[category] = (categoryCount[category] || 0) + 1;

    // Create product
    const product: Product = {
      id: String(index + 1),
      slug,
      name: row.Name.trim(),
      description: row.Description.trim(),
      price,
      currency: 'GHS',
      image,
      category,
      sku: row.SKU?.trim() || undefined,
      inStock: true,
    };

    products.push(product);
  });

  return {
    success: allErrors.length === 0,
    products,
    errors: allErrors,
    warnings: allWarnings,
    summary: {
      totalRows: rows.length,
      imported: products.length,
      skippedMissingImage,
      total: products.length,
      byCategory: categoryCount,
    },
  };
}

/**
 * Generate product array code string for products.ts
 */
export function generateProductsCode(products: Product[]): string {
  const productEntries = products.map(p => {
    const fields: string[] = [
      `    id: '${p.id}',`,
      `    slug: '${p.slug}',`,
      `    name: '${p.name.replace(/'/g, "\\'")}',`,
      `    description: '${p.description.replace(/'/g, "\\'")}',`,
      `    price: ${p.price},`,
      `    currency: '${p.currency}',`,
      `    image: '${p.image}',`,
      `    category: PRODUCT_CATEGORIES.${getCategoryConstName(p.category)},`,
    ];

    if (p.sku) {
      fields.push(`    sku: '${p.sku}',`);
    }

    if (p.inStock !== undefined) {
      fields.push(`    inStock: ${p.inStock},`);
    }

    return `  {\n${fields.join('\n')}\n  }`;
  });

  return `export const PRODUCTS: Product[] = [\n${productEntries.join(',\n')}\n];`;
}

/**
 * Get category constant name from category value
 */
function getCategoryConstName(category: string): string {
  const entry = Object.entries(PRODUCT_CATEGORIES).find(
    ([_, value]) => value === category
  );
  return entry ? entry[0] : 'FMCG'; // Default fallback
}

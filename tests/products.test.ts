/**
 * Tests for lib/products.ts
 *
 * Covers the utility functions and validates data integrity of the catalogue.
 * A corrupt product record (missing slug, wrong category) would break static
 * page generation and WhatsApp order messages — so we guard against that here.
 *
 * Run with: npm test
 */

import { describe, it, expect } from 'vitest';
import {
  getAllProducts,
  getProductBySlug,
  PRODUCT_CATEGORIES,
  type Product,
} from '../lib/products';

const ALL_PRODUCTS = getAllProducts();
const VALID_CATEGORIES = new Set(Object.values(PRODUCT_CATEGORIES));

// ─── getAllProducts ───────────────────────────────────────────────────────────

describe('getAllProducts', () => {
  it('returns a non-empty array', () => {
    expect(ALL_PRODUCTS.length).toBeGreaterThan(0);
  });

  it('returns at least 50 products', () => {
    // Guard against accidental truncation of the catalogue
    expect(ALL_PRODUCTS.length).toBeGreaterThanOrEqual(50);
  });

});

// ─── getProductBySlug ─────────────────────────────────────────────────────────

describe('getProductBySlug', () => {
  it('returns the correct product for a known slug', () => {
    const product = getProductBySlug('toyota-hilux-air-filter-17801-0l040');
    expect(product).toBeDefined();
    expect(product?.name).toContain('Hilux');
  });

  it('returns undefined for an unknown slug', () => {
    expect(getProductBySlug('not-a-real-product')).toBeUndefined();
  });

  it('returns undefined for an empty string', () => {
    expect(getProductBySlug('')).toBeUndefined();
  });

  it('matches exactly — does not do partial slug matching', () => {
    // 'toyota' alone should not match any slug
    const result = getProductBySlug('toyota');
    expect(result).toBeUndefined();
  });
});

// ─── Data integrity ───────────────────────────────────────────────────────────

describe('Product catalogue data integrity', () => {
  it('every product has a non-empty id', () => {
    ALL_PRODUCTS.forEach((p: Product) => {
      expect(p.id, `product "${p.name}" missing id`).toBeTruthy();
    });
  });

  it('every product has a unique id', () => {
    const ids = ALL_PRODUCTS.map((p) => p.id);
    const unique = new Set(ids);
    expect(unique.size).toBe(ids.length);
  });

  it('every product has a non-empty slug', () => {
    ALL_PRODUCTS.forEach((p: Product) => {
      expect(p.slug, `product id "${p.id}" missing slug`).toBeTruthy();
    });
  });

  it('every product slug is unique', () => {
    const slugs = ALL_PRODUCTS.map((p) => p.slug);
    const unique = new Set(slugs);
    expect(unique.size).toBe(slugs.length);
  });

  it('every product slug is URL-safe (no spaces or special chars)', () => {
    ALL_PRODUCTS.forEach((p: Product) => {
      expect(p.slug, `slug "${p.slug}" contains invalid chars`).toMatch(/^[a-z0-9-]+$/);
    });
  });

  it('every product has a non-empty name', () => {
    ALL_PRODUCTS.forEach((p: Product) => {
      expect(p.name, `product id "${p.id}" missing name`).toBeTruthy();
    });
  });

  it('every product has a valid category from PRODUCT_CATEGORIES', () => {
    ALL_PRODUCTS.forEach((p: Product) => {
      expect(
        VALID_CATEGORIES.has(p.category as never),
        `product "${p.name}" has invalid category "${p.category}"`,
      ).toBe(true);
    });
  });

  it('every product has a non-negative price', () => {
    ALL_PRODUCTS.forEach((p: Product) => {
      expect(p.price, `product "${p.name}" has negative price`).toBeGreaterThanOrEqual(0);
    });
  });

  it('every product has currency set to GHS', () => {
    ALL_PRODUCTS.forEach((p: Product) => {
      expect(p.currency, `product "${p.name}" has unexpected currency`).toBe('GHS');
    });
  });

  it('every product has a non-empty image path', () => {
    ALL_PRODUCTS.forEach((p: Product) => {
      expect(p.image, `product "${p.name}" missing image`).toBeTruthy();
    });
  });

  it('every product has a non-empty description', () => {
    ALL_PRODUCTS.forEach((p: Product) => {
      expect(p.description, `product "${p.name}" missing description`).toBeTruthy();
    });
  });

  it('catalogue includes products from all five categories', () => {
    const categories = new Set(ALL_PRODUCTS.map((p) => p.category));
    Object.values(PRODUCT_CATEGORIES).forEach((cat) => {
      expect(categories.has(cat), `no products found for category "${cat}"`).toBe(true);
    });
  });
});

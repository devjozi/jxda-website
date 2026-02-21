/**
 * Tests for lib/shop-filters.ts
 *
 * These are pure unit tests — no DOM, no React, no build step needed.
 * Run with: npm test
 *
 * WHY we test these functions:
 *   The shop listing page relies on filtering and sorting to show the right
 *   products. A bug here directly hurts product discoverability and sales.
 *   Testing the pure functions is fast (< 50ms) and covers all logic branches.
 */

import { describe, it, expect } from 'vitest';
import { filterProducts, sortProducts, applyShopFilters } from '../lib/shop-filters';
import type { Product } from '../lib/products';
import { PRODUCT_CATEGORIES } from '../lib/products';

// ─── Fixtures ────────────────────────────────────────────────────────────────

const makeProduct = (overrides: Partial<Product> & { id: string }): Product => ({
  slug: `product-${overrides.id}`,
  name: `Product ${overrides.id}`,
  description: 'A test product.',
  price: 50,
  currency: 'GHS',
  image: '/images/test.jpg',
  category: PRODUCT_CATEGORIES.AUTOPARTS,
  inStock: true,
  ...overrides,
});

const FIXTURES: Product[] = [
  makeProduct({ id: '1', name: 'Toyota Hilux Air Filter', price: 30, category: PRODUCT_CATEGORIES.AUTOPARTS, sku: 'TOY-AF-001' }),
  makeProduct({ id: '2', name: 'Honda CR-V Brake Pad', price: 60, category: PRODUCT_CATEGORIES.AUTOPARTS, sku: 'HON-BP-001' }),
  makeProduct({ id: '3', name: 'NPK Fertilizer 50kg', price: 220, category: PRODUCT_CATEGORIES.AGRIC_INPUTS, sku: 'AGRI-001' }),
  makeProduct({ id: '4', name: 'Premium Vegetable Oil 5L', price: 45, category: PRODUCT_CATEGORIES.FMCG, sku: 'FMCG-001' }),
  makeProduct({ id: '5', name: 'LED Bulb 12W', price: 18, category: PRODUCT_CATEGORIES.ELECTRONICS, sku: 'ELEC-001' }),
  makeProduct({ id: '6', name: 'Ankara Wax Print', price: 65, category: PRODUCT_CATEGORIES.FABRICS, sku: 'FAB-001' }),
];

// ─── filterProducts ───────────────────────────────────────────────────────────

describe('filterProducts', () => {
  it('returns all products when no filter is applied', () => {
    const result = filterProducts(FIXTURES, null, '');
    expect(result).toHaveLength(FIXTURES.length);
  });

  it('filters by category', () => {
    const result = filterProducts(FIXTURES, PRODUCT_CATEGORIES.AUTOPARTS, '');
    expect(result).toHaveLength(2);
    result.forEach((p) => expect(p.category).toBe(PRODUCT_CATEGORIES.AUTOPARTS));
  });

  it('returns empty array when category has no products', () => {
    const result = filterProducts(FIXTURES, 'Nonexistent Category', '');
    expect(result).toHaveLength(0);
  });

  it('filters by search query matching product name (case-insensitive)', () => {
    const result = filterProducts(FIXTURES, null, 'hilux');
    expect(result).toHaveLength(1);
    expect(result[0].name).toContain('Hilux');
  });

  it('filters by search query matching description', () => {
    const result = filterProducts(FIXTURES, null, 'test product');
    // All fixtures have "A test product." in description
    expect(result).toHaveLength(FIXTURES.length);
  });

  it('filters by search query matching SKU', () => {
    const result = filterProducts(FIXTURES, null, 'AGRI-001');
    expect(result).toHaveLength(1);
    expect(result[0].name).toContain('Fertilizer');
  });

  it('filters by search query matching category name', () => {
    const result = filterProducts(FIXTURES, null, 'electronics');
    expect(result).toHaveLength(1);
    expect(result[0].category).toBe(PRODUCT_CATEGORIES.ELECTRONICS);
  });

  it('applies category AND search query simultaneously', () => {
    // Autoparts + "honda" should return only Honda brake pad
    const result = filterProducts(FIXTURES, PRODUCT_CATEGORIES.AUTOPARTS, 'honda');
    expect(result).toHaveLength(1);
    expect(result[0].name).toContain('Honda');
  });

  it('returns empty when search has no match', () => {
    const result = filterProducts(FIXTURES, null, 'zzznonexistent');
    expect(result).toHaveLength(0);
  });

  it('trims whitespace from the search query', () => {
    const result = filterProducts(FIXTURES, null, '  hilux  ');
    expect(result).toHaveLength(1);
  });

  it('does not mutate the original products array', () => {
    const original = [...FIXTURES];
    filterProducts(FIXTURES, PRODUCT_CATEGORIES.FMCG, 'oil');
    expect(FIXTURES).toEqual(original);
  });
});

// ─── sortProducts ─────────────────────────────────────────────────────────────

describe('sortProducts', () => {
  it('default sort preserves original order', () => {
    const result = sortProducts(FIXTURES, 'default');
    expect(result.map((p) => p.id)).toEqual(FIXTURES.map((p) => p.id));
  });

  it('sorts A → Z by name', () => {
    const result = sortProducts(FIXTURES, 'az');
    const names = result.map((p) => p.name);
    expect(names).toEqual([...names].sort((a, b) => a.localeCompare(b)));
  });

  it('sorts Z → A by name', () => {
    const result = sortProducts(FIXTURES, 'za');
    const names = result.map((p) => p.name);
    expect(names).toEqual([...names].sort((a, b) => b.localeCompare(a)));
  });

  it('sorts price low → high', () => {
    const result = sortProducts(FIXTURES, 'price_asc');
    const prices = result.map((p) => p.price);
    for (let i = 1; i < prices.length; i++) {
      expect(prices[i]).toBeGreaterThanOrEqual(prices[i - 1]);
    }
  });

  it('sorts price high → low', () => {
    const result = sortProducts(FIXTURES, 'price_desc');
    const prices = result.map((p) => p.price);
    for (let i = 1; i < prices.length; i++) {
      expect(prices[i]).toBeLessThanOrEqual(prices[i - 1]);
    }
  });

  it('does not mutate the input array', () => {
    const input = [...FIXTURES];
    sortProducts(FIXTURES, 'az');
    expect(FIXTURES.map((p) => p.id)).toEqual(input.map((p) => p.id));
  });

  it('handles an empty array', () => {
    expect(sortProducts([], 'az')).toEqual([]);
  });

  it('handles a single-item array', () => {
    const single = [FIXTURES[0]];
    expect(sortProducts(single, 'price_asc')).toHaveLength(1);
  });
});

// ─── applyShopFilters ─────────────────────────────────────────────────────────

describe('applyShopFilters', () => {
  it('applies filter then sort', () => {
    const result = applyShopFilters({
      products: FIXTURES,
      selectedCategory: PRODUCT_CATEGORIES.AUTOPARTS,
      searchQuery: '',
      sortBy: 'price_asc',
    });
    // Only Autoparts: Toyota (30) and Honda (60)
    expect(result).toHaveLength(2);
    expect(result[0].price).toBe(30);
    expect(result[1].price).toBe(60);
  });

  it('returns full sorted list when no filter', () => {
    const result = applyShopFilters({
      products: FIXTURES,
      selectedCategory: null,
      searchQuery: '',
      sortBy: 'price_desc',
    });
    expect(result).toHaveLength(FIXTURES.length);
    expect(result[0].price).toBe(220); // NPK Fertilizer is most expensive
  });

  it('returns empty when nothing matches', () => {
    const result = applyShopFilters({
      products: FIXTURES,
      selectedCategory: null,
      searchQuery: 'zzznomatch',
      sortBy: 'default',
    });
    expect(result).toHaveLength(0);
  });
});

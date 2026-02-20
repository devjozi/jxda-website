/**
 * shop-filters.ts — Pure functions for filtering and sorting the product catalogue.
 *
 * Keeping these separate from the React component makes them:
 *   - Unit-testable without a DOM or renderer
 *   - Reusable if a second listing surface is added (e.g. search page)
 *
 * WHY pure functions?
 *   A pure function always returns the same output for the same input and has
 *   no side-effects. This makes it trivially easy to test and reason about.
 */

import type { Product } from './products';

// ─── Types ───────────────────────────────────────────────────────────────────

export type SortOption = 'default' | 'az' | 'za' | 'price_asc' | 'price_desc';

export interface ShopFilterParams {
  products: Product[];
  /** Null means "show all categories" */
  selectedCategory: string | null;
  /** Empty string means "no search query" */
  searchQuery: string;
  sortBy: SortOption;
}

// ─── Filter ──────────────────────────────────────────────────────────────────

/**
 * filterProducts — returns only the products that match the given category and
 * search query. Both filters are applied simultaneously (AND logic).
 *
 * Search matches against: name, description, category, and SKU.
 * Match is case-insensitive and substring-based (e.g. "hilux" matches "Toyota Hilux").
 */
export function filterProducts(
  products: Product[],
  selectedCategory: string | null,
  searchQuery: string,
): Product[] {
  const q = searchQuery.trim().toLowerCase();

  return products.filter((p) => {
    const matchesCat = !selectedCategory || p.category === selectedCategory;
    const matchesSearch =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      (p.sku ?? '').toLowerCase().includes(q);

    return matchesCat && matchesSearch;
  });
}

// ─── Sort ────────────────────────────────────────────────────────────────────

/**
 * sortProducts — returns a new sorted array; does not mutate the input.
 *
 * Sort options:
 *   default    — original catalogue order (stable)
 *   az         — name A → Z (locale-aware)
 *   za         — name Z → A
 *   price_asc  — cheapest first (price = 0 "on request" treated as 0)
 *   price_desc — most expensive first
 */
export function sortProducts(products: Product[], sortBy: SortOption): Product[] {
  if (sortBy === 'default') return products;

  const sorted = [...products];

  if (sortBy === 'az') return sorted.sort((a, b) => a.name.localeCompare(b.name));
  if (sortBy === 'za') return sorted.sort((a, b) => b.name.localeCompare(a.name));
  if (sortBy === 'price_asc') return sorted.sort((a, b) => a.price - b.price);
  if (sortBy === 'price_desc') return sorted.sort((a, b) => b.price - a.price);

  return sorted;
}

// ─── Combined ────────────────────────────────────────────────────────────────

/**
 * applyShopFilters — convenience wrapper: filter then sort.
 * This is what ShopClient should call inside its useMemo hook.
 */
export function applyShopFilters({
  products,
  selectedCategory,
  searchQuery,
  sortBy,
}: ShopFilterParams): Product[] {
  const filtered = filterProducts(products, selectedCategory, searchQuery);
  return sortProducts(filtered, sortBy);
}

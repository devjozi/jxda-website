/**
 * Cart storage helpers for the storefront.
 * Keeps localStorage shape stable and defensive.
 */

export type CartItemLite = {
  id: string;
  name: string;
  price: number;
  qty: number;
  image: string;
  slug?: string;
};

const CART_STORAGE_KEY = 'jxd-cart';

function clampQty(qty: number): number {
  if (!Number.isFinite(qty)) return 1;
  return Math.max(1, Math.floor(qty));
}

function toNumber(value: unknown): number {
  if (typeof value === 'number') return value;
  if (typeof value === 'string') {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
  }
  return 0;
}

function toString(value: unknown): string {
  return typeof value === 'string' ? value : '';
}

// Supports both legacy `quantity` and new `qty` payloads.
function normalizeCartItem(raw: unknown): CartItemLite | null {
  if (!raw || typeof raw !== 'object') return null;

  const record = raw as Record<string, unknown>;
  const id = toString(record.id);
  const name = toString(record.name);
  const image = toString(record.image);

  if (!id || !name || !image) {
    return null;
  }

  const qty = clampQty(toNumber(record.qty ?? record.quantity ?? 1));
  const price = Math.max(0, toNumber(record.price));
  const slug = toString(record.slug) || undefined;

  return { id, name, price, qty, image, slug };
}

export function readCart(): CartItemLite[] {
  if (typeof window === 'undefined') return [];

  try {
    const stored = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!stored) return [];

    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed)) return [];

    return parsed.map(normalizeCartItem).filter((item): item is CartItemLite => item !== null);
  } catch {
    return [];
  }
}

export function writeCart(items: CartItemLite[]): void {
  if (typeof window === 'undefined') return;

  try {
    const normalized = items.map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      qty: clampQty(item.qty),
      image: item.image,
      slug: item.slug,
    }));
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(normalized));
  } catch {
    // no-op
  }
}

export function findCartItem(items: CartItemLite[], id: string): CartItemLite | undefined {
  return items.find((item) => item.id === id);
}

export function addOrIncrement(items: CartItemLite[], nextItem: CartItemLite, qty: number): CartItemLite[] {
  const incrementBy = clampQty(qty);
  const existing = findCartItem(items, nextItem.id);

  if (existing) {
    return items.map((item) =>
      item.id === nextItem.id ? { ...item, qty: clampQty(item.qty + incrementBy) } : item,
    );
  }

  return [...items, { ...nextItem, qty: incrementBy }];
}

export function lineTotal(item: CartItemLite): number {
  return item.price * item.qty;
}

export function cartTotal(items: CartItemLite[]): number {
  return items.reduce((sum, item) => sum + lineTotal(item), 0);
}

export function cartCount(items: CartItemLite[]): number {
  return items.reduce((sum, item) => sum + item.qty, 0);
}

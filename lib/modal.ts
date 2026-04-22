/**
 * Product checkout modal persistence helpers.
 * Uses sessionStorage so prompts only appear once per visit.
 */

export function modalSeenKey(productKey: string): string {
  return `jxd-product-checkout-modal:${productKey}`;
}

export function hasSeenProductCheckoutModal(productKey: string): boolean {
  if (typeof window === 'undefined') return false;

  try {
    return window.sessionStorage.getItem(modalSeenKey(productKey)) === '1';
  } catch {
    return false;
  }
}

export function markProductCheckoutModalSeen(productKey: string): void {
  if (typeof window === 'undefined') return;

  try {
    window.sessionStorage.setItem(modalSeenKey(productKey), '1');
  } catch {
    // no-op
  }
}

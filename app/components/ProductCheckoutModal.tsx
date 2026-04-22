'use client';

import { useEffect, useMemo, useState } from 'react';
import { useCart } from './CartProvider';

type CheckoutMessageInput = {
  name: string;
  qty: number;
  price: number;
};

const PRODUCT_CHECKOUT_MODAL_SEEN_KEY = 'product-checkout-modal-seen';

function getProductCheckoutModalSeenStorageKey(slug: string) {
  return `${PRODUCT_CHECKOUT_MODAL_SEEN_KEY}:${slug}`;
}

function hasSeenProductCheckoutModal(slug: string) {
  if (typeof window === 'undefined') return true;

  try {
    return window.localStorage.getItem(getProductCheckoutModalSeenStorageKey(slug)) === 'true';
  } catch {
    return false;
  }
}

function markProductCheckoutModalSeen(slug: string) {
  if (typeof window === 'undefined') return;

  try {
    window.localStorage.setItem(getProductCheckoutModalSeenStorageKey(slug), 'true');
  } catch {
    // Ignore storage failures so the checkout flow still works.
  }
}

function buildCheckoutMessage({ name, qty, price }: CheckoutMessageInput) {
  return `Hi, I want to checkout ${qty} x ${name} at ${price} each.`;
}

function buildWhatsAppCheckoutUrl(message: string) {
  if (!message.trim()) return '#';
  return `https://wa.me/?text=${encodeURIComponent(message)}`;
}
type ProductCheckoutModalProps = {
  product: {
    id: string;
    slug: string;
    name: string;
    price: number;
  };
};

export default function ProductCheckoutModal({ product }: ProductCheckoutModalProps) {
  const { items } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const cartItem = useMemo(
    () => items.find((item) => item.id === product.id),
    [items, product.id],
  );

  const qty = Math.max(1, cartItem?.qty ?? 1);

  useEffect(() => {
    const seen = hasSeenProductCheckoutModal(product.slug);
    if (seen) return;

    const timer = window.setTimeout(() => {
      setIsOpen(true);
      markProductCheckoutModalSeen(product.slug);
    }, 15000);

    return () => window.clearTimeout(timer);
  }, [product.slug]);

  const handleCheckout = () => {
    const message = buildCheckoutMessage({
      name: product.name,
      qty,
      price: product.price,
    });

    const url = buildWhatsAppCheckoutUrl(message);
    if (url !== '#') {
      window.location.href = url;
    }
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-lg btn-primary"
        onClick={handleCheckout}
      >
        Checkout
      </button>

      {isOpen && (
        <div
          className="modal d-block"
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          onClick={() => setIsOpen(false)}
          style={{ background: 'rgba(0, 0, 0, 0.45)' }}
        >
          <div className="modal-dialog modal-dialog-centered" role="document" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Ready to checkout?</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={() => setIsOpen(false)} />
              </div>
              <div className="modal-body">
                <p className="mb-0 text-muted">Your selected quantity is {qty}. Continue to checkout?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-outline-secondary" onClick={() => setIsOpen(false)}>
                  Continue browsing
                </button>
                <button type="button" className="btn btn-primary" onClick={handleCheckout}>
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

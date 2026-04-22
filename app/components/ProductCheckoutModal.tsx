'use client';

import { useEffect, useMemo, useState } from 'react';
import { useCart } from './CartProvider';
import { buildCheckoutMessage, buildWhatsAppCheckoutUrl } from '../../lib/whatsapp';
import { hasSeenProductCheckoutModal, markProductCheckoutModalSeen } from '../../lib/modal';

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

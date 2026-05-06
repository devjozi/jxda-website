'use client';

/**
 * CartCheckoutClient — Displays cart items on the checkout page and integrates WhatsApp order flow.
 */

import { useCart } from './CartProvider';
import { buildWhatsAppCheckoutUrl, formatGhs } from '../../lib/whatsapp';
import Link from 'next/link';

export default function CartCheckoutClient() {
  const { items, itemCount, totalPrice, removeFromCart, updateQuantity, clearCart } = useCart();

  if (itemCount === 0) {
    return (
      <div className="text-center py-5">
        <i className="fa fa-shopping-cart fa-3x text-muted mb-3 d-block" />
        <h5 className="text-muted mb-3">Your cart is empty</h5>
        <Link href="/shop" className="btn btn-primary">
          Browse Products
        </Link>
      </div>
    );
  }

  // Build WhatsApp message with all cart items
  const cartSummary = items
    .map((item) => `- ${item.name} (x${item.qty}) — GHS ${formatGhs(item.price * item.qty)}`)
    .join('\n');
  const whatsAppMessage = `Hello, I want to order:\n\n${cartSummary}\n\nTotal: GHS ${formatGhs(totalPrice)}\n\nName:\nLocation:`;
  const checkoutUrl = buildWhatsAppCheckoutUrl(whatsAppMessage);

  return (
    <div>
      <h4 className="mb-3">Your Cart ({itemCount} {itemCount === 1 ? 'item' : 'items'})</h4>
      <div className="list-group mb-4">
        {items.map((item) => (
          <div key={item.id} className="list-group-item d-flex align-items-center gap-3">
            <img
              src={item.image}
              alt={item.name}
              style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '6px' }}
            />
            <div className="flex-grow-1">
              <h6 className="mb-1">{item.name}</h6>
              <p className="mb-0 text-muted" style={{ fontSize: '0.85rem' }}>
                GHS {item.price.toFixed(2)} × {item.qty}
              </p>
            </div>
            <div className="d-flex align-items-center gap-2">
              <input
                type="number"
                className="form-control form-control-sm"
                style={{ width: '70px' }}
                min="1"
                value={item.qty}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                aria-label={`Quantity for ${item.name}`}
              />
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => removeFromCart(item.id)}
                aria-label={`Remove ${item.name} from cart`}
              >
                <i className="fa fa-trash" />
              </button>
            </div>
            <div className="text-end" style={{ minWidth: '100px' }}>
              <strong>GHS {formatGhs(item.price * item.qty)}</strong>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-between align-items-center mb-4 p-3 rounded" style={{ background: '#f8f9fa' }}>
        <h5 className="mb-0">Total:</h5>
        <h4 className="mb-0" style={{ color: '#1a2e4a', fontWeight: 800 }}>
          GHS {totalPrice.toFixed(2)}
        </h4>
      </div>

      <div className="d-flex flex-wrap gap-2">
        <a
          href={checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-lg"
          style={{ background: '#25D366', color: '#fff', border: 'none', fontWeight: 700 }}
        >
          <i className="fa fa-whatsapp me-2" />Order via WhatsApp
        </a>
        <button onClick={clearCart} className="btn btn-lg btn-outline-secondary">
          Clear Cart
        </button>
      </div>
    </div>
  );
}

'use client';

import { useState, FormEvent } from 'react';
import { buildWhatsAppUrl } from '../../lib/site';
import { Product } from '../../lib/products';

interface WhatsAppOrderProps {
  product?: Product;
  prefilledQuantity?: number;
}

/**
 * WhatsApp Order Component
 * Allows customers to send order requests via WhatsApp
 * Works standalone or with a specific product
 */
export default function WhatsAppOrder({ product, prefilledQuantity = 1 }: WhatsAppOrderProps) {
  const [submitted, setSubmitted] = useState(false);
  const [quantity, setQuantity] = useState(prefilledQuantity);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = String(form.get('name') ?? '').trim();
    const email = String(form.get('email') ?? '').trim();
    const phone = String(form.get('phone') ?? '').trim();

    // Build order message
    const orderLines = [
      `*ORDER REQUEST*`,
      `━━━━━━━━━━━━━━━`,
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
    ].filter(Boolean);

    if (product) {
      orderLines.push(
        ...[
          ``,
          `*Product:* ${product.name}`,
          product.sku ? `*SKU:* ${product.sku}` : null,
          `*Quantity:* ${quantity}`,
          product.price > 0
            ? `*Unit Price:* GHS ${product.price.toFixed(2)}`
            : `*Price:* On Request`,
          product.price > 0
            ? `*Total:* GHS ${(product.price * quantity).toFixed(2)}`
            : null,
        ].filter((l): l is string => Boolean(l))
      );
    } else {
      const message = String(form.get('message') ?? '').trim();
      if (message) {
        orderLines.push(``, `*Details:*`, message);
      }
    }

    orderLines.push(
      ``,
      `━━━━━━━━━━━━━━━`,
      `Thank you for choosing JX Distribution!`,
    );

    const whatsappMessage = orderLines.filter(Boolean).join('\n');
    const whatsappUrl = buildWhatsAppUrl(whatsappMessage);

    if (whatsappUrl !== '#') {
      const newWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      if (newWindow) newWindow.opener = null;
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className="whatsapp-order-success">
        <div className="alert alert-success">
          <h4>✓ Order Sent Successfully!</h4>
          <p>Your order has been sent to our WhatsApp. We will confirm and process your request shortly.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="whatsapp-order-form">
      <form onSubmit={handleSubmit} method="post">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Full Name *</label>
          <input
            className="form-control"
            id="name"
            name="name"
            type="text"
            placeholder="Your full name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">Email *</label>
          <input
            className="form-control"
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone" className="form-label">Phone (Optional)</label>
          <input
            className="form-control"
            id="phone"
            name="phone"
            type="tel"
            placeholder="+233 XXX XXX XXXX"
          />
        </div>

        {product ? (
          <div className="form-group">
            <label htmlFor="quantity" className="form-label">Quantity *</label>
            <input
              className="form-control"
              id="quantity"
              name="quantity"
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
              required
            />
          </div>
        ) : (
          <div className="form-group">
            <label htmlFor="message" className="form-label">Order Details / Message</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              placeholder="Provide details about your order or inquiry..."
              rows={5}
            ></textarea>
          </div>
        )}

        <button className="btn btn-success btn-lg w-100" type="submit">
          <i className="fab fa-whatsapp"></i> Send Order via WhatsApp
        </button>
        <p className="text-muted text-center mt-3 small">
          You will be redirected to WhatsApp to confirm and send your order.
        </p>
      </form>
    </div>
  );
}

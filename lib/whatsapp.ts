/**
 * WhatsApp checkout helpers.
 */

import { SITE } from './site';

type SingleCheckoutInput = {
  name: string;
  qty: number;
  price: number;
};

export function formatGhs(value: number): string {
  return Number.isFinite(value) ? value.toFixed(2) : '0.00';
}

export function resolveWhatsAppNumber(): string {
  return SITE.whatsapp.number.replace(/\D/g, '');
}

export function buildCheckoutMessage(input: SingleCheckoutInput): string {
  const qty = Math.max(1, Math.floor(input.qty));
  const price = Math.max(0, input.price);
  const total = qty * price;

  return [
    'Hello, I want to order:',
    '',
    `Product: ${input.name}`,
    `Qty: ${qty}`,
    `Price: GHS ${formatGhs(price)}`,
    `Total: GHS ${formatGhs(total)}`,
    '',
    'Name:',
    'Location:',
  ].join('\n');
}

export function buildWhatsAppCheckoutUrl(message: string, number?: string): string {
  const phone = (number ?? resolveWhatsAppNumber()).replace(/\D/g, '');
  if (!phone) return '#';
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

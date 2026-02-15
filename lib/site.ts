/**
 * JX Distribution site config — branding and contact placeholders.
 * Replace with real values during customization.
 */

export const SITE = {
  name: 'JX Distribution Africa',
  tagline: 'Sales, Marketing & Distribution Across Africa',
  // Registered Ghanaian company with coverage across all 16 regions.
  address: 'Accra, Ghana (coverage across all 16 regions)',
  // Replace with the official contact email for JX Distribution Africa.
  email: 'info@jxdistributionafrica.com',
  // Replace with the official phone number.
  phone: '+233 XX XXX XXXX',
  // Public note from the company profile.
  note: 'We do not sell or market alcoholic products or content.',
  // Replace social URLs with real profiles when available.
  social: {
    facebook: '#',
    twitter: '#',
    linkedin: '#',
    instagram: '#',
  },
  whatsapp: {
    // Digits only for wa.me links.
    number: (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '233XXXXXXXXX').replace(/\D/g, ''),
    message: process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ?? "Hi, I'm interested in JX Distribution services.",
  },
} as const;

export function buildWhatsAppUrl(message?: string) {
  const number = SITE.whatsapp.number;
  if (!number) {
    return '#';
  }

  const text = (message ?? SITE.whatsapp.message).trim();
  const query = text ? `?text=${encodeURIComponent(text)}` : '';
  return `https://wa.me/${number}${query}`;
}

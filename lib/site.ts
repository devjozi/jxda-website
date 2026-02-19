/**
 * JX Distribution site config — branding and contact placeholders.
 * Replace with real values during customization.
 */

export const SITE = {
  name: 'JX Distribution Africa',
  tagline: 'Sales, Marketing & Distribution Across Africa',
  // Registered Ghanaian company with coverage across all 16 regions.
  address: 'Accra, Ghana (coverage across all 16 regions)',
  email: 'info@jxdistributionafrica.com',
  phone: '+233 53 883 8135',
  // Public note from the company profile.
  note: 'We do not sell or market alcoholic products or content.',
  social: {
    facebook: 'https://web.facebook.com/jxdistribution',
    twitter: '#',
    linkedin: 'https://linkedin.com/company/jx-distribution',
    instagram: 'https://www.instagram.com/jxdistribution/',
  },
  whatsapp: {
    // Digits only for wa.me links. Override via NEXT_PUBLIC_WHATSAPP_NUMBER env var.
    number: (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '233546613884').replace(/\D/g, ''),
    message: process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ?? "Hi, I'm interested in JX Distribution services.",
  },
} as const;

export function buildWhatsAppUrl(message?: string) {
  const number = SITE.whatsapp.number;
  if (!number) return '#';
  const text = (message ?? SITE.whatsapp.message).trim();
  const query = text ? `?text=${encodeURIComponent(text)}` : '';
  return `https://wa.me/${number}${query}`;
}

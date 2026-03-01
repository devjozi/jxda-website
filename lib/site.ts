/**
 * JX Distribution site config — branding and contact placeholders.
 * Replace with real values during customization.
 */

export const SITE = {
  name: 'JX Distribution Africa',
  tagline: 'Just produce or import, we will sell.',
  // Registered Ghanaian company with coverage across all 16 regions.
  address: 'Headquartered in Ghana with operations across all 16 regions',
  // Replace with the official contact email for JX Distribution Africa.
  email: 'info@jxdistributionafrica.com',
  // Replace with the official phone number.
  phone: '+233 53 883 8135',
  // Public note from the company profile.
  note: 'We do not sell or market alcoholic, gambling, and tobacco products.',
  // Replace social URLs with real profiles when available.
  social: {
    facebook: 'https://web.facebook.com/JxDistribution',
    twitter: '#',
    TikTok: '#',
    linkedin: 'https://www.linkedin.com/company/jx-distribution/',
    instagram: 'https://www.instagram.com/jxdistribution/',
  },
  whatsapp: {
    // Digits only for wa.me links.
    number: (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '233538838135').replace(/\D/g, ''),
    message: process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ?? "Hi, I want to grow sales and market coverage with JX Distribution Africa.",
  },
  contactForm: {
    // External form endpoint (Formspree/Getform/etc.).
    action: process.env.NEXT_PUBLIC_CONTACT_FORM_ACTION ?? '',
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

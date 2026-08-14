/**
 * JX Distribution site config — branding and contact placeholders.
 * Replace with real values during customization.
 */

export const SITE = {
  name: 'JX Distribution Africa',
  tagline: 'Just produce or import, we will sell.',
  address: 'JX Distribution Africa, Mr. Adjei Station, Kwabenya, Accra, Ghana',
  // Replace with the official contact email for JX Distribution Africa.
  email: 'info@jxdistributionafrica.com',
  // Official contact phone number.
  phone: {
    display: '+233 53 187 3637',
    href: 'tel:+233531873637',
    digits: '233531873637',
  },
  // Public note from the company profile.
  note: 'We do not sell or market alcoholic, gambling, and tobacco products.',
  // Social profiles — all set to live handles.
  social: {
    facebook: 'https://web.facebook.com/JxDistribution',
    // twitter: '#',
    tiktok: 'https://www.tiktok.com/@jxdistribution',
    linkedin: 'https://www.linkedin.com/company/jx-distribution/',
    instagram: 'https://www.instagram.com/jxdistribution/',
  },
  whatsapp: {
    // Digits only for wa.me links.
    number: (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '233531873637').replace(/\D/g, ''),
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

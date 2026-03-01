export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  image: string;
};

export type SalesChannelMetric = {
  id: string;
  icon: string;
  valueInMillions: number;
  label: string;
};

export const HOMEPAGE_TESTIMONIALS: Testimonial[] = [
  {
    id: 'brand-growth-1',
    quote:
      'JX Distribution helped us expand into high-potential channels faster than expected, with disciplined field execution and clear reporting.',
    author: 'Brand Partner',
    role: 'FMCG Category Lead',
    image: '/images/clients/testimonial1.png',
  },
  {
    id: 'brand-growth-2',
    quote:
      'Their team combines distribution, activation, and accountability in one operating model. We see visibility and conversion improvements month after month.',
    author: 'Commercial Director',
    role: 'Consumer Goods Company',
    image: '/images/clients/testimonial2.png',
  },
];

export const SALES_CHANNEL_METRICS: SalesChannelMetric[] = [
  {
    id: 'retailers',
    icon: '/images/icon/fact1.png',
    valueInMillions: 31,
    label: 'Retailers (Data Reach)',
  },
  {
    id: 'wholesalers',
    icon: '/images/icon/fact2.png',
    valueInMillions: 31,
    label: 'Wholesalers (Data Reach)',
  },
  {
    id: 'key-accounts',
    icon: '/images/icon/fact3.png',
    valueInMillions: 31,
    label: 'Key Accounts (Data Reach)',
  },
];

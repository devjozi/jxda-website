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
  value: number;
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
    value: 63041,
    label: 'Retailers across West Africa',
  },
  {
    id: 'wholesalers',
    icon: '/images/icon/fact2.png',
    value: 36200,
    label: 'Wholesalers across West Africa',
  },
  {
    id: 'key-accounts',
    icon: '/images/icon/fact3.png',
    value: 9800,
    label: 'Key Accounts across West Africa',
  },
];

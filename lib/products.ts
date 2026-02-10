/**
 * Product data for commerce (build-time static).
 * Replace with CMS or API later if needed.
 */

export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  category?: string;
};

export const PRODUCTS: Product[] = [
  {
    id: '1',
    slug: 'b2b-sales-activation',
    name: 'B2B Sales & Merchandising',
    description:
      'Direct sales and merchandising to retailers and wholesalers across all 16 regions, focused on increasing availability and visibility of your products.',
    price: 199,
    currency: 'GHS',
    image: '/images/services/service1.jpg',
    category: 'B2B',
  },
  {
    id: '2',
    slug: 'b2c-consumer-activation',
    name: 'B2C Consumer Activation',
    description:
      'Open market activations, road shows and modern trade activities that put your products directly in front of consumers.',
    price: 249,
    currency: 'GHS',
    image: '/images/services/service2.jpg',
    category: 'B2C',
  },
  {
    id: '3',
    slug: 'route-to-market-strategy',
    name: 'Route to Market Strategy',
    description:
      'Development and execution of route to market and route to consumer strategies, backed by data and field insights.',
    price: 349,
    currency: 'GHS',
    image: '/images/services/service4.jpg',
    category: 'Strategy',
  },
  {
    id: '4',
    slug: 'logistics-and-distribution-management',
    name: 'Logistics & Distribution Management',
    description:
      'Commission- or target-based distribution and delivery management, leveraging stationed warehouses and teams across Ghana.',
    price: 299,
    currency: 'GHS',
    image: '/images/services/service6.jpg',
    category: 'Logistics',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getAllProducts(): Product[] {
  return PRODUCTS;
}

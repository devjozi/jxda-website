/**
 * Product data for commerce (build-time static).
 * Replace with CMS or API later if needed.
 */

// Product categories
export const PRODUCT_CATEGORIES = {
  FMCG: 'FMCG',
  SPAREPARTS: 'Spareparts',
  ELECTRONICS: 'Electronics',
  FABRICS: 'Fabrics',
  AGRIC_INPUTS: 'Agricultural Inputs',
} as const;

export type ProductCategory = typeof PRODUCT_CATEGORIES[keyof typeof PRODUCT_CATEGORIES];

export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;          // Use 0 for "Price on Request"
  currency: string;       // "GHS"
  image: string;
  category: string;       // Required - one of PRODUCT_CATEGORIES
  sku?: string;           // Optional SKU for inventory tracking
  inStock?: boolean;      // Optional stock status (default true)
  tags?: string[];        // Optional tags for filtering
};

export const PRODUCTS: Product[] = [
  // FMCG Products (2 examples)
  {
    id: '1',
    slug: 'premium-vegetable-oil-5l',
    name: 'Premium Vegetable Oil 5L',
    description:
      'High-quality vegetable cooking oil ideal for retail distribution. Suitable for all types of cooking, frying, and food preparation. Popular choice for retailers and wholesalers.',
    price: 45.00,
    currency: 'GHS',
    image: '/images/services/service1.jpg',
    category: PRODUCT_CATEGORIES.FMCG,
    sku: 'FMCG-001',
    inStock: true,
  },
  {
    id: '2',
    slug: 'rice-25kg-bag',
    name: 'Rice 25kg Bag',
    description:
      'Premium quality rice perfect for retail and wholesale distribution. Clean, well-processed grains suitable for households and commercial kitchens. Available in bulk quantities.',
    price: 180.00,
    currency: 'GHS',
    image: '/images/services/service2.jpg',
    category: PRODUCT_CATEGORIES.FMCG,
    sku: 'FMCG-002',
    inStock: true,
  },

  // Spareparts Products (2 examples)
  {
    id: '3',
    slug: 'automotive-oil-filter',
    name: 'Automotive Oil Filter',
    description:
      'Compatible oil filter for major vehicle brands. OEM quality replacement part suitable for cars, trucks, and commercial vehicles. Essential for vehicle maintenance.',
    price: 35.50,
    currency: 'GHS',
    image: '/images/services/service3.jpg',
    category: PRODUCT_CATEGORIES.SPAREPARTS,
    sku: 'SP-001',
    inStock: true,
  },
  {
    id: '4',
    slug: 'brake-pads-set',
    name: 'Brake Pads Set',
    description:
      'High-quality brake pads for passenger vehicles. Reliable stopping power and long-lasting performance. Compatible with multiple vehicle models.',
    price: 0,
    currency: 'GHS',
    image: '/images/services/service4.jpg',
    category: PRODUCT_CATEGORIES.SPAREPARTS,
    sku: 'SP-002',
    inStock: true,
  },

  // Electronics Products (2 examples)
  {
    id: '5',
    slug: 'led-bulb-12w',
    name: 'LED Bulb 12W',
    description:
      'Energy-efficient 12W LED bulb with long lifespan. Perfect for home and office use. Provides bright, consistent lighting while reducing electricity costs.',
    price: 18.00,
    currency: 'GHS',
    image: '/images/services/service5.jpg',
    category: PRODUCT_CATEGORIES.ELECTRONICS,
    sku: 'ELEC-001',
    inStock: true,
  },
  {
    id: '6',
    slug: 'rechargeable-flashlight',
    name: 'Rechargeable Flashlight',
    description:
      'Durable rechargeable flashlight with LED technology. Ideal for homes, security, and outdoor activities. Long battery life and bright illumination.',
    price: 45.00,
    currency: 'GHS',
    image: '/images/services/service6.jpg',
    category: PRODUCT_CATEGORIES.ELECTRONICS,
    sku: 'ELEC-002',
    inStock: true,
  },

  // Fabrics Product (1 example)
  {
    id: '7',
    slug: 'cotton-print-fabric',
    name: 'Cotton Print Fabric',
    description:
      'High-quality printed cotton fabric material for tailoring and fashion. Vibrant colors and patterns perfect for dresses, shirts, and traditional wear. Sold by the yard.',
    price: 0,
    currency: 'GHS',
    image: '/images/services/service7.jpg',
    category: PRODUCT_CATEGORIES.FABRICS,
    sku: 'FAB-001',
    inStock: true,
  },

  // Agricultural Inputs Product (1 example)
  {
    id: '8',
    slug: 'npk-fertilizer-50kg',
    name: 'NPK Fertilizer 50kg',
    description:
      'Balanced NPK fertilizer for crop enhancement. Suitable for various agricultural applications including vegetables, cereals, and cash crops. Improves soil fertility and crop yield.',
    price: 220.00,
    currency: 'GHS',
    image: '/images/services/service8.jpg',
    category: PRODUCT_CATEGORIES.AGRIC_INPUTS,
    sku: 'AGRI-001',
    inStock: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getAllProducts(): Product[] {
  return PRODUCTS;
}

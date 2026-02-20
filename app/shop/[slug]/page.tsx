/**
 * Product detail page — commerce.
 * Dynamic route: /shop/[slug]
 * Features: rich SEO metadata, JSON-LD schema, trust signals,
 *           WhatsApp ordering, and related products.
 */

import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import WhatsAppOrder from '../../components/WhatsAppOrder';
import { getProductBySlug, getAllProducts, PRODUCT_CATEGORIES } from '../../../lib/products';
import { buildWhatsAppUrl, SITE } from '../../../lib/site';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

// ─── SEO Metadata ────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: 'Product Not Found — JX Distribution Africa' };

  const title = `${product.name} — Buy in Ghana | JX Distribution Africa`;
  const description = `${product.description} Available across all 16 regions of Ghana.${product.sku ? ` SKU: ${product.sku}.` : ''} ${product.price > 0 ? `Price: GHS ${product.price.toFixed(2)}.` : 'Contact us for pricing.'} Order via WhatsApp for fast delivery. JX Distribution Africa — Ghana's trusted distributor.`;

  const keywords = [
    product.name,
    `${product.name} Ghana`,
    `buy ${product.name} Ghana`,
    product.category,
    `${product.category} Ghana`,
    ...(product.tags ?? []),
    'JX Distribution Africa',
    'auto parts Ghana',
    'genuine parts Ghana',
  ].join(', ');

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://jxdistributionafrica.com';
  const canonicalUrl = `${siteUrl}/shop/${slug}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      type: 'website',
      url: canonicalUrl,
      siteName: SITE.name,
      images: [
        {
          url: `${siteUrl}${product.image}`,
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
  };
}

// ─── Category icon map (matches ShopClient) ──────────────────────────────────

const CATEGORY_BADGE: Record<string, string> = {
  [PRODUCT_CATEGORIES.AUTOPARTS]: 'bg-primary',
  [PRODUCT_CATEGORIES.FMCG]: 'bg-success',
  [PRODUCT_CATEGORIES.ELECTRONICS]: 'bg-warning text-dark',
  [PRODUCT_CATEGORIES.FABRICS]: 'bg-info text-dark',
  [PRODUCT_CATEGORIES.AGRIC_INPUTS]: 'bg-success',
};

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const allProducts = getAllProducts();
  const relatedProducts = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://jxdistributionafrica.com';

  // ── JSON-LD: Product schema ──────────────────────────────────────────────
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: `${siteUrl}${product.image}`,
    sku: product.sku ?? undefined,
    brand: {
      '@type': 'Brand',
      name: 'JX Distribution Africa',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: product.currency,
      price: product.price > 0 ? product.price.toFixed(2) : undefined,
      availability:
        product.inStock !== false
          ? 'https://schema.org/InStock'
          : 'https://schema.org/OutOfStock',
      seller: {
        '@type': 'Organization',
        name: 'JX Distribution Africa',
        url: siteUrl,
      },
      areaServed: {
        '@type': 'Country',
        name: 'Ghana',
      },
    },
  };

  // ── JSON-LD: Breadcrumb schema ───────────────────────────────────────────
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: 'Shop', item: `${siteUrl}/shop/` },
      { '@type': 'ListItem', position: 3, name: product.name, item: `${siteUrl}/shop/${product.slug}/` },
    ],
  };

  const badgeClass = CATEGORY_BADGE[product.category] ?? 'bg-secondary';
  const quickOrderMsg = `Hi, I want to order: ${product.name}${product.sku ? ` (SKU: ${product.sku})` : ''}. Please confirm availability and pricing.`;

  return (
    <>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />

      {/* ── Page Banner ────────────────────────────────────────────────────── */}
      <div
        className="banner-area"
        id="banner-area"
        style={{ backgroundImage: 'url(/images/banner/banner1.jpg)' }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col">
              <div className="banner-heading">
                <h1 className="banner-title">{product.name}</h1>
                <ol className="breadcrumb">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/shop">Shop</Link></li>
                  <li>{product.category}</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Trust Bar ──────────────────────────────────────────────────────── */}
      <div className="py-2" style={{ background: '#1a2e4a', color: '#fff', fontSize: '0.8rem' }}>
        <div className="container">
          <div className="d-flex flex-wrap justify-content-center gap-3 text-center">
            <span><i className="fa fa-check-circle me-1" style={{ color: '#4ade80' }} />Official Distributor</span>
            <span><i className="fa fa-shield me-1" style={{ color: '#4ade80' }} />Genuine Products</span>
            <span><i className="fa fa-map-marker me-1" style={{ color: '#4ade80' }} />All 16 Regions of Ghana</span>
            <span><i className="fa fa-whatsapp me-1" style={{ color: '#4ade80' }} />Fast WhatsApp Ordering</span>
          </div>
        </div>
      </div>

      {/* ── Product Detail ──────────────────────────────────────────────────── */}
      <section className="py-5">
        <div className="container">

          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link href="/">Home</Link></li>
              <li className="breadcrumb-item"><Link href="/shop">Shop</Link></li>
              <li className="breadcrumb-item">
                <Link href={`/shop?category=${encodeURIComponent(product.category)}`}>
                  {product.category}
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">{product.name}</li>
            </ol>
          </nav>

          <div className="row g-5">
            {/* Left: image */}
            <div className="col-md-5">
              <div
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
                  position: 'sticky',
                  top: '20px',
                }}
              >
                <img
                  src={product.image}
                  className="img-fluid w-100"
                  alt={`${product.name} — available in Ghana from JX Distribution Africa`}
                  style={{ display: 'block' }}
                />
              </div>
            </div>

            {/* Right: product info */}
            <div className="col-md-7">
              {/* Category + SKU */}
              <div className="d-flex align-items-center gap-2 mb-2">
                <span className={`badge ${badgeClass}`}>{product.category}</span>
                {product.sku && (
                  <span className="text-muted" style={{ fontSize: '0.8rem' }}>
                    SKU: <code>{product.sku}</code>
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#1a2e4a', lineHeight: 1.3 }} className="mb-3">
                {product.name}
              </h1>

              {/* Price */}
              <div
                className="mb-3 p-3 rounded-3"
                style={{ background: product.price > 0 ? '#eef2ff' : '#fffbeb', display: 'inline-block' }}
              >
                {product.price > 0 ? (
                  <>
                    <span style={{ fontSize: '2rem', fontWeight: 900, color: '#1a2e4a' }}>
                      GHS {product.price.toFixed(2)}
                    </span>
                    <span className="text-muted ms-2" style={{ fontSize: '0.85rem' }}>per unit</span>
                  </>
                ) : (
                  <span style={{ fontWeight: 700, color: '#d97706', fontSize: '1.1rem' }}>
                    <i className="fa fa-tag me-2" />Price on Request — Contact Us
                  </span>
                )}
              </div>

              {/* Stock badge */}
              <div className="mb-3">
                {product.inStock !== false ? (
                  <span className="badge bg-success py-1 px-3" style={{ fontSize: '0.85rem' }}>
                    <i className="fa fa-check me-1" />In Stock — Ready to Ship
                  </span>
                ) : (
                  <span className="badge bg-danger py-1 px-3" style={{ fontSize: '0.85rem' }}>
                    Out of Stock
                  </span>
                )}
              </div>

              {/* Primary CTA — above the fold */}
              <div className="d-flex flex-wrap gap-2 mb-4">
                <a
                  href={buildWhatsAppUrl(quickOrderMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-lg"
                  style={{ background: '#25D366', color: '#fff', border: 'none', fontWeight: 700 }}
                >
                  <i className="fa fa-whatsapp me-2" />Order Now via WhatsApp
                </a>
                <Link href="/contact" className="btn btn-lg btn-outline-secondary">
                  Request a Quote
                </Link>
              </div>

              {/* Description */}
              <div className="mb-4">
                <h5 style={{ fontWeight: 700, color: '#1a2e4a', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Product Description
                </h5>
                <p style={{ color: '#374151', lineHeight: 1.75, fontSize: '0.95rem' }}>
                  {product.description}
                </p>
              </div>

              {/* Trust signals */}
              <div
                className="rounded-3 p-3"
                style={{ background: '#f8f9fa', border: '1px solid #e5e7eb' }}
              >
                <div className="row g-2 text-center">
                  {[
                    { icon: 'fa fa-check-circle', color: '#16a34a', text: 'Official Distributor' },
                    { icon: 'fa fa-shield', color: '#2563eb', text: 'Genuine Products' },
                    { icon: 'fa fa-map-marker', color: '#dc2626', text: '16 Regions' },
                    { icon: 'fa fa-phone', color: '#7c3aed', text: '24/7 Support' },
                  ].map(({ icon, color, text }) => (
                    <div className="col-6 col-sm-3" key={text}>
                      <i className={`${icon} d-block mb-1`} style={{ color, fontSize: '1.2rem' }} />
                      <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#374151' }}>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Order Form ──────────────────────────────────────────────────── */}
          <div className="row mt-5 pt-4 border-top">
            <div className="col-lg-8 offset-lg-2">
              <h3 className="mb-1" style={{ fontWeight: 800, color: '#1a2e4a' }}>
                Place Your Order
              </h3>
              <p className="text-muted mb-4" style={{ fontSize: '0.9rem' }}>
                Fill in your details below — we&apos;ll open WhatsApp with your order pre-filled for fast fulfilment.
              </p>
              <WhatsAppOrder product={product} />
            </div>
          </div>

          {/* ── Continue Shopping & Back ─────────────────────────────────── */}
          <div className="row mt-4">
            <div className="col-lg-8 offset-lg-2">
              <Link href="/shop" className="btn btn-outline-secondary me-2">
                ← Back to Shop
              </Link>
              <Link href={`/shop?category=${encodeURIComponent(product.category)}`} className="btn btn-outline-primary">
                More {product.category}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Products ────────────────────────────────────────────────── */}
      {relatedProducts.length > 0 && (
        <section className="py-5" style={{ background: '#f8f9fa' }}>
          <div className="container">
            <h2 className="mb-1" style={{ fontWeight: 800, color: '#1a2e4a', fontSize: '1.3rem' }}>
              More {product.category}
            </h2>
            <p className="text-muted mb-4" style={{ fontSize: '0.875rem' }}>
              Other products you might need
            </p>
            <div className="row g-4">
              {relatedProducts.map((rp) => (
                <div className="col-sm-6 col-lg-3" key={rp.id}>
                  <div
                    className="card h-100"
                    style={{
                      border: 'none',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      boxShadow: '0 2px 10px rgba(0,0,0,0.07)',
                    }}
                  >
                    <img
                      src={rp.image}
                      alt={`${rp.name} — JX Distribution Africa`}
                      style={{ height: '150px', width: '100%', objectFit: 'cover' }}
                    />
                    <div className="card-body p-3">
                      <h6 className="card-title mb-1" style={{ fontWeight: 700, fontSize: '0.85rem', color: '#1a2e4a' }}>
                        {rp.name}
                      </h6>
                      <p className="mb-2" style={{ fontWeight: 800, fontSize: '0.9rem', color: '#1a2e4a' }}>
                        {rp.price > 0 ? `GHS ${rp.price.toFixed(2)}` : 'Price on Request'}
                      </p>
                      <Link href={`/shop/${rp.slug}`} className="btn btn-primary btn-sm w-100" style={{ fontSize: '0.8rem' }}>
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}

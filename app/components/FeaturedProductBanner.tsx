/**
 * FeaturedProductBanner — promotional ad strip for featured products.
 * Shown on non-shop pages to drive traffic to featured items.
 */

import Link from 'next/link';
import { getFeaturedProducts } from '../../lib/products';

export default function FeaturedProductBanner() {
  const featured = getFeaturedProducts();
  if (featured.length === 0) return null;

  // Group featured products by unique image (show one image, list all variants)
  const riceProducts = featured.filter((p) => p.tags?.includes('rice'));
  const representative = riceProducts[0];
  if (!representative) return null;

  return (
    <section
      className="featured-product-banner"
      style={{
        background: 'linear-gradient(135deg, #1a6b1a 0%, #2d8c2d 50%, #1a6b1a 100%)',
        padding: '40px 0',
        borderTop: '4px solid #f0c040',
        borderBottom: '4px solid #f0c040',
      }}
    >
      <div className="container">
        <div className="row align-items-center">

          {/* Badge + Heading */}
          <div className="col-lg-5 col-md-12 mb-4 mb-lg-0 text-center text-lg-left">
            <span
              style={{
                background: '#f0c040',
                color: '#1a1a1a',
                fontWeight: 700,
                fontSize: '0.75rem',
                padding: '4px 14px',
                borderRadius: '20px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                display: 'inline-block',
                marginBottom: '8px',
                marginRight: '8px',
              }}
            >
              Featured — Limited Stock
            </span>
            <span
              style={{
                background: 'rgba(255,255,255,0.15)',
                color: '#fff',
                fontWeight: 700,
                fontSize: '0.75rem',
                padding: '4px 14px',
                borderRadius: '20px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                display: 'inline-block',
                marginBottom: '8px',
                border: '1px solid rgba(255,255,255,0.4)',
              }}
            >
              Low Sugar · Diabetic-Friendly
            </span>
            <h3
              style={{
                color: '#fff',
                fontWeight: 800,
                fontSize: '1.9rem',
                lineHeight: 1.2,
                marginBottom: '10px',
              }}
            >
              Premium Rice<br />
              <span style={{ color: '#f0c040' }}>Now Available</span>
            </h3>
            <p style={{ color: '#d4f0d4', marginBottom: '20px', fontSize: '0.95rem' }}>
              Specially processed to carry lower sugar and starch levels — making it suitable for
              diabetics and anyone looking to avoid sugar spikes after eating rice.
              Clean, quality grains for households, retailers and caterers. Available in two sizes.
            </p>

            {/* Price variants */}
            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start" style={{ gap: '12px' }}>
              {riceProducts.map((p) => (
                <Link
                  key={p.id}
                  href={`/shop/${p.slug}`}
                  style={{
                    background: 'rgba(255,255,255,0.12)',
                    border: '2px solid rgba(255,255,255,0.35)',
                    borderRadius: '10px',
                    padding: '10px 18px',
                    color: '#fff',
                    textDecoration: 'none',
                    display: 'inline-block',
                    transition: 'background 0.2s',
                  }}
                >
                  <span style={{ display: 'block', fontSize: '0.8rem', opacity: 0.8 }}>{p.name}</span>
                  <span style={{ display: 'block', fontWeight: 800, fontSize: '1.2rem', color: '#f0c040' }}>
                    GHS {p.price.toFixed(2)}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Product image */}
          <div className="col-lg-3 col-md-5 mb-4 mb-md-0 text-center">
            <Link href={`/shop/${representative.slug}`}>
              <img
                src={representative.image}
                alt="Premium Rice"
                style={{
                  width: '100%',
                  maxWidth: '220px',
                  borderRadius: '14px',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
                  border: '3px solid rgba(255,255,255,0.2)',
                  transition: 'transform 0.3s',
                }}
              />
            </Link>
          </div>

          {/* CTA */}
          <div className="col-lg-4 col-md-7 text-center">
            <p style={{ color: '#d4f0d4', fontSize: '0.9rem', marginBottom: '16px' }}>
              Moving fast — stock is limited. A healthier rice for everyday eating. Place your order today.
            </p>
            <Link
              href="/shop?category=Food+%26+Beverages"
              className="btn"
              style={{
                background: '#f0c040',
                color: '#1a1a1a',
                fontWeight: 700,
                fontSize: '1rem',
                padding: '13px 32px',
                borderRadius: '8px',
                display: 'inline-block',
                marginBottom: '12px',
                textDecoration: 'none',
              }}
            >
              Shop Rice Now
            </Link>
            <br />
            <Link
              href="/shop"
              style={{
                color: '#d4f0d4',
                fontSize: '0.85rem',
                textDecoration: 'underline',
              }}
            >
              Browse all products
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

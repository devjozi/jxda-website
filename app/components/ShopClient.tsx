'use client';

/**
 * ShopClient — client island for the /shop listing page.
 * Handles search, category filtering, sorting, and product grid rendering.
 * Kept separate from page.tsx so the server shell can export SEO metadata.
 */

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Product, PRODUCT_CATEGORIES } from '../../lib/products';
import { buildWhatsAppUrl } from '../../lib/site';
import { applyShopFilters, type SortOption } from '../../lib/shop-filters';

// ─── Category config ────────────────────────────────────────────────────────

const CATEGORY_CONFIG: Record<string, { icon: string; badge: string; bg: string; desc: string }> = {
  [PRODUCT_CATEGORIES.AUTOPARTS]: {
    icon: 'fa fa-cog',
    badge: 'bg-primary',
    bg: '#0d6efd',
    desc: 'Filters, brake pads & more for Toyota, Honda, Ford, Mitsubishi and other major brands.',
  },
  [PRODUCT_CATEGORIES.FMCG]: {
    icon: 'fa fa-shopping-basket',
    badge: 'bg-success',
    bg: '#198754',
    desc: 'Vegetable oil, rice and everyday consumer goods for retail and wholesale distribution.',
  },
  [PRODUCT_CATEGORIES.ELECTRONICS]: {
    icon: 'fa fa-bolt',
    badge: 'bg-warning text-dark',
    bg: '#ffc107',
    desc: 'LED bulbs, rechargeable flashlights, phone chargers and essential electronics.',
  },
  [PRODUCT_CATEGORIES.FABRICS]: {
    icon: 'fa fa-scissors',
    badge: 'bg-info text-dark',
    bg: '#0dcaf0',
    desc: 'Cotton print, Ankara wax prints and quality fabrics for fashion and tailoring.',
  },
  [PRODUCT_CATEGORIES.AGRIC_INPUTS]: {
    icon: 'fa fa-leaf',
    badge: 'bg-success',
    bg: '#146c43',
    desc: 'NPK fertilizer, herbicides and agricultural inputs for smallholder and commercial farmers.',
  },
};

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: 'default', label: 'Featured' },
  { value: 'az', label: 'Name: A → Z' },
  { value: 'za', label: 'Name: Z → A' },
  { value: 'price_asc', label: 'Price: Low → High' },
  { value: 'price_desc', label: 'Price: High → Low' },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function ShopClient({ products }: { products: Product[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('default');
  const [hasStartedBrowsing, setHasStartedBrowsing] = useState(false);

  const categoryCount = (cat: string) => products.filter((p) => p.category === cat).length;

  const hasSearch = searchQuery.trim().length > 0;
  const shouldShowResults = hasStartedBrowsing || Boolean(selectedCategory) || hasSearch;

  const filteredProducts = useMemo(
    () => (shouldShowResults ? applyShopFilters({ products, selectedCategory, searchQuery, sortBy }) : []),
    [products, selectedCategory, searchQuery, sortBy, shouldShowResults],
  );

  const handleCategorySelect = (cat: string | null) => {
    setHasStartedBrowsing(true);
    setSelectedCategory(cat);
    setSearchQuery('');
  };

  return (
    <>
      {/* ── Trust Bar ─────────────────────────────────────────────────────── */}
      <div className="py-2" style={{ background: '#1a2e4a', color: '#fff', fontSize: '0.8rem' }}>
        <div className="container">
          <div className="d-flex flex-wrap justify-content-center gap-3 text-center">
            <span><i className="fa fa-check-circle me-1" style={{ color: '#4ade80' }} />Official Distributor</span>
            <span><i className="fa fa-map-marker me-1" style={{ color: '#4ade80' }} />All 16 Regions of Ghana</span>
            <span><i className="fa fa-whatsapp me-1" style={{ color: '#4ade80' }} />Order via WhatsApp</span>
            <span><i className="fa fa-shield me-1" style={{ color: '#4ade80' }} />Genuine Products</span>
            <span><i className="fa fa-phone me-1" style={{ color: '#4ade80' }} />24/7 Support</span>
          </div>
        </div>
      </div>

      {/* ── Category Cards ────────────────────────────────────────────────── */}
      <section className="py-4" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <h2 className="text-center mb-1" style={{ fontSize: '1.2rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#1a2e4a' }}>
            Browse by Category
          </h2>
          <p className="text-center text-muted mb-4" style={{ fontSize: '0.9rem' }}>
            {products.length} products across {Object.keys(CATEGORY_CONFIG).length} categories
          </p>
          <div className="row g-3 justify-content-center">
            {Object.entries(CATEGORY_CONFIG).map(([cat, cfg]) => {
              const isActive = selectedCategory === cat;
              return (
                <div className="col-6 col-md-4 col-lg-2" key={cat}>
                  <button
                    onClick={() => handleCategorySelect(isActive ? null : cat)}
                    className="w-100 border-0 rounded-3 p-3 text-center"
                    style={{
                      background: isActive ? cfg.bg : '#fff',
                      color: isActive ? '#fff' : '#1a2e4a',
                      boxShadow: isActive ? `0 4px 14px ${cfg.bg}55` : '0 1px 4px rgba(0,0,0,0.08)',
                      transition: 'all 0.2s',
                      cursor: 'pointer',
                    }}
                  >
                    <i className={`${cfg.icon} mb-2 d-block`} style={{ fontSize: '1.5rem' }} />
                    <div style={{ fontWeight: 600, fontSize: '0.78rem' }}>{cat}</div>
                    <div style={{ fontSize: '0.72rem', opacity: 0.75 }}>{categoryCount(cat)} items</div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Search + Sort + Filter Bar ────────────────────────────────────── */}
      <section className="py-3 border-bottom" style={{ background: '#fff', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
        <div className="container">
          <div className="row g-2 align-items-center">
            {/* Search */}
            <div className="col-12 col-md-6 col-lg-5">
              <div className="input-group">
                <span className="input-group-text bg-white border-end-0">
                  <i className="fa fa-search text-muted" />
                </span>
                <input
                  type="text"
                  className="form-control border-start-0 ps-0"
                  placeholder="Search by name, model, SKU…"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    if (e.target.value.trim()) {
                      setHasStartedBrowsing(true);
                    }
                  }}
                />
                {searchQuery && (
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => {
                      setSearchQuery('');
                    }}
                  >
                    <i className="fa fa-times" />
                  </button>
                )}
              </div>
            </div>

            {/* Category pills */}
            <div className="col-12 col-md col-lg d-flex flex-wrap gap-1">
              <button
                onClick={() => {
                  setHasStartedBrowsing(true);
                  handleCategorySelect(null);
                }}
                className={`btn btn-sm ${!selectedCategory && shouldShowResults ? 'btn-primary' : 'btn-outline-secondary'}`}
              >
                All ({products.length})
              </button>
              {Object.values(PRODUCT_CATEGORIES).map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategorySelect(cat)}
                  className={`btn btn-sm ${selectedCategory === cat ? 'btn-primary' : 'btn-outline-secondary'}`}
                >
                  {cat} ({categoryCount(cat)})
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="col-auto">
              <select
                className="form-select form-select-sm"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                aria-label="Sort products"
              >
                {SORT_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Active filter indicator */}
          {(selectedCategory || searchQuery || shouldShowResults) && (
            <div className="mt-2 d-flex align-items-center gap-2" style={{ fontSize: '0.82rem' }}>
              <span className="text-muted">Showing {filteredProducts.length} of {products.length} products</span>
              {selectedCategory && (
                <span className="badge bg-primary d-flex align-items-center gap-1">
                  {selectedCategory}
                  <button onClick={() => setSelectedCategory(null)} style={{ background: 'none', border: 'none', color: '#fff', padding: 0, lineHeight: 1, cursor: 'pointer' }} aria-label="Remove category filter">
                    ×
                  </button>
                </span>
              )}
              {searchQuery && (
                <span className="badge bg-secondary d-flex align-items-center gap-1">
                  &ldquo;{searchQuery}&rdquo;
                  <button onClick={() => setSearchQuery('')} style={{ background: 'none', border: 'none', color: '#fff', padding: 0, lineHeight: 1, cursor: 'pointer' }} aria-label="Clear search">
                    ×
                  </button>
                </span>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ── Category description strip (when a category is active) ─────────── */}
      {selectedCategory && CATEGORY_CONFIG[selectedCategory] && (
        <div className="py-3" style={{ background: '#eef2ff', borderBottom: '1px solid #c7d2fe' }}>
          <div className="container d-flex align-items-center gap-3">
            <i
              className={`${CATEGORY_CONFIG[selectedCategory].icon} fa-2x`}
              style={{ color: CATEGORY_CONFIG[selectedCategory].bg }}
            />
            <div>
              <strong style={{ color: '#1a2e4a' }}>{selectedCategory}</strong>
              <p className="mb-0 text-muted" style={{ fontSize: '0.875rem' }}>
                {CATEGORY_CONFIG[selectedCategory].desc}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ── Product Grid ──────────────────────────────────────────────────── */}
      <section className="py-5">
        <div className="container">
          {!shouldShowResults && (
            <div className="text-center py-5" style={{ maxWidth: '760px', margin: '0 auto' }}>
              <i className="fa fa-compass fa-3x text-muted mb-3 d-block" />
              <h4 style={{ color: '#1a2e4a', fontWeight: 700 }}>Find products faster</h4>
              <p className="text-muted mb-4">
                Start with a search, choose a category, or click below to browse the full catalogue.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-2 mb-3">
                {Object.values(PRODUCT_CATEGORIES).map((cat) => (
                  <button
                    key={`quick-${cat}`}
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => handleCategorySelect(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <button
                className="btn btn-primary"
                onClick={() => {
                  setHasStartedBrowsing(true);
                  setSelectedCategory(null);
                  setSearchQuery('');
                }}
              >
                Browse all products
              </button>
            </div>
          )}

          {shouldShowResults && filteredProducts.length === 0 ? (
            <div className="text-center py-5">
              <i className="fa fa-search fa-3x text-muted mb-3 d-block" />
              <h5 className="text-muted">No products found</h5>
              <p className="text-muted">Try adjusting your search or filter, or{' '}
                <a href={buildWhatsAppUrl('Hi, I am looking for a product not listed in your catalogue. Can you help?')} target="_blank" rel="noopener noreferrer">
                  ask us on WhatsApp
                </a>.
              </p>
              <button className="btn btn-outline-primary mt-2" onClick={() => { setSelectedCategory(null); setSearchQuery(''); }}>
                View all products
              </button>
            </div>
          ) : shouldShowResults ? (
            <div className="row g-4">
              {filteredProducts.map((p) => {
                const cfg = CATEGORY_CONFIG[p.category] ?? { icon: 'fa fa-box', badge: 'bg-secondary', bg: '#6c757d', desc: '' };
                const whatsAppMsg = `Hi, I'm interested in: ${p.name}${p.sku ? ` (SKU: ${p.sku})` : ''}. Please send me more information and pricing.`;
                return (
                  <div className="col-sm-6 col-lg-4 col-xl-3" key={p.id}>
                    <div
                      className="card h-100"
                      style={{
                        border: 'none',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                        transition: 'transform 0.2s, box-shadow 0.2s',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.14)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)';
                      }}
                    >
                      {/* Product image */}
                      <div style={{ position: 'relative', overflow: 'hidden', height: '180px' }}>
                        <img
                          src={p.image}
                          alt={`${p.name} — JX Distribution Africa`}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        {/* Category badge */}
                        <span
                          className={`badge ${cfg.badge} position-absolute`}
                          style={{ top: '10px', left: '10px', fontSize: '0.7rem' }}
                        >
                          <i className={`${cfg.icon} me-1`} />{p.category}
                        </span>
                        {/* In Stock badge */}
                        {p.inStock !== false && (
                          <span
                            className="badge bg-success position-absolute"
                            style={{ top: '10px', right: '10px', fontSize: '0.65rem' }}
                          >
                            In Stock
                          </span>
                        )}
                      </div>

                      <div className="card-body d-flex flex-column p-3">
                        <h6 className="card-title mb-1" style={{ fontWeight: 700, fontSize: '0.9rem', lineHeight: 1.35, color: '#1a2e4a' }}>
                          {p.name}
                        </h6>
                        {p.sku && (
                          <p className="mb-1" style={{ fontSize: '0.7rem', color: '#9ca3af' }}>
                            SKU: {p.sku}
                          </p>
                        )}
                        <p className="card-text flex-grow-1 mb-2" style={{ fontSize: '0.8rem', color: '#6b7280', lineHeight: 1.5 }}>
                          {p.description.length > 90 ? `${p.description.slice(0, 90)}…` : p.description}
                        </p>

                        {/* Price */}
                        <div className="mb-3">
                          {p.price > 0 ? (
                            <span style={{ fontWeight: 800, fontSize: '1.05rem', color: '#1a2e4a' }}>
                              GHS {p.price.toFixed(2)}
                            </span>
                          ) : (
                            <span style={{ fontWeight: 700, fontSize: '0.85rem', color: '#d97706' }}>
                              Price on Request
                            </span>
                          )}
                        </div>

                        {/* CTAs */}
                        <div className="d-flex gap-2">
                          <Link
                            href={`/shop/${p.slug}`}
                            className="btn btn-primary btn-sm flex-grow-1"
                            style={{ fontSize: '0.8rem' }}
                          >
                            View Details
                          </Link>
                          <a
                            href={buildWhatsAppUrl(whatsAppMsg)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-sm"
                            style={{ background: '#25D366', color: '#fff', border: 'none', fontSize: '0.8rem', padding: '0.25rem 0.6rem' }}
                            title="Order via WhatsApp"
                            aria-label={`Order ${p.name} via WhatsApp`}
                          >
                            <i className="fa fa-whatsapp" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : null}

          {/* Bottom CTA */}
          {shouldShowResults && filteredProducts.length > 0 && (
            <div className="text-center mt-5 pt-4 border-top">
              <p className="text-muted mb-3">
                Can&apos;t find what you&apos;re looking for? We distribute many more products across Ghana.
              </p>
              <a
                href={buildWhatsAppUrl("Hi, I'm looking for a product that's not in your catalogue. Can you help?")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success me-2"
              >
                <i className="fa fa-whatsapp me-2" />Request a Custom Quote
              </a>
              <Link href="/contact" className="btn btn-outline-secondary">
                Contact Our Team
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

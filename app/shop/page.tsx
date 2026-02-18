/**
 * Shop — product listing page (commerce).
 * Uses same layout chrome as main site (Header/Footer).
 */

'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getAllProducts, PRODUCT_CATEGORIES } from '../../lib/products';

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const allProducts = getAllProducts();

  // Filter products by category and search query
  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Count products per category
  const categoryCount = (category: string) =>
    allProducts.filter((p) => p.category === category).length;

  return (
    <>
      <Header />
      <div className="container py-5">
        <h1 className="mb-4">Shop</h1>
        <p className="lead text-muted mb-4">
          Browse our catalog of FMCG products, spareparts, electronics, fabrics, and agricultural inputs.
        </p>

        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search products by name, category, or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ maxWidth: '500px' }}
          />
        </div>

        {/* Category Filter Buttons */}
        <div className="mb-4 d-flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`btn ${!selectedCategory ? 'btn-primary' : 'btn-outline-primary'}`}
          >
            All Products ({allProducts.length})
          </button>
          {Object.values(PRODUCT_CATEGORIES).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`btn ${
                selectedCategory === category ? 'btn-primary' : 'btn-outline-primary'
              }`}
            >
              {category} ({categoryCount(category)})
            </button>
          ))}
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="alert alert-info">
            No products found matching your criteria. Try adjusting your search or filter.
          </div>
        ) : (
          <div className="row">
            {filteredProducts.map((p) => (
              <div className="col-md-6 col-lg-3 mb-4" key={p.id}>
                <div className="card h-100 shadow-sm">
                  <img
                    src={p.image}
                    className="card-img-top"
                    alt={p.name}
                    style={{ height: '180px', objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column">
                    <span className="badge bg-secondary mb-2" style={{ width: 'fit-content' }}>
                      {p.category}
                    </span>
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text small text-muted flex-grow-1">
                      {p.description.slice(0, 80)}…
                    </p>
                    <p className="mb-2">
                      <strong>
                        {p.price > 0 ? `${p.currency} ${p.price.toFixed(2)}` : 'Price on Request'}
                      </strong>
                    </p>
                    <Link href={`/shop/${p.slug}`} className="btn btn-primary btn-sm">
                      View details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

/**
 * Shop — product listing page (commerce).
 * Uses same layout chrome as main site (Header/Footer).
 */

import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getAllProducts } from '../../lib/products';

export const metadata = {
  title: 'Shop — JX Distribution Africa',
  description: 'Service packages from JX Distribution Africa across sales, marketing and distribution.',
};

export default function ShopPage() {
  const products = getAllProducts();

  return (
    <>
      <Header />
      <div className="container py-5">
        <h1 className="mb-4">Shop</h1>
        <p className="lead text-muted mb-5">
          Service packages from JX Distribution Africa across sales, marketing, distribution and research.
        </p>
        <div className="row">
          {products.map((p) => (
            <div className="col-md-6 col-lg-3 mb-4" key={p.id}>
              <div className="card h-100 shadow-sm">
                <img src={p.image} className="card-img-top" alt={p.name} style={{ height: '180px', objectFit: 'cover' }} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text small text-muted flex-grow-1">{p.description.slice(0, 80)}…</p>
                  <p className="mb-2"><strong>{p.currency} {p.price}</strong></p>
                  <Link href={`/shop/${p.slug}`} className="btn btn-primary">View details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

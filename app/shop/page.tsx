/**
 * Shop — product listing page (commerce).
 * Server component: exports SEO metadata and renders page chrome.
 * Client-side filtering/search/sort is delegated to <ShopClient />.
 */

import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ShopClient from '../components/ShopClient';
import { getAllProducts } from '../../lib/products';

export const metadata: Metadata = {
  title: 'Shop — Auto Parts, FMCG, Electronics & More | JX Distribution Africa',
  description:
    'Buy genuine auto parts, FMCG goods, electronics, Ankara fabrics, and agricultural inputs in Ghana. Toyota, Honda, Ford, Mitsubishi filters, brake pads, and more. Nationwide delivery across all 16 regions. Order via WhatsApp.',
  keywords:
    'auto parts Ghana, oil filter Ghana, brake pads Ghana, Toyota parts Ghana, Honda parts Ghana, FMCG distributor Ghana, fertilizer Ghana, Ankara fabric Ghana, electronics Ghana, JX Distribution Africa shop',
  openGraph: {
    title: 'Shop — Auto Parts, FMCG, Electronics & More | JX Distribution Africa',
    description:
      'Genuine auto parts, FMCG, electronics and agricultural inputs available across all 16 regions of Ghana. Order via WhatsApp.',
    type: 'website',
    siteName: 'JX Distribution Africa',
  },
};

export default function ShopPage() {
  const products = getAllProducts();

  return (
    <>
      <Header />

      {/* ── Page Banner ──────────────────────────────────────────────────── */}
      <div
        className="banner-area"
        id="banner-area"
        style={{ backgroundImage: 'url(/images/banner/banner1.jpg)' }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col">
              <div className="banner-heading">
                <h1 className="banner-title">Our Product Catalogue</h1>
                <ol className="breadcrumb">
                  <li>Home</li>
                  <li>Shop</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Client Island (filtering, search, grid) ───────────────────────── */}
      <ShopClient products={products} />

      <Footer />
    </>
  );
}

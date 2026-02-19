/**
 * Product detail page — commerce.
 * Dynamic route: /shop/[slug]
 * Features WhatsApp order workflow
 */

import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import WhatsAppOrder from '../../components/WhatsAppOrder';
import { getProductBySlug, getAllProducts } from '../../../lib/products';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: 'Product — JX Distribution' };
  return { title: `${product.name} — JX Distribution` };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <>
      <Header />
      <div className="container py-5">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
            <li className="breadcrumb-item"><Link href="/shop">Shop</Link></li>
            <li className="breadcrumb-item active" aria-current="page">{product.name}</li>
          </ol>
        </nav>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="product-image">
              <img src={product.image} className="img-fluid rounded" alt={product.name} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="product-info">
              <span className="badge bg-secondary mb-2">{product.category}</span>
              <h1 className="mb-2">{product.name}</h1>
              {product.sku && <p className="text-muted small">SKU: <code>{product.sku}</code></p>}
              <p className="product-description lead">{product.description}</p>

              <div className="product-pricing mb-4">
                {product.price > 0 ? (
                  <p className="h3 text-primary">
                    {product.currency} {product.price.toFixed(2)}
                  </p>
                ) : (
                  <p className="h5 text-warning">
                    Price on Request — Contact Us for Pricing
                  </p>
                )}
              </div>

              {product.inStock !== false && (
                <p className="badge bg-success mb-4">✓ In Stock</p>
              )}

              <hr className="my-4" />

              <div className="product-actions mb-5">
                <p className="text-muted mb-3">
                  <strong>Order via WhatsApp</strong> — Quick, easy, and secure ordering
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5 pt-4 border-top">
          <div className="col-lg-8 offset-lg-2">
            <h3 className="mb-4">Order This Product</h3>
            <WhatsAppOrder product={product} />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-8 offset-lg-2">
            <Link href="/shop" className="btn btn-outline-secondary">
              ← Continue Shopping
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

/**
 * Product detail page — commerce.
 * Dynamic route: /shop/[slug]
 */

import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
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
          <div className="col-md-5 mb-4">
            <img src={product.image} className="img-fluid rounded" alt={product.name} />
          </div>
          <div className="col-md-7">
            <span className="badge bg-secondary mb-2">{product.category}</span>
            <h1 className="mb-2">{product.name}</h1>
            {product.sku && <p className="text-muted small">SKU: {product.sku}</p>}
            <p className="lead">{product.description}</p>
            {product.price > 0 ? (
              <p className="h4 text-primary mb-4">
                {product.currency} {product.price.toFixed(2)}
              </p>
            ) : (
              <p className="h5 text-muted mb-4">
                Price on Request — Contact Us for Pricing
              </p>
            )}
            {product.inStock !== false && (
              <p className="badge bg-success mb-3">In Stock</p>
            )}
            <div>
              <Link
                href={`/shop/checkout?product=${product.slug}`}
                className="btn btn-primary me-2"
              >
                {product.price > 0 ? 'Add to cart / Checkout' : 'Request Quote'}
              </Link>
              <Link href="/shop" className="btn btn-outline-secondary">
                Back to shop
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

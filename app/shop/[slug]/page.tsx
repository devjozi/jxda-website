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
            <h1 className="mb-2">{product.name}</h1>
            {product.category && <p className="text-muted small">{product.category}</p>}
            <p className="lead">{product.description}</p>
            <p className="h4 mb-4">{product.currency} {product.price}</p>
            <Link href={`/shop/checkout?product=${product.slug}`} className="btn btn-primary me-2">Add to cart / Checkout</Link>
            <Link href="/shop" className="btn btn-outline-secondary">Back to shop</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

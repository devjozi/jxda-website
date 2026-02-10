import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';

/**
 * Global 404 — shown when a route does not exist.
 */
export default function NotFound() {
  return (
    <>
      <Header />
      <div className="container py-5 text-center">
        <h1 className="display-4">Page not found</h1>
        <p className="lead text-muted">The page you’re looking for doesn’t exist or has been moved.</p>
        <p>
          <Link href="/" className="btn btn-primary me-2">Home</Link>
          <Link href="/shop" className="btn btn-outline-secondary">Shop</Link>
        </p>
      </div>
      <Footer />
    </>
  );
}

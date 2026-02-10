/**
 * Checkout placeholder — commerce.
 * Payment integration (e.g. Paystack) to be added later.
 */

import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Checkout — JX Distribution',
  description: 'Complete your order.',
};

export default function CheckoutPage() {
  return (
    <>
      <Header />
      <div className="container py-5">
        <h1 className="mb-4">Checkout</h1>
        <div className="alert alert-info">
          <strong>Coming soon.</strong> Payment integration (e.g. Paystack) will be added here. For now you can browse products and view details.
        </div>
        <Link href="/shop" className="btn btn-primary">Back to shop</Link>
      </div>
      <Footer />
    </>
  );
}

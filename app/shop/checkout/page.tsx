/**
 * Checkout page — WhatsApp-based order workflow.
 * Customers can send orders directly via WhatsApp.
 * Payment integration (e.g. Paystack) can be added later.
 */

import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import WhatsAppOrder from '../../components/WhatsAppOrder';

export const metadata = {
  title: 'Checkout — JX Distribution',
  description: 'Complete your order via WhatsApp.',
};

export default function CheckoutPage() {
  return (
    <>
      <Header />
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <h1 className="mb-4">Complete Your Order</h1>
            <p className="lead mb-4">
              Place your order directly via WhatsApp for quick confirmation and support.
            </p>

            <div className="checkout-steps mb-5">
              <div className="step">
                <h5><span className="step-number">1</span> Fill Your Details</h5>
                <p>Provide your contact information</p>
              </div>
              <div className="step">
                <h5><span className="step-number">2</span> Send via WhatsApp</h5>
                <p>Click the button to open WhatsApp with your order</p>
              </div>
              <div className="step">
                <h5><span className="step-number">3</span> Confirmation</h5>
                <p>Our team will confirm and process your order</p>
              </div>
            </div>

            <div className="checkout-form-container">
              <WhatsAppOrder />
            </div>

            <div className="mt-5 text-center">
              <Link href="/shop" className="btn btn-outline-primary">Back to Shop</Link>
              <p className="text-muted mt-3">
                Questions? Contact us directly:<br />
                <a href="tel:+233538838135">+233 53 883 8135</a> or
                <a href="mailto:info@jxdistributionafrica.com"> info@jxdistributionafrica.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

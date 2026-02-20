'use client';

import { useState, FormEvent } from 'react';
import { buildWhatsAppUrl } from '../../lib/site';

/**
 * Request a call back form — prevents default submit and shows thank-you.
 * Backend integration can replace the onSubmit handler later.
 */
export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = String(form.get('name') ?? '').trim();
    const email = String(form.get('email') ?? '').trim();
    const message = String(form.get('message') ?? '').trim();

    // Build a single WhatsApp message from the form input for quick follow-up.
    const whatsappMessage = [
      `Name: ${name}`,
      `Email: ${email}`,
      message ? `Message: ${message}` : null,
    ].filter(Boolean).join('\n');

    const whatsappUrl = buildWhatsAppUrl(whatsappMessage);
    if (whatsappUrl !== '#') {
      window.open(whatsappUrl, '_blank', 'noreferrer');
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="qutoe-form-inner-le">
        <h2 className="column-title"><span>Thank you</span> We&apos;ll be in touch</h2>
        <p className="text-muted">Your request has been received. Our team will contact you shortly with the next execution steps.</p>
      </div>
    );
  }

  return (
    <div className="col-lg-7 qutoe-form-inner-le">
      <form className="contact-form" id="contact-form" onSubmit={handleSubmit} method="post">
        <h2 className="column-title"><span>Ready to Grow Sales and Expand Coverage?</span>Request a Call Back</h2>
        <div className="row">
          <div className="col-lg-12">
            <div className="form-group">
              <input className="form-control form-name" id="name" name="name" placeholder="Full Name" type="text" required />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <input className="form-control form-email" id="email" name="email" placeholder="Email" type="email" required />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <textarea className="form-control form-message" id="message" name="message" placeholder="Tell us about your product and coverage goals" rows={5}></textarea>
            </div>
          </div>
        </div>
        <div className="text-right">
          <button className="btn btn-primary tw-mt-30" type="submit">Contact Us</button>
        </div>
      </form>
    </div>
  );
}

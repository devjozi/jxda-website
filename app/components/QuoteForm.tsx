'use client';

import { useState, FormEvent } from 'react';
import { buildWhatsAppUrl } from '../../lib/site';

/**
 * Request a call back form — collects name, email, message and opens WhatsApp
 * with a pre-filled message. Shows confirmation after submission.
 */
export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = (data.get('name') as string || '').trim();
    const email = (data.get('email') as string || '').trim();
    const message = (data.get('message') as string || '').trim();

    const text = [
      '*Callback Request*',
      `Name: ${name}`,
      `Email: ${email}`,
      message ? `Message: ${message}` : '',
    ].filter(Boolean).join('\n');

    const url = buildWhatsAppUrl(text);
    if (url !== '#') {
      window.open(url, '_blank', 'noreferrer');
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="qutoe-form-inner-le">
        <h2 className="column-title"><span>Thank you</span> We&apos;ll be in touch</h2>
        <p className="text-muted">Your request has been sent via WhatsApp. We will contact you shortly.</p>
      </div>
    );
  }

  return (
    <div className="col-lg-7 qutoe-form-inner-le">
      <form className="contact-form" id="contact-form" onSubmit={handleSubmit} method="post">
        <h2 className="column-title"><span>We are always ready</span> Request a call back</h2>
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
              <textarea className="form-control form-message" id="message" name="message" placeholder="Comments" rows={5}></textarea>
            </div>
          </div>
        </div>
        <div className="text-right">
          <button className="btn btn-primary tw-mt-30" type="submit">Request via WhatsApp</button>
        </div>
      </form>
    </div>
  );
}

"use client";
import React, { useState } from 'react';
import trackMetaPixelEvent from '../../../../../../lib/meta-pixel';
import trackGAEvent from '../../../../../../lib/ga';

export default function SignupForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);

    try {
      const payload = { name, email, phone, company, page: 'direct-execution-landing' };
      const ok = await (await import('../../../../../../lib/submit-lead')).submitLead(payload, formspreeId);
      if (ok) {
        setSuccess(true);
        setName('');
        setEmail('');
        setPhone('');
        setCompany('');
      } else {
        console.warn('Formspree returned non-ok');
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSending(false);
    }
  };

  if (success) {
    return <div className="alert alert-success">Thanks — we'll contact you soon.</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Phone</label>
        <input className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div className="mb-3">
        <label className="form-label">Company</label>
        <input className="form-control" value={company} onChange={(e) => setCompany(e.target.value)} />
      </div>

      <button className="btn btn-primary" type="submit" disabled={sending}>
        {sending ? 'Sending…' : 'Get my plan'}
      </button>
    </form>
  );
}

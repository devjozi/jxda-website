"use client";
import React, { useState } from 'react';
import { submitLead } from '../../../../lib/submit-lead';

export default function SignupForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;
    if (!formspreeId) {
      setError('Sorry, this form is temporarily unavailable. Please try again later.');
      return;
    }

    setError(null);
    setSending(true);

    try {
      const payload = { name, email, phone, company, page: 'direct-execution-landing' };
      const ok = await submitLead(payload, formspreeId);
      if (ok) {
        setSuccess(true);
        setName('');
        setEmail('');
        setPhone('');
        setCompany('');
      } else {
        setError('We could not submit your request. Please try again.');
      }
    } catch {
      setError('We could not submit your request. Please try again.');
    } finally {
      setSending(false);
    }
  };

  if (success) {
    return <div className="alert alert-success">Thanks — we&apos;ll contact you soon.</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      {error ? (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      ) : null}
      <div className="mb-3">
        <label className="form-label" htmlFor="signup-name">Name</label>
        <input id="signup-name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="signup-email">Email</label>
        <input id="signup-email" type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="signup-phone">Phone</label>
        <input id="signup-phone" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="signup-company">Company</label>
        <input id="signup-company" className="form-control" value={company} onChange={(e) => setCompany(e.target.value)} />
      </div>

      <button className="btn btn-primary" type="submit" disabled={sending}>
        {sending ? 'Sending…' : 'Get my plan'}
      </button>
    </form>
  );
}

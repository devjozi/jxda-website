import Link from 'next/link';
import SignupForm from './SignupForm';

export const metadata = {
  title: 'Sales Solutions — Get Started',
  description: 'Transform your sales team with expert training, automation, and performance management from JX Distribution Africa.',
};

export default function SalesSolutionsLandingPage() {
  return (
    <main className="container" style={{ padding: '3rem 1rem' }}>
      <section style={{ maxWidth: 920, margin: '0 auto' }}>
        <h1>Unlock Your Sales Potential</h1>
        <p className="lead">
          Expert sales team training, automation systems, and performance management designed for growth. Tell us your
          goals and let's build your winning sales strategy.
        </p>

        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 360px' }}>
            <h3>Our Sales Solutions</h3>
            <ul>
              <li>Sales team training & capability building</li>
              <li>Sales automation & CRM systems</li>
              <li>Performance management & tracking</li>
              <li>Field execution and monitoring</li>
            </ul>
          </div>

          <div style={{ flex: '1 1 360px' }}>
            <SignupForm />
          </div>
        </div>

        <p style={{ marginTop: '2rem' }}>
          Want to explore all services? <Link href="/services">Browse all solutions</Link>
        </p>
      </section>
    </main>
  );
}

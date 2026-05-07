import Link from 'next/link';
import SignupForm from './SignupForm';

export const metadata = {
  title: 'Direct Execution — Partner Signup',
  description: 'Request a direct execution plan from JX Distribution Africa. Quick signup for campaign leads.',
};

export default function DirectExecutionLandingPage() {
  return (
    <main className="container" style={{ padding: '3rem 1rem' }}>
      <section style={{ maxWidth: 920, margin: '0 auto' }}>
        <h1>Get a Direct Execution Plan</h1>
        <p className="lead">Fast, data-driven field execution across all 16 regions. Submit your brief and we'll follow up with a tailored plan.</p>

        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 360px' }}>
            <h3>Why partner with us</h3>
            <ul>
              <li>16-region coverage across Ghana</li>
              <li>Retail & wholesale activation</li>
              <li>Data-driven reporting</li>
            </ul>
          </div>

          <div style={{ flex: '1 1 360px' }}>
            <SignupForm />
          </div>
        </div>

        <p style={{ marginTop: '2rem' }}>
          Prefer the full services page? <Link href="/services/direct-execution">View full details</Link>
        </p>
      </section>
    </main>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FeaturedProductBanner from '../../components/FeaturedProductBanner';

export const metadata: Metadata = {
  title: 'Direct Execution Services | JX Distribution Africa',
  description:
    'Outsource your sales execution to JX Distribution Africa and deploy an expert team for lead generation, customer engagement, and deal closure.',
};

const coreThree = [
  {
    title: 'Lead Generation',
    text: 'We identify high-potential retailers and wholesalers.',
    icon: '01',
  },
  {
    title: 'Customer Engagement',
    text: 'Our team builds the relationships that keep your brand top-of-mind.',
    icon: '02',
  },
  {
    title: 'Deal Closure',
    text: 'We do not just pitch. We secure the orders and ensure stock moves.',
    icon: '03',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Map the market',
    text: 'We align territories, outlets, and channel priorities to your growth targets.',
  },
  {
    step: '02',
    title: 'Activate the field force',
    text: 'Our team engages the right buyers, pushes the right message, and keeps the cadence moving.',
  },
  {
    step: '03',
    title: 'Report and optimize',
    text: 'You get data-driven visibility on execution so the next move is always clear.',
  },
];

const proofPoints = [
  '16-region footprint',
  'Retail and wholesale coverage',
  'Data-driven reporting',
];

export default function DirectExecutionPage() {
  return (
    <>
      <Header />

      <div
        className="banner-area"
        id="banner-area"
        style={{ backgroundImage: 'url(/images/banner/banner2.jpg)' }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col">
              <div className="banner-heading">
                <h1 className="banner-title">Direct Execution</h1>
                <ol className="breadcrumb">
                  <li>Home</li>
                  <li>
                    <Link href="/services">Services</Link>
                  </li>
                  <li>
                    <Link href="/services/direct-execution">Direct Execution</Link>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="main-container direct-execution-hero" id="main-container">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <div className="direct-execution-eyebrow">Sales execution as a service</div>
              <h2 className="section-title text-start mb-3">
                <span>Sales Execution As A Service</span>
                Outsource Your Sales. Accelerate Your Growth.
              </h2>
              <p className="lead mb-4 direct-execution-lead">
                Stop worrying about hiring and training. Partner with JXC to deploy an expert sales force across
                Africa today.
              </p>
              <div className="d-flex flex-wrap gap-3 mb-4">
                <Link className="btn btn-primary" href="/services/direct-execution/signup/">
                  Partner with Us Now
                </Link>
                <Link className="btn btn-border" href="/contact">
                  Speak to Our Team
                </Link>
              </div>
              <div className="direct-execution-proof-strip">
                {proofPoints.map((point) => (
                  <span className="direct-execution-proof-pill" key={point}>
                    {point}
                  </span>
                ))}
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0">
              <div className="direct-execution-visual">
                <div className="single-service-img mb-0 direct-execution-image-card">
                  <img
                    className="img-fluid"
                    src="/images/services/service7.jpg"
                    alt="JX Distribution Africa direct execution sales force"
                  />
                </div>
                <div className="direct-execution-stat-card direct-execution-stat-card-top">
                  <strong>Fast team deployment</strong>
                  <span>Field-ready execution without the hiring overhead.</span>
                </div>
                <div className="direct-execution-stat-card direct-execution-stat-card-bottom">
                  <strong>Measured weekly</strong>
                  <span>Reporting that shows what moved, where, and why.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="direct-execution-band">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="direct-execution-band-card">
                <h3>Reach</h3>
                <p>Extend your field presence across channels without building an in-house sales stack.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="direct-execution-band-card">
                <h3>Speed</h3>
                <p>Deploy quickly, keep the market active, and move from conversation to order capture faster.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="direct-execution-band-card">
                <h3>Visibility</h3>
                <p>Use reporting and execution feedback to make sharper decisions every week.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ts-service-area service-area-pattern" id="core-three">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <h2 className="section-title">
                <span>The Core Three</span>
                Speed-to-Revenue Execution Model
              </h2>
            </div>
          </div>
          <div className="row">
            {coreThree.map((item) => (
              <div className="col-lg-4 col-md-6" key={item.title}>
                <div className="ts-service-box">
                  <div className="service-blocknumber mb-3">
                    <div className="pull-left">
                      <span className="block-number">{item.icon}</span>
                    </div>
                  </div>
                  <div className="ts-service-content">
                    <h3 className="service-title">{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="direct-execution-process" id="process">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <h2 className="section-title">
                <span>How it works</span>
                A simple path from interest to orders
              </h2>
            </div>
          </div>
          <div className="row g-4">
            {processSteps.map((item) => (
              <div className="col-lg-4" key={item.step}>
                <div className="direct-execution-process-card">
                  <span className="block-number">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="call-to-action-bg" id="value-prop">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h3 className="call-to-action-title">Built For Brands That Need Scale Without Delay</h3>
              <p className="mb-0">
                Leverage our 16-region footprint and data-driven reporting to scale without the overhead of an
                in-house team.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
              <Link className="btn btn-box" href="/services/direct-execution/signup/">
                Partner with Us Now
              </Link>
              <p className="direct-execution-cta-note mb-0 mt-2">A dedicated team will review your brief and contact you.</p>
            </div>
          </div>
        </div>
      </section>

      <FeaturedProductBanner />
      <Footer />
    </>
  );
}
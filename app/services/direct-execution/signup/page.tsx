import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import FeaturedProductBanner from '../../../components/FeaturedProductBanner';
import { SITE } from '../../../../lib/site';

const BRAND_NAME = 'JX Distribution Africa';

export const metadata: Metadata = {
  title: `Partner With ${BRAND_NAME} | Direct Execution Signup`,
  description:
    `Submit your business details and partner with ${BRAND_NAME} for direct sales execution and market expansion.`,
};

export default function DirectExecutionSignupPage() {
  const formAction = SITE.contactForm.action;

  const benefits = [
    'A specialist will review your brief',
    'We reply with a direct execution plan',
    'You get next steps for rollout and coverage',
  ];

  return (
    <>
      <Header />

      <div
        className="banner-area"
        id="banner-area"
        style={{ backgroundImage: 'url(/images/banner/banner3.jpg)' }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col">
              <div className="banner-heading">
                <h1 className="banner-title">Partner With Us</h1>
                <ol className="breadcrumb">
                  <li>Home</li>
                  <li>
                    <Link href="/services">Services</Link>
                  </li>
                  <li>
                    <Link href="/services/direct-execution">Direct Execution</Link>
                  </li>
                  <li>
                    <Link href="/services/direct-execution/signup/">Signup</Link>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="main-container direct-execution-signup" id="main-container">
        <div className="container">
          <div className="row align-items-start g-5">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <div className="direct-execution-eyebrow">Request a direct execution plan</div>
              <h2 className="column-title">Start Direct Execution In Weeks, Not Months</h2>
              <p>
                Share your growth goals and our team will contact you with a direct execution plan tailored to your
                target regions and channels.
              </p>
              <div className="direct-execution-benefit-list">
                {benefits.map((item) => (
                  <div className="direct-execution-benefit-item" key={item}>
                    <i className="icon icon-check"></i>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="contact-info-box contact-box info-box">
                <div className="contact-info">
                  <div className="ts-contact-info">
                    <span className="ts-contact-icon float-left">
                      <i className="icon icon-map-marker2"></i>
                    </span>
                    <div className="ts-contact-content">
                      <h3 className="ts-contact-title">Coverage</h3>
                      <p>All 16 regions in Ghana with expansion support across Africa.</p>
                    </div>
                  </div>

                  <div className="ts-contact-info">
                    <span className="ts-contact-icon float-left">
                      <i className="icon icon-phone3"></i>
                    </span>
                    <div className="ts-contact-content">
                      <h3 className="ts-contact-title">Call Us</h3>
                      <p>{SITE.phone}</p>
                    </div>
                  </div>

                  <div className="ts-contact-info last">
                    <span className="ts-contact-icon float-left">
                      <i className="icon icon-envelope"></i>
                    </span>
                    <div className="ts-contact-content">
                      <h3 className="ts-contact-title">Email Us</h3>
                      <p>{SITE.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="contact-submit-box contact-box form-box direct-execution-form-card">
                <div className="direct-execution-form-header">
                  <h3 className="column-title mb-2">Tell us about your target market</h3>
                  <p className="mb-0">
                    We’ll use this to shape the right execution model for your products, channels, and rollout plan.
                  </p>
                </div>
                {!formAction && (
                  <div className="alert alert-warning" role="alert">
                    Form endpoint is not configured yet. Set NEXT_PUBLIC_CONTACT_FORM_ACTION to receive submissions.
                  </div>
                )}

                <form action={formAction || undefined} className="contact-form" method="POST">
                  <input type="hidden" name="service" value="Direct Execution" />
                  <input type="hidden" name="source" value="services-direct-execution-signup" />

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input className="form-control" name="name" placeholder="Full Name" required type="text" />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <input className="form-control" name="company" placeholder="Company Name" required type="text" />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <input className="form-control" name="email" placeholder="Business Email" required type="email" />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <input className="form-control" name="phone" placeholder="Phone Number" required type="tel" />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          name="targetRegions"
                          placeholder="Target Regions / Countries"
                          type="text"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          name="targetChannels"
                          placeholder="Target Channels (Retail, Wholesale, Modern Trade...)"
                          type="text"
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          name="message"
                          placeholder="Tell us what you want to achieve in the next 90 days."
                          rows={7}
                          required
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-lg-12 d-flex flex-wrap gap-3">
                      <button className="btn btn-primary" disabled={!formAction} type="submit">
                        Partner with Us Now
                      </button>
                      <Link className="btn btn-border" href="/services/direct-execution/">
                        Back to Direct Execution
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturedProductBanner />
      <Footer />
    </>
  );
}
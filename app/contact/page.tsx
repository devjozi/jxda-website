// Purpose: Contact page with serverless form submission for static hosting.
'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import FeaturedProductBanner from '../components/FeaturedProductBanner';
import { SITE } from '../../lib/site';

export default function Contact() {
  const formAction = SITE.contactForm.action;

  return (
    <>
      <Header />

      {/* Banner Area */}
      <div className="banner-area" id="banner-area" style={{backgroundImage: 'url(/images/banner/banner3.jpg)'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col">
              <div className="banner-heading">
                <h1 className="banner-title">Contact Us</h1>
                <ol className="breadcrumb">
                  <li>Home</li>
                  <li><a href="/contact">Contact</a></li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="main-container contact-area" id="main-container">
        {/* Map */}
        <div className="contact-map">
          <div className="map" id="map">
            <iframe
              src="https://maps.google.com/maps?q=GE-225-5007+Kwabenya+Taifa+North+Accra+Ghana&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="JX Distribution Africa — GE-225-5007 Kwabenya / Taifa North, Accra"
            />
          </div>
        </div>

        <div className="gap-60"></div>

        <div className="ts-form form-boxed" id="ts-form">
          <div className="container">
            <div className="row">
              <div className="contact-wrapper full-contact">
                {/* Contact Information */}
                <div className="col-lg-6">
                  <h3 className="column-title">Contact Us</h3>
                  <p className="contact-content">
                    Ready to grow sales and expand coverage? JX Distribution Africa supports local and international brands with structured sales execution, nationwide distribution, activations, digital marketing, call center solutions, and measurable reporting.
                  </p>
                  
                  <div className="contact-info-box contact-box info-box">
                    <div className="contact-info">
                      <div className="ts-contact-info">
                        <span className="ts-contact-icon float-left">
                          <i className="icon icon-map-marker2"></i>
                        </span>
                        <div className="ts-contact-content">
                          <h3 className="ts-contact-title">Find Us</h3>
                          <p>{SITE.address}</p>
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
                          <h3 className="ts-contact-title">Mail Us</h3>
                          <p>{SITE.email}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="col-lg-6">
                  <h3 className="column-title">Get in Touch</h3>
                  <div className="contact-submit-box contact-box form-box">
                    <form
                      className="contact-form"
                      id="contact-form"
                      action={formAction || undefined}
                      method="POST"
                    >
                      <div className="error-container"></div>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <input
                              className="form-control form-name"
                              id="name"
                              name="name"
                              placeholder="Full Name"
                              type="text"
                              required
                            />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="form-group">
                            <input
                              className="form-control form-website"
                              id="website"
                              name="website"
                              placeholder="Website (Optional)"
                              type="url"
                            />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="form-group">
                            <input
                              className="form-control form-email"
                              id="email"
                              name="email"
                              placeholder="Email Address"
                              type="email"
                              required
                            />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="form-group">
                            <textarea
                              className="form-control form-message required-field"
                              id="message"
                              name="message"
                              placeholder="Tell us about your product, target channels, and required support..."
                              rows={8}
                              required
                            ></textarea>
                          </div>
                        </div>
                      </div>

                      <button className="btn btn-primary tw-mt-30" type="submit">
                        <i className="fa fa-paper-plane-o"></i> Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="ts-features-light">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <h2 className="section-title"><span>Why Partner With JX</span>Why Companies Choose JX Distribution Africa</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 text-center">
              <div className="ts-feature-box">
                <div className="ts-feature-info">
                  <img src="/images/icon/why-1.png" alt="Experience" />
                  <h3 className="ts-feature-title">Nationwide Reach &amp; Faster Penetration</h3>
                  <p>Coverage across Ghana and West African markets with stronger product visibility and sales execution.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 text-center">
              <div className="ts-feature-box">
                <div className="ts-feature-info">
                  <img src="/images/icon/why-2.png" alt="Coverage" />
                  <h3 className="ts-feature-title">Execution Strength</h3>
                  <p>Experienced sales and distribution professionals, tailored activations, and cost-effective engagement models.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 text-center">
              <div className="ts-feature-box">
                <div className="ts-feature-info">
                  <img src="/images/icon/why-3.png" alt="Results" />
                  <h3 className="ts-feature-title">Automation &amp; 24/7 Support</h3>
                  <p>Automated reporting, accountability, and 24/7 customer support with telesales operations.</p>
                </div>
              </div>
            </div>
            <div className="col-md-12 text-center">
              <p>Engagement Models: Commission-Based | Target-Based | Project-Based | Retainer-Based</p>
              <p>{SITE.note}</p>
            </div>
          </div>
        </div>
      </section>

      <FeaturedProductBanner />
      <Footer />
    </>
  );
}

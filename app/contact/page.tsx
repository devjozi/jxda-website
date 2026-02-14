'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add email sending logic here
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', website: '', message: '' });
  };

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
            {/* Google Map will be initialized here */}
            <div style={{ height: '400px', backgroundColor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className="text-center">
                <i className="fa fa-map-marker" style={{ fontSize: '48px', color: '#007bff', marginBottom: '20px' }}></i>
                <h4>Interactive Map</h4>
                <p>Find us at our headquarters in Accra, Ghana</p>
              </div>
            </div>
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
                    JX Distribution Africa is your trusted partner for sales, marketing, and distribution across Ghana and Africa. 
                    Reach out to us to discuss how we can help grow your business.
                  </p>
                  
                  <div className="contact-info-box contact-box info-box">
                    <div className="contact-info">
                      <div className="ts-contact-info">
                        <span className="ts-contact-icon float-left">
                          <i className="icon icon-map-marker2"></i>
                        </span>
                        <div className="ts-contact-content">
                          <h3 className="ts-contact-title">Find Us</h3>
                          <p>Accra, Ghana<br />Headquarters: Greater Accra Region</p>
                        </div>
                      </div>

                      <div className="ts-contact-info">
                        <span className="ts-contact-icon float-left">
                          <i className="icon icon-phone3"></i>
                        </span>
                        <div className="ts-contact-content">
                          <h3 className="ts-contact-title">Call Us</h3>
                          <p>+233 (0) 30 123 4567<br />+233 (0) 50 987 6543</p>
                        </div>
                      </div>

                      <div className="ts-contact-info last">
                        <span className="ts-contact-icon float-left">
                          <i className="icon icon-envelope"></i>
                        </span>
                        <div className="ts-contact-content">
                          <h3 className="ts-contact-title">Mail Us</h3>
                          <p>info@jxdistribution.africa<br />support@jxdistribution.africa</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="col-lg-6">
                  <h3 className="column-title">Get in Touch</h3>
                  <div className="contact-submit-box contact-box form-box">
                    <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
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
                              value={formData.name}
                              onChange={handleChange}
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
                              value={formData.website}
                              onChange={handleChange}
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
                              value={formData.email}
                              onChange={handleChange}
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
                              placeholder="Tell us about your project or requirements..." 
                              rows={8}
                              value={formData.message}
                              onChange={handleChange}
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
              <h2 className="section-title"><span>Why Choose</span>JX Distribution Africa?</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 text-center">
              <div className="ts-feature-box">
                <div className="ts-feature-info">
                  <img src="/images/icon/why-1.png" alt="Experience" />
                  <h3 className="ts-feature-title">17 Years Experience</h3>
                  <p>Deep understanding of the Ghanaian and African markets with proven track record.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 text-center">
              <div className="ts-feature-box">
                <div className="ts-feature-info">
                  <img src="/images/icon/why-2.png" alt="Coverage" />
                  <h3 className="ts-feature-title">Nationwide Coverage</h3>
                  <p>Active presence across all 16 regions of Ghana with stationed teams.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 text-center">
              <div className="ts-feature-box">
                <div className="ts-feature-info">
                  <img src="/images/icon/why-3.png" alt="Results" />
                  <h3 className="ts-feature-title">Proven Results</h3>
                  <p>Measurable outcomes with real-time reporting and performance tracking.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

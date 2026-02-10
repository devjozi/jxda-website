/**
 * Footer — Logicraft structure; JX branding and contact from lib/site.
 */

import { SITE } from '../../lib/site';

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-main bg-overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 footer-widget footer-about">
              <div className="footer-logo">
                <img src="/images/footer-logo.png" alt={SITE.name} />
              </div>
              <p>{SITE.name} — {SITE.tagline}. Your trusted logistics and distribution partner.</p>
              <h3 className="widget-title">Subscribe Newsletter!</h3>
              <form className="newsletter-form" id="newsletter-form" action="#" method="post">
                <div className="form-group">
                  <input 
                    className="form-control form-control-lg" 
                    id="newsletter-form-email" 
                    type="email" 
                    name="email" 
                    placeholder="Email "
                    autoComplete="off" 
                  />
                  <button className="btn btn-primary">
                    <i className="fa fa-paper-plane"></i>
                  </button>
                </div>
              </form>
            </div>
            {/* About us end */}
            
            <div className="col-lg-4 col-md-6 footer-widget">
              <h3 className="widget-title">Quick Links</h3>
              <ul className="list-dash">
                <li><a href="/">Home</a></li>
                <li><a href="/shop">Shop</a></li>
                <li><a href="/#ts-services">Our Services</a></li>
                <li><a href="/#testimonial-area">FAQs</a></li>
                <li><a href="/#quote-area">Contact Us</a></li>
              </ul>
            </div>
            
            <div className="col-lg-4 col-md-6 footer-widget">
              <h3 className="widget-title">Company Locations</h3>
              <div className="ts-contact-info">
                <span className="ts-contact-icon float-left">
                  <i className="icon icon-map-marker2"></i>
                </span>
                <div className="ts-contact-content">
                  <h3 className="ts-contact-title">Address</h3>
                  <p>{SITE.address}</p>
                </div>
                {/* Contact content end */}
              </div>
              
              <div className="ts-contact-info last">
                <span className="ts-contact-icon float-left">
                  <i className="icon icon-envelope"></i>
                </span>
                <div className="ts-contact-content">
                  <h3 className="ts-contact-title">Email</h3>
                  <p>{SITE.email}</p>
                </div>
                {/* Contact content end */}
              </div>
              
              <div className="ts-contact-info">
                <span className="ts-contact-icon float-left">
                  <i className="icon icon-phone3"></i>
                </span>
                <div className="ts-contact-content">
                  <h3 className="ts-contact-title">Phone</h3>
                  <p>{SITE.phone}</p>
                </div>
                {/* Contact content end */}
              </div>
            </div>
          </div>
          {/* Content row end */}
        </div>
        {/* Container end */}
      </div>
      {/* Footer Main */}
      
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="copyright-info">
                <span>© {new Date().getFullYear()} {SITE.name}. Theme: Logicraft (Furioustheme).</span>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="footer-social text-right">
                <ul>
                  <li><a href={SITE.social.facebook} aria-label="Facebook"><i className="fa fa-facebook"></i></a></li>
                  <li><a href={SITE.social.twitter} aria-label="Twitter"><i className="fa fa-twitter"></i></a></li>
                  <li><a href={SITE.social.linkedin} aria-label="LinkedIn"><i className="fa fa-linkedin"></i></a></li>
                  <li><a href={SITE.social.instagram} aria-label="Instagram"><i className="fa fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          {/* Row end */}
        </div>
        {/* Container end */}
      </div>
      {/* Copyright end */}
    </footer>
  );
}

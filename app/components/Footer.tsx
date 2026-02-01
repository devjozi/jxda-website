/**
 * Footer Component
 * 
 * Converted from Logicraft template index.html (lines 828-917)
 * Structure preserved exactly as in original template
 * Only syntax changes: class → className, self-closing tags
 */

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-main bg-overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 footer-widget footer-about">
              <div className="footer-logo">
                <img src="images/footer-logo.png" alt="" />
              </div>
              <p>Transline Logistics is the UK's leading freight forwarding, Midst brought winged midst beast years, be very was. Brought that called creeping</p>
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
                <li><a href="about.html">About Us</a></li>
                <li><a href="service.html">Our Services</a></li>
                <li><a href="project-all.html">Projects</a></li>
                <li><a href="team.html">Our Team</a></li>
                <li><a href="faq.html">FAQs</a></li>
                <li><a href="news-left-sidebar.html">Our Blog</a></li>
                <li><a href="news-right-sidebar.html">Why Need Agent?</a></li>
                <li><a href="pricing-table.html">Investments</a></li>
                <li><a href="contact.html">Consultation</a></li>
                <li><a href="contact.html">Contact Us</a></li>
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
                  <p>370 Grove Street East Northport, NY 11731</p>
                </div>
                {/* Contact content end */}
              </div>
              
              <div className="ts-contact-info last">
                <span className="ts-contact-icon float-left">
                  <i className="icon icon-envelope"></i>
                </span>
                <div className="ts-contact-content">
                  <h3 className="ts-contact-title">Email Address</h3>
                  <p>support@transline.com</p>
                </div>
                {/* Contact content end */}
              </div>
              
              <div className="ts-contact-info">
                <span className="ts-contact-icon float-left">
                  <i className="icon icon-phone3"></i>
                </span>
                <div className="ts-contact-content">
                  <h3 className="ts-contact-title">Phone Number</h3>
                  <p>+1(0123) 4567 890, +1(0231) 3421 453</p>
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
                <span>Copyright © 2022 a theme by <a href="https://furioustheme.com">Furioustheme</a></span>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="footer-social text-right">
                <ul>
                  <li><a href="https://facebook.com"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="https://twitter.com"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="https://plus.google.com"><i className="fa fa-google-plus"></i></a></li>
                  <li><a href="https://github.com"><i className="fa fa-github"></i></a></li>
                  <li><a href="https://instagram.com"><i className="fa fa-instagram"></i></a></li>
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

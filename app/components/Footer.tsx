export default function Footer() {
  return (
    <footer className="footer bg-dark text-white">
      {/* Main Footer Content */}
      <div className="footer-main py-5">
        <div className="container">
          <div className="row">
            {/* Company Info */}
            <div className="col-lg-4 col-md-6 mb-4">
              <img 
                src="/images/footer-logo.png" 
                alt="JX Distribution Africa" 
                className="mb-3"
                height="40"
              />
              <p>
                JX Distribution Africa is your trusted logistics partner, 
                providing comprehensive distribution solutions across the continent.
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-6 mb-4">
              <h5 className="mb-3">Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="/about" className="text-white-50 text-decoration-none">About Us</a></li>
                <li><a href="/services" className="text-white-50 text-decoration-none">Our Services</a></li>
                <li><a href="/projects" className="text-white-50 text-decoration-none">Projects</a></li>
                <li><a href="/team" className="text-white-50 text-decoration-none">Our Team</a></li>
                <li><a href="/contact" className="text-white-50 text-decoration-none">Contact Us</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="mb-3">Our Services</h5>
              <ul className="list-unstyled">
                <li><a href="/services#air-freight" className="text-white-50 text-decoration-none">Air Freight</a></li>
                <li><a href="/services#ocean-freight" className="text-white-50 text-decoration-none">Ocean Freight</a></li>
                <li><a href="/services#warehousing" className="text-white-50 text-decoration-none">Warehousing</a></li>
                <li><a href="/services#ground-transport" className="text-white-50 text-decoration-none">Ground Transport</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="mb-3">Contact Us</h5>
              <div className="text-white-50">
                <p>
                  <i className="bi bi-geo-alt me-2"></i>
                  Accra, Ghana
                </p>
                <p>
                  <i className="bi bi-envelope me-2"></i>
                  info@jxdistribution.com
                </p>
                <p>
                  <i className="bi bi-telephone me-2"></i>
                  +233 (0) XXX XXX XXX
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom bg-black py-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-0 text-white-50">
                &copy; {new Date().getFullYear()} JX Distribution Africa. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <a href="#" className="text-white-50 text-decoration-none me-3">Privacy Policy</a>
              <a href="#" className="text-white-50 text-decoration-none">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

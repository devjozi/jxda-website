export default function Header() {
  return (
    <header>
      {/* Top Bar */}
      <div className="top-bar bg-light py-2">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <span className="me-4">
                <i className="bi bi-telephone"></i> (+233) XXX-XXX-XXX
              </span>
              <span>
                <i className="bi bi-envelope"></i> info@jxdistribution.com
              </span>
            </div>
            <div className="col-md-6 text-end">
              <span>24/7 Response Time</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img 
              src="/images/logo.png" 
              alt="JX Distribution Africa" 
              height="50"
            />
          </a>
          
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
            </ul>
            <button className="btn btn-primary ms-3">Request a Quote</button>
          </div>
        </div>
      </nav>
    </header>
  );
}

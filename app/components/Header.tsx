/**
 * Header Component
 * 
 * Converted from Logicraft template index.html
 * Structure preserved exactly as in original template
 * Only syntax changes: class → className, self-closing tags
 */

export default function Header() {
  return (
    <div className="site-top-2">
      <header className="header nav-down" id="header-2">
        <div className="container">
          <div className="row">
            <div className="logo-area clearfix">
              <div className="logo col-lg-3 col-md-12">
                <a href="index.html">
                  <img src="images/logo.png" alt="" />
                </a>
              </div>
              {/* logo end */}
              
              <div className="col-lg-9 col-md-12 pull-right">
                <ul className="top-info unstyled">
                  <li>
                    <span className="info-icon">
                      <i className="icon icon-phone3"></i>
                    </span>
                    <div className="info-wrapper">
                      <p className="info-title">24/7 Response Time</p>
                      <p className="info-subtitle">(+9) 847-291-4353</p>
                    </div>
                  </li>
                  <li>
                    <span className="info-icon">
                      <i className="icon icon-envelope"></i>
                    </span>
                    <div className="info-wrapper">
                      <p className="info-title">Send Your Query</p>
                      <p className="info-subtitle">mail@example.com</p>
                    </div>
                  </li>
                </ul>
              </div>
              {/* Col End */}
            </div>
            {/* Logo Area End */}
          </div>
        </div>
        {/* Container end */}
        
        <div className="site-nav-inner site-navigation navigation navdown">
          <div className="container">
            <nav className="navbar navbar-expand-lg">
              <button 
                className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent"
                aria-expanded="false" 
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon">
                  <i className="icon icon-menu"></i>
                </span>
              </button>
              {/* End of Navbar toggler */}
              
              <div className="collapse navbar-collapse justify-content-start" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown active">
                    <a className="nav-link" href="#" data-toggle="dropdown">
                      Home<i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="dropdown-menu" role="menu">
                      <li className="active"><a href="index.html">Home One</a></li>
                      <li><a href="index-2.html">Home Two</a></li>
                    </ul>
                  </li>
                  {/* li end */}
                  
                  <li className="nav-item dropdown">
                    <a className="nav-link" href="#" data-toggle="dropdown">
                      Company<i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="dropdown-menu" role="menu">
                      <li><a href="about.html">About Us</a></li>
                      <li><a href="team.html">Our Team</a></li>
                      <li><a href="pricing-table.html">Pricing</a></li>
                      <li><a href="faq.html">Faq</a></li>
                      <li><a href="gallery.html">Gallery</a></li>
                    </ul>
                  </li>
                  {/* li end */}
                  
                  <li className="nav-item dropdown">
                    <a className="nav-link" href="#" data-toggle="dropdown">
                      Projects<i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="dropdown-menu" role="menu">
                      <li><a href="project-all.html">Projects All</a></li>
                      <li><a href="#">Projects Single</a></li>
                    </ul>
                  </li>
                  {/* li end */}
                  
                  <li className="nav-item dropdown">
                    <a className="nav-link" href="#" data-toggle="dropdown">
                      Services<i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="dropdown-menu" role="menu">
                      <li><a href="service.html">Services All</a></li>
                      <li><a href="service-single.html">Services Single</a></li>
                    </ul>
                  </li>
                  {/* li end */}
                  
                  <li className="nav-item dropdown">
                    <a className="nav-link" href="#" data-toggle="dropdown">
                      Features<i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="dropdown-menu" role="menu">
                      <li><a href="addons-1.html">Addons 1</a></li>
                      <li><a href="addons-2.html">Addons 2</a></li>
                      <li><a href="addons-3.html">Addons 3</a></li>
                      <li><a href="#">404</a></li>
                      <li className="dropdown-submenu">
                        <a className="nav-link" href="#" data-toggle="dropdown">Parent Menu</a>
                        <ul className="dropdown-menu">
                          <li><a href="#">Child Menu 1</a></li>
                          <li><a href="#">Child Menu 2</a></li>
                          <li><a href="#">Child Menu 3</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  {/* li end */}
                  
                  <li className="nav-item dropdown">
                    <a className="nav-link" href="#" data-toggle="dropdown">
                      News
                      <i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="dropdown-menu" role="menu">
                      <li><a href="news-left-sidebar.html">Blog With Right Sidebar</a></li>
                      <li><a href="news-right-sidebar.html">Blog With Left Sidebar</a></li>
                      <li><a href="news-single.html">Single News</a></li>
                    </ul>
                  </li>
                  {/* li end */}
                  
                  <li className="nav-item dropdown">
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
                {/* Nav ul end */}
              </div>
              <a href="" className="top-right-btn btn btn-primary">Request a Quote</a>
              {/* Top bar btn */}
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}

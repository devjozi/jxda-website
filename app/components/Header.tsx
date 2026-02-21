/**
 * Header — JX Distribution navigation
 * 
 * Clean navigation structure without broken links:
 * - Home
 * - Shop
 * - Company (About, Services, Contact)
 * - Services (with all 8 service links)
 * - Contact
 * 
 * Removed: Projects dropdown, Features dropdown, News dropdown (until implemented)
 */

import Link from 'next/link';
import { SITE, buildWhatsAppUrl } from '../../lib/site';

export default function Header() {
  // WhatsApp CTA for the primary header button.
  const quoteUrl = buildWhatsAppUrl('Hi, I want support with sales execution and distribution in Ghana.');

  return (
    <div className="site-top-2">
      <header className="header nav-down" id="header-2">
        <div className="container">
          <div className="row">
            <div className="logo-area clearfix">
              <div className="logo col-lg-3 col-md-12">
                <Link href="/">
                  <img src="/images/logo.png" alt={SITE.name} />
                </Link>
              </div>
              <div className="col-lg-9 col-md-12 pull-right">
                <ul className="top-info unstyled">
                  <li>
                    <span className="info-icon">
                      <i className="icon icon-phone3"></i>
                    </span>
                    <div className="info-wrapper">
                      <p className="info-title">Contact</p>
                      <p className="info-subtitle">{SITE.phone}</p>
                    </div>
                  </li>
                  <li>
                    <span className="info-icon">
                      <i className="icon icon-envelope"></i>
                    </span>
                    <div className="info-wrapper">
                      <p className="info-title">Email</p>
                      <p className="info-subtitle">{SITE.email}</p>
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
              {/* Logo shown only when nav is in fixed/sticky state (scrolled) */}
              <Link href="/" className="sticky-brand">
                <img src="/images/logo.png" alt={SITE.name} />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
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
                  <li className="nav-item active">
                    <Link className="nav-link" href="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/shop">Shop</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link" href="#" data-bs-toggle="dropdown">
                      Company<i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="dropdown-menu" role="menu">
                      <li><Link href="/about">About Us</Link></li>
                      <li><Link href="/services">Our Services</Link></li>
                      <li><Link href="/contact">Contact Us</Link></li>
                    </ul>
                  </li>
                  {/* li end */}

                  <li className="nav-item dropdown">
                    <a className="nav-link" href="#" data-bs-toggle="dropdown">
                      Services<i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="dropdown-menu" role="menu">
                      <li><Link href="/services">All Services</Link></li>
                      <li><Link href="/services/route-to-market-and-route-to-consumer-development">Route-to-Market & Route-to-Consumer Development</Link></li>
                      <li><Link href="/services/social-media-marketing-and-activation-campaigns">Social Media Marketing & Activation Campaigns</Link></li>
                      <li><Link href="/services/distribution-and-logistics-coordination">Distribution & Logistics Coordination</Link></li>
                      <li><Link href="/services/market-research-and-consumer-intelligence">Market Research & Consumer Intelligence</Link></li>
                      <li><Link href="/services/procurement">Procurement</Link></li>
                      <li><Link href="/services/sales-team-training-and-performance-management">Sales Team Training & Performance Management</Link></li>
                      <li><Link href="/services/call-center-services-for-companies">Call Center Services for Companies</Link></li>
                      <li><Link href="/services/sales-automation-and-reporting">Sales Automation & Reporting</Link></li>
                    </ul>
                  </li>
                  {/* li end */}

                  <li className="nav-item">
                    <Link className="nav-link" href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <a
                href={quoteUrl}
                className="top-right-btn btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Request a Quote
              </a>
              {/* Top bar btn */}
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}

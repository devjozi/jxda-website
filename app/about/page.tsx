import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Header />

      {/* Banner Area */}
      <div className="banner-area" id="banner-area" style={{backgroundImage: 'url(/images/banner/banner1.jpg)'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col">
              <div className="banner-heading">
                <h1 className="banner-title">About Us</h1>
                <ol className="breadcrumb">
                  <li>Home</li>
                  <li><Link href="/about">About Us</Link></li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main About Content */}
      <section className="main-container no-padding" id="main-container">
        <div className="about-pattern">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 about-desc">
                <h2 className="column-title"><span>Who We Are</span>Company Overview</h2>
                <p className="bold-text">JX Distribution Africa is a registered distribution and market execution company headquartered in Ghana.</p>
                <p>We support local and international brands with structured solutions in sales execution, distribution management, marketing activation, and market research &amp; intelligence. Our mandate is clear: we sell products, grow brands, and strengthen market penetration through disciplined execution.</p>
                <p>We have been in the industry for a decade, resulting in priceless experience and strong partnerships with clients and consumers across various markets.</p>
                <Link href="/services" className="top-right-btn btn btn-primary">Our Services</Link>
                <Link href="/contact" className="top-right-btn btn btn-secondary">Contact Us</Link>
              </div>
              <div className="col-lg-6 text-md-center mrt-40">
                <img className="img-fluid" src="/images/pages/work_circle.jpg" alt="JX Distribution Africa Work" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nationwide Coverage */}
      <section id="tw-service-value" className="tw-service-value bg-offwhite">
        <h2 className="column-title text-center">Nationwide Operational Coverage</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p>JX Distribution Africa operates across all 16 regions of Ghana, supported by field teams, logistics, and warehousing capacity.</p>
              <p>We execute across retail shops, wholesale, modern trade &amp; key accounts, activations, and street vendors/hawkers.</p>
            </div>
          </div>
          <div className="gap-20"></div>
          <div className="row">
            <div className="col-md-3 col-lg-3 text-center">
              <div className="percent-area">
                <div className="chart" data-percent="85">
                  <p className="percent">Retail</p>
                </div>
                <p className="column-title">Retail Shops</p>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 text-center">
              <div className="percent-area">
                <div className="chart" data-percent="78">
                  <p className="percent">Wholesale</p>
                </div>
                <p className="column-title">Wholesalers</p>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 text-center">
              <div className="percent-area">
                <div className="chart" data-percent="72">
                  <p className="percent">Key Accts</p>
                </div>
                <p className="column-title">Key Accounts</p>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 text-center">
              <div className="percent-area">
                <div className="chart" data-percent="90">
                  <p className="percent">Coverage</p>
                </div>
                <p className="column-title">All 16 Regions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Advantage */}
      <section id="ts-features-light" className="ts-features-light">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <h2 className="section-title"><span>Our Team Advantage</span>Experienced Execution Leadership</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="ts-feature-box">
                <div className="ts-feature-info">
                  <img src="/images/icon/why-1.png" alt="Field execution discipline" />
                  <h3 className="ts-feature-title">Field Execution Discipline</h3>
                  <p>Operations led by professionals with 10–20 years practical industry experience across multinational and local markets.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="ts-feature-box">
                <div className="ts-feature-info">
                  <img src="/images/icon/why-3.png" alt="Call center and supervision" />
                  <h3 className="ts-feature-title">Call Center &amp; Sales Supervision</h3>
                  <p>Expert call center services and professional sales supervision to maintain execution quality and customer responsiveness.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="ts-feature-box">
                <div className="ts-feature-info">
                  <img src="/images/icon/why-2.png" alt="Trade knowledge" />
                  <h3 className="ts-feature-title">Trade &amp; Customer Expertise</h3>
                  <p>Trade knowledge and customer engagement expertise with up to 31 million wholesale, retail, and key account customer-base data across Ghana and West Africa.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="ts-feature-box">
                <div className="ts-feature-info">
                  <img src="/images/icon/why-4.png" alt="Performance culture" />
                  <h3 className="ts-feature-title">Performance-Driven Culture</h3>
                  <p>Adequate logistics and warehousing support in Ghana and other West African countries for reliable execution.</p>
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

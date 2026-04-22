import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeaturedProductBanner from '../components/FeaturedProductBanner';

export default function Services() {
  const services = [
    {
      img: 'service1.jpg',
      title: 'Route-to-Market & Route-to-Consumer Development',
      desc: 'Structured market entry planning, territory mapping, and channel strategy to improve product availability and conversion.',
      link: '/services/route-to-market-and-route-to-consumer-development'
    },
    {
      img: 'service2.jpg',
      title: 'Social Media Marketing & Activation Campaigns',
      desc: 'Integrated digital and on-ground activation campaigns that drive awareness, trial, and repeat buying.',
      link: '/services/social-media-marketing-and-activation-campaigns'
    },
    {
      img: 'service3.jpg',
      title: 'Distribution & Logistics Coordination',
      desc: 'Distribution planning, warehousing coordination, and channel fulfillment support across retail, wholesale, and key accounts.',
      link: '/services/distribution-and-logistics-coordination'
    },
    {
      img: 'service4.jpg',
      title: 'Market Research & Consumer Intelligence',
      desc: 'Field research and market intelligence that provide decision-ready insights for pricing, placement, and growth.',
      link: '/services/market-research-and-consumer-intelligence'
    },
    {
      img: 'service5.jpg',
      title: 'Procurement',
      desc: 'Procurement execution support for product sourcing and trade requirements aligned with your market expansion goals.',
      link: '/services/procurement'
    },
    {
      img: 'service6.jpg',
      title: 'Sales Team Training & Performance Management',
      desc: 'Sales capability development, supervision, and performance management to improve execution quality and accountability.',
      link: '/services/sales-team-training-and-performance-management'
    },
    {
      img: 'service2.jpg',
      title: 'Call Center Services for Companies',
      desc: 'Standby 24/7 call center and telesales support with structured customer engagement and follow-up.',
      link: '/services/call-center-services-for-companies'
    },
    {
      img: 'service6.jpg',
      title: 'Sales Automation & Reporting',
      desc: 'Automated sales reporting, market coverage tracking, team productivity monitoring, and execution dashboards.',
      link: '/services/sales-automation-and-reporting'
    },
    {
      img: 'service7.jpg',
      title: 'Direct Execution',
      desc: 'Outsource your sales execution to JXC and activate expert teams that generate leads, engage customers, and close deals quickly.',
      link: '/services/direct-execution/'
    }
  ];

  return (
    <>
      <Header />

      {/* Banner Area */}
      <div className="banner-area" id="banner-area" style={{backgroundImage: 'url(/images/banner/banner5.jpg)'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col">
              <div className="banner-heading">
                <h1 className="banner-title">Services</h1>
                <ol className="breadcrumb">
                  <li>Home</li>
                  <li><Link href="/services">All Services</Link></li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="main-container no-padding" id="main-container">
        <div className="ts-services" id="ts-services">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12">
                <h2 className="section-title"><span>What We Do</span>Our Core Services</h2>
              </div>
            </div>

            <div className="row">
              {services.map((service, index) => (
                <div className="col-lg-3 col-md-6" key={index}>
                  <div className="ts-service-box">
                    <div className="ts-service-image-wrapper">
                      <img className="img-fluid" src={`/images/services/${service.img}`} alt={service.title} />
                    </div>
                    <div className="ts-service-content">
                      <h3 className="service-title">{service.title}</h3>
                      <p>{service.desc}</p>
                      <p><Link className="link-more" href={service.link}>Read More <i className="icon icon-right-arrow2"></i></Link></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="gap-40"></div>
            <div className="row">
              <div className="col-md-12 text-center">
                <p>Additional support: Product branding, events support, digital marketing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="call-to-action" className="call-to-action-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 align-self-center">
              <h3 className="call-to-action-title">Ready to grow sales and expand coverage?</h3>
              <p>Whether you already operate in Ghana or plan to launch a local or imported product, we deliver structured market execution at scale.</p>
            </div>
            <div className="col-lg-4 text-right">
              <Link className="btn btn-box" href="/contact">Get Started</Link>
            </div>
          </div>
        </div>
      </section>

      <FeaturedProductBanner />
      <Footer />
    </>
  );
}

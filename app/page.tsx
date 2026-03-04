/**
 * Homepage Component
 *
 * Sections: Hero, Features Light, Why JX, Our Services, FAQ, Testimonials, Facts, Quote/CTA.
 */

import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';
import FeaturedProductBanner from './components/FeaturedProductBanner';
import QuoteForm from './components/QuoteForm';
import { buildWhatsAppUrl } from '../lib/site';
import { HOMEPAGE_TESTIMONIALS, SALES_CHANNEL_METRICS } from '../lib/home-content';

export default function Home() {
  // Centralized WhatsApp links for homepage CTAs.
  const whatsappLinks = {
    quickQuote: buildWhatsAppUrl('Hi, just produce or import, we will sell. I need a quick quote.'),
    callBack: buildWhatsAppUrl('Hi, please call me back about nationwide sales execution and distribution.'),
    servicesTalk: buildWhatsAppUrl('Hi, I want to talk to your team about growing sales and market penetration.'),
  };

  return (
    <>
      <Header />

      {/* Hero Carousel Section */}
      <div className="carousel slide" id="main-slide" data-bs-ride="carousel">
        <ol className="carousel-indicators visible-lg visible-md">
          <li className="active" data-bs-target="#main-slide" data-bs-slide-to="0"></li>
          <li data-bs-target="#main-slide" data-bs-slide-to="1"></li>
          <li data-bs-target="#main-slide" data-bs-slide-to="2"></li>
          <li data-bs-target="#main-slide" data-bs-slide-to="3"></li>
          <li data-bs-target="#main-slide" data-bs-slide-to="4"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active" style={{backgroundImage: 'url(/images/slider/bg1.jpg)'}}>
            <div className="container">
              <div className="slider-content text-left">
                <div className="col-md-12">
                  <h2 className="slide-title title-light">Just produce or import,</h2>
                  <h3 className="slide-sub-title">we will sell.</h3>
                  <p className="slider-description lead">
                    JX Distribution Africa is a registered distribution and market execution company headquartered in Ghana.
                  </p>
                  <p>
                    <Link className="slider btn btn-primary" href="/#ts-features-light">Know More</Link>
                    <a className="slider btn btn-border" href={whatsappLinks.quickQuote} target="_blank" rel="noreferrer">Get a Quick Quote</a>
                  </p>
                </div>
                {/* Col end */}
              </div>
              {/* Slider content end */}
            </div>
            {/* Container end */}
          </div>
          {/* Carousel item 1 end */}
          
          {/* Carousel item 2 */}
          <div className="carousel-item" style={{backgroundImage: 'url(/images/slider/bg2.jpg)'}}>
            <div className="container">
              <div className="slider-content text-center">
                <div className="col-md-12">
                  <h2 className="slide-title title-light">Sales Execution at Scale</h2>
                  <h3 className="slide-sub-title">Nationwide Coverage Across 16 Regions</h3>
                  <p className="slider-description lead">
                    We support local and international brands with disciplined execution in retail, wholesale, key accounts, activations, and street channels.
                  </p>
                  <p>
                    <a className="slider btn btn-primary" href={whatsappLinks.callBack} target="_blank" rel="noreferrer">Request a Call Back</a>
                  </p>
                </div>
                {/* Col end */}
              </div>
              {/* Slider content end */}
            </div>
            {/* Container end */}
          </div>
          {/* Carousel item 2 end */}
          
          {/* Carousel item 3 */}
          <div className="carousel-item" style={{backgroundImage: 'url(/images/slider/bg3.jpg)'}}>
            <div className="container">
              <div className="slider-content text-right">
                <div className="col-md-12">
                  <h2 className="slide-title title-light">A Decade of Market Experience</h2>
                  <h3 className="slide-sub-title">Priceless Partnerships Across Markets</h3>
                  <p>
                    <a className="slider btn btn-primary" href={whatsappLinks.callBack} target="_blank" rel="noreferrer">Request a Call Back</a>
                  </p>
                </div>
                {/* Col end */}
              </div>
              {/* Slider content end */}
            </div>
            {/* Container end */}
          </div>
          {/* Carousel item 3 end */}

          {/* Carousel item 4 */}
          <div className="carousel-item" style={{backgroundImage: 'url(/images/slider/bg2.jpg)'}}>
            <div className="container">
              <div className="slider-content text-left">
                <div className="col-md-12">
                  <h2 className="slide-title title-light">Activation & Consumer Conversion</h2>
                  <h3 className="slide-sub-title">Drive Demand Where It Matters</h3>
                  <p className="slider-description lead">
                    We deliver social media marketing and activation campaigns that convert awareness into measurable sales.
                  </p>
                  <p>
                    <a className="slider btn btn-primary" href={whatsappLinks.servicesTalk} target="_blank" rel="noreferrer">Talk to our Team</a>
                  </p>
                </div>
                {/* Col end */}
              </div>
              {/* Slider content end */}
            </div>
            {/* Container end */}
          </div>
          {/* Carousel item 4 end */}

          {/* Carousel item 5 */}
          <div className="carousel-item" style={{backgroundImage: 'url(/images/slider/bg1.jpg)'}}>
            <div className="container">
              <div className="slider-content text-center">
                <div className="col-md-12">
                  <h2 className="slide-title title-light">Sales Automation & Reporting</h2>
                  <h3 className="slide-sub-title">Execution Visibility You Can Trust</h3>
                  <p className="slider-description lead">
                    Structured reporting tracks sales performance, market coverage, POS deployment, productivity, and campaign outcomes.
                  </p>
                  <p>
                    <a className="slider btn btn-primary" href={whatsappLinks.quickQuote} target="_blank" rel="noreferrer">Get a Quick Quote</a>
                  </p>
                </div>
                {/* Col end */}
              </div>
              {/* Slider content end */}
            </div>
            {/* Container end */}
          </div>
          {/* Carousel item 5 end */}
        </div>
        {/* Carousel inner end */}
        
        {/* Controllers */}
        <a className="left carousel-control carousel-control-prev" href="#main-slide" role="button" data-bs-slide="prev">
          <span><i className="fa fa-angle-left"></i></span>
        </a>
        <a className="right carousel-control carousel-control-next" href="#main-slide" role="button" data-bs-slide="next">
          <span><i className="fa fa-angle-right"></i></span>
        </a>
      </div>
      {/* Carousel end */}

      <FeaturedProductBanner />

      {/* Features Light Section */}
      <section id="ts-features-light" className="ts-features-light ts-features-light--after-banner">
        <div className="container">
          <div className="row feature-light-row">
            <div className="col-md-4 text-center">
              <div className="ts-feature-box">
                <div className="ts-feature-info">
                  <div className="feature-img">
                    <img src="/images/icon/service-1.png" alt="" />
                  </div>
                  <h3 className="ts-feature-title">Structured Sales Execution</h3>
                  <p>We execute with a clear framework: assessment, territory design, stocking plans, conversion, and optimization.</p>
                  <Link className="slider btn btn-primary" href="/services/route-to-market-and-route-to-consumer-development">Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center border-left">
              <div className="ts-feature-box">
                <div className="ts-feature-info">
                  <div className="feature-img">
                    <img src="/images/icon/service-2.png" alt="" />
                  </div>
                  <h3 className="ts-feature-title">Nationwide Operational Footprint</h3>
                  <p>Operations across all 16 regions of Ghana with field teams, logistics coordination, and warehousing support.</p>
                  <Link className="slider btn btn-primary" href="/services/distribution-and-logistics-coordination">Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center border-left">
              <div className="ts-feature-box">
                <div className="ts-feature-info">
                  <div className="feature-img">
                    <img src="/images/icon/service-3.png" alt="" />
                  </div>
                  <h3 className="ts-feature-title">Measurable Reporting</h3>
                  <p>Sales automation systems provide structured tracking of performance, penetration progress, and execution quality.</p>
                  <Link className="slider btn btn-primary" href="/services/sales-automation-and-reporting">Read More</Link>
                </div>
              </div>
              {/* feature box-3 end */}
            </div>
          </div>
        </div>
      </section>

      {/* Why JX / ts-service-area (6 benefits) — ref: index.html ~291 */}
      <section className="ts-service-area service-area-pattern" id="ts-service-area">
        <div className="service-area-bg">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12">
                <h2 className="section-title"><span>Why Partner With JX</span>Why Companies Choose JX Distribution Africa</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-12">
                <div className="ts-service-wrapper">
                  <div className="ts-service-box">
                    <div className="ts-service-box-img">
                      <img src="/images/icon/why-1.png" alt="" />
                    </div>
                    <div className="ts-service-box-info">
                      <h3 className="service-box-title">Experienced Execution Team</h3>
                      <p>Professional sales and distribution leadership with 10–20 years practical industry exposure.</p>
                    </div>
                  </div>
                  <div className="gap-15"></div>
                  <div className="ts-service-box">
                    <div className="ts-service-box-img">
                      <img src="/images/icon/why-2.png" alt="" />
                    </div>
                    <div className="ts-service-box-info">
                      <h3 className="service-box-title">Tailored Activation Strength</h3>
                      <p>Product and trade activations designed to accelerate visibility, trial, and sales conversion.</p>
                    </div>
                  </div>
                  <div className="gap-15"></div>
                  <div className="ts-service-box">
                    <div className="ts-service-box-img">
                      <img src="/images/icon/why-4.png" alt="" />
                    </div>
                    <div className="ts-service-box-info">
                      <h3 className="service-box-title">Nationwide Coverage</h3>
                      <p>Operational reach across all 16 regions in Ghana with structured regional penetration.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <span className="service-img"><img className="img-fluid" src="/images/services/service_center.png" alt="" /></span>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="ts-service-wrapper ml-lg-auto">
                  <div className="ts-service-box">
                    <div className="ts-service-box-img">
                      <img src="/images/icon/why-3.png" alt="" />
                    </div>
                    <div className="ts-service-box-info">
                      <h3 className="service-box-title">Cost-Effective Engagement Models</h3>
                      <p>Commission-based, target-based, project-based, and retainer-based options for flexible engagement.</p>
                    </div>
                  </div>
                  <div className="gap-15"></div>
                  <div className="ts-service-box">
                    <div className="ts-service-box-img">
                      <img src="/images/icon/why-5.png" alt="" />
                    </div>
                    <div className="ts-service-box-info">
                      <h3 className="service-box-title">Automation & Accountability</h3>
                      <p>Sales automation and reporting provide clear visibility into growth, coverage, and productivity.</p>
                    </div>
                  </div>
                  <div className="gap-15"></div>
                  <div className="ts-service-box">
                    <div className="ts-service-box-img">
                      <img src="/images/icon/why-6.png" alt="" />
                    </div>
                    <div className="ts-service-box-info">
                      <h3 className="service-box-title">24/7 Customer Support</h3>
                      <p>Standby call center and telesales support with strict compliance: no alcoholic, gambling, or tobacco products.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services — 8 core pillars */}
      <section className="ts-services solid-bg" id="ts-services">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <h2 className="section-title"><span>What We Do</span>Our Services</h2>
            </div>
          </div>
          <div className="row ts-service-row-box">
            {[
              {
                img: 'service1.jpg',
                title: 'Route-to-Market & Route-to-Consumer Development',
                desc: 'Channel strategy and route design for structured market penetration.',
              },
              {
                img: 'service2.jpg',
                title: 'Social Media Marketing & Activation Campaigns',
                desc: 'Integrated digital and field activations that drive conversion.',
              },
              {
                img: 'service3.jpg',
                title: 'Distribution & Logistics Coordination',
                desc: 'Stocking, warehousing, and distribution coordination across key channels.',
              },
              {
                img: 'service4.jpg',
                title: 'Market Research & Consumer Intelligence',
                desc: 'Field insights and intelligence for better execution decisions.',
              },
              {
                img: 'service5.jpg',
                title: 'Procurement',
                desc: 'Procurement support aligned to sales, channel, and replenishment needs.',
              },
              {
                img: 'service6.jpg',
                title: 'Sales Team Training & Performance Management',
                desc: 'Sales capability development, supervision, and accountability.',
              },
              {
                img: 'service2.jpg',
                title: 'Call Center Services for Companies',
                desc: '24/7 call center and telesales support for customer engagement.',
              },
              {
                img: 'service6.jpg',
                title: 'Sales Automation & Reporting',
                desc: 'Automated tracking of sales, coverage, campaign, and team performance.',
              },
            ].map((s, i) => (
              <div className="col-lg-3 col-md-6" key={i}>
                <div className="ts-service-box">
                  <div className="ts-service-image-wrapper">
                    <img className="img-fluid" src={`/images/services/${s.img}`} alt={s.title} />
                  </div>
                  <div className="ts-service-content">
                    <h3 className="service-title">{s.title}</h3>
                    <p>{s.desc}</p>
                    <p><a className="link-more" href={whatsappLinks.servicesTalk} target="_blank" rel="noreferrer">Talk to our Team<i className="icon icon-right-arrow2"></i></a></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p>Additional support: Product branding, events support, digital marketing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ + Testimonials — ref: index.html ~478 */}
      <section className="testimonial-area" id="testimonial-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="accordion-title">
                <h3 className="column-title"><span>Our FAQ</span> Frequently Asked Questions</h3>
              </div>
              <div id="accordion" className="accordion-area">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <a href="#" className="btn btn-link" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Do you operate nationwide in Ghana?
                      </a>
                    </h5>
                  </div>
                  <div className="collapse show" id="collapseOne" aria-labelledby="headingOne" data-bs-parent="#accordion">
                    <div className="card-body">
                      <p>Yes. We operate across all 16 regions with field teams, logistics, and warehousing support.</p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                      <a href="#" className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Can you support imported and made-in-Ghana products?
                      </a>
                    </h5>
                  </div>
                  <div className="collapse" id="collapseTwo" aria-labelledby="headingTwo" data-bs-parent="#accordion">
                    <div className="card-body">
                      <p>Yes. We support local and international brands launching or scaling products in Ghana.</p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                      <a href="#" className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        What engagement models do you offer?
                      </a>
                    </h5>
                  </div>
                  <div className="collapse" id="collapseThree" aria-labelledby="headingThree" data-bs-parent="#accordion">
                    <div className="card-body">
                      <p>We offer commission-based, target-based, project-based, and retainer-based engagement models.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 testimonial-client">
              <h2 className="column-title"><span>Client Voices</span>Testimonials</h2>
              <div className="owl-carousel owl-theme testimonial-slide owl-dark" id="testimonial-slide">
                {HOMEPAGE_TESTIMONIALS.map((testimonial) => (
                  <div className="item" key={testimonial.id}>
                    <div className="quote-item quote-square">
                      <span className="quote-text">{testimonial.quote}</span>
                      <div className="quote-item-footer">
                        <img className="testimonial-thumb" src={testimonial.image} alt={testimonial.author} />
                        <div className="quote-item-info">
                          <p className="quote-author">{testimonial.author}</p>
                          <span className="quote-subtext">{testimonial.role}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facts — ref: index.html ~592 */}
      <section id="ts-facts-area" className="ts-facts-area-bg bg-overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12 column-left-title">
              <h2 className="column-title">Sales Channel Records</h2>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="container">
                <div className="row text-center">
                  {SALES_CHANNEL_METRICS.map((metric) => (
                    <div className="col-lg-4 col-md-4" key={metric.id}>
                      <div className="ts-facts-bg">
                        <img src={metric.icon} alt="" />
                        <div className="ts-facts-content">
                          <h4 className="ts-facts-num"><span className="counterUp">{metric.value.toLocaleString()}</span></h4>
                          <p className="facts-desc">{metric.label}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote / CTA — ref: index.html ~711 */}
      <section className="quote-area solid-bg" id="quote-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="quote_form">
                <h2 className="column-title"><span>Ready to Grow Sales and Expand Coverage?</span>Get a Quick Quote</h2>
                <div className="quote-img">
                  <img className="img-fluid" src="/images/alltransport.png" alt="transport" />
                </div>
              </div>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

/**
 * Homepage Component
 *
 * Sections: Hero, Features Light, Why JX, Our Services, FAQ, Testimonials, Facts, Quote/CTA.
 */

import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';
import QuoteForm from './components/QuoteForm';
import { buildWhatsAppUrl } from '../lib/site';
import { HOMEPAGE_TESTIMONIALS, SALES_CHANNEL_METRICS } from '../lib/home-content';

export default function Home() {
  // Centralized WhatsApp links for homepage CTAs.
  const whatsappLinks = {
    quickQuote: buildWhatsAppUrl('Hi, just produce or import, we will sell. I need a quick quote.'),
    callBack: buildWhatsAppUrl('Hi, please call me back about nationwide sales execution and distribution.'),
    featureLearnMore: buildWhatsAppUrl('Hi, I want to learn more about your execution model and services.'),
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
                    We help brands enter new markets, drive retail sales, and grow distribution across all 16 regions with measurable field execution and live reporting.
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

      {/* Features Light Section */}
      <section id="ts-features-light" className="ts-features-light">
        <div className="container">
          <div className="row feature-light-row">
            <div className="col-md-4 text-center">
              <div className="ts-feature-box">
                <div className="ts-feature-info">
                  <div className="feature-img">
                    <img src="/images/icon/service-1.png" alt="" />
                  </div>
                  <h3 className="ts-feature-title">Get Your Products Into More Shops</h3>
                  <p>We drive B2B sales directly to wholesalers and retailers to increase availability and reorder volume</p>
                  <a className="slider btn btn-primary" href="/shop">Read More</a>
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
                  <a className="slider btn btn-primary" href={whatsappLinks.featureLearnMore} target="_blank" rel="noreferrer">Read More</a>
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
                  <a className="slider btn btn-primary" href={whatsappLinks.featureLearnMore} target="_blank" rel="noreferrer">Read More</a>
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
                <h2 className="section-title">Why JX Distribution Africa?</h2>
                <h3 className="section-sub-title">Disciplined Market Execution</h3>
              </div>
            </div>
            {/* Title row end */}
            <div className="row">
              <div className="col-md-4">
                <div className="ts-service-box">
                  <div className="ts-service-box-img pull-left">
                    <img src="/images/icon/service-1.png" alt="" />
                  </div>
                  <div className="ts-service-box-info">
                    <h3 className="service-box-title">Nationwide Reach</h3>
                    <p>We cover all 16 regions of Ghana, ensuring your products reach every corner of the market.</p>
                  </div>
                </div>
                {/* Service 1 end */}
                <div className="ts-service-box">
                  <div className="ts-service-box-img pull-left">
                    <img src="/images/icon/service-2.png" alt="" />
                  </div>
                  <div className="ts-service-box-info">
                    <h3 className="service-box-title">Retail Execution</h3>
                    <p>Disciplined field teams driving visibility, availability, and stock pressure at the point of sale.</p>
                  </div>
                </div>
                {/* Service 2 end */}
                <div className="ts-service-box">
                  <div className="ts-service-box-img pull-left">
                    <img src="/images/icon/service-3.png" alt="" />
                  </div>
                  <div className="ts-service-box-info">
                    <h3 className="service-box-title">B2B Sales Growth</h3>
                    <p>Direct engagement with wholesalers and key accounts to grow volume and reorder frequency.</p>
                  </div>
                </div>
                {/* Service 3 end */}
              </div>
              {/* Col end */}
              <div className="col-md-4 text-center">
                <img className="service-img" src="/images/services/service-center.png" alt="" />
              </div>
              {/* Col end */}
              <div className="col-md-4">
                <div className="ts-service-box">
                  <div className="ts-service-box-img pull-left">
                    <img src="/images/icon/service-4.png" alt="" />
                  </div>
                  <div className="ts-service-box-info">
                    <h3 className="service-box-title">Market Intelligence</h3>
                    <p>Real-time reporting on pricing, competitor moves, and channel penetration progress.</p>
                  </div>
                </div>
                {/* Service 4 end */}
                <div className="ts-service-box">
                  <div className="ts-service-box-img pull-left">
                    <img src="/images/icon/service-5.png" alt="" />
                  </div>
                  <div className="ts-service-box-info">
                    <h3 className="service-box-title">Sales Automation</h3>
                    <p>Structured tracking of every sales call, order, and activation for full visibility.</p>
                  </div>
                </div>
                {/* Service 5 end */}
                <div className="ts-service-box">
                  <div className="ts-service-box-img pull-left">
                    <img src="/images/icon/service-6.png" alt="" />
                  </div>
                  <div className="ts-service-box-info">
                    <h3 className="service-box-title">Consumer Conversion</h3>
                    <p>In-market activations and social media campaigns that turn awareness into measurable sales.</p>
                  </div>
                </div>
                {/* Service 6 end */}
              </div>
              {/* Col end */}
            </div>
            {/* Content row end */}
          </div>
          {/* Container end */}
        </div>
        {/* Service area bg end */}
      </section>

      {/* Quote / CTA Section */}
      <section id="ts-quote" className="ts-quote no-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="quote-info">
                <h2 className="section-title">Ready to grow your sales?</h2>
                <h3 className="section-sub-title">Let's talk about your distribution needs.</h3>
                <p>We help local and international brands win in the Ghanaian market through disciplined execution.</p>
                <div className="quote-item">
                  <div className="quote-icon"><i className="fa fa-whatsapp"></i></div>
                  <div className="quote-text">
                    <h4 className="quote-title">WhatsApp Us</h4>
                    <p><a href={whatsappLinks.quickQuote} target="_blank" rel="noreferrer">Chat with our team now</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="quote-form-wrapper">
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

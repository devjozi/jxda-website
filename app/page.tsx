/**
 * Homepage Component
 *
 * Sections: Hero, Features Light, Why JX, Our Services, FAQ, Testimonials, Facts, Quote/CTA.
 */

import Header from './components/Header';
import Footer from './components/Footer';
import QuoteForm from './components/QuoteForm';

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero Carousel Section */}
      <div className="carousel slide" id="main-slide" data-bs-ride="carousel">
        <ol className="carousel-indicators visible-lg visible-md">
          <li className="active" data-bs-target="#main-slide" data-bs-slide-to="0"></li>
          <li data-bs-target="#main-slide" data-bs-slide-to="1"></li>
          <li data-bs-target="#main-slide" data-bs-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active" style={{backgroundImage: 'url(/images/slider/bg1.jpg)'}}>
            <div className="container">
              <div className="slider-content text-left">
                <div className="col-md-12">
                  <h2 className="slide-title title-light">You have products</h2>
                  <h3 className="slide-sub-title">We connect them to consumers</h3>
                  <p className="slider-description lead">
                    We discover, develop and create relationships between consumers and products across Ghana and Africa.
                  </p>
                  <p>
                    <a className="slider btn btn-primary" href="/#ts-features-light">Know More</a>
                    <a className="slider btn btn-border" href="/shop">Get a Quick Quote</a>
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
                  <h2 className="slide-title title-light">Sell More Across Ghana</h2>
                  <h3 className="slide-sub-title">Without Hiring a Sales Team</h3>
                  <p className="slider-description lead">
                    We help brands enter new markets, drive retail sails, and grow distribution across all 16 regions with measurable field execution and live reporting.
                  </p>
                  <p>
                    <a className="slider btn btn-primary" href="/shop">Request a Call Back</a>
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
                  <h2 className="slide-title title-light">17 years of experience</h2>
                  <h3 className="slide-sub-title">Strong Distribution Network</h3>
                  <p>
                    <a className="slider btn btn-primary" href="/shop">Request a Call Back</a>
                  </p>
                </div>
                {/* Col end */}
              </div>
              {/* Slider content end */}
            </div>
            {/* Container end */}
          </div>
          {/* Carousel item 3 end */}
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
                  <p>We drive B2B sales directly to wholealers and retailers to increase availability and reorder volume</p>
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
                  <h3 className="ts-feature-title">Expand Into All 16 Regions</h3>
                  <p>Our field teams and warehouse support help you penetrate new territories without operation stress.</p>
                  <a className="slider btn btn-primary" href="/shop">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center border-left">
              <div className="ts-feature-box">
                <div className="ts-feature-info">
                  <div className="feature-img">
                    <img src="/images/icon/service-3.png" alt="" />
                  </div>
                  <h3 className="ts-feature-title">See Results with Live Reporting</h3>
                  <p>Get clear updates on sales activity, market execution, and activation performance, so you know what's working.</p>
                  <a className="slider btn btn-primary" href="/shop">Read More</a>
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
                <h2 className="section-title"><span>Don&apos;t Miss a Thing</span>Why JX Distribution Africa?</h2>
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
                      <h3 className="service-box-title">Experienced Sales Professionals</h3>
                      <p>A trained team with 10 - 20+ years experience driving growth for brands in Ghana.</p>
                    </div>
                  </div>
                  <div className="gap-15"></div>
                  <div className="ts-service-box">
                    <div className="ts-service-box-img">
                      <img src="/images/icon/why-2.png" alt="" />
                    </div>
                    <div className="ts-service-box-info">
                      <h3 className="service-box-title">Strong Field Activation</h3>
                      <p>We execute roadshows, open market activation and modern trade campaigns that convert attention into sales.</p>
                    </div>
                  </div>
                  <div className="gap-15"></div>
                  <div className="ts-service-box">
                    <div className="ts-service-box-img">
                      <img src="/images/icon/why-4.png" alt="" />
                    </div>
                    <div className="ts-service-box-info">
                      <h3 className="service-box-title">Nationwide Coverage</h3>
                      <p>Active presence across all 16 regions to support product penetration and expansion.</p>
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
                      <h3 className="service-box-title">Target-Based Execution</h3>
                      <p>We focus on performance, so you spend smarter and get measurable outcomes.</p>
                    </div>
                  </div>
                  <div className="gap-15"></div>
                  <div className="ts-service-box">
                    <div className="ts-service-box-img">
                      <img src="/images/icon/why-5.png" alt="" />
                    </div>
                    <div className="ts-service-box-info">
                      <h3 className="service-box-title">Real-Time Reporting</h3>
                      <p>Live reporting and automation that keeps you informed and in control.</p>
                    </div>
                  </div>
                  <div className="gap-15"></div>
                  <div className="ts-service-box">
                    <div className="ts-service-box-img">
                      <img src="/images/icon/why-6.png" alt="" />
                    </div>
                    <div className="ts-service-box-info">
                      <h3 className="service-box-title">Safe &amp; Complaint Operations</h3>
                      <p>We uphold strong ethical standards and do not sell or market alcoholic products.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services — 6 items, ref: index.html ~379 */}
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
                title: 'B2B Sales & Merchandising',
                desc: 'Direct sales and marketing activities to retailers and wholesalers (B2B).',
              },
              {
                img: 'service2.jpg',
                title: 'B2C Consumer Activation',
                desc: 'Direct consumer sales and activation in open markets, modern trade and road shows.',
              },
              {
                img: 'service3.jpg',
                title: 'Route to Market Development',
                desc: 'Design and execution of route to market and route to consumer strategies.',
              },
              {
                img: 'service4.jpg',
                title: 'Market Surveys & Research',
                desc: 'Field research, market surveys and customer data build to support decisions.',
              },
              {
                img: 'service5.jpg',
                title: 'Logistics & Distribution Management',
                desc: 'Distribution and delivery management across channels with stationed warehouses.',
              },
              {
                img: 'service6.jpg',
                title: 'Branding, Events & Digital Marketing',
                desc: 'Branding, events and digital marketing to keep your products top of mind.',
              },
            ].map((s, i) => (
              <div className="col-lg-4 col-md-12" key={i}>
                <div className="ts-service-box">
                  <div className="ts-service-image-wrapper">
                    <img className="img-fluid" src={`/images/services/${s.img}`} alt={s.title} />
                  </div>
                  <div className="ts-service-content">
                    <h3 className="service-title">{s.title}</h3>
                    <p>{s.desc}</p>
                    <p><a className="link-more" href="/shop">Talk to our Team<i className="icon icon-right-arrow2"></i></a></p>
                  </div>
                </div>
              </div>
            ))}
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
              <div className="accordion accordion-area" id="accordion">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Do you cover all regions in Ghana?</button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion">
                    <div className="accordion-body">
                      <p>Yes. We operate across all 16 regions with stationed teams and warehouse support.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Do you work with new brands and startups?</button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion">
                    <div className="accordion-body">
                      <p>Yes. We support both startups and established brands ready to grow market share.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Do you do both B2B and B2C sales?</button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordion">
                    <div className="accordion-body">
                      <p>Yes. We sell to wholesalers/retailers and also run consumer activations.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 testimonial-client">
              <h2 className="column-title"><span>What They Said</span> Client Testimonials</h2>
              <div className="owl-carousel owl-theme testimonial-slide owl-dark" id="testimonial-slide">
                <div className="item">
                  <div className="quote-item quote-square">
                    <span className="quote-text">Professional and reliable. JX Distribution delivered on time and kept us informed throughout.</span>
                    <div className="quote-item-footer">
                      <img className="testimonial-thumb" src="/images/clients/testimonial1.png" alt="testimonial" />
                      <div className="quote-item-info">
                        <p className="quote-author">Gabriel Denis</p>
                        <span className="quote-subtext">Chairman, OKT</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="quote-item quote-square">
                    <span className="quote-text">Clear communication and seamless logistics. We recommend JX for distribution across the region.</span>
                    <div className="quote-item-footer">
                      <img className="testimonial-thumb" src="/images/clients/testimonial2.png" alt="testimonial" />
                      <div className="quote-item-info">
                        <h3 className="quote-author">Weldon Cash</h3>
                        <span className="quote-subtext">CFO, First Choice</span>
                      </div>
                    </div>
                  </div>
                </div>
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
              <h2 className="column-title">Experience in Logistics &amp; Distribution.</h2>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="container">
                <div className="row text-center">
                  <div className="col-lg-4 col-md-4">
                    <div className="ts-facts-bg">
                      <img src="/images/icon/fact1.png" alt="" />
                      <div className="ts-facts-content">
                        <h4 className="ts-facts-num"><span className="counterUp">2435</span></h4>
                        <p className="facts-desc">Office Worldwide</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="ts-facts-bg">
                      <img src="/images/icon/fact2.png" alt="" />
                      <div className="ts-facts-content">
                        <h4 className="ts-facts-num"><span className="counterUp">467</span></h4>
                        <p className="facts-desc">KM Per Year</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="ts-facts-bg">
                      <img src="/images/icon/fact3.png" alt="" />
                      <div className="ts-facts-content">
                        <h4 className="ts-facts-num"><span className="counterUp">858588</span></h4>
                        <p className="facts-desc">Tons of Goods</p>
                      </div>
                    </div>
                  </div>
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
                <h2 className="column-title"><span>Delivery &amp; return solutions worldwide</span>Get a Quick Quote</h2>
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

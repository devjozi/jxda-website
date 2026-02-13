import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Services() {
  const services = [
    {
      img: 'service1.jpg',
      title: 'B2B Sales & Merchandising',
      desc: 'Direct sales and marketing activities to retailers and wholesalers (B2B). We help you get your products into more shops and increase reorder volume.',
      link: '/services/b2b-sales-merchandising'
    },
    {
      img: 'service2.jpg',
      title: 'B2C Consumer Activation',
      desc: 'Direct consumer sales and activation in open markets, modern trade and road shows. We create engaging experiences that drive consumer purchase.',
      link: '/services/b2c-consumer-activation'
    },
    {
      img: 'service3.jpg',
      title: 'Route to Market Development',
      desc: 'Design and execution of route to market and route to consumer strategies. We develop efficient pathways to reach your target customers.',
      link: '/services/route-to-market-development'
    },
    {
      img: 'service4.jpg',
      title: 'Market Surveys & Research',
      desc: 'Field research, market surveys and customer data build to support decisions. We provide actionable insights to guide your business strategy.',
      link: '/services/market-surveys-research'
    },
    {
      img: 'service5.jpg',
      title: 'Logistics & Distribution Management',
      desc: 'Distribution and delivery management across channels with stationed warehouses. We ensure your products reach the right place at the right time.',
      link: '/services/logistics-distribution-management'
    },
    {
      img: 'service6.jpg',
      title: 'Branding, Events & Digital Marketing',
      desc: 'Branding, events and digital marketing to keep your products top of mind. We create compelling campaigns that build brand awareness.',
      link: '/services/branding-events-digital-marketing'
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
                  <li><a href="/services">All Services</a></li>
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
                <h2 className="section-title"><span>We make distribution easy</span>Our Comprehensive Services</h2>
              </div>
            </div>
            
            {/* First Row */}
            <div className="row">
              {services.slice(0, 3).map((service, index) => (
                <div className="col-lg-4 col-md-12" key={index}>
                  <div className="ts-service-box">
                    <div className="ts-service-image-wrapper">
                      <img className="img-fluid" src={`/images/services/${service.img}`} alt={service.title} />
                    </div>
                    <div className="ts-service-content">
                      <h3 className="service-title">{service.title}</h3>
                      <p>{service.desc}</p>
                      <p><a className="link-more" href={service.link}>Read More <i className="icon icon-right-arrow2"></i></a></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="gap-60"></div>

            {/* Second Row */}
            <div className="row">
              {services.slice(3, 6).map((service, index) => (
                <div className="col-lg-4 col-md-12" key={index + 3}>
                  <div className="ts-service-box">
                    <div className="ts-service-image-wrapper">
                      <img className="img-fluid" src={`/images/services/${service.img}`} alt={service.title} />
                    </div>
                    <div className="ts-service-content">
                      <h3 className="service-title">{service.title}</h3>
                      <p>{service.desc}</p>
                      <p><a className="link-more" href={service.link}>Read More <i className="icon icon-right-arrow2"></i></a></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="call-to-action" className="call-to-action-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 align-self-center">
              <h3 className="call-to-action-title">Ready to grow your business across Ghana?</h3>
              <p>Let us help you expand your distribution network and increase sales with our expert services.</p>
            </div>
            <div className="col-lg-4 text-right">
              <a className="btn btn-box" href="/contact">Get Started</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { notFound } from 'next/navigation';

const serviceData: { [key: string]: any } = {
  'b2b-sales-merchandising': {
    title: 'B2B Sales & Merchandising',
    image: 'service1.jpg',
    description: 'Our B2B Sales & Merchandising service is designed to help you get your products into more shops and increase reorder volume across Ghana.',
    fullDescription: 'We drive B2B sales directly to wholesalers and retailers to increase availability and reorder volume. Our experienced sales team understands the Ghanaian market and has established relationships with key retail outlets across all 16 regions.',
    features: [
      {
        number: '01',
        title: 'Direct Sales Force',
        description: 'Trained sales professionals who understand your product and target market, ensuring effective communication and relationship building with retailers.'
      },
      {
        number: '02',
        title: 'Merchandising Support',
        description: 'In-store merchandising to ensure your products are prominently displayed and attractively presented to drive consumer purchase.'
      },
      {
        number: '03',
        title: 'Retailer Training',
        description: 'Training for retail staff on product features and benefits to improve sales performance and customer satisfaction.'
      }
    ]
  },
  'b2c-consumer-activation': {
    title: 'B2C Consumer Activation',
    image: 'service2.jpg',
    description: 'Direct consumer sales and activation in open markets, modern trade and road shows that create memorable brand experiences.',
    fullDescription: 'We create engaging consumer experiences that drive immediate purchase and long-term brand loyalty. Our B2C activation strategies are designed to connect directly with your target customers where they shop, live, and socialize.',
    features: [
      {
        number: '01',
        title: 'Road Shows',
        description: 'Mobile activation units that bring your brand directly to consumers in high-traffic locations across all regions.'
      },
      {
        number: '02',
        title: 'Market Activations',
        description: 'Strategic activations in open markets and trading centers to reach mass market consumers effectively.'
      },
      {
        number: '03',
        title: 'Modern Trade Events',
        description: 'Premium activations in shopping malls and modern retail outlets to target urban consumers.'
      }
    ]
  },
  'route-to-market-development': {
    title: 'Route to Market Development',
    image: 'service3.jpg',
    description: 'Design and execution of efficient route to market and route to consumer strategies for optimal market penetration.',
    fullDescription: 'We develop and implement comprehensive route to market strategies that ensure your products reach the right customers at the right time. Our approach combines market insights with logistical expertise to create efficient distribution networks.',
    features: [
      {
        number: '01',
        title: 'Market Analysis',
        description: 'In-depth analysis of your target market and consumer behavior to identify the most effective distribution channels.'
      },
      {
        number: '02',
        title: 'Channel Strategy',
        description: 'Development of multi-channel distribution strategies that maximize reach while minimizing costs.'
      },
      {
        number: '03',
        title: 'Implementation Support',
        description: 'End-to-end support in implementing your route to market strategy, from planning to execution and monitoring.'
      }
    ]
  },
  'market-surveys-research': {
    title: 'Market Surveys & Research',
    image: 'service4.jpg',
    description: 'Field research, market surveys and customer data build to support strategic business decisions.',
    fullDescription: 'Our market research services provide actionable insights that guide your business strategy. We combine quantitative data with qualitative understanding to give you a complete picture of the market landscape.',
    features: [
      {
        number: '01',
        title: 'Consumer Insights',
        description: 'Deep understanding of consumer preferences, behaviors, and purchasing patterns in your target market.'
      },
      {
        number: '02',
        title: 'Competitive Analysis',
        description: 'Comprehensive analysis of competitor strategies, pricing, and market positioning to identify opportunities.'
      },
      {
        number: '03',
        title: 'Market Trends',
        description: 'Identification of emerging trends and opportunities in the Ghanaian and African markets.'
      }
    ]
  },
  'logistics-distribution-management': {
    title: 'Logistics & Distribution Management',
    image: 'service5.jpg',
    description: 'Distribution and delivery management across channels with stationed warehouses for efficient supply chain operations.',
    fullDescription: 'We provide comprehensive logistics and distribution management services that ensure your products reach their destination safely and on time. Our warehouse network and transportation fleet cover all 16 regions of Ghana.',
    features: [
      {
        number: '01',
        title: 'Warehouse Management',
        description: 'Strategically located warehouses across Ghana for efficient storage and distribution of your products.'
      },
      {
        number: '02',
        title: 'Transportation Network',
        description: 'Reliable transportation fleet that ensures timely delivery to retail outlets and distribution points.'
      },
      {
        number: '03',
        title: 'Inventory Management',
        description: 'Advanced inventory management systems that optimize stock levels and reduce carrying costs.'
      }
    ]
  },
  'branding-events-digital-marketing': {
    title: 'Branding, Events & Digital Marketing',
    image: 'service6.jpg',
    description: 'Comprehensive branding, events and digital marketing services to keep your products top of mind.',
    fullDescription: 'We create compelling brand experiences and marketing campaigns that build awareness and drive engagement. Our integrated approach combines traditional marketing with digital strategies for maximum impact.',
    features: [
      {
        number: '01',
        title: 'Brand Development',
        description: 'Strategic brand development that creates strong brand identity and positioning in the market.'
      },
      {
        number: '02',
        title: 'Event Management',
        description: 'Professional event management services that create memorable brand experiences and consumer engagement.'
      },
      {
        number: '03',
        title: 'Digital Marketing',
        description: 'Comprehensive digital marketing strategies including social media, content marketing, and online advertising.'
      }
    ]
  }
};

export default function ServiceSingle({ params }: { params: { slug: string } }) {
  const service = serviceData[params.slug];

  if (!service) {
    notFound();
  }

  return (
    <>
      <Header />

      {/* Banner Area */}
      <div className="banner-area" id="banner-area" style={{backgroundImage: 'url(/images/banner/banner4.jpg)'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col">
              <div className="banner-heading">
                <h1 className="banner-title">{service.title}</h1>
                <ol className="breadcrumb">
                  <li>Home</li>
                  <li><a href="/services">Services</a></li>
                  <li><a href={`/services/${params.slug}`}>{service.title}</a></li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Content */}
      <section className="main-container" id="main-container">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="col-lg-4">
              <h4 className="list-column-title">Our Services</h4>
              <div className="sidebar">
                <div className="widget no-padding no-border">
                  <ul className="service-menu">
                    <li><a href="/services/b2b-sales-merchandising">B2B Sales & Merchandising</a></li>
                    <li><a href="/services/b2c-consumer-activation">B2C Consumer Activation</a></li>
                    <li><a href="/services/route-to-market-development">Route to Market Development</a></li>
                    <li><a href="/services/market-surveys-research">Market Surveys & Research</a></li>
                    <li><a href="/services/logistics-distribution-management">Logistics & Distribution Management</a></li>
                    <li><a href="/services/branding-events-digital-marketing">Branding, Events & Digital Marketing</a></li>
                  </ul>
                </div>
                <div className="widget no-padding testimonial-static">
                  <div className="quote-item quote-classic">
                    <span className="quote-text faq-quote-text">JX Distribution has been instrumental in expanding our market reach across Ghana. Their professional approach and deep market knowledge made all the difference.</span>
                    <div className="quote-item-footer quote-footer-classic">
                      <img className="testimonial-thumb" src="/images/clients/testimonial1.png" alt="testimonial" />
                      <div className="quote-item-info">
                        <p className="quote-author">Gabriel Denis</p>
                        <span className="quote-subtext">Chairman, OKT</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="col-lg-8">
              <div className="single-service-img">
                <img src={`/images/services/${service.image}`} alt={service.title} />
              </div>
              <div className="service-content">
                <h2>{service.title}</h2>
                
                <div className="text-block mrb-40">
                  <p>{service.fullDescription}</p>
                  <p>With 17 years of experience in the Ghanaian market, we understand the unique challenges and opportunities that businesses face. Our team of experts is committed to delivering results that exceed your expectations.</p>
                </div>

                <h3 className="column-title">Service Features</h3>
                
                {service.features.map((feature: any, index: number) => (
                  <div className="service-content" key={index}>
                    <div className="service-blocknumber">
                      <div className="pull-left">
                        <span className="block-number">{feature.number}</span>
                      </div>
                    </div>
                    <div className="service-content-area">
                      <h3>{feature.title}</h3>
                      <p className="service-text">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div id="call-to-action" className="call-to-action-bg service-call-to-action">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 align-self-center">
                      <h3 className="call-to-action-title service-call-to-action">Ready to grow your business with {service.title}?</h3>
                      <p>We would love to hear from you and discuss how we can help you achieve your business goals.</p>
                    </div>
                    <div className="col-lg-4 text-right">
                      <a className="btn btn-box" href="/contact">Contact Us</a>
                    </div>
                  </div>
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

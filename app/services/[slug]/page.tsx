// Purpose: Service detail page with static params for export builds.
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { notFound } from 'next/navigation';

const serviceData: { [key: string]: any } = {
  'route-to-market-and-route-to-consumer-development': {
    title: 'Route-to-Market & Route-to-Consumer Development',
    image: 'service1.jpg',
    description: 'Structured channel design and territory execution models that improve product availability and customer reach.',
    fullDescription: 'We design and execute route-to-market and route-to-consumer strategies that align channels, territory potential, and sales targets. This helps brands build sustainable penetration and repeat coverage across Ghana.',
    features: [
      {
        number: '01',
        title: 'Market Assessment',
        description: 'Evaluate market opportunity, channel mix, and demand patterns before rollout.'
      },
      {
        number: '02',
        title: 'Territory Mapping',
        description: 'Map territories and route plans for efficient sales and distribution coverage.'
      },
      {
        number: '03',
        title: 'Execution Framework',
        description: 'Implement structured steps-to-a-call and field execution standards.'
      }
    ]
  },
  'social-media-marketing-and-activation-campaigns': {
    title: 'Social Media Marketing & Activation Campaigns',
    image: 'service2.jpg',
    description: 'Digital and in-market activation programs that convert awareness into sales and repeat buying.',
    fullDescription: 'We run social media marketing and activation campaigns designed to increase visibility, trial, and consumer conversion. Campaigns are managed with clear objectives, field support, and measurable outcomes.',
    features: [
      {
        number: '01',
        title: 'Campaign Planning',
        description: 'Define campaign objectives, audience targeting, and conversion strategy.'
      },
      {
        number: '02',
        title: 'Activation Execution',
        description: 'Deploy on-ground and digital activations across priority channels.'
      },
      {
        number: '03',
        title: 'Performance Tracking',
        description: 'Track engagement, conversion, and campaign outcomes for continuous improvement.'
      }
    ]
  },
  'distribution-and-logistics-coordination': {
    title: 'Distribution & Logistics Coordination',
    image: 'service3.jpg',
    description: 'Coordinated warehousing, stock movement, and channel fulfillment for reliable nationwide execution.',
    fullDescription: 'Our distribution and logistics coordination model supports product stocking, replenishment, and movement across key channels. We align field and operations teams for dependable service levels.',
    features: [
      {
        number: '01',
        title: 'Stocking Planning',
        description: 'Plan inventory allocation and stocking cycles by channel and territory.'
      },
      {
        number: '02',
        title: 'Logistics Coordination',
        description: 'Coordinate warehousing and delivery operations to support market demand.'
      },
      {
        number: '03',
        title: 'Coverage Control',
        description: 'Maintain consistent market presence through structured replenishment routines.'
      }
    ]
  },
  'market-research-and-consumer-intelligence': {
    title: 'Market Research & Consumer Intelligence',
    image: 'service4.jpg',
    description: 'Field intelligence and consumer insights that support product, channel, and growth decisions.',
    fullDescription: 'We provide market research and consumer intelligence to help brands identify opportunities, close execution gaps, and strengthen decision-making across channels and regions.',
    features: [
      {
        number: '01',
        title: 'Consumer Insights',
        description: 'Capture buying behavior, preferences, and channel-level demand signals.'
      },
      {
        number: '02',
        title: 'Trade Intelligence',
        description: 'Collect field data on distribution, pricing, and competitor activity.'
      },
      {
        number: '03',
        title: 'Decision Reporting',
        description: 'Deliver structured reports for planning, optimization, and performance review.'
      }
    ]
  },
  procurement: {
    title: 'Procurement',
    image: 'service5.jpg',
    description: 'Procurement support for product and trade requirements linked to channel execution and growth plans.',
    fullDescription: 'Our procurement support helps businesses align sourcing and supply decisions with market needs. We focus on practical procurement workflows that enable stable product availability.',
    features: [
      {
        number: '01',
        title: 'Requirement Planning',
        description: 'Define procurement needs based on sales targets and market demand.'
      },
      {
        number: '02',
        title: 'Sourcing Support',
        description: 'Support procurement activities with structured coordination and documentation.'
      },
      {
        number: '03',
        title: 'Supply Alignment',
        description: 'Align procurement timelines with distribution and channel execution plans.'
      }
    ]
  },
  'sales-team-training-and-performance-management': {
    title: 'Sales Team Training & Performance Management',
    image: 'service6.jpg',
    description: 'Structured sales capability development, supervision, and performance control for field teams.',
    fullDescription: 'We train and supervise sales teams using practical field standards and performance routines. This improves consistency, call quality, and accountability across territories.',
    features: [
      {
        number: '01',
        title: 'Sales Training',
        description: 'Build product knowledge, selling skills, and execution discipline.'
      },
      {
        number: '02',
        title: 'Performance Supervision',
        description: 'Track sales activities and coach teams against agreed KPIs.'
      },
      {
        number: '03',
        title: 'Quality Improvement',
        description: 'Use reporting feedback loops to improve coverage and conversion outcomes.'
      }
    ]
  },
  'call-center-services-for-companies': {
    title: 'Call Center Services for Companies',
    image: 'service2.jpg',
    description: '24/7 call center and telesales services that strengthen customer engagement and sales continuity.',
    fullDescription: 'Our call center services provide standby support for inbound and outbound customer engagement, telesales follow-up, and structured service response.',
    features: [
      {
        number: '01',
        title: '24/7 Availability',
        description: 'Standby support model for continuous customer touchpoints.'
      },
      {
        number: '02',
        title: 'Telesales Support',
        description: 'Outbound calling workflows to support acquisition, upsell, and reactivation.'
      },
      {
        number: '03',
        title: 'Customer Service Logs',
        description: 'Structured logging and reporting of customer interactions and outcomes.'
      }
    ]
  },
  'sales-automation-and-reporting': {
    title: 'Sales Automation & Reporting',
    image: 'service6.jpg',
    description: 'Automation tools and reporting dashboards that track sales, coverage, and execution quality.',
    fullDescription: 'We deploy sales automation and reporting systems that provide structured visibility into performance, growth, and field execution. Teams and clients receive actionable updates for faster decisions.',
    features: [
      {
        number: '01',
        title: 'Sales Tracking',
        description: 'Track regional sales performance and growth trends in structured formats.'
      },
      {
        number: '02',
        title: 'Coverage Reporting',
        description: 'Monitor market penetration, POS deployment, and customer acquisition progress.'
      },
      {
        number: '03',
        title: 'Execution Dashboards',
        description: 'Review team productivity, activation outcomes, and execution quality metrics.'
      }
    ]
  }
};

export function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({ slug }));
}

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
                    <li><a href="/services/route-to-market-and-route-to-consumer-development">Route-to-Market & Route-to-Consumer Development</a></li>
                    <li><a href="/services/social-media-marketing-and-activation-campaigns">Social Media Marketing & Activation Campaigns</a></li>
                    <li><a href="/services/distribution-and-logistics-coordination">Distribution & Logistics Coordination</a></li>
                    <li><a href="/services/market-research-and-consumer-intelligence">Market Research & Consumer Intelligence</a></li>
                    <li><a href="/services/procurement">Procurement</a></li>
                    <li><a href="/services/sales-team-training-and-performance-management">Sales Team Training & Performance Management</a></li>
                    <li><a href="/services/call-center-services-for-companies">Call Center Services for Companies</a></li>
                    <li><a href="/services/sales-automation-and-reporting">Sales Automation & Reporting</a></li>
                  </ul>
                </div>
                <div className="widget no-padding testimonial-static">
                  <div className="quote-item quote-classic">
                    <span className="quote-text faq-quote-text">JX Distribution Africa combines disciplined field execution, data-backed reporting, and nationwide reach to grow market penetration.</span>
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
                  <p>With a decade of practical market execution experience and partnerships across multiple channels, our team delivers measurable outcomes at scale.</p>
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
                      <p>We support local and international brands with structured execution across Ghana and West Africa.</p>
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

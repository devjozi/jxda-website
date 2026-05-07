// Purpose: Service detail page with static params for export builds.
import Link from 'next/link';
import Header from '../../components/Header';
import TrackView from '../../components/TrackView';
import Footer from '../../components/Footer';
import { notFound } from 'next/navigation';
import { getServiceBySlug, getServicesArray } from '../../../lib/services-data';

type Props = { params: Promise<{ slug: string }> };
const dedicatedServiceSlugs = new Set(['direct-execution']);

export async function generateStaticParams() {
  const services = getServicesArray();
  return services
    .filter((service) => !dedicatedServiceSlugs.has(service.slug))
    .map((service) => ({ slug: service.slug }));
}

export default async function ServiceSingle({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const services = getServicesArray();

  if (!service) {
    notFound();
  }

  return (
    <>
      <Header />
      {/* Client-side tracking for analytics */}
      <TrackView contentName={service.title} contentId={service.slug} />

      {/* Banner Area */}
      <div className="banner-area" id="banner-area" style={{backgroundImage: 'url(/images/banner/banner4.jpg)'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col">
              <div className="banner-heading">
                <h1 className="banner-title">{service.title}</h1>
                <ol className="breadcrumb">
                  <li>Home</li>
                  <li><Link href="/services">Services</Link></li>
                  <li><Link href={`/services/${slug}`}>{service.title}</Link></li>
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
                    {services.map((sidebarService) => (
                      <li key={sidebarService.slug}>
                        <Link href={`/services/${sidebarService.slug}`}>{sidebarService.title}</Link>
                      </li>
                    ))}
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
                <img src={`/images/services/catalog/${service.catalogImg}`} alt={service.title} />
              </div>
              <div className="service-content">
                <h2>{service.title}</h2>
                
                <div className="text-block mrb-40">
                  <p>{service.fullDescription}</p>
                  <p>With a decade of practical market execution experience and partnerships across multiple channels, our team delivers measurable outcomes at scale.</p>
                </div>

                <h3 className="column-title">Service Features</h3>
                
                {service.features && service.features.map((feature: any, index: number) => (
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
                      <Link className="btn btn-box" href="/contact">Contact Us</Link>
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

import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeaturedProductBanner from '../components/FeaturedProductBanner';
import { getServicesArray } from '../../lib/services-data';

export default function Services() {
  const services = getServicesArray();

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
                      <img className="img-fluid" src={`/images/services/catalog/${service.catalogImg}`} alt={service.title} />
                    </div>
                    <div className="ts-service-content">
                      <h3 className="service-title">{service.title}</h3>
                      <p>{service.description}</p>
                      <p><Link className="link-more" href={`/services/${service.slug}`}>Read More <i className="icon icon-right-arrow2"></i></Link></p>
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

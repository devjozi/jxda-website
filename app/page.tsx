import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1>Welcome to JX Distribution Africa</h1>
              <p className="lead">Your trusted logistics partner in Africa</p>
              <a href="#services" className="btn btn-primary">Our Services</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Placeholder */}
      <section className="services-section py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12">
              <h2>Our Services</h2>
              <p>We provide comprehensive logistics solutions</p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="card">
                <img src="/images/icon/service-1.png" className="card-img-top" alt="Service 1" />
                <div className="card-body">
                  <h5 className="card-title">Reliable Services</h5>
                  <p className="card-text">Professional logistics solutions for your business</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="/images/icon/service-2.png" className="card-img-top" alt="Service 2" />
                <div className="card-body">
                  <h5 className="card-title">Global Coverage</h5>
                  <p className="card-text">Extensive network across Africa and beyond</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="/images/icon/service-3.png" className="card-img-top" alt="Service 3" />
                <div className="card-body">
                  <h5 className="card-title">Cost Savings</h5>
                  <p className="card-text">Optimized solutions for better efficiency</p>
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

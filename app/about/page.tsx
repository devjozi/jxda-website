import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Header />

      {/* Banner Area */}
      <div className="banner-area" id="banner-area" style={{backgroundImage: 'url(/images/banner/banner1.jpg)'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col">
              <div className="banner-heading">
                <h1 className="banner-title">About Us</h1>
                <ol className="breadcrumb">
                  <li>Home</li>
                  <li><a href="/about">About Us</a></li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main About Content */}
      <section className="main-container no-padding" id="main-container">
        <div className="about-pattern">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 about-desc">
                <h2 className="column-title"><span>We are</span> Africa's Leading Distribution Company</h2>
                <p className="bold-text">JX Distribution Africa is a registered Ghanaian company focused on sales, marketing, distribution of products and research across Africa, with coverage across all 16 regions of Ghana.</p>
                <p>With 17 years of experience in logistics and distribution, we discover, develop and create relationships between consumers and products across Ghana and Africa. Our team of experienced sales professionals helps brands enter new markets, drive retail sales, and grow distribution with measurable field execution and live reporting.</p>
                <a href="/services" className="top-right-btn btn btn-primary">Our Services</a>
                <a href="/contact" className="top-right-btn btn btn-secondary">Contact Us</a>
              </div>
              <div className="col-lg-6 text-md-center mrt-40">
                <img className="img-fluid" src="/images/pages/work_circle.jpg" alt="JX Distribution Africa Work" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Progress */}
      <section id="tw-service-value" className="tw-service-value bg-offwhite">
        <h2 className="column-title text-center">Company Growth</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-lg-3 text-center">
              <div className="percent-area">
                <div className="chart" data-percent="75">
                  <p className="percent">75%</p>
                </div>
                <p className="column-title">2018</p>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 text-center">
              <div className="percent-area">
                <div className="chart" data-percent="82">
                  <p className="percent">82%</p>
                </div>
                <p className="column-title">2020</p>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 text-center">
              <div className="percent-area">
                <div className="chart" data-percent="89">
                  <p className="percent">89%</p>
                </div>
                <p className="column-title">2022</p>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 text-center">
              <div className="percent-area">
                <div className="chart" data-percent="95">
                  <p className="percent">95%</p>
                </div>
                <p className="column-title">2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section id="ts-features-light" className="ts-features-light">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <h2 className="section-title"><span>Don't Miss a Thing</span>Our Core Values</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 text-center">
              <div className="ts-feature-box">
                <div className="ts-feature-info">
                  <img src="/images/icon/why-1.png" alt="Integrity" />
                  <h3 className="ts-feature-title">Integrity</h3>
                  <p>We uphold strong ethical standards and maintain transparency in all our business relationships and operations.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 text-center">
              <div className="ts-feature-box">
                <div className="ts-feature-info">
                  <img src="/images/icon/why-3.png" alt="Excellence" />
                  <h3 className="ts-feature-title">Excellence</h3>
                  <p>We deliver exceptional service through experienced professionals who are committed to achieving outstanding results for our clients.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 text-center">
              <div className="ts-feature-box">
                <div className="ts-feature-info">
                  <img src="/images/icon/why-2.png" alt="Customer Focus" />
                  <h3 className="ts-feature-title">Customer Focus</h3>
                  <p>Our clients' success is our success. We build lasting partnerships through reliable service and measurable outcomes.</p>
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

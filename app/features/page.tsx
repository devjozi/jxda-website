import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Features — JX Distribution Africa',
  description: 'Platform and service features coming soon.',
};

export default function FeaturesPage() {
  const features = [
    {
      title: 'Nationwide Route Execution',
      desc: 'Structured route-to-market execution across Ghana with performance visibility.',
      image: '/images/services/service1.jpg',
    },
    {
      title: 'Sales Analytics',
      desc: 'Track market coverage, conversion, and productivity through practical reporting.',
      image: '/images/services/service2.jpg',
    },
    {
      title: 'Rapid Fulfillment Coordination',
      desc: 'Operational support for dependable dispatch and delivery coordination.',
      image: '/images/services/service3.jpg',
    },
  ];

  return (
    <>
      <Header />
      <div className="banner-area" style={{ backgroundImage: 'url(/images/banner/banner2.jpg)' }}>
        <div className="container">
          <div className="banner-heading">
            <h1 className="banner-title">Features</h1>
            <ol className="breadcrumb">
              <li><Link href="/">Home</Link></li>
              <li>Features</li>
            </ol>
          </div>
        </div>
      </div>

      <section className="main-container py-5">
        <div className="container">
          <h2 className="mb-3">Feature Highlights</h2>
          <p className="text-muted mb-4">This page is a live placeholder and can be replaced with your final feature copy anytime.</p>
          <div className="row g-4">
            {features.map((item) => (
              <div key={item.title} className="col-md-4">
                <div className="card h-100">
                  <img src={item.image} alt={item.title} className="card-img-top" />
                  <div className="card-body">
                    <h5>{item.title}</h5>
                    <p className="text-muted mb-0">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

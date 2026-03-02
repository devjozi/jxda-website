import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Gallery — JX Distribution Africa',
  description: 'Visual gallery of activities and projects.',
};

const galleryItems = [
  '/images/projects/project1.jpg',
  '/images/projects/project2.jpg',
  '/images/projects/project3.jpg',
  '/images/projects/project4.jpg',
  '/images/projects/project5.jpg',
  '/images/projects/project6.jpg',
];

export default function GalleryPage() {
  return (
    <>
      <Header />
      <div className="banner-area" style={{ backgroundImage: 'url(/images/banner/banner5.jpg)' }}>
        <div className="container">
          <div className="banner-heading">
            <h1 className="banner-title">Gallery</h1>
            <ol className="breadcrumb">
              <li><Link href="/">Home</Link></li>
              <li>Gallery</li>
            </ol>
          </div>
        </div>
      </div>

      <section className="main-container py-5">
        <div className="container">
          <h2 className="mb-3">Activity Gallery</h2>
          <p className="text-muted mb-4">Placeholder gallery page to prevent 404s on legacy links.</p>
          <div className="row g-3">
            {galleryItems.map((src, idx) => (
              <div className="col-6 col-md-4" key={src + idx}>
                <img src={src} alt={`Gallery item ${idx + 1}`} className="img-fluid rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

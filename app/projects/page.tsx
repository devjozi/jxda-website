import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Projects — JX Distribution Africa',
  description: 'Selected execution projects and case snapshots.',
};

const projects = [
  {
    title: 'Retail Penetration Pilot (Placeholder)',
    image: '/images/projects/project1.jpg',
    summary: 'Sample project card for market coverage expansion tracking.',
  },
  {
    title: 'Trade Activation Rollout (Placeholder)',
    image: '/images/projects/project2.jpg',
    summary: 'Sample project card for on-ground activation performance reporting.',
  },
  {
    title: 'Distribution Optimization (Placeholder)',
    image: '/images/projects/project3.jpg',
    summary: 'Sample project card for route and fulfillment optimization results.',
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <div className="banner-area" style={{ backgroundImage: 'url(/images/banner/banner4.jpg)' }}>
        <div className="container">
          <div className="banner-heading">
            <h1 className="banner-title">Projects</h1>
            <ol className="breadcrumb">
              <li><Link href="/">Home</Link></li>
              <li>Projects</li>
            </ol>
          </div>
        </div>
      </div>

      <section className="main-container py-5">
        <div className="container">
          <h2 className="mb-3">Project Snapshots</h2>
          <p className="text-muted mb-4">Placeholder content is active. Replace with approved case studies when ready.</p>
          <div className="row g-4">
            {projects.map((project) => (
              <div className="col-md-4" key={project.title}>
                <div className="card h-100">
                  <img src={project.image} alt={project.title} className="card-img-top" />
                  <div className="card-body">
                    <h5>{project.title}</h5>
                    <p className="text-muted mb-0">{project.summary}</p>
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

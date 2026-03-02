import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'News — JX Distribution Africa',
  description: 'Company updates and market insights.',
};

const posts = [
  {
    slug: 'ghana-route-to-market-playbook',
    title: 'Ghana Route-to-Market Playbook (Placeholder)',
    excerpt: 'How structured route design can improve distribution coverage and conversion outcomes.',
    image: '/images/news/news1.jpg',
  },
  {
    slug: 'activation-campaign-basics',
    title: 'Activation Campaign Basics (Placeholder)',
    excerpt: 'Practical campaign planning and execution tips for measurable demand generation.',
    image: '/images/news/news2.jpg',
  },
];

export default function NewsPage() {
  return (
    <>
      <Header />
      <div className="banner-area" style={{ backgroundImage: 'url(/images/banner/banner3.jpg)' }}>
        <div className="container">
          <div className="banner-heading">
            <h1 className="banner-title">News</h1>
            <ol className="breadcrumb">
              <li><Link href="/">Home</Link></li>
              <li>News</li>
            </ol>
          </div>
        </div>
      </div>

      <section className="main-container py-5">
        <div className="container">
          <h2 className="mb-3">Latest Updates</h2>
          <p className="text-muted mb-4">Placeholder posts are active so this route no longer returns 404.</p>
          <div className="row g-4">
            {posts.map((post) => (
              <div className="col-md-6" key={post.slug}>
                <div className="card h-100">
                  <img src={post.image} alt={post.title} className="card-img-top" />
                  <div className="card-body d-flex flex-column">
                    <h5>{post.title}</h5>
                    <p className="text-muted">{post.excerpt}</p>
                    <Link className="btn btn-outline-primary mt-auto" href={`/news/${post.slug}`}>Read More</Link>
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

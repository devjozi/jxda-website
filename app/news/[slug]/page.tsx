import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const POSTS: Record<string, { title: string; image: string; body: string }> = {
  'ghana-route-to-market-playbook': {
    title: 'Ghana Route-to-Market Playbook (Placeholder)',
    image: '/images/news/news1.jpg',
    body: 'This is a placeholder article body. Replace with approved editorial content and business updates.',
  },
  'activation-campaign-basics': {
    title: 'Activation Campaign Basics (Placeholder)',
    image: '/images/news/news2.jpg',
    body: 'This is a placeholder article body. Replace with approved campaign insights and actual case examples.',
  },
};

export function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }));
}

export default function NewsDetailPage({ params }: { params: { slug: string } }) {
  const post = POSTS[params.slug];
  if (!post) notFound();

  return (
    <>
      <Header />
      <div className="banner-area" style={{ backgroundImage: 'url(/images/banner/banner3.jpg)' }}>
        <div className="container">
          <div className="banner-heading">
            <h1 className="banner-title">{post.title}</h1>
            <ol className="breadcrumb">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/news">News</Link></li>
              <li>{post.title}</li>
            </ol>
          </div>
        </div>
      </div>

      <section className="main-container py-5">
        <div className="container" style={{ maxWidth: '840px' }}>
          <img src={post.image} alt={post.title} className="img-fluid mb-4" />
          <p className="lead">{post.body}</p>
          <p className="text-muted">Content source pending. Share final copy and this page can be updated quickly.</p>
          <Link className="btn btn-outline-primary" href="/news">Back to News</Link>
        </div>
      </section>
      <Footer />
    </>
  );
}

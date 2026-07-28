import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { getArticleBySlug, getRelatedArticles, formatDate } from '../data/blog/index';
import BlogCard from '../components/BlogCard';
import './BlogPost.css';

function stripFrontmatter(text) {
  if (!text.startsWith('---')) return text;
  const end = text.indexOf('---', 3);
  return end === -1 ? text : text.slice(end + 3).trimStart();
}

export default function BlogPost() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!article) return;

    document.title = `${article.title} | After School Sânandrei`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', article.description);
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical)
      canonical.setAttribute('href', `https://www.afterschoolsanandrei.ro/blog/${article.slug}`);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', article.title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', article.description);
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage)
      ogImage.setAttribute('content', `https://www.afterschoolsanandrei.ro${article.image}`);

    setLoading(true);
    fetch(`/blog/${article.slug}.md`)
      .then((res) => res.text())
      .then((text) => {
        setContent(stripFrontmatter(text));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [article]);

  if (!article) return <Navigate to="/blog" replace />;

  const related = getRelatedArticles(slug, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: article.title,
            description: article.description,
            image: `https://www.afterschoolsanandrei.ro${article.image}`,
            datePublished: article.publishDate,
            author: { '@type': 'Organization', name: 'After School Sânandrei' },
            publisher: {
              '@type': 'Organization',
              name: 'After School Sânandrei',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.afterschoolsanandrei.ro/logo-icon.png',
              },
            },
          }),
        }}
      />

      <div className="blog-post-hero">
        <div className="container">
          <div className="blog-post-hero-inner">
            <Link to="/blog" className="blog-post-back">← Înapoi la blog</Link>
            <span className="blog-post-category">{article.category}</span>
            <h1>{article.title}</h1>
            <p className="blog-post-meta">
              {formatDate(article.publishDate)} · {article.readingTimeMinutes} min citire
            </p>
          </div>
        </div>
      </div>

      <section className="blog-post-section">
        <div className="container">
          <div className="blog-post-layout">
            <article className="blog-post-content">
              <img
                src={article.image}
                alt={article.imageAlt}
                className="blog-post-cover"
              />
              <div className="blog-post-body">
                {loading ? (
                  <p className="blog-post-loading">Se încarcă...</p>
                ) : (
                  <ReactMarkdown>{content}</ReactMarkdown>
                )}
              </div>
            </article>

            <aside className="blog-post-sidebar">
              <div className="blog-post-cta-box">
                <span className="section-tag">After School Sânandrei</span>
                <h3>Descoperă programul nostru</h3>
                <p>
                  Tot ce citești în acest blog se întâmplă zilnic la noi. Înscrie-ți
                  copilul și bucurați-vă împreună de serile fără stres.
                </p>
                <Link to="/contact" className="btn btn-primary">
                  Înscrie-ți copilul
                </Link>
                <Link to="/servicii" className="blog-post-cta-link">
                  Descoperă programul →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="blog-related-section">
          <div className="container">
            <h2 className="section-title">Articole recomandate</h2>
            <div className="blog-related-grid">
              {related.map((a) => (
                <BlogCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

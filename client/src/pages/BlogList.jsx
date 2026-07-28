import { useState, useEffect } from 'react';
import { ARTICLES, CATEGORIES } from '../data/blog/index';
import BlogCard from '../components/BlogCard';
import '../pages/About.css';
import './BlogList.css';

export default function BlogList() {
  const [activeCategory, setActiveCategory] = useState('Toate');

  useEffect(() => {
    document.title = 'Blog | After School Sânandrei';
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        'content',
        'Articole despre educație, teme, dezvoltarea copilului și viața la after-school, scrise pentru părinții din Sânandrei și împrejurimi.'
      );
  }, []);

  const filtered =
    activeCategory === 'Toate'
      ? ARTICLES
      : ARTICLES.filter((a) => a.category === activeCategory);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <span className="page-hero-tag">Resurse pentru părinți</span>
            <h1>Blogul nostru</h1>
            <p>
              Sfaturi practice, idei de activități și informații utile despre educația și
              dezvoltarea copilului tău.
            </p>
          </div>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="blog-filters">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`blog-filter-btn${activeCategory === cat ? ' active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="blog-empty">Nu există articole în această categorie încă.</p>
          ) : (
            <div className="blog-grid">
              {filtered.map((article, index) => (
                <BlogCard
                  key={article.slug}
                  article={article}
                  featured={index === 0 && activeCategory === 'Toate'}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

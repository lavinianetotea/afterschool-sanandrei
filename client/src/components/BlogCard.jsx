import { Link } from 'react-router-dom';
import { formatDate } from '../data/blog/index';
import './BlogCard.css';

export default function BlogCard({ article, featured = false }) {
  return (
    <Link
      to={`/blog/${article.slug}`}
      className={`blog-card${featured ? ' blog-card--featured' : ''}`}
    >
      <div className="blog-card-img-wrap">
        <img src={article.image} alt={article.imageAlt} className="blog-card-img" />
        <span className="blog-card-category">{article.category}</span>
      </div>
      <div className="blog-card-body">
        <p className="blog-card-date">
          {formatDate(article.publishDate)} · {article.readingTimeMinutes} min citire
        </p>
        <h3 className="blog-card-title">{article.title}</h3>
        <p className="blog-card-desc">{article.description}</p>
        <span className="blog-card-read">Citește articolul →</span>
      </div>
    </Link>
  );
}

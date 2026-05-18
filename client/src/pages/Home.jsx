import { Link } from 'react-router-dom';
import './Home.css';

const features = [
  { icon: '📚', title: 'Ajutor la teme', desc: 'Cadre didactice calificate îi ajută pe copii să-și finalizeze temele zilnic, la orice materie.', color: 'purple' },
  { icon: '👀', title: 'Supraveghere', desc: 'Program complet după școală într-un mediu sigur, organizat și supravegheat permanent.', color: 'orange' },
  { icon: '🎨', title: 'Activități educative', desc: 'Arte, lectură, logică și proiecte creative adaptate vârstei fiecărui copil.', color: 'cyan' },
  { icon: '🍽️', title: 'Masă de prânz', desc: 'Meniu echilibrat și sănătos pregătit zilnic din ingrediente proaspete.', color: 'green' },
];

const heroCards = [
  { icon: '📚', title: 'Ajutor la teme', desc: 'Zilnic, toate materiile' },
  { icon: '🎨', title: 'Activități', desc: 'Creative & educative' },
  { icon: '🍽️', title: 'Masă de prânz', desc: 'Meniu sănătos zilnic' },
  { icon: '👀', title: 'Supraveghere', desc: 'Program 12:00 – 17:00' },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <div className="hero-tag">🏫 After School Sânandrei</div>
            <h1>Locul unde copiii cresc cu bucurie</h1>
            <p className="hero-desc">
              Supraveghere profesională, ajutor la teme, activități educative
              și masă de prânz — tot ce are nevoie copilul tău după școală.
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary">Înscrie copilul</Link>
              <Link to="/servicii" className="btn btn-outline">Află mai multe</Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-cards-grid">
              {heroCards.map((c) => (
                <div className="hero-mini-card" key={c.title}>
                  <div className="card-icon">{c.icon}</div>
                  <h4>{c.title}</h4>
                  <p>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="stats-bar">
        <div className="container stats-grid">
          <div className="stat-item">
            <h3>50+</h3>
            <p>Copii înscriși</p>
          </div>
          <div className="stat-item">
            <h3>5+</h3>
            <p>Ani de experiență</p>
          </div>
          <div className="stat-item">
            <h3>100%</h3>
            <p>Părinți mulțumiți</p>
          </div>
        </div>
      </div>

      <section className="features-section">
        <div className="container">
          <span className="section-tag">Ce oferim</span>
          <h2 className="section-title">Un program complet<br />pentru copilul tău</h2>
          <p className="section-subtitle">
            Fiecare serviciu este gândit pentru dezvoltarea armonioasă și siguranța copilului.
          </p>
          <div className="features-grid">
            {features.map((f) => (
              <div className="feature-card" key={f.title}>
                <div className={`feature-icon-box ${f.color}`}>{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="cta-section">
            <span className="section-tag" style={{ background: 'rgba(255,255,255,0.2)', color: '#fff' }}>Locuri limitate</span>
            <h2>Gata să înscrii copilul?</h2>
            <p>Contactează-ne astăzi pentru mai multe informații și disponibilitate.</p>
            <Link to="/contact" className="btn btn-primary">Contactează-ne acum</Link>
          </div>
        </div>
      </section>
    </>
  );
}

import './About.css';
import './Gallery.css';

const photos = [
  { icon: '📚', label: 'Ore de teme', large: true },
  { icon: '🎨', label: 'Atelier de desen' },
  { icon: '🍽️', label: 'Masa de prânz' },
  { icon: '🧩', label: 'Jocuri educative' },
  { icon: '🌿', label: 'Activități în aer liber', large: true },
  { icon: '📖', label: 'Lectură' },
  { icon: '✏️', label: 'Exerciții creative' },
  { icon: '🤝', label: 'Lucru în echipă' },
  { icon: '🏃', label: 'Activitate fizică' },
];

export default function Gallery() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <span className="page-hero-tag">Momente din activități</span>
            <h1>Galerie foto</h1>
            <p>O privire în viața de zi cu zi de la After School Sânandrei.</p>
          </div>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="gallery-grid">
            {photos.map((p, i) => (
              <div className={`gallery-item${p.large ? ' large' : ''}`} key={i}>
                {p.icon}
                <div className="gallery-caption">{p.label}</div>
              </div>
            ))}
          </div>
          <p className="gallery-note">
            * Fotografiile reale vor fi adăugate ulterior. Contactează-ne pentru a vizita spațiul nostru.
          </p>
        </div>
      </section>
    </>
  );
}

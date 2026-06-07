import "./About.css";
import "./Gallery.css";

const photos = [
  { img: "/hero-teme.png", label: "Ore de teme" },
  { img: "/hero-engleza.png", label: "Atelier de engleză" },
  { img: "/hero-masa.png", label: "Masă de prânz" },
  { img: "/hero-jocuri.png", label: "Jocuri educative" },
  { img: "/hero-aer-liber.png", label: "Activități în aer liber" },
  { img: "/hero-lectura.png", label: "Lectură" },
  { img: "/hero-creative.png", label: "Exerciții creative" },
  { img: "/hero-echipa.png", label: "Lucru în echipă" },
  { img: "/hero-sport.png", label: "Activitate fizică" },
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
              <div className="gallery-item" key={i}>
                <img src={p.img} alt={p.label} className="gallery-img" />
                <div className="gallery-caption">{p.label}</div>
              </div>
            ))}
          </div>
          <p className="gallery-note">
            * Din toamna anului 2026, după începerea activității, vom publica
            fotografii reale din viața de zi cu zi a After School Sânandrei.
            Până atunci, vă invităm cu drag să ne contactați pentru o vizită și
            pentru a descoperi spațiul pregătit pentru copii.
          </p>
        </div>
      </section>
    </>
  );
}

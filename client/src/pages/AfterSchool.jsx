import { Link } from "react-router-dom";
import "./About.css";
import "./AfterSchool.css";

const afterschool = [
  {
    icon: "📚",
    color: "purple",
    title: "Ajutor la teme",
    img: "/servicii/ajutor-teme.png",
    desc: "Copiii beneficiază de asistență individualizată la teme, cu sprijinul cadrelor noastre calificate.",
    features: [
      "Sprijin la toate materiile",
      "Grup de max 14 copii",
      "Progres raportat părinților",
      "Ritm adaptat fiecărui copil",
    ],
  },
  {
    icon: "👀",
    color: "orange",
    title: "Supraveghere după școală",
    img: "/servicii/supraveghere.png",
    desc: "Un mediu sigur, organizat și supravegheat permanent pentru copiii tăi.",
    features: [
      "Program 12:00 – 17:00",
      "Personal calificat permanent",
      "Spații dedicate jocului",
      "Comunicare zilnică cu părinții",
    ],
  },
  {
    icon: "🎨",
    color: "cyan",
    title: "Activități educative",
    img: "/servicii/activitati-educative.png",
    desc: "Programe creative care stimulează gândirea critică, creativitatea și socializarea.",
    features: [
      "Limba engleză",
      "Lectură și dezvoltarea vocabularului",
      "Ateliere de creație și lucru manual",
      "Jocuri de logică, atenție și memorie",
      "Activități tematice sezoniere",
    ],
  },
  {
    icon: "🍽️",
    color: "green",
    title: "Masă de prânz",
    img: "/servicii/masa-pranz.jpg",
    desc: "Masă caldă furnizată de un serviciu de catering, atent selectat pentru a oferi copiilor preparate gustoase și potrivite vârstei lor.",
    features: [
      "Meniu diversificat săptămânal",
      "Masă caldă servită zilnic",
      "Preparate adaptate copiilor",
      "Catering autorizat",
    ],
  },
];

const schedule = [
  ["12:00 – 13:00", "Sosire, masă de prânz și relaxare după școală"],
  [
    "13:00 – 15:30",
    "Timp dedicat temelor și consolidării cunoștințelor (cu pauze intermediare)",
  ],
  ["15:30 – 16:00", "Pauză, gustare și socializare"],
  [
    "16:00 – 16:45",
    "Activități educative (engleză, lectură, ateliere creative, jocuri de logică)",
  ],
  ["16:45 – 17:00", "Activități recreative și preluarea copiilor"],
];

export default function AfterSchool() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <span className="page-hero-tag">Program after-school</span>
            <h1>Serviciile noastre</h1>
            <p>
              Tot ce are nevoie copilul tău într-un singur loc, într-un mediu
              sigur și profesionist.
            </p>
          </div>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="afterschool-grid">
            {afterschool.map((s) => (
              <div className="service-card" key={s.title}>
                {s.img && (
                  <img src={s.img} alt={s.title} className="service-card-img" />
                )}
                <div className="service-card-body">
                  <div className="service-card-top">
                    <h3>{s.title}</h3>
                  </div>
                  <p>{s.desc}</p>
                  <ul className="service-features">
                    {s.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="schedule-section">
        <div className="container">
          <span className="section-tag">Organizare</span>
          <h2 className="section-title">Programul zilnic</h2>
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Interval orar</th>
                <th>Activitate</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map(([time, activity]) => (
                <tr key={time}>
                  <td>
                    <strong>{time}</strong>
                  </td>
                  <td>{activity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="pricing-section">
        <div className="container">
          <span className="section-tag">Tarife</span>
          <h2 className="section-title">Cât costă?</h2>
          <div className="pricing-card">
            <div className="pricing-price">
              <span className="pricing-amount">1200</span>
              <div className="pricing-suffix">
                <span className="pricing-currency">RON</span>
                <span className="pricing-period">/ lună</span>
              </div>
            </div>
            <ul className="pricing-includes">
              <li>Ajutor la teme, sprijin la toate materiile</li>
              <li>Engleză de două ori pe săptămână</li>
              <li>Feedback lunar pentru părinți</li>
              <li>Materiale de studiu incluse</li>
            </ul>
            <ul className="pricing-notes">
              <li>
                Abonamentul lunar de bază (1200 ron) se achită integral,
                indiferent de numărul absențelor copilului.
              </li>
              <li>
                Taxa de masă se achită suplimentar doar pentru zilele în care
                copilul este prezent.
              </li>
              <li>
                În vacanțele școlare, programul este extins 08:00–17:00, cu o
                contribuție suplimentară de 50 RON/zi.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="cta-section">
            <span
              className="section-tag"
              style={{ background: "rgba(255,255,255,0.2)", color: "#fff" }}
            >
              Locuri limitate
            </span>
            <h2>Gata să înscrii copilul?</h2>
            <p>
              Contactează-ne astăzi pentru mai multe informații și
              disponibilitate.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Contactează-ne acum
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

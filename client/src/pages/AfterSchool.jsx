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
            <span className="page-hero-tag">Serviciile noastre</span>
            <h1>After-school</h1>
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
          <div className="pricing-layout">

            {/* Hero card Back to School */}
            <div className="bts-card">
              <div className="bts-badge">✦ Back to School</div>

              <div className="bts-price-block">
                <span className="pricing-amount">1.100</span>
              </div>
              <div className="bts-unit">
                lei&nbsp;<span className="bts-slash">/</span>&nbsp;<span className="bts-luna">lună</span>
              </div>

              <div className="bts-regular-price">
                Preț obișnuit:&nbsp;<span>1.200 lei/lună</span>
              </div>

              <hr className="bts-divider" />

              <div className="bts-deadline-block">
                <div className="bts-calendar-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="4" width="18" height="17" rx="3" stroke="currentColor" strokeWidth="2"/>
                    <path d="M3 9h18" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 2v4M16 2v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M8 14l2.5 2.5L16 11" stroke="#e91e8c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="bts-deadline-text">
                  Preț valabil pe tot parcursul anului școlar{" "}
                  <strong>2026–2027</strong> pentru înscrierile realizate până în
                </p>
              </div>

              <div className="bts-date-pill">
                <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                </svg>
                8 septembrie
              </div>
            </div>

            {/* Detalii abonament */}
            <div className="pricing-details">
              <div className="pricing-includes-card">
                <h3 className="pricing-details-title">Ce include abonamentul</h3>
                <ul className="pricing-includes">
                  <li>Ajutor la teme, sprijin la toate materiile</li>
                  <li>Engleză de două ori pe săptămână</li>
                  <li>Feedback lunar pentru părinți</li>
                  <li>Materiale de studiu incluse</li>
                </ul>
              </div>
              <div className="pricing-notes-card">
                <h3 className="pricing-details-title">De știut</h3>
                <ul className="pricing-notes">
                  <li>
                    Abonamentul lunar de bază se achită integral,
                    indiferent de numărul absențelor copilului.
                  </li>
                  <li>
                    Taxa de masă (20 lei/zi) se achită suplimentar doar pentru zilele în care
                    copilul este prezent.
                  </li>
                  <li>
                    Reducere de 10% pentru frați înscriși simultan.
                  </li>
                  <li>
                    În vacanțele școlare, programul este extins 08:00–17:00, cu o
                    contribuție suplimentară de 50 lei/zi.
                  </li>
                </ul>
              </div>
            </div>

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

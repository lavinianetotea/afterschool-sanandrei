import { Link } from "react-router-dom";
import "./About.css";
import "./Services.css";

const services = [
  {
    icon: "📚",
    color: "purple",
    title: "Ajutor la teme",
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

export default function Services() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <span className="page-hero-tag">Ce oferim</span>
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
          <div className="services-grid">
            {services.map((s) => (
              <div className="service-card" key={s.title}>
                <div className="service-card-top">
                  <div className={`service-icon-box ${s.color}`}>{s.icon}</div>
                  <h3>{s.title}</h3>
                </div>
                <p>{s.desc}</p>
                <ul className="service-features">
                  {s.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="schedule-section">
        <div className="container">
          <span className="section-tag">Zi tipică</span>
          <h2 className="section-title">Programul zilnic</h2>
          <p className="section-subtitle">
            O zi obișnuită la After School Sânandrei.
          </p>
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

      <section style={{ textAlign: "center" }}>
        <div className="container">
          <span className="section-tag">Înscrie-te acum</span>
          <h2 className="section-title">Locuri limitate disponibile</h2>
          <p className="section-subtitle" style={{ margin: "0 auto 2rem" }}>
            Nu rata oportunitatea. Contactează-ne astăzi.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Contactează-ne
          </Link>
        </div>
      </section>
    </>
  );
}

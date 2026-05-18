import { Link } from 'react-router-dom';
import './About.css';
import './Services.css';

const services = [
  { icon: '📚', color: 'purple', title: 'Ajutor la teme', desc: 'Copiii beneficiază de asistență individualizată la teme, cu sprijinul cadrelor noastre calificate.', features: ['Sprijin la toate materiile', 'Grupuri mici (max 8 copii)', 'Progres raportat părinților', 'Ritm adaptat fiecărui copil'] },
  { icon: '👀', color: 'orange', title: 'Supraveghere după școală', desc: 'Un mediu sigur, organizat și supravegheat permanent pentru copiii tăi.', features: ['Program 12:00 – 17:00', 'Personal calificat permanent', 'Spații dedicate jocului', 'Comunicare zilnică cu părinții'] },
  { icon: '🎨', color: 'cyan', title: 'Activități educative', desc: 'Programe creative care stimulează gândirea critică, creativitatea și socializarea.', features: ['Ateliere de artă și desen', 'Lectură și povestiri', 'Jocuri logice și educative', 'Activități tematice sezoniere'] },
  { icon: '🍽️', color: 'green', title: 'Masă de prânz', desc: 'Meniu echilibrat, sănătos și gustos, pregătit zilnic din ingrediente proaspete.', features: ['Meniu diversificat săptămânal', 'Preparate adaptate vârstei', 'Fără alimente procesate', 'Opțiuni pentru alergii'] },
];

const schedule = [
  ['12:00 – 13:00', 'Sosire și masă de prânz'],
  ['13:00 – 14:00', 'Repaus / activitate liberă'],
  ['14:00 – 15:30', 'Ajutor la teme'],
  ['15:30 – 16:00', 'Gustare'],
  ['16:00 – 17:00', 'Activități educative'],
  ['17:00 – 17:30', 'Timp liber / preluare de către părinți'],
];

export default function Services() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <span className="page-hero-tag">Ce oferim</span>
            <h1>Serviciile noastre</h1>
            <p>Tot ce are nevoie copilul tău într-un singur loc, într-un mediu sigur și profesionist.</p>
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
                  {s.features.map((f) => <li key={f}>{f}</li>)}
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
          <p className="section-subtitle">O zi obișnuită la After School Sânandrei.</p>
          <table className="schedule-table">
            <thead>
              <tr><th>Interval orar</th><th>Activitate</th></tr>
            </thead>
            <tbody>
              {schedule.map(([time, activity]) => (
                <tr key={time}>
                  <td><strong>{time}</strong></td>
                  <td>{activity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section style={{ textAlign: 'center' }}>
        <div className="container">
          <span className="section-tag">Înscrie-te acum</span>
          <h2 className="section-title">Locuri limitate disponibile</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 2rem' }}>Nu rata oportunitatea. Contactează-ne astăzi.</p>
          <Link to="/contact" className="btn btn-primary">Contactează-ne</Link>
        </div>
      </section>
    </>
  );
}

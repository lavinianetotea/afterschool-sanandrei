import "./About.css";

const values = [
  {
    icon: "❤️",
    title: "Grijă",
    desc: "Fiecare copil este tratat cu dragoste și atenție individualizată.",
  },
  {
    icon: "📖",
    title: "Educație",
    desc: "Stimulăm curiozitatea și dorința de a învăța zilnic.",
  },
  {
    icon: "🤝",
    title: "Comunitate",
    desc: "Construim relații solide de încredere cu părinții.",
  },
];

const team = [
  {
    name: "Maria Ionescu",
    role: "Director",
    desc: "Experiență de peste 10 ani în educația timpurie.",
    icon: "👩‍🏫",
  },
  {
    name: "Ana Popescu",
    role: "Educator",
    desc: "Specializată în activități creative și educaționale.",
    icon: "👩‍🎨",
  },
  {
    name: "Ion Mureșan",
    role: "Coordonator",
    desc: "Responsabil cu programul și comunicarea cu părinții.",
    icon: "👨‍💼",
  },
];

export default function About() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <span className="page-hero-tag">Povestea noastră</span>
            <h1>Despre noi</h1>
            <p>
              Cunoaște echipa și valorile care stau la baza After School
              Sânandrei.
            </p>
          </div>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="about-grid">
            <div className="about-visual">🏡</div>
            <div className="about-content">
              <span className="section-tag">Misiunea noastră</span>
              <h2>Un loc sigur pentru copilul tău</h2>
              <p>
                After School Sânandrei a luat naștere din dorința de a oferi
                copiilor din comunitatea noastră un loc sigur, prietenos și
                organizat, unde să își facă temele, să învețe lucruri noi, să
                lege prietenii și să se dezvolte armonios.
              </p>
              <p>
                {" "}
                Suntem o familie din Sânandrei, pasionată de educație și
                tehnologie. În familia noastră, educația a avut întotdeauna un
                rol important. Bunica este învățătoare în învățământul primar,
                cu peste 40 de ani de experiență la catedră, iar valorile pe
                care le-a transmis generațiilor de copii ne inspiră să construim
                un mediu în care fiecare copil să se simtă apreciat, încurajat
                și sprijinit.
              </p>
              <p>
                Ne dorim ca atunci când părinții ajung acasă după o zi de muncă,
                să își poată petrece timpul cu copiii lor fără stresul temelor
                neterminate, știind că aceștia au avut o zi frumoasă, productivă
                și petrecută în siguranță.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <span className="section-tag">Ce ne ghidează</span>
          <h2 className="section-title">Valorile noastre</h2>
          <div className="values-grid">
            {values.map((v) => (
              <div className="value-card" key={v.title}>
                <span className="value-icon">{v.icon}</span>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <span className="section-tag">Oamenii noștri</span>
          <h2 className="section-title">Echipa noastră</h2>
          <p className="section-subtitle">
            Profesioniști dedicați bunăstării și dezvoltării copiilor tăi.
          </p>
          <div className="team-grid">
            {team.map((m) => (
              <div className="team-card" key={m.name}>
                <div className="team-avatar">{m.icon}</div>
                <h3>{m.name}</h3>
                <span className="role">{m.role}</span>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import { Link } from "react-router-dom";
import "./Home.css";

const features = [
  {
    img: "/servicii/ajutor-teme.png",
    title: "Ajutor la teme",
    desc: "Cadre didactice calificate îi ajută pe copii să-și finalizeze temele zilnic, la orice materie.",
  },
  {
    img: "/servicii/supraveghere.png",
    title: "Supraveghere",
    desc: "Program complet după școală într-un mediu sigur, organizat și supravegheat permanent.",
  },
  {
    img: "/servicii/activitati-educative.png",
    title: "Activități educative",
    desc: "Învățarea continuă și după terminarea temelor, prin activități de engleză, lectură, creație și dezvoltare a gândirii logice.",
  },
  {
    img: "/servicii/masa-pranz.jpg",
    title: "Masă de prânz",
    desc: "Meniu echilibrat și sănătos pregătit zilnic din ingrediente proaspete.",
  },
];

const testimonials = [
  {
    text: "Doamna Netotea Adriana este un cadru didactic foarte bine pregătit, ani de experiență, dedicare, un pedagog deosebit. Nu am cuvinte pentru câte calități de cadru didactic profesionist are doamna Adriana. O recomand cu toată încrederea. Ce trece pe la doamna iese copii pregătiți. Încercați și sunt convinsă că nu veți regreta!",
    author: "Rusalina N.",
  },
  {
    text: "Copiii care vor avea șansa să învețe alături de doamna Netotea Adriana sunt cu adevărat binecuvântați. Mulți dintre foștii săi elevi au devenit astăzi medici, ingineri și profesioniști de succes. Îi mulțumesc lui Dumnezeu că băiatul nostru a avut parte de o educație aleasă sub îndrumarea dumneaei. Este un cadru didactic dedicat, atent la nevoile fiecărui copil și implicat cu sufletul în tot ceea ce face. Vă mulțumim pentru tot ce ați făcut și continuați să faceți pentru copii!",
    author: "Cosmin P.",
  },
  {
    text: "Ce mă bucur că se întâmplă în Sânandrei! Din păcate prea târziu pentru copiii mei care trec în cls. a VI-a, dar valoros pentru alții mai mici ca ei.",
    author: "Cristina H.",
  },
  {
    text: "Doamna Adriana Netotea este un cadru didactic de excepție cum rar mai întâlnești.",
    author: "Rodica B.",
  },
  {
    text: "O recomand pe Dna înv. Adriana Netotea. O doamnă învățătoare deosebită!",
    author: "Simona D.",
  },
  {
    text: "Recomand, este foarte responsabilă, dedicată și empatică.",
    author: "Ana T.",
  },
  {
    text: "Doamna Aurora Ispas aduce cu ea o experiență de peste 40 de ani la catedră. Copilul meu a simțit imediat că este pe mâini bune: răbdare, metodă și multă căldură. O recomand din toată inima.",
    author: "Ioana M.",
  },
  {
    text: "Ce frumos că la After School Sânandrei predă doamna Aurora Ispas. Când ai un dascăl cu 40 de ani de experiență lângă copilul tău, liniștea ca părinte vine de la sine.",
    author: "Bogdan S.",
  },
  {
    text: "Doamna Aurora Ispas știe exact cum să explice o lecție dificilă astfel încât copilul să înțeleagă și să rețină. Experiența ei se vede în fiecare interacțiune cu copiii.",
    author: "Mihaela C.",
  },
  {
    text: "Fiica mea venea acasă și ne povestea cu entuziasm ce a învățat la clasǎ. Doamna Aurora are darul de a face lecțiile interesante, chiar și pentru copiii care nu prea au răbdare să stea la teme.",
    author: "Roxana P.",
  },
];

const heroCards = [
  {
    img: "/hero/hero-teme.png",
    title: "Ajutor la teme",
    desc: "Zilnic, toate materiile",
  },
  {
    img: "/hero/hero-engleza.png",
    title: "Cursuri de engleză",
    desc: "Învățare interactivă",
  },
  {
    img: "/hero/hero-masa.png",
    title: "Masă de prânz",
    desc: "Meniu sănătos zilnic",
  },
  {
    img: "/hero/hero-supraveghere.png",
    title: "Supraveghere",
    desc: "Program 12:00 – 17:00",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <h1>Locul unde copiii cresc cu bucurie</h1>
            <p className="hero-desc">
              Supraveghere profesională, ajutor la teme, activități educative și
              masă de prânz. Tot ce are nevoie copilul tău după școală.
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary">
                Înscrie copilul
              </Link>
              <Link to="/servicii" className="btn btn-outline">
                Află mai multe
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-cards-grid">
              {heroCards.map((c) => (
                <div className="hero-mini-card" key={c.title}>
                  <img
                    src={c.img}
                    alt={c.title}
                    className="hero-mini-card-icon"
                  />
                  <div className="hero-mini-card-content">
                    <h4>{c.title}</h4>
                    <p>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/*<div className="stats-bar">*/}
      {/*  <div className="container stats-grid">*/}
      {/*    <div className="stat-item">*/}
      {/*      <h3>50+</h3>*/}
      {/*      <p>Copii înscriși</p>*/}
      {/*    </div>*/}
      {/*    <div className="stat-item">*/}
      {/*      <h3>5+</h3>*/}
      {/*      <p>Ani de experiență</p>*/}
      {/*    </div>*/}
      {/*    <div className="stat-item">*/}
      {/*      <h3>100%</h3>*/}
      {/*      <p>Părinți mulțumiți</p>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}

      <section className="features-section">
        <div className="container">
          <span className="section-tag">Ce oferim</span>
          <h2 className="section-title">
            Un program complet pentru copilul tău
          </h2>
          <p className="section-subtitle">
            Fiecare serviciu este gândit pentru dezvoltarea armonioasă și
            siguranța copilului.
          </p>
          <div className="features-grid">
            {features.map((f) => (
              <div className="feature-card" key={f.title}>
                <img src={f.img} alt={f.title} className="feature-card-img" />
                <div className="feature-card-body">
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <span className="section-tag">Ce spun părinții</span>
          <h2 className="section-title">Testimoniale</h2>
          <div className="testimonials-grid">
            {testimonials.map((t) => (
              <div className="testimonial-card" key={t.author}>
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-text">„{t.text}"</p>
                <span className="testimonial-author">{t.author}</span>
              </div>
            ))}
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

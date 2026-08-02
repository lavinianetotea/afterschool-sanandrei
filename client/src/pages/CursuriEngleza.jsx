import { useState } from "react";
import { Link } from "react-router-dom";
import "./About.css";
import "./AfterSchool.css";
import "./CursuriEngleza.css";
import EnrollModal from "../components/EnrollModal";

const plans = [
  {
    title: "1 ședință pe săptămână",
    price: "180",
    features: ["4 ședințe/lună", "Grupă de maximum 8 copii"],
  },
  {
    title: "2 ședințe pe săptămână",
    price: "350",
    features: ["8 ședințe/lună", "Grupă de maximum 8 copii"],
    highlighted: true,
  },
];

const reasons = [
  "Profesorul poate acorda atenție fiecărui copil.",
  "Copiii au mai multe oportunități de a vorbi în limba engleză.",
  "Atmosferă prietenoasă și interactivă.",
  "Învățare prin joc, conversație și activități adaptate vârstei.",
];

export default function CursuriEngleza() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <>
      {selectedPlan && (
        <EnrollModal plan={selectedPlan} onClose={() => setSelectedPlan(null)} />
      )}
      <div className="page-hero engleza-hero">
        <div className="container">
          <div className="page-hero-inner">
            <span className="page-hero-tag">Grupe de maximum 8 copii</span>
            <h1>Cursuri de Limba Engleză</h1>
            <p>
              Grupele vor fi organizate în funcție de vârstă și nivelul de
              cunoștințe, în urma unei scurte evaluări inițiale. Nu punem copiii
              la întâmplare într-o grupă, ci alegem mediul în care pot progresa
              cel mai bine.
            </p>
          </div>
        </div>
      </div>

      <section>
        <div className="container">
          <span className="section-tag">Avantaje</span>
          <h2 className="section-title">De ce grupe mici?</h2>
          <ul className="engleza-reasons">
            {reasons.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="engleza-calendar-section">
        <div className="container">
          <span className="section-tag">Calendar & Orar</span>
          <h2 className="section-title">Când încep cursurile?</h2>
          <div className="engleza-info-cards">
            <div className="engleza-info-card">
              <h3>Start: septembrie 2026</h3>
              <p>
                Cursurile încep odată cu noul an școlar, după{" "}
                <strong>7 septembrie 2026</strong>. Înscrierile sunt deschise
                acum.
              </p>
            </div>
            <div className="engleza-info-card">
              <h3>Orarul se stabilește împreună</h3>
              <p>
                Zilele și orele vor fi alese după formarea grupelor, în funcție
                de disponibilitatea copiilor înscriși. Vrem să găsim un orar
                potrivit pentru toată lumea.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-section">
        <div className="container">
          <div className="engleza-section-split">
            <div>
              <span className="section-tag">Tarife</span>
              <h2 className="section-title">Abonamente</h2>
              <p className="engleza-subtitle">
                Alege abonamentul care se potrivește cel mai bine nevoilor
                copilului tău.
              </p>
            </div>
          </div>

          <div className="engleza-plans">
            {plans.map((p) => (
              <div
                key={p.title}
                className={`engleza-plan-card${p.highlighted ? " highlighted" : ""}`}
              >
                {p.highlighted && (
                  <div className="engleza-plan-badge">★ Recomandat</div>
                )}
                <h3>{p.title}</h3>
                <div className="engleza-plan-price">
                  <span className="pricing-amount">{p.price}</span>
                  <div className="pricing-suffix">
                    <span className="pricing-currency">RON</span>
                    <span className="pricing-period">/ lună</span>
                  </div>
                </div>
                <hr className="engleza-plan-divider" />
                <ul className="pricing-includes">
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <hr className="engleza-plan-divider" />
                <div className="engleza-plan-sibling">
                  <span className="engleza-plan-sibling-label">
                    Reducere pentru frați (la abonamentul celui de-al doilea
                    copil)
                  </span>
                  <span className="engleza-plan-sibling-discount">-10%</span>
                </div>
                <button
                  onClick={() => setSelectedPlan(p.title)}
                  className={`engleza-plan-btn${p.highlighted ? " engleza-plan-btn-primary" : ""}`}
                >
                  Selectați
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

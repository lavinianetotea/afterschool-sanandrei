export default function CursuriEngleza() {
  return (
    <>
      <section style={{ background: 'var(--primary)', padding: '5rem 0 4rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-tag" style={{ background: 'rgba(255,255,255,0.15)', color: 'var(--white)' }}>
            After School Sânandrei
          </span>
          <h1
            className="section-title"
            style={{ color: 'var(--white)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginTop: '1rem' }}
          >
            Cursuri de engleză
          </h1>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.8)', maxWidth: 520, margin: '1.25rem auto 0' }}>
            Pregătim această secțiune. Revino în curând pentru mai multe detalii despre cursurile noastre de engleză pentru copii.
          </p>
        </div>
      </section>
    </>
  );
}

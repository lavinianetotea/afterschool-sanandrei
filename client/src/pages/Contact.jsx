import { useState } from 'react';
import './About.css';
import './Contact.css';

const initialForm = {
  parentName: '',
  childName: '',
  phone: '',
  email: '',
  childAge: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errors, setErrors] = useState({});

  function validate() {
    const e = {};
    if (!form.parentName.trim()) e.parentName = 'Câmp obligatoriu';
    if (!form.childName.trim()) e.childName = 'Câmp obligatoriu';
    if (!form.phone.trim()) e.phone = 'Câmp obligatoriu';
    if (!form.email.trim()) e.email = 'Câmp obligatoriu';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Email invalid';
    return e;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus('loading');
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      setForm(initialForm);
    } catch {
      setStatus('error');
    }
  }

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Contact & Înscriere</h1>
          <p>Trimite-ne un mesaj și te contactăm în cel mai scurt timp.</p>
        </div>
      </div>

      <section>
        <div className="container contact-grid">
          <div className="contact-info">
            <h2>Informații de contact</h2>

            <div className="contact-detail">
              <div className="contact-detail-icon">📍</div>
              <div>
                <h4>Adresă</h4>
                <p>Sânandrei, județul Timiș</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail-icon">📞</div>
              <div>
                <h4>Telefon</h4>
                <p>+40 761 778 734</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail-icon">✉️</div>
              <div>
                <h4>Email</h4>
                <p>afterschoolsanandrei@gmail.com</p>
              </div>
            </div>

            <div className="contact-hours">
              <h4>Program</h4>
              <div className="hours-row"><span>Luni – Vineri</span><span>12:00 – 17:00</span></div>
              <div className="hours-row"><span>Sâmbătă</span><span>Închis</span></div>
              <div className="hours-row"><span>Duminică</span><span>Închis</span></div>
            </div>
          </div>

          <div className="contact-form-card">
            {status === 'success' ? (
              <div className="form-success">
                <h3>✅ Mesaj trimis cu succes!</h3>
                <p>Îți mulțumim! Te vom contacta în cel mai scurt timp.</p>
              </div>
            ) : (
              <>
                <h2>Formular de înscriere</h2>
                <p>Completează datele de mai jos și te contactăm noi.</p>

                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="parentName">Nume părinte *</label>
                      <input
                        id="parentName"
                        name="parentName"
                        value={form.parentName}
                        onChange={handleChange}
                        placeholder="Ionescu Maria"
                      />
                      {errors.parentName && <p className="form-error">{errors.parentName}</p>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="childName">Nume copil *</label>
                      <input
                        id="childName"
                        name="childName"
                        value={form.childName}
                        onChange={handleChange}
                        placeholder="Ionescu Andrei"
                      />
                      {errors.childName && <p className="form-error">{errors.childName}</p>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Telefon *</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+40 700 000 000"
                      />
                      {errors.phone && <p className="form-error">{errors.phone}</p>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="parinte@email.com"
                      />
                      {errors.email && <p className="form-error">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="childAge">Vârsta copilului</label>
                    <select id="childAge" name="childAge" value={form.childAge} onChange={handleChange}>
                      <option value="">Selectează...</option>
                      {[6,7,8,9,10,11,12].map(a => (
                        <option key={a} value={a}>{a} ani</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Mesaj / Întrebări</label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Scrie-ne orice întrebare ai..."
                    />
                  </div>

                  {status === 'error' && (
                    <p className="form-error" style={{ marginBottom: '1rem' }}>
                      A apărut o eroare. Te rugăm să încerci din nou sau să ne contactezi telefonic.
                    </p>
                  )}

                  <button
                    type="submit"
                    className="btn btn-primary form-submit"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? 'Se trimite...' : 'Trimite mesajul'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

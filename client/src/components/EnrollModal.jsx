import { useState, useEffect } from "react";
import "./EnrollModal.css";

export default function EnrollModal({ plan, onClose }) {
  const [form, setForm] = useState({
    parentName: "", childName: "", childAge: "", phone: "", email: "", message: "",
  });
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, plan }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        {status === "success" ? (
          <div className="modal-success">
            <div className="modal-success-icon">✓</div>
            <h3>Cerere trimisă!</h3>
            <p>Te vom contacta în curând pentru a confirma înscrierea.</p>
            <button className="btn btn-primary" onClick={onClose}>Închide</button>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <span className="modal-plan-tag">{plan}</span>
              <h2>Înscrie copilul</h2>
              <p>Completează datele de contact și te vom contacta pentru confirmare.</p>
            </div>

            <form className="modal-form" onSubmit={handleSubmit}>
              <div className="modal-row">
                <div className="modal-field">
                  <label>Nume părinte *</label>
                  <input name="parentName" value={form.parentName} onChange={handleChange} required placeholder="Ionescu Maria" />
                </div>
                <div className="modal-field">
                  <label>Nume copil *</label>
                  <input name="childName" value={form.childName} onChange={handleChange} required placeholder="Ionescu Andrei" />
                </div>
              </div>
              <div className="modal-row">
                <div className="modal-field">
                  <label>Telefon *</label>
                  <input name="phone" value={form.phone} onChange={handleChange} required placeholder="+40 700 000 000" />
                </div>
                <div className="modal-field">
                  <label>Vârsta copilului</label>
                  <input name="childAge" value={form.childAge} onChange={handleChange} placeholder="ex. 8 ani" />
                </div>
              </div>
              <div className="modal-field">
                <label>Email *</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="parinte@email.com" />
              </div>
              <div className="modal-field">
                <label>Mesaj (opțional)</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={3} placeholder="Orice detalii suplimentare..." />
              </div>

              {status === "error" && (
                <p className="modal-error">A apărut o eroare. Încearcă din nou.</p>
              )}

              <button type="submit" className="btn btn-primary modal-submit" disabled={status === "loading"}>
                {status === "loading" ? "Se trimite..." : "Trimite cererea"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

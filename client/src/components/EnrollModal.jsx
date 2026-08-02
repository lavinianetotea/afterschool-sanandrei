import { useState, useEffect } from "react";
import "./EnrollModal.css";

const FIELDS = {
  parentName: "Numele părintelui este obligatoriu.",
  childName: "Numele copilului este obligatoriu.",
  phone: "Numărul de telefon este obligatoriu.",
  childAge: "Vârsta copilului este obligatorie.",
  email: "Adresa de email este obligatorie.",
};

export default function EnrollModal({ plan, onClose }) {
  const [form, setForm] = useState({
    parentName: "", childName: "", childAge: "", phone: "", email: "", message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((err) => ({ ...err, [name]: null }));
  }

  function validate() {
    const newErrors = {};
    for (const [field, msg] of Object.entries(FIELDS)) {
      if (!form[field].trim()) newErrors[field] = msg;
    }
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Adresa de email nu este validă.";
    }
    return newErrors;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/contact`, {
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

            <form className="modal-form" onSubmit={handleSubmit} noValidate>
              <div className="modal-row">
                <div className="modal-field">
                  <label>Nume părinte *</label>
                  <input name="parentName" value={form.parentName} onChange={handleChange} placeholder="Ionescu Maria" className={errors.parentName ? "input-error" : ""} />
                  {errors.parentName && <span className="modal-field-error">{errors.parentName}</span>}
                </div>
                <div className="modal-field">
                  <label>Nume copil *</label>
                  <input name="childName" value={form.childName} onChange={handleChange} placeholder="Ionescu Andrei" className={errors.childName ? "input-error" : ""} />
                  {errors.childName && <span className="modal-field-error">{errors.childName}</span>}
                </div>
              </div>
              <div className="modal-row">
                <div className="modal-field">
                  <label>Telefon *</label>
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="+40 700 000 000" className={errors.phone ? "input-error" : ""} />
                  {errors.phone && <span className="modal-field-error">{errors.phone}</span>}
                </div>
                <div className="modal-field">
                  <label>Vârsta copilului *</label>
                  <input name="childAge" value={form.childAge} onChange={handleChange} placeholder="ex. 8 ani" className={errors.childAge ? "input-error" : ""} />
                  {errors.childAge && <span className="modal-field-error">{errors.childAge}</span>}
                </div>
              </div>
              <div className="modal-field">
                <label>Email *</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="parinte@email.com" className={errors.email ? "input-error" : ""} />
                {errors.email && <span className="modal-field-error">{errors.email}</span>}
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

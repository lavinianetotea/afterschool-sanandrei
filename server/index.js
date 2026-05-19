require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');

const app = express();
const PORT = process.env.PORT || 5001;
const resend = new Resend(process.env.RESEND_API_KEY);

const allowedOrigins = [
  'http://localhost:3000',
  'https://afterschoolsanandrei.ro',
  'https://www.afterschoolsanandrei.ro',
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.some(o => origin.startsWith(o))) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
}));
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { parentName, childName, phone, email, childAge, message } = req.body;

  if (!parentName || !childName || !phone || !email) {
    return res.status(400).json({ error: 'Câmpuri obligatorii lipsă.' });
  }

  try {
    await resend.emails.send({
      from: 'After School Sânandrei <onboarding@resend.dev>',
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `Cerere înscriere – ${childName}`,
      html: `
        <h2>Cerere nouă de înscriere</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;border:1px solid #e2e8f0"><strong>Nume părinte</strong></td><td style="padding:8px;border:1px solid #e2e8f0">${parentName}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e2e8f0"><strong>Nume copil</strong></td><td style="padding:8px;border:1px solid #e2e8f0">${childName}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e2e8f0"><strong>Vârsta copilului</strong></td><td style="padding:8px;border:1px solid #e2e8f0">${childAge || 'Nespecificat'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e2e8f0"><strong>Telefon</strong></td><td style="padding:8px;border:1px solid #e2e8f0">${phone}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e2e8f0"><strong>Email</strong></td><td style="padding:8px;border:1px solid #e2e8f0">${email}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e2e8f0"><strong>Mesaj</strong></td><td style="padding:8px;border:1px solid #e2e8f0">${message || '—'}</td></tr>
        </table>
      `,
    });
    res.json({ ok: true });
  } catch (err) {
    console.error('Email error:', err.message);
    res.status(500).json({ error: 'Eroare la trimiterea emailului.' });
  }
});

app.get('/api/health', (_req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

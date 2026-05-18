import { Link } from 'react-router-dom';
import './Layout.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              After School <span>Sânandrei</span>
            </div>
            <p>
              Un mediu sigur și stimulativ pentru copiii tăi după orele de
              școală. Supraveghere, teme, activități educative și masă de prânz.
            </p>
          </div>

          <div>
            <h4>Navigare</h4>
            <ul>
              {[
                ['/', 'Acasă'],
                ['/despre-noi', 'Despre noi'],
                ['/servicii', 'Servicii'],
                ['/galerie', 'Galerie'],
                ['/contact', 'Contact'],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <p>📍 Sânandrei, Timiș</p>
            <p>📞 +40 761 778 734</p>
            <p>✉️ afterschoolsanandrei@gmail.com</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} After School Sânandrei. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
}

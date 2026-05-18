import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Layout.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-logo">
          After School <span>Sânandrei</span>
        </Link>

        <ul className={`navbar-links${open ? ' open' : ''}`}>
          {[
            ['/', 'Acasă'],
            ['/despre-noi', 'Despre noi'],
            ['/servicii', 'Servicii'],
            ['/galerie', 'Galerie'],
            ['/contact', 'Contact'],
          ].map(([to, label]) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link to="/contact" className="btn btn-primary navbar-cta">
          Înscrie-te
        </Link>

        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Meniu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}

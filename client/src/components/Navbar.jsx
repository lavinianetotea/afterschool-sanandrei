import { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './Layout.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const servicesActive = location.pathname === '/after-school' || location.pathname === '/cursuri-engleza';

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-logo">
            <img src="/logo/logo-icon.png" alt="After School Sânandrei" className="navbar-logo-icon" />
            <img src="/logo/logo-text.png" alt="After School Sânandrei" className="navbar-logo-text" />
        </Link>

        <ul className={`navbar-links${open ? ' open' : ''}`}>
          {[
            ['/', 'Acasă'],
            ['/despre-noi', 'Despre noi'],
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

          <li
            className="nav-dropdown"
            onMouseEnter={() => { if (window.innerWidth > 768) setDropdownOpen(true); }}
            onMouseLeave={() => { if (window.innerWidth > 768) setDropdownOpen(false); }}
          >
            <button
              className={`nav-dropdown-trigger${servicesActive ? ' active' : ''}`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-expanded={dropdownOpen}
            >
              Servicii <span className="nav-dropdown-arrow">▾</span>
            </button>
            <ul className={`nav-dropdown-menu${dropdownOpen ? ' open' : ''}`}>
              <li>
                <Link to="/after-school" onClick={() => { setOpen(false); setDropdownOpen(false); }}>
                  After-school
                </Link>
              </li>
              <li>
                <Link to="/cursuri-engleza" onClick={() => { setOpen(false); setDropdownOpen(false); }}>
                  Cursuri engleză
                </Link>
              </li>
            </ul>
          </li>

          {[
            ['/galerie', 'Galerie'],
            ['/blog', 'Blog'],
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

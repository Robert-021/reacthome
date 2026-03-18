import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import faviconImage from '../{components,pages,assets/images}/favicon.png';
import './Navbar.css';

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/sobre-nosotros', label: 'Sobre Nosotros' },
  { to: '/productos', label: 'Productos' },
  { to: '/ofertas', label: 'Ofertas' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo">
          <img src={faviconImage} alt="HomePlay Logo" className="navbar__logo-img" style={{ height: '32px', width: 'auto', marginRight: '8px' }} />
          <span className="navbar__logo-text">HomePlay</span>
        </Link>

        <nav className={`navbar__nav ${open ? 'navbar__nav--open' : ''}`}>
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`navbar__link ${location.pathname === l.to ? 'navbar__link--active' : ''}`}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contacto" className="btn btn-primary navbar__cta">
            Solicita tu equipo ya!
          </Link>
        </nav>

        <button className="navbar__burger" onClick={() => setOpen(!open)} aria-label="Menú">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}

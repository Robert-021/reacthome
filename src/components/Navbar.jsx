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
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Scrolled state (for background change)
      setScrolled(currentScrollY > 40);

      // Visibility state (hide on scroll down, show on scroll up)
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastScrollY]);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${!visible ? 'navbar--hidden' : ''}`}>
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo">
          <img src={faviconImage} alt="HomePlay Logo" className="navbar__logo-img" />
          <span className="navbar__logo-text">
            <span className="highlight">HOME</span>PLAY
          </span>
        </Link>

        <nav className={`navbar__nav ${open ? 'navbar__nav--open' : ''}`}>
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`navbar__link ${location.pathname === l.to ? 'navbar__link--active' : ''}`}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contacto" className="btn btn-primary navbar__cta navbar__cta--mobile" onClick={() => setOpen(false)}>
            Solicita tu equipo ya!
          </Link>
        </nav>

        <div className="navbar__cta-wrapper">
          <Link to="/contacto" className="btn btn-primary navbar__cta navbar__cta--desktop">
            Solicita tu equipo ya!
          </Link>
        </div>

        <button className="navbar__burger" onClick={() => setOpen(!open)} aria-label="Menú">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}

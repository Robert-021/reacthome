import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import faviconImage from '../{components,pages,assets/images}/favicon.png';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <img src={faviconImage} alt="HomePlay Logo" className="footer__logo-img" style={{ height: '32px', width: 'auto', marginRight: '8px' }} />
              <span>HomePlay</span>
            </div>
            <p className="footer__tagline">
              Tecnología y Hogar Inteligente con crédito directo, sin complicaciones.
            </p>
          </div>

          <div className="footer__col">
            <h4>Páginas</h4>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
              <li><Link to="/productos">Productos</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Contacto</h4>
            <ul className="footer__contact-list">
              <li>
                <MapPin size={15} />
                <span>Edificio Empresarial Unicornio II, Piso 15-04</span>
              </li>
              <li>
                <Phone size={15} />
                <a href="tel:0995071589">099 507 1589</a>
              </li>
              <li>
                <Mail size={15} />
                <a href="mailto:ventas@lockplay.org">ventas@lockplay.org</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2025 HomePlay. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

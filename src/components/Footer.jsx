import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import faviconImage from '../{components,pages,assets/images}/favicon.png';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">

          {/* 1️⃣ LOGO + DESCRIPCIÓN */}
          <div>
            <div className="footer__logo">
              <img
                src={faviconImage}
                alt="HomePlay Logo"
                className="footer__logo-img"
                style={{ height: '32px', width: 'auto', marginRight: '8px' }}
              />
              <span>HomePlay</span>
            </div>

            <p className="footer__tagline">
              Todo a tu alcance fácil y a crédito. Tecnología, confianza y facilidades de pago en un solo lugar.
            </p>
          </div>

          {/* 2️⃣ REDES SOCIALES */}
          <div className="footer__col">
            <h4>Redes Sociales</h4>
            <ul>

              <li>
                <a
                  href="https://www.facebook.com/people/Home-Play-Todo-a-tu-alcance-f%C3%A1cil-y-a-cr%C3%A9dito/61574902755345/?rdid=OODb0ar0uqK2AsKF&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19WKx7McWW%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.5-3.88 3.78-3.88 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.62.77-1.62 1.56v1.88h2.76l-.44 2.9h-2.32V22c4.78-.75 8.44-4.91 8.44-9.93z" />
                  </svg>
                  Facebook
                </a>
              </li>

              <li>
                <a
                  href="https://www.tiktok.com/@homeplaycredito"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.75 2h3a5.5 5.5 0 0 0 5.5 5.5v3a8.5 8.5 0 0 1-5.5-2v7.75a6.25 6.25 0 1 1-6.25-6.25c.42 0 .83.04 1.23.12v3.1a3.25 3.25 0 1 0 2.52 3.16V2z" />
                  </svg>
                  TikTok
                </a>
              </li>

            </ul>
          </div>

          {/* 3️⃣ CONTACTO + MAPA */}
          <div className="footer__col">
            <h4>Contacto</h4>

            <ul className="footer__contact-list">

              <li>
                <MapPin size={15} />
                Unicornio II Edificio Empresarial
              </li>

              <li>
                <Phone size={15} />
                096 903 1988 - 096 019 2561
              </li>

              <li>
                <Mail size={15} />
                <a href="mailto:ventas@lockplay.org">ventas@lockplay.org</a>
              </li>

            </ul>

            {/* MAPA */}
            <div style={{ marginTop: "16px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.5605575663835!2d-78.48868082552292!3d-0.17695273541870316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a858f56d4d1%3A0xafe084d8581292c2!2sUnicornio%20II%20Edificio%20Empresarial!5e1!3m2!1ses-419!2sec!4v1773847587049!5m2!1ses-419!2sec"
                width="100%"
                height="210"
                style={{ border: 0, borderRadius: "8px" }}
                loading="lazy"
                title="Ubicación"
              ></iframe>
            </div>

          </div>

        </div>

        {/* FOOTER BOTTOM */}
        <div className="footer__bottom">
          <span>© 2026 Home Play</span>
          <span>Todos los derechos reservados</span>
        </div>
      </div>
    </footer>
  );
}

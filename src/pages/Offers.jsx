import { ExternalLink, Tag, ChevronDown, Smartphone, Tv, Layout, Package, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import ParticleBackground from '../components/ParticleBackground';
import './Offers.css';

import imgSmarTCL from '../{components,pages,assets/images}/SmarTCL.png';
import imgHonor from '../{components,pages,assets/images}/phones/HONOR.webp';
import imgNevera from '../{components,pages,assets/images}/Nevera.png';
import imgFAQ from '../{components,pages,assets/images}/FAQ.png';
import imgBolivariano from '../{components,pages,assets/images}/BancoBolivariano.png';
import imgPichincha from '../{components,pages,assets/images}/BancoPichinch.png';
import imgInternacional from '../{components,pages,assets/images}/InternacionalBanco.svg';
import imgProdubanco from '../{components,pages,assets/images}/Produbanco.webp';
import imgHeroHonor from '../{components,pages,assets/images}/phones/honor.png';
import imgHeroTCL from '../{components,pages,assets/images}/TCLOffert.png';

// DATA (limpia, sin hooks aquí)
const offers = [
  {
    id: 1,
    name: 'HONOR X7c 4G',
    category: 'Celulares',
    image: imgHonor,
    badge: '¡Super Precio!',
    oldPrice: '$219',
    newPrice: '$189'
  },
  {
    id: 2,
    name: 'TCL SMART TV 43"',
    category: 'Televisores',
    image: imgSmarTCL,
    badge: '¡Descuento!',
    oldPrice: '$319',
    newPrice: '$269'
  },
  {
    id: 3,
    name: 'REFRIGERADORA HISENSE',
    category: 'Línea Blanca',
    image: imgNevera,
    badge: '¡NUEVO!',
    oldPrice: '$459',
    newPrice: '$399'
  }
];

export default function Offers() {

  // ✅ HOOK EN EL LUGAR CORRECTO
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <main className="offers">

      {/* HERO */}
      <section className="offers__hero">
        <ParticleBackground />
        <div className="offers__hero-wrapper container">

          {/* IZQUIERDA */}
          <img
            src={imgHeroTCL}
            alt="TCL"
            className="hero__img hero__img--left"
          />

          {/* CENTRO */}
          <div className="container hero__content">
            <span className="section-tag">
              <Tag size={16} style={{ display: 'inline', marginRight: 8 }} />
              Promociones
            </span>

            <h1 className="section-title hero__title">
              Estrena Celular / Smart TV
            </h1>

            <p className="hero__text">
              Descubre los mejores precios en tecnología.
              ¡No dejes pasar estas oportunidades únicas!
            </p>

            <a
              href="https://wa.me/593959728822?text=Buen%20día,%20he%20revisado%20su%20página%20web%20y%20los%20productos%20que%20ofrecen.%20Estoy%20muy%20interesado%20en%20adquirir%20uno%20de%20sus%20equipos%20y%20me%20gustaría%20recibir%20más%20información."
              target="_blank"
              rel="noopener"
              className="btn btn-primary"
            >
              Aplica en línea <ExternalLink size={14} />
            </a>
          </div>

          {/* DERECHA */}
          <img
            src={imgHeroHonor}
            alt="Honor"
            className="hero__img hero__img--right"
          />

        </div>
      </section>

      {/* SECCIÓN PASOS */}
      <section className="offers__contact section-red">
        <div className="container">

          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2>Estrena celular o Smart TV nuevo y págalo en cuotas</h2>
            <p style={{ maxWidth: "600px", margin: "0 auto", opacity: 0.8 }}>
              Empieza con un pago inicial y difiérelo en cuotas desde 3 hasta 9 meses,
              sin ningún interés por morosidad.
            </p>
          </div>

          <div className="offers__grid">

            <div className="offer-card">
              <div className="offer-card__num" style={{ fontSize: "40px", fontWeight: "800", color: "var(--accent-red)" }}>1</div>
              <h3>Solo presenta tu cédula</h3>
              <p style={{ opacity: 0.7 }}>
                Proceso rápido y sin complicaciones.
              </p>
            </div>

            <div className="offer-card">
              <div className="offer-card__num" style={{ fontSize: "40px", fontWeight: "800", color: "var(--accent-red)" }}>2</div>
              <h3>Elige el equipo de tus sueños</h3>
              <p style={{ opacity: 0.7 }}>
                Celulares y Smart TV disponibles.
              </p>
            </div>

            <div className="offer-card">
              <div className="offer-card__num" style={{ fontSize: "40px", fontWeight: "800", color: "var(--accent-red)" }}>3</div>
              <h3>Sal con tu producto</h3>
              <p style={{ opacity: 0.7 }}>
                Paga en cuotas semanales o quincenales.
              </p>
            </div>
          </div>
          
          {/* Botón centrado */}
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <a
              href="https://wa.me/593959728822?text=Buen%20día,%20quiero%20más%20información%20sobre%20cómo%20obtener%20un%20equipo%20a%20crédito."
              target="_blank"
              rel="noopener"
              className="btn btn-dark"
            >
              Solicitar información <ExternalLink size={14} />
            </a>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="faq section-white">
        <div className="container faq__container">

          <div className="faq__content">
            <span className="section-tag">Preguntas Frecuentes</span>
            <h2>Resolvemos tus dudas</h2>

            <div className="faq__list">

              {[
                { q: '¿Qué marcas me ofrecen?', a: 'Trabajamos con Samsung, TCL, Honor, Xiaomi y más.' },
                { q: '¿Qué requisitos necesito?', a: 'Solo tu cédula y validación rápida.' },
                { q: '¿Cuál es el valor de entrada?', a: 'El valor de la entrada depende del nivel asignado, pero va desde el 15% hasta el 35%. Esto sirve para que tus cuotas no salgan elevadas.' },
              ].map((item, i) => (
                <div key={i} className={`faq__item ${activeIndex === i ? 'faq__item--open' : ''}`}>
                  <div className="faq__question" onClick={() => toggleFAQ(i)}>
                    <span>{item.q}</span>
                    <ChevronDown size={18} className="faq__chevron" />
                  </div>
                  {activeIndex === i && (
                    <div className="faq__answer">{item.a}</div>
                  )}
                </div>
              ))}

              {/* Item de bancos aparte por su contenido especial */}
              <div className={`faq__item ${activeIndex === 3 ? 'faq__item--open' : ''}`}>
                <div className="faq__question" onClick={() => toggleFAQ(3)}>
                  <span>¿Dónde puedo pagar las cuotas?</span>
                  <ChevronDown size={18} className="faq__chevron" />
                </div>
                {activeIndex === 3 && (
                  <div className="faq__answer">
                    <p style={{ marginBottom: '14px' }}>Transferencias directas en nuestras cuentas autorizadas:</p>
                    <div className="faq__banks">
                      <img src={imgBolivariano} alt="Banco Bolivariano" className="faq__bank-logo" />
                      <img src={imgPichincha} alt="Banco Pichincha" className="faq__bank-logo" />
                      <img src={imgInternacional} alt="Banco Internacional" className="faq__bank-logo" />
                      <img src={imgProdubanco} alt="Produbanco" className="faq__bank-logo" />
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>

          <img src={imgFAQ} alt="FAQ" className="faq__image" />

        </div>
      </section>

    </main>
  );
}
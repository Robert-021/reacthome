import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Gift, TrendingUp, CheckCircle } from 'lucide-react';
import imgHero1 from '../{components,pages,assets/images}/electrodomesticos.png';
import imgHero2 from '../{components,pages,assets/images}/ElectroCocina.png';
import imgHero3 from '../{components,pages,assets/images}/ElectroRefri.png';
import imgHero4 from '../{components,pages,assets/images}/SmarTCL.png';
import imgHero5 from '../{components,pages,assets/images}/LaptopHP.png';
import imgBannerHonor from '../{components,pages,assets/images}/phones/honor.png';
import ParticleBackground from '../components/ParticleBackground';

// Brands
import b1 from '../{components,pages,assets/images}/marcas/BOSCH.png';
import b2 from '../{components,pages,assets/images}/marcas/Electrolux.png';
import b3 from '../{components,pages,assets/images}/marcas/HPLogo.png';
import b4 from '../{components,pages,assets/images}/marcas/Honor.svg';
import b5 from '../{components,pages,assets/images}/marcas/INIFINIXLOGO.png';
import b6 from '../{components,pages,assets/images}/marcas/InduramaLogo.png';
import b7 from '../{components,pages,assets/images}/marcas/JVC.png';
import b8 from '../{components,pages,assets/images}/marcas/LG.webp';
import b9 from '../{components,pages,assets/images}/marcas/Lenovo.png';
import b10 from '../{components,pages,assets/images}/marcas/MABE.png';
import b11 from '../{components,pages,assets/images}/marcas/OSTER.png';
import b12 from '../{components,pages,assets/images}/marcas/SAMSUNG.png';
import b13 from '../{components,pages,assets/images}/marcas/SONY.png';
import b14 from '../{components,pages,assets/images}/marcas/TCL.webp';
import b15 from '../{components,pages,assets/images}/marcas/WHIRLPOOL.png';
import b16 from '../{components,pages,assets/images}/marcas/realme.png';

import imgStep1 from '../{components,pages,assets/images}/PresentaID.jpg';
import imgStep2 from '../{components,pages,assets/images}/ElijeUno.png';
import imgStep3 from '../{components,pages,assets/images}/llevateloHoy.jpg';

const steps = [
  {
    num: '01', title: 'Presenta tu cédula', desc: <>
      Solo necesitas tu identificación.<br />
      Sin trámites complicados ni papeleo.
    </>, img: imgStep1,
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <circle cx="8" cy="12" r="2" />
        <path d="M12 10h6M12 14h4" />
      </svg>
    )
  },
  {
    num: '02', title: 'Escoge tu favorito', desc: 'Escoge entre celulares y TVs y más, de las mejores marcas.', img: imgStep2,
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <line x1="11" y1="18" x2="13" y2="18" />
      </svg>
    )
  },
  {
    num: '03', title: 'Llévatelo hoy', desc: 'Sal con tu producto y paga en cuotas cómodas.', img: imgStep3,
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C14 5 18 7 18 12a6 6 0 0 1-12 0c0-5 4-7 6-10z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M12 8c1.5 2 3 3 3 5a3 3 0 0 1-6 0c0-2 1.5-3 3-5z"
          fill="currentColor"
          opacity="0.9"
        />
      </svg>
    )
  },
];

import './Home.css';

const whyItems = [
  { icon: <Shield size={28} />, title: 'Construye historial financiero', desc: 'Reportamos tus pagos positivos para ayudarte a fortalecer tu perfil financiero paso a paso.' },
  { icon: <Zap size={28} />, title: 'Aprobación Inmediata', desc: 'Proceso en minutos, sin esperas largas ni trámites tediosos.' },
  { icon: <TrendingUp size={28} />, title: 'Mejora tu Historial', desc: 'Construye tu historial crediticio pagando tus cuotas.' },
];

const brandsTop = [b1, b2, b3, b4, b5, b6, b7, b8];
const brandsBottom = [b9, b10, b11, b12, b13, b14, b15, b16];

const businessPerks = [
  'Sin demoras',
  'Contratos automáticos',
  'Solo copia de cédula',
  'Facilidad de ventas',
];

const clientPerks = [
  'Cuotas semanales, quincenales o mensuales',
  'Sin entrada en tu próxima compra',
  'Certificado y mejora de crédito',
];

export default function Home() {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const heroImages = [imgHero1, imgHero2, imgHero3, imgHero4, imgHero5];

  // Banner CTA dynamic images
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const bannerImages = [imgBannerHonor, imgHero4];

  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    const bannerInterval = setInterval(() => {
      setCurrentBannerIndex((prev) => (prev + 1) % bannerImages.length);
    }, 3500);

    return () => {
      clearInterval(heroInterval);
      clearInterval(bannerInterval);
    };
  }, []);

  return (
    <main className="home">

      {/* ── HERO ── */}
      <section className="hero">
        <ParticleBackground />
        <div className="hero__bg">
          <div className="hero__circle hero__circle--1" />
          <div className="hero__circle hero__circle--2" />
        </div>
        <div className="container hero__inner">
          <div className="hero__content animate-fade-up">
            <span className="section-tag">sin tramites largos · Ecuador</span>
            <h1 className="hero__title">
              Tu mejor opción en<br />
              <em>Tecnología &amp;</em><br />
              Hogar Inteligente
            </h1>
            <p className="hero__desc">
              Con nuestras cuotas semanales, quincenales o mensuales, la innovación y la calidad están al alcance de tu mano.
              Electrodomésticos y celulares de última generación — sin complicaciones.
            </p>
            <div className="hero__actions">
              <Link to="/contacto" className="btn btn-primary">
                pidelo ya! <ArrowRight size={16} />
              </Link>
              <Link to="/productos" className="btn btn-outline">
                Ver productos
              </Link>
            </div>
          </div>
          <div className="hero__image animate-fade-up animate-delay-2">
            {heroImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt="HomePlay Producto"
                className={index === currentHeroIndex ? 'active' : ''}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── STEPS ── */}
      <section className="steps">
        <div className="container">
          <div className="steps__header">
            <span className="section-tag">Así de Fácil</span>
            <h2 className="section-title">Llévatelo hoy en <span style={{ color: 'rgb(226, 7, 17)' }}>3 simpes pasos</span></h2>
          </div>
          <div className="steps__grid">
            {steps.map(s => (
              <div className="step-card">
                <div className="step-card__top">
                  <div className="step-card__icon">
                    {s.icon}
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
                <span className="step-card__num">{s.num}</span>
                <div className="step-card__image">
                  <img src={s.img} alt={s.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <a
          href="https://wa.me/593959728822?text=Buen%20día,%20me%20interesa%20adquirir%20un%20celular.%20¿Podrían%20ayudarme%20con%20los%20modelos%20y%20precios%20disponibles?"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp"
        >
          Solicita tu equipo ahora!
        </a>
      </section>

      {/* ── WHY ── */}
      <section className="why section-black">
        <div className="container">
          <div className="why__header">
            <h2 className="section-title">¿Por qué elegit HomePlay?</h2>
            <p className="section-subtitle">
              No esperes más para conectarte con tus seres queridos. Llévate tu celular soñado y págalo mientras lo usas.
            </p>
          </div>
          <div className="why__grid">
            {whyItems.map(item => (
              <div key={item.title} className="why-card">
                <div className="why-card__icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <a
          href="https://wa.me/593959728822?text=Buen%20día,%20quiero%20solicitar%20un%20crédito%20con%20ustedes.%20Vi%20su%20página%20en%20internet%20y%20me%20gustaría%20recibir%20información%20para%20acceder."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp--neon"
        >
          Empieza ahora
        </a>
      </section>

      {/* ── BUSINESS / CLIENT ── */}
      <section className="perks section-red">
        <div className="container">
          <div className="perks__grid">
            <div className="perks__card perks__card--dark">
              <span className="section-tag">Para Empresas</span>
              <h3>Aumenta tus ventas</h3>
              <p>Integra nuestro sistema de crédito directo y cierra más ventas sin riesgo.</p>
              <ul>
                {businessPerks.map(p => (
                  <li key={p}><CheckCircle size={16} /> {p}</li>
                ))}
              </ul>
              <Link to="/contacto" className="btn btn-primary" style={{ marginTop: 'auto' }}>Hablar con ventas</Link>
            </div>

            <div className="perks__image">
              <img src={imgHero1} alt="Electrodomésticos HomePlay" />
            </div>

            <div className="perks__card perks__card--light">
              <span className="section-tag">Para Clientes</span>
              <h3>Mejora tu nivel crediticio</h3>
              <p>Disfruta tu producto mientras construyes un historial de crédito sólido.</p>
              <ul>
                {clientPerks.map(p => (
                  <li key={p}><CheckCircle size={16} /> {p}</li>
                ))}
              </ul>
              <Link to="/contacto" className="btn btn-dark" style={{ marginTop: 'auto' }}>Solicitar ahora</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── BRANDS ── */}
      <section className="brands">
        <div className="container" style={{ padding: '0 12px' }}>
          <p className="brands__label">Marcas que trabajamos</p>
          <div className="brands__track-wrapper">
            <div className="brands__track brands__track--left">
              {[...brandsTop, ...brandsTop].map((src, i) => (
                <div key={i} className="brand-logo">
                  <img src={src} alt="Brand" />
                </div>
              ))}
            </div>
          </div>

          <div className="brands__track-wrapper" style={{ marginTop: '32px' }}>
            <div className="brands__track brands__track--right">
              {[...brandsBottom, ...brandsBottom].map((src, i) => (
                <div key={i} className="brand-logo">
                  <img src={src} alt="Brand" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BANNER CTA ── */}
      <section className="banner-cta section-white">
        <div className="container">
          <div className="banner-cta__inner">
            <div className="banner-cta__content">
              <h2>Elige tu celular/Smart TV soñado hoy</h2>
              <p>Págalo mientras lo usas, con pequeñas cuotas semanales. Conéctate con tus seres queridos al instante.</p>
              <Link to="/ofertas" className="btn btn-primary">
                Estrena ya! <ArrowRight size={16} />
              </Link>
            </div>
            <div className="banner-cta__image">
              {bannerImages.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt="Banner Producto"
                  className={index === currentBannerIndex ? 'active' : ''}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

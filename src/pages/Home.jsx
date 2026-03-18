import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Gift, TrendingUp, CheckCircle } from 'lucide-react';
import imgHero1 from '../{components,pages,assets/images}/electrodomesticos.png';
import imgHero2 from '../{components,pages,assets/images}/ElectroCocina.png';
import imgHero3 from '../{components,pages,assets/images}/ElectroRefri.png';
import imgHero4 from '../{components,pages,assets/images}/SmarTCL.png';
import imgHero5 from '../{components,pages,assets/images}/LaptopHP.png';

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

import './Home.css';

const steps = [
  { num: '01', title: 'Presenta tu cédula', desc: 'Solo necesitas tu documento de identidad. Sin burocracia ni papeleos complicados.' },
  { num: '02', title: 'Escoge tu favorito', desc: 'Elige entre celulares, TVs y electrodomésticos de las mejores marcas del mercado.' },
  { num: '03', title: 'Llévatelo hoy', desc: 'Sale de la tienda con tu producto y paga en cómodas cuotas semanales o quincenales.' },
];

const whyItems = [
  { icon: <Shield size={28} />, title: 'Sin Buró de Crédito', desc: 'No importa tu historial. Te damos la oportunidad que mereces.' },
  { icon: <Zap size={28} />, title: 'Aprobación Inmediata', desc: 'Proceso en minutos, sin esperas largas ni trámites tediosos.' },
  { icon: <Gift size={28} />, title: 'Premios y Regalos', desc: 'Cumple tus pagos a tiempo y accede a beneficios exclusivos.' },
  { icon: <TrendingUp size={28} />, title: 'Mejora tu Historial', desc: 'Construye tu historial crediticio pagando tus cuotas.' },
];

const brandsTop = [b1, b2, b3, b4, b5, b6, b7, b8];
const brandsBottom = [b9, b10, b11, b12, b13, b14, b15, b16];

const businessPerks = [
  'Sin Buró de crédito',
  'Contratos automáticos',
  'Solo copia de cédula',
  'Facilidad de ventas',
];

const clientPerks = [
  'Cuotas semanales, quincenales o mensuales',
  'Premios por pagos puntuales',
  'Sin entrada en tu próxima compra',
  'Certificado y mejora de crédito',
];

export default function Home() {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const heroImages = [imgHero1, imgHero2, imgHero3, imgHero4, imgHero5];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="home">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero__bg">
          <div className="hero__circle hero__circle--1" />
          <div className="hero__circle hero__circle--2" />
        </div>
        <div className="container hero__inner">
          <div className="hero__content animate-fade-up">
            <span className="section-tag">Crédito Directo · Ecuador</span>
            <h1 className="hero__title">
              Tu mejor opción en<br />
              <em>Tecnología &amp;</em><br />
              Hogar Inteligente
            </h1>
            <p className="hero__desc">
              Con nuestros planes de crédito, la innovación y la calidad están al alcance de tu mano.
              Electrodomésticos y celulares de última generación — sin complicaciones.
            </p>
            <div className="hero__actions">
              <Link to="/contacto" className="btn btn-primary">
                Solicitar crédito <ArrowRight size={16} />
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
            <h2 className="section-title">3 pasos para llevarte tu producto</h2>
          </div>
          <div className="steps__grid">
            {steps.map(s => (
              <div key={s.num} className="step-card">
                <div className="step-card__num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY ── */}
      <section className="why">
        <div className="container">
          <div className="why__header">
            <span className="section-tag">¿Por qué HomePlay?</span>
            <h2 className="section-title">Ventajas que nos hacen únicos</h2>
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
      </section>

      {/* ── BUSINESS / CLIENT ── */}
      <section className="perks">
        <div className="container">
          <div className="perks__grid">
            <div className="perks__card perks__card--dark">
              <span className="section-tag" style={{ background: 'rgba(239,68,68,0.2)', color: 'var(--teal)' }}>Para Empresas</span>
              <h3>Aumenta tus ventas</h3>
              <p>Integra nuestro sistema de crédito directo y cierra más ventas sin riesgo.</p>
              <ul>
                {businessPerks.map(p => (
                  <li key={p}><CheckCircle size={16} /> {p}</li>
                ))}
              </ul>
              <Link to="/contacto" className="btn btn-primary" style={{ marginTop: 'auto' }}>Hablar con ventas</Link>
            </div>

            <div className="perks__card perks__card--image">
              <img src="https://homeplay.ec/images/tv.png" alt="TV HomePlay" />
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
      <section className="banner-cta">
        <div className="container">
          <div className="banner-cta__inner">
            <div className="banner-cta__content">
              <h2>Elige tu celular soñado hoy</h2>
              <p>Págalo mientras lo usas, con pequeñas cuotas semanales. Conéctate con tus seres queridos al instante.</p>
              <Link to="/productos" className="btn btn-primary">
                Ver todos los productos <ArrowRight size={16} />
              </Link>
            </div>
            <div className="banner-cta__image">
              <img src="https://homeplay.ec/images/banner_celulares.png" alt="Celulares HomePlay" />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

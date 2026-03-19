import { Users, Target, Heart } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';
import './About.css';

const values = [
  { icon: <Users size={28} />, title: 'Inclusión', desc: 'Creemos que todos merecen acceso a tecnología de calidad, sin importar su historial crediticio.' },
  { icon: <Target size={28} />, title: 'Simplicidad', desc: 'Procesos claros, rápidos y sin complicaciones. Tu tiempo es valioso.' },
  { icon: <Heart size={28} />, title: 'Compromiso', desc: 'Nos comprometemos con tu bienestar financiero y el crecimiento de tu historial crediticio.' },
];

export default function About() {
  return (
    <main className="about">
      <section className="about__hero">
        <ParticleBackground />
        <div className="about__hero-bg"></div>
        <div className="container">
          <span className="section-tag">Nuestra Historia</span>
          <h1 className="section-title" style={{ color: 'var(--white)', marginTop: 12 }}>
            Nacimos para darte<br />la oportunidad que mereces
          </h1>
        </div>
      </section>

      <section className="about__story section-white">
        <div className="container about__story-inner">
          <div className="about__story-text">
            <span className="section-tag">Quiénes Somos</span>
            <h2 className="section-title">HOMEPLAY</h2>
            <p>
              Nacimos de la necesidad de ofrecer alternativas de pago que se ajusten a la realidad
              de cada cliente, especialmente para quienes no cuentan con un historial crediticio
              o con facilidades bancarias.
            </p>
            <p>
              En HomePlay encontrarás lo mejor en electrodomésticos y celulares de última generación.
              Productos confiables, modernos y fáciles de usar, pensados para hacer tu vida más
              cómoda — y lo mejor: sin complicaciones ni procesos tediosos.
            </p>
            <p>
              Nuestro sistema de crédito directo permite que puedas llevarte tu producto hoy
              mismo y pagarlo mientras lo disfrutas, en cuotas que se adaptan a tus posibilidades.
            </p>
          </div>
          <div className="about__story-visual">
            <div className="about__badge">
              <span className="about__badge-num">+1000</span>
              <span>Clientes satisfechos</span>
            </div>
            <div className="about__badge">
              <span className="about__badge-num">100%</span>
              <span>Sin Buró</span>
            </div>
            <div className="about__badge">
              <span className="about__badge-num">3</span>
              <span>Pasos para obtener tu crédito</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about__values">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-tag">Nuestros Valores</span>
            <h2 className="section-title">Lo que nos define</h2>
          </div>
          <div className="about__values-grid">
            {values.map(v => (
              <div key={v.title} className="about-value-card">
                <div className="about-value-card__icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

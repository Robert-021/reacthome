import { useState } from 'react';
import { Smartphone, Tv, Refrigerator, ExternalLink } from 'lucide-react';
import './Products.css';

import imgHonor from '../{components,pages,assets/images}/phones/HONOR.webp';
import imgHyundai from '../{components,pages,assets/images}/phones/HYUNDAI.png';
import imgInfinix from '../{components,pages,assets/images}/phones/INIFINIX.png';
import imgMotorola from '../{components,pages,assets/images}/phones/MOTOROLA.png';
import imgOppo from '../{components,pages,assets/images}/phones/OPPO.png';
import imgOukitel from '../{components,pages,assets/images}/phones/OUKITEL.webp';
import imgRealme from '../{components,pages,assets/images}/phones/REALME.png';
import imgSamsung from '../{components,pages,assets/images}/phones/SAMSUNG.png';
import imgZte from '../{components,pages,assets/images}/phones/ZTE.png';

import imgElectroCocina from '../{components,pages,assets/images}/ElectroCocina.png';
import imgCocina from '../{components,pages,assets/images}/Cocina.png';
import imgElectroRefri from '../{components,pages,assets/images}/ElectroRefri.png';
import imgInduCocina from '../{components,pages,assets/images}/InduCocina.png';
import imgMicroo from '../{components,pages,assets/images}/Microo.png';
import imgNevera from '../{components,pages,assets/images}/Nevera.png';
import imgRefriIndurama from '../{components,pages,assets/images}/RefriIndurama.png';
import imgSmarTCL from '../{components,pages,assets/images}/SmarTCL.png';
import imgSmarTV from '../{components,pages,assets/images}/SmarTV.png';
import imgTelevisor from '../{components,pages,assets/images}/Televisor.png';

const categories = ['Todos', 'Celulares', 'Televisores', 'Línea Blanca'];

const products = [
  { id: 1, name: 'HONOR X7c 4G', category: 'Celulares', image: imgHonor, badge: null },
  { id: 2, name: 'HYUNDAI HYLINE', category: 'Celulares', image: imgHyundai, badge: null },
  { id: 3, name: 'INFINIX HOT 50 PRO', category: 'Celulares', image: imgInfinix, badge: null },
  { id: 4, name: 'MOTOROLA G05', category: 'Celulares', image: imgMotorola, badge: null },
  { id: 5, name: 'OPPO A78', category: 'Celulares', image: imgOppo, badge: null },
  { id: 6, name: 'OUKITEL RT3 PRO', category: 'Celulares', image: imgOukitel, badge: null },
  { id: 7, name: 'REALME X', category: 'Celulares', image: imgRealme, badge: null },
  { id: 8, name: 'SAMSUNG GALAXY A17', category: 'Celulares', image: imgSamsung, badge: null },
  { id: 9, name: 'ZTE BLADE V60 VITA', category: 'Celulares', image: imgZte, badge: null },
  { id: 10, name: 'TCL SMART TV 43"', category: 'Televisores', image: imgSmarTCL, badge: null },
  { id: 11, name: 'SMART TV 50"', category: 'Televisores', image: imgSmarTV, badge: null },
  { id: 12, name: 'SMART TV 55"', category: 'Televisores', image: imgTelevisor, badge: null },
  { id: 13, name: 'COCINA ELECTROLUX 76DXR', category: 'Línea Blanca', image: imgElectroCocina, badge: null },
  { id: 14, name: 'COCINA 4 QUEMADORES', category: 'Línea Blanca', image: imgCocina, badge: null },
  { id: 15, name: 'REFRIGERADOR ELECTROLUX TF55S ', category: 'Línea Blanca', image: imgElectroRefri, badge: null },
  { id: 16, name: 'COCINA INDURAMA ZAFIRO', category: 'Línea Blanca', image: imgInduCocina, badge: null },
  { id: 17, name: 'HORNO MICRRONDAS', category: 'Línea Blanca', image: imgMicroo, badge: null },
  { id: 18, name: 'REFRIGERADORA HISENSE', category: 'Línea Blanca', image: imgNevera, badge: null },
  { id: 19, name: 'REFRIGERADORA INDURAMA RI-395', category: 'Línea Blanca', image: imgRefriIndurama, badge: null },
];

const icons = { 'Celulares': <Smartphone size={18} />, 'Televisores': <Tv size={18} />, 'Línea Blanca': <Refrigerator size={18} /> };

export default function Products() {
  const [active, setActive] = useState('Todos');

  const filtered = active === 'Todos' ? products : products.filter(p => p.category === active);

  return (
    <main className="products">
      <section className="products__hero">
        <div className="container">
          <span className="section-tag">Catálogo</span>
          <h1 className="section-title" style={{ color: 'var(--white)', marginTop: 12 }}>
            Nuestros Productos
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: 12, maxWidth: 480 }}>
            Encuentra la tecnología que necesitas y llévala hoy con nuestro crédito directo.
          </p>
        </div>
      </section>

      <section className="products__list">
        <div className="container">
          <div className="products__filters">
            {categories.map(c => (
              <button
                key={c}
                className={`products__filter-btn ${active === c ? 'active' : ''}`}
                onClick={() => setActive(c)}
              >
                {icons[c]} {c}
              </button>
            ))}
          </div>

          <div className="products__grid">
            {filtered.map(p => (
              <div key={p.id} className="product-card">
                {p.badge && <span className="product-card__badge">{p.badge}</span>}
                <div style={{ width: '100%', height: '220px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '16px' }}>
                  <img src={p.image} alt={p.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                </div>
                <div className="product-card__cat">{p.category}</div>
                <h3>{p.name}</h3>
                <a
                  href="https://wa.me/593959728822?text=Buen%20día,%20he%20revisado%20su%20página%20web%20y%20los%20productos%20que%20ofrecen.%20Estoy%20muy%20interesado%20en%20adquirir%20uno%20de%20sus%20equipos%20y%20me%20gustaría%20recibir%20más%20información%20sobre%20precios,%20disponibilidad%20y%20requisitos.%20Quedo%20atento%20a%20su%20respuesta,%20muchas%20gracias."
                  target="_blank"
                  rel="noopener"
                  className="btn btn-primary"
                >
                  Solicitar crédito <ExternalLink size={14} />
                </a>
              </div>
            ))}
          </div>

          <div className="products__tiktok">
            <p>¿Quieres ver más productos?</p>
            <a href="https://www.tiktok.com/@homeplaycredito" target="_blank" rel="noopener" className="btn btn-dark">
              Visita nuestro TikTok <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

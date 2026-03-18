import { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = e => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hola HomePlay! Soy ${form.name}.\n\n${form.message}\n\nTeléfono: ${form.phone}`
    );
    window.open(`https://wa.me/593995071589?text=${msg}`, '_blank');
    setSent(true);
  };

  return (
    <main className="contact">
      <section className="contact__hero">
        <div className="container">
          <span className="section-tag">Escríbenos</span>
          <h1 className="section-title" style={{ color: 'var(--white)', marginTop: 12 }}>
            Contáctanos
          </h1>
        </div>
      </section>

      <section className="contact__body">
        <div className="container contact__grid">

          <div className="contact__info">
            <h2>¿Listo para tu crédito?</h2>
            <p>Contáctanos hoy mismo y uno de nuestros asesores te atenderá de inmediato.</p>

            <div className="contact__info-list">
              <div className="contact__info-item">
                <div className="contact__info-icon"><MapPin size={20} /></div>
                <div>
                  <strong>Dirección</strong>
                  <span>Edificio Empresarial Unicornio II, Piso 15-04</span>
                </div>
              </div>
              <div className="contact__info-item">
                <div className="contact__info-icon"><Phone size={20} /></div>
                <div>
                  <strong>Teléfono / WhatsApp</strong>
                  <a href="tel:0995071589">099 507 1589</a>
                </div>
              </div>
              <div className="contact__info-item">
                <div className="contact__info-icon"><Mail size={20} /></div>
                <div>
                  <strong>Email</strong>
                  <a href="mailto:ventas@lockplay.org">ventas@lockplay.org</a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact__form-wrapper">
            {sent ? (
              <div className="contact__success">
                <CheckCircle size={48} color="var(--teal)" />
                <h3>¡Gracias por contactarnos!</h3>
                <p>Te hemos redirigido a WhatsApp. Un asesor te responderá pronto.</p>
                <button className="btn btn-primary" onClick={() => setSent(false)}>Enviar otro mensaje</button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={submit}>
                <h3>Envíanos un mensaje</h3>
                <div className="contact__field">
                  <label>Nombre completo</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Tu nombre"
                    value={form.name}
                    onChange={handle}
                    required
                  />
                </div>
                <div className="contact__field">
                  <label>Teléfono</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="0999 000 000"
                    value={form.phone}
                    onChange={handle}
                    required
                  />
                </div>
                <div className="contact__field">
                  <label>Mensaje</label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="¿En qué podemos ayudarte? ¿Qué producto te interesa?"
                    value={form.message}
                    onChange={handle}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Enviar por WhatsApp <Send size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

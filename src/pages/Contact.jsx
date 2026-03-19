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
    window.open(`https://wa.me/593959728822?text=${msg}`, '_blank');
    setSent(true);
  };

  return (
    <main className="contact">
      <section className="contact__hero">
        <div className="container">
          <span className="section-tag">Escríbenos</span>
          <h1 className="section-title" style={{ color: 'var(--white)', marginTop: 12 }}>
            Adquiere tu equipo ya
          </h1>
        </div>
      </section>

      <section className="contact__body">
        <div className="container contact__grid">

          <div className="contact__info">
            <h2>¿Listo?</h2>
            <p>Contáctanos hoy mismo y uno de nuestros asesores te atenderá de inmediato.</p>

            <div className="contact__info-list">
              <div className="contact__info-item">
                <div className="contact__info-icon"><MapPin size={20} /></div>
                <div>
                  <strong>Dirección</strong>
                  <span>Edificio Empresarial Unicornio II, Piso 15-04</span>
                </div>
              </div>
              {/* UBICACIÓN + MAPA */}
              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <MapPin size={20} />
                </div>
                <div style={{ width: "100%" }}>
                  <strong>Ubicación</strong>

                  <div className="contact__map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.5605575663835!2d-78.48868082552292!3d-0.17695273541870316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a858f56d4d1%3A0xafe084d8581292c2!2sUnicornio%20II%20Edificio%20Empresarial!5e1!3m2!1ses-419!2sec!4v1773847587049!5m2!1ses-419!2sec"
                      width="100%"
                      height="160"
                      style={{ border: 0, borderRadius: "8px" }}
                      loading="lazy"
                      title="Ubicación"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="contact__info-item">
                <div className="contact__info-icon"><Phone size={20} /></div>
                <div>
                  <strong>Teléfono / WhatsApp</strong>
                  <a href="tel:0995071589">096 903 1988 - 096 019 2561</a>
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

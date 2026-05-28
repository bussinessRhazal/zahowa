import { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../data/siteConfig';
import FoundersForm from '../components/FoundersForm';

export default function FoundersCircle() {
  const [seats, setSeats] = useState({
    total: SITE_CONFIG.founderCircle.totalSeats,
    taken: SITE_CONFIG.founderCircle.seatsTaken
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}seats.json`)
      .then(res => res.json())
      .then(data => {
        setSeats({ total: data.total, taken: data.taken });
        setLoading(false);
      })
      .catch(() => {
        // Fallback sur siteConfig si le fichier est inaccessible
        setLoading(false);
      });
  }, []);

  const remaining = seats.total - seats.taken;
  const { benefits } = SITE_CONFIG.founderCircle;

  return (
    <section className="founders" id="founders">
      <div className="founders__decor" aria-hidden="true" />
      <div className="container">
        <div className="founders__inner">
          <div className="founders__content reveal">
            <div className="eyebrow founders__eyebrow">
              <span className="eyebrow__line" />Numéro 04 · L'invitation
            </div>
            <h2 className="founders__title">Cercle<br /><em>Zahowa Privilège</em></h2>

            <div className="founders__counter" role="status" aria-live="polite">
              {loading ? (
                <span className="founders__counter-number" style={{ opacity: 0.4 }}>—</span>
              ) : (
                <span className="founders__counter-number">{remaining}</span>
              )}
              <span className="founders__counter-text">
                places restantes · sur {seats.total}
              </span>
            </div>

            <p className="founders__text">
              Les {seats.total} premières personnes à rejoindre Zahowa 
              co-construisent le produit et bénéficient d'avantages 
              Zahowa Privilège permanents.
            </p>

            <ul className="founders__benefits">
              {benefits.map((b, i) => (
                <li key={i}>
                  <span className="founders__benefits-mark" aria-hidden="true">✦</span>
                  <div>
                    <strong>{b.title}</strong>
                    <span> — {b.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="founders__form-wrapper reveal">
            <FoundersForm />
          </div>
        </div>
      </div>
    </section>
  );
}

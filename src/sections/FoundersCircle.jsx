import { SITE_CONFIG } from '../data/siteConfig';
import FoundersForm from '../components/FoundersForm';

export default function FoundersCircle() {
  const { totalSeats, seatsTaken, benefits } = SITE_CONFIG.founderCircle;
  return (
    <section className="founders" id="founders">
      <div className="founders__decor" aria-hidden="true" />
      <div className="container">
        <div className="founders__inner">
          <div className="founders__content reveal">
            <div className="eyebrow founders__eyebrow"><span className="eyebrow__line" />Numéro 04 · L'invitation</div>
            <h2 className="founders__title">Cercle<br /><em>Fondateur</em></h2>
            <div className="founders__counter" role="status">
              <span className="founders__counter-number">{totalSeats - seatsTaken}</span>
              <span className="founders__counter-text">places restantes · sur {totalSeats}</span>
            </div>
            <p className="founders__text">Les 100 premières personnes à rejoindre Zahowa co-construisent le produit et bénéficient d'avantages fondateurs permanents.</p>
            <ul className="founders__benefits">
              {benefits.map((b, i) => (
                <li key={i}>
                  <span className="founders__benefits-mark" aria-hidden="true">✦</span>
                  <div><strong>{b.title}</strong><span> — {b.text}</span></div>
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

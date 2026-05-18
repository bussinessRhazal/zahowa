import SteamAnimation from '../components/SteamAnimation';

const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__bg-gradient" />
        <picture className="hero__bg-image">
          {/* ⚠️ Remplacer par ta photo : public/images/hero-coffee.webp */}
          <img src={`${import.meta.env.BASE_URL}images/hero-coffee.webp`}
            alt="Tasse de café épicé fumante avec épices"
            loading="eager" fetchpriority="high"
            onError={(e) => { e.target.style.display = 'none'; }} />
        </picture>
        <div className="hero__bg-overlay" />
      </div>

      <div className="hero__steam" aria-hidden="true">
        <SteamAnimation />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <div className="eyebrow hero__eyebrow">
            <span className="eyebrow__line" />
            Lancement bientôt
          </div>
          <h1 className="hero__title">
            Le café<br /><em>épicé,</em><br />
            comme tu ne l'as<br />jamais bu.
          </h1>
          <p className="hero__subtitle">Pour qui refuse le café sans âme.</p>
          <div className="hero__ctas">
            <a href="#founders" className="btn-primary" onClick={(e) => { e.preventDefault(); go('founders'); }}>
              Rejoindre le Cercle Fondateur
              <span className="btn-primary__arrow">→</span>
            </a>
            <a href="#story" className="btn-ghost" onClick={(e) => { e.preventDefault(); go('story'); }}>
              Découvrir l'histoire
            </a>
          </div>
          {/* ← AJOUTER CE BLOC */}
<p className="hero__sondage-cta">
  Tu veux influencer nos recettes ?{' '}
  <a href="/sondage.html" className="hero__sondage-link">
    Réponds au sondage de 5 min →
  </a>
</p>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span className="hero__scroll-text">Défiler</span>
        <span className="hero__scroll-line" />
      </div>
    </section>
  );
}

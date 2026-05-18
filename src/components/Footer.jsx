import { SITE_CONFIG } from '../data/siteConfig';

export default function Footer({ onOpenModal }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__brand-logo">
              <img src={`${import.meta.env.BASE_URL}images/zahowa-logo.jpg`} alt="Logo Zahowa" />
              <span className="footer__brand-name">ZAHOWA</span>
            </div>
            <p className="footer__brand-tagline">Le café épicé, comme tu ne l'as jamais bu.</p>
            <p className="footer__brand-origin">Fait à Fès · Infusé en France</p>
          </div>

          <nav className="footer__col" aria-label="Découvrir">
            <h4 className="footer__col-title">Découvrir</h4>
            <ul>
              <li><a href="#story">L'Histoire</a></li>
              <li><a href="#recipes">Les 4 recettes</a></li>
              <li><a href="#pillars">La méthode</a></li>
              <li><a href="#founders">Cercle Fondateur</a></li>
              <li>
      <a href="/sondage.html" style={{ color: 'var(--or-imperial)', opacity: 1 }}>
        ✦ Donner mon avis
      </a>
    </li>
            </ul>
          </nav>

          <nav className="footer__col" aria-label="Contact">
            <h4 className="footer__col-title">Contact</h4>
            <ul>
              <li><button className="footer__link-btn" onClick={() => onOpenModal('contact')}>Envoyer un message</button></li>
              <li><a href={`mailto:${SITE_CONFIG.contact.email}`}>{SITE_CONFIG.contact.email}</a></li>
              <li><button className="footer__link-btn" onClick={() => onOpenModal('mentions')}>Mentions légales</button></li>
              <li><button className="footer__link-btn" onClick={() => onOpenModal('confidentialite')}>Politique de confidentialité</button></li>
            </ul>
          </nav>

          <nav className="footer__col" aria-label="Réseaux sociaux">
            <h4 className="footer__col-title">Suivre</h4>
            <ul>
              <li><a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href={SITE_CONFIG.social.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a></li>
              <li><a href={SITE_CONFIG.social.facebook} target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href={SITE_CONFIG.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </nav>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Zahowa · Tous droits réservés</span>
          <span>Lancement bientôt · Été 2026</span>
        </div>
      </div>
    </footer>
  );
}

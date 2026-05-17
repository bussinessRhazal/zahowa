import { useState, useEffect } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`} aria-label="Navigation principale">
      <div className="container nav__inner">
        <a href="#top" className="nav__logo" onClick={(e) => go(e, 'top')}>
          <img src={`${import.meta.env.BASE_URL}images/zahowa-logo.jpg`} alt="Logo Zahowa" className="nav__logo-img" />
          <span className="nav__logo-text">ZAHOWA</span>
        </a>
        <div className={`nav__links${mobileOpen ? ' nav__links--open' : ''}`}>
          <a href="#story" onClick={(e) => go(e, 'story')}>L'Histoire</a>
          <a href="#recipes" onClick={(e) => go(e, 'recipes')}>Les Recettes</a>
          <a href="#pillars" onClick={(e) => go(e, 'pillars')}>La Méthode</a>
          <a href="#founders" className="nav__cta" onClick={(e) => go(e, 'founders')}>Cercle Fondateur</a>
        </div>
        <button className={`nav__burger${mobileOpen ? ' nav__burger--open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Fermer' : 'Menu'} aria-expanded={mobileOpen}>
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}

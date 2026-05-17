import { PILLARS } from '../data/recipes';

const ICONS = {
  monument: <svg width="34" height="34" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 15L18 4l12 11M9 13v17h18V13M14 30V20h8v10"/><circle cx="18" cy="9" r="0.8" fill="currentColor"/></svg>,
  leaf: <svg width="34" height="34" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 30C18 30 6 24 6 14c0-6 6-9 12-9s12 3 12 9c0 10-12 16-12 16Z"/><path d="M18 30V18M18 22c0 0-6-4-8-8M18 18c0 0 6-2 9-6"/></svg>,
  precision: <svg width="34" height="34" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="13"/><path d="M18 10v8l5 3M18 5v2M18 29v2M5 18h2M29 18h2"/><circle cx="18" cy="18" r="1.5" fill="currentColor"/></svg>,
  tea: <svg width="34" height="34" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 14h18l-2 12H11L9 14Z"/><path d="M13 9c0-3 2-3 2 0M18 9c0-3 2-3 2 0M23 9c0-3 2-3 2 0"/><path d="M11 26L9 32h18l-2-6"/></svg>
};

export default function Pillars() {
  return (
    <section className="pillars" id="pillars">
      <div className="container">
        <header className="pillars__intro reveal">
          <div className="eyebrow pillars__eyebrow"><span className="eyebrow__line" />Numéro 03 · La méthode</div>
          <h2 className="pillars__title">Ce qui rend Zahowa <em>différente.</em></h2>
        </header>
        <div className="pillars__grid">
          {PILLARS.map((p) => (
            <article key={p.id} className="pillar reveal">
              <div className="pillar__icon" aria-hidden="true">{ICONS[p.iconType]}</div>
              <h3 className="pillar__title">{p.title}</h3>
              <p className="pillar__text">{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

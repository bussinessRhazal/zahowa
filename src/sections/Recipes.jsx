import { RECIPES } from '../data/recipes';

export default function Recipes() {
  return (
    <section className="recipes" id="recipes">
      <div className="container">
        <header className="recipes__intro reveal">
          <div className="eyebrow recipes__eyebrow"><span className="eyebrow__line" />Numéro 02 · Le produit</div>
          <h2 className="recipes__title">Quatre recettes.<br /><em>Laquelle est la tienne ?</em></h2>
          <p className="recipes__subtitle">Chacune inspirée du caractère d'une ville marocaine. Chacune un rituel.</p>
        </header>

        <div className="recipes__grid" role="list">
          {RECIPES.map((r) => (
            <article key={r.id} className="recipe-card reveal" role="listitem" style={{ '--recipe-accent': r.color }}>
              <div className="recipe-card__image" style={{ backgroundImage: `url(${r.cityImage})` }}>
                <div className="recipe-card__image-overlay" />
                <div className="recipe-card__image-content">
                  <span className="recipe-card__number">{r.number}</span>
                  <h3 className="recipe-card__name">{r.name}</h3>
                  <span className="recipe-card__city">{r.city}</span>
                </div>
              </div>
              <div className="recipe-card__body">
                <p className="recipe-card__profile"><strong>{r.profile}.</strong> {r.description}</p>
                <p className="recipe-card__moment">
                  <span className="recipe-card__moment-icon" aria-hidden="true">☕</span>
                  {r.moment}
                </p>
                <div className="recipe-card__spices">
                  <span className="recipe-card__spices-label">Composition</span>
                  <ul className="recipe-card__spice-list">
                    {r.spices.map((s, i) => <li key={i}>{s.name}</li>)}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

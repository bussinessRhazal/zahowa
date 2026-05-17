import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { SITE_CONFIG, FORM_OPTIONS } from '../data/siteConfig';

export default function FoundersForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({ mode: 'onTouched' });
  const [status, setStatus] = useState(null);
  const [step, setStep] = useState(1);

  const onSubmit = async (data) => {
  try {
    const moments = Array.isArray(data.moments)
      ? data.moments.join(', ')
      : (data.moments || '');
    const res = await fetch(SITE_CONFIG.formEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ ...data, moments })
    });
    if (res.ok) { setStatus('success'); reset(); }
    else throw new Error();
  } catch { setStatus('error'); }
};

if (status === 'success') return (
  <div className="founders-form founders-form--success">
    <div className="founders-form__success">
      <div className="founders-form__success-badge">
        <svg width="28" height="28" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 30C18 30 6 24 6 14c0-6 6-9 12-9s12 3 12 9c0 10-12 16-12 16Z"/>
          <path d="M18 30V18M18 22c0 0-6-4-8-8M18 18c0 0 6-2 9-6"/>
        </svg>
      </div>
      <h3 className="founders-form__success-title">Shukran !</h3>
      <p className="founders-form__success-text">
        Tu es dans la liste. On te prévient en avant-première<br />
        dès que Zahowa est prête.
      </p>
      <p className="founders-form__success-social-label">Suis-nous sur les réseaux</p>
      <div className="founders-form__success-socials">
        <a href="https://www.facebook.com/zahowacoffee/" target="_blank" rel="noopener noreferrer" className="success-social-btn" aria-label="Facebook">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
        </a>
        <a href="https://www.instagram.com/zahowacoffee/" target="_blank" rel="noopener noreferrer" className="success-social-btn" aria-label="Instagram">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>
        </a>
        <a href="https://www.tiktok.com/@zahowacoffee" target="_blank" rel="noopener noreferrer" className="success-social-btn" aria-label="TikTok">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/></svg>
        </a>
        <a href="https://www.linkedin.com/company/zahowacoffee" target="_blank" rel="noopener noreferrer" className="success-social-btn" aria-label="LinkedIn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
        </a>
      </div>
    </div>
  </div>
);

  return (
    <div className="founders-form">
      <header className="founders-form__header">
        <h3 className="founders-form__title">Rejoindre le Cercle</h3>
        <p className="founders-form__subtitle">Quelques questions pour façonner Zahowa avec toi.</p>
        <div className="founders-form__steps" aria-hidden="true">
          {[1,2,3].map((n, i) => (<>
            {i > 0 && <span key={`l${n}`} className="founders-form__step-line" />}
            <span key={n} className={`founders-form__step${step >= n ? ' is-active' : ''}`}>{n}</span>
          </>))}
        </div>
      </header>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {step === 1 && (
          <div className="founders-form__step-content">
            <p className="founders-form__step-label">Étape 1 sur 3 · Faisons connaissance</p>
            <div className="form-group">
              <label htmlFor="prenom" className="form-label">Prénom *</label>
              <input id="prenom" type="text" className={`form-input${errors.prenom ? ' has-error' : ''}`}
                placeholder="Comment puis-je t'appeler ?"
                {...register('prenom', { required: 'Ton prénom est requis', minLength: { value: 2, message: '2 caractères min.' } })} />
              {errors.prenom && <span className="form-error">{errors.prenom.message}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email *</label>
              <input id="email" type="email" className={`form-input${errors.email ? ' has-error' : ''}`}
                placeholder="ton@email.com"
                {...register('email', { required: 'Ton email est requis', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email invalide' } })} />
              {errors.email && <span className="form-error">{errors.email.message}</span>}
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Âge *</label>
                <select className={`form-select${errors.age ? ' has-error' : ''}`} defaultValue=""
                  {...register('age', { required: 'Requis' })}>
                  <option value="" disabled>Choisir...</option>
                  {FORM_OPTIONS.ageRanges.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
                {errors.age && <span className="form-error">{errors.age.message}</span>}
              </div>
              <div className="form-group">
                <label className="form-label">Genre *</label>
                <select className={`form-select${errors.genre ? ' has-error' : ''}`} defaultValue=""
                  {...register('genre', { required: 'Requis' })}>
                  <option value="" disabled>Choisir...</option>
                  {FORM_OPTIONS.genders.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
                {errors.genre && <span className="form-error">{errors.genre.message}</span>}
              </div>
            </div>
            <div className="founders-form__actions">
              <button type="button" className="btn-primary btn-primary--full" onClick={() => {
                const ok = ['prenom','email','age','genre'].every(f => { const el = document.querySelector(`[name="${f}"]`); return el?.value && el.value !== ''; });
                if (ok) setStep(2); else handleSubmit(() => {})();
              }}>Continuer <span className="btn-primary__arrow">→</span></button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="founders-form__step-content">
            <p className="founders-form__step-label">Étape 2 sur 3 · Tes habitudes café</p>
            <div className="form-group">
              <label className="form-label">Tu bois du café... *</label>
              <div className="form-radios">
                {FORM_OPTIONS.consumption.map(o => (
                  <label key={o.value} className="form-radio">
                    <input type="radio" value={o.value} {...register('consommation', { required: true })} />
                    <span className="form-radio__mark" /><span className="form-radio__label">{o.label}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">À quels moments ? <small>(plusieurs réponses)</small></label>
              <div className="form-checks">
                {FORM_OPTIONS.moments.map(o => (
                  <label key={o.value} className="form-check">
                    <input type="checkbox" value={o.value} {...register('moments')} />
                    <span className="form-check__mark">✓</span><span className="form-check__label">{o.label}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="founders-form__actions founders-form__actions--split">
              <button type="button" className="btn-ghost" onClick={() => setStep(1)}>← Retour</button>
              <button type="button" className="btn-primary" onClick={() => {
                if (document.querySelector('[name="consommation"]:checked')) setStep(3);
              }}>Continuer <span className="btn-primary__arrow">→</span></button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="founders-form__step-content">
            <p className="founders-form__step-label">Étape 3 sur 3 · Pour finir</p>
            <div className="form-group">
              <label className="form-label">Profil aromatique *</label>
              <select className={`form-select${errors.profil ? ' has-error' : ''}`} defaultValue=""
                {...register('profil', { required: 'Requis' })}>
                <option value="" disabled>Choisir...</option>
                {FORM_OPTIONS.profiles.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
              {errors.profil && <span className="form-error">{errors.profil.message}</span>}
            </div>
            <div className="form-group">
              <label className="form-label">Tu achèterais Zahowa pour... *</label>
              <div className="form-radios form-radios--horizontal">
                {FORM_OPTIONS.intentions.map(o => (
                  <label key={o.value} className="form-radio">
                    <input type="radio" value={o.value} {...register('intention', { required: true })} />
                    <span className="form-radio__mark" /><span className="form-radio__label">{o.label}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="source" className="form-label">Comment as-tu connu Zahowa ?</label>
              <select id="source" className="form-select" defaultValue="" {...register('source')}>
                <option value="">Préfère ne pas dire</option>
                {FORM_OPTIONS.channels.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            </div>
            {status === 'error' && (
              <div className="form-error-banner">
                Erreur d'envoi. Écris-nous à <a href="mailto:contact@zahowa.com">contact@zahowa.com</a>
              </div>
            )}
            <div className="founders-form__actions founders-form__actions--split">
              <button type="button" className="btn-ghost" onClick={() => setStep(2)}>← Retour</button>
              <button type="submit" className="btn-primary btn-primary--gold" disabled={isSubmitting}>
                {isSubmitting ? 'Envoi...' : 'Réserver ma place'}
                <span className="btn-primary__arrow">→</span>
              </button>
            </div>
            <p className="founders-form__disclaimer">Pas de spam. Désinscription en 1 clic.</p>
          </div>
        )}
      </form>
    </div>
  );
}

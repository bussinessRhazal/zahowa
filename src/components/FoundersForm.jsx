import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { SITE_CONFIG, FORM_OPTIONS } from '../data/siteConfig';

export default function FoundersForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({ mode: 'onTouched' });
  const [status, setStatus] = useState(null);
  const [step, setStep] = useState(1);

  const onSubmit = async (data) => {
    try {
      const fd = new FormData();
      const moments = Array.isArray(data.moments) ? data.moments.join(', ') : (data.moments || '');
      Object.entries({ ...data, moments }).forEach(([k, v]) => fd.append(k, v || ''));
      fd.append('_subject', `Nouveau membre Cercle Fondateur — ${data.prenom}`);
      fd.append('_template', 'table');
      fd.append('_captcha', 'false');
      const res = await fetch(SITE_CONFIG.formEndpoint, { method: 'POST', headers: { Accept: 'application/json' }, body: fd });
      if (res.ok) { setStatus('success'); reset(); }
      else throw new Error();
    } catch { setStatus('error'); }
  };

  if (status === 'success') return (
    <div className="founders-form founders-form--success">
      <div className="founders-form__success">
        <div className="founders-form__success-icon">✦</div>
        <h3 className="founders-form__success-title">Bienvenue dans le Cercle.</h3>
        <p className="founders-form__success-text">Tu es désormais l'un·e des 100 fondateurs·rices de Zahowa.<br />Un email de confirmation arrive dans quelques minutes.</p>
        <p className="founders-form__success-signature">— Abdelilah, Fès</p>
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

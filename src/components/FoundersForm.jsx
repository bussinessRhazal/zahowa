import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { SITE_CONFIG, FORM_OPTIONS } from '../data/siteConfig';

export default function FoundersForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({ mode: 'onTouched' });
  const [status, setStatus] = useState(null);

  const onSubmit = async (data) => {
    try {
      const res = await fetch(SITE_CONFIG.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
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
          Tu es désormais l'un·e des 100 fondateurs·rices de Zahowa.<br />
          Un email de confirmation arrive dans quelques minutes.
        </p>
        <p className="founders-form__success-social-label">Suis-nous sur les réseaux</p>
        <div className="founders-form__success-socials">
          {[
            { href: 'https://www.instagram.com/zahowacoffee/', label: 'Instagram', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3D1F0E" strokeWidth="2" strokeLinecap="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="#3D1F0E" stroke="none"/></svg> },
            { href: 'https://www.tiktok.com/@zahowacoffee', label: 'TikTok', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="#3D1F0E"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-6.13 6.33 6.34 6.34 0 0 0 12.67 0V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/></svg> },
            { href: 'https://www.facebook.com/zahowacoffee/', label: 'Facebook', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="#3D1F0E"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
            { href: 'https://www.linkedin.com/company/zahowacoffee', label: 'LinkedIn', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="#3D1F0E"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> }
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
              className="success-social-btn" aria-label={s.label}>{s.icon}</a>
          ))}
        </div>
        <p style={{ marginTop: '24px', fontSize: '13px', opacity: 0.6 }}>
          Tu veux aller plus loin ?{' '}
          <a href="/sondage.html" style={{ color: 'var(--or-imperial)', textDecoration: 'underline' }}>
            Réponds à notre sondage de 5 min →
          </a>
        </p>
      </div>
    </div>
  );

  return (
    <div className="founders-form">
      <header className="founders-form__header">
        <h3 className="founders-form__title">Rejoindre le Cercle</h3>
        <p className="founders-form__subtitle">
          30 secondes pour réserver ta place parmi les 100 fondateurs.
        </p>
      </header>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>

        {/* Prénom */}
        <div className="form-group">
          <label htmlFor="prenom" className="form-label">Prénom *</label>
          <input id="prenom" type="text"
            className={`form-input${errors.prenom ? ' has-error' : ''}`}
            placeholder="Comment puis-je t'appeler ?"
            {...register('prenom', { required: 'Ton prénom est requis' })} />
          {errors.prenom && <span className="form-error">{errors.prenom.message}</span>}
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email *</label>
          <input id="email" type="email"
            className={`form-input${errors.email ? ' has-error' : ''}`}
            placeholder="ton@email.com"
            {...register('email', {
              required: 'Ton email est requis',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email invalide' }
            })} />
          {errors.email && <span className="form-error">{errors.email.message}</span>}
        </div>

        {/* Profil aromatique */}
        <div className="form-group">
          <label className="form-label">Quel profil t'attire ? *</label>
          <select className={`form-select${errors.profil ? ' has-error' : ''}`}
            defaultValue=""
            {...register('profil', { required: 'Choisis un profil' })}>
            <option value="" disabled>Choisir une recette...</option>
            {FORM_OPTIONS.profiles.map(o => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
          {errors.profil && <span className="form-error">{errors.profil.message}</span>}
        </div>

        {/* Intention */}
        <div className="form-group">
          <label className="form-label">Tu achèterais Zahowa pour... *</label>
          <div className="form-radios form-radios--horizontal">
            {FORM_OPTIONS.intentions.map(o => (
              <label key={o.value} className="form-radio">
                <input type="radio" value={o.value}
                  {...register('intention', { required: true })} />
                <span className="form-radio__mark" />
                <span className="form-radio__label">{o.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Consentement */}
        <div className="form-group">
          <label className="consent-label">
            <input type="checkbox"
              {...register('consentement', { required: 'Requis pour continuer' })} />
            <span className="consent-text">
              J'accepte que mes données soient utilisées conformément
              à la politique de confidentialité de Zahowa. *
            </span>
          </label>
          {errors.consentement && (
            <span className="form-error">{errors.consentement.message}</span>
          )}
        </div>

        {status === 'error' && (
          <div className="form-error-banner">
            Erreur d'envoi. Écris-nous à{' '}
            <a href="mailto:contact@zahowa.com">contact@zahowa.com</a>
          </div>
        )}

        <button type="submit" className="btn-primary btn-primary--gold btn-primary--full"
          disabled={isSubmitting}>
          {isSubmitting ? 'Envoi...' : 'Réserver ma place ✦'}
          {!isSubmitting && <span className="btn-primary__arrow">→</span>}
        </button>

        {/* Lien vers le sondage complet */}
        <p style={{ marginTop: '20px', fontSize: '12px', opacity: 0.55, textAlign: 'center', lineHeight: 1.6 }}>
          Tu veux aller plus loin et influencer nos recettes ?{' '}
          <a href="/sondage.html"
            style={{ color: 'var(--or-imperial)', textDecoration: 'underline' }}>
            Réponds à notre sondage de 5 min →
          </a>
        </p>

      </form>
    </div>
  );
}

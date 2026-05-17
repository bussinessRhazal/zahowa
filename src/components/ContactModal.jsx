import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { SITE_CONFIG } from '../data/siteConfig';

const SUBJECTS = [
  { value: 'produits', label: 'Question sur les produits' },
  { value: 'fondateurs', label: 'Cercle Fondateur' },
  { value: 'partenariat', label: 'Partenariat' },
  { value: 'autre', label: 'Autre' }
];

const SOCIALS = [
  {
    href: 'https://www.facebook.com/zahowacoffee/',
    label: 'Facebook',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    )
  },
  {
    href: 'https://www.instagram.com/zahowacoffee/',
    label: 'Instagram',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
      </svg>
    )
  },
  {
    href: 'https://www.tiktok.com/@zahowacoffee',
    label: 'TikTok',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
      </svg>
    )
  },
  {
    href: 'https://www.linkedin.com/company/zahowacoffee',
    label: 'LinkedIn',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    )
  }
];

export default function ContactModal({ onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm();
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const onSubmit = async (data) => {
    try {
      const res = await fetch(SITE_CONFIG.formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (res.ok) { setStatus('success'); reset(); }
      else throw new Error();
    } catch { setStatus('error'); }
  };

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-box">
        <button className="modal-close" onClick={onClose} aria-label="Fermer">✕</button>

        <div className="modal-header">
          <div className="eyebrow" style={{ color: 'var(--or-imperial)' }}>
            <span className="eyebrow__line" />Contact
          </div>
          <h2 className="modal-title">Nous écrire</h2>
          <p className="modal-subtitle">Une question ? Une idée ? On te lit.</p>
        </div>

        {status === 'success' ? (
          <div className="contact-success">
            <div className="founders-form__success-badge" style={{ margin: '0 auto 20px' }}>
              <svg width="28" height="28" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 30C18 30 6 24 6 14c0-6 6-9 12-9s12 3 12 9c0 10-12 16-12 16Z"/>
                <path d="M18 30V18M18 22c0 0-6-4-8-8M18 18c0 0 6-2 9-6"/>
              </svg>
            </div>
            <h3 className="contact-success__title">Shukran !</h3>
            <p className="contact-success__text">
              Merci pour ton message.<br />
              Nous reviendrons vers toi dans les plus brefs délais.
            </p>
            <p className="founders-form__success-social-label" style={{ color: 'var(--text-secondary)' }}>
              Suis-nous sur les réseaux
            </p>
            <div className="founders-form__success-socials">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="success-social-btn" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
            <button className="btn-primary" style={{ marginTop: '28px' }} onClick={onClose}>
              Fermer <span className="btn-primary__arrow">→</span>
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} noValidate>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label--light" htmlFor="c-prenom">Prénom *</label>
                <input id="c-prenom" type="text"
                  className={`form-input form-input--light${errors.prenom ? ' has-error' : ''}`}
                  placeholder="Ton prénom"
                  {...register('prenom', { required: 'Requis' })} />
                {errors.prenom && <span className="form-error">{errors.prenom.message}</span>}
              </div>
              <div className="form-group">
                <label className="form-label--light" htmlFor="c-email">Email *</label>
                <input id="c-email" type="email"
                  className={`form-input form-input--light${errors.email ? ' has-error' : ''}`}
                  placeholder="ton@email.com"
                  {...register('email', {
                    required: 'Requis',
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email invalide' }
                  })} />
                {errors.email && <span className="form-error">{errors.email.message}</span>}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label--light" htmlFor="c-sujet">Sujet *</label>
              <select id="c-sujet" defaultValue=""
                className={`form-input form-input--light form-select--light${errors.sujet ? ' has-error' : ''}`}
                {...register('sujet', { required: 'Sélectionne un sujet' })}>
                <option value="" disabled>Choisir un sujet...</option>
                {SUBJECTS.map((s) => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </select>
              {errors.sujet && <span className="form-error">{errors.sujet.message}</span>}
            </div>

            <div className="form-group">
              <label className="form-label--light" htmlFor="c-msg">Message *</label>
              <textarea id="c-msg" rows="5"
                className={`form-input form-input--light form-textarea${errors.message ? ' has-error' : ''}`}
                placeholder="Ton message..."
                {...register('message', {
                  required: 'Requis',
                  minLength: { value: 10, message: '10 caractères minimum' }
                })} />
              {errors.message && <span className="form-error">{errors.message.message}</span>}
            </div>

            {/* Case de consentement RGPD */}
            <div className="form-group">
              <label className="consent-label">
                <input type="checkbox"
                  {...register('consentement', { required: 'Tu dois accepter pour continuer' })} />
                <span className="consent-text">
                  J'accepte que mes données soient utilisées pour traiter ma demande,
                  conformément à la politique de confidentialité de Zahowa. *
                </span>
              </label>
              {errors.consentement && (
                <span className="form-error">{errors.consentement.message}</span>
              )}
            </div>

            {status === 'error' && (
              <div className="form-error-banner">
                Erreur d'envoi. Écris-nous à{' '}
                <a href={`mailto:${SITE_CONFIG.contact.email}`}>{SITE_CONFIG.contact.email}</a>
              </div>
            )}

            <button type="submit" className="btn-primary btn-primary--full" disabled={isSubmitting}>
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
              <span className="btn-primary__arrow">→</span>
            </button>

          </form>
        )}
      </div>
    </div>
  );
}

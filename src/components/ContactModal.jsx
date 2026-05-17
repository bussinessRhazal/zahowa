import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { SITE_CONFIG } from '../data/siteConfig';

export default function ContactModal({ onClose }) {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose]);

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
  <div className="modal-success">
    <div className="founders-form__success-badge" style={{ margin: '0 auto 20px' }}>
      <svg width="28" height="28" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 30C18 30 6 24 6 14c0-6 6-9 12-9s12 3 12 9c0 10-12 16-12 16Z"/>
        <path d="M18 30V18M18 22c0 0-6-4-8-8M18 18c0 0 6-2 9-6"/>
      </svg>
    </div>
    <h3 className="founders-form__success-title" style={{ color: 'var(--chocolat-fes)', fontSize: 'clamp(22px,3vw,30px)' }}>
      Shukran !
    </h3>
    <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: '12px 0 28px' }}>
      Merci pour ton message.<br />
      Nous reviendrons vers toi dans les plus brefs délais.
    </p>
    <button className="btn-primary" onClick={onClose}>
      Fermer <span className="btn-primary__arrow">→</span>
    </button>
  </div>
) : (
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label--light" htmlFor="c-prenom">Prénom *</label>
                <input id="c-prenom" type="text" className={`form-input form-input--light${errors.prenom ? ' has-error' : ''}`}
                  placeholder="Ton prénom" {...register('prenom', { required: 'Requis' })} />
                {errors.prenom && <span className="form-error">{errors.prenom.message}</span>}
              </div>
              <div className="form-group">
                <label className="form-label--light" htmlFor="c-email">Email *</label>
                <input id="c-email" type="email" className={`form-input form-input--light${errors.email ? ' has-error' : ''}`}
                  placeholder="ton@email.com"
                  {...register('email', { required: 'Requis', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email invalide' } })} />
                {errors.email && <span className="form-error">{errors.email.message}</span>}
              </div>
            </div>
            <div className="form-group">
              <label className="form-label--light" htmlFor="c-sujet">Sujet *</label>
              <input id="c-sujet" type="text" className={`form-input form-input--light${errors.sujet ? ' has-error' : ''}`}
                placeholder="De quoi s'agit-il ?" {...register('sujet', { required: 'Requis' })} />
              {errors.sujet && <span className="form-error">{errors.sujet.message}</span>}
            </div>
            <div className="form-group">
              <label className="form-label--light" htmlFor="c-msg">Message *</label>
              <textarea id="c-msg" rows="5" className={`form-input form-input--light form-textarea${errors.message ? ' has-error' : ''}`}
                placeholder="Ton message..."
                {...register('message', { required: 'Requis', minLength: { value: 10, message: '10 caractères min.' } })} />
              {errors.message && <span className="form-error">{errors.message.message}</span>}
            </div>
            {status === 'error' && (
              <div className="form-error-banner">
                Erreur. Écris-nous à <a href={`mailto:${SITE_CONFIG.contact.email}`}>{SITE_CONFIG.contact.email}</a>
              </div>
            )}
            <button type="submit" className="btn-primary btn-primary--full" disabled={isSubmitting}>
              {isSubmitting ? 'Envoi...' : 'Envoyer le message'}
              <span className="btn-primary__arrow">→</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

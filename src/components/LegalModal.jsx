import { useEffect } from 'react';

const CONTENT = {
  mentions: {
    title: 'Mentions légales',
    sections: [
      { h: '1. Éditeur du site', t: "Le site Zahowa.com est édité par le fondateur de la marque Zahowa.\n\nEmail : contact@zahowa.com\n\n(Informations SIRET et adresse postale à compléter dès l'immatriculation.)" },
      { h: '2. Hébergement', t: "GitHub, Inc. — 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis.\nhttps://pages.github.com" },
      { h: '3. Propriété intellectuelle', t: "L'ensemble du contenu du site Zahowa.com (textes, images, logo, etc.) est la propriété exclusive de Zahowa. Toute reproduction sans autorisation écrite est interdite. La marque Zahowa est déposée ou en cours de dépôt." },
      { h: '4. Responsabilité', t: "Le site propose un accès anticipé à un produit en phase de finalisation. Les descriptions sont indicatives et sujettes à évolution avant le lancement commercial." },
      { h: '5. Contact', t: "contact@zahowa.com" }
    ]
  },
  confidentialite: {
    title: 'Politique de confidentialité',
    sections: [
      { h: 'Dernière mise à jour : mai 2026', t: '' },
      { h: '1. Responsable du traitement', t: "Le fondateur de la marque Zahowa.\nEmail : contact@zahowa.com" },
      { h: '2. Données collectées', t: "Uniquement les données transmises via le formulaire :\n• Adresse email\n• Réponses au questionnaire (âge, genre, habitudes café, profil aromatique)\n\nAucun cookie publicitaire, aucune donnée de navigation." },
      { h: '3. Finalités', t: "• Vous informer du lancement\n• Vous donner accès au Cercle Fondateur\n• Affiner les recettes selon vos préférences\n\nBase légale : consentement explicite (art. 6.1.a RGPD)." },
      { h: '4. Destinataires', t: "Données stockées chez Brevo (sous-traitant RGPD). Aucune vente ni transfert à des tiers." },
      { h: '5. Durée de conservation', t: "Jusqu'à désinscription. Suppression sous 30 jours après votre demande." },
      { h: '6. Vos droits (RGPD)', t: "Accès · Rectification · Effacement · Portabilité · Opposition\n\nExercer vos droits : contact@zahowa.com\nRéclamation possible auprès de la CNIL (www.cnil.fr)." },
      { h: '7. Cookies', t: "Aucun cookie publicitaire. Seuls des cookies techniques peuvent être déposés par GitHub Pages pour le bon fonctionnement du service." },
      { h: '8. Contact', t: "contact@zahowa.com" }
    ]
  }
};

export default function LegalModal({ type, onClose }) {
  const content = CONTENT[type];

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose]);

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-label={content.title}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-box modal-box--legal">
        <button className="modal-close" onClick={onClose} aria-label="Fermer">✕</button>
        <div className="modal-header">
          <div className="eyebrow" style={{ color: 'var(--or-imperial)' }}>
            <span className="eyebrow__line" />Informations légales
          </div>
          <h2 className="modal-title">{content.title}</h2>
        </div>
        <div className="legal-content">
          {content.sections.map((s, i) => (
            <div key={i} className="legal-section">
              {s.h && <h3 className="legal-section__title">{s.h}</h3>}
              {s.t && <p className="legal-section__text">
                {s.t.split('\n').map((line, j, arr) => (
                  <span key={j}>{line}{j < arr.length - 1 && <br />}</span>
                ))}
              </p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

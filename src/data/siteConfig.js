export const SITE_CONFIG = {
  name: 'Zahowa',
  url: 'https://zahowa.com',
  title: "Zahowa — Le café épicé, comme tu ne l'as jamais bu.",
  description: "Zahowa — Café épicé artisanal en sachet d'infusion. Quatre recettes inspirées du Maroc. Rejoins le Cercle Fondateur — 100 places exclusives.",
  contact: { email: 'contact@zahowa.com' },
  social: {
    instagram: 'https://www.instagram.com/zahowacoffee/',
    tiktok: 'https://www.tiktok.com/@zahowacoffee',
    facebook: 'https://www.facebook.com/zahowacoffee/',
    linkedin: 'https://www.linkedin.com/company/zahowacoffee'
  },
  // ⚠️ Remplacer par ton hash FormSubmit après première soumission
  formEndpoint: 'https://formsubmit.co/ajax/contact@zahowa.com',
  founderCircle: {
    totalSeats: 100,
    seatsTaken: 12,
    benefits: [
      { title: 'Accès en avant-première', text: "Prévenu·e en priorité dès que les premières boîtes sont disponibles." },
      { title: 'Profil aromatique pris en compte', text: "Tes réponses influencent directement les recettes finales." },
      { title: '−10% sur ta première commande', text: "Une réduction immédiate sur le coffret découverte dès le lancement." },
      { title: '−10% à vie', text: "Sur toutes tes commandes permanentes, sans exception ni date de fin." },
      { title: 'Prénom dans les remerciements', text: "Sur le site et les réseaux au lancement officiel." }
    ]
  }
};

export const FORM_OPTIONS = {
  ageRanges: [
    { value: '18-24', label: '18-24 ans' },
    { value: '25-34', label: '25-34 ans' },
    { value: '35-44', label: '35-44 ans' },
    { value: '45-54', label: '45-54 ans' },
    { value: '55+', label: '55 ans et +' }
  ],
  genders: [
    { value: 'femme', label: 'Femme' },
    { value: 'homme', label: 'Homme' },
    { value: 'nsp', label: 'Préfère ne pas dire' }
  ],
  consumption: [
    { value: 'quotidien', label: 'Tous les jours' },
    { value: 'plusieurs-semaine', label: 'Plusieurs fois par semaine' },
    { value: 'occasionnel', label: 'Occasionnellement' },
    { value: 'jamais', label: 'Je ne bois pas de café actuellement' }
  ],
  moments: [
    { value: 'matin', label: 'Matin' },
    { value: 'midi', label: 'Après-déjeuner' },
    { value: 'apres-midi', label: 'Après-midi' },
    { value: 'soir', label: 'Soir' }
  ],
  profiles: [
    { value: 'sucre', label: 'Sucré & Équilibré' },
    { value: 'chaud', label: 'Chaud & Réconfortant' },
    { value: 'floral', label: 'Floral & Subtil' },
    { value: 'intense', label: 'Intense & Complexe' },
    { value: 'jenesaispas', label: 'Je ne sais pas encore — surprends-moi' }
  ],
  intentions: [
    { value: 'moi', label: 'Pour moi-même' },
    { value: 'offrir', label: 'Pour offrir' },
    { value: 'les-deux', label: 'Les deux' }
  ],
  channels: [
    { value: 'instagram', label: 'Instagram' },
    { value: 'tiktok', label: 'TikTok' },
    { value: 'linkedin', label: 'LinkedIn' },
    { value: 'facebook', label: 'Facebook' },
    { value: 'boa', label: 'Bouche-à-oreille' },
    { value: 'recherche', label: 'Recherche Google' },
    { value: 'autre', label: 'Autre' }
  ]
};

export const RECIPES = [
  {
    id: 'aube-casablanca',
    number: '01',
    name: 'Aube de Casablanca',
    city: 'Atlantique · Douceur',
    profile: 'Sucré & Équilibré',
    description: "L'éveil sucré de l'Atlantique.",
    moment: 'Le matin, pour un réveil tout en douceur',
    cityImage: '/images/recipe-casablanca.webp',
    spices: [
      { name: 'Anis vert' },
      { name: 'Fenouil' },
      { name: 'Cannelle Ceylan' },
      { name: 'Vanille Bourbon', isEuropean: true }
    ],
    color: '#C9A547'
  },
  {
    id: 'grace-rabat',
    number: '02',
    name: 'Grâce de Rabat',
    city: 'Royale · Feutrée',
    profile: 'Chaud & Réconfortant',
    description: 'Le cocon royal.',
    moment: "Après le déjeuner ou en fin d'après-midi",
    cityImage: '/images/recipe-rabat.webp',
    spices: [
      { name: 'Cannelle Ceylan' },
      { name: 'Gingembre séché' },
      { name: 'Cardamome verte' },
      { name: "Miel d'acacia", isEuropean: true }
    ],
    color: '#B8922A'
  },
  {
    id: 'ame-fes',
    number: '03',
    name: 'Âme de Fès',
    city: 'Spirituelle · Millénaire',
    profile: 'Floral & Subtil',
    description: 'La contemplation florale.',
    moment: 'Le soir, pour un moment de contemplation',
    cityImage: '/images/recipe-fes.webp',
    spices: [
      { name: 'Rose damascena' },
      { name: 'Safran de Taliouine' },
      { name: 'Cardamome verte' },
      { name: 'Lavande de Provence', isEuropean: true }
    ],
    color: '#A5824D'
  },
  {
    id: 'fievre-marrakech',
    number: '04',
    name: 'Fièvre de Marrakech',
    city: 'Intense · Charnelle',
    profile: 'Intense & Complexe',
    description: 'Le caractère du Sud.',
    moment: "L'après-midi ou après un repas généreux",
    cityImage: '/images/recipe-marrakech.webp',
    spices: [
      { name: 'Poivre noir Tellichery' },
      { name: 'Clou de girofle' },
      { name: 'Anis étoilé' },
      { name: 'Cacao cru', isEuropean: true }
    ],
    color: '#7B3A1A'
  }
];

export const PILLARS = [
  {
    id: 'tradition',
    title: 'Tradition validée',
    text: 'La Qahwa épicée existe depuis le XVe siècle dans les médinas du Maghreb. Six cents ans de raffinement. Pas une mode — un héritage.',
    iconType: 'monument'
  },
  {
    id: 'naturel',
    title: 'Épices 100% naturelles',
    text: 'Chaque épice est soigneusement sélectionnée à la source — des marchés de Fès aux plantations de cardamome. Aucun arôme artificiel, aucun additif.',
    iconType: 'leaf'
  },
  {
    id: 'precision',
    title: 'Précision technique',
    text: "92°C exactement, 5 minutes, granulométrie spécifique. Chaque recette a sa fenêtre d'extraction calibrée pour préserver les arômes des épices.",
    iconType: 'precision'
  },
  {
    id: 'rituel',
    title: 'Format infusion',
    text: 'Sachet mousseline biodégradable. Extraction douce qui respecte les huiles essentielles des épices. Un sachet. Une tasse. Un rituel.',
    iconType: 'tea'
  }
];

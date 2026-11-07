import type { Dictionary } from "../translations";

/* ───────────────────────── French (fr) ─────────────────────────
   Full French translation of the Herbs Milanos B2B dictionary.
   Product names (Basil, Chamomile, Hibiscus, Cumin, …) are kept in
   English as trade proper nouns. Latin names are left as-is.
   Trade terms (FOB, CIF, CFR, MOQ, COA, HACCP, ISO, RFQ, TBC, T/T,
   L/C, MRL, TPC) are kept as-is.
─────────────────────────────────────────────────────────────────── */

const fr: Dictionary = {
  nav: {
    home: "Accueil",
    about: "À propos de nous",
    products: "Produits",
    resources: "Ressources d'exportation",
    faq: "FAQ",
    contact: "Contact",
    requestQuote: "Demander un devis",
  },
  hero: {
    badge:
      "🌿 Herbs Milanos · Plébiscité par les acheteurs B2B dans plus de 30 pays depuis 2000",
    headline:
      "Herbes et épices égyptiennes premium — Direct usine jusqu'à votre conteneur",
    subhead:
      "Sourcez Chamomile, Hibiscus, Peppermint, Cumin, Fennel et plus de 85 botanicals directement depuis nos propres fermes à Beni Suef. Certifié ISO 22000 + HACCP, trié magnétiquement à 99,9 % de pureté, expédié FOB/CIF depuis Alexandrie. Recevez un devis sous 24 heures.",
    ctaPrimary: "Obtenir un devis en gros →",
    ctaSecondary: "Télécharger le catalogue",
    trust1: "MOQ à partir de 1 MT",
    trust2: "FOB · CIF · CFR",
    trust3: "ISO 22000 · HACCP",
    trust4: "89+ références en stock",
  },
  why: {
    eyebrow: "Pourquoi les acheteurs B2B choisissent Herbs Milanos",
    heading:
      "Trois raisons pour lesquelles les importateurs nous reviennent — expédition après expédition.",
    cards: [
      {
        title: "Fermes en propriété, prix directs",
        body: "Nous cultivons sur nos propres fermes biologiques à Beni Suef — sans intermédiaires, sans marges de négoce. Vous achetez au prix ferme + coût de transformation, avec une traçabilité complète de la graine au conteneur.",
      },
      {
        title: "99,9 % de pureté, vérifiée en laboratoire",
        body: "Chaque lot passe le tri magnétique Iron Picking, les tests d'humidité et d'huile volatile, ainsi que le criblage microbien. Un Certificat d'Analyse (COA) accompagne chaque expédition — sans exception.",
      },
      {
        title: "Plus de 15 ans de fiabilité à l'export",
        body: "Nous fournissons des marques de thé de l'UE, des distributeurs d'épices américains et des fabricants alimentaires du Golfe depuis 2000. Commandes en conteneurs mixtes, conditionnement en marque privée et inspection par tierce partie — le tout géré en interne.",
      },
    ],
  },
  certs: {
    eyebrow: "Nos certifications",
    body: "Nous nous engageons à respecter les normes les plus strictes en matière de sécurité alimentaire et de santé sur chaque expédition que nous exportons.",
    items: [
      { name: "ISO 9001:2015", desc: "Système de management de la qualité" },
      {
        name: "ISO 22000:2018",
        desc: "Système de management de la sécurité des denrées alimentaires",
      },
      {
        name: "HACCP",
        desc: "Analyse des risques et maîtrise des points critiques",
      },
    ],
    download: "Télécharger le certificat",
  },
  about: {
    heroTitle:
      "Du sol égyptien aux rayons du monde entier — Plus de 20 ans d'excellence botanique",
    storyHeading: "Notre histoire",
    storyP1:
      "Pendant plus d'une décennie, nous avons servi comme fournisseur national de confiance, en maîtrisant l'art du nettoyage, du tri et de la transformation des matières premières botaniques vers une pureté de qualité export. En 2000, nous avons lancé Herbs Milanos — en apportant notre expertise de la ferme au conteneur directement aux acheteurs B2B internationaux.",
    storyP2:
      "Aujourd'hui, Herbs Milanos est l'un des plus grands exportateurs d'herbes et d'épices d'Égypte. Nous possédons plus de 50 acres de terres agricoles biologiques à Beni Suef, nous exploitons une installation de transformation à cycle complet avec tri magnétique et stérilisation à la vapeur, et nous expédions vers plus de 30 pays. Notre promesse est simple : qualité premium, prix compétitifs et livraison à temps — chaque expédition, à chaque fois.",
    processHeading: "De la graine au conteneur — Notre processus en 4 étapes",
    process: [
      {
        title: "1. Culture et récolte",
        body: "Nous sélectionnons des variétés de semences premium et nous cultivons sur nos propres fermes à Beni Suef selon des pratiques durables. Le calendrier de récolte est optimisé pour maximiser la teneur en huile volatile et la rétention de la couleur.",
      },
      {
        title: "2. Séchage et transformation",
        body: "Séchage au soleil et déshydratation mécanique dans des tunnels à basse température qui préservent les arômes, les couleurs et les composés actifs naturels. Aucun additif chimique, jamais.",
      },
      {
        title: "3. Tri magnétique et nettoyage",
        body: "Tri mécanique avancé + aimants Iron Picking pour éliminer les impuretés métalliques et atteindre 99,9 % de pureté. Des trieurs optiques séparent par couleur et par taille pour un produit homogène et propre.",
      },
      {
        title: "4. Conditionnement et exportation",
        body: "Conditionné en sacs de 25 kg de qualité alimentaire avec doublure PE intérieure, ou emballage en marque privée personnalisé. Expédié FOB/CIF/CFR depuis Alexandrie, Port-Saïd ou Damiette — avec documentation complète.",
      },
    ],
    visionHeading: "Notre vision",
    vision:
      "Être la source la plus fiable et transparente au monde d'ingrédients botaniques égyptiens — où chaque acheteur sait exactement ce que contient son conteneur, et où chaque agriculteur obtient un prix juste.",
    missionHeading: "Notre mission",
    mission:
      "Livrer des botaniques cultivés en Égypte d'exception aux fabricants du monde entier, soutenus par une traçabilité complète, des analyses de qualité rigoureuses et un service après-vente qui dépasse les attentes — tout en soutenant une agriculture durable dans les communautés où nous cultivons.",
    galleryHeading: "Nos fermes et installations",
  },
  products: {
    eyebrow: "Catalogue de gros",
    heading:
      "89 botaniques égyptiens — sourcés, transformés et prêts à expédier",
    intro:
      "Parcourez notre catalogue complet d'herbes, fleurs, graines et épices séchées. Chaque produit est accompagné d'un Certificat d'Analyse (COA) et est disponible en forme entière, coupée, TBC, frottée ou en poudre. Filtrez par famille ou par industrie pour trouver votre spécification exacte.",
    searchPlaceholder: "Rechercher des produits…",
    familyLabel: "Famille de produit",
    industryLabel: "Application",
    gradeLabel: "Qualité",
    formLabel: "Forme disponible",
    clear: "Effacer",
    showing: (n, total) => `Affichage de ${n} sur ${total} produits`,
    noMatch: "Aucun produit ne correspond à vos filtres.",
    clearFilters: "Effacer les filtres",
    viewDetails: "Voir les caractéristiques et les prix",
    downloadCatalogue: "Télécharger le catalogue",
    requestQuote: "Obtenir un devis en gros",
  },
  productDetail: {
    origin: "Pays d'origine",
    harvest: "Méthode de récolte",
    brief: "Description succincte",
    specs: "Spécifications techniques et analytiques",
    micro: "Critères microbiologiques",
    forms: "Formes de coupe disponibles",
    packing: "Options de conditionnement",
    storage: "Stockage et durée de conservation",
    shelfLife: "Durée de conservation",
    certifications: "Certifications et documents disponibles",
    purity: "Pureté",
    moisture: "Humidité",
    volatileOil: "Huile volatile",
    foreignOrganic: "Matières organiques étrangères",
    foreignInorganic: "Matières inorganiques étrangères",
    appearance: "Aspect",
    color: "Couleur",
    totalPlate: "Flore totale",
    yeastMold: "Levures et moisissures",
    ecoli: "E. coli",
    salmonella: "Salmonella",
    downloadSpec: "Télécharger la fiche technique (PDF)",
    requestSample: "Demander un échantillon de ce lot",
    requestQuote: "Demander un devis personnalisé",
    availableOnRequest: "Disponible sur demande",
    back: "Retour aux produits",
  },
  resources: {
    eyebrow: "Ressources d'exportation et guide de l'acheteur international",
    heading:
      "Ressources pratiques pour planifier votre sourcing de botaniques égyptiens",
    rfqTitle: "Comment demander un devis professionnel (RFQ)",
    rfqIntro:
      "Pour recevoir un devis précis sous 24 heures, incluez ces détails dans votre demande :",
    rfqPoints: [
      "Nom du produit et qualité (Conventional UE ou Organic EC+NOP)",
      "Forme requise (entier, coupé, TBC, frotté, poudre ou moulu)",
      "Quantité prévue (en tonnes métriques ou nombre de conteneurs 20 pieds)",
      "Conditionnement préféré (sacs PP de 25 kg, cartons doublés, ou marque privée personnalisée)",
      "Port de destination + incoterm préféré (FOB Alexandrie, CIF Hambourg, CFR Rotterdam)",
    ],
    harvestTitle: "Calendrier de récolte égyptien — Planifiez vos commandes",
    harvestIntro:
      "Les fenêtres de récolte varient selon la culture et la région. Pour obtenir les meilleurs prix et la meilleure disponibilité, envoyez votre RFQ 1 à 2 mois avant le début de la saison de récolte.",
    harvestRows: [
      { crop: "Chamomile & Anise", season: "Printemps (avril – mai)" },
      { crop: "Hibiscus", season: "Automne (octobre – novembre)" },
      {
        crop: "Cumin & Coriander",
        season: "Fin du printemps / début de l'été",
      },
      {
        crop: "Peppermint & Spearmint",
        season: "Été (mai – août, coupes multiples)",
      },
      { crop: "Basil & Marjoram", season: "Été (juin – septembre)" },
      { crop: "Sesame", season: "Automne (septembre – novembre)" },
    ],
    harvestNote:
      "Un stock toute l'année est disponible grâce à nos installations de stockage modernes à Beni Suef. Contactez-nous pour la disponibilité actuelle des récoltes et les prix spot.",
    qualityTitle: "Assurance qualité et normes de transformation",
    qualityBody:
      "Chaque produit subit : 1) Nettoyage mécanique et tri optique, 2) Aimants Iron Picking pour éliminer les impuretés métalliques jusqu'à 99,9 % de pureté, 3) Tests d'humidité et d'huile volatile, 4) Criblage microbien (TPC, levures/moisissures, E. coli, Salmonella). Stérilisation à la vapeur disponible sur demande. Un COA spécifique au lot accompagne chaque expédition.",
  },
  faq: {
    eyebrow: "FAQ B2B",
    heading: "Posez-nous vos questions",
    intro:
      "Des réponses claires et complètes aux questions les plus fréquentes sur notre entreprise, nos produits, la qualité, les commandes, le conditionnement, l'expédition, le stockage et le contact.",
    categories: [
      {
        id: "about",
        title: "À propos de Herbs Milanos",
        items: [
          {
            q: "Qui êtes-vous ?",
            a: "Nous sommes Herbs Milanos — un exportateur égyptien d'herbes, d'épices, de graines et de plantes aromatiques depuis 2000. Nous opérons à la fois comme fabricant et négociant, avec nos propres fermes à Beni Suef et des installations de transformation certifiées ISO 22000 & HACCP.",
          },
          {
            q: "Êtes-vous un fabricant ou un négociant ?",
            a: "Les deux. Nous transformons et conditionnons les produits dans nos propres installations, et nous sourçons les herbes auprès de fermes et de régions de production à travers l'Égypte — notamment Fayoum, Beni Suef, Minya et Assiout — selon le produit et la saison.",
          },
          {
            q: "Pourquoi sourcer les herbes en Égypte ?",
            a: "L'Égypte est une origine importante pour Chamomile, Basil, Marjoram, Mint, Caraway, Coriander, Fennel, Anise, Hibiscus et d'autres cultures. Le climat, les conditions de culture et de récolte favorisent un arôme, une couleur et des volumes d'approvisionnement souhaitables ; les paramètres de qualité dépendent de la culture et du lot.",
          },
        ],
      },
      {
        id: "products",
        title: "Produits et spécifications",
        items: [
          {
            q: "Quels produits exportez-vous ?",
            a: "Nous exportons des herbes, fleurs, graines et épices séchées, ainsi que des plantes médicinales et aromatiques. Explorez notre catalogue produits complet pour découvrir les articles disponibles.",
          },
          {
            q: "Quelles coupes et formes sont disponibles ?",
            a: "Selon le produit : entier, concassé, coupé, coupe pour sachets de thé (TBC), tamisé, frotté ou en poudre. Les tailles de maille et de coupe personnalisées peuvent être discutées sur demande.",
          },
          {
            q: "Fournissez-vous les spécifications des produits ?",
            a: "Les spécifications sont disponibles pour certains articles. Demandez à notre équipe export la fiche technique pertinente et le Certificat d'Analyse (COA) spécifique au lot disponible. La portée des tests dépend du produit, du lot et des exigences du client.",
          },
          {
            q: "Vos produits sont-ils biologiques ?",
            a: "Des produits conventionnels sont disponibles. Si vous avez besoin de matériel biologique certifié, veuillez confirmer avec nous la disponibilité du produit et la certification valide avant de commander.",
          },
          {
            q: "Pouvez-vous respecter les exigences de l'UE en matière de pesticides (LMR) ?",
            a: "Oui. Nous nous conformons aux normes mondiales de sécurité alimentaire. Les tests de résidus de pesticides peuvent être effectués selon les exigences de votre marché cible. La conformité est confirmée par des résultats de laboratoire accrédités pour le produit et le lot spécifique avant expédition.",
          },
          {
            q: "Vos herbes sont-elles stérilisées ou traitées ?",
            a: "Les options de traitement et de contrôle microbien, y compris la stérilisation à la vapeur lorsque cela est possible, peuvent être discutées par produit. Veuillez préciser vos exigences afin que nous puissions confirmer le processus et la documentation disponibles.",
          },
        ],
      },
      {
        id: "quality",
        title: "Qualité et certifications",
        items: [
          {
            q: "Quelles certifications possédez-vous ?",
            a: "Nous sommes certifiés ISO 9001:2015 et ISO 22000:2018 et nous suivons les principes de sécurité alimentaire HACCP. Une copie de nos certificats valides peut être fournie sur demande.",
          },
          {
            q: "Comment contrôlez-vous la qualité ?",
            a: "Les matières premières sont inspectées et transformées selon les exigences du produit, avec des étapes de nettoyage, de tri et de conditionnement. L'échantillonnage, les paramètres de test et les limites d'acceptation peuvent être convenus pour chaque commande.",
          },
          {
            q: "Puis-je obtenir un échantillon avant de commander ?",
            a: "Des échantillons peuvent être disponibles selon le produit et le stock. Notre équipe confirmera la quantité d'échantillon, le coût, les frais de messagerie et la possibilité de prélever un échantillon sur le lot d'expédition prévu.",
          },
          {
            q: "Puis-je envoyer mon propre inspecteur ou faire appel à une inspection par tierce partie ?",
            a: "Oui, une inspection par tierce partie peut être organisée par accord. Veuillez indiquer votre agence d'inspection préférée, la portée et le calendrier avant de confirmer la commande.",
          },
        ],
      },
      {
        id: "orders",
        title: "Commandes et tarification",
        items: [
          {
            q: "Quelle est votre quantité minimale de commande (MOQ) ?",
            a: "Généralement 1 tonne métrique par produit, et nous acceptons les chargements mixtes en conteneurs 20 pieds afin que vous puissiez diversifier votre commande. Les commandes d'essai plus petites peuvent être discutées selon le produit et la disponibilité du stock.",
          },
          {
            q: "Puis-je mélanger plusieurs produits dans un seul conteneur ?",
            a: "Oui, les commandes en conteneurs mixtes peuvent être possibles lorsque la compatibilité des produits, le conditionnement et les conditions logistiques le permettent. Envoyez-nous votre liste de produits et les quantités demandées.",
          },
          {
            q: "Comment fixez-vous les prix de vos produits ?",
            a: "Le prix dépend du produit, de la qualité, de la quantité, de la saison, du conditionnement et des conditions de livraison. Demandez un devis à jour en indiquant votre port de destination et l'incoterm préféré (FOB, CFR, CIF).",
          },
          {
            q: "Pourquoi les prix changent-ils au cours de l'année ?",
            a: "Les prix sont influencés par la disponibilité des récoltes agricoles, la qualité de la récolte, la météo, les coûts de transformation et la demande du marché tout au long de l'année.",
          },
          {
            q: "Quelles sont vos conditions de paiement ?",
            a: "Nos conditions standard sont 30 % d'avance par T/T et 70 % contre copie des documents d'expédition. Nous acceptons également la L/C irrévocable à vue pour les commandes importantes, et des conditions flexibles peuvent être discutées pour les clients réguliers.",
          },
        ],
      },
      {
        id: "packing",
        title: "Conditionnement et marque privée",
        items: [
          {
            q: "Comment les produits sont-ils conditionnés ?",
            a: "Les herbes et épices en vrac peuvent être cotées en sacs appropriés ou en cartons doublés, selon l'article et la destination. Les huiles peuvent être disponibles en fûts, jerricans ou bouteilles. Les matériaux exacts et les tailles d'emballage sont confirmés dans l'offre.",
          },
          {
            q: "Proposez-vous le conditionnement en marque privée ou au détail ?",
            a: "Les options de conditionnement en marque privée et au détail peuvent être discutées selon le produit, le volume de commande, la disponibilité des emballages et les exigences légales d'étiquetage de votre marché cible.",
          },
          {
            q: "Les produits peuvent-ils être palettisés et fumigés ?",
            a: "Oui, la palettisation et le traitement ou les certificats spécifiques à la destination peuvent être discutés lorsque cela est nécessaire et applicable.",
          },
        ],
      },
      {
        id: "shipping",
        title: "Expédition et documents",
        items: [
          {
            q: "Depuis quels ports expédiez-vous ?",
            a: "Nous expédions généralement depuis Alexandrie, Port-Saïd et Damiette. Le choix dépend de la destination, de la disponibilité du transporteur et de votre incoterm préféré.",
          },
          {
            q: "Combien de temps faut-il pour préparer une commande ?",
            a: "Généralement 2 à 4 semaines après la confirmation de la commande et le paiement, selon la quantité et la transformation requise (stérilisation, coupes spéciales, analyses de laboratoire).",
          },
          {
            q: "Quels documents fournissez-vous ?",
            a: "Nous fournissons un jeu complet de documents d'expédition : Facture Commerciale, Liste de Colisage, Certificat d'Origine, Certificat Phytosanitaire et Certificat d'Analyse (COA).",
          },
          {
            q: "Puis-je bénéficier de droits de douane réduits ?",
            a: "Un traitement tarifaire préférentiel peut s'appliquer au titre des accords commerciaux selon la classification du produit, les règles d'origine et le pays importateur. Veuillez vérifier auprès de votre transitaire ; nous pouvons discuter de la documentation d'origine applicable.",
          },
          {
            q: "Pouvez-vous expédier vers mon pays ?",
            a: "Envoyez-nous votre pays et votre port de destination afin que nous puissions vérifier les possibilités d'expédition, les restrictions produits et la documentation requise.",
          },
        ],
      },
      {
        id: "storage",
        title: "Stockage et durée de conservation",
        items: [
          {
            q: "Quelle est la durée de conservation de vos herbes ?",
            a: "La durée de conservation varie selon le botanique, la transformation, l'emballage et les conditions de stockage. La spécification produit ou l'étiquette de lot pertinente indique la période applicable. Conserver dans un endroit frais et sec, à l'abri de la lumière directe du soleil, sauf indication contraire.",
          },
          {
            q: "Quand a lieu la saison de récolte ?",
            a: "Les périodes de récolte varient selon la culture et la région de production. Chamomile est couramment une culture de printemps, tandis que certaines herbes comme Basil, Marjoram et Mint peuvent faire l'objet de plusieurs coupes. Contactez-nous pour connaître la disponibilité actuelle des récoltes.",
          },
        ],
      },
      {
        id: "contact",
        title: "Contact",
        items: [
          {
            q: "Comment puis-je demander un devis ?",
            a: "Envoyez le nom du produit, la spécification ou la coupe, la quantité, la préférence de conditionnement et le port de destination via le formulaire de contact, l'e-mail herbs.milanos.eg@gmail.com, ou WhatsApp +20 122 621 1624. Nous ferons le suivi avec les options disponibles et les prix.",
          },
        ],
      },
    ],
  },
  contact: {
    eyebrow: "Contact / Demander un devis",
    heading: "Obtenez un devis en gros sous 24 heures",
    intro:
      "Dites-nous ce dont vous avez besoin — produit, quantité, destination et incoterm. Notre équipe export vous répondra dans un jour ouvré avec les prix, le délai d'exécution, les options de conditionnement et un COA pour le lot concerné.",
    form: {
      name: "Nom complet",
      company: "Nom de l'entreprise",
      country: "Pays",
      email: "E-mail professionnel",
      phone: "Téléphone / WhatsApp",
      category: "Catégorie de produit",
      product: "Produit spécifique",
      quantity: "Quantité prévue",
      form: "Forme de produit requise",
      packing: "Type de conditionnement",
      port: "Port de destination",
      incoterm: "Incoterm préféré",
      notes: "Notes supplémentaires ou spécifications particulières",
      attachment: "Joindre un fichier (PDF, JPG, PNG)",
      submit: "Envoyer la RFQ →",
      sending: "Envoi…",
      success:
        "Merci. Notre équipe export examinera vos spécifications et vous répondra dans les 24 heures ouvrables avec les prix et un COA.",
    },
    info: {
      hq: "Beni Suef, Égypte",
      phone: "+20 122 621 1624",
      email: "herbs.milanos.eg@gmail.com",
      hours: "Lun – Sam, 9:00 – 17:00 (EET)",
    },
    preferEmail: "Préférez-vous l'e-mail ? Contactez-nous directement à",
  },
  footer: {
    about:
      "Herbs Milanos — Exportateur égyptien d'herbes, d'épices, de graines et d'huiles naturelles depuis 2000. Fermes en propriété à Beni Suef, transformation sous ISO 22000 & HACCP.",
    qualityTitle: "Qualité et export",
    categoriesTitle: "Catégories de produits",
    exploreTitle: "Explorer",
    contactTitle: "Demandes d'export",
    rights: "© {year} Herbs Milanos — Tous droits réservés.",
    links: {
      about: "À propos de nous",
      products: "Produits",
      resources: "Ressources d'exportation",
      faq: "FAQ",
      contact: "Demander un devis",
      quality: "Notre approche qualité",
      coa: "Certificat d'Analyse (COA)",
      phytosanitary: "Certificat phytosanitaire",
      inspection: "Inspection par tierce partie",
    },
  },
  productBriefs: {},
  chatbot: {
    title: "Assistant Herbs Milanos",
    status: "En ligne · répond en quelques minutes",
    greeting:
      "Salam 👋 Je suis votre assistant Herbs Milanos. Choisissez un sujet ci-dessous ou saisissez un mot-clé (par ex. \"MOQ\", \"Chamomile\", \"expédition\").",
    placeholder: "Saisissez un mot-clé…",
    send: "Envoyer",
    categories: "Parcourir par sujet",
    questions: "Questions",
    back: "Retour aux sujets",
    human: "Discuter sur WhatsApp",
    noResults:
      "Aucune correspondance trouvée. Essayez un autre mot-clé, ou cliquez ci-dessous pour parler directement avec notre équipe export sur WhatsApp.",
    matched: "Réponses correspondantes",
    ariaOpen: "Ouvrir l'assistant de chat",
    ariaClose: "Fermer l'assistant de chat",
    handoffTitle: "Mise en relation avec un agent humain",
    handoffBody:
      "Je n'ai pas trouvé de réponse correspondant à votre question. Je vais vous mettre en relation avec un agent humain sur WhatsApp pour vous aider directement.",
    suggestedQuestions: "Questions suggérées",
    typing: "écrit…",
  },
};

export { fr };

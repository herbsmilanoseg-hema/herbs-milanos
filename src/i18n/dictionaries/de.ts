import type { Dictionary } from "../translations";

/* ───────────────────────── German (de) ─────────────────────────
   Full German translation of the Herbs Milanos B2B dictionary.
   Product names (Basil, Chamomile, Hibiscus, Cumin, …) are kept in
   English as trade proper nouns. Latin names are left as-is.
   Trade terms (FOB, CIF, CFR, MOQ, COA, HACCP, ISO, RFQ, TBC, T/T,
   L/C, MRL, TPC) are kept as-is.
─────────────────────────────────────────────────────────────────── */

const de: Dictionary = {
  nav: {
    home: "Startseite",
    about: "Über uns",
    products: "Produkte",
    resources: "Export-Ressourcen",
    faq: "FAQ",
    contact: "Kontakt",
    requestQuote: "Angebot anfordern",
  },
  hero: {
    badge:
      "🌿 Herbs Milanos · Vertraut von B2B-Einkäufern in über 30 Ländern seit 2000",
    headline:
      "Premium ägyptische Kräuter & Gewürze — Direkt ab Werk in Ihren Container",
    subhead:
      "Beziehen Sie Chamomile, Hibiscus, Peppermint, Cumin, Fennel und über 85 Botanicals direkt von unseren eigenen Farmen in Beni Suef. ISO 22000 + HACCP zertifiziert, magnetisch sortiert auf 99,9 % Reinheit, geliefert FOB/CIF ab Alexandria. Angebot innerhalb von 24 Stunden.",
    ctaPrimary: "Großhandelsangebot anfordern →",
    ctaSecondary: "Katalog herunterladen",
    trust1: "MOQ ab 1 MT",
    trust2: "FOB · CIF · CFR",
    trust3: "ISO 22000 · HACCP",
    trust4: "89+ Artikel auf Lager",
  },
  why: {
    eyebrow: "Warum B2B-Einkäufer Herbs Milanos wählen",
    heading:
      "Drei Gründe, warum Importeure immer wieder zu uns kommen — Sendung für Sendung.",
    cards: [
      {
        title: "Eigene Farmen, direkte Preise",
        body: "Wir bauen auf unseren eigenen Bio-Farmen in Beni Suef an — ohne Zwischenhändler, ohne Handelsspannen. Sie kaufen zum Erzeugerpreis + Verarbeitungskosten mit voller Rückverfolgbarkeit vom Saatgut bis zum Container.",
      },
      {
        title: "99,9 % Reinheit, laborgeprüft",
        body: "Jede Charge durchläuft magnetische Iron-Picking-Sortierung, Feuchtigkeits- und ätherische-Öl-Prüfung sowie mikrobiologische Kontrolle. Ein Certificate of Analysis (COA) begleitet jede Sendung — ohne Ausnahme.",
      },
      {
        title: "Über 15 Jahre Zuverlässigkeit im Export",
        body: "Wir beliefern EU-Tee-Marken, US-Gewürzvertreiber und Nahrungsmittelhersteller im Golf seit 2000. Gemischte Containerbestellungen, Private-Label-Verpackung und Inspektion durch Dritte — alles aus einer Hand.",
      },
    ],
  },
  certs: {
    eyebrow: "Unsere Zertifizierungen",
    body: "Wir verpflichten uns zu den strengsten Lebensmittelsicherheits- und Gesundheitsstandards bei jeder Sendung, die wir exportieren.",
    items: [
      { name: "ISO 9001:2015", desc: "Qualitätsmanagementsystem" },
      {
        name: "ISO 22000:2018",
        desc: "Lebensmittelsicherheits-Managementsystem",
      },
      {
        name: "HACCP",
        desc: "Gefahrenanalyse und kritische Kontrollpunkte",
      },
    ],
    download: "Zertifikat herunterladen",
  },
  about: {
    heroTitle:
      "Vom ägyptischen Boden auf die Regale der Welt — über 20 Jahre Botanical-Exzellenz",
    storyHeading: "Unsere Geschichte",
    storyP1:
      "Über ein Jahrzehnt lang waren wir als vertrauenswürdiger nationaler Lieferant tätig und perfektionierten die Kunst der Reinigung, Sortierung und Verarbeitung roher Botanicals auf Exportqualität. Im Jahr 2000 gründeten wir Herbs Milanos und brachten unsere Farm-zu-Container-Expertise direkt zu internationalen B2B-Einkäufern.",
    storyP2:
      "Heute ist Herbs Milanos einer der größten ägyptischen Exporteure von Kräutern und Gewürzen. Wir besitzen über 50 Hektar Bio-Ackerland in Beni Suef, betreiben eine vollstufige Verarbeitungsanlage mit magnetischer Sortierung und Damposterilisation und liefern in über 30 Länder. Unser Versprechen ist einfach: Premium-Qualität, wettbewerbsfähige Preise und pünktliche Lieferung — bei jeder Sendung, jedes Mal.",
    processHeading: "Vom Saatgut zum Container — Unser 4-Stufen-Prozess",
    process: [
      {
        title: "1. Anbau & Ernte",
        body: "Wir wählen Premium-Saatgutsorten und bauen auf unseren eigenen Farmen in Beni Suef nach nachhaltigen Methoden an. Der Erntezeitpunkt wird für maximalen Gehalt an ätherischen Ölen und optimale Farbretention optimiert.",
      },
      {
        title: "2. Trocknung & Verarbeitung",
        body: "Sonnengetrocknet und maschinell entwässert in Niedertemperatur-Tunneln, die natürliche Aromen, Farben und Wirkstoffe bewahren. Keine chemischen Zusätze, niemals.",
      },
      {
        title: "3. Magnetische Sortierung & Reinigung",
        body: "Erweiterte mechanische Sortierung + Iron-Picking-Magnete entfernen metallische Verunreinigungen und erreichen 99,9 % Reinheit. Optische Sortierer trennen nach Farbe und Größe für ein einheitliches, sauberes Produkt.",
      },
      {
        title: "4. Verpackung & Export",
        body: "Verpackt in 25-kg-Lebensmittelbeuteln mit PE-Innenbeutel oder individueller Private-Label-Verpackung. Geliefert FOB/CIF/CFR ab Alexandria, Port Said oder Damietta — mit vollständiger Dokumentation.",
      },
    ],
    visionHeading: "Unsere Vision",
    vision:
      "Die weltweit vertrauenswürdigste und transparenteste Quelle für ägyptische Botanical-Zutaten zu sein — wo jeder Einkäufer genau weiß, was in seinem Container ist, und jeder Landwirt einen fairen Preis erhält.",
    missionHeading: "Unsere Mission",
    mission:
      "Außergewöhnliche ägyptische Botanicals an Hersteller weltweit liefern, gestützt durch volle Rückverfolgbarkeit, strenge Qualitätsanalysen und Kundendienst, der Erwartungen übertrifft — während wir nachhaltige Landwirtschaft in den Gemeinden unterstützen, in denen wir anbauen.",
    galleryHeading: "Unsere Farmen & Anlagen",
  },
  products: {
    eyebrow: "Großhandelskatalog",
    heading:
      "89 ägyptische Botanicals — beschafft, verarbeitet und versandbereit",
    intro:
      "Durchsuchen Sie unseren vollständigen Katalog getrockneter Kräuter, Blüten, Samen und Gewürze. Jedes Produkt wird mit einem Certificate of Analysis (COA) geliefert und ist in ganzer, geschnittener, TBC-, geriebener oder Pulverform erhältlich. Filtern Sie nach Familie oder Branche, um Ihre genaue Spezifikation zu finden.",
    searchPlaceholder: "Produkte suchen…",
    familyLabel: "Produktfamilie",
    industryLabel: "Anwendung",
    gradeLabel: "Qualität",
    formLabel: "Verfügbare Form",
    clear: "Zurücksetzen",
    showing: (n, total) => `${n} von ${total} Produkten werden angezeigt`,
    noMatch: "Keine Produkte entsprechen Ihren Filtern.",
    clearFilters: "Filter zurücksetzen",
    viewDetails: "Spezifikationen & Preise ansehen",
    downloadCatalogue: "Katalog herunterladen",
    requestQuote: "Großhandelsangebot anfordern",
  },
  productDetail: {
    origin: "Herkunftsland",
    harvest: "Erntemethode",
    brief: "Kurzbeschreibung",
    specs: "Technische & analytische Spezifikationen",
    micro: "Mikrobiologische Kriterien",
    forms: "Verfügbare Schnittformen",
    packing: "Verpackungsoptionen",
    storage: "Lagerung & Haltbarkeit",
    shelfLife: "Haltbarkeit",
    certifications: "Verfügbare Zertifikate & Dokumente",
    purity: "Reinheit",
    moisture: "Feuchtigkeit",
    volatileOil: "Ätherisches Öl",
    foreignOrganic: "Fremde organische Bestandteile",
    foreignInorganic: "Fremde anorganische Bestandteile",
    appearance: "Aussehen",
    color: "Farbe",
    totalPlate: "Gesamtkeimzahl (TPC)",
    yeastMold: "Hefen & Schimmelpilze",
    ecoli: "E. coli",
    salmonella: "Salmonella",
    downloadSpec: "Datenblatt herunterladen (PDF)",
    requestSample: "Muster aus dieser Charge anfordern",
    requestQuote: "Individuelles Angebot anfordern",
    availableOnRequest: "Auf Anfrage verfügbar",
    back: "Zurück zu den Produkten",
  },
  resources: {
    eyebrow: "Export-Ressourcen & internationaler Einkäuferleitfaden",
    heading:
      "Praktische Ressourcen zur Planung Ihres ägyptischen Botanical-Sourcings",
    rfqTitle: "Wie Sie ein professionelles Angebot (RFQ) anfordern",
    rfqIntro:
      "Um innerhalb von 24 Stunden ein präzises Angebot zu erhalten, geben Sie diese Angaben in Ihrer Anfrage an:",
    rfqPoints: [
      "Produktname und Qualitätsstufe (EU Conventional oder Organic EC+NOP)",
      "Gewünschte Form (ganz, geschnitten, TBC, gerieben, Pulver oder gemahlen)",
      "Erwartete Menge (in Tonnen oder Anzahl 20-Fuß-Container)",
      "Bevorzugte Verpackung (25-kg-PP-Säcke, Innenfutter-Kartons oder individuelle Private-Label)",
      "Zielhafen + bevorzugtes Incoterm (FOB Alexandria, CIF Hamburg, CFR Rotterdam)",
    ],
    harvestTitle: "Ägyptischer Erntekalender — Planen Sie Ihre Bestellungen",
    harvestIntro:
      "Erntezeitfenster variieren nach Kultur und Region. Für beste Preise und Verfügbarkeit senden Sie Ihre RFQ 1–2 Monate vor Beginn der Erntesaison.",
    harvestRows: [
      { crop: "Chamomile & Anise", season: "Frühling (April – Mai)" },
      { crop: "Hibiscus", season: "Herbst (Oktober – November)" },
      {
        crop: "Cumin & Coriander",
        season: "Später Frühling / früher Sommer",
      },
      {
        crop: "Peppermint & Spearmint",
        season: "Sommer (Mai – August, mehrere Schnitte)",
      },
      { crop: "Basil & Marjoram", season: "Sommer (Juni – September)" },
      { crop: "Sesame", season: "Herbst (September – November)" },
    ],
    harvestNote:
      "Ganzjährig Lagerbestand verfügbar dank unserer modernen Lagerhaltung in Beni Suef. Kontaktieren Sie uns für aktuelle Ernte-Verfügbarkeit und Spot-Preise.",
    qualityTitle: "Qualitätssicherung & Verarbeitungsstandards",
    qualityBody:
      "Jedes Produkt durchläuft: 1) Mechanische Reinigung und optische Sortierung, 2) Iron-Picking-Magnete zur Entfernung metallischer Verunreinigungen bis 99,9 % Reinheit, 3) Feuchtigkeits- und ätherische-Öl-Prüfung, 4) Mikrobiologische Kontrolle (TPC, Hefen/Schimmelpilze, E. coli, Salmonella). Damposterilisation auf Anfrage. Ein chargenspezifisches COA begleitet jede Sendung.",
  },
  faq: {
    eyebrow: "B2B-FAQ",
    heading: "Fragen Sie uns",
    intro:
      "Klare, umfassende Antworten auf die häufigsten Fragen zu unserem Unternehmen, unseren Produkten, Qualität, Bestellungen, Verpackung, Versand, Lagerung und Kontakt.",
    categories: [
      {
        id: "about",
        title: "Über Herbs Milanos",
        items: [
          {
            q: "Wer sind Sie?",
            a: "Wir sind Herbs Milanos — ein ägyptischer Exporteur von Kräutern, Gewürzen, Samen und aromatischen Pflanzen seit 2000. Wir agieren sowohl als Hersteller als auch als Händler, mit eigenen Farmen in Beni Suef und Verarbeitungsbetrieben nach ISO 22000 & HACCP.",
          },
          {
            q: "Sind Sie Hersteller oder Händler?",
            a: "Beides. Wir verarbeiten und verpacken Produkte in eigenen Betrieben und beziehen Kräuter von Farmen und Anbaugebieten in ganz Ägypten — darunter Fayoum, Beni Suef, Minya und Assiut — je nach Produkt und Saison.",
          },
          {
            q: "Warum Kräuter aus Ägypten beziehen?",
            a: "Ägypten ist ein wichtiges Ursprungsland für Chamomile, Basil, Marjoram, Mint, Caraway, Coriander, Fennel, Anise, Hibiscus und weitere Kulturen. Klima, Anbau- und Erntebedingungen fördern wünschenswerte Aromen, Farben und Versorgungsmengen; die Qualitätsparameter hängen von Kultur und Charge ab.",
          },
        ],
      },
      {
        id: "products",
        title: "Produkte & Spezifikationen",
        items: [
          {
            q: "Welche Produkte exportieren Sie?",
            a: "Wir exportieren getrocknete Kräuter, Blüten, Samen und Gewürze, medizinische und aromatische Pflanzen. Erkunden Sie unseren vollständigen Produktkatalog für verfügbare Artikel.",
          },
          {
            q: "Welche Schnitte und Formen sind verfügbar?",
            a: "Je nach Produkt: ganz, gebrochen, geschnitten, Teebeutel-Schnitt (TBC), gesiebt, gerieben oder pulverisiert. Individuelle Maschenweiten und Schnittgrößen können auf Anfrage besprochen werden.",
          },
          {
            q: "Stellen Sie Produktspezifikationen zur Verfügung?",
            a: "Spezifikationen sind für ausgewählte Artikel verfügbar. Fragen Sie unser Exportteam nach dem relevanten technischen Datenblatt und dem verfügbaren chargenspezifischen Certificate of Analysis (COA). Der Prüfungsumfang hängt von Produkt, Charge und Kundenanforderungen ab.",
          },
          {
            q: "Sind Ihre Produkte biologisch?",
            a: "Konventionelle Produkte sind verfügbar. Wenn Sie zertifiziertes Bio-Material benötigen, bestätigen Sie bitte vor der Bestellung die Produktverfügbarkeit und gültige Zertifizierung mit uns.",
          },
          {
            q: "Können Sie die EU-Pestizid-Anforderungen (MRL) einhalten?",
            a: "Ja. Wir halten globale Lebensmittelsicherheitsstandards ein. Pestizidrückstands-Prüfungen können nach den Anforderungen Ihres Zielmarkts durchgeführt werden. Die Konformität wird durch akkreditierte Laborergebnisse für das Produkt und die spezifische Charge vor dem Versand bestätigt.",
          },
          {
            q: "Werden Ihre Kräuter sterilisiert oder behandelt?",
            a: "Behandlungs- und mikrobiologische Kontrolloptionen, einschließlich Damposterilisation, wo möglich, können produktbezogen besprochen werden. Bitte spezifizieren Sie Ihre Anforderungen, damit wir den verfügbaren Prozess und die Dokumentation bestätigen können.",
          },
        ],
      },
      {
        id: "quality",
        title: "Qualität & Zertifizierungen",
        items: [
          {
            q: "Welche Zertifizierungen haben Sie?",
            a: "Wir sind nach ISO 9001:2015 und ISO 22000:2018 zertifiziert und folgen den HACCP-Lebensmittelsicherheits-Prinzipien. Eine Kopie unserer gültigen Zertifikate kann auf Anfrage bereitgestellt werden.",
          },
          {
            q: "Wie kontrollieren Sie die Qualität?",
            a: "Rohstoffe werden nach Produktanforderungen inspiziert und verarbeitet, mit Schritten für Reinigung, Sortierung und Verpackung. Probenahme, Prüfparameter und Akzeptanzgrenzen können für jede Bestellung vereinbart werden.",
          },
          {
            q: "Kann ich vor der Bestellung ein Muster erhalten?",
            a: "Muster können je nach Produkt und Lagerbestand verfügbar sein. Unser Team bestätigt die Musteranzahl, die Kosten, die Kuriergebühren und ob eine Probe aus der vorgesehenen Versandcharge entnommen werden kann.",
          },
          {
            q: "Kann ich meinen eigenen Inspektor entsenden oder eine Inspektion durch Dritte nutzen?",
            a: "Ja, eine Inspektion durch Dritte kann vereinbart werden. Bitte teilen Sie uns Ihre bevorzugte Inspektionsagentur, den Umfang und den Zeitraum vor der Bestellbestätigung mit.",
          },
        ],
      },
      {
        id: "orders",
        title: "Bestellungen & Preise",
        items: [
          {
            q: "Wie hoch ist Ihre Mindestbestellmenge (MOQ)?",
            a: "In der Regel 1 Tonne pro Produkt, und wir akzeptieren gemischte 20-Fuß-Container-Ladungen, damit Sie Ihre Bestellung diversifizieren können. Kleinere Testbestellungen können je nach Produkt und Lagerverfügbarkeit besprochen werden.",
          },
          {
            q: "Kann ich mehrere Produkte in einem Container mischen?",
            a: "Ja, Bestellungen in gemischten Containern können möglich sein, sofern Produktkompatibilität, Verpackung und logistische Bedingungen dies zulassen. Senden Sie uns Ihre gewünschte Produktliste und die Mengen.",
          },
          {
            q: "Wie bilden Sie Ihre Preise?",
            a: "Die Preisgestaltung hängt von Produkt, Qualität, Menge, Saison, Verpackung und Lieferbedingungen ab. Fordern Sie ein aktuelles Angebot unter Angabe Ihres Zielhafens und des bevorzugten Incoterms (FOB, CFR, CIF) an.",
          },
          {
            q: "Warum ändern sich die Preise im Laufe des Jahres?",
            a: "Die Preise werden von der landwirtschaftlichen Ernte-Verfügbarkeit, der Erntequalität, dem Wetter, den Verarbeitungskosten und der Marktnachfrage im Laufe des Jahres beeinflusst.",
          },
          {
            q: "Wie lauten Ihre Zahlungsbedingungen?",
            a: "Unsere Standardbedingungen sind 30 % Vorauszahlung per T/T und 70 % gegen Kopie der Versanddokumente. Wir akzeptieren ebenfalls unwiderrufliche L/C bei Sicht für große Bestellungen, und flexible Bedingungen können für Stammkunden besprochen werden.",
          },
        ],
      },
      {
        id: "packing",
        title: "Verpackung & Private Label",
        items: [
          {
            q: "Wie werden die Produkte verpackt?",
            a: "Schüttgut-Kräuter und -Gewürze können in geeigneten Säcken oder Innenfutter-Kartons angeboten werden, je nach Artikel und Ziel. Öle können in Fässern, Kanistern oder Flaschen erhältlich sein. Genaue Materialien und Packungsgrößen werden im Angebot bestätigt.",
          },
          {
            q: "Bieten Sie Private-Label- oder Einzelhandelsverpackung an?",
            a: "Private-Label- und Einzelhandelsverpackungsoptionen können nach Produkt, Bestellvolumen, Verpackungsverfügbarkeit und den gesetzlichen Kennzeichnungsvorschriften Ihres Zielmarkts besprochen werden.",
          },
          {
            q: "Können Produkte palettiert und begast werden?",
            a: "Ja, Palettierung und zielortspezifische Behandlung oder Zertifikate können besprochen werden, wenn erforderlich und anwendbar.",
          },
        ],
      },
      {
        id: "shipping",
        title: "Versand & Dokumente",
        items: [
          {
            q: "Von welchen Häfen versenden Sie?",
            a: "Wir versenden in der Regel ab Alexandria, Port Said und Damietta. Die Wahl hängt von Zielort, Verlader-Verfügbarkeit und Ihrem bevorzugten Incoterm ab.",
          },
          {
            q: "Wie lange dauert die Vorbereitung einer Bestellung?",
            a: "In der Regel 2–4 Wochen nach Bestellbestätigung und Zahlung, abhängig von Menge und erforderlichem Verarbeitungsschritt (Sterilisation, spezielle Schnitte, Labortests).",
          },
          {
            q: "Welche Dokumente stellen Sie zur Verfügung?",
            a: "Wir stellen ein vollständiges Versanddokumenten-Paket bereit: Handelsrechnung, Packliste, Ursprungszeugnis, Pflanzengesundheitszeugnis und Certificate of Analysis (COA).",
          },
          {
            q: "Kann ich reduzierte Zollsätze erhalten?",
            a: "Präferenzielle Zollbehandlung kann unter Handelsabkommen je nach Produktklassifizierung, Ursprungsregeln und Einfuhrland anwendbar sein. Bitte klären Sie dies mit Ihrem Zollmakler; wir können die anwendbaren Ursprungsdokumente besprechen.",
          },
          {
            q: "Können Sie in mein Land versenden?",
            a: "Senden Sie uns Ihr Zielland und Zielhafen, damit wir Versandmöglichkeiten, Produktbeschränkungen und die erforderliche Dokumentation prüfen können.",
          },
        ],
      },
      {
        id: "storage",
        title: "Lagerung & Haltbarkeit",
        items: [
          {
            q: "Wie ist die Haltbarkeit Ihrer Kräuter?",
            a: "Die Haltbarkeit variiert je nach Botanical, Verarbeitung, Verpackung und Lagerbedingungen. Die relevante Produktspezifikation oder das Chargenlabel gibt den gültigen Zeitraum an. Kühl und trocken, vor direkter Sonneneinstrahlung geschützt lagern, sofern nicht anders angegeben.",
          },
          {
            q: "Wann ist die Erntesaison?",
            a: "Erntezeiten variieren je nach Kultur und Anbaugebiet. Chamomile ist üblicherweise eine Frühjahrskultur, während einige Kräuter wie Basil, Marjoram und Mint mehrere Schnitte haben können. Kontaktieren Sie uns für die aktuelle Ernte-Verfügbarkeit.",
          },
        ],
      },
      {
        id: "contact",
        title: "Kontakt",
        items: [
          {
            q: "Wie kann ich ein Angebot anfordern?",
            a: "Senden Sie Produktname, Spezifikation oder Schnitt, Menge, Verpackungswunsch und Zielhafen über das Kontaktformular, per E-Mail an herbs.milanos.eg@gmail.com oder per WhatsApp +20 122 621 1624. Wir melden uns mit verfügbaren Optionen und Preisen zurück.",
          },
        ],
      },
    ],
  },
  contact: {
    eyebrow: "Kontakt / Angebot anfordern",
    heading: "Großhandelsangebot innerhalb von 24 Stunden",
    intro:
      "Teilen Sie uns mit, was Sie benötigen — Produkt, Menge, Zielort und Incoterm. Unser Exportteam antwortet innerhalb eines Werktages mit Preisen, Lieferzeit, Verpackungsoptionen und einem COA für die relevante Charge.",
    form: {
      name: "Vollständiger Name",
      company: "Firmenname",
      country: "Land",
      email: "Geschäftliche E-Mail",
      phone: "Telefon / WhatsApp",
      category: "Produktkategorie",
      product: "Spezifisches Produkt",
      quantity: "Erwartete Menge",
      form: "Gewünschte Produktform",
      packing: "Verpackungsart",
      port: "Zielhafen",
      incoterm: "Bevorzugtes Incoterm",
      notes: "Zusätzliche Hinweise oder besondere Spezifikationen",
      attachment: "Datei anhängen (PDF, JPG, PNG)",
      submit: "RFQ senden →",
      sending: "Wird gesendet…",
      success:
        "Vielen Dank. Unser Exportteam wird Ihre Spezifikationen prüfen und innerhalb von 24 Geschäftsstunden mit Preisen und einem COA antworten.",
    },
    info: {
      hq: "Beni Suef, Ägypten",
      phone: "+20 122 621 1624",
      email: "herbs.milanos.eg@gmail.com",
      hours: "Mo – Sa, 9:00 – 17:00 (EET)",
    },
    preferEmail: "Bevorzugen Sie E-Mail? Erreichen Sie uns direkt unter",
  },
  footer: {
    about:
      "Herbs Milanos — ägyptischer Exporteur von Kräutern, Gewürzen, Samen und natürlichen Ölen seit 2000. Eigene Farmen in Beni Suef, Verarbeitung unter ISO 22000 & HACCP.",
    qualityTitle: "Qualität & Export",
    categoriesTitle: "Produktkategorien",
    exploreTitle: "Entdecken",
    contactTitle: "Export-Anfragen",
    rights: "© {year} Herbs Milanos — Alle Rechte vorbehalten.",
    links: {
      about: "Über uns",
      products: "Produkte",
      resources: "Export-Ressourcen",
      faq: "FAQ",
      contact: "Angebot anfordern",
      quality: "Unser Qualitätsansatz",
      coa: "Certificate of Analysis (COA)",
      phytosanitary: "Pflanzengesundheitszeugnis",
      inspection: "Inspektion durch Dritte",
    },
  },
  productBriefs: {},
  chatbot: {
    title: "Herbs Milanos Assistent",
    status: "Online · antwortet in Minuten",
    greeting:
      "Salam 👋 Ich bin Ihr Herbs Milanos Assistent. Wählen Sie unten ein Thema oder geben Sie ein Stichwort ein (z. B. \"MOQ\", \"Chamomile\", \"Versand\").",
    placeholder: "Stichwort eingeben…",
    send: "Senden",
    categories: "Nach Thema durchsuchen",
    questions: "Fragen",
    back: "Zurück zu den Themen",
    human: "Auf WhatsApp chatten",
    noResults:
      "Keine Übereinstimmung gefunden. Versuchen Sie ein anderes Stichwort, oder tippen Sie unten, um direkt mit unserem Exportteam auf WhatsApp zu sprechen.",
    matched: "Übereinstimmende Antworten",
    ariaOpen: "Chat-Assistent öffnen",
    ariaClose: "Chat-Assistent schließen",
    handoffTitle: "Verbindung zu einem Mitarbeiter wird hergestellt",
    handoffBody:
      "Ich konnte keine passende Antwort auf Ihre Frage finden. Ich verbinde Sie mit einem Mitarbeiter auf WhatsApp, der Ihnen direkt weiterhilft.",
    suggestedQuestions: "Vorgeschlagene Fragen",
    typing: "schreibt…",
  },
};

export { de };

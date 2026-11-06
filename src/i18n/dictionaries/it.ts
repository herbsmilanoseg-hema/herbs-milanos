import type { Dictionary } from "../translations";

/* ───────────────────────── Italian (it) ─────────────────────────
   Full Italian translation of the Herbs Milanos B2B dictionary.
   Product names (Basil, Chamomile, Hibiscus, Cumin, …) are kept in
   English as trade proper nouns. Latin names are left as-is.
   Trade terms (FOB, CIF, CFR, MOQ, COA, HACCP, ISO, RFQ, TBC, T/T,
   L/C, MRL, TPC) are kept as-is.
─────────────────────────────────────────────────────────────────── */

const it: Dictionary = {
  nav: {
    home: "Home",
    about: "Chi siamo",
    products: "Prodotti",
    resources: "Risorse per l'export",
    faq: "FAQ",
    contact: "Contatti",
    requestQuote: "Richiedi preventivo",
  },
  hero: {
    badge:
      "🌿 Herbs Milanos · Scelti dagli acquirenti B2B in oltre 30 paesi dal 2000",
    headline:
      "Erbe e spezie egiziane premium — Diretti dalla fabbrica al tuo container",
    subhead:
      "Acquista Chamomile, Hibiscus, Peppermint, Cumin, Fennel e oltre 85 botanicals direttamente dalle nostre fattorie a Beni Suef. Certificazione ISO 22000 + HACCP, selezionati magneticamente al 99,9% di purezza, spedizione FOB/CIF da Alessandria. Ricevi un preventivo entro 24 ore.",
    ctaPrimary: "Richiedi un preventivo all'ingrosso →",
    ctaSecondary: "Scarica il catalogo",
    trust1: "MOQ a partire da 1 MT",
    trust2: "FOB · CIF · CFR",
    trust3: "ISO 22000 · HACCP",
    trust4: "89+ referenze in stock",
  },
  why: {
    eyebrow: "Perché gli acquirenti B2B scelgono Herbs Milanos",
    heading:
      "Tre motivi per cui gli importatori tornano da noi — spedizione dopo spedizione.",
    cards: [
      {
        title: "Fattorie di proprietà, prezzi diretti",
        body: "Coltiviamo sulle nostre fattorie biologiche a Beni Suef — senza intermediari, senza ricarichi commerciali. Acquisti al prezzo alla fattoria + costo di lavorazione, con tracciabilità completa dal seme al container.",
      },
      {
        title: "99,9% di purezza, verificata in laboratorio",
        body: "Ogni lotto passa lo smistamento magnetico Iron Picking, le prove di umidità e olio volatile e il controllo microbico. Un Certificato di Analisi (COA) accompagna ogni spedizione — senza eccezioni.",
      },
      {
        title: "Oltre 15 anni di affidabilità nell'export",
        body: "Forniamo marchi di tè UE, distributori di spezie statunitensi e produttori alimentari del Golfo dal 2000. Ordini in container misti, confezionamento a marchio privato e ispezione di terze parti — tutto gestito internamente.",
      },
    ],
  },
  certs: {
    eyebrow: "Le nostre certificazioni",
    body: "Ci impegniamo a rispettare i più rigorosi standard di sicurezza alimentare e sanità su ogni spedizione che esportiamo.",
    items: [
      { name: "ISO 9001:2015", desc: "Sistema di gestione della qualità" },
      {
        name: "ISO 22000:2018",
        desc: "Sistema di gestione della sicurezza degli alimenti",
      },
      {
        name: "HACCP",
        desc: "Analisi dei pericoli e punti di controllo critici",
      },
    ],
    download: "Scarica il certificato",
  },
  about: {
    heroTitle:
      "Dal suolo egiziano agli scaffali globali — Oltre 20 anni di eccellenza botanica",
    storyHeading: "La nostra storia",
    storyP1:
      "Per oltre un decennio abbiamo operato come fornitore nazionale di fiducia, padroneggiando l'arte della pulizia, dello smistamento e della lavorazione delle materie prime botaniche fino a una purezza di grado export. Nel 2000 abbiamo lanciato Herbs Milanos — portando la nostra competenza dalla fattoria al container direttamente agli acquirenti B2B internazionali.",
    storyP2:
      "Oggi Herbs Milanos è uno dei maggiori esportatori egiziani di erbe e spezie. Possediamo oltre 50 acri di terreno agricolo biologico a Beni Suef, gestiamo uno stabilimento di lavorazione a ciclo completo con smistamento magnetico e sterilizzazione a vapore, e spediamo in oltre 30 paesi. La nostra promessa è semplice: qualità premium, prezzi competitivi e consegne puntuali — ogni spedizione, ogni volta.",
    processHeading: "Dal seme al container — Il nostro processo in 4 fasi",
    process: [
      {
        title: "1. Coltivazione e raccolta",
        body: "Selezioniamo varietà di seme premium e coltiviamo sulle nostre fattorie a Beni Suef secondo pratiche sostenibili. Le tempistiche di raccolta sono ottimizzate per massimizzare il contenuto di olio volatile e la ritenzione del colore.",
      },
      {
        title: "2. Essiccazione e lavorazione",
        body: "Essiccazione al sole e disidratazione meccanica in tunnel a bassa temperatura che preservano gli aromi naturali, i colori e i composti attivi. Nessun additivo chimico, mai.",
      },
      {
        title: "3. Smistamento magnetico e pulizia",
        body: "Smistamento meccanico avanzato + magneti Iron Picking per rimuovere le impurità metalliche fino al 99,9% di purezza. Gli smistatori ottici separano per colore e pezzatura per un prodotto omogeneo e pulito.",
      },
      {
        title: "4. Confezionamento ed export",
        body: "Confezionato in sacchi da 25 kg di qualità alimentare con rivestimento interno in PE, oppure packaging a marchio privato personalizzato. Spedito FOB/CIF/CFR da Alessandria, Port Said o Damietta — con documentazione completa.",
      },
    ],
    visionHeading: "La nostra visione",
    vision:
      "Essere la fonte al mondo più affidabile e trasparente di ingredienti botanici egiziani — dove ogni acquirente sa esattamente cosa contiene il proprio container e ogni agricoltore ottiene un prezzo equo.",
    missionHeading: "La nostra missione",
    mission:
      "Consegnare botanicals egiziani di eccezionale qualità ai produttori di tutto il mondo, supportati da tracciabilità completa, analisi di qualità rigorose e un servizio post-vendita che supera le aspettative — promuovendo al contempo un'agricoltura sostenibile nelle comunità in cui coltiviamo.",
    galleryHeading: "Le nostre fattorie e lo stabilimento",
  },
  products: {
    eyebrow: "Catalogo all'ingrosso",
    heading:
      "89 botanicals egiziani — approvvigionati, lavorati e pronti alla spedizione",
    intro:
      "Sfoglia il nostro catalogo completo di erbe, fiori, semi e spezie essiccati. Ogni prodotto è accompagnato da un Certificato di Analisi (COA) ed è disponibile in forma intera, tagliata, TBC, sfregata o in polvere. Filtra per famiglia o per settore per trovare la specifica esatta.",
    searchPlaceholder: "Cerca prodotti…",
    familyLabel: "Famiglia di prodotto",
    industryLabel: "Applicazione",
    gradeLabel: "Qualità",
    formLabel: "Forma disponibile",
    clear: "Cancella",
    showing: (n, total) => `Visualizzazione di ${n} su ${total} prodotti`,
    noMatch: "Nessun prodotto corrisponde ai filtri selezionati.",
    clearFilters: "Cancella i filtri",
    viewDetails: "Vedi specifiche e prezzi",
    downloadCatalogue: "Scarica il catalogo",
    requestQuote: "Richiedi un preventivo all'ingrosso",
  },
  productDetail: {
    origin: "Paese di origine",
    harvest: "Metodo di raccolta",
    brief: "Descrizione sintetica",
    specs: "Specifiche tecniche e analitiche",
    micro: "Criteri microbiologici",
    forms: "Forme di taglio disponibili",
    packing: "Opzioni di confezionamento",
    storage: "Conservazione e shelf life",
    shelfLife: "Shelf life",
    certifications: "Certificazioni e documenti disponibili",
    purity: "Purezza",
    moisture: "Umidità",
    volatileOil: "Olio volatile",
    foreignOrganic: "Materia organica estranea",
    foreignInorganic: "Materia inorganica estranea",
    appearance: "Aspetto",
    color: "Colore",
    totalPlate: "Carica batterica totale",
    yeastMold: "Lieviti e muffe",
    ecoli: "E. coli",
    salmonella: "Salmonella",
    downloadSpec: "Scarica la scheda tecnica (PDF)",
    requestSample: "Richiedi un campione di questo lotto",
    requestQuote: "Richiedi un preventivo personalizzato",
    availableOnRequest: "Disponibile su richiesta",
    back: "Torna ai prodotti",
  },
  resources: {
    eyebrow: "Risorse per l'export e guida per l'acquirente internazionale",
    heading:
      "Risorse pratiche per pianificare il tuo approvvigionamento di botanicals egiziani",
    rfqTitle: "Come richiedere un preventivo professionale (RFQ)",
    rfqIntro:
      "Per ricevere un preventivo accurato entro 24 ore, includi questi dettagli nella tua richiesta:",
    rfqPoints: [
      "Nome del prodotto e qualità (UE Convenzionale o Organic EC+NOP)",
      "Forma richiesta (intero, tagliato, TBC, sfregato, polvere o macinato)",
      "Quantità prevista (in tonnellate metriche o numero di container da 20 piedi)",
      "Confezionamento preferito (sacchi PP da 25 kg, cartoni foderati o marchio privato personalizzato)",
      "Porto di destinazione + incoterm preferito (FOB Alessandria, CIF Amburgo, CFR Rotterdam)",
    ],
    harvestTitle: "Calendario della raccolta egiziano — Pianifica i tuoi ordini",
    harvestIntro:
      "Le finestre di raccolta variano in base alla coltura e alla regione. Per ottenere i migliori prezzi e la migliore disponibilità, invia la tua RFQ 1–2 mesi prima dell'inizio della stagione di raccolta.",
    harvestRows: [
      { crop: "Chamomile & Anise", season: "Primavera (aprile – maggio)" },
      { crop: "Hibiscus", season: "Autunno (ottobre – novembre)" },
      {
        crop: "Cumin & Coriander",
        season: "Tarda primavera / inizio estate",
      },
      {
        crop: "Peppermint & Spearmint",
        season: "Estate (maggio – agosto, tagli multipli)",
      },
      { crop: "Basil & Marjoram", season: "Estate (giugno – settembre)" },
      { crop: "Sesame", season: "Autunno (settembre – novembre)" },
    ],
    harvestNote:
      "Disponibilità tutto l'anno grazie ai nostri moderni magazzini a Beni Suef. Contattaci per la disponibilità attuale della raccolta e i prezzi spot.",
    qualityTitle: "Assicurazione qualità e standard di lavorazione",
    qualityBody:
      "Ogni prodotto è sottoposto a: 1) Pulizia meccanica e smistamento ottico, 2) Magneti Iron Picking per rimuovere le impurità metalliche fino al 99,9% di purezza, 3) Prove di umidità e olio volatile, 4) Controllo microbico (TPC, lieviti/muffe, E. coli, Salmonella). Sterilizzazione a vapore disponibile su richiesta. Un COA specifico di lotto accompagna ogni spedizione.",
  },
  faq: {
    eyebrow: "FAQ B2B",
    heading: "Chiedici",
    intro:
      "Risposte chiare e complete alle domande più frequenti sulla nostra azienda, i prodotti, la qualità, gli ordini, il confezionamento, la spedizione, la conservazione e i contatti.",
    categories: [
      {
        id: "about",
        title: "Informazioni su Herbs Milanos",
        items: [
          {
            q: "Chi siete?",
            a: "Siamo Herbs Milanos — un esportatore egiziano di erbe, spezie, semi e piante aromatiche dal 2000. Operiamo sia come produttore che come commerciante, con fattorie di proprietà a Beni Suef e stabilimenti di lavorazione certificati ISO 22000 & HACCP.",
          },
          {
            q: "Siete un produttore o un commerciante?",
            a: "Entrambi. Lavoriamo e confezioniamo i prodotti nei nostri stabilimenti e ci approvvigioniamo di erbe da fattorie e regioni produttive in tutto l'Egitto — tra cui Fayoum, Beni Suef, Minya e Assiut — in base al prodotto e alla stagione.",
          },
          {
            q: "Perché approvvigionarsi di erbe in Egitto?",
            a: "L'Egitto è un'origine importante per Chamomile, Basil, Marjoram, Mint, Caraway, Coriander, Fennel, Anise, Hibiscus e altre colture. Il clima, le condizioni di coltivazione e di raccolta favoriscono aroma, colore e volumi di approvvigionamento desiderabili; i parametri di qualità dipendono dalla coltura e dal lotto.",
          },
        ],
      },
      {
        id: "products",
        title: "Prodotti e specifiche",
        items: [
          {
            q: "Quali prodotti esportate?",
            a: "Esportiamo erbe, fiori, semi e spezie essiccate, nonché piante medicinali e aromatiche. Esplora il nostro catalogo prodotti completo per scoprire gli articoli disponibili.",
          },
          {
            q: "Quali tagli e forme sono disponibili?",
            a: "A seconda del prodotto: intero, spezzato, tagliato, taglio per bustine di tè (TBC), setacciato, sfregato o in polvere. Tagli e mesh personalizzati possono essere discussi su richiesta.",
          },
          {
            q: "Fornite le specifiche dei prodotti?",
            a: "Le specifiche sono disponibili per alcuni articoli. Richiedi al nostro team export la scheda tecnica pertinente e il Certificato di Analisi (COA) specifico di lotto disponibile. L'ambito delle prove dipende dal prodotto, dal lotto e dai requisiti del cliente.",
          },
          {
            q: "I vostri prodotti sono biologici?",
            a: "Sono disponibili prodotti convenzionali. Se richiedi materiale biologico certificato, ti preghiamo di confermare con noi la disponibilità del prodotto e la certificazione valida prima di ordinare.",
          },
          {
            q: "Potete rispettare i requisiti UE sui pesticidi (MRL)?",
            a: "Sì. Rispettiamo gli standard globali di sicurezza alimentare. Le prove sui residui di pesticidi possono essere eseguite secondo i requisiti del tuo mercato di destinazione. La conformità è confermata tramite risultati di laboratorio accreditati per il prodotto e il lotto specifico prima della spedizione.",
          },
          {
            q: "Le vostre erbe sono sterilizzate o trattate?",
            a: "Le opzioni di trattamento e di controllo microbico, inclusa la sterilizzazione a vapore ove possibile, possono essere discusse per prodotto. Ti preghiamo di specificare i tuoi requisiti affinché possiamo confermare il processo e la documentazione disponibili.",
          },
        ],
      },
      {
        id: "quality",
        title: "Qualità e certificazioni",
        items: [
          {
            q: "Quali certificazioni possedete?",
            a: "Siamo certificati ISO 9001:2015 e ISO 22000:2018 e seguiamo i principi di sicurezza alimentare HACCP. Una copia dei nostri certificati validi può essere fornita su richiesta.",
          },
          {
            q: "Come controllate la qualità?",
            a: "Le materie prime sono ispezionate e lavorate secondo i requisiti del prodotto, con fasi di pulizia, smistamento e confezionamento. Il campionamento, i parametri di prova e i limiti di accettazione possono essere concordati per ogni ordine.",
          },
          {
            q: "Posso ottenere un campione prima di ordinare?",
            a: "I campioni possono essere disponibili in funzione del prodotto e delle scorte. Il nostro team confermerà la quantità del campione, il costo, le spese di spedizione courier e la possibilità di prelevare un campione dal lotto di spedizione previsto.",
          },
          {
            q: "Posso inviare il mio ispettore o ricorrere a un'ispezione di terze parti?",
            a: "Sì, l'ispezione di terze parti può essere organizzata su accordo. Ti preghiamo di indicare l'agenzia di ispezione preferita, l'ambito e le tempistiche prima di confermare l'ordine.",
          },
        ],
      },
      {
        id: "orders",
        title: "Ordini e prezzi",
        items: [
          {
            q: "Qual è la quantità minima di ordine (MOQ)?",
            a: "In genere 1 tonnellata metrica per prodotto, e accettiamo carichi misti in container da 20 piedi in modo da poter diversificare l'ordine. Ordini di prova più piccoli possono essere discussi in funzione del prodotto e della disponibilità di scorte.",
          },
          {
            q: "Posso mescolare più prodotti in un unico container?",
            a: "Sì, gli ordini in container misti possono essere possibili quando la compatibilità dei prodotti, il confezionamento e le condizioni logistiche lo consentono. Inviaci la lista dei prodotti richiesti e le quantità.",
          },
          {
            q: "Come definite i prezzi dei vostri prodotti?",
            a: "Il prezzo dipende dal prodotto, dalla qualità, dalla quantità, dalla stagione, dal confezionamento e dalle condizioni di consegna. Richiedi un preventivo aggiornato indicando il porto di destinazione e l'incoterm preferito (FOB, CFR, CIF).",
          },
          {
            q: "Perché i prezzi cambiano durante l'anno?",
            a: "I prezzi sono influenzati dalla disponibilità delle colture agricole, dalla qualità del raccolto, dal meteo, dai costi di lavorazione e dalla domanda di mercato nel corso dell'anno.",
          },
          {
            q: "Quali sono le vostre condizioni di pagamento?",
            a: "Le condizioni standard sono 30% di anticipo tramite T/T e 70% contro copia dei documenti di spedizione. Accettiamo anche L/C irrevocabile a vista per ordini importanti, e condizioni flessibili possono essere discusse per i clienti abituali.",
          },
        ],
      },
      {
        id: "packing",
        title: "Confezionamento e marchio privato",
        items: [
          {
            q: "Come vengono confezionati i prodotti?",
            a: "Le erbe e le spezie alla rinfusa possono essere quotate in sacchi idonei o in cartoni foderati, a seconda dell'articolo e della destinazione. Gli oli possono essere disponibili in fusti, taniche o bottiglie. I materiali esatti e le pezzature degli imballaggi sono confermati nell'offerta.",
          },
          {
            q: "Offrite il confezionamento a marchio privato o al dettaglio?",
            a: "Le opzioni di confezionamento a marchio privato e al dettaglio possono essere discusse in base al prodotto, al volume dell'ordine, alla disponibilità degli imballaggi e ai requisiti legali di etichettatura del tuo mercato di destinazione.",
          },
          {
            q: "I prodotti possono essere pallettizzati e fumigati?",
            a: "Sì, la pallettizzazione e il trattamento o i certificati specifici per la destinazione possono essere discussi quando necessario e applicabile.",
          },
        ],
      },
      {
        id: "shipping",
        title: "Spedizione e documenti",
        items: [
          {
            q: "Da quali porti spedite?",
            a: "In genere spediamo da Alessandria, Port Said e Damietta. La scelta dipende dalla destinazione, dalla disponibilità del vettore e dal tuo incoterm preferito.",
          },
          {
            q: "Quanto tempo occorre per preparare un ordine?",
            a: "Di norma 2–4 settimane dopo la conferma dell'ordine e il pagamento, in funzione della quantità e della lavorazione richiesta (sterilizzazione, tagli speciali, analisi di laboratorio).",
          },
          {
            q: "Quali documenti fornite?",
            a: "Forniamo un set completo di documenti di spedizione: Fattura Commerciale, Lista di Collo, Certificato di Origine, Certificato Fitosanitario e Certificato di Analisi (COA).",
          },
          {
            q: "Posso beneficiare di dazi doganali ridotti?",
            a: "Un trattamento tariffario preferenziale può applicarsi in base agli accordi commerciali, alla classificazione del prodotto, alle regole di origine e al paese importatore. Ti preghiamo di verificare con il tuo spedizioniere doganale; possiamo discutere la documentazione di origine applicabile.",
          },
          {
            q: "Potete spedire nel mio paese?",
            a: "Inviaci il paese e il porto di destinazione affinché possiamo verificare le possibilità di spedizione, le restrizioni sui prodotti e la documentazione richiesta.",
          },
        ],
      },
      {
        id: "storage",
        title: "Conservazione e shelf life",
        items: [
          {
            q: "Qual è la shelf life delle vostre erbe?",
            a: "La shelf life varia in funzione del botanical, della lavorazione, del confezionamento e delle condizioni di conservazione. La specifica del prodotto o l'etichetta di lotto pertinente indica il periodo applicabile. Conservare in luogo fresco e asciutto, al riparo dalla luce solare diretta, salvo diversa indicazione.",
          },
          {
            q: "Quando si svolge la stagione di raccolta?",
            a: "I periodi di raccolta variano in base alla coltura e alla regione di produzione. Chamomile è comunemente una coltura primaverile, mentre alcune erbe come Basil, Marjoram e Mint possono avere più tagli. Contattaci per la disponibilità attuale del raccolto.",
          },
        ],
      },
      {
        id: "contact",
        title: "Contatti",
        items: [
          {
            q: "Come posso richiedere un preventivo?",
            a: "Invia il nome del prodotto, la specifica o il taglio, la quantità, la preferenza di confezionamento e il porto di destinazione tramite il modulo di contatto, all'e-mail herbs.milanos.eg@gmail.com o su WhatsApp +20 122 621 1624. Ti risponderemo con le opzioni disponibili e i prezzi.",
          },
        ],
      },
    ],
  },
  contact: {
    eyebrow: "Contatti / Richiedi un preventivo",
    heading: "Ricevi un preventivo all'ingrosso in 24 ore",
    intro:
      "Dicci di cosa hai bisogno — prodotto, quantità, destinazione e incoterm. Il nostro team export ti risponderà entro un giorno lavorativo con prezzi, tempi di consegna, opzioni di confezionamento e un COA per il lotto pertinente.",
    form: {
      name: "Nome e cognome",
      company: "Nome dell'azienda",
      country: "Paese",
      email: "E-mail aziendale",
      phone: "Telefono / WhatsApp",
      category: "Categoria di prodotto",
      product: "Prodotto specifico",
      quantity: "Quantità prevista",
      form: "Forma di prodotto richiesta",
      packing: "Tipo di confezionamento",
      port: "Porto di destinazione",
      incoterm: "Incoterm preferito",
      notes: "Note aggiuntive o specifiche particolari",
      attachment: "Allega un file (PDF, JPG, PNG)",
      submit: "Invia RFQ →",
      sending: "Invio…",
      success:
        "Grazie. Il nostro team export esaminerà le tue specifiche e ti risponderà entro 24 ore lavorative con i prezzi e un COA.",
    },
    info: {
      hq: "Beni Suef, Egitto",
      phone: "+20 122 621 1624",
      email: "herbs.milanos.eg@gmail.com",
      hours: "Lun – Sab, 9:00 – 17:00 (EET)",
    },
    preferEmail: "Preferisci l'e-mail? Contattaci direttamente a",
  },
  footer: {
    about:
      "Herbs Milanos — Esportatore egiziano di erbe, spezie, semi e oli naturali dal 2000. Fattorie di proprietà a Beni Suef, lavorazione sotto ISO 22000 & HACCP.",
    qualityTitle: "Qualità ed export",
    categoriesTitle: "Categorie di prodotti",
    exploreTitle: "Esplora",
    contactTitle: "Richieste di export",
    rights: "© {year} Herbs Milanos — Tutti i diritti riservati.",
    links: {
      about: "Chi siamo",
      products: "Prodotti",
      resources: "Risorse per l'export",
      faq: "FAQ",
      contact: "Richiedi un preventivo",
      quality: "Il nostro approccio alla qualità",
      coa: "Certificato di Analisi (COA)",
      phytosanitary: "Certificato fitosanitario",
      inspection: "Ispezione di terze parti",
    },
  },
  productBriefs: {},
  chatbot: {
    title: "Assistente Herbs Milanos",
    status: "Online · risponde in pochi minuti",
    greeting:
      "Salam 👋 Sono il tuo assistente Herbs Milanos. Scegli un argomento qui sotto o digita una parola chiave (es. \"MOQ\", \"Chamomile\", \"spedizione\").",
    placeholder: "Digita una parola chiave…",
    send: "Invia",
    categories: "Sfoglia per argomento",
    questions: "Domande",
    back: "Torna agli argomenti",
    human: "Chatta su WhatsApp",
    noResults:
      "Nessuna corrispondenza trovata. Prova un'altra parola chiave oppure clicca qui sotto per parlare direttamente con il nostro team export su WhatsApp.",
    matched: "Risposte corrispondenti",
    ariaOpen: "Apri l'assistente di chat",
    ariaClose: "Chiudi l'assistente di chat",
    handoffTitle: "Connessione a un agente umano",
    handoffBody:
      "Non ho trovato una risposta corrispondente alla tua domanda. Ti metto in contatto con un agente umano su WhatsApp per assisterti direttamente.",
    suggestedQuestions: "Domande suggerite",
    typing: "sta scrivendo…",
  },
};

export { it };

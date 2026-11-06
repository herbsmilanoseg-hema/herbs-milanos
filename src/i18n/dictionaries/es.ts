import type { Dictionary } from "../translations";

/* ───────────────────────── Spanish (es) ─────────────────────────
   Traducción completa al español del diccionario B2B de Herbs Milanos.
   Los nombres de productos (Basil, Chamomile, Hibiscus, Cumin, …) se
   mantienen en inglés como nombres propios comerciales. Los nombres
   latinos se conservan tal cual. Los términos comerciales
   (FOB, CIF, CFR, MOQ, COA, HACCP, ISO, RFQ, TBC, T/T, L/C, MRL, TPC)
   se mantienen sin traducir.
─────────────────────────────────────────────────────────────────── */

const es: Dictionary = {
  nav: {
    home: "Inicio",
    about: "Acerca de nosotros",
    products: "Productos",
    resources: "Recursos de exportación",
    faq: "FAQ",
    contact: "Contacto",
    requestQuote: "Solicitar cotización",
  },
  hero: {
    badge:
      "🌿 Herbs Milanos · La confianza de compradores B2B en más de 30 países desde 2000",
    headline:
      "Hierbas y especias egipcias premium — Directo de fábrica a su contenedor",
    subhead:
      "Adquiera Chamomile, Hibiscus, Peppermint, Cumin, Fennel y más de 85 botánicos directamente desde nuestras propias granjas en Beni Suef. Certificado ISO 22000 + HACCP, clasificación magnética con 99,9 % de pureza, enviado FOB/CIF desde Alejandría. Reciba una cotización en 24 horas.",
    ctaPrimary: "Obtener cotización al por mayor →",
    ctaSecondary: "Descargar catálogo",
    trust1: "MOQ desde 1 MT",
    trust2: "FOB · CIF · CFR",
    trust3: "ISO 22000 · HACCP",
    trust4: "89+ referencias en stock",
  },
  why: {
    eyebrow: "Por qué los compradores B2B eligen Herbs Milanos",
    heading:
      "Tres razones por las que los importadores regresan a nosotros — envío tras envío.",
    cards: [
      {
        title: "Granjas propias, precios directos",
        body: "Cultivamos en nuestras propias granjas orgánicas en Beni Suef — sin intermediarios, sin márgenes comerciales. Usted compra al precio en origen más el costo de procesamiento, con trazabilidad completa de la semilla al contenedor.",
      },
      {
        title: "99,9 % de pureza, verificada en laboratorio",
        body: "Cada lote pasa por clasificación magnética Iron Picking, pruebas de humedad y aceite volátil, y análisis microbiológico. Un Certificado de Análisis (COA) acompaña cada envío — sin excepciones.",
      },
      {
        title: "Más de 15 años de fiabilidad en exportación",
        body: "Hemos suministrado a marcas de té de la UE, distribuidores de especias de EE. UU. y fabricantes de alimentos del Golfo desde 2000. Pedidos en contenedores mixtos, envasado de marca propia e inspección de terceros — todo gestionado internamente.",
      },
    ],
  },
  certs: {
    eyebrow: "Nuestras certificaciones",
    body: "Nos comprometemos con los más altos estándares de seguridad alimentaria y salud en cada envío que exportamos.",
    items: [
      { name: "ISO 9001:2015", desc: "Sistema de gestión de la calidad" },
      {
        name: "ISO 22000:2018",
        desc: "Sistema de gestión de inocuidad alimentaria",
      },
      {
        name: "HACCP",
        desc: "Análisis de peligros y puntos críticos de control",
      },
    ],
    download: "Descargar certificado",
  },
  about: {
    heroTitle:
      "Del suelo egipcio a los estantes del mundo — Más de 20 años de excelencia botánica",
    storyHeading: "Nuestra historia",
    storyP1:
      "Durante más de una década, servimos como proveedor nacional de confianza, dominando el arte de la limpieza, clasificación y procesamiento de materias primas botánicas hasta alcanzar una pureza de grado exportación. En 2000, lanzamos Herbs Milanos — acercando nuestra experiencia de la granja al contenedor directamente a compradores B2B internacionales.",
    storyP2:
      "Hoy, Herbs Milanos es uno de los mayores exportadores de hierbas y especias de Egipto. Poseemos más de 50 acres de tierras agrícolas orgánicas en Beni Suef, operamos una instalación de procesamiento de ciclo completo con clasificación magnética y esterilización con vapor, y enviamos a más de 30 países. Nuestra promesa es simple: calidad premium, precios competitivos y entrega puntual — en cada envío, cada vez.",
    processHeading: "De la semilla al contenedor — Nuestro proceso de 4 pasos",
    process: [
      {
        title: "1. Cultivo y cosecha",
        body: "Seleccionamos variedades de semillas premium y cultivamos en nuestras propias granjas en Beni Suef mediante prácticas sostenibles. El momento de cosecha se optimiza para alcanzar el máximo contenido de aceite volátil y la retención del color.",
      },
      {
        title: "2. Secado y procesamiento",
        body: "Secado al sol y deshidratación mecánica en túneles de baja temperatura que preservan los aromas, colores y compuestos activos naturales. Sin aditivos químicos, jamás.",
      },
      {
        title: "3. Clasificación magnética y limpieza",
        body: "Clasificación mecánica avanzada + imanes Iron Picking para eliminar impurezas metálicas y alcanzar el 99,9 % de pureza. Clasificadores ópticos separan por color y tamaño para un producto homogéneo y limpio.",
      },
      {
        title: "4. Envasado y exportación",
        body: "Envasado en sacos de 25 kg de calidad alimentaria con revestimiento interior de PE, o empaquetado de marca propia personalizado. Enviado FOB/CIF/CFR desde Alejandría, Port Said o Damietta — con documentación completa.",
      },
    ],
    visionHeading: "Nuestra visión",
    vision:
      "Ser la fuente más confiable y transparente del mundo de ingredientes botánicos egipcios — donde cada comprador sepa exactamente qué hay en su contenedor, y cada agricultor obtenga un precio justo.",
    missionHeading: "Nuestra misión",
    mission:
      "Entregar botánicos egipcios excepcionales a los fabricantes del mundo, respaldados por trazabilidad completa, análisis de calidad rigurosos y un servicio postventa que supere las expectativas — apoyando al mismo tiempo una agricultura sostenible en las comunidades donde cultivamos.",
    galleryHeading: "Nuestras granjas e instalaciones",
  },
  products: {
    eyebrow: "Catálogo al por mayor",
    heading:
      "89 botánicos egipcios — adquiridos, procesados y listos para enviar",
    intro:
      "Explore nuestro catálogo completo de hierbas, flores, semillas y especias secas. Cada producto incluye un Certificado de Análisis (COA) y está disponible en forma entera, cortada, TBC, triturada o en polvo. Filtre por familia o industria para encontrar su especificación exacta.",
    searchPlaceholder: "Buscar productos…",
    familyLabel: "Familia de producto",
    industryLabel: "Aplicación",
    gradeLabel: "Calidad",
    formLabel: "Forma disponible",
    clear: "Limpiar",
    showing: (n, total) => `Mostrando ${n} de ${total} productos`,
    noMatch: "Ningún producto coincide con sus filtros.",
    clearFilters: "Limpiar filtros",
    viewDetails: "Ver especificaciones y precios",
    downloadCatalogue: "Descargar catálogo",
    requestQuote: "Obtener cotización al por mayor",
  },
  productDetail: {
    origin: "País de origen",
    harvest: "Método de cosecha",
    brief: "Descripción breve",
    specs: "Especificaciones técnicas y analíticas",
    micro: "Criterios microbiológicos",
    forms: "Formas de corte disponibles",
    packing: "Opciones de envasado",
    storage: "Almacenamiento y vida útil",
    shelfLife: "Vida útil",
    certifications: "Certificaciones y documentos disponibles",
    purity: "Pureza",
    moisture: "Humedad",
    volatileOil: "Aceite volátil",
    foreignOrganic: "Materia orgánica extraña",
    foreignInorganic: "Materia inorgánica extraña",
    appearance: "Aspecto",
    color: "Color",
    totalPlate: "Recuento total en placa",
    yeastMold: "Levaduras y mohos",
    ecoli: "E. coli",
    salmonella: "Salmonella",
    downloadSpec: "Descargar ficha técnica (PDF)",
    requestSample: "Solicitar una muestra de este lote",
    requestQuote: "Solicitar cotización personalizada",
    availableOnRequest: "Disponible bajo solicitud",
    back: "Volver a productos",
  },
  resources: {
    eyebrow: "Recursos de exportación y guía para compradores internacionales",
    heading:
      "Recursos prácticos para planificar su abastecimiento de botánicos egipcios",
    rfqTitle: "Cómo solicitar una cotización profesional (RFQ)",
    rfqIntro:
      "Para recibir una cotización precisa en 24 horas, incluya estos detalles en su consulta:",
    rfqPoints: [
      "Nombre del producto y calidad (UE Convencional u Orgánico EC+NOP)",
      "Forma requerida (entero, cortado, TBC, triturado, polvo o molido)",
      "Cantidad prevista (en toneladas métricas o número de contenedores de 20 pies)",
      "Envasado preferido (sacos PP de 25 kg, cartones con revestimiento, o marca propia personalizada)",
      "Puerto de destino + incoterm preferido (FOB Alejandría, CIF Hamburgo, CFR Róterdam)",
    ],
    harvestTitle: "Calendario de cosecha egipcio — Planifique sus pedidos",
    harvestIntro:
      "Las ventanas de cosecha varían según el cultivo y la región. Para obtener los mejores precios y disponibilidad, envíe su RFQ de 1 a 2 meses antes del inicio de la temporada de cosecha.",
    harvestRows: [
      { crop: "Chamomile & Anise", season: "Primavera (abril – mayo)" },
      { crop: "Hibiscus", season: "Otoño (octubre – noviembre)" },
      {
        crop: "Cumin & Coriander",
        season: "Finales de primavera / principios de verano",
      },
      {
        crop: "Peppermint & Spearmint",
        season: "Verano (mayo – agosto, múltiples cortes)",
      },
      { crop: "Basil & Marjoram", season: "Verano (junio – septiembre)" },
      { crop: "Sesame", season: "Otoño (septiembre – noviembre)" },
    ],
    harvestNote:
      "Contamos con stock durante todo el año gracias a nuestras modernas instalaciones de almacenamiento en Beni Suef. Contáctenos para conocer la disponibilidad actual de cosecha y los precios spot.",
    qualityTitle: "Garantía de calidad y estándares de procesamiento",
    qualityBody:
      "Cada producto se somete a: 1) Limpieza mecánica y clasificación óptica, 2) Imanes Iron Picking para eliminar impurezas metálicas hasta un 99,9 % de pureza, 3) Pruebas de humedad y aceite volátil, 4) Análisis microbiológico (TPC, levaduras/mohos, E. coli, Salmonella). Esterilización con vapor disponible bajo solicitud. Un COA específico por lote acompaña cada envío.",
  },
  faq: {
    eyebrow: "FAQ B2B",
    heading: "Pregúntenos",
    intro:
      "Respuestas claras y completas a las preguntas más frecuentes sobre nuestra empresa, productos, calidad, pedidos, envasado, envío, almacenamiento y contacto.",
    categories: [
      {
        id: "about",
        title: "Acerca de Herbs Milanos",
        items: [
          {
            q: "¿Quiénes son ustedes?",
            a: "Somos Herbs Milanos — un exportador egipcio de hierbas, especias, semillas y plantas aromáticas desde 2000. Operamos tanto como fabricante como comerciante, con granjas propias en Beni Suef e instalaciones de procesamiento certificadas bajo ISO 22000 y HACCP.",
          },
          {
            q: "¿Son fabricantes o comerciantes?",
            a: "Ambos. Procesamos y envasamos productos en nuestras propias instalaciones y abastecemos hierbas de granjas y regiones productoras en todo Egipto — incluidas Fayoum, Beni Suef, Minya y Assiut — según el producto y la temporada.",
          },
          {
            q: "¿Por qué abastecer hierbas de Egipto?",
            a: "Egipto es un origen importante para Chamomile, Basil, Marjoram, Mint, Caraway, Coriander, Fennel, Anise, Hibiscus y otros cultivos. El clima, las condiciones de cultivo y cosecha favorecen un aroma, color y volúmenes de suministro deseables; los parámetros de calidad dependen del cultivo y del lote.",
          },
        ],
      },
      {
        id: "products",
        title: "Productos y especificaciones",
        items: [
          {
            q: "¿Qué productos exportan?",
            a: "Exportamos hierbas, flores, semillas y especias secas, así como plantas medicinales y aromáticas. Explore nuestro catálogo completo de productos para ver los artículos disponibles.",
          },
          {
            q: "¿Qué cortes y formas están disponibles?",
            a: "Según el producto: entero, quebrado, cortado, corte para bolsitas de té (TBC), tamizado, triturado o en polvo. Tamaños de malla y cortes personalizados pueden discutirse bajo solicitud.",
          },
          {
            q: "¿Proporcionan especificaciones de los productos?",
            a: "Las especificaciones están disponibles para artículos seleccionados. Solicite a nuestro equipo de exportación la ficha técnica correspondiente y el Certificado de Análisis (COA) específico por lote disponible. El alcance de los análisis depende del producto, lote y los requisitos del cliente.",
          },
          {
            q: "¿Sus productos son orgánicos?",
            a: "Disponemos de productos convencionales. Si requiere material orgánico certificado, confirme con nosotros la disponibilidad del producto y la certificación vigente antes de realizar el pedido.",
          },
          {
            q: "¿Pueden cumplir con los requisitos de plaguicidas de la UE (MRL)?",
            a: "Sí. Cumplimos con los estándares globales de seguridad alimentaria. Los análisis de residuos de plaguicidas pueden realizarse según los requisitos de su mercado objetivo. La conformidad se confirma mediante resultados de laboratorios acreditados para el producto y lote específico antes del envío.",
          },
          {
            q: "¿Sus hierbas están esterilizadas o tratadas?",
            a: "Las opciones de tratamiento y control microbiológico, incluida la esterilización con vapor cuando sea factible, pueden discutirse por producto. Especifique sus requisitos para que podamos confirmar el proceso y la documentación disponibles.",
          },
        ],
      },
      {
        id: "quality",
        title: "Calidad y certificaciones",
        items: [
          {
            q: "¿Qué certificaciones tienen?",
            a: "Estamos certificados bajo ISO 9001:2015 e ISO 22000:2018 y seguimos los principios de seguridad alimentaria HACCP. Puede proporcionarse una copia de nuestros certificados vigentes bajo solicitud.",
          },
          {
            q: "¿Cómo controlan la calidad?",
            a: "Las materias primas se inspeccionan y procesan según los requisitos del producto, con etapas de limpieza, clasificación y envasado. El muestreo, los parámetros de análisis y los límites de aceptación pueden acordarse para cada pedido.",
          },
          {
            q: "¿Puedo obtener una muestra antes de pedir?",
            a: "Las muestras pueden estar disponibles según el producto y el stock. Nuestro equipo confirmará la cantidad de muestra, el costo, los gastos de mensajería y si es posible tomar una muestra del lote de envío previsto.",
          },
          {
            q: "¿Puedo enviar a mi propio inspector o utilizar una inspección de terceros?",
            a: "Sí, la inspección de terceros puede organizarse por acuerdo. Indique su agencia de inspección preferida, el alcance y el momento antes de confirmar el pedido.",
          },
        ],
      },
      {
        id: "orders",
        title: "Pedidos y precios",
        items: [
          {
            q: "¿Cuál es su cantidad mínima de pedido (MOQ)?",
            a: "Generalmente 1 tonelada métrica por producto, y aceptamos cargas mixtas en contenedores de 20 pies para que pueda diversificar su pedido. Los pedidos de prueba más pequeños pueden discutirse según el producto y la disponibilidad de stock.",
          },
          {
            q: "¿Puedo mezclar varios productos en un solo contenedor?",
            a: "Sí, los pedidos en contenedores mixtos pueden ser posibles cuando la compatibilidad de productos, el envasado y las condiciones logísticas lo permitan. Envíenos su lista de productos y cantidades solicitadas.",
          },
          {
            q: "¿Cómo fijan los precios de sus productos?",
            a: "El precio depende del producto, calidad, cantidad, temporada, envasado y los términos de entrega. Solicite una cotización actualizada indicando su puerto de destino y el incoterm preferido (FOB, CFR, CIF).",
          },
          {
            q: "¿Por qué cambian los precios durante el año?",
            a: "Los precios se ven afectados por la disponibilidad de cosechas agrícolas, la calidad de la cosecha, el clima, los costos de procesamiento y la demanda del mercado a lo largo del año.",
          },
          {
            q: "¿Cuáles son sus condiciones de pago?",
            a: "Nuestras condiciones estándar son 30 % de anticipo por T/T y 70 % contra copia de los documentos de envío. También aceptamos L/C irrevocable a la vista para pedidos importantes, y condiciones flexibles pueden discutirse para clientes habituales.",
          },
        ],
      },
      {
        id: "packing",
        title: "Envasado y marca propia",
        items: [
          {
            q: "¿Cómo se envasan los productos?",
            a: "Las hierbas y especias a granel pueden cotizarse en sacos adecuados o cartones con revestimiento, según el artículo y el destino. Los aceites pueden estar disponibles en tambores, garrafas o botellas. Los materiales exactos y los tamaños de empaque se confirman en la oferta.",
          },
          {
            q: "¿Ofrecen envasado de marca propia o al por menor?",
            a: "Las opciones de envasado de marca propia y al por menor pueden discutirse según el producto, el volumen del pedido, la disponibilidad de empaques y los requisitos legales de etiquetado de su mercado objetivo.",
          },
          {
            q: "¿Pueden los productos paletizarse y fumigarse?",
            a: "Sí, la paletización y el tratamiento o certificados específicos al destino pueden discutirse cuando sean necesarios y aplicables.",
          },
        ],
      },
      {
        id: "shipping",
        title: "Envío y documentos",
        items: [
          {
            q: "¿Desde qué puertos envían?",
            a: "Normalmente enviamos desde Alejandría, Port Said y Damietta. La elección depende del destino, la disponibilidad del transportista y su incoterm preferido.",
          },
          {
            q: "¿Cuánto tarda la preparación de un pedido?",
            a: "Generalmente de 2 a 4 semanas tras la confirmación del pedido y el pago, según la cantidad y el procesamiento requerido (esterilización, cortes especiales, análisis de laboratorio).",
          },
          {
            q: "¿Qué documentos proporcionan?",
            a: "Proporcionamos un juego completo de documentos de envío: Factura Comercial, Lista de Empaque, Certificado de Origen, Certificado Fitosanitario y Certificado de Análisis (COA).",
          },
          {
            q: "¿Puedo obtener aranceles aduaneros reducidos?",
            a: "El tratamiento arancelario preferencial puede aplicarse en virtud de acuerdos comerciales según la clasificación del producto, las reglas de origen y el país importador. Consúltese con su agente de aduanas; podemos conversar sobre la documentación de origen aplicable.",
          },
          {
            q: "¿Pueden enviar a mi país?",
            a: "Envíenos su país y puerto de destino para que podamos verificar las posibilidades de envío, las restricciones de productos y la documentación requerida.",
          },
        ],
      },
      {
        id: "storage",
        title: "Almacenamiento y vida útil",
        items: [
          {
            q: "¿Cuál es la vida útil de sus hierbas?",
            a: "La vida útil varía según el botánico, el procesamiento, el empaquetado y las condiciones de almacenamiento. La especificación del producto o la etiqueta del lote pertinente indica el período aplicable. Almacenar en un lugar fresco y seco, protegido de la luz solar directa, salvo que se indique lo contrario.",
          },
          {
            q: "¿Cuándo es la temporada de cosecha?",
            a: "Los períodos de cosecha varían según el cultivo y la región productora. Chamomile es comúnmente un cultivo de primavera, mientras que algunas hierbas como Basil, Marjoram y Mint pueden tener varios cortes. Contáctenos para conocer la disponibilidad actual de cosecha.",
          },
        ],
      },
      {
        id: "contact",
        title: "Contacto",
        items: [
          {
            q: "¿Cómo puedo solicitar una cotización?",
            a: "Envíe el nombre del producto, la especificación o corte, la cantidad, la preferencia de envasado y el puerto de destino a través del formulario de contacto, el correo herbs.milanos.eg@gmail.com o WhatsApp +20 122 621 1624. Le daremos seguimiento con las opciones disponibles y los precios.",
          },
        ],
      },
    ],
  },
  contact: {
    eyebrow: "Contacto / Solicitar cotización",
    heading: "Obtenga una cotización al por mayor en 24 horas",
    intro:
      "Cuéntenos qué necesita — producto, cantidad, destino e incoterm. Nuestro equipo de exportación responderá dentro de un día hábil con precios, plazos de entrega, opciones de envasado y un COA del lote correspondiente.",
    form: {
      name: "Nombre completo",
      company: "Nombre de la empresa",
      country: "País",
      email: "Correo electrónico profesional",
      phone: "Teléfono / WhatsApp",
      category: "Categoría de producto",
      product: "Producto específico",
      quantity: "Cantidad prevista",
      form: "Forma de producto requerida",
      packing: "Tipo de envasado",
      port: "Puerto de destino",
      incoterm: "Incoterm preferido",
      notes: "Notas adicionales o especificaciones especiales",
      attachment: "Adjuntar un archivo (PDF, JPG, PNG)",
      submit: "Enviar RFQ →",
      sending: "Enviando…",
      success:
        "Gracias. Nuestro equipo de exportación revisará sus especificaciones y responderá dentro de las 24 horas hábiles con los precios y un COA.",
    },
    info: {
      hq: "Beni Suef, Egipto",
      phone: "+20 122 621 1624",
      email: "herbs.milanos.eg@gmail.com",
      hours: "Lun – Sáb, 9:00 – 17:00 (EET)",
    },
    preferEmail: "¿Prefiere el correo electrónico? Contáctenos directamente en",
  },
  footer: {
    about:
      "Herbs Milanos — Exportador egipcio de hierbas, especias, semillas y aceites naturales desde 2000. Granjas propias en Beni Suef, procesamiento bajo ISO 22000 y HACCP.",
    qualityTitle: "Calidad y exportación",
    categoriesTitle: "Categorías de productos",
    exploreTitle: "Explorar",
    contactTitle: "Consultas de exportación",
    rights: "© {year} Herbs Milanos — Todos los derechos reservados.",
    links: {
      about: "Acerca de nosotros",
      products: "Productos",
      resources: "Recursos de exportación",
      faq: "FAQ",
      contact: "Solicitar cotización",
      quality: "Nuestro enfoque de calidad",
      coa: "Certificado de Análisis (COA)",
      phytosanitary: "Certificado fitosanitario",
      inspection: "Inspección de terceros",
    },
  },
  productBriefs: {},
  chatbot: {
    title: "Asistente de Herbs Milanos",
    status: "En línea · responde en minutos",
    greeting:
      "Salam 👋 Soy su asistente de Herbs Milanos. Elija un tema a continuación o escriba una palabra clave (por ej. \"MOQ\", \"Chamomile\", \"envío\").",
    placeholder: "Escriba una palabra clave…",
    send: "Enviar",
    categories: "Explorar por tema",
    questions: "Preguntas",
    back: "Volver a temas",
    human: "Chatear en WhatsApp",
    noResults:
      "No se encontraron coincidencias. Pruebe con otra palabra clave o haga clic abajo para hablar directamente con nuestro equipo de exportación en WhatsApp.",
    matched: "Respuestas coincidentes",
    ariaOpen: "Abrir asistente de chat",
    ariaClose: "Cerrar asistente de chat",
    handoffTitle: "Conectándolo con un agente humano",
    handoffBody:
      "No encontré una respuesta que coincida con su pregunta. Lo conectaré con un agente humano en WhatsApp para ayudarle directamente.",
    suggestedQuestions: "Preguntas sugeridas",
    typing: "escribiendo…",
  },
};

export { es };

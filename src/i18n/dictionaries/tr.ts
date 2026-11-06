import type { Dictionary } from "../translations";

/* ───────────────────────── Turkish (tr) ─────────────────────────
   Full Turkish translation of the Herbs Milanos B2B dictionary.
   Product names (Basil, Chamomile, Hibiscus, Cumin, …) are kept in
   English as trade proper nouns. Latin names are left as-is.
   Trade terms (FOB, CIF, CFR, MOQ, COA, HACCP, ISO, RFQ, TBC, T/T,
   L/C, MRL, TPC) are kept as-is.
─────────────────────────────────────────────────────────────────── */

const tr: Dictionary = {
  nav: {
    home: "Ana Sayfa",
    about: "Hakkımızda",
    products: "Ürünler",
    resources: "İhracat Kaynakları",
    faq: "SSS",
    contact: "İletişim",
    requestQuote: "Teklif İste",
  },
  hero: {
    badge:
      "🌿 Herbs Milanos · 2000 yılından bu yana 30+ ülkede B2B alıcılarının tercihi",
    headline:
      "Premium Mısır Otları ve Baharatları — Fabrikadan Doğrudan Konteynerinize",
    subhead:
      "Chamomile, Hibiscus, Peppermint, Cumin, Fennel ve 85+ botanik ürünü Beni Suef'teki kendi çiftliklerimizden doğrudan tedarik edin. ISO 22000 + HACCP sertifikalı, manyetik ayrıştırma ile %99,9 saflıkta, İskenderiye'den FOB/CIF olarak sevkiyat. 24 saat içinde teklif alın.",
    ctaPrimary: "Toplu Teklif Al →",
    ctaSecondary: "Katalogu İndir",
    trust1: "MOQ 1 MT'den başlar",
    trust2: "FOB · CIF · CFR",
    trust3: "ISO 22000 · HACCP",
    trust4: "89+ SKU stokta",
  },
  why: {
    eyebrow: "B2B alıcılar neden Herbs Milanos'u seçer",
    heading:
      "İthalatçıların bize dönüş sebebi olan üç neden — sevkiyattan sevkiyata.",
    cards: [
      {
        title: "Kendi Çiftliklerimiz, Doğrudan Fiyatlandırma",
        body: "Beni Suef'teki kendi organik çiftliklerimizde üretim yapıyoruz — aracı yok, ticaret kar marjı yok. Çiftlik geçidi + işleme maliyeti ile satın alırsınız, tohumdan konteynere tam izlenebilirlikle.",
      },
      {
        title: "%99,9 Saflık, Laboratuvar Onaylı",
        body: "Her parti manyetik Iron Picking ayrıştırması, nem ve uçucu yağ testleri ile mikrobiyolojik taramadan geçer. Her sevkiyatla birlikte bir Analiz Sertifikası (COA) sunulur — istisnasız.",
      },
      {
        title: "15+ Yıl İhracat Güvenilirliği",
        body: "2000 yılından bu yana AB çay markalarına, ABD baharat distribütörlerine ve Körfez gıda üreticilerine tedarik sağladık. Karışık konteyner siparişleri, özel markalı paketleme ve üçüncü taraf denetim — tamamı şirket içinde yönetilir.",
      },
    ],
  },
  certs: {
    eyebrow: "Sertifikalarımız",
    body: "İhracatını yaptığımız her sevkiyatta en yüksek gıda güvenliği ve sağlık standartlarına bağlılığımızı taahhüt ederiz.",
    items: [
      { name: "ISO 9001:2015", desc: "Kalite Yönetim Sistemi" },
      {
        name: "ISO 22000:2018",
        desc: "Gıda Güvenliği Yönetim Sistemi",
      },
      {
        name: "HACCP",
        desc: "Tehlike Analizi ve Kritik Kontrol Noktaları",
      },
    ],
    download: "Sertifikayı indir",
  },
  about: {
    heroTitle:
      "Mısır Toprağından Dünyanın Raflarına — 20+ Yıl Botanik Mükemmelliği",
    storyHeading: "Hikayemiz",
    storyP1:
      "On yılı aşkın süre boyunca güvenilir bir yerel tedarikçi olarak hizmet verdik ve ham botanik maddelerini temizleme, ayıklama ve işleme sanatında uzmanlaşarak ihracat kalitesinde saflığa ulaştık. 2000 yılında Herbs Milanos'u kurduk — çiftlikten konteynere uzanan uzmanlığımızı doğrudan uluslararası B2B alıcılarına sunduk.",
    storyP2:
      "Bugün Herbs Milanos, Mısır'ın en büyük ot ve baharat ihracatçılarından biridir. Beni Suef'te 50+ dönüm organik tarım arazisine sahibiz, manyetik ayrıştırma ve buhar sterilizasyonu içeren tam döngü işleme tesisi işletiyoruz ve 30+ ülkeye sevkiyat yapıyoruz. Vaadimiz basit: premium kalite, rekabetçi fiyatlandırma ve zamanında teslimat — her sevkiyatta, her zaman.",
    processHeading: "Tohumdan Konteynere — 4 Adımlı Sürecimiz",
    process: [
      {
        title: "1. Yetiştirme ve Hasat",
        body: "Premium tohum çeşitlerini seçer ve sürdürülebilir uygulamalarla Beni Suef'teki kendi çiftliklerimizde üretim yaparız. Hasat zamanlaması, en yüksek uçucu yağ içeriği ve renk korunumu için optimize edilir.",
      },
      {
        title: "2. Kurutma ve İşleme",
        body: "Doğal aromaları, renkleri ve aktif bileşenleri koruyan düşük sıcaklıklı tünellerde güneşte kurutma ve mekanik kurutma uygulanır. Hiçbir kimyasal katkı maddesi içermez, asla.",
      },
      {
        title: "3. Manyetik Ayıklama ve Temizleme",
        body: "Gelişmiş mekanik ayıklama + Iron Picking mıknatıtları, metalik yabancı maddeleri gidererek %99,9 saflığa ulaşır. Optik ayırıcılar, homojen ve temiz bir ürün için renk ve boyutla ayrıştırır.",
      },
      {
        title: "4. Paketleme ve İhracat",
        body: "PE iç astarlı 25 kg gıda sınıfı torbalarda veya özel özel markalı ambalajda paketlenir. İskenderiye, Port Said veya Dimyat'tan FOB/CIF/CFR olarak — tam dokümantasyonla sevkiyat yapılır.",
      },
    ],
    visionHeading: "Vizyonumuz",
    vision:
      "Mısır botanik içerikleri için dünyanın en güvenilir ve şeffaf kaynağı olmak — her alıcı konteynerinde tam olarak ne olduğunu bilsin ve her çiftçi adil bir fiyat alsın.",
    missionHeading: "Misyonumuz",
    mission:
      "Mısır'da yetişen üstün botanikleri dünya üreticilerine ulaştırmak; tam izlenebilirlik, titiz kalite analizleri ve beklentileri aşan satış sonrası hizmetle desteklemek — aynı zamanda üretim yaptığımız topluluklarda sürdürülebilir tarımı desteklemek.",
    galleryHeading: "Çiftliklerimiz ve Tesisimiz",
  },
  products: {
    eyebrow: "Toptan Katalog",
    heading:
      "89 Mısır Botaniği — Tedarik Edilmiş, İşlenmiş ve Sevkiyata Hazır",
    intro:
      "Kuru otlar, çiçekler, tohumlar ve baharatların tam kataloguna göz atın. Her ürün, bir Analiz Sertifikası (COA) ile birlikte gelir; bütün, kesik, TBC, ovulmuş veya toz formda mevcuttur. Tam spesifikasyonunuzu bulmak için aile veya sektör bazında filtreleyin.",
    searchPlaceholder: "Ürün ara…",
    familyLabel: "Ürün ailesi",
    industryLabel: "Uygulama",
    gradeLabel: "Kalite",
    formLabel: "Mevcut form",
    clear: "Temizle",
    showing: (n, total) => `${total} üründen ${n} tanesi gösteriliyor`,
    noMatch: "Filtrelerinize uygun ürün bulunamadı.",
    clearFilters: "Filtreleri temizle",
    viewDetails: "Spesifikasyonları ve fiyatları görüntüle",
    downloadCatalogue: "Katalogu İndir",
    requestQuote: "Toplu Teklif Al",
  },
  productDetail: {
    origin: "Menşe ülkesi",
    harvest: "Hasat yöntemi",
    brief: "Kısa açıklama",
    specs: "Teknik ve analitik spesifikasyonlar",
    micro: "Mikrobiyolojik kriterler",
    forms: "Mevcut kesim formları",
    packing: "Paketleme seçenekleri",
    storage: "Depolama ve raf ömrü",
    shelfLife: "Raf ömrü",
    certifications: "Mevcut sertifikalar ve belgeler",
    purity: "Saflık",
    moisture: "Nem",
    volatileOil: "Uçucu yağ",
    foreignOrganic: "Yabancı organik madde",
    foreignInorganic: "Yabancı inorganik madde",
    appearance: "Görünüm",
    color: "Renk",
    totalPlate: "Toplam plak sayısı",
    yeastMold: "Maya ve küf",
    ecoli: "E. coli",
    salmonella: "Salmonella",
    downloadSpec: "Spesifikasyon formunu indir (PDF)",
    requestSample: "Bu partiden numune iste",
    requestQuote: "Özel teklif iste",
    availableOnRequest: "Talep üzerine mevcuttur",
    back: "Ürünlere dön",
  },
  resources: {
    eyebrow: "İhracat Kaynakları ve Uluslararası Alıcı Rehberi",
    heading:
      "Mısır botanik tedarikinizi planlamak için pratik kaynaklar",
    rfqTitle: "Profesyonel Teklif (RFQ) Nasıl İstenir",
    rfqIntro:
      "24 saat içinde doğru bir teklif almak için talebinize şu detayları dahil edin:",
    rfqPoints: [
      "Ürün adı ve kalite sınıfı (AB Konvansiyonel veya Organik EC+NOP)",
      "İstenen form (bütün, kesik, TBC, ovulmuş, toz veya öğütülmüş)",
      "Beklenen miktar (metrik ton veya 20ft konteyner sayısı olarak)",
      "Tercih edilen paketleme (25 kg PP torbalar, astarlı kartonlar veya özel özel marka)",
      "Varış limanı + tercih edilen incoterm (FOB İskenderiye, CIF Hamburg, CFR Rotterdam)",
    ],
    harvestTitle: "Mısır Hasat Takvimi — Siparişlerinizi Planlayın",
    harvestIntro:
      "Hasat pencereleri ürüne ve bölgeye göre değişir. En iyi fiyat ve bulunabilirlik için RFQ'nuzu hasat sezonu başlamadan 1–2 ay önce gönderin.",
    harvestRows: [
      { crop: "Chamomile & Anise", season: "İlkbahar (Nisan – Mayıs)" },
      { crop: "Hibiscus", season: "Sonbahar (Ekim – Kasım)" },
      {
        crop: "Cumin & Coriander",
        season: "Geç ilkbahar / erken yaz",
      },
      {
        crop: "Peppermint & Spearmint",
        season: "Yaz (Mayıs – Ağustos, çoklu biçim)",
      },
      { crop: "Basil & Marjoram", season: "Yaz (Haziran – Eylül)" },
      { crop: "Sesame", season: "Sonbahar (Eylül – Kasım)" },
    ],
    harvestNote:
      "Beni Suef'teki modern depolama tesislerimiz sayesinde yıl boyu stok mevcuttur. Güncel ürün bulunabilirliği ve spot fiyatlandırma için bizimle iletişime geçin.",
    qualityTitle: "Kalite Güvencesi ve İşleme Standartları",
    qualityBody:
      "Her ürün şu süreçlerden geçer: 1) Mekanik temizleme ve optik ayıklama, 2) %99,9 saflığa ulaşmak için metalik yabancı maddeleri gideren Iron Picking mıknatıtları, 3) Nem ve uçucu yağ testleri, 4) Mikrobiyolojik tarama (TPC, maya/küf, E. coli, Salmonella). Talep üzerine buhar sterilizasyonu mevcuttur. Partiye özel bir COA her sevkiyatla birlikte sunulur.",
  },
  faq: {
    eyebrow: "B2B SSS",
    heading: "Bize sorun",
    intro:
      "Şirketimiz, ürünlerimiz, kalite, siparişler, paketleme, sevkiyat, depolama ve iletişimle ilgili en sık sorulan sorulara net ve kapsamlı yanıtlar.",
    categories: [
      {
        id: "about",
        title: "Herbs Milanos Hakkında",
        items: [
          {
            q: "Kimsiniz?",
            a: "Biz Herbs Milanos'uz — 2000 yılından bu yana otlar, baharatlar, tohumlar ve aromatik bitkiler ihraç eden bir Mısır ihracatçısıyız. Hem üretici hem tüccar olarak faaliyet gösteriyoruz; Beni Suef'te kendi çiftliklerimiz ve ISO 22000 & HACCP kapsamında işleme tesislerimiz mevcuttur.",
          },
          {
            q: "Üretici mi yoksa tüccar mısınız?",
            a: "Her ikisi. Ürünleri kendi tesislerimizde işler ve paketleriz, ayrıca ürün ve mevsime göre Mısır genelindeki çiftliklerden ve yetiştirme bölgelerinden — Fayoum, Beni Suef, Minya ve Asyut dahil — otları tedarik ederiz.",
          },
          {
            q: "Otlar neden Mısır'dan tedarik edilmeli?",
            a: "Mısır; Chamomile, Basil, Marjoram, Mint, Caraway, Coriander, Fennel, Anise, Hibiscus ve diğer ürünler için önemli bir menşeidir. İklim, yetiştirme ve hasat koşulları arzu edilen aroma, renk ve tedarik hacimlerini destekler; kalite parametreleri ürüne ve partiye bağlıdır.",
          },
        ],
      },
      {
        id: "products",
        title: "Ürünler ve Spesifikasyonlar",
        items: [
          {
            q: "Hangi ürünleri ihraç ediyorsunuz?",
            a: "Kuru otlar, çiçekler, tohumlar ve baharatlar ile tıbbi ve aromatik bitkiler ihraç ediyoruz. Mevcut ürünleri keşfetmek için tam ürün katalogumuza göz atın.",
          },
          {
            q: "Hangi kesimler ve formlar mevcut?",
            a: "Ürüne bağlı olarak: bütün, ezilmiş, kesik, çay poşeti kesimi (TBC), elenmiş, ovulmuş veya toz. Özel mesh ve kesim boyutları talep üzerine görüşülebilir.",
          },
          {
            q: "Ürün spesifikasyonları sağlıyor musunuz?",
            a: "Seçili ürünler için spesifikasyonlar mevcuttur. İhracat ekibimizden ilgili teknik veri formunu ve mevcut partiye özel Analiz Sertifikasını (COA) isteyin. Test kapsamı ürüne, partiye ve müşteri gereksinimlerine bağlıdır.",
          },
          {
            q: "Ürünleriniz organik mi?",
            a: "Konvansiyonel ürünler mevcuttur. Sertifikalı organik materyal gerektiriyorsanız, lütfen sipariş öncesinde ürün bulunabilirliğini ve geçerli sertifikayı bizimle teyit edin.",
          },
          {
            q: "AB pestisit (MRL) gereksinimlerini karşılıyor musunuz?",
            a: "Evet. Küresel gıda güvenliği standartlarına uyuyoruz. Pestisit kalıntı testleri, hedef pazarınızın gereksinimlerine göre yapılabilir. Uygunluk, sevkiyat öncesinde ürüne ve belirli partiye yönelik akredite laboratuvar sonuçlarıyla teyit edilir.",
          },
          {
            q: "Otlarınız sterilize edilmiş veya işlem görmüş mü?",
            a: "Mümkün olduğunda buhar sterilizasyonu dahil olmak üzere işleme ve mikrobiyolojik kontrol seçenekleri ürün bazında görüşülebilir. Mevcut süreci ve dokümantasyonu teyit edebilmemiz için lütfen gereksinimlerinizi belirtin.",
          },
        ],
      },
      {
        id: "quality",
        title: "Kalite ve Sertifikalar",
        items: [
          {
            q: "Hangi sertifikalara sahipsiniz?",
            a: "ISO 9001:2015 ve ISO 22000:2018 sertifikalıyız ve HACCP gıda güvenliği ilkelerini uyguluyoruz. Geçerli sertifikalarımızın bir kopyası talep üzerine sağlanabilir.",
          },
          {
            q: "Kaliteyi nasıl kontrol ediyorsunuz?",
            a: "Ham maddeler, ürün gereksinimlerine göre temizleme, ayıklama ve paketleme adımlarıyla denetlenir ve işlenir. Numune alma, test parametreleri ve kabul limitleri her sipariş için kararlaştırılabilir.",
          },
          {
            q: "Sipariş öncesi numune alabilir miyim?",
            a: "Numuneler, ürüne ve stoğa bağlı olarak mevcut olabilir. Ekibimiz numune miktarını, maliyeti, kurye ücretlerini ve planlanan sevkiyat partisinden numune alınıp alınamayacağını teyit edecektir.",
          },
          {
            q: "Kendi denetçimi gönderebilir veya üçüncü taraf denetim kullanabilir miyim?",
            a: "Evet, üçüncü taraf denetim anlaşma ile düzenlenebilir. Lütfen tercih ettiğiniz denetim kuruluşunu, kapsamı ve zamanlamayı siparişi teyit etmeden önce bildirin.",
          },
        ],
      },
      {
        id: "orders",
        title: "Siparişler ve Fiyatlandırma",
        items: [
          {
            q: "Minimum sipariş miktarınız (MOQ) nedir?",
            a: "Genellikle ürün başına 1 metrik ton ve siparişinizi çeşitlendirmeniz için karışık 20ft konteyner yüklerini kabul ediyoruz. Daha küçük deneme siparişleri, ürüne ve stok bulunabilirliğine bağlı olarak görüşülebilir.",
          },
          {
            q: "Tek bir konteynerde birkaç ürünü karıştırabilir miyim?",
            a: "Evet, ürün uyumluluğu, paketleme ve lojistik koşulların izin verdiği durumlarda karışık konteyner siparişleri mümkün olabilir. Talep ettiğiniz ürün listesini ve miktarları bize gönderin.",
          },
          {
            q: "Ürünlerinizi nasıl fiyatlandırıyorsunuz?",
            a: "Fiyatlandırma; ürüne, sınıfa, miktara, mevsime, paketlemeye ve teslimat koşullarına bağlıdır. Varış limanınızı ve tercih ettiğiniz incoterm'i (FOB, CFR, CIF) belirterek güncel bir teklif isteyin.",
          },
          {
            q: "Fiyatlar yıl içinde neden değişiyor?",
            a: "Fiyatlar; yıl boyunca tarımsal ürün bulunabilirliği, hasat kalitesi, hava durumu, işleme maliyetleri ve pazar talebinden etkilenir.",
          },
          {
            q: "Ödeme koşullarınız nelerdir?",
            a: "Standart koşullarımız T/T ile %30 peşin ve sevkiyat belgelerinin kopyası karşılığında %70 ödeme. Büyük siparişler için kabul edilemez akreditifi (L/C) de kabul ediyoruz ve düzenli müşteriler için esnek koşullar görüşülebilir.",
          },
        ],
      },
      {
        id: "packing",
        title: "Paketleme ve Özel Marka",
        items: [
          {
            q: "Ürünler nasıl paketlenir?",
            a: "Toplu otlar ve baharatlar, ürüne ve varış noktasına bağlı olarak uygun torbalar veya astarlı kartonlar ile fiyatlandırılabilir. Yağlar varillerde, jerrycan'larda veya şişelerde mevcut olabilir. Tam malzemeler ve paket boyutları teklifte teyit edilir.",
          },
          {
            q: "Özel marka veya perakende paketleme sunuyor musunuz?",
            a: "Özel marka ve perakende paketleme seçenekleri; ürüne, sipariş hacmine, ambalaj bulunabilirliğine ve hedef pazarınızın yasal etiketleme gereksinimlerine göre görüşülebilir.",
          },
          {
            q: "Ürünler paletlenebilir ve fümige edilebilir mi?",
            a: "Evet, gerektiğinde ve uygulanabilir olduğunda paletleme ve varış noktasına özel işlem veya sertifikalar görüşülebilir.",
          },
        ],
      },
      {
        id: "shipping",
        title: "Sevkiyat ve Belgeler",
        items: [
          {
            q: "Hangi limanlardan sevkiyat yapıyorsunuz?",
            a: "Genellikle İskenderiye, Port Said ve Dimyat'tan sevkiyat yapıyoruz. Seçim; varış noktasına, taşıyıcı bulunabilirliğine ve tercih ettiğiniz incoterm'e bağlıdır.",
          },
          {
            q: "Bir siparişin hazırlanması ne kadar sürer?",
            a: "Genellikle sipariş teyidi ve ödemesinden sonra 2–4 hafta; miktara ve gereken işleme (sterilizasyon, özel kesimler, laboratuvar testleri) bağlı olarak.",
          },
          {
            q: "Hangi belgeleri sağlıyorsunuz?",
            a: "Tam sevkiyat belge seti sağlıyoruz: Ticari Fatura, Çeki Listesi, Menşe Şahadetnamesi, Bitki Sağlığı Sertifikası ve Analiz Sertifikası (COA).",
          },
          {
            q: "İndirimli gümrük vergileri alabilir miyim?",
            a: "Tercihli gümrük muamelesi; ürün sınıflandırması, menşe kuralları ve ithalat ülkesine bağlı olarak ticaret anlaşmaları kapsamında uygulanabilir. Lütfen gümrük müşavirinizle kontrol edin; biz ilgili menşe dokümantasyonunu görüşebiliriz.",
          },
          {
            q: "Ülkeme sevkiyat yapabilir misiniz?",
            a: "Sevkiyat olanaklarını, ürün kısıtlamalarını ve gereken dokümantasyonu kontrol edebilmemiz için varış ülkenizi ve limanınızı bize gönderin.",
          },
        ],
      },
      {
        id: "storage",
        title: "Depolama ve Raf Ömrü",
        items: [
          {
            q: "Otlarınızın raf ömrü nedir?",
            a: "Raf ömrü; botaniğe, işleme, ambalaja ve depolama koşullarına göre değişir. İlgili ürün spesifikasyonu veya parti etiketi geçerli dönemi belirtir. Aksi belirtilmedikçe doğrudan güneş ışığından uzak, serin ve kuru bir yerde saklayın.",
          },
          {
            q: "Hasat sezonu ne zaman?",
            a: "Hasat dönemleri ürüne ve yetiştirme bölgesine göre değişir. Chamomile genellikle ilkbahar ürünüdür, Basil, Marjoram ve Mint gibi bazı otlarda ise birden fazla biçim olabilir. Güncel ürün bulunabilirliği için bizimle iletişime geçin.",
          },
        ],
      },
      {
        id: "contact",
        title: "İletişim",
        items: [
          {
            q: "Nasıl teklif isteyebilirim?",
            a: "İletişim formu, herbs.milanos.eg@gmail.com e-postası veya +20 122 621 1624 WhatsApp numarası üzerinden ürün adını, spesifikasyon veya kesimi, miktarı, paketleme tercihi ve varış limanını gönderin. Mevcut seçenekler ve fiyatlarla size geri dönüş yapacağız.",
          },
        ],
      },
    ],
  },
  contact: {
    eyebrow: "İletişim / Teklif İste",
    heading: "24 Saatte Toplu Teklif Alın",
    intro:
      "İhtiyacınızı söyleyin — ürün, miktar, varış noktası ve incoterm. İhracat ekibimiz bir iş günü içinde fiyatlandırma, teslim süresi, paketleme seçenekleri ve ilgili parti için COA ile yanıt verecektir.",
    form: {
      name: "Ad Soyad",
      company: "Şirket adı",
      country: "Ülke",
      email: "Kurumsal e-posta",
      phone: "Telefon / WhatsApp",
      category: "Ürün kategorisi",
      product: "Belirli ürün",
      quantity: "Beklenen miktar",
      form: "İstenen ürün formu",
      packing: "Paketleme tipi",
      port: "Varış limanı",
      incoterm: "Tercih edilen incoterm",
      notes: "Ek notlar veya özel spesifikasyonlar",
      attachment: "Dosya ekle (PDF, JPG, PNG)",
      submit: "RFQ Gönder →",
      sending: "Gönderiliyor…",
      success:
        "Teşekkürler. İhracat ekibimiz spesifikasyonlarınızı inceleyecek ve 24 iş saati içinde fiyatlandırma ve COA ile yanıt verecektir.",
    },
    info: {
      hq: "Beni Suef, Mısır",
      phone: "+20 122 621 1624",
      email: "herbs.milanos.eg@gmail.com",
      hours: "Pzt – Cmt, 9:00 – 17:00 (EET)",
    },
    preferEmail: "E-postayı mı tercih edersiniz? Bize doğrudan ulaşın:",
  },
  footer: {
    about:
      "Herbs Milanos — 2000 yılından bu yana otlar, baharatlar, tohumlar ve doğal yağların Mısır ihracatçısı. Beni Suef'te kendi çiftlikleri, ISO 22000 & HACCP kapsamında işleme.",
    qualityTitle: "Kalite ve İhracat",
    categoriesTitle: "Ürün Kategorileri",
    exploreTitle: "Keşfet",
    contactTitle: "İhracat talepleri",
    rights: "© {year} Herbs Milanos — Tüm hakları saklıdır.",
    links: {
      about: "Hakkımızda",
      products: "Ürünler",
      resources: "İhracat Kaynakları",
      faq: "SSS",
      contact: "Teklif iste",
      quality: "Kalite yaklaşımımız",
      coa: "Analiz Sertifikası (COA)",
      phytosanitary: "Bitki sağlığı sertifikası",
      inspection: "Üçüncü taraf denetim",
    },
  },
  productBriefs: {},
  chatbot: {
    title: "Herbs Milanos Asistanı",
    status: "Çevrimiçi · dakikalar içinde yanıt verir",
    greeting:
      "Salam 👋 Ben Herbs Milanos asistanınızım. Aşağıdan bir konu seçin veya bir anahtar kelime yazın (ör. \"MOQ\", \"Chamomile\", \"sevkiyat\").",
    placeholder: "Anahtar kelime yazın…",
    send: "Gönder",
    categories: "Konuya göre göz at",
    questions: "Sorular",
    back: "Konulara dön",
    human: "WhatsApp'ta sohbet et",
    noResults:
      "Eşleşme bulunamadı. Başka bir anahtar kelime deneyin veya ihracat ekibimizle doğrudan WhatsApp üzerinden konuşmak için aşağıya dokunun.",
    matched: "Eşleşen yanıtlar",
    ariaOpen: "Sohbet asistanını aç",
    ariaClose: "Sohbet asistanını kapat",
    handoffTitle: "Sizi bir insan temsilciye bağlıyorum",
    handoffBody:
      "Sorunuza uygun bir yanıt bulamadım. Size doğrudan yardımcı olması için sizi WhatsApp'ta bir insan temsilciye bağlayacağım.",
    suggestedQuestions: "Önerilen sorular",
    typing: "yazıyor…",
  },
};

export { tr };

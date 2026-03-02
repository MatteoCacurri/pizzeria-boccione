// ─── Dati di contatto ───────────────────────────────────────────────────────
export const PHONE_DISPLAY = "06 4506821";
export const PHONE_HREF = "tel:+39064506821";
export const EMAIL = "pizzeria.boccione@gmail.com";
export const ADDRESS = "Via dei Monti Tiburtini 536 A/B, 00157 Roma";
export const ADDRESS_SHORT = "Via dei Monti Tiburtini 536";
export const CAP = "00157";
export const CITY = "Roma";

// Numero fittizio WhatsApp fino a conferma numero mobile del cliente
export const WHATSAPP_NUMBER = "393331234567";
export const WHATSAPP_MSG = encodeURIComponent("Ciao! Vorrei ordinare dalla Pizzeria Boccione. Potreste aiutarmi?");
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

// ─── Link esterni ────────────────────────────────────────────────────────────
export const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Via+dei+Monti+Tiburtini+536+Roma";
export const INSTAGRAM_URL = "https://www.instagram.com/pizzeria_boccione.89/";
export const MENU_DIGITAL_URL = "https://www.menudigitale.io/pizzeria-boccione";

// ─── Orari ───────────────────────────────────────────────────────────────────
export const HOURS_DISPLAY = "Tutti i giorni \u00b7 07:00 \u2013 00:00";
export const HOURS_TABLE = [
  { day: "Luned\u00ec", hours: "07:00 \u2013 00:00" },
  { day: "Marted\u00ec", hours: "07:00 \u2013 00:00" },
  { day: "Mercoled\u00ec", hours: "07:00 \u2013 00:00" },
  { day: "Gioved\u00ec", hours: "07:00 \u2013 00:00" },
  { day: "Venerd\u00ec", hours: "07:00 \u2013 00:00" },
  { day: "Sabato", hours: "07:00 \u2013 00:00" },
  { day: "Domenica", hours: "07:00 \u2013 00:00" },
];

// ─── Punti di forza ──────────────────────────────────────────────────────────
export const STRENGTHS = [
  { icon: "flame", title: "Tranci sempre caldi", desc: "Pizza sfornata continuamente durante tutta la giornata, dal mattino a mezzanotte." },
  { icon: "utensils", title: "Ampia scelta", desc: "Pizza al taglio, teglie speciali, fritti, panini e piatti di tavola calda ogni giorno." },
  { icon: "bike", title: "Asporto e delivery", desc: "Ordina su WhatsApp o telefona: consegniamo nelle zone Monti Tiburtini e Pietralata." },
  { icon: "map-pin", title: "A due passi da te", desc: "Siamo in Via dei Monti Tiburtini 536, cuore del quartiere, aperti 7 giorni su 7." },
];

// ─── Categorie menu ──────────────────────────────────────────────────────────
export const MENU_CATEGORIES = [
  { slug: "pizza-al-taglio", icon: "\ud83c\udf55", name: "Pizza al Taglio", desc: "Tranci classici e speciali, impasto leggero e croccante cotto nel forno a legna.", items: [
    { name: "Margherita", desc: "Pomodoro San Marzano, fior di latte, basilico", price: "3,50 \u20ac/etto" },
    { name: "Rossa", desc: "Pomodoro, olio EVO, origano \u2014 senza mozzarella", price: "2,80 \u20ac/etto" },
    { name: "Mortadella e Pistacchi", desc: "Fior di latte, mortadella IGP, granella di pistacchi", price: "4,20 \u20ac/etto" },
    { name: "Diavola", desc: "Pomodoro, fior di latte, salame piccante, peperoncino", price: "3,80 \u20ac/etto" },
    { name: "Funghi e Prosciutto", desc: "Fior di latte, champignon trifolati, prosciutto cotto", price: "3,80 \u20ac/etto" },
    { name: "Quattro Formaggi", desc: "Fior di latte, gorgonzola, scamorza affumicata, parmigiano", price: "4,00 \u20ac/etto" },
  ]},
  { slug: "teglie-speciali", icon: "\ud83d\udd25", name: "Teglie Speciali", desc: "Teglie in preparazione quotidiana con abbinamenti stagionali e ingredienti selezionati.", items: [
    { name: "Teglia Bufala e Pomodorini", desc: "Pomodorini datterini, mozzarella di bufala DOP, basilico fresco", price: "4,50 \u20ac/etto" },
    { name: "Teglia Patate e Rosmarino", desc: "Patate arrosto, rosmarino fresco, olio EVO", price: "3,20 \u20ac/etto" },
    { name: "Teglia Zucchine e Provola", desc: "Zucchine grigliate, provola affumicata, menta", price: "3,80 \u20ac/etto" },
    { name: "Teglia del Giorno", desc: "Preparazione a rotazione \u2014 chiedi al banco per le disponibilit\u00e0", price: "da 3,50 \u20ac/etto" },
  ]},
  { slug: "fritti", icon: "\ud83e\uddc6", name: "Fritti", desc: "Fritti artigianali preparati al momento: croccanti fuori, morbidi dentro.", items: [
    { name: "Suppl\u00ec al Telefono", desc: "Riso, rag\u00f9 romano, mozzarella filante \u2014 la classica ricetta romana", price: "1,80 \u20ac" },
    { name: "Fiori di Zucca Fritti", desc: "Pastella leggera, fiori di zucca, alici di Cetara e mozzarella", price: "2,00 \u20ac" },
    { name: "Crocchette di Patate", desc: "Pur\u00e8 di patate, prezzemolo, formaggio \u2014 dorate e croccanti", price: "1,50 \u20ac" },
    { name: "Baccal\u00e0 in Pastella", desc: "Filetto di baccal\u00e0 atlantico in pastella alla romana", price: "3,00 \u20ac" },
    { name: "Olive Ascolane", desc: "Olive tenere farcite con carne macinata e spezie", price: "2,00 \u20ac" },
  ]},
  { slug: "panini", icon: "\ud83e\udd56", name: "Panini e Tramezzini", desc: "Panini preparati con prodotti freschi, ideali per un pranzo veloce o uno spuntino.", items: [
    { name: "Panino con Porchetta", desc: "Porchetta di Ariccia IGP, pane casereccio, erbe aromatiche", price: "4,50 \u20ac" },
    { name: "Panino Prosciutto e Bufala", desc: "Prosciutto crudo DOP, mozzarella di bufala, pomodoro", price: "5,00 \u20ac" },
    { name: "Tramezzino Tonno e Olive", desc: "Tonno sott'olio, olive taggiasche, maionese, insalata", price: "3,00 \u20ac" },
    { name: "Panino Vegetariano", desc: "Verdure grigliate di stagione, formaggio fresco, pesto", price: "4,00 \u20ac" },
  ]},
  { slug: "tavola-calda", icon: "\ud83c\udf71", name: "Tavola Calda", desc: "Piatti pronti preparati ogni giorno: pasta, secondi e contorni della tradizione romana.", items: [
    { name: "Pasta al Pomodoro", desc: "Rigatoni con sugo di pomodoro fresco e basilico", price: "4,50 \u20ac" },
    { name: "Pollo alla Cacciatora", desc: "Pollo ruspante in umido con olive, pomodoro e rosmarino", price: "6,50 \u20ac" },
    { name: "Polpette al Sugo", desc: "Polpette di carne mista in sugo di pomodoro alla romana", price: "5,50 \u20ac" },
    { name: "Contorni di Stagione", desc: "Verdure di stagione cotte e crude, cambiano ogni settimana", price: "da 2,50 \u20ac" },
  ]},
  { slug: "bevande", icon: "\ud83e\udd64", name: "Bevande", desc: "Dalla colazione al dopo-cena: caff\u00e8, bibite, birre artigianali e acqua.", items: [
    { name: "Caff\u00e8 Espresso", desc: "Miscela artigianale tostata in Italia", price: "1,10 \u20ac" },
    { name: "Acqua naturale / frizzante", desc: "0.5L o 1L", price: "da 1,00 \u20ac" },
    { name: "Bibite in lattina", desc: "Coca-Cola, Fanta, Sprite, San Pellegrino", price: "1,50 \u20ac" },
    { name: "Birra artigianale", desc: "Selezione di birre italiane artigianali in bottiglia", price: "da 3,50 \u20ac" },
  ]},
];

// ─── Recensioni Google (placeholder realistiche) ─────────────────────────────
export const REVIEWS = [
  { name: "Marco T.", rating: 5, date: "2 settimane fa", text: "Pizza al taglio strepitosa! Sono anni che vengo qui e non mi ha mai deluso. I suppl\u00ec sono i migliori del quartiere, croccanti fuori e con la mozzarella che fila. Personale gentile e veloce. Super consigliato!", avatar: "M" },
  { name: "Alessia R.", rating: 5, date: "1 mese fa", text: "Finalmente una pizzeria seria a Monti Tiburtini. La teglia con bufala e pomodorini \u00e8 divina, impasto leggero e ben lievitato. Prezzo giusto, porzioni generose. Ci torno sicuramente.", avatar: "A" },
  { name: "Daniele F.", rating: 4, date: "3 settimane fa", text: "Ottimo posto per un pranzo veloce o una cena da asporto. La tavola calda \u00e8 sempre fresca e i panini con la porchetta sono una certezza. A volte c'\u00e8 un po' di coda ma ne vale la pena.", avatar: "D" },
];

// ─── Immagini gallery ────────────────────────────────────────────────────────
export const GALLERY_IMAGES = [
  { src: "/images/pizza-al-taglio-1.jpg", alt: "Pizza al taglio margherita banco Boccione Roma", caption: "Pizza al taglio fresca di forno" },
  { src: "/images/pizza-al-taglio-2.jpg", alt: "Tranci di pizza in teglia pizzeria Boccione Monti Tiburtini", caption: "Teglie speciali ogni giorno" },
  { src: "/images/pizza-teglia-3.jpg", alt: "Pizza in teglia artigianale bancone Boccione Roma", caption: "Impasto a lunga lievitazione" },
  { src: "/images/pizza-teglia-4.jpg", alt: "Variet\u00e0 pizza al taglio Monti Tiburtini Roma", caption: "Ampia scelta di gusti" },
  { src: "/images/fritti-5.jpg", alt: "Fritti artigianali pizzeria Monti Tiburtini Roma", caption: "Fritti croccanti fatti al momento" },
  { src: "/images/pizza-prodotti-6.jpg", alt: "Prodotti freschi pizzeria Boccione Roma", caption: "Ingredienti selezionati" },
  { src: "/images/pizza-teglia-7.jpg", alt: "Teglia pizza al taglio artigianale Boccione Pietralata", caption: "Teglie sfornate tutto il giorno" },
  { src: "/images/pizza-prodotti-8.jpg", alt: "Pizza al taglio banco Boccione via Monti Tiburtini", caption: "Dal 1989, la pizzeria del quartiere" },
];

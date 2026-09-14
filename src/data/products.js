// ============================================================================
// VAGARY PRODUCTS DATA
// ============================================================================

// ============================================================================
// PRICING
// ============================================================================

export const CURRENCY = "INR";
export const CURRENCY_SYMBOL = "₹";

export function formatPrice(price) {
  if (
    price === null ||
    price === undefined ||
    price === "" ||
    price === "Price on Request"
  ) {
    return "Price on Request";
  }

  const numericPrice = Number(price);

  if (Number.isNaN(numericPrice)) {
    return "Price on Request";
  }

  return `${CURRENCY_SYMBOL}${numericPrice.toLocaleString("en-IN")}`;
}

// ============================================================================
// COLLECTIONS
// ============================================================================

export const collections = [
  {
    id: "drinkware",
    title: "Drinkware",
    tagline: "Mugs · Cups · Glasses",
    image: "/images/collections/drinkware.jpg",
  },

  {
    id: "bottles",
    title: "Bottles",
    tagline: "Hydralife · Eco Spring · Motiva",
    image: "/images/collections/bottles.jpg",
  },

  {
    id: "gardenware",
    title: "Gardenware",
    tagline: "Pots · Planters · Accessories",
    image: "/images/collections/gardenware.jpg",
  },

  {
    id: "bags",
    title: "Bags",
    tagline: "Totes · Backpacks · Pouches",
    image: "/images/collections/bag.jpg",
  },
];

// ============================================================================
// MAIN PRODUCTS
// ============================================================================

export const products = [
  // ==========================================================================
  // BOTTLES
  // ==========================================================================

  {
    id: "hydralife-water-bottle",
    name: "Hydralife Water Bottle",
    category: "Bottles",
    categorySlug: "bottles",

    size: "400 ml",

    material: "Rice husk with a stainless steel interior",

    price: null,

    description:
      "A rice husk bottle with a stainless steel interior, built for everyday hydration on the move.",

    features: [
      "Leak-proof lid",
      "Carry loop",
      "Suitable for office, travel and daily hydration",
    ],

    images: [
      "/images/products/eco-spring-bottle-duo.jpg",
    ],
  },

  {
    id: "eco-spring-bottle",
    name: "Eco Spring Bottle",
    category: "Bottles",
    categorySlug: "bottles",

    size: "900 ml",

    material: "Rice husk biocomposite",

    price: null,

    description:
      "A lightweight, reusable rice husk bottle for daily use.",

    features: [
      "Leak-proof",
      "Lightweight",
      "Durable",
      "Reusable",
    ],

    images: [
      "/images/products/dual-bottles-green-orange.jpg",
    ],
  },

  {
    id: "motiva-water-bottle",
    name: "Motiva Water Bottle",
    category: "Bottles",
    categorySlug: "bottles",

    size: "400 ml",

    material: "Rice husk with a stainless steel inner",

    price: null,

    description:
      "A rice husk bottle with a stainless steel inner for temperature retention.",

    features: [
      "Leak-proof",
      "Carry loop",
      "Temperature retention",
    ],

    images: [
      "/images/products/eco-spring-bottle-single.jpg",
    ],
  },

  {
    id: "insulated-green-water-bottle",
    name: "Insulated Green Water Bottle",
    category: "Bottles",
    categorySlug: "bottles",

    size: "600 ml",

    material: "Rice husk build",

    price: null,

    description:
      "An insulated rice husk bottle with a wide carry handle.",

    features: [
      "Insulated",
      "Wide carry handle",
    ],

    images: [
      "/images/products/insulated-bottle-purple.jpg",
    ],
  },

  {
    id: "printed-bottle",
    name: "Printed Bottle",
    category: "Bottles",
    categorySlug: "bottles",

    size: "400 ml",

    material: "Rice husk",

    price: null,

    description:
      "A rice husk bottle finished with custom printing for personalised gifting.",

    features: [
      "Custom printing available",
      "Rice husk build",
    ],

    images: [
      "/images/products/positivity-mindset-bottle.jpg",
      "/images/products/kids-animal-print-bottle.jpg",
    ],
  },

  // ==========================================================================
  // DRINKWARE
  // ==========================================================================

  {
    id: "classic-mug",
    name: "Classic Mug",
    category: "Drinkware",
    categorySlug: "drinkware",

    size: "300 ml",

    material: "Rice husk and bamboo fibres",

    price: null,

    description:
      "A durable, microwave-safe mug for hot or cold beverages.",

    features: [
      "Microwave safe",
      "Hot & cold beverages",
      "Reusable",
      "Unbreakable",
    ],

    images: [
      "/images/products/grey-cups-steel-bowl-set.jpg",
    ],
  },

  {
    id: "statement-chai-cups",
    name: "Statement Chai Cups",
    category: "Drinkware",
    categorySlug: "drinkware",

    size: "120 ml · Set of 6",

    material: "Rice husk and bamboo",

    price: null,

    description:
      "A set of six small cups designed for serving chai and tea.",

    features: [
      "Set of 6",
      "Eco-friendly",
      "Reusable",
    ],

    images: [
      "/images/products/mug-bowl-gift-tray.jpg",
    ],
  },

  {
    id: "lassi-tumbler",
    name: "Lassi Tumbler",
    category: "Drinkware",
    categorySlug: "drinkware",

    size: "350 ml",

    material: "Rice husk",

    price: null,

    description:
      "A tall tumbler suited to hot and cold drinks.",

    features: [
      "Carry loop",
      "Reusable",
    ],

    images: [
      "/images/products/mint-tumbler-lifestyle.jpg",
    ],
  },
];

// ============================================================================
// DRINKWARE CATALOG
// ============================================================================

export const drinkwareCatalogOnly = [
  {
    name: "Java Coffee Mug",
    spec: "375 ml · Rice husk biocomposite",
  },

  {
    name: "Frosted Tumbler",
    spec: "250 ml",
  },

  {
    name: "Retro Cup",
    spec: "250 ml",
  },

  {
    name: "Java Dual Mug",
    spec: "375 ml · Set of 2",
  },

  {
    name: "Icon Mug",
    spec: "350 ml",
  },

  {
    name: "Comfy Cup",
    spec: "350 ml",
  },

  {
    name: "Kids Drinking Glass",
    spec: "350 ml",
  },

  {
    name: "Cutting Chai Cups",
    spec: "100 ml · Set of 6",
  },

  {
    name: "Eco Nova Drinking Glass",
    spec: "350 ml · Set of 4",
  },

  {
    name: "Statement Coffee Mug",
    spec: "350 ml · Set of 2",
  },

  {
    name: "Majestic Mug",
    spec: "375 ml · Set of 6",
  },

  {
    name: "Retro Coffee Mug with Lid",
    spec: "350 ml · Set of 2",
  },

  {
    name: "Rafter Coffee Mug with Lid",
    spec: "175 ml · Set of 2",
  },

  {
    name: "Wave Stainless Steel Insulated Coffee Mug",
    spec: "250 ml · Set of 4",
  },
];

export const drinkwareCatalog = drinkwareCatalogOnly;

// ============================================================================
// BOTTLES CATALOG
// ============================================================================

export const bottlesCatalogOnly = [
  {
    name: "Hydralife Water Bottle",
    spec: "400 ml",
  },

  {
    name: "Eco Spring Bottle",
    spec: "900 ml",
  },

  {
    name: "Motiva Water Bottle",
    spec: "400 ml",
  },

  {
    name: "Insulated Green Water Bottle",
    spec: "600 ml",
  },

  {
    name: "Printed Bottle",
    spec: "400 ml",
  },
];

export const bottlesCatalog = bottlesCatalogOnly;

// ============================================================================
// GARDENWARE CATALOG
// ============================================================================

export const gardenwareCatalogOnly = [
  {
    name: "Brindavan Tulsi Pot",
  },

  {
    name: "Tulsi Combo Set",
  },

  {
    name: "Opera Planter",
  },

  {
    name: "Elanza Pot",
  },

  {
    name: "Gallery Planter",
  },

  {
    name: "Premia Pot",
  },

  {
    name: "Bella Square Planter",
  },

  {
    name: "Printed Small Terrapod Planter",
  },

  {
    name: "Printed Regalia Planter",
  },

  {
    name: "Romano Planter",
  },

  {
    name: "Ecopod Planter",
  },
];

export const gardenwareCatalog = gardenwareCatalogOnly;

// ============================================================================
// BAGS CATALOG
// ============================================================================

export const bagsCatalogOnly = [
  {
    name: "Totes",
    spec: "Sustainable tote bags",
  },

  {
    name: "Backpacks",
    spec: "Sustainable backpacks",
  },

  {
    name: "Pouches",
    spec: "Sustainable pouches",
  },
];

export const bagsCatalog = bagsCatalogOnly;

// ============================================================================
// PRODUCT HELPERS
// ============================================================================

export function getProductById(id) {
  return products.find(
    (product) => product.id === id
  );
}

export function getProductsByCategory(slug) {
  return products.filter(
    (product) => product.categorySlug === slug
  );
}

// ============================================================================
// GIFTING
// ============================================================================

export const giftingCatalog = {
  hexaBox: [
    "Classic Mug + Eco Spring",
    "Hydralife 600ml + Java Mug + Retro Cup",
    "Java Mug + Motiva Bottle",
    "Java Mug + Dual Java Mug + Round Coaster",
  ],

  occasionSets: [
    "Rakshabandhan Gift Set",
    "Rakshabandhan Gift Hamper",
    "Rakshabandhan Gift for Sister",
    "Best Dad Coffee Mug",
    "Holi Gift Pack",
    "Valentine Gift Set",
    "Christmas Gift Set",
    "Inspiration Chess Set",
  ],
};

// ============================================================================
// INSPIRATION CHESS SET
// ============================================================================

export const inspirationChessSet = {
  id: "inspiration-chess-set",

  name: "Inspiration Chess Set",

  category: "Gifting",

  categorySlug: "gifting",

  price: null,

  description:
    "A wooden chess set with a folding board and two-tone carved pieces, presented as a gift-ready set.",

  features: [
    "Folding board",
    "Two-tone carved wooden pieces",
  ],

  images: [
    "/images/gifting/inspiration-chess-set.jpg",
    "/images/gifting/inspiration-chess-pieces.jpg",
  ],
};

// ============================================================================
// GIFTING IMAGES
// ============================================================================

export const giftingImages = {
  heroBox:
    "/images/gifting/hexa-gift-box.jpg",

  teaSetCloseup:
    "/images/gifting/festive-tea-set-closeup.jpg",

  teaSetCoasters:
    "/images/gifting/festive-tea-set-coasters.jpg",
};

// ============================================================================
// CUSTOM BRANDING
// ============================================================================

export const customBrandingImage =
  "/images/products/happiness-mood-bottle.jpg";

// ============================================================================
// SUSTAINABILITY
// ============================================================================

export const sustainabilityImage =
  "/images/products/pink-ribbed-planters.jpg";
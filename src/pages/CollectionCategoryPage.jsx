import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import {
  drinkwareCatalog,
  bottlesCatalog,
} from "../data/products";
import { formatPrice } from "../utils/formatPrice";
import { submitEnquiry } from "../utils/submitEnquiry";

import "../app.css";

// ============================================================
// HELPERS
// ============================================================

function slugify(value = "") {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function pad(number) {
  return String(number).padStart(2, "0");
}

function getExistingImage(product) {
  if (!product) return "";

  const possibleImages = [
    product.image,
    ...(Array.isArray(product.images) ? product.images : []),
  ].filter(Boolean);

  return possibleImages[0] || "";
}

// ============================================================
// BUILD PRODUCTS
// ============================================================

function buildProducts({
  key,
  category,
  names,
  prefix,
  material,
  description,
  images = [],
  imageSets = [],
}) {
  const fallbackImages = {
    cup: "/images/products/01-eco-fibre-ribbed-cup-set.jpg",
    bottle: "/images/products/eco-spring-bottle-duo.jpg",
    kitchen: "/images/products/bowls-with-spoons-set.jpg",
    tableware: "/images/products/18-slate-grey-table-cup-set.jpg",
    gardenware: "/images/products/mint-ribbed-planters.jpg",
    planter: "/images/products/pink-ribbed-planters.jpg",
    canvas: "/images/products/canvas-01.jpg",
    leather: "/images/products/leather-01.jpg",
    weaving: "/images/products/weaving-01.jpg",
    "cotton-canvas":
      "/images/products/cotton-canvas-01.jpg",
    polo: "/images/products/polo-01.jpg",
    wallet: "/images/products/wallet-01.jpg",
    "card-case":
      "/images/products/card-case-01.jpg",
    "corporate-gift":
      "/images/gifting/hexa-gift-box.jpg",
  };

  const fallbackImage =
    fallbackImages[prefix] ||
    "/images/products/eco-spring-bottle-duo.jpg";

  return names.slice(0, 10).map((name, index) => {
    const primaryImage =
      images[index] || fallbackImage;

    const alternateImages =
      Array.isArray(imageSets[index])
        ? imageSets[index].filter(Boolean)
        : [];

    const allImages = [
      primaryImage,
      ...alternateImages,
    ].filter(Boolean);

    return {
      id: `${key}-${index + 1}`,
      name,
      category,
      details: "Premium collection product",
      material,
      description,

      // Main image
      image: primaryImage,

      // Main + alternate images
      images: [...new Set(allImages)],
    };
  });
}

// ============================================================
// PRODUCT NAMES
// ============================================================

const CUP_NAMES = drinkwareCatalog.map(
  (item) => item.name
);

const BOTTLE_NAMES = bottlesCatalog.map(
  (item) => item.name
);

const KITCHEN_NAMES = [
  "Bamboo Kitchen Set",
  "Eco Serving Set",
  "Wooden Kitchen Spoon Set",
  "Natural Cutting Board",
  "Bamboo Storage Set",
  "Premium Kitchen Organizer",
  "Eco Dining Set",
  "Wooden Serving Tray",
  "Natural Kitchen Accessory",
  "Signature Kitchen Set",
];

const TABLEWARE_NAMES = [
  "Eco Dinner Plate",
  "Natural Serving Plate",
  "Premium Table Set",
  "Stoneware Plate Set",
  "Minimal Dining Bowl",
  "Eco Serving Bowl",
  "Corporate Dining Set",
  "Handcrafted Table Set",
  "Premium Snack Plate",
  "Signature Tableware Set",
];

const GARDENWARE_NAMES = [
  "Natural Garden Pot",
  "Eco Plant Holder",
  "Bamboo Garden Basket",
  "Handcrafted Planter Stand",
  "Natural Seed Box",
  "Garden Storage Basket",
  "Eco Garden Tray",
  "Wooden Plant Stand",
  "Natural Garden Organizer",
  "Signature Garden Set",
];

const PLANTER_NAMES = [
  "Classic Eco Planter",
  "Minimal Desk Planter",
  "Natural Bamboo Planter",
  "Premium Office Planter",
  "Round Garden Planter",
  "Indoor Eco Planter",
  "Handcrafted Planter",
  "Corporate Green Planter",
  "Decorative Natural Planter",
  "Signature VAGARY Planter",
];

const BAG_NAMES = [
  "Executive Everyday Bag",
  "Eco Corporate Tote",
  "Premium Office Bag",
  "Natural Lifestyle Bag",
  "Classic Carry Bag",
  "Sustainable Travel Bag",
  "Corporate Utility Bag",
  "Minimal Daily Bag",
  "Premium Gift Bag",
  "Signature VAGARY Bag",
];

// ============================================================
// LEATHER BAG NAMES
// ============================================================

const LEATHER_BAG_NAMES = [
  "Classic Leather Tote",
  "Executive Leather Bag",
  "Premium Leather Office Bag",
  "Leather Travel Tote",
  "Minimal Leather Carry Bag",
  "Leather Laptop Bag",
  "Leather Executive Sling",
  "Classic Leather Shopper",
  "Premium Leather Utility Bag",
  "Signature Leather Bag",
];

// ============================================================
// WEAVING
// ============================================================

const WEAVING_BAG_NAMES = [
  "Natural Woven Tote",
  "Handwoven Carry Bag",
  "Eco Woven Shopper",
  "Natural Weave Office Bag",
  "Woven Market Bag",
  "Handcrafted Woven Tote",
  "Premium Weave Bag",
  "Woven Lifestyle Bag",
  "Natural Utility Basket Bag",
  "Signature Woven Bag",
];

// ============================================================
// CANVAS
// ============================================================

const CANVAS_BAG_NAMES = [
  "Classic Canvas Tote",
  "Premium Canvas Shopper",
  "Canvas Office Bag",
  "Eco Canvas Carry Bag",
  "Canvas Travel Tote",
  "Minimal Canvas Bag",
  "Corporate Canvas Tote",
  "Canvas Utility Bag",
  "Natural Canvas Shopper",
  "Signature Canvas Bag",
];

// ============================================================
// COTTON CANVAS
// ============================================================

const COTTON_CANVAS_NAMES = [
  "Cotton Canvas Pouch",
  "Canvas Utility Pouch",
  "Cotton Travel Organizer",
  "Premium Canvas Case",
  "Canvas Document Pouch",
  "Cotton Storage Pouch",
  "Eco Accessory Case",
  "Canvas Tech Organizer",
  "Cotton Gift Pouch",
  "Signature Canvas Accessory",
];

// ============================================================
// POLO
// ============================================================

const POLO_NAMES = [
  "Classic Polo Belt",
  "Premium Polo Belt",
  "Executive Casual Belt",
  "Leather Polo Belt",
  "Classic Lifestyle Belt",
  "Corporate Polo Accessory",
  "Premium Everyday Belt",
  "Minimal Polo Belt",
  "Signature Lifestyle Belt",
  "VAGARY Premium Belt",
];

// ============================================================
// WALLET
// ============================================================

const WALLET_NAMES = [
  "Classic Leather Wallet",
  "Executive Leather Wallet",
  "Slim Card Wallet",
  "Premium Bifold Wallet",
  "Minimal Leather Wallet",
  "Classic Office Wallet",
  "Corporate Gift Wallet",
  "Travel Leather Wallet",
  "Premium Everyday Wallet",
  "Signature VAGARY Wallet",
];

// ============================================================
// CARD CASE
// ============================================================

const CARD_CASE_NAMES = [
  "Classic Card Case",
  "Premium Leather Card Case",
  "Slim Business Card Case",
  "Executive Card Holder",
  "Minimal Card Wallet",
  "Corporate Card Case",
  "Leather ID Card Case",
  "Premium Office Card Holder",
  "Classic Business Card Holder",
  "Signature Card Case",
];

// ============================================================
// CORPORATE GIFTPACK
// ============================================================

const CORPORATE_GIFT_NAMES = [
  "Executive Gift Set",
  "Premium Corporate Gift Box",
  "Eco Welcome Kit",
  "Employee Gift Kit",
  "Client Appreciation Set",
  "Corporate Wellness Kit",
  "Sustainable Office Kit",
  "Executive Travel Gift Set",
  "Premium Business Gift Box",
  "Signature VAGARY Gift Set",
];
// ============================================================
// PLANTERS — 10 IMAGES
// ============================================================

const PLANTER_IMAGES = [
  "/images/products/classic-eco-planter.jpg",
  "/images/products/minimal-desk-planter.jpg",
  "/images/products/natural-bamboo-planter.jpg",
  "/images/products/premium-office-planter.jpg",
  "/images/products/round-garden-planter.jpg",
  "/images/products/indoor-eco-planter.jpg",
  "/images/products/handcrafted-planter.jpg",
  "/images/products/corporate-green-planter.jpg",
  "/images/products/decorative-natural-planter.jpg",
  "/images/products/signature-vagary-planter.jpg",
];

// ============================================================
// KITCHEN — 10 IMAGES
// ============================================================

const KITCHEN_IMAGES = [
  "/images/products/bamboo-kitchen-set.jpg",
  "/images/products/eco-serving-set.jpg",
  "/images/products/wooden-kitchen-spoon-set.jpg",
  "/images/products/natural-cutting-board.jpg",
  "/images/products/bamboo-storage-set.jpg",
  "/images/products/premium-kitchen-organizer.jpg",
  "/images/products/eco-dining-set.jpg",
  "/images/products/wooden-serving-tray.jpg",
  "/images/products/natural-kitchen-accessory.jpg",
  "/images/products/signature-kitchen-set.jpg",
];

// ============================================================
// CORPORATE GIFTPACK — 10 IMAGES
// ============================================================

const CORPORATE_GIFT_IMAGES = [
  "/images/products/premium-corporate-gift-box.jpg",
  "/images/products/eco-welcome-kit.jpg",
  "/images/products/employee-gift-kit.jpg",
  "/images/products/client-appreciation-set.jpg",
  "/images/products/corporate-wellness-kit.jpg",
  "/images/products/sustainable-office-kit.jpg",
  "/images/products/executive-travel-gift-set.jpg",
  "/images/products/premium-business-gift-box.jpg",
  "/images/products/signature-vagary-gift-set.jpg",
  "/images/products/executive-gift-set.jpg",
];
// ============================================================
// EXISTING PRODUCT IMAGES
// ============================================================

const BOTTLE_IMAGES = [
  "/images/products/eco-spring-bottle-duo.jpg",
  "/images/products/dual-bottles-green-orange.jpg",
  "/images/products/eco-spring-bottle-single.jpg",
  "/images/products/insulated-bottle-purple.jpg",
  "/images/products/positivity-mindset-bottle.jpg",
  "/images/products/kids-animal-print-bottle.jpg",
  "/images/products/happiness-mood-bottle.jpg",
  "/images/products/eco-spring-bottle-duo.jpg",
  "/images/products/dual-bottles-green-orange.jpg",
  "/images/products/eco-spring-bottle-single.jpg",
];

const CUP_IMAGES = [
  "/images/products/01-eco-fibre-ribbed-cup-set.jpg",
  "/images/products/04-pastel-ribbed-cup-collection.jpg",
  "/images/products/05-classic-two-tone-ceramic-mug.jpg",
  "/images/products/06-blush-ribbed-travel-cup.jpg",
  "/images/products/07-burgundy-ribbed-travel-cup.jpg",
  "/images/products/10-signature-green-fibre-cup-set.jpg",
  "/images/products/12-pastel-eco-mug-collection.jpg",
  "/images/products/13-forest-green-mug-set.jpg",
  "/images/products/17-blush-mandala-fibre-cup-set.jpg",
  "/images/products/18-slate-grey-table-cup-set.jpg",
];

const TABLEWARE_IMAGES = [
  "/images/products/18-slate-grey-table-cup-set.jpg",
  "/images/products/bowls-with-spoons-set.jpg",
  "/images/products/20-burgundy-festive-coaster-set.jpg",
  "/images/products/19-forest-green-festive-coaster-set.jpg",
  "/images/products/festive-tea-set-coasters.jpg",
  "/images/products/festive-tea-set-closeup.jpg",
  "/images/products/15-heritage-colour-cup-set.jpg",
  "/images/products/14-frost-ribbed-cup-set.jpg",
  "/images/products/18-slate-grey-table-cup-set.jpg",
  "/images/products/bowls-with-spoons-set.jpg",
];

const GARDENWARE_IMAGES = [
  "/images/products/pink-ribbed-planters.jpg",
  "/images/products/mint-ribbed-planters.jpg",
  "/images/products/pink-ribbed-planters.jpg",
  "/images/products/mint-ribbed-planters.jpg",
  "/images/products/pink-ribbed-planters.jpg",
  "/images/products/mint-ribbed-planters.jpg",
  "/images/products/pink-ribbed-planters.jpg",
  "/images/products/mint-ribbed-planters.jpg",
  "/images/products/pink-ribbed-planters.jpg",
  "/images/products/mint-ribbed-planters.jpg",
];

// ============================================================
// LEATHER BAG IMAGES
// 10 PRODUCTS
// ============================================================

const LEATHER_BAG_IMAGES = [
  "/images/products/classic-leather-tote.jpg",
  "/images/products/executive-leather-bag.jpg",
  "/images/products/premium-leather-office-bag.jpg",
  "/images/products/leather-travel-tote.jpg",
  "/images/products/minimal-leather-carry-bag.jpg",
  "/images/products/leather-laptop-bag.jpg",
  "/images/products/leather-executive-sling.jpg",
  "/images/products/classic-leather-shopper.jpg",
  "/images/products/premium-leather-utility-bag.jpg",
  "/images/products/signature-leather-bag.jpg",
];

// ============================================================
// WEAVING BAG IMAGES
// ============================================================

const WEAVING_BAG_IMAGES = [
  "/images/products/natural-woven-tote.jpg",
  "/images/products/handwoven-carry-bag.jpg",
  "/images/products/eco-woven-shopper.jpg",
  "/images/products/natural-weave-office-bag.jpg",
  "/images/products/woven-market-bag.jpg",
  "/images/products/handcrafted-woven-tote.jpg",
  "/images/products/premium-weave-bag.jpg",
  "/images/products/woven-lifestyle-bag.jpg",
  "/images/products/natural-utility-basket-bag.jpg",
  "/images/products/signature-woven-bag.jpg",
];

// ============================================================
// CANVAS BAG MAIN IMAGES
// 1-10
// ============================================================

const CANVAS_BAG_IMAGES = [
  "/images/products/classic-canvas-tote.jpg",
  "/images/products/premium-canvas-shopper.jpg",
  "/images/products/canvas-office-bag.jpg",
  "/images/products/eco-canvas-carry-bag.jpg",
  "/images/products/canvas-travel-tote.jpg",
  "/images/products/minimal-canvas-bag.jpg",
  "/images/products/corporate-canvas-tote.jpg",
  "/images/products/canvas-utility-bag.jpg",
  "/images/products/natural-canvas-shopper.jpg",
  "/images/products/signature-canvas-bag.jpg",
];

// ============================================================
// CANVAS ALTERNATE IMAGES
// 11-20
// These are paired with products 1-10
// ============================================================

const CANVAS_BAG_ALT_IMAGES = [
  "/images/products/canvas/classic-canvas-tote-alt.jpg",
  "/images/products/canvas/premium-canvas-shopper-alt.jpg",
  "/images/products/canvas/canvas-office-bag-alt.jpg",
  "/images/products/canvas/eco-canvas-carry-bag-alt.jpg",
  "/images/products/canvas/canvas-travel-tote-alt.jpg",
  "/images/products/canvas/minimal-canvas-bag-alt.jpg",
  "/images/products/canvas/corporate-canvas-tote-alt.jpg",
  "/images/products/canvas/canvas-utility-bag-alt.jpg",
  "/images/products/canvas/natural-canvas-shopper-alt.jpg",
  "/images/products/canvas/signature-canvas-bag-alt.jpg",
];

// ============================================================
// CANVAS IMAGE SETS
// Each product gets:
// Main image + alternate image
// ============================================================

const CANVAS_BAG_IMAGE_SETS =
  CANVAS_BAG_IMAGES.map((image, index) => [
    image,
    CANVAS_BAG_ALT_IMAGES[index],
  ]);

// ============================================================
// COTTON CANVAS
// ============================================================

const COTTON_CANVAS_IMAGES = [
  "/images/products/cotton-canvas-pouch.jpg",
  "/images/products/canvas-utility-pouch.jpg",
  "/images/products/cotton-travel-organizer.jpg",
  "/images/products/premium-canvas-case.jpg",
  "/images/products/canvas-document-pouch.jpg",
  "/images/products/cotton-storage-pouch.jpg",
  "/images/products/eco-accessory-case.jpg",
  "/images/products/canvas-tech-organizer.jpg",
  "/images/products/cotton-gift-pouch.jpg",
  "/images/products/signature-canvas-accessory.jpg",
];

// ============================================================
// POLO
// ============================================================

const POLO_IMAGES = [
  "/images/products/classic-polo-belt.jpg",
  "/images/products/premium-polo-belt.jpg",
  "/images/products/executive-casual-belt.jpg",
  "/images/products/leather-polo-belt.jpg",
  "/images/products/classic-lifestyle-belt.jpg",
  "/images/products/corporate-polo-accessory.jpg",
  "/images/products/premium-everyday-belt.jpg",
  "/images/products/minimal-polo-belt.jpg",
  "/images/products/signature-lifestyle-belt.jpg",
  "/images/products/vagary-premium-belt.jpg",
];

// ============================================================
// WALLET
// ============================================================

const WALLET_IMAGES = [
  "/images/products/classic-leather-wallet.jpg",
  "/images/products/executive-leather-wallet.jpg",
  "/images/products/slim-card-wallet.jpg",
  "/images/products/premium-bifold-wallet.jpg",
  "/images/products/minimal-leather-wallet.jpg",
  "/images/products/classic-office-wallet.jpg",
  "/images/products/corporate-gift-wallet.jpg",
  "/images/products/travel-leather-wallet.jpg",
  "/images/products/premium-everyday-wallet.jpg",
  "/images/products/signature-vagary-wallet.jpg",
];

// ============================================================
// CARD CASE
// ============================================================

const CARD_CASE_IMAGES = [
  "/images/products/classic-card-case.jpg",
  "/images/products/premium-leather-card-case.jpg",
  "/images/products/slim-business-card-case.jpg",
  "/images/products/executive-card-holder.jpg",
  "/images/products/minimal-card-wallet.jpg",
  "/images/products/corporate-card-case.jpg",
  "/images/products/leather-id-card-case.jpg",
  "/images/products/premium-office-card-holder.jpg",
  "/images/products/classic-business-card-holder.jpg",
  "/images/products/signature-card-case.jpg",
];

// ============================================================
// CATEGORY DATA
// ============================================================

const CATEGORY_DATA = {
  // ==========================================================
  // DRINKWARE
  // ==========================================================

  drinkware: {
    title: "Drinkware",
    eyebrow: "Sustainable Products",
    description:
      "Cups, mugs and bottles designed for considered everyday rituals.",

    products: [
      ...buildProducts({
        key: "drinkware-cups",
        category: "Drinkware",
        names: CUP_NAMES,
        prefix: "cup",
        material:
          "Ceramic / sustainable materials",
        description:
          "Elegant drinkware for everyday use and gifting.",
        images: CUP_IMAGES,
      }),

      ...buildProducts({
        key: "drinkware-bottles",
        category: "Drinkware",
        names: BOTTLE_NAMES,
        prefix: "bottle",
        material:
          "Stainless steel / reusable materials",
        description:
          "Durable reusable bottles for everyday hydration and gifting.",
        images: BOTTLE_IMAGES,
      }),
    ],
  },

  // ==========================================================
  // CUPS
  // ==========================================================

  cups: {
    title: "Cups",
    eyebrow: "Drinkware",
    description:
      "Designed cups and mugs for everyday office, hospitality and corporate gifting.",

    products: buildProducts({
      key: "cups",
      category: "Cups",
      names: CUP_NAMES,
      prefix: "cup",
      material:
        "Ceramic / sustainable materials",
      description:
        "Elegant everyday drinkware designed for premium corporate and lifestyle use.",
      images: CUP_IMAGES,
    }),
  },

  // ==========================================================
  // BOTTLES
  // ==========================================================

  bottles: {
    title: "Bottles",
    eyebrow: "Drinkware",
    description:
      "Premium reusable bottles designed for modern workplaces, travel and corporate gifting.",

    products: buildProducts({
      key: "bottles",
      category: "Bottles",
      names: BOTTLE_NAMES,
      prefix: "bottle",
      material:
        "Stainless steel / reusable materials",
      description:
        "Durable reusable bottles designed for everyday hydration and gifting.",
      images: BOTTLE_IMAGES,
    }),
  },

  // ==========================================================
  // KITCHEN ITEMS
  // ==========================================================

  "kitchen-items": {
  title: "Kitchen Items",
  eyebrow: "Kitchen",
  description:
    "Functional kitchen essentials created with a refined sustainable aesthetic.",

  products: buildProducts({
    key: "kitchen-items",
    category: "Kitchen Items",
    names: KITCHEN_NAMES,
    prefix: "kitchen",
    material: "Bamboo / wood / sustainable materials",
    description:
      "Functional kitchen accessories designed for conscious everyday living.",
    images: KITCHEN_IMAGES,
  }),
},
  // ==========================================================
  // TABLEWARE
  // ==========================================================

  tableware: {
    title: "Tableware",
    eyebrow: "Kitchen & Dining",
    description:
      "Elegant tableware pieces for offices, homes, hospitality and gifting.",

    products: buildProducts({
      key: "tableware",
      category: "Tableware",
      names: TABLEWARE_NAMES,
      prefix: "tableware",
      material:
        "Ceramic / stoneware / sustainable materials",
      description:
        "Premium tableware designed for understated everyday dining.",
      images: TABLEWARE_IMAGES,
    }),
  },

  // ==========================================================
  // GARDENWARE
  // ==========================================================

  gardenware: {
    title: "Gardenware",
    eyebrow: "Garden & Green Living",
    description:
      "Natural garden accessories designed to bring sustainable living closer to everyday life.",

    products: buildProducts({
      key: "gardenware",
      category: "Gardenware",
      names: GARDENWARE_NAMES,
      prefix: "gardenware",
      material:
        "Natural wood / bamboo / sustainable materials",
      description:
        "Natural garden accessories created for conscious homes, offices and gifting.",
      images: GARDENWARE_IMAGES,
    }),
  },

  // ==========================================================
  // PLANTERS
  // ==========================================================

  planters: {
  title: "Planters",
  eyebrow: "Garden & Green Living",
  description:
    "Minimal planters for workspaces, homes, hospitality and corporate gifting.",

  products: buildProducts({
    key: "planters",
    category: "Planters",
    names: PLANTER_NAMES,
    prefix: "planter",
    material: "Natural / recycled / sustainable materials",
    description:
      "Minimal planter designed to add a natural touch to modern spaces.",
    images: PLANTER_IMAGES,
  }),
},
  // ==========================================================
  // BAGS
  // ==========================================================

  bags: {
    title: "Bags",
    eyebrow: "Bags & Accessories",
    description:
      "A versatile collection of premium, sustainable and lifestyle-focused bags.",

    products: buildProducts({
      key: "bags",
      category: "Bags",
      names: BAG_NAMES,
      prefix: "canvas",
      material:
        "Canvas / leather / woven materials",
      description:
        "Versatile everyday bags designed for modern corporate and lifestyle use.",

      images: [
        "/images/products/canvas-01.jpg",
        "/images/products/weaving-01.jpg",
        "/images/products/leather-01.jpg",
        "/images/products/canvas-02.jpg",
        "/images/products/weaving-02.jpg",
        "/images/products/leather-02.jpg",
        "/images/products/canvas-03.jpg",
        "/images/products/weaving-03.jpg",
        "/images/products/leather-03.jpg",
        "/images/products/canvas-04.jpg",
      ],
    }),
  },

  // ==========================================================
  // LEATHER BAGS
  // ==========================================================

  "leather-bags": {
    title: "Leather Bags",
    
   

    products: buildProducts({
      key: "leather-bags",
      category: "Leather Bags",
      names: LEATHER_BAG_NAMES,
      prefix: "leather",
      material: "Premium leather",
      description:
        "Refined leather bags designed for premium professional and corporate use.",
      images: LEATHER_BAG_IMAGES,
    }),
  },

  // ==========================================================
  // WEAVING BAGS
  // ==========================================================

  "weaving-bags": {
    title: "Weaving Bags",
    eyebrow: "Bags",
    description:
      "Handcrafted woven bags inspired by natural materials and traditional craftsmanship.",

    products: buildProducts({
      key: "weaving-bags",
      category: "Weaving Bags",
      names: WEAVING_BAG_NAMES,
      prefix: "weaving",
      material: "Natural woven material",
      description:
        "Handcrafted woven bags combining natural texture with contemporary utility.",
      images: WEAVING_BAG_IMAGES,
    }),
  },

  // ==========================================================
  // CANVAS BAGS
  // ==========================================================

  "canvas-bags": {
    title: "Canvas Bags",
    eyebrow: "Bags",
    description:
      "Durable canvas bags for everyday work, travel and sustainable gifting.",

    products: buildProducts({
      key: "canvas-bags",
      category: "Canvas Bags",
      names: CANVAS_BAG_NAMES,
      prefix: "canvas",
      material: "Premium canvas",
      description:
        "Durable canvas bags designed for practical everyday and corporate use.",

      // Main images 1-10
      images: CANVAS_BAG_IMAGES,

      // Alternate images 11-20
      imageSets: CANVAS_BAG_IMAGE_SETS,
    }),
  },

  // ==========================================================
  // COTTON CANVAS ACCESSORIES
  // ==========================================================

  "cotton-canvas-accessories": {
    title: "Cotton Canvas Accessories",
    eyebrow: "Bags & Accessories",
    description:
      "Practical cotton canvas accessories for travel, workspaces and gifting.",

    products: buildProducts({
      key: "cotton-canvas-accessories",
      category: "Cotton Canvas Accessories",
      names: COTTON_CANVAS_NAMES,
      prefix: "cotton-canvas",
      material: "Premium cotton canvas",
      description:
        "Reusable cotton canvas accessories designed for everyday organization.",
      images: COTTON_CANVAS_IMAGES,
    }),
  },

  // ==========================================================
  // POLO BELTS
  // ==========================================================

  "polo-belts-accessories": {
    title: "Polo Belts & Accessories",
    eyebrow: "Lifestyle Accessories",
    description:
      "Refined lifestyle accessories designed for premium corporate and personal gifting.",

    products: buildProducts({
      key: "polo-belts-accessories",
      category: "Polo Belts & Accessories",
      names: POLO_NAMES,
      prefix: "polo",
      material:
        "Premium lifestyle materials",
      description:
        "Premium lifestyle accessories designed for everyday professional use.",
      images: POLO_IMAGES,
    }),
  },

  // ==========================================================
  // WALLETS
  // ==========================================================

  wallet: {
    title: "Wallets",
    eyebrow: "Leather Accessories",
    description:
      "Classic and contemporary wallets designed for professional and premium gifting.",

    products: buildProducts({
      key: "wallet",
      category: "Wallets",
      names: WALLET_NAMES,
      prefix: "wallet",
      material: "Premium leather material",
      description:
        "Premium wallets designed for elegant everyday organization.",
      images: WALLET_IMAGES,
    }),
  },

  // ==========================================================
  // CARD CASE
  // ==========================================================

  "card-case": {
    title: "Card Cases",
    eyebrow: "Leather Accessories",
    description:
      "Minimal card cases and holders for business, office and premium gifting.",

    products: buildProducts({
      key: "card-case",
      category: "Card Cases",
      names: CARD_CASE_NAMES,
      prefix: "card-case",
      material: "Premium leather material",
      description:
        "Slim card holders designed for modern professional use.",
      images: CARD_CASE_IMAGES,
    }),
  },

  // ==========================================================
  // CORPORATE GIFTPACK
  // ==========================================================

  "corporate-giftpack": {

  title: "Corporate Giftpack",
  eyebrow: "Corporate Gifting",
  description:
    "Curated corporate gifting solutions designed for employees, clients and business occasions.",

  products: buildProducts({
    key: "corporate-giftpack",
    category: "Corporate Giftpack",
    names: CORPORATE_GIFT_NAMES,
    prefix: "corporate-gift",
    material: "Premium sustainable materials",
    description:
      "Curated gifting collections designed for premium corporate occasions.",
    images: CORPORATE_GIFT_IMAGES,
  }),
},
    
  }


// ============================================================
// PRODUCT CARD
// ============================================================

function ProductCard({
  product,
  onAddItem,
}) {
  const image = getExistingImage(product);

  return (
    <article className="category-product-card">
      {/* IMAGE */}
      <div className="category-product-image">
        {image ? (
          <img
            src={image}
            alt={
              product.name ||
              "VAGARY product"
            }
            loading="lazy"
            decoding="async"
            onError={(event) => {
              event.currentTarget.style.display =
                "none";

              const fallback =
                event.currentTarget.parentElement?.querySelector(
                  ".product-image-fallback"
                );

              if (fallback) {
                fallback.style.display =
                  "flex";
              }
            }}
          />
        ) : null}

        <div
          className="product-image-fallback"
          style={{
            display: image
              ? "none"
              : "flex",
          }}
          aria-hidden="true"
        >
          <span>VAGARY</span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="category-product-content">
        <div className="category-product-top">
          <span className="category-product-category">
            {product.category ||
              "Collection"}
          </span>
        </div>

        <h3>{product.name}</h3>

        {product.details && (
          <p className="product-details">
            {product.details}
          </p>
        )}

        {product.material && (
          <p className="product-material">
            <strong>
              Material:
            </strong>{" "}
            {product.material}
          </p>
        )}

        {product.description && (
          <p className="product-description">
            {product.description}
          </p>
        )}

        {/* BOTTOM */}
        <div className="category-product-bottom">
          <span className="product-price">
            {product.price == null
              ? "Price on Request"
              : formatPrice(
                  product.price
                )}
          </span>

          <button
            type="button"
            className="category-product-enquire"
            onClick={() =>
              onAddItem(product)
            }
          >
            ADD ITEM
          </button>
        </div>
      </div>
    </article>
  );
}

// ============================================================
// ENQUIRY DRAWER
// ============================================================

function EnquiryDrawer({
  open,
  items,
  onClose,
  onRemove,
  onQuantityChange,
  onEnquire,
}) {
  if (!open) {
    return null;
  }

  const totalQuantity =
    items.reduce(
      (total, item) =>
        total + item.quantity,
      0
    );

  return (
    <div
      className="enquiry-drawer-overlay"
      onMouseDown={(event) => {
        if (
          event.target ===
          event.currentTarget
        ) {
          onClose();
        }
      }}
    >
      <aside
        className="enquiry-drawer"
        aria-label="Selected products enquiry drawer"
      >
        {/* HEADER */}
        <div className="enquiry-drawer-header">
          <div>
            <span className="enquiry-drawer-eyebrow">
              YOUR SELECTION
            </span>

            <h2>
              Enquiry List
            </h2>
          </div>

          <button
            type="button"
            className="enquiry-drawer-close"
            onClick={onClose}
            aria-label="Close enquiry drawer"
          >
            ×
          </button>
        </div>

        {/* BODY */}
        <div className="enquiry-drawer-body">
          {items.length === 0 ? (
            <div className="enquiry-empty">
              <div className="enquiry-empty-icon">
                +
              </div>

              <h3>
                No products selected
              </h3>

              <p>
                Add products from the
                collection to create
                your enquiry list.
              </p>
            </div>
          ) : (
            <div className="enquiry-selected-items">
              {items.map((item) => {
                const image =
                  getExistingImage(
                    item.product
                  );

                return (
                  <div
                    className="enquiry-selected-item"
                    key={
                      item.product.id
                    }
                  >
                    {/* IMAGE */}
                    <div className="enquiry-selected-image">
                      {image ? (
                        <img
                          src={image}
                          alt={
                            item.product.name
                          }
                        />
                      ) : (
                        <span>
                          V
                        </span>
                      )}
                    </div>

                    {/* CONTENT */}
                    <div className="enquiry-selected-content">
                      <span className="enquiry-selected-category">
                        {
                          item.product
                            .category
                        }
                      </span>

                      <h4>
                        {
                          item.product
                            .name
                        }
                      </h4>

                      {/* QUANTITY */}
                      <div className="enquiry-quantity">
                        <div className="quantity-control">
                          <button
                            type="button"
                            onClick={() =>
                              onQuantityChange(
                                item
                                  .product
                                  .id,
                                item.quantity -
                                  1
                              )
                            }
                            disabled={
                              item.quantity <=
                              1
                            }
                            aria-label="Decrease quantity"
                          >
                            −
                          </button>

                          <span>
                            {
                              item.quantity
                            }
                          </span>

                          <button
                            type="button"
                            onClick={() =>
                              onQuantityChange(
                                item
                                  .product
                                  .id,
                                item.quantity +
                                  1
                              )
                            }
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>

                        <button
                          type="button"
                          className="enquiry-remove-item"
                          onClick={() =>
                            onRemove(
                              item
                                .product
                                .id
                            )
                          }
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* FOOTER */}
        <div className="enquiry-drawer-footer">
          <div className="enquiry-item-count">
            <span>
              Selected Items
            </span>

            <strong>
              {totalQuantity}
            </strong>
          </div>

          <button
            type="button"
            className="enquiry-drawer-button"
            disabled={
              items.length === 0
            }
            onClick={onEnquire}
          >
            ENQUIRE NOW
          </button>
        </div>
      </aside>
    </div>
  );
}

// ============================================================
// ENQUIRY FORM
// ============================================================

function EnquiryForm({
  items,
  categoryTitle,
  onBack,
}) {
  const [name, setName] =
    useState("");

  const [company, setCompany] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [product, setProduct] =
    useState(
      categoryTitle || ""
    );

  const [quantity, setQuantity] =
    useState("1");

  const [message, setMessage] =
    useState("");

  const [submitted, setSubmitted] =
    useState(false);

  const [submitting, setSubmitting] =
    useState(false);

  const [
    submissionError,
    setSubmissionError,
  ] = useState("");

  // ----------------------------------------------------------
  // SUBMIT
  // ----------------------------------------------------------

  const handleSubmit = async (
    event
  ) => {
    event.preventDefault();

    setSubmissionError("");

    if (
      !event.currentTarget.checkValidity()
    ) {
      return;
    }

    setSubmitting(true);

    const selectedProducts =
      items.length > 0
        ? items
            .map(
              (item) =>
                `• ${item.product.name} — Quantity: ${item.quantity}`
            )
            .join("\n")
        : `• General enquiry regarding ${categoryTitle}`;

    try {
      await submitEnquiry({
        subject:
          "New VAGARY Product Enquiry",

        submittedAt:
          new Date().toISOString(),

        customer: {
          name,
          company,
          email,
          phone,
        },

        enquiry: {
          product,
          collection:
            categoryTitle,
          quantity:
            Number(quantity),
          message,
        },

        selectedCartItems:
          selectedProducts,
      });

      setSubmitting(false);
      setSubmitted(true);
    } catch {
      setSubmitting(false);

      setSubmissionError(
        "Something went wrong. Please try again or contact us directly at info@vagaryonline.com."
      );
    }
  };

  // ----------------------------------------------------------
  // SUCCESS
  // ----------------------------------------------------------

  if (submitted) {
    return (
      <section className="collection-enquiry-form-section">
        <div className="collection-enquiry-form-container">
          <div className="enquiry-success">
            <div className="enquiry-success-icon">
              ✓
            </div>

            <span className="enquiry-drawer-eyebrow">
              ENQUIRY SENT
            </span>

            <h1>
              Thank you for your enquiry.
            </h1>

            <p>
              Your enquiry has been
              submitted successfully.
              The VAGARY team will get
              back to you shortly.
            </p>

            <button
              type="button"
              className="enquiry-form-back"
              onClick={onBack}
            >
              Back to Collection
            </button>
          </div>
        </div>
      </section>
    );
  }

  // ----------------------------------------------------------
  // FORM
  // ----------------------------------------------------------

  return (
    <section className="collection-enquiry-form-section">
      <div className="collection-enquiry-form-container">
        {/* LEFT */}
        <div className="collection-enquiry-form-intro">
          <span className="enquiry-drawer-eyebrow">
            VAGARY ENQUIRY
          </span>

          <h1>
            Let&apos;s discuss your
            requirement.
          </h1>

          <p>
            Tell us what you are
            looking for and our team
            will get back to you.
          </p>

          {/* SELECTED PRODUCTS */}
          {items.length > 0 && (
            <div className="enquiry-form-selection">
              <h3>
                Selected Products
              </h3>

              {items.map((item) => (
                <div
                  className="enquiry-form-selection-item"
                  key={
                    item.product.id
                  }
                >
                  <span>
                    {
                      item.product
                        .name
                    }
                  </span>

                  <strong>
                    × {item.quantity}
                  </strong>
                </div>
              ))}
            </div>
          )}

          {/* EMAIL */}
          <p className="enquiry-direct-email">
            Enquiries:{" "}
            <a href="mailto:info@vagaryonline.com">
              info@vagaryonline.com
            </a>
          </p>
        </div>

        {/* RIGHT */}
        <div className="collection-enquiry-form-card">
          <form
            className="vagary-enquiry-form"
            onSubmit={handleSubmit}
          >
            {submissionError && (
              <p
                className="contact-form-error"
                role="alert"
              >
                {submissionError}
              </p>
            )}

            {/* NAME */}
            <div className="form-field">
              <label htmlFor="enquiry-name">
                Name
              </label>

              <input
                id="enquiry-name"
                type="text"
                value={name}
                onChange={(event) =>
                  setName(
                    event.target.value
                  )
                }
                placeholder="Your full name"
                required
              />
            </div>

            {/* EMAIL */}
            <div className="form-field">
              <label htmlFor="enquiry-email">
                Email
              </label>

              <input
                id="enquiry-email"
                type="email"
                value={email}
                onChange={(event) =>
                  setEmail(
                    event.target.value
                  )
                }
                placeholder="you@example.com"
                required
              />
            </div>

            {/* COMPANY */}
            <div className="form-field">
              <label htmlFor="enquiry-company">
                Company Name
              </label>

              <input
                id="enquiry-company"
                type="text"
                value={company}
                onChange={(event) =>
                  setCompany(
                    event.target.value
                  )
                }
                placeholder="Company name"
                required
              />
            </div>

            {/* PHONE */}
            <div className="form-field">
              <label htmlFor="enquiry-phone">
                Contact Number
              </label>

              <input
                id="enquiry-phone"
                type="tel"
                value={phone}
                onChange={(event) =>
                  setPhone(
                    event.target.value
                  )
                }
                placeholder="Enter your contact number"
                pattern="[+]?[0-9 ()-]{10,15}"
                required
              />
            </div>

            {/* PRODUCT */}
            <div className="form-field">
              <label htmlFor="enquiry-product">
                Product / Collection
              </label>

              <input
                id="enquiry-product"
                type="text"
                value={product}
                onChange={(event) =>
                  setProduct(
                    event.target.value
                  )
                }
                required
              />
            </div>

            {/* QUANTITY */}
            <div className="form-field">
              <label htmlFor="enquiry-quantity">
                Quantity
              </label>

              <input
                id="enquiry-quantity"
                type="number"
                min="1"
                step="1"
                value={quantity}
                onChange={(event) =>
                  setQuantity(
                    event.target.value
                  )
                }
                required
              />
            </div>

            {/* MESSAGE */}
            <div className="form-field">
              <label htmlFor="enquiry-message">
                Message
              </label>

              <textarea
                id="enquiry-message"
                value={message}
                onChange={(event) =>
                  setMessage(
                    event.target.value
                  )
                }
                placeholder="Tell us about your requirement..."
                rows="6"
                required
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="enquiry-submit-button"
              disabled={submitting}
            >
              {submitting
                ? "SUBMITTING..."
                : "SEND ENQUIRY"}
            </button>

            <p className="enquiry-form-note">
              Your enquiry will be sent
              to
              {" "}
              info@vagaryonline.com.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// DRINKWARE CHOOSER
// ============================================================

function DrinkwareChooser() {
  const options = [
    {
      title: "Cups",
      description:
        "Mugs, tumblers and reusable cups for everyday rituals.",
      image: CUP_IMAGES[0],
      to: "/collections/drinkware/cups",
    },
    {
      title: "Bottles",
      description:
        "Reusable bottles for hydration, travel and gifting.",
      image: BOTTLE_IMAGES[0],
      to: "/collections/drinkware/bottles",
    },
  ];

  return (
    <main className="category-page">
      <section className="category-hero">
        <div className="category-hero-inner">
          <span className="category-eyebrow">
            SUSTAINABLE PRODUCTS
          </span>

          <h1>Drinkware</h1>

          <p>
            Choose a drinkware
            collection to explore the
            VAGARY products and images
            inside it.
          </p>

          <Link
            to="/collections"
            className="category-hero-secondary"
          >
            BACK TO COLLECTIONS
          </Link>
        </div>
      </section>

      <section className="drinkware-chooser-section">
        <div className="wrap">
          <div className="category-section-heading">
            <div>
              <span className="category-eyebrow">
                SELECT A COLLECTION
              </span>

              <h2>
                Cups or Bottles
              </h2>
            </div>
          </div>

          <div className="drinkware-chooser-grid">
            {options.map(
              (option) => (
                <Link
                  key={option.to}
                  to={option.to}
                  className="drinkware-chooser-card"
                >
                  <div className="drinkware-chooser-image">
                    <img
                      src={
                        option.image
                      }
                      alt={
                        option.title
                      }
                    />
                  </div>

                  <div className="drinkware-chooser-content">
                    <span className="category-eyebrow">
                      Drinkware
                    </span>

                    <h3>
                      {
                        option.title
                      }
                    </h3>

                    <p>
                      {
                        option.description
                      }
                    </p>

                    <span className="drinkware-chooser-link">
                      VIEW COLLECTION →
                    </span>
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

// ============================================================
// MAIN COMPONENT
// ============================================================

export default function CollectionCategoryPage() {
  const {
    category,
    subcategory,
  } = useParams();

  const [
    selectedItems,
    setSelectedItems,
  ] = useState([]);

  const [
    drawerOpen,
    setDrawerOpen,
  ] = useState(false);

  const [
    showEnquiryForm,
    setShowEnquiryForm,
  ] = useState(false);

  const { addItem } = useCart();

  const categorySlug =
    slugify(category || "");

  const subcategorySlug =
    slugify(subcategory || "");

  // ==========================================================
  // BODY SCROLL LOCK
  // ==========================================================

  useEffect(() => {
    if (!drawerOpen) {
      document.body.style.overflow =
        "";

      return;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [drawerOpen]);

  // ==========================================================
  // ESC KEY
  // ==========================================================

  useEffect(() => {
    const handleKeyDown = (
      event
    ) => {
      if (
        event.key !==
        "Escape"
      ) {
        return;
      }

      if (drawerOpen) {
        setDrawerOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [drawerOpen]);

  // ==========================================================
  // CATEGORY
  // ==========================================================

  const categoryKey =
    subcategorySlug ||
    categorySlug;

  const data =
    CATEGORY_DATA[categoryKey];

  if (
    categorySlug ===
      "drinkware" &&
    !subcategorySlug
  ) {
    return (
      <DrinkwareChooser />
    );
  }

  // ==========================================================
  // NOT FOUND
  // ==========================================================

  if (!data) {
    return (
      <main className="category-page">
        <section className="category-hero">
          <div className="category-hero-inner">
            <span className="category-eyebrow">
              VAGARY COLLECTION
            </span>

            <h1>
              Collection not found
            </h1>

            <p>
              The collection you
              are looking for is
              not available.
            </p>

            <Link
              to="/collections"
              className="category-hero-button"
            >
              BACK TO COLLECTIONS
            </Link>
          </div>
        </section>
      </main>
    );
  }

  const products =
    data.products || [];

  // ==========================================================
  // ADD ITEM
  // ==========================================================

  const handleAddItem = (
    product
  ) => {
    const image =
      getExistingImage(product);

    addItem({
      ...product,

      images:
        product.images?.length
          ? product.images
          : image
          ? [image]
          : [],

      price:
        product.price ?? null,
    });

    setSelectedItems(
      (currentItems) => {
        const existing =
          currentItems.find(
            (item) =>
              item.product.id ===
              product.id
          );

        if (existing) {
          return currentItems.map(
            (item) =>
              item.product.id ===
              product.id
                ? {
                    ...item,
                    quantity:
                      item.quantity +
                      1,
                  }
                : item
          );
        }

        return [
          ...currentItems,
          {
            product,
            quantity: 1,
          },
        ];
      }
    );

    setDrawerOpen(true);
  };

  // ==========================================================
  // REMOVE ITEM
  // ==========================================================

  const handleRemoveItem = (
    productId
  ) => {
    setSelectedItems(
      (currentItems) =>
        currentItems.filter(
          (item) =>
            item.product.id !==
            productId
        )
    );
  };

  // ==========================================================
  // QUANTITY
  // ==========================================================

  const handleQuantityChange = (
    productId,
    quantity
  ) => {
    const nextQuantity =
      Math.max(
        1,
        Number(quantity) || 1
      );

    setSelectedItems(
      (currentItems) =>
        currentItems.map(
          (item) =>
            item.product.id ===
            productId
              ? {
                  ...item,
                  quantity:
                    nextQuantity,
                }
              : item
        )
    );
  };

  // ==========================================================
  // OPEN ENQUIRY
  // ==========================================================

  const handleEnquireNow = () => {
    setDrawerOpen(false);
    setShowEnquiryForm(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ==========================================================
  // HERO ENQUIRY
  // ==========================================================

  const handleHeroEnquire = () => {
    setShowEnquiryForm(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ==========================================================
  // BACK
  // ==========================================================

  const handleBackToCollection =
    () => {
      setShowEnquiryForm(false);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

  // ==========================================================
  // ENQUIRY FORM PAGE
  // ==========================================================

  if (showEnquiryForm) {
    return (
      <>
        <EnquiryForm
          items={selectedItems}
          categoryTitle={
            data.title
          }
          onBack={
            handleBackToCollection
          }
        />

        <EnquiryDrawer
          open={drawerOpen}
          items={selectedItems}
          onClose={() =>
            setDrawerOpen(false)
          }
          onRemove={
            handleRemoveItem
          }
          onQuantityChange={
            handleQuantityChange
          }
          onEnquire={
            handleEnquireNow
          }
        />
      </>
    );
  }

  // ==========================================================
  // MAIN PAGE
  // ==========================================================

  return (
    <main className="category-page">
      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="category-hero">
        <div className="category-hero-inner">
          

          <h1>
            {data.title}
          </h1>

          

          <div className="category-hero-actions">
            

           
          </div>
        </div>
      </section>

      {/* ======================================================
          DRINKWARE NAV
      ====================================================== */}

      {(categorySlug ===
        "drinkware" ||
        categorySlug ===
          "cups" ||
        categorySlug ===
          "bottles") && (
        <nav
          className="category-subnav"
          aria-label="Drinkware collections"
        >
          <Link
            to="/collections/drinkware/cups"
            className={
              categoryKey ===
              "cups"
                ? "active"
                : ""
            }
          >
            Cups
          </Link>

          <Link
            to="/collections/drinkware/bottles"
            className={
              categoryKey ===
              "bottles"
                ? "active"
                : ""
            }
          >
            Bottles
          </Link>
        </nav>
      )}

      {/* ======================================================
          PRODUCTS
      ====================================================== */}

      <section className="category-products-section">
        <div className="category-section-heading">
          <div>
            

            <h2>
              {products.length}{" "}
              Products
            </h2>
          </div>

         
        </div>

        <div className="category-products-grid">
          {products.map(
            (product) => (
              <ProductCard
                key={
                  product.id
                }
                product={
                  product
                }
                onAddItem={
                  handleAddItem
                }
              />
            )
          )}
        </div>
      </section>

      {/* ======================================================
          BOTTOM ENQUIRY CTA
      ====================================================== */}

      <section className="category-enquiry-cta">
        <div className="category-enquiry-cta-inner">
          <span className="category-eyebrow">
            CORPORATE & CUSTOM ORDERS
          </span>

          <h2>
            Looking for something
            <br />
            more tailored?
          </h2>

          <p>
            Tell us your requirement,
            quantity and branding
            needs. Our team can help
            curate the right collection
            for you.
          </p>

          <button
            type="button"
            className="category-hero-button"
            onClick={
              handleHeroEnquire
            }
          >
            ENQUIRE NOW
          </button>
        </div>
      </section>

      {/* ======================================================
          BOTTOM NAV
      ====================================================== */}

      <section className="category-bottom-nav">
        <Link to="/collections">
          ← Back to Collections
        </Link>

        <Link to="/contact">
          Contact VAGARY →
        </Link>
      </section>

      {/* ======================================================
          ENQUIRY DRAWER
      ====================================================== */}

      <EnquiryDrawer
        open={drawerOpen}
        items={selectedItems}
        onClose={() =>
          setDrawerOpen(false)
        }
        onRemove={
          handleRemoveItem
        }
        onQuantityChange={
          handleQuantityChange
        }
        onEnquire={
          handleEnquireNow
        }
      />
    </main>
  );
}
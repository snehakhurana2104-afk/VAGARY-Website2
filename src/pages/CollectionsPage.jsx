import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const COLLECTION_SECTIONS = [
  {
    title: "Leather",
    
    items: [
      { label: "Leather Bags", to: "/collections/leather-bags", image: "/images/products/leather-01.jpg" },
      { label: "Weaving Bags", to: "/collections/weaving-bags", image: "/images/products/weaving-01.jpg" },
      { label: "Canvas Bags", to: "/collections/canvas-bags", image: "/images/products/canvas-01.jpg" },
      { label: "Cotton Canvas Accessories", to: "/collections/cotton-canvas-accessories", image: "/images/products/cotton-canvas-01.jpg" },
      { label: "Polo Belts & Accessories", to: "/collections/polo-belts-accessories", image: "/images/products/polo-01.jpg" },
      { label: "Wallet", to: "/collections/wallet", image: "/images/products/wallet-01.jpg" },
      { label: "Card Case", to: "/collections/card-case", image: "/images/products/card-case-01.jpg" },
    ],
  },
  {
    title: "Sustainable Products",
    
    items: [
      { label: "Drinkware", to: "/collections/drinkware", image: "/images/collections/drinkware.jpg" },
      { label: "Planters", to: "/collections/planters", image: "/images/products/pink-ribbed-planters.jpg" },
      { label: "Corporate Giftpack", to: "/collections/corporate-giftpack", image: "/images/gifting/hexa-gift-box.jpg" },
      { label: "Kitchen Items", to: "/collections/kitchen-items", image: "/images/products/bowls-with-spoons-set.jpg" },
    ],
  },
];

function CollectionLink({ item }) {
  return (
    <Link to={item.to} className="directory-item">
      <span className="directory-item-image">
        <img src={item.image} alt={item.label} loading="lazy" />
      </span>
      <span className="directory-item-name">{item.label}</span>
      <span className="directory-item-arrow" aria-hidden="true">→</span>
    </Link>
  );
}

export default function CollectionsPage() {
  return (
    <Layout>
      <main className="collections-directory">
        <header className="directory-hero">
          <div className="wrap">
            
            <h1>Explore The  Collection.</h1>
           
          </div>
        </header>

        <section className="directory-content section">
          <div className="wrap">
            {COLLECTION_SECTIONS.map((section) => (
              <section className="directory-section" key={section.title}>
                <div className="directory-section-heading">
                  <h2>{section.title}</h2>
                  <p>{section.description}</p>
                </div>
                <div className="directory-items-grid">
                  {section.items.map((item) => (
                    <CollectionLink key={item.to} item={item} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}

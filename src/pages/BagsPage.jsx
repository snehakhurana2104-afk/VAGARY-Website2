import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { IconBag, IconCheck, IconArrow } from "../components/Icons";

const BENEFITS = [
  "Premium Fabric",
  "Durable & Lightweight",
  "Everyday Use",
  "Sustainable Design",
];

const BAG_TYPES = [
  { name: "Totes", image: "/images/products/Bags.jpg" },
  { name: "Backpacks", image: "/images/products/Bags.jpg" },
  { name: "Pouches", image: "/images/products/Bags.jpg" },
];

export default function BagsPage() {
  return (
    <Layout>
      <section className="page-hero page-hero-bags">
        <div className="wrap hero-inner">
          <div className="hero-float-card">
            <IconBag width={54} height={54} />
            <span>Premium daily carry</span>
          </div>
        </div>
      </section>

      <section className="section section-ivory">
        <div className="wrap">
          <div className="bags-showcase">
            {BAG_TYPES.map((type) => (
              <div className="bag-card" key={type.name}>
                <div className="bag-card-image">
                  <img src={type.image} alt={type.name} loading="lazy" />
                </div>
                <div className="bag-card-content">
                  <span>{type.name}</span>
                  <h3>{type.name}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="catalog-block bag-benefits-block">
            <div className="catalog-block-head">
              <h2>Bag Types</h2>
              <span>Totes · Backpacks · Pouches</span>
            </div>
            <ul className="point-list point-list-compact">
              {BENEFITS.map((b) => (
                <li key={b}>
                  <IconCheck width={16} height={16} /> {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="bags-cta-row">
            <Link to="/collections" className="btn btn-secondary">
              View All Collections
            </Link>
            <Link to="/contact" className="btn btn-primary">
              Enquire About Bags <IconArrow className="arrow" width={16} height={16} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

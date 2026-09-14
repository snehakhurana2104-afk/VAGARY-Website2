import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { IconArrow, IconLeaf, IconRecycle, IconEarth } from "../components/Icons";

export default function About() {
  return (
    <Layout>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">About VAGARY</p>
          <h1>Everyday essentials, made kinder to the planet.</h1>
          <p>
            VAGARY makes drinkware, bottles, gardenware and bags from
            renewable resources like rice husk, bamboo and other farm
            leftovers — so the things you use every day are beautiful,
            durable and easier on the earth.
          </p>
        </div>
      </section>

      <section className="section section-ivory">
        <div className="wrap">
          <div className="split-copy on-ivory" style={{ padding: 0, maxWidth: 780 }}>
            <p className="eyebrow">Our Approach</p>
            <h2>Sustainable by material, not just by marketing.</h2>
            <p>
              After rice and wheat are harvested, the leftover husks and
              stalks are often thrown away or burned. We repurpose these
              farm leftovers, combining them with a small amount of strong
              material to create BioDur — the base material behind our
              gardenware, drinkware and tableware. Every product is designed
              to be strong, durable and recyclable, which means less waste
              and less reliance on new plastic.
            </p>
            <ul className="point-list" style={{ maxWidth: 560 }}>
              <li><IconLeaf width={16} height={16} /> Renewable farm leftovers</li>
              <li><IconRecycle width={16} height={16} /> Designed to be recyclable</li>
              <li><IconEarth width={16} height={16} /> Less new plastic</li>
              <li><IconLeaf width={16} height={16} /> Durable, everyday use</li>
            </ul>
            <Link to="/sustainability" className="btn btn-secondary" style={{ alignSelf: "flex-start" }}>
              Read Our Sustainability Story <IconArrow className="arrow" width={16} height={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">What We Make</p>
              <h2>Four collections, one material philosophy.</h2>
            </div>
            <Link to="/collections" className="view-all">View All Collections →</Link>
          </div>
          <div className="catalog-grid">
            <Link to="/collections#drinkware" className="catalog-item">Drinkware →</Link>
            <Link to="/collections#bottles" className="catalog-item">Bottles →</Link>
            <Link to="/collections#gardenware" className="catalog-item">Gardenware →</Link>
            <Link to="/bags" className="catalog-item">Bags →</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

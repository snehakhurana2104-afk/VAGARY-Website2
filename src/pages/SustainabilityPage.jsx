import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { IconHusk, IconLeaf, IconRecycle, IconEarth, IconArrow } from "../components/Icons";
import { sustainabilityImage } from "../data/products";

const STEPS = [
  {
    number: "01",
    title: "Farmers grow the crop",
    body: "Rice and wheat are grown and harvested as usual, for food.",
  },
  {
    number: "02",
    title: "Leftovers are set aside",
    body: "After harvest, leftover husks and stalks are often thrown away or burned.",
  },
  {
    number: "03",
    title: "We repurpose them",
    body: "Those farm leftovers are combined with a small amount of strong material to create BioDur.",
  },
  {
    number: "04",
    title: "BioDur becomes a product",
    body: "BioDur is shaped into gardenware, drinkware and other home products — strong, durable and recyclable.",
  },
];

const POINTS = [
  { icon: IconHusk, label: "Rice Husk" },
  { icon: IconLeaf, label: "Bamboo Fibre" },
  { icon: IconEarth, label: "Other Farm Leftovers" },
  { icon: IconRecycle, label: "Recyclable by Design" },
];

export default function SustainabilityPage() {
  return (
    <Layout>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Our Sustainability Story</p>
          <h1>From farm leftovers to thoughtful products.</h1>
          <p>
            Every VAGARY product starts with something that would otherwise
            have been thrown away or burned.
          </p>
        </div>
      </section>

      <section className="section section-ivory">
        <div className="wrap">
          <div className="catalog-hero-image">
            <img src={sustainabilityImage} alt="A VAGARY planter made from BioDur, our rice-husk based material" />
          </div>

          <div className="split-copy on-ivory" style={{ padding: 0, maxWidth: 780 }}>
            <p className="eyebrow">What Is BioDur?</p>
            <h2>A material made from what farming leaves behind.</h2>
            <p>
              After rice and wheat are harvested, the leftover husks and
              stalks are often thrown away or burned. We repurpose these
              farm leftovers by combining them with a small amount of strong
              material to create BioDur. BioDur is used to make gardenware,
              drinkware, tableware and other home products — all designed to
              be strong, durable and recyclable. The result is less waste
              and less reliance on new plastic, without giving up on
              everyday durability.
            </p>
          </div>

          <div className="sustain-steps">
            {STEPS.map((s) => (
              <div className="sustain-step" key={s.number}>
                <div className="step-number">{s.number}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>

          <ul className="point-list" style={{ maxWidth: 560, marginBottom: 40 }}>
            {POINTS.map((pt) => (
              <li key={pt.label}><pt.icon width={16} height={16} /> {pt.label}</li>
            ))}
          </ul>

          <Link to="/collections" className="btn btn-secondary">
            See Products Made From BioDur <IconArrow className="arrow" width={16} height={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}

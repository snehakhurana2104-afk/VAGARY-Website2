import { Link } from "react-router-dom";
import { IconArrow } from "./Icons";

const FEATURE_PANELS = [
  {
    
    title: "Made for the way you live.",
    description: "Everyday essentials shaped by considered materials and practical design.",
    image: "/images/products/eco-spring-bottle-duo.jpg",
    to: "/collections/drinkware",
  },
  {
    label: "Leather",
    title: "Refined, useful, lasting.",
    description: "Professional carry goods and accessories from the VAGARY catalogue.",
    image: "/images/products/leather-01.jpg",
    to: "/collections/leather-bags",
  },
  {
    label: "Corporate Gifting",
    title: "Considered gestures.",
    description: "Gift collections for teams, clients and the moments worth marking.",
    image: "/images/gifting/hexa-gift-box.jpg",
    to: "/collections/corporate-giftpack",
  },
];

export default function HomeEditorial() {
  return (
    <>
      <section className="home-showcase">
        <div className="wrap">
          <div className="home-showcase-heading">
            <div>
              
              <h2>Made for the way you live.</h2>
            </div>
           
          </div>

          <div className="home-showcase-grid">
            {FEATURE_PANELS.map((panel) => (
              <Link key={panel.to} to={panel.to} className="home-showcase-panel">
                <img src={panel.image} alt={panel.label} loading="lazy" />
                <span className="home-showcase-overlay" />
                <span className="home-showcase-content">
                  <span className="eyebrow">{panel.label}</span>
                  <strong>{panel.title}</strong>
                  <span>{panel.description}</span>
                  <em>Explore <IconArrow className="arrow" width={15} height={15} /></em>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
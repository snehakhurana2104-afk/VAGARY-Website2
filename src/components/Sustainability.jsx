import { Link } from "react-router-dom";
import { IconHusk, IconLeaf, IconRecycle, IconEarth, IconArrow } from "./Icons";
import { sustainabilityImage } from "../data/products";

const POINTS = [
  { icon: IconHusk, label: "Rice Husk" },
  { icon: IconLeaf, label: "Bamboo Fibre" },
  { icon: IconEarth, label: "Other Farm Leftovers" },
  { icon: IconRecycle, label: "Recyclable" },
];

export default function Sustainability() {
  return (
    <section className="split" id="sustainability">
      <div className="split-media">
        <img
          src="/images/products/sustainabilityImage.jpg"
          alt="A VAGARY planter made from BioDur, our rice-husk based material"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>

      <div className="split-copy on-ivory">
        <p className="eyebrow">Our Sustainability Story</p>
        <h2>From farm leftovers to<br />thoughtful products.</h2>
        <p>
          Aaaaafter rice and wheat are harvested, the leftover husks and stalks
          are often thrown away or burned. We repurpose these farm leftovers,
          combining them with a small amount of strong material to create
          BioDur — the material behind our gardenware, drinkware and
          tableware. Every product is designed to be strong, durable and
          recyclable, meaning less waste and less reliance on new plastic.
        </p>
        
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import { IconArrow } from "./Icons";

export default function CTASection() {
  return (
    <section className="section section-cta">
      <div className="wrap">
        <div className="cta-panel">
          <div>
            <p className="eyebrow">Designing for better living</p>
            <h2>Build a more thoughtful collection for your next order.</h2>
          </div>

          <div className="cta-actions">
            <Link to="/collections" className="btn btn-primary">
              Explore Collections
              <IconArrow className="arrow" width={16} height={16} />
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Speak to VAGARY
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

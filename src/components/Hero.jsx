import { Link } from "react-router-dom";
import { IconArrow, IconLeaf, IconCheck } from "./Icons";

export default function Hero() {
  return (
    <section className="hero hero-premium">

      {/* =========================================
          BACKGROUND / PRODUCT IMAGE
      ========================================= */}
      <div className="hero-background">
       <img
  src="/images/hero/Firstpic.png"
  alt="VAGARY sustainable products"
/>
      </div>

      {/* =========================================
          DARK / LIGHT OVERLAY
      ========================================= */}
      <div className="hero-overlay"></div>

      {/* =========================================
          HERO CONTENT
      ========================================= */}
      <div className="wrap hero-content">

        <div className="hero-copy">

          {/* Small heading */}
          <p className="hero-eyebrow">VAGARY · SUSTAINABLE LIVING</p>

          {/* Main heading */}
          <h1>
            Sustainable essentials.
            <br />
            <span>Beautifully considered.</span>
          </h1>

          {/* Description */}
          <p className="hero-description">
            Everyday products, gifting and corporate solutions made for
            thoughtful living.
          </p>

          {/* =========================================
              BUTTONS
          ========================================= */}
          <div className="hero-actions">

            <Link
              to="/collections"
              className="btn btn-primary"
            >
              <span>Explore Collections</span>
              <IconArrow width={16} height={16} />
            </Link>

          

          </div>

          {/* =========================================
              BENEFITS
          ========================================= */}
          <div className="hero-benefits">

            <div className="hero-benefit">
              <IconLeaf width={17} height={17} />
              <span>Eco-Friendly</span>
            </div>

            <div className="hero-benefit">
              <IconCheck width={17} height={17} />
              <span>Durable</span>
            </div>

            <div className="hero-benefit">
              <IconCheck width={17} height={17} />
              <span>Thoughtfully Designed</span>
            </div>

            <div className="hero-benefit">
              <IconCheck width={17} height={17} />
              <span>Made for Everyday Living</span>
            </div>

          </div>

        </div>

        {/* =========================================
            BOTTOM RIGHT
        ========================================= */}
       

      </div>

    </section>
  );
}
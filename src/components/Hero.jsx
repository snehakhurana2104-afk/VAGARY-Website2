import { Link } from "react-router-dom";
import { IconArrow, IconLeaf, IconCheck } from "./Icons";

export default function Hero() {
  return (
    <>
      <section className="hero hero-premium">

        {/* PREMIUM BACKGROUND */}
        <div className="hero-background"></div>

        {/* DARK OVERLAY */}
        <div className="hero-overlay"></div>

        {/* HERO CONTENT */}
        <div className="wrap hero-content">

          <div className="hero-copy">

            <p className="hero-eyebrow">
              VAGARY · SUSTAINABLE LIVING
            </p>

            <h1>
              Sustainable essentials.
              <br />
              <span>Beautifully considered.</span>
            </h1>

            <p className="hero-description">
              Everyday products, gifting and corporate solutions made for
              thoughtful living.
            </p>

            <div className="hero-actions">
              <Link
                to="/collections"
                className="btn btn-primary"
              >
                <span>Explore Collections</span>
                <IconArrow width={16} height={16} />
              </Link>
            </div>

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

        </div>

      </section>

      {/* =========================================
          HERO CSS
      ========================================= */}
      <style>{`

        .hero-premium {
          position: relative;
          min-height: 100vh;
          width: 100%;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 78% 35%,
              rgba(199, 169, 93, 0.16),
              transparent 32%
            ),
            linear-gradient(
              135deg,
              #050505 0%,
              #0b0b0b 50%,
              #17130b 100%
            );

          display: flex;
          align-items: center;
        }

        /* FULL BACKGROUND */
        .hero-premium .hero-background {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;

          background:
            radial-gradient(
              circle at 80% 30%,
              rgba(199, 169, 93, 0.13),
              transparent 30%
            ),
            linear-gradient(
              115deg,
              #050505 0%,
              #0b0b0b 48%,
              #18140c 100%
            );
        }

        /* PREMIUM GOLD CIRCLE */
        .hero-premium .hero-background::after {
          content: "";
          position: absolute;

          width: 520px;
          height: 520px;

          right: 4%;
          top: 12%;

          border: 1px solid rgba(199, 169, 93, 0.15);
          border-radius: 50%;

          box-shadow:
            0 0 100px rgba(199, 169, 93, 0.06);
        }

        /* SECOND DECORATIVE CIRCLE */
        .hero-premium .hero-background::before {
          content: "";
          position: absolute;

          width: 260px;
          height: 260px;

          right: 17%;
          top: 28%;

          border: 1px solid rgba(199, 169, 93, 0.08);
          border-radius: 50%;
        }

        /* OVERLAY */
        .hero-premium .hero-overlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.88) 0%,
              rgba(0, 0, 0, 0.62) 50%,
              rgba(0, 0, 0, 0.35) 100%
            );

          z-index: 1;
        }

        /* CONTENT */
        .hero-premium .hero-content {
          position: relative;
          z-index: 2;

          width: 100%;

          padding-top: 100px;
          padding-bottom: 80px;
        }

        .hero-premium .hero-copy {
          max-width: 850px;
        }

        /* EYEBROW */
        .hero-premium .hero-eyebrow {
          color: #c7a95d;

          font-family:
            "Times New Roman",
            Times,
            serif;

          letter-spacing: 0.22em;
          font-size: 12px;

          margin-bottom: 24px;

          text-transform: uppercase;
        }

        /* HEADING */
        .hero-premium h1 {
          color: #f5f0e6;

          font-family:
            "Times New Roman",
            Times,
            serif;

          font-size: clamp(48px, 6vw, 88px);

          font-weight: 400;

          line-height: 0.98;

          letter-spacing: -0.025em;

          margin: 0 0 28px;
        }

        .hero-premium h1 span {
          color: #c7a95d;
        }

        /* DESCRIPTION */
        .hero-premium .hero-description {
          max-width: 620px;

          color: rgba(245, 240, 230, 0.72);

          font-family:
            "Times New Roman",
            Times,
            serif;

          font-size: 18px;

          line-height: 1.7;

          margin-bottom: 36px;
        }

        /* BUTTON */
        .hero-premium .hero-actions {
          display: flex;

          gap: 16px;

          margin-bottom: 55px;
        }

        .hero-premium .btn-primary {
          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 12px;

          padding: 15px 24px;

          background: #c7a95d;

          color: #080808;

          border: 1px solid #c7a95d;

          text-decoration: none;

          font-family:
            "Times New Roman",
            Times,
            serif;

          transition:
            transform 0.25s ease,
            background 0.25s ease;
        }

        .hero-premium .btn-primary:hover {
          background: #e0c77d;

          border-color: #e0c77d;

          transform: translateY(-2px);
        }

        /* BENEFITS */
        .hero-premium .hero-benefits {
          display: flex;

          flex-wrap: wrap;

          gap: 28px;
        }

        .hero-premium .hero-benefit {
          display: flex;

          align-items: center;

          gap: 9px;

          color: rgba(245, 240, 230, 0.72);

          font-family:
            "Times New Roman",
            Times,
            serif;

          font-size: 13px;
        }

        .hero-premium .hero-benefit svg {
          color: #c7a95d;
        }

        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 768px) {

          .hero-premium {
            min-height: 100svh;
          }

          .hero-premium .hero-content {
            padding-top: 110px;
            padding-bottom: 55px;
          }

          .hero-premium h1 {
            font-size: clamp(42px, 12vw, 62px);
          }

          .hero-premium .hero-description {
            font-size: 16px;
          }

          .hero-premium .hero-actions {
            margin-bottom: 40px;
          }

          .hero-premium .hero-benefits {
            display: grid;

            grid-template-columns: 1fr 1fr;

            gap: 18px 14px;
          }

          .hero-premium .hero-benefit {
            font-size: 12px;
          }

          .hero-premium .hero-background::after {
            width: 300px;
            height: 300px;

            right: -100px;
            top: 25%;
          }

          .hero-premium .hero-background::before {
            display: none;
          }
        }

        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 430px) {

          .hero-premium .hero-content {
            padding-top: 100px;
            padding-bottom: 45px;
          }

          .hero-premium h1 {
            font-size: 42px;

            line-height: 1;
          }

          .hero-premium .hero-description {
            font-size: 15px;

            line-height: 1.6;
          }

          .hero-premium .hero-benefits {
            grid-template-columns: 1fr;

            gap: 14px;
          }

          .hero-premium .hero-actions {
            width: 100%;
          }

          .hero-premium .btn-primary {
            width: 100%;
          }

          .hero-premium .hero-eyebrow {
            font-size: 10px;

            letter-spacing: 0.16em;
          }
        }

      `}</style>
    </>
  );
}
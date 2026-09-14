import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { IconArrow } from "../components/Icons";

export default function NotFound() {
  return (
    <Layout>
      <main className="notfound-page">
        <div className="notfound-content">

          <p className="notfound-eyebrow">
            VAGARY
          </p>

          <h1>404</h1>

          <h2>Page not found</h2>

          <p className="notfound-text">
            The page you are looking for doesn't exist
            or may have been moved.
          </p>

          <div className="notfound-actions">
            <Link
              to="/"
              className="btn btn-primary"
            >
              Back to Home
              <IconArrow
                className="arrow"
                width={16}
                height={16}
              />
            </Link>

            <Link
              to="/collections"
              className="btn btn-secondary"
            >
              Explore Collections
            </Link>
          </div>

        </div>
      </main>
    </Layout>
  );
}
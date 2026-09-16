import React from "react";
import { Link } from "react-router-dom";

export default function EnquirySuccessPage() {
  return (
    <main className="enquiry-success-page">
      <section className="enquiry-success-section">
        <div className="enquiry-success-container">

          <div className="enquiry-success-icon">
            ✓
          </div>

          <span className="enquiry-success-eyebrow">
            ENQUIRY SENT
          </span>

          <h1>
            Thank you for your enquiry.
          </h1>

          <p>
            Your enquiry has been submitted
            successfully.
          </p>

          <p>
            Our team will review your
            requirement and get back to you
            shortly.
          </p>

          <div className="enquiry-success-contact">
            <span>Enquiries</span>

            <a href="mailto:sneha.khurana@ssdntech.com">
              sneha.khurana@ssdntech.com
            </a>
          </div>

          <Link
            to="/collections"
            className="enquiry-success-button"
          >
            BACK TO COLLECTIONS
          </Link>

        </div>
      </section>
    </main>
  );
}
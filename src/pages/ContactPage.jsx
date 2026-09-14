import { useState } from "react";
import Layout from "../components/Layout";
import { IconArrow } from "../components/Icons";
import { submitEnquiry } from "../utils/submitEnquiry";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: "",
    quantity: "1",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!e.currentTarget.checkValidity()) {
      setError("Please complete every required field with valid details.");
      return;
    }

    setSubmitting(true);

    try {
      await submitEnquiry({
        subject: "New VAGARY Website Enquiry",
        submittedAt: new Date().toISOString(),
        customer: {
          name: form.name.trim(),
          company: form.company.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
        },
        enquiry: {
          product: form.product.trim(),
          quantity: Number(form.quantity),
          message: form.message.trim(),
        },
      });
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or contact us directly at info@vagaryonline.com.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Get In Touch</p>
          <h1>Let's create something meaningful.</h1>
          <p>
            Send us an enquiry for our latest catalogue, product details or
            custom gifting solutions, and we'll get back to you.
          </p>
        </div>
      </section>

      <section className="section section-ivory">
        <div className="wrap contact-grid">
          <div>
            {submitted ? (
              <div className="contact-success">
                Thank you for your enquiry. Our team will get back to you
                shortly.
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate={false}>
                {error && <div className="contact-form-error" role="alert">{error}</div>}
                <div className="form-row">
                  <label htmlFor="name">Full Name</label>
                  <input id="name" name="name" type="text" value={form.name} onChange={update("name")} placeholder="Your full name" required />
                </div>
                <div className="form-row">
                  <label htmlFor="company">Company Name</label>
                  <input id="company" name="company" type="text" value={form.company} onChange={update("company")} placeholder="Your company name" required />
                </div>
                <div className="form-row">
                  <label htmlFor="email">Email Address</label>
                  <input id="email" name="email" type="email" value={form.email} onChange={update("email")} placeholder="you@company.com" required />
                </div>
                <div className="form-row">
                  <label htmlFor="phone">Contact Number</label>
                  <input id="phone" name="phone" type="tel" value={form.phone} onChange={update("phone")} placeholder="Enter your contact number" pattern="[+]?[0-9 ()-]{10,15}" required />
                </div>
                <div className="form-row">
                  <label htmlFor="product">Product / Collection</label>
                  <input id="product" name="product" type="text" value={form.product} onChange={update("product")} placeholder="Product or collection" required />
                </div>
                <div className="form-row">
                  <label htmlFor="quantity">Quantity</label>
                  <input id="quantity" name="quantity" type="number" min="1" step="1" value={form.quantity} onChange={update("quantity")} required />
                </div>
                <div className="form-row">
                  <label htmlFor="message">Message / Requirements</label>
                  <textarea id="message" name="message" rows={5} value={form.message} onChange={update("message")} placeholder="Tell us what you're looking for..." required />
                </div>
                <button type="submit" className="btn btn-primary" disabled={submitting}>
                  {submitting ? "SUBMITTING..." : "SEND ENQUIRY"} {!submitting && <IconArrow className="arrow" width={16} height={16} />}
                </button>
              </form>
            )}
          </div>

          <div className="contact-details">
            <h3>Reach Us Directly</h3>
            <dl>
              <dt>Email</dt>
              <dd><a href="mailto:info@vagaryonline.com">info@vagaryonline.com</a></dd>
              <dt>Phone</dt>
              <dd><a href="tel:+919812941527">98129 41527</a></dd>
              <dt>Catalogue Requests</dt>
              <dd>Use the form and select "Product Catalogue" — we'll send the latest PDF.</dd>
              <dt>Corporate &amp; Bulk Gifting</dt>
              <dd>Select "Corporate Gifting" or "Bulk / Wholesale Order" and share your quantities.</dd>
            </dl>
          </div>
        </div>
      </section>
    </Layout>
  );
}

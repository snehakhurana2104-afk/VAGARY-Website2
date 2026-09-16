import emailjs from "@emailjs/browser";

const SERVICE_ID =
  import.meta.env.VITE_EMAILJS_SERVICE_ID;

const TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

const PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export async function submitEnquiry(formData) {
  if (!SERVICE_ID) {
    throw new Error(
      "EmailJS Service ID is missing."
    );
  }

  if (!TEMPLATE_ID) {
    throw new Error(
      "EmailJS Template ID is missing."
    );
  }

  if (!PUBLIC_KEY) {
    throw new Error(
      "EmailJS Public Key is missing."
    );
  }

  const templateParams = {
    to_email:
      "sneha.khurana@ssdntech.com",

    full_name:
      formData.customer?.name || "",

    company_name:
      formData.customer?.company || "",

    email:
      formData.customer?.email || "",

    contact_number:
      formData.customer?.phone || "",

    product_collection:
      formData.enquiry?.product ||
      formData.enquiry?.collection ||
      "",

    quantity:
      formData.enquiry?.quantity || "",

    message:
      formData.enquiry?.message || "",

    selected_products:
      formData.selectedCartItems || "",

    subject:
      formData.subject ||
      "New VAGARY Product Enquiry",

    submitted_at:
      formData.submittedAt ||
      new Date().toLocaleString("en-IN"),
  };

  console.log(
    "Sending VAGARY enquiry:",
    templateParams
  );

  const response = await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    templateParams,
    {
      publicKey: PUBLIC_KEY,
    }
  );

  console.log(
    "VAGARY EMAIL SENT:",
    response
  );

  return response;
}
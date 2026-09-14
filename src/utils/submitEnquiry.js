export async function submitEnquiry(payload) {
  const endpoint = import.meta.env.VITE_ENQUIRY_ENDPOINT;

  if (!endpoint) {
    throw new Error("VITE_ENQUIRY_ENDPOINT is not configured");
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...payload,
      recipient: "info@vagaryonline.com",
    }),
  });

  if (!response.ok) {
    throw new Error("Enquiry submission failed");
  }

  return response.json().catch(() => ({}));
}

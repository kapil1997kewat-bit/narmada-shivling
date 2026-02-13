import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Shubham Narmda Shivling",
  description:
    "Terms and Conditions governing usage and purchases on shubhamnarmadashivling.com",
};

export default function Terms() {
  return (
    <main className="container">
      <h1>Terms & Conditions</h1>
      <p>Last updated: February 11, 2026</p>

      <h2>General</h2>
      <p>
        By using this website you agree to comply with the terms set by Shubham
        Narmda Shivling.
      </p>

      <h2>Products</h2>
      <p>
        Natural Narmada Shivlings may vary slightly in size or appearance due to
        natural origin.
      </p>

      <h2>Pricing</h2>
      <p>Prices in INR and may change without notice.</p>

      <h2>Orders</h2>
      <p>
        Orders confirmed after payment verification. We may cancel if issues
        arise.
      </p>

      <h2>Intellectual Property</h2>
      <p>All content belongs to Shubham Narmda Shivling.</p>

      <h2>Governing Law</h2>
      <p>These terms follow laws of India.</p>
    </main>
  );
}

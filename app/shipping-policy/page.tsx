import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping Policy | Shubham Narmda Shivling",
  description:
    "Shipping and delivery terms for orders placed on Shubham Narmda Shivling.",
};

export default function Shipping() {
  return (
    <main className="container">
      <h1>Shipping Policy</h1>
      <p>Last updated: February 11, 2026</p>

      <h2>Processing</h2>
      <p>Orders processed within 1–3 business days.</p>

      <h2>Delivery Time</h2>
      <p>India delivery estimated 3–7 business days.</p>

      <h2>Tracking</h2>
      <p>Tracking provided after dispatch.</p>

      <h2>Address Accuracy</h2>
      <p>Customers must provide correct address details.</p>
    </main>
  );
}

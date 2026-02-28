import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | Shubham Narmda Shivling",
  description:
    "Website disclaimer for spiritual and informational content provided by Shubham Narmda Shivling.",
};
export default function Disclaimer() {
  return (
    <main className="container">
      <h1>Disclaimer</h1>
      <p>Last updated: February 11, 2026</p>

      <p>
        Information on this website is for spiritual and informational purposes
        only.
      </p>

      <h2>Product Representation</h2>
      <p>Natural product variations may occur.</p>

      <h2>Spiritual Claims</h2>
      <p>
        Spiritual benefits are based on beliefs and traditions, not guaranteed
        outcomes.
      </p>

      <h2>Liability</h2>
      <p>
        We are not responsible for damages resulting from website use or product
        usage.
      </p>
    </main>
  );
}

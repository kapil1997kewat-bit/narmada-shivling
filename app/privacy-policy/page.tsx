import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Shubham Narmda Shivling",
  description:
    "Privacy Policy of Shubham Narmda Shivling explaining how we collect, use and protect your personal data.",
};

export default function PrivacyPolicy() {
  return (
    <main className="container">
      <h1>Privacy Policy</h1>
      <p>Last updated: February 11, 2026</p>

      <p>
        At Shubham Narmda Shivling, we respect your privacy and are committed to
        protecting your personal information when you visit
        shubhamnarmadashivling.com.
      </p>

      <h2>Information We Collect</h2>
      <ul>
        <li>Name, email address, phone number</li>
        <li>Billing and shipping address</li>
        <li>Secure payment details via gateways</li>
        <li>WhatsApp contact info</li>
        <li>Device/browser analytics data</li>
      </ul>

      <h2>How We Use Information</h2>
      <ul>
        <li>Order processing & delivery</li>
        <li>Customer support</li>
        <li>Order updates</li>
        <li>Website improvement</li>
        <li>Promotions with consent</li>
      </ul>

      <h2>Sharing</h2>
      <p>
        We never sell your data. Information may be shared with payment
        processors, courier partners, and analytics providers.
      </p>

      <h2>Cookies</h2>
      <p>You may disable cookies in browser settings.</p>

      <h2>Your Rights</h2>
      <p>
        You may request data access, correction, deletion, or opt out of
        marketing communications.
      </p>
    </main>
  );
}

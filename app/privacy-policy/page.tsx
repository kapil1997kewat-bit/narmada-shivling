import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Privacy Policy | Shubham Narmada Shivling",
  description:
    "Shubham Narmada Shivling Privacy Policy: Learn how we protect your data, manage orders, and improve your website experience.",
  alternates: {
    canonical: "https://shubhamnarmadashivling.com/privacy-policy",
  },
  robots: "index, follow",
  openGraph: {
    title: "Privacy Policy | Shubham Narmada Shivling",
    description:
      "Shubham Narmada Shivling Privacy Policy: Learn how we protect your data, manage orders, and improve your website experience.",
    url: "https://shubhamnarmadashivling.com/privacy-policy",
    siteName: "Shubham Narmada Shivling",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Shubham Narmada Shivling",
    description:
      "Shubham Narmada Shivling Privacy Policy: Learn how we protect your data and manage orders.",
    images: ["/og-image.png"],
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="container">
      <h1>Privacy Policy | Shubham Narmada Shivling</h1>
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
    {/* JSON-LD Structured Data */}
      <Script type="application/ld+json" id="privacy-schema">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Privacy Policy | Shubham Narmada Shivling",
          "url": "https://shubhamnarmadashivling.com/privacy-policy",
          "description":
            "Shubham Narmada Shivling Privacy Policy: Learn how we protect your data, manage orders, and improve your website experience.",
          "publisher": {
            "@type": "Organization",
            "name": "Shubham Narmada Shivling",
            "logo": {
              "@type": "ImageObject",
              "url": "https://shubhamnarmadashivling.com/alok2.png",
              "width": 250,
              "height": 60
            },
            "sameAs": [
              "https://www.instagram.com/narmadashivling09/",
              "https://www.facebook.com/share/16nQ9SpdD5/",
              "https://www.youtube.com/@narmadashivling09",
            ]
          },
          "mainEntity": {
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Is Prana Pratishtha required for Narmadeshwar Shivling?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No, Narmadeshwar Shivlings are Swayambhu (self-manifested) and do not require Prana Pratishtha."
                }
              },
              {
                "@type": "Question",
                "name": "Is it auspicious to keep a large Shivling at home?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For household purposes, a small to medium-sized Shivling is considered ideal and auspicious."
                }
              }
            ]
          }
        })}
      </Script>
    </main>
  );
}

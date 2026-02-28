import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Shipping Policy | Shubham Narmada Shivling",
  description:
    "Learn about shipping, delivery timelines, and tracking for Narmada Shivlings ordered from Shubham Narmada Shivling.",
  alternates: {
    canonical: "https://shubhamnarmadashivling.com/shipping-policy",
  },
  robots: "index, follow",
  openGraph: {
    title: "Shipping Policy | Shubham Narmada Shivling",
    description:
      "Learn about shipping, delivery timelines, and tracking for Narmada Shivlings ordered from Shubham Narmada Shivling.",
    url: "https://shubhamnarmadashivling.com/shipping-policy",
    siteName: "Shubham Narmada Shivling",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shipping Policy | Shubham Narmada Shivling",
    description:
      "Learn about shipping, delivery timelines, and tracking for Narmada Shivlings ordered from Shubham Narmada Shivling.",
    images: ["/og-image.png"],
  },
};

export default function Shipping() {
  return (
    <main className="container">
      <h1>Shipping Policy | Shubham Narmada Shivling</h1>
      <p>Last updated: February 11, 2026</p>

      <h2>Order Processing</h2>
      <p>
        All orders are processed within 1–3 business days after confirmation.
      </p>

      <h2>Delivery Time</h2>
      <p>
        Deliveries within India typically take 3–7 business days depending on
        location.
      </p>

      <h2>Order Tracking</h2>
      <p>
        Customers will receive tracking details via email or WhatsApp once the
        order is dispatched.
      </p>

      <h2>Address Accuracy</h2>
      <p>
        Please ensure the shipping address is correct. We are not responsible
        for delays due to incorrect address information.
      </p>

      <h2>Shipping Methods</h2>
      <p>
        We use trusted courier services to ensure safe delivery of Narmadeshwar
        Shivlings, bakawan Shivlings, and other products.
      </p>

      <h2>International Shipping</h2>
      <p>
        Currently, we deliver only within India. International shipping may be
        available in the future.
      </p>

      {/* JSON-LD Structured Data */}
      <Script type="application/ld+json" id="shipping-schema">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Shipping Policy | Shubham Narmada Shivling",
          "url": "https://shubhamnarmadashivling.com/shipping-policy",
          "description":
            "Learn about shipping, delivery timelines, and tracking for Narmada Shivlings ordered from Shubham Narmada Shivling.",
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
              "https://www.facebook.com/shubhamnarmadashivling",
              "https://www.instagram.com/shubhamnarmadashivling",
              "https://www.youtube.com/@shubhamnarmadashivling",
            ]
          },
          "mainEntity": {
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How long does it take to process an order?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "All orders are processed within 1–3 business days after confirmation."
                }
              },
              {
                "@type": "Question",
                "name": "How can I track my Narmadeshwar Shivling order?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Tracking details are shared via email or WhatsApp once your order is dispatched."
                }
              },
              {
                "@type": "Question",
                "name": "Do you deliver internationally?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Currently, we deliver only within India. International shipping may be available in the future."
                }
              }
            ]
          }
        })}
      </Script>
    </main>
  );
}

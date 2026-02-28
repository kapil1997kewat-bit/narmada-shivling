import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Terms & Conditions | Shubham Narmada Shivling",
  description:
    "Read the terms and conditions for usage, purchases, and policies on Shubham Narmada Shivling website.",
  alternates: {
    canonical: "https://shubhamnarmadashivling.com/terms-conditions",
  },
  robots: "index, follow",
  openGraph: {
    title: "Terms & Conditions | Shubham Narmada Shivling",
    description:
      "Read the terms and conditions for usage, purchases, and policies on Shubham Narmada Shivling website.",
    url: "https://shubhamnarmadashivling.com/terms-conditions",
    siteName: "Shubham Narmada Shivling",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | Shubham Narmada Shivling",
    description:
      "Read the terms and conditions for usage, purchases, and policies on Shubham Narmada Shivling website.",
    images: ["/og-image.png"],
  },
};

export default function Terms() {
  return (
    <main className="container">
      <h1>Terms & Conditions | Shubham Narmada Shivling</h1>
      <p>Last updated: February 11, 2026</p>

      <h2>General</h2>
      <p>
        By using shubhamnarmadashivling.com, you agree to comply with all terms
        and policies set by Shubham Narmada Shivling. Please read carefully.
      </p>

      <h2>Products</h2>
      <p>
        All Narmada Shivlings, including bakawan and Original Shivlings, are
        natural products. Appearance, size, and color may vary slightly due to
        their natural origin.
      </p>

      <h2>Pricing</h2>
      <p>
        All prices are in Indian Rupees (INR) and are subject to change without
        prior notice.
      </p>

      <h2>Orders</h2>
      <p>
        Orders are confirmed only after payment verification. We reserve the
        right to cancel orders if discrepancies occur or due to stock issues.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        All content, images, videos, and materials on this website are owned by
        Shubham Narmada Shivling and may not be used without permission.
      </p>

    

      {/* JSON-LD Structured Data */}
      <Script type="application/ld+json" id="terms-schema">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Terms & Conditions | Shubham Narmada Shivling",
          "url": "https://shubhamnarmadashivling.com/terms-conditions",
          "description":
            "Read the terms and conditions for usage, purchases, and policies on Shubham Narmada Shivling website.",
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
              "https://www.facebook.com/share/16nQ9SpdD5/",
                  "https://www.instagram.com/narmadashivling09/",
                  "https://www.youtube.com/@narmadashivling09"
            ]
          },
          "mainEntity": {
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Are the Shivlings identical in size and appearance?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Natural Narmada Shivlings may vary slightly in size or appearance due to their natural origin."
                }
              },
              {
                "@type": "Question",
                "name": "Can prices change without notice?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, all prices are in INR and may change without prior notice."
                }
              },
              {
                "@type": "Question",
                "name": "Who owns the content on the website?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "All content, images, and materials belong to Shubham Narmada Shivling and cannot be used without permission."
                }
              }
            ]
          }
        })}
      </Script>
    </main>
  );
}

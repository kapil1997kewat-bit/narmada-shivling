import type { Metadata } from "next";
import Script from "next/script";
import FAQClient from "./FAQClient";
import { faqData } from "./faqData";

export const metadata: Metadata = {
  title: "Narmadeshwar Shivling FAQ | Asli Narmada MP",
  description:
    "असली नर्मदेश्वर शिवलिंग, बकावां मध्य प्रदेश, घर पूजा, महाकाल और ओंकारेश्वर से जुड़े सभी प्रश्नों के उत्तर।",
  alternates: {
    canonical: "https://shubhamnarmadashivling.com/faq",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Narmada Shivling FAQ – Madhya Pradesh",
    description:
      "नर्मदा नदी से प्राप्त असली शिवलिंग से जुड़े सभी महत्वपूर्ण प्रश्न।",
    url: "https://shubhamnarmadashivling.com/faq",
    siteName: "Shubham Narmada Shivling",
    locale: "hi_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Narmadeshwar Shivling FAQ",
    description:
      "घर में शिवलिंग कैसे रखें, असली कैसे पहचानें – संपूर्ण मार्गदर्शन।",
  },
};

export default function FAQPage() {

  const knowledgeGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        mainEntity: faqData.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
      {
        "@type": "Organization",
        name: "Shubham Narmada Shivling",
        url: "https://shubhamnarmadashivling.com",
        areaServed: {
          "@type": "Place",
          name: "Madhya Pradesh, India",
        },
      },
      {
        "@type": "Place",
        name: "bakawan",
        address: {
          "@type": "PostalAddress",
          addressRegion: "Madhya Pradesh",
          addressCountry: "India",
        },
      },
      {
        "@type": "Product",
        name: "Asli Narmadeshwar Shivling",
        material: "Natural Narmada River Stone",
        brand: "Shubham Narmada Shivling",
      },
    ],
  };

  return (
    <>
      <Script
        id="faq-knowledge-graph"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(knowledgeGraph),
        }}
      />

      <h1 style={{ textAlign: "center", marginTop: "40px" }}>
        नर्मदेश्वर शिवलिंग – अक्सर पूछे जाने वाले प्रश्न
      </h1>

      <FAQClient />
    </>
  );
}

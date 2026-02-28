// app/about/page.tsx

import Image from "next/image";
import Script from "next/script";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Original Narmadeshwar Shivling | bakawan MP India",
  description:
    "Buy original Narmadeshwar Shivling from bakawan & Omkareshwar, Madhya Pradesh. 100% natural Narmada River Shivling for home pooja & temple.",
  alternates: {
    canonical: "https://shubhamnarmadashivling.com/about",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Asli Narmada Shivling from bakawan MP",
    description:
      "Authentic Narmadeshwar Shivling sourced from Narmada River, Madhya Pradesh India.",
    url: "https://shubhamnarmadashivling.com/about",
    siteName: "Shubham Narmada Shivling",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://shubhamnarmadashivling.com/alok2.png",
        width: 1200,
        height: 630,
        alt: "Original Narmadeshwar Shivling from Narmada River",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Original Narmadeshwar Shivling | MP India",
    description:
      "Buy Asli Narmada Shivling for home pooja & temple installation.",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* ================= STRUCTURED DATA ================= */}

      {/* Organization + LocalBusiness */}
      <Script
        id="org-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Shubham Narmada Shivling",
            image:
              "https://shubhamnarmadashivling.com/alok2.png",
            url: "https://shubhamnarmadashivling.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "bakawan",
              addressRegion: "Madhya Pradesh",
              addressCountry: "India",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "22.2526",
              longitude: "76.1526",
            },
            sameAs: [
              "https://www.instagram.com/narmadashivling09/",
              "https://www.facebook.com/share/16nQ9SpdD5/",
              "https://www.youtube.com/@narmadashivling09"
            ],
          }),
        }}
      />

      {/* Breadcrumb */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://shubhamnarmadashivling.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "About",
                item: "https://shubhamnarmadashivling.com/about",
              },
            ],
          }),
        }}
      />

      {/* Image Schema */}
      <Script
        id="image-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageObject",
            contentUrl:
              "https://shubhamnarmadashivling.com/alok2.png",
            name: "Original Narmadeshwar Shivling",
            description:
              "Natural Narmada River Shivling from bakawan Madhya Pradesh India",
          }),
        }}
      />

      {/* FAQ Schema */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "असली नर्मदेश्वर शिवलिंग कहाँ से मिलता है?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "असली नर्मदेश्वर शिवलिंग मध्य प्रदेश के बकावां और ओंकारेश्वर क्षेत्र की पवित्र नर्मदा नदी से प्राप्त होता है।",
                },
              },
              {
                "@type": "Question",
                name: "घर में कौन सा शिवलिंग रखना शुभ होता है?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "घर के लिए प्राकृतिक नर्मदेश्वर शिवलिंग सबसे शुभ और ऊर्जा से भरपूर माना जाता है।",
                },
              },
            ],
          }),
        }}
      />

      {/* ================= CONTENT ================= */}

      <div className="about-page px-4 py-10 bg-white text-gray-800">
        <main className="container mx-auto max-w-6xl mt-24 space-y-10">

          {/* ONLY ONE H1 */}
          <h1 className="text-3xl font-bold text-center">
            Original Narmadeshwar Shivling from bakawan Narmada River Madhya Pradesh India
          </h1>

          {/* IMAGE 1 */}
          <section>
            <Image
              src="/alok2.png"
              alt="Original Narmadeshwar Shivling from bakawan Narmada River Madhya Pradesh India"
              title="Asli Narmada Shivling for Home Pooja"
              width={1200}
              height={600}
              priority
              className="w-full rounded-lg shadow-lg"
            />
          </section>

          {/* YOUR ORIGINAL CONTENT (UNCHANGED TEXT) */}
          <section className="text-lg leading-relaxed space-y-4">
           <p>
            <strong>बकावां की प्रसिद्ध Shubham Narmada Shivling Shop</strong> — यहाँ आपको
            Original Narmada Shivling, Banana Lingam, Swayambhu Shivling,
            Divya Narmada Shivling और Temple Shivling जैसे सभी प्रकार के
            शिवलिंग मिलते हैं। हम Worldwide delivery और 24×7 support प्रदान
            करते हैं ताकि हर भक्त तक भगवान शिव का आशीर्वाद पहुँच सके।
            चाहे आप Shivling for home puja चाहते हों या Shivling for temple
            installation, हमारी दुकान ही सबसे विश्वसनीय और पवित्र स्थान है।
          </p>
          <p>
            साथ ही यहाँ आपको{" "}
            <em>Janeudhari Narmada Shivling</em>,{" "}
            <em>Tilakdhari Narmada Shivling</em>,{" "}
            <em>Swayambhu Narmada Shivling</em>,{" "}
            <em>Natural Narmada Shivling</em>,{" "}
            <em>Original (100%) Narmada Shivling</em>,{" "}
            <em>Antique White Shivling</em>,{" "}
            <em>Small Shivling</em> और{" "}
            <em>Big Temple Pooja Shivling</em> भी उपलब्ध हैं। 
            हम <strong>1 इंच से लेकर 15 फीट</strong> तक के आकार में Shivling उपलब्ध कराते हैं।
          </p>
        </section>

        {/* Mission Section */}
        <section className="mission-section space-y-3">
          <h2 className="text-2xl font-semibold">📖 Our Mission</h2>
          <p className="leading-relaxed text-gray-700">
            हमारा लक्ष्य है कि <strong>Narmadeshwar Shivling</strong> की पवित्रता और
            आध्यात्मिक ऊर्जा को विश्वभर में पहुँचाया जाए।
            हम <em>Traditional Narmadeshwar Shivling export</em> और{" "}
            <em>Worldwide home delivery</em> के माध्यम से भक्तों को सुविधा और
            विश्वास प्रदान करते हैं।
            हमारी टीम हर समय उपलब्ध है ताकि आपकी भक्ति और सुविधा दोनों का ध्यान
            रखा जा सके।
          </p>
        </section>

        {/* Why Choose Us Section */}
        <section className="why-choose-section space-y-3">
          <h2 className="text-2xl font-semibold">🌍 Why Choose Us?</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>✔️ 100% Original Narmadeshwar Shivling</li>
            <li>✔️ Worldwide Delivery & 24×7 Support</li>
            <li>✔️ Wholesale & Retail Availability</li>
            <li>✔️ Trusted by thousands of devotees</li>
          </ul>
        </section>

          {/* H2 */}
          <section>
            <h2 className="text-2xl font-semibold">
              Narmada River Origin – bakawan & Omkareshwar MP
            </h2>
            <p>
              हमारे सभी Original Narmadeshwar Shivling सीधे पवित्र नर्मदा नदी
              से प्राप्त किये जाते हैं।
            </p>
          </section>

          {/* IMAGE 2 */}
          <section>
            <Image
              src="/shubham1.png"
              alt="Natural Narmada River Shivling Omkareshwar Madhya Pradesh India"
              width={1200}
              height={600}
              loading="lazy"
              className="w-full rounded-lg shadow-lg"
            />
          </section>

        </main>
      </div>
    </>
  );
}

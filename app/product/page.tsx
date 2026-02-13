"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

// 🔹 Images from public folder
const images = [
  "/IMG-20260118-WA0122.jpg",
  "/IMG-20260118-WA0123.jpg",
  "/IMG-20260118-WA0124.jpg",
  "/IMG-20260118-WA0125.jpg",
  "/IMG-20260118-WA0126.jpg",
  "/IMG-20260118-WA0129.jpg",
  "/IMG-20260118-WA0130.jpg",
  "/IMG-20260118-WA0131.jpg",
  "/IMG-20260118-WA0132.jpg",
  "/IMG-20260118-WA0133.jpg",
  "/IMG-20260118-WA0134.jpg",
  "/IMG-20260118-WA0135.jpg",
  "/IMG-20260118-WA0136.jpg",
  "/IMG-20260118-WA0140.jpg",
  "/IMG-20260118-WA0142.jpg",
  "/IMG-20260118-WA0144.jpg",
  "/IMG-20260118-WA0145.jpg",
  "/IMG-20260118-WA0146.jpg",
  "/IMG-20260118-WA0147.jpg",
  "/IMG-20260118-WA0148.jpg",
  "/IMG-20260118-WA0149.jpg",
  "/IMG-20260118-WA0150.jpg",
  "/IMG-20260118-WA0151.jpg",
  "/IMG-20260118-WA0152.jpg",
  "/IMG-20260118-WA0153.jpg",
  "/IMG-20260118-WA0154.jpg",
  "/IMG-20260118-WA0155.jpg",
  "/IMG-20260118-WA0156.jpg",
  "/IMG-20260118-WA0157.jpg",
  "/IMG-20260118-WA0158.jpg",
  "/IMG-20260118-WA0159.jpg",
  "/IMG-20260118-WA0160.jpg",
  "/IMG-20260118-WA0161.jpg",
  "/IMG-20260118-WA0162.jpg",
  "/IMG-20260118-WA0163.jpg",
  "/IMG-20260118-WA0164.jpg",
  "/IMG-20260118-WA0165.jpg",
  "/IMG-20260118-WA0166.jpg",
  "/IMG-20260118-WA0167.jpg",
  "/IMG-20260118-WA0168.jpg",
  "/IMG-20260118-WA0169.jpg",
  "/IMG-20260118-WA0170.jpg",
  "/IMG-20260118-WA0171.jpg",
  "/IMG-20260118-WA0173.jpg",
  "/IMG-20260118-WA0177.jpg",
  "/IMG-20260118-WA0185.jpg",
  "/IMG-20260118-WA0188.jpg",
  "/IMG-20260118-WA0191.jpg",
  "/60611.jpg",
  "/60607.jpg",
  "/60608.jpg",
  "/60609.jpg",
  "/60610.jpg",
  "/60612.jpg",
  "/60613.jpg",
];

// 🔹 Generate SEO alt text for each image
const generateAlt = (idx: number) => {
  const mainKeywords = [
    "Narmada Shivling",
    "Bakawa Shivling",
    "Buy Shivling Online",
    "Authentic Shivling",
    "Shiva Lingam",
    "Narmadeshwar Shivling",
    "Pooja Shivling",
    "Home Shivling",
    "Temple Shivling",
    "Spiritual Shivling",
  ];
  const longTailKeywords = [
    "for worship",
    "online India",
    "for pooja",
    "high quality for home",
    "Handmade from Narmada",
    "for meditation",
    "price",
    "online store",
    "with certificate",
    "for temple",
  ];
  const locationKeywords = [
    "in India",
    "in Maharashtra",
    "near me",
    "online delivery India",
    "Indian online",
    "for home pooja",
    "for Griha Pravesh",
    "online shop",
    "sacred for puja",
  ];

  const main = mainKeywords[idx % mainKeywords.length];
  const longTail = longTailKeywords[idx % longTailKeywords.length];
  const location = locationKeywords[idx % locationKeywords.length];

  return `${main} ${longTail} ${location} - Bakawa Narmada Shivling photo gallery`;
};

export default function ProductPage() {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);


  // Auto-slide
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 3000);
    }
    return () => {
      if (intervalRef.current !== null) {
  clearInterval(intervalRef.current);
}

    };
  }, [isPaused]);

  const handleThumbnailClick = (idx: number) => {
    setCurrent(idx);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  };

  const handleImageClick = () => {
    setLightbox(true);
    setIsPaused(true);
  };

  const handleLightboxClose = () => {
    setLightbox(false);
    setIsPaused(false);
  };

  return (
    <>
      <Head>
        <title>Buy Narmada Shivling Online | Authentic Shubham Shivling for Home & Temple</title>
        <meta
          name="description"
          content="Buy Authentic Shubham Narmada Shivling online India. Perfect for pooja, meditation, home pooja, and temple worship. High-quality spiritual Shivlings with certificate and delivery across India."
        />
        <meta
          name="keywords"
          content="Narmada Shivling, Bakawa Shivling, Buy Shivling Online, Authentic Shivling, Shiva Lingam, Narmadeshwar Shivling, Pooja Shivling, Home Shivling, Temple Shivling, Spiritual Shivling, Narmada Shivling for worship, Buy Bakawa Shivling online India, Authentic Narmadeshwar Shivling for pooja, High quality Shivling for home, Handmade Shivling from Narmada, Shiva Lingam for meditation, Bakawa Narmada Shivling price, Online store for Narmada Shivling, Narmadeshwar Shivling with certificate, Buy spiritual Shivling for temple, Narmada Shivling in India, Buy Shivling in Maharashtra, Bakawa Shivling near me, Narmada Shivling online delivery India, Indian Narmadeshwar Shivling online, Pooja items with Narmada Shivling, Narmada Shivling for home pooja, Bakawa Shivling for Griha Pravesh, Narmadeshwar Shivling online shop, Sacred Shivling for puja"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Alok Narmada Shivling" />

        {/* Social Meta */}
        <meta property="og:title" content="Narmada Shivling Gallery | Buy Authentic Bakawa Shivling" />
        <meta property="og:description" content="View and purchase authentic Bakawa Narmada Shivlings online. Perfect for home pooja, meditation, and temple worship." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={images[0]} />
        <meta property="og:url" content="https://shubham.narmada.com/product" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Narmada Shivling Online | Bakawa Shivling" />
        <meta name="twitter:description" content="High-quality Bakawa Narmada Shivling collection online. Ideal for home pooja, meditation, and temple worship." />
        <meta name="twitter:image" content={images[0]} />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Bakawa Narmada Shivling",
              image: images.map((img) => `https://shubham.narmada.com${img}`),
              description:
                "Authentic Bakawa Narmada Shivling available online for pooja, meditation, home worship, and temple rituals. High-quality spiritual Shivlings with certificate and fast delivery across India.",
              brand: { "@type": "Brand", name: "Alok Narmada Shivling" },
              offers: {
                "@type": "Offer",
                url: "https://shubham.narmada.com/product",
                priceCurrency: "INR",
                price: "1000.00",
                availability: "https://schema.org/InStock",
              },
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Where can I buy authentic Bakawa Narmada Shivling online?",
                  acceptedAnswer: { "@type": "Answer", text: "You can buy authentic Bakawa Narmada Shivling online from Alok Narmada Shivling official website with certificate and fast delivery across India." },
                },
                {
                  "@type": "Question",
                  name: "Can I use Narmada Shivling for home pooja and meditation?",
                  acceptedAnswer: { "@type": "Answer", text: "Yes, Bakawa Narmada Shivling is perfect for home pooja, meditation, temple worship, and spiritual rituals." },
                },
                {
                  "@type": "Question",
                  name: "Do you provide delivery across India?",
                  acceptedAnswer: { "@type": "Answer", text: "Yes, we provide fast and safe delivery of authentic Bakawa Narmada Shivlings anywhere in India." },
                },
              ],
            }),
          }}
        />
      </Head>

      <main className="product-page">
        <h1 className="page-header">🕉️ Authentic Bakawa Narmada Shivlings Online</h1>

        <p className="intro">
  Explore our exclusive collection of 
  <span> Narmada Shivlings</span>. 
  Perfect for home pooja, meditation, temple worship, 
  and spiritual rituals.
</p>


        <div className="slider">
        <Image
  src={images[current]}
  alt={generateAlt(current)}
  width={400}
  height={400}
  sizes="(max-width: 768px) 100vw, 800px"
  priority
  onClick={handleImageClick}
  className="slider-image"
/>

        </div>

        <div className="thumbnails">
          {images.map((img, idx) => (
            <div key={idx} className={`thumb ${idx === current ? "active" : ""}`} onClick={() => handleThumbnailClick(idx)}>
              <Image src={img} alt={generateAlt(idx)} width={80} height={80} className="thumb-image" />
            </div>
          ))}
        </div>

        {lightbox && (
          <div className="lightbox" onClick={handleLightboxClose}>
            <Image src={images[current]} alt={generateAlt(current)} width={1200} height={900} className="lightbox-image" />
          </div>
        )}

        {/* CTA */}
        <h2 className="sub-header">Order Your Narmada Shivling Today</h2>
        <p className="cta-text">Bring home spiritual positivity with authentic Bakawa Narmada Shivling. Fast delivery across India!</p>
        <button className="cta-button" onClick={() => window.location.href="/contact"}>🛒 Buy Now</button>

        {/* FAQ Section */}
       
        <style jsx>{`
  .product-page {
    font-family: Arial, sans-serif;
    padding: 1rem;
    background: #fff8f0;
    text-align: center;

    max-width: 100%;
    overflow-x: hidden;
  }

  .page-header {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .intro {
    font-size: 1rem;
    margin-bottom: 1.2rem;
    color: #333;
  }

  /* 🔥 MAIN FIX — Slider image control */
  .slider-image {
    width: 100%;
    max-width: 650px;   /* ⭐ IMAGE SIZE CONTROL */
    height: auto;
    margin: auto;
    display: block;

    border-radius: 12px;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(0,0,0,0.25);
  }

  .thumbnails {
    display: flex;
    overflow-x: auto;
    gap: 0.6rem;
    padding-bottom: 0.5rem;
    margin-bottom: 1.5rem;
  }

  .thumb {
    min-width: 70px;
    height: 70px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid transparent;
    flex-shrink: 0;
  }

  .thumb.active {
    border: 2px solid #ff9800;
    transform: scale(1.08);
  }

  .thumb-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .lightbox {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }

  .lightbox-image {
    max-width: 92%;
    max-height: 92%;
    border-radius: 12px;
  }

  .sub-header {
    font-size: 1.5rem;
    margin-top: 1.5rem;
    margin-bottom: 0.8rem;
    color: #111;
  }

  .cta-text {
    font-size: 1rem;
    margin-bottom: 0.8rem;
    color: #222;
  }

  .cta-button {
    background-color: #ff9800;
    color: #fff;
    border: none;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.2s;
  }

  .cta-button:hover {
    transform: scale(1.05);
  }

  .faq {
    text-align: left;
    max-width: 700px;
    margin: 1rem auto;
  }

  details {
    margin-bottom: 0.6rem;
    cursor: pointer;
  }

  summary {
    font-weight: bold;
  }

  /* ⭐ MOBILE TUNING */
  @media (max-width: 768px) {
    .page-header {
      font-size: 1.5rem;
    }

    .thumb {
      min-width: 60px;
      height: 60px;
    }

    .slider-image {
      max-width: 95%;
    }
  }
`}</style>

      </main>
    </>
  );
}

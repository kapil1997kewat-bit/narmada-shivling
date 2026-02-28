"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

const images = [
  "/asli-narmadeshwar-shivling-madhya-pradesh-1.jpg",
  "/asli-narmada-shivling-natural-stone-2.jpg",
  "/narmadeshwar-shivling-for-home-temple-3.jpg",
  "/sacred-narmada-river-shivling-4.jpg",
  "/original-narmadeshwar-shivling-india-5.jpg",
  "/premium-narmada-shivling-pooja-6.jpg",
  "/authentic-narmadeshwar-shivling-7.jpg",
  "/natural-narmada-stone-shivling-8.jpg",
  "/handpicked-narmadeshwar-shivling-9.jpg",
  "/narmada-river-original-shivling-10.jpg",
  "/madhya-pradesh-narmadeshwar-shivling-11.jpg",
  "/holy-narmada-shivling-stone-12.jpg",
  "/pooja-narmadeshwar-shivling-13.jpg",
  "/temple-quality-narmada-shivling-14.jpg",
  "/spiritual-narmadeshwar-shivling-15.jpg",
  "/genuine-narmada-river-shivling-16.jpg",
  "/natural-black-narmadeshwar-shivling-17.jpg",
  "/authentic-mp-narmada-shivling-18.jpg",
  "/worship-narmadeshwar-shivling-19.jpg",
  "/original-bakawan-narmada-shivling-20.jpg",
  "/sacred-stone-narmadeshwar-shivling-21.jpg",
  "/pure-narmada-river-shivling-22.jpg",
  "/devotional-narmadeshwar-shivling-23.jpg",
  "/high-quality-narmada-shivling-24.jpg",
  "/traditional-narmadeshwar-shivling-25.jpg",
  "/mp-original-narmada-shivling-26.jpg",
  "/pooja-stone-narmadeshwar-27.jpg",
  "/natural-river-stone-shivling-28.jpg",
  "/sacred-narmada-pooja-shivling-29.jpg",
  "/spiritual-madhya-pradesh-shivling-30.jpg",
  "/authentic-narmada-temple-shivling-31.jpg",
  "/black-narmadeshwar-shivling-32.jpg",
  "/holy-natural-narmada-shivling-33.jpg",
  "/genuine-mp-narmadeshwar-34.jpg",
  "/shiv-pooja-narmada-shivling-35.jpg",
  "/narmadeshwar-shivling-india-36.jpg",
  "/natural-sacred-shivling-37.jpg",
  "/original-narmada-stone-38.jpg",
  "/bakawan-narmadeshwar-shivling-39.jpg",
  "/mp-narmada-river-shivling-40.jpg",
  "/premium-natural-shivling-41.jpg",
  "/authentic-river-narmadeshwar-42.jpg",
  "/temple-sthapana-narmada-shivling-43.jpg",
  "/natural-devotional-shivling-44.jpg",
  "/sacred-mp-narmadeshwar-45.jpg",
  "/original-natural-narmada-stone-46.jpg",
  "/high-polish-narmadeshwar-shivling-47.jpg",
  "/genuine-sacred-narmada-shivling-48.jpg",
  "/natural-narmadeshwar-49.jpg",
  "/original-narmada-shivling-50.jpg",
  "/authentic-narmadeshwar-51.jpg",
  "/sacred-river-shivling-52.jpg",
  "/pure-natural-narmada-53.jpg",
  "/temple-grade-narmadeshwar-54.jpg",
  "/spiritual-original-shivling-55.jpg",
];
// 🔹 Generate SEO alt text for each image

const generateAlt = (idx: number) => {
  const mainKeywords = [
    "Asli Narmadeshwar Shivling",
    "Natural Narmada Shivling",
    "Authentic bakawan Shivling",
    "Sacred Narmada River Shivling",
    "Original Shiva Lingam",
    "Handpicked Narmadeshwar Shivling",
    "Traditional Pooja Shivling",
    "Spiritual Home Shivling",
    "Temple Grade Narmada Shivling",
"Narmada Shivling", 
"Narmadeshwar Shivling", 
"bakawan Narmadeshwar Shivling", 
"Original Narmada Shivling", 
"Asli Narmada Shivling", 
"Natural Narmadeshwar Stone Madhya Pradesh", 
"Shivling for Home Pooja", 
"Ghar Me Shivling Sthapana", 
"Narmadeshwar Shivling Price", 
"Buy Original Shivling Online India", 
"Narmada River Shivling MP", 
"Omkareshwar Jyotirlinga Shivling", 
"Mahakal Ujjain Shivling", 
"Jyotirlinga Madhya Pradesh", 
"Temple Travel Ujjain Indore", 
"Spiritual Tourism Madhya Pradesh", 
"Shivling Photo Gallery", 
"Shivling Darshan Video", 
"Shiv Puja Vidhi Guide", 
"Mahadev Bhakti", 
"Vedic Spiritual Knowledge", 
"Hindu Temple Information", 
"Authentic Narmada Shivling Article", 
"Natural Stone Shivling India", 
"Narmada Stone Benefits", 
"Shivling History India",
  ];

  const longTailKeywords = [
    "from Madhya Pradesh",
    "natural river stone",
    "for home temple",
    "for daily pooja",
    "for meditation",
    "for mandir sthapana",
    "sacred stone form",
    "for spiritual worship",
    "authentic natural form",
  ];

  const locationKeywords = [
    "India",
    "Narmada River region",
    "Madhya Pradesh India",
    "holy river Narmada",
    "traditional Indian worship",
    "Hindu pooja rituals",
    "devotional use",
    "sacred spiritual practice",
  ];

  const main = mainKeywords[idx % mainKeywords.length];
  const longTail = longTailKeywords[idx % longTailKeywords.length];
  const location = locationKeywords[idx % locationKeywords.length];

  return `${main} ${longTail} ${location} – Image ${idx + 1}`;
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
          content="Narmada Shivling, bakawan Shivling, Buy Shivling Online, Authentic Shivling, Shiva Lingam, Narmadeshwar Shivling, Pooja Shivling, Home Shivling, Temple Shivling, Spiritual Shivling, Narmada Shivling for worship, Buy bakawan Shivling online India, Authentic Narmadeshwar Shivling for pooja, High quality Shivling for home, Handmade Shivling from Narmada, Shiva Lingam for meditation, bakawan Narmada Shivling price, Online store for Narmada Shivling, Narmadeshwar Shivling with certificate, Buy spiritual Shivling for temple, Narmada Shivling in India, Buy Shivling in Maharashtra, bakawan Shivling near me, Narmada Shivling online delivery India, Indian Narmadeshwar Shivling online, Pooja items with Narmada Shivling, Narmada Shivling for home pooja, bakawan Shivling for Griha Pravesh, Narmadeshwar Shivling online shop, Sacred Shivling for puja"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Alok Narmada Shivling" />

        {/* Social Meta */}
        <meta property="og:title" content="Narmada Shivling Gallery | Buy Authentic bakawan Shivling" />
        <meta property="og:description" content="View and purchase authentic bakawan Narmada Shivlings online. Perfect for home pooja, meditation, and temple worship." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={images[0]} />
        <meta property="og:url" content="https://shubham.narmada.com/product" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Narmada Shivling Online | bakawan Shivling" />
        <meta name="twitter:description" content="High-quality bakawan Narmada Shivling collection online. Ideal for home pooja, meditation, and temple worship." />
        <meta name="twitter:image" content={images[0]} />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "bakawan Narmada Shivling",
              image: images.map((img) => `https://shubham.narmada.com${img}`),
              description:
                "Authentic bakawan Narmada Shivling available online for pooja, meditation, home worship, and temple rituals. High-quality spiritual Shivlings with certificate and fast delivery across India.",
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
                  name: "Where can I buy authentic bakawan Narmada Shivling online?",
                  acceptedAnswer: { "@type": "Answer", text: "You can buy authentic bakawan Narmada Shivling online from Alok Narmada Shivling official website with certificate and fast delivery across India." },
                },
                {
                  "@type": "Question",
                  name: "Can I use Narmada Shivling for home pooja and meditation?",
                  acceptedAnswer: { "@type": "Answer", text: "Yes, bakawan Narmada Shivling is perfect for home pooja, meditation, temple worship, and spiritual rituals." },
                },
                {
                  "@type": "Question",
                  name: "Do you provide delivery across India?",
                  acceptedAnswer: { "@type": "Answer", text: "Yes, we provide fast and safe delivery of authentic bakawan Narmada Shivlings anywhere in India." },
                },
              ],
            }),
          }}
        />
      </Head>

      <main className="product-page">
        <h1 className="page-header">🕉️ Authentic bakawan Narmada Shivlings Online</h1>

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
        <p className="cta-text">Bring home spiritual positivity with authentic bakawan Narmada Shivling. Fast delivery across India!</p>
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

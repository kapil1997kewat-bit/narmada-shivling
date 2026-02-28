"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head"; // ✅ SEO Add

/* ================= AUTO SLIDER IMAGES ================= */
const images = [
  "/60607.jpg",
  "/60608.jpg",
  "/60609.jpg",
  "/60610.jpg",
  "/60611.jpg",
  "/60612.jpg",
];

export default function BlogPage() {
  const sliderRef = useRef<HTMLDivElement>(null);

  /* ================= AUTO SLIDE LOGIC ================= */
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let index = 0;

    const interval = setInterval(() => {
      index++;
      if (index >= images.length) index = 0;

      slider.scrollTo({
        left: slider.clientWidth * index,
        behavior: "smooth",
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ===== SEO META + JSON-LD ADD-ON ===== */}
      <Head>
        <title>
          Blog | Shubham Narmada Shivling | Spiritual Knowledge & Shivling Info
        </title>

        <meta
          name="description"
          content="Read authentic blogs about Shubham Narmada Shivling, Narmadeshwar Shivling, पूजा विधि, spiritual knowledge, and temple/home installation tips."
        />

        {/* 100+ SEO Keywords */}
        <meta
          name="keywords"
          content="
          shubham narmada shivling,narmada shivling blog,shivling blog,
          narmadeshwar shivling knowledge,shivling puja vidhi,
          bakawa shivling,narmada river shivling,
          spiritual blog india,hindu dharm blog,
          shiv puja guide,mahadev worship,
          original shivling information,
          natural shivling benefits,
          swayambhu shivling blog,
          janeudhari shivling,
          temple shivling guide,
          home puja shivling tips,
          authentic shivling article,
          shivling history india,
          vedic spirituality blog,
          mahakal bhakti,
          bholenath blog,
          narmada stone article,
          religious knowledge site,
          hindu temple info,
          shiv devotion content,
          puja samagri blog,
          spiritual ecommerce blog
          "
        />

        {/* Canonical */}
        <link rel="canonical" href="https://shubhamnarmadashivling.com/blog" />

        {/* Robots */}
        <meta name="robots" content="index, follow" />

        {/* OpenGraph */}
        <meta property="og:title" content="Shubham Narmada Shivling Blog" />
        <meta property="og:description" content="Authentic spiritual blogs about Narmadeshwar Shivling and Hindu worship." />
        <meta property="og:url" content="https://shubhamnarmadashivling.com/blog" />
        <meta property="og:type" content="website" />

        {/* JSON-LD Schema for BlogPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              name: "Shubham Narmada Shivling Blog",
              url: "https://shubhamnarmadashivling.com/blog",
              description:
                "Spiritual and informational blogs about Narmadeshwar Shivling, Hindu worship and rituals.",
              publisher: {
                "@type": "Organization",
                name: "Shubham Narmada Shivling",
                logo: "https://shubhamnarmadashivling.com/logo.png"
              },
              mainEntityOfPage: "https://shubhamnarmadashivling.com/blog"
            }),
          }}
        />
      </Head>

      {/* ===== ORIGINAL PAGE CONTENT UNCHANGED ===== */}
      <main className="container blog-container">

        {/* HERO */}
        <section className="hero text-center mb-8">
          <h1 className="blog-heading bounce text-3xl md:text-5xl font-bold">
            🕉️ शुभम नर्मदा शिवलिंग ब्लॉग
          </h1>
          <p className="subtitle text-lg opacity-70 mt-2">
            शुद्ध नर्मदेश्वर शिवलिंग • आध्यात्मिक जानकारी • पूजा विधि
            <br/>
            ✨ बकावा से प्राप्त शुद्ध और पवित्र नर्मदेश्वर शिवलिंग ✨
            <br/>
            ✨ अलोक एवं शुभम नर्मदा शिवलिंग ✨
            <br/>
            ✨ ऑरिजिनल शिवलिंग प्राप्त करने के लिए तुरंत संपर्क करें ✨
            <br/>
            ✨ नर्मदा से सीधे प्राप्त विशेष शिवलिंग ✨
          </p>
        </section>

        {/* SLIDESHOW */}
        <section className="w-screen overflow-hidden relative">
          <div
            ref={sliderRef}
            className="slides flex overflow-x-auto scroll-smooth scrollbar-none"
          >
            {images.map((src, i) => (
              <div
                key={i}
                className="slide relative flex-shrink-0 w-screen h-[80vh] md:h-[100vh]"
              >
                <Image
                  src={src}
                  alt="Original Narmadeshwar Shivling spiritual stone"
                  fill
                  sizes="100vw"
                  priority={i === 0}
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>

          {/* Caption Overlay */}
          <div className="absolute inset-0 flex items-end justify-center pb-12">
            <div className="max-w-7xl w-full px-4 text-center">
              <p className="slide-caption text-orange-500 font-semibold text-lg md:text-3xl bg-black bg-opacity-30 rounded-md inline-block px-4 py-3">
                
              </p>
            </div>
          </div>
        </section>

        {/* BLOG GRID */}
        <section className="blog-grid grid gap-6 md:grid-cols-3">
          {[
            { slug: "bakawa-narmada-shivling", title: "🕉️ बकावा नर्मदा शिवलिंग का महत्व" },
            { slug: "home-pooja-narmada-shivling", title: "🕉️ घर में नर्मदा शिवलिंग की पूजा" },
            { slug: "janeudhari-narmada-shivling", title: "🕉️ जनेऊधारी नर्मदा शिवलिंग क्या है?" },
            { slug: "narmada-kankar-kya-hai", title: "🕉️ नर्मदा कंकर क्या होता है?" },
            { slug: "narmada-shivling-ka-pauranik-itihas", title: "🕉️ नर्मदा शिवलिंग का पौराणिक इतिहास" },
            { slug: "narmadeshwar-shivling-prachin-itihas", title: "🕉️ नर्मदेश्वर शिवलिंग का प्राचीन इतिहास" },
            { slug: "narmadeshwar-shivling-itihas-katha-mahatva", title: "🕉️ नर्मदेश्वर शिवलिंग – इतिहास, कथा और महत्व" },
            { slug: "narmada-nadi-se-shivling-kaise-nikalte-hain", title: "🕉️ नर्मदा नदी से शिवलिंग कैसे निकलते हैं" },
            { slug: "narmada-shivling-kyun-chune", title: "🕉️ नर्मदा शिवलिंग ही क्यों चुनें" },
            { slug: "natural-narmada-shivling-kya-hai", title: "🕉️ Natural Narmada Shivling क्या है?" },
            { slug: "original-narmadeshwar-shivling-kya-hai", title: "🕉️ Original Narmadeshwar Shivling क्या है?" },
            { slug: "asli-narmadeshwar-shivling-aur-kiemat", title: "🕉️ असली नर्मदेश्वर शिवलिंग और कीमत" },
            { slug: "asli-narmada-shivling-ki-pahchan-aur-mandir-mein-sthapna", title: "🕉️ असली शिवलिंग की पहचान और स्थापना" },
          ].map((blog) => (
            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className="blog-card p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition"
            >
              <h2 className="font-semibold text-lg">{blog.title}</h2>
              <span className="text-orange-500 mt-1 inline-block">पूरा पढ़ें →</span>
            </Link>
          ))}
        </section>

        {/* CTA */}
        <section className="cta text-center mt-12 p-6 bg-gray-100 rounded-lg">
          <h2 className="bounce text-2xl md:text-3xl font-bold mb-2">
            📞 Original Shivling के लिए संपर्क करें
          </h2>
          <p className="mb-4">नर्मदा से सीधे प्राप्त शुद्ध नर्मदेश्वर शिवलिंग</p>
          <div className="cta-buttons flex justify-center gap-4">
            <a href="tel:+919630893459" className="btn btn-call px-6 py-3 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition">
              Call Now
            </a>
            <a
              href="https://wa.me/919630893459"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa px-6 py-3 rounded-md text-white bg-green-600 hover:bg-green-700 transition"
            >
              WhatsApp
            </a>
          </div>
        </section>

      </main>
    </>
  );
}

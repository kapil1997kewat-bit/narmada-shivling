"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function HomeClient() {
  const [hideHeader, setHideHeader] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 100) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }
      setLastScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>Shubham Narmada Shivling – Original & Authentic Shivlings</title>
        <meta
          name="description"
          content="Buy Original Narmada Shivling directly from Narmada River. Explore Janeu Dhari, Bakawa, Temple, Natural Shivlings. Contact via Call or WhatsApp."
        />
        <meta
          name="keywords"
          content="Shubham Narmada Shivling, Narmadeshwar Shivling, Janeu Dhari Shivling, Bakawa Shivling, Temple Shivling, Natural Shivling, Narmada Kankar, Shivling Puja, Authentic Shivling, Narmada Shivling Online, Buy Shivling, Shivling Home Temple, Original Narmada Stone, Shubham Shivling, Shivling India, Sacred Shivling, Puja Shivling, Large Shivling, Narmada Stone Shivling, Religious Shivling, Narmadeshwar Stone, Spiritual Shivling, Home Puja Shivling, Shivling Shop, Narmada Shivling Price, Narmadeshwar Purchase, Divine Shivling, Special Shivling, Unique Shivling, Temple Installation Shivling, Panchayat Shivling, Hindu Shivling, Puja Items Shivling, Online Shivling, Authentic Narmadeshwar, Rare Shivling, Shivling Collection, Sacred Stone, Original Stone Shivling, Shubham Collection, Narmada Stone Online, Pure Shivling, Holy Shivling, Narmadeshwar Stone, Buy Authentic Shivling, Shivling Export, Narmada River Stone, Religious Stone, Spiritual Stone, Hindu Temple Shivling"
        />
      </Head>

      <main className="container mx-auto px-4 mt-24">
        {/* IMAGE 1 FULL WIDTH */}
        <section className="mb-8 w-full">
          <Image
            src="/alok2.png"
            alt="Special Narmada Shivling Top"
            width={1200}
            height={600}
            className="w-full h-auto object-cover rounded-lg"
            priority
            style={{ width: "100%", height: "auto" }}
          />
        </section>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {[
            {
              title: "Janeu Dhari Narmada Shivling",
              href: "/blog/janeudhari-narmada-shivling",
              img: "/60607.jpg",
              alt: "Janeu Dhari Original Narmada Shivling for Puja",
            },
            {
              title: "Original Narmadeshwar Shivling",
              href: "/blog/original-narmadeshwar-shivling-kya-hai",
              img: "/60608.jpg",
              alt: "Original Narmadeshwar Shivling from Narmada River",
            },
            {
              title: "Natural Narmada Shivling",
              href: "/blog/natural-narmada-shivling-kya-hai",
              img: "/60609.jpg",
              alt: "Natural Narmada Shivling for Home and Temple",
            },
            {
              title: "Banana Shape Shivling",
              href: "/blog/narmada-kankar-kya-hai",
              img: "/60610.jpg",
              alt: "Banana Shape Narmada Shivling (Narmada Kankar)",
            },
            {
              title: "Bakawa Special Shivling",
              href: "/blog/bakawa-narmada-shivling",
              img: "/60611.jpg",
              alt: "Bakawa Special Original Narmada Shivling",
            },
            {
              title: "Temple Puja Shivling",
              href: "/blog/asli-narmada-shivling-ki-pahchan-aur-mandir-mein-sthapna",
              img: "/60612.jpg",
              alt: "Large Temple Narmada Shivling 5 to 15 Feet",
            },
          ].map((card, i) => (
            <div key={i} className="card bg-white shadow rounded-lg overflow-hidden">
              <div className="card-header p-2 font-semibold">{card.title}</div>
              <div className="img-wrap w-full">
                <Link href={card.href}>
                  <Image
                    src={card.img}
                    alt={card.alt}
                    width={300}
                    height={300}
                    className="w-full h-auto object-cover"
                    style={{ width: "100%", height: "auto" }}
                  />
                </Link>
              </div>
              <div className="card-body p-2 flex justify-center gap-4">
                <a className="btn btn-call bg-blue-600 text-white px-4 py-2 rounded" href="tel:+919630893459">
                  Call
                </a>
                <a
                  className="btn btn-wa bg-green-500 text-white px-4 py-2 rounded"
                  href="https://wa.me/919630893459"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* IMAGE 2 FULL WIDTH */}
        <section className="mb-8 w-full">
          <Image
            src="/shubham1.png"
            alt="Special Narmada Shivling Bottom"
            width={1200}
            height={600}
            className="w-full h-auto object-cover rounded-lg"
            priority
            style={{ width: "100%", height: "auto" }}
          />
        </section>

        {/* CTA */}
        <section id="contact" className="cta text-center mb-12">
          <h2 className="bounce text-2xl font-bold mb-2">
            📞 Original Shivling के लिए संपर्क करें
          </h2>
          <p className="mb-4">नर्मदा से सीधे प्राप्त शुद्ध नर्मदेश्वर शिवलिंग</p>
          <div className="cta-buttons flex justify-center gap-4 flex-wrap">
            <a href="tel:+919630893459" className="btn btn-call bg-blue-600 text-white px-6 py-2 rounded">
              Call Now
            </a>
            <a
              href="https://wa.me/919630893459"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa bg-green-500 text-white px-6 py-2 rounded"
            >
              WhatsApp
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

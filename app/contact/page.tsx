"use client";

import { useState } from "react";
import Head from "next/head";

export default function ContactPage() {
  const [enquiry, setEnquiry] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const text = `📩 New Enquiry\n
👤 Name: ${enquiry.name}
📞 Phone: ${enquiry.phone}
💬 Message: ${enquiry.message}`;

    window.open(
      `https://wa.me/919630893459?text=${encodeURIComponent(text)}`,
      "_blank"
    );

    setEnquiry({ name: "", phone: "", message: "" });
  };

  const handleShare = () => {
    const url = window.location.href;
    const text = `Check this website 👉 ${url}`;

    if (navigator.share) {
      navigator.share({ title: "Shubham Narmada Shivling", text, url });
    } else {
      window.open(
        `https://wa.me/?text=${encodeURIComponent(text)}`,
        "_blank"
      );
    }
  };

  const seoKeywords = [
    "shubham narmada shivling",
    "narmada shivling",
    "shivling",
    "original narmadeshwar shivling",
    "home pooja shivling",
    "temple shivling",
    "natural narmada shivling",
    "narmadeshwar shivling contact",
    "buy shivling online",
    "spiritual shivling india",
    "bholenath worship",
    "mahadev bhakti",
    "narmada river shivling",
    "shubhamnarmadashivling.com",
  ].join(",");

  return (
    <>
      {/* ===== SEO HEAD ===== */}
      <Head>
        <title>Contact | Shubham Narmada Shivling – Enquiry & Support</title>
        <meta
          name="description"
          content="Contact Shubham Narmada Shivling for original Narmadeshwar Shivling, home or temple installation, worldwide shipping and 24x7 support."
        />
        <meta name="keywords" content={seoKeywords} />
        <link rel="canonical" href="https://shubhamnarmadashivling.com/contact" />
        <meta name="robots" content="index, follow" />

        {/* OpenGraph */}
        <meta property="og:title" content="Contact | Shubham Narmada Shivling" />
        <meta
          property="og:description"
          content="Contact us to get original Narmadeshwar Shivling, spiritual guidance, and worldwide shipping."
        />
        <meta property="og:url" content="https://shubhamnarmadashivling.com/contact" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact | Shubham Narmada Shivling" />
        <meta
          name="twitter:description"
          content="Contact us to get original Narmadeshwar Shivling, spiritual guidance, and worldwide shipping."
        />

        {/* JSON-LD Schema: Organization + ContactPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contact Shubham Narmada Shivling",
              "url": "https://shubhamnarmadashivling.com/contact",
              "description": "Get in touch with Shubham Narmada Shivling for original Narmadeshwar Shivling, home and temple installation, and worldwide support.",
              "publisher": {
                "@type": "Organization",
                "name": "Shubham Narmada Shivling",
                "logo": "https://shubhamnarmadashivling.com/alok2.png",
                "sameAs": [
                  "https://www.facebook.com/share/16nQ9SpdD5/",
                  "https://www.instagram.com/narmadashivling09/",
                  "https://www.youtube.com/@narmadashivling09"
                ]
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+919630893459",
                  "contactType": "customer support",
                  "areaServed": "IN",
                  "availableLanguage": ["Hindi", "English"]
                },
                {
                  "@type": "ContactPoint",
                  "telephone": "+918103316882",
                  "contactType": "customer support",
                  "areaServed": "IN",
                  "availableLanguage": ["Hindi", "English"]
                }
              ]
            }),
          }}
        />
      </Head>

      {/* ===== ORIGINAL CONTACT PAGE CONTENT ===== */}
      <main className="contact-page">
        {/* --- Contact Cards --- */}
        <section className="contact-wrapper">
          <div className="contact-card">
            <h2>📞 Contact – Alok Kewat</h2>
            <p><strong>📍 Address:</strong> bakawan, MP – 451113</p>
            <p><strong>📞 Phone:</strong> <a href="tel:+919630893459">9630893459</a></p>
            <p><strong>📧 Email:</strong> <a href="mailto:Alokkewat1234@gmail.com">Alokkewat1234@gmail.com</a></p>
            <p><strong>🕒 Availability:</strong> 24×7</p>
            <div className="badges">
              <span className="badge gold">🌍 Worldwide Shipping</span>
              <span className="badge aqua">💎 Best Quality</span>
              <span className="badge orange">🤝 24/7 Support</span>
            </div>
          </div>

          <div className="contact-card">
            <h2>📞 Contact – Shubham Kewat</h2>
            <p><strong>📍 Address:</strong> bakawan, MP – 451113</p>
            <p><strong>📞 Phone:</strong> <a href="tel:+918103316882">8103316882</a></p>
            <p><strong>📧 Email:</strong> <a href="mailto:Kapil1997kewat@gmail.com">Kapil1997kewat@gmail.com</a></p>
            <p><strong>🕒 Availability:</strong> 24×7</p>
            <div className="badges">
              <span className="badge gold">🌍 Worldwide Shipping</span>
              <span className="badge aqua">💎 Premium Service</span>
              <span className="badge orange">🤝 Dedicated Support</span>
            </div>
          </div>
        </section>

        {/* --- Enquiry & Share Cards Side by Side --- */}
        <section className="contact-wrapper">
          {/* Enquiry Form */}
          <div className="contact-card enquiry-card">
            <h2>📩 Send Your Enquiry</h2>
            <form onSubmit={handleSubmit}>
              <input
                required
                placeholder="Your Name"
                value={enquiry.name}
                onChange={(e) => setEnquiry({ ...enquiry, name: e.target.value })}
              />
              <input
                required
                placeholder="Phone Number"
                value={enquiry.phone}
                onChange={(e) => setEnquiry({ ...enquiry, phone: e.target.value })}
              />
              <textarea
                required
                placeholder="Your Message"
                value={enquiry.message}
                onChange={(e) => setEnquiry({ ...enquiry, message: e.target.value })}
              />
              <button type="submit">Submit</button>
            </form>
          </div>

          {/* Like & Share Card */}
          <div className="contact-card share-card">
            <h2>Share</h2>
            <p className="share-text">
              आप इस साइट को अपने मित्रों और शिवलिंग खरीदने वालों के साथ शेयर करें और नर्मदा के असली शिवलिंग अपने घर लाएँ! 🙏🕉️
            </p>
            <button onClick={handleShare}>📲 Share This Website</button>
          </div>
        </section>

        {/* --- Styles --- */}
        <style jsx>{`
          .contact-page {
            min-height: 100vh;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: #fff;
            padding: 2rem;
          }

          .contact-wrapper {
            display: flex;
            flex-wrap: wrap;
            gap: 2rem;
            justify-content: center;
            width: 100%;
            max-width: 1200px;
            margin-bottom: 2rem;
          }

          .contact-card {
            flex: 1 1 300px;
            max-width: 350px;
            background-color: #fff8f0;
            padding: 1.5rem;
            border-radius: 1rem;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            color: #006400;
            font-weight: bold;
            text-align: center;
            transition: transform 0.3s ease;
          }

          .contact-card:hover { transform: translateY(-5px); }
          .contact-card h2 { font-size: 1.3rem; margin-bottom: 1rem; color: #008000; }
          .contact-card p { margin: 0.5rem 0; }
          .contact-card a { color: #006400; text-decoration: none; font-weight: bold; }

          .badges { margin-top: 1rem; display: flex; flex-wrap: wrap; gap: 0.5rem; justify-content: center; }
          .badge { padding: 0.3rem 0.6rem; border-radius: 0.5rem; font-size: 0.9rem; font-weight: 500; color: #fff; }
          .badge.gold { background-color: #ffd700; color: #000; }
          .badge.aqua { background-color: #00bcd4; }
          .badge.orange { background-color: #ff9800; }

          .enquiry-card input,
          .enquiry-card textarea,
          .share-card button {
            width: 100%;
            padding: 0.7rem;
            margin: 0.5rem 0;
            border-radius: 0.5rem;
            border: 1px solid #ccc;
            font-weight: bold;
          }

          .enquiry-card button,
          .share-card button {
            background-color: #008000;
            color: #fff;
            border: none;
            cursor: pointer;
            transition: background 0.3s ease;
          }

          .enquiry-card button:hover,
          .share-card button:hover {
            background-color: #006400;
          }

          @media (max-width: 768px) {
            .contact-wrapper { flex-direction: column; align-items: center; }
            .contact-card { width: 90%; }
          }
        `}</style>
      </main>
    </>
  );
}

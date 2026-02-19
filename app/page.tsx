"use client";

import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function HomePage() {
  const cards = [
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
  ];

  // Extra images with overlay text
  const extraImages = [
    {
      title: "क्या यहाँ से खरीदा गया शिवलिंग असली होता है?",
      subtitle:
        "Shubham Narmada Shivling केवल वास्तविक नर्मदेश्वर पत्थर से बने शिवलिंग प्रदान करता है।",
      img: "/image1.jpg",
    },
    {
      title: "ऑर्डर करने की प्रक्रिया क्या है?",
      subtitle:
        "आप वेबसाइट या संपर्क माध्यम के जरिए उपलब्ध आकार चुनकर ऑर्डर कर सकते हैं।",
      img: "/image2.jpg",
    },
    {
      title: "क्या पूरे भारत में डिलीवरी उपलब्ध है?",
      subtitle:
        "Shubham Narmada Shivling भारत के अधिकांश स्थानों पर सुरक्षित शिपिंग सुविधा प्रदान करता है।",
      img: "/image3.jpg",
    },
    {
      title: "क्या शिवलिंग सुरक्षित पैकिंग में भेजा जाता है?",
      subtitle:
        "हाँ, हर शिवलिंग को सुरक्षित पैकिंग में भेजा जाता है।",
      img: "/image4.jpg",
    },
  ];

  return (
    <>
      <Head>
        <title>Shubham Narmada Shivling – Original & Authentic Shivlings</title>
        <meta
          name="description"
          content="Buy Original Narmada Shivling directly from Narmada River. Explore Janeu Dhari, Bakawa, Temple, Natural Shivlings. Contact via Call or WhatsApp."
        />
        <meta 
name="keywords" 
content="narmada shivling, narmada shivling price, narmada shivling for home, original narmada shivling, bakawa shivling, shivling bakawa, narmadeshwar shivling, narmadeshwar mahadev, narmadeshwar shivling price, narmadeshwar shivling original, narmadeshwar shivling benefits, how to identify original narmadeshwar shivling, narmadeshwar shivling for home, big size narmadeshwar shivling, natural narmadeshwar shivling, narmada river shivling, narmada kankar shivling, ujjain shivling, omkareshwar shivling, narmadeshwar shivling in ujjain, narmadeshwar shivling in omkareshwar, original shivling for home temple, temple size shivling, puja shivling, shivling stand, shivling online, buy shivling online india, hindu shivling stone, real narmadeshwar stone, janeu dhari shivling, parad shivling, sphatik shivling, 12 jyotirlinga shivling, somnath shivling, mallikarjuna shivling, mahakaleshwar shivling, omkareshwar jyotirlinga shivling, baidyanath shivling, bhimashankar shivling, rameshwaram shivling, nageshwar shivling, kashi vishwanath shivling, kedarnath shivling, trimbakeshwar shivling, grishneshwar shivling, home mandir shivling, puja ke liye shivling, asli narmadeshwar shivling kaise pehchane, narmada shivling asli, bakawa narmadeshwar shivling, omkareshwar narmada shivling, ujjain original shivling, mandir sthapana shivling, religious shivling stone, spiritual shivling india, narmada stone shivling online"
/>

      </Head>

      <main className="container mx-auto px-4 mt-24">

        {/* Top Image */}
         <section className="mb-8 w-full">
  <div className="banner-wrapper">
    <Image
      src="/alok2.png"
      alt="Special Narmada Shivling Bottom"
      fill
      className="responsive-banner"
      priority
    />
  </div>
</section>

        {/* Blog Cards Grid - unchanged */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {cards.map((card, i) => (
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
                  />
                </Link>
              </div>
              <div className="card-body p-2 flex justify-center gap-4">
                <a
                  className="btn btn-call bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                  href="tel:+919630893459"
                >
                  Call
                </a>
                <a
                  className="btn btn-wa bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
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

       <section className="mb-8 w-full">
  <div className="banner-wrapper">
    <Image
      src="/shubham2.png"
      alt="Special Narmada Shivling Bottom"
      fill
      className="responsive-banner"
      priority
    />
  </div>
</section>



        <div className="space-y-8 mb-12">
  {extraImages.map((item, idx) => (
    <div key={idx} className="banner-wrapper">

      <Image
        src={item.img}
        alt={item.title}
        fill
        className="responsive-banner"
      />

      <div className="banner-overlay">
        <h3>{item.title}</h3>
        <p>{item.subtitle}</p>
      </div>

    </div>
  ))}
</div>



       <section className="mb-12 px-4">
  <div className="video-wrapper">
    <video
      className="responsive-video"
      autoPlay
      loop
      muted
      playsInline
      controls
    >
      <source src="/video/alok.mp4" type="video/mp4" />
    </video>
  </div>
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

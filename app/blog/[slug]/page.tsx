import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogs as rawBlogs } from "../../data/blogs";
import { notFound } from "next/navigation";
import Script from "next/script";

/* ================= BLOG TYPE ================= */
interface Blog {
  title: string;
  description: string;
  slug: string;
  topImage?: string;
  datePublished?: string;
  sections: {
    title?: string;
    paragraphs?: string[];
    list?: string[];
  }[];
}

const blogs: Blog[] = rawBlogs;

/* ================= STATIC ROUTES ================= */
export function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

/* ================= SEO METADATA ================= */
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const blog = blogs.find((b) => b.slug === params.slug);
  if (!blog) return {};

  const url = `https://shubhamnarmadashivling.com/blog/${blog.slug}`;

  // 100 Semantic Keywords dynamically (add more as needed)
  const semanticKeywords = [
    "Narmada Shivling",
    "Narmadeshwar Shivling",
    "bakawan Shivling",
    "Original Narmadeshwar Shivling",
    "Asli Narmada Shivling",
    "Shivling for Home Pooja",
    "Mahakal Ujjain",
    "Omkareshwar Temple",
    "Ujjain Travel",
    "Indore Hotels",
    "Temple Travel Madhya Pradesh",
    "Narmada River Darshan",
    "Jyotirlinga Visit",
    "Spiritual Tourism MP",
    "Shiv Puja Vidhi",
    "Shivling Photo",
    "Shivling Video",
    "Home Temple Shivling",
    "Shivling Price India",
    "Vedic Spiritual Knowledge",
    "Hindu Temple Information",
    "Authentic Shivling Article",
    "Natural Stone Shivling India",
    "Home Temple Guide",
    "Shivling Benefits",
    "Shivling Darshan Tips",
    "Mahadev Bhakti Blog",
    "Shivling History India",
    "Ghar Me Shivling Sthapana",
    "Shivling Online Purchase",
    "Spiritual Articles",
    "Shivling Gallery",
    "Devotional Videos",
    "Temple Stay Ujjain",
    "Omkareshwar Darshan",
    "bakawan Shivling Supplier",
    "Original Stone Shivling",
    "Shivling Reviews",
    "Shivling Care Tips",
    "Shivling Pooja Vidhi",
    "Narmada River Travel",
    "Temple Train Guide",
    "Omkareshwar Hotels",
    "Mahakal Temple Timing",
    "Shivling Facts",
    "Shivling Types",
    "Shivling Spiritual Significance",
    "Home Pooja Benefits",
    "Narmada River Spirituality",
    "Shivling Darshan Video",
    "Shivling Installation Guide",
    "Devotional Practices",
    "Jyotirlinga Darshan Tips",
    "Shivling for Puja",
    "bakawan Stone Shivling",
    "Shivling Stone Origin",
    "Spiritual Pilgrimage MP",
    "Hinduism Spirituality",
    "Omkareshwar Religious Tourism",
    "Mahadev Worship",
    "Temple Photography",
    "Shivling Care Guide",
    "Authentic Stone Guide",
    "Original Shivling Supplier",
    "Shivling Purchase Tips",
    "Narmadeshwar Darshan Guide",
    "Temple Visit MP",
    "Shivling Knowledge",
    "bakawan Temple Guide",
    "Home Pooja Tips",
    "Shivling Blessings",
    "Shivling Mystical Powers",
    "Shivling Stone Properties",
    "Temple Travel Tips",
    "Mahadev Darshan",
    "Omkareshwar Pilgrimage",
    "Shivling Significance",
    "Shivling Rituals",
    "Shivling Pooja Benefits",
    "Shivling Collection",
    "Shivling Artifacts",
    "Shivling Facts & Myths",
    "Shivling Types India",
    "Shivling Spiritual Articles",
    "Shivling Temple Information",
    "Shivling Video Tutorials",
    "bakawan Shivling Facts",
    "Original Shivling Info",
    "Shivling Purchase Online",
    "Devotional Travel Guide",
    "Madhya Pradesh Spiritual Sites",
    "Shivling Care Instructions",
    "Shivling Ritual Guide",
    "Narmada Spirituality",
    "Mahakal Devotion",
    "Omkareshwar Facts",
    "Ujjain Spiritual Sites",
    "Indore Spiritual Tourism",
    "Shivling Gallery Photos",
    "Home Pooja Shivling Article",
    "Shivling Info Blog",
    "bakawan Stone Info",
    "Authentic Narmadeshwar Shivling"
  ];

  return {
    title: `${blog.title} | Original Narmadeshwar Shivling`,
    description:
      "जानिए असली नर्मदेश्वर शिवलिंग क्या है, नर्मदा नदी से प्राप्त शुद्ध शिवलिंग की पहचान, कीमत और घर पूजा में स्थापना की पूरी जानकारी।",
    keywords: semanticKeywords,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: url,
      siteName: "Shubham Narmada Shivling",
      type: "article",
      images: blog.topImage
        ? [
            {
              url: `https://shubhamnarmadashivling.com${blog.topImage}`,
              width: 1200,
              height: 630,
              alt: blog.title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
    },
  };
}

/* ================= PAGE ================= */
export default function BlogPage({ params }: any) {
  const blog = blogs.find((b) => b.slug === params.slug);
  if (!blog) return notFound();

  const imageUrl = blog.topImage
    ? `https://shubhamnarmadashivling.com${blog.topImage}`
    : "";

  return (
    <>
      {/* BLOG POSTING & JSON-LD */}
      <Script
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: blog.title,
            description: blog.description,
            image: imageUrl,
            datePublished: blog.datePublished,
            author: {
              "@type": "Organization",
              name: "Shubham Narmada Shivling",
            },
            publisher: {
              "@type": "Organization",
              name: "Shubham Narmada Shivling",
              logo: {
                "@type": "ImageObject",
                url: "https://shubhamnarmadashivling.com/alok2.png",
              },
            },
            mainEntityOfPage: `https://shubhamnarmadashivling.com/blog/${blog.slug}`,
          }),
        }}
      />

      {/* MASTER KNOWLEDGE GRAPH */}
      <Script
        id="master-graph"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://shubhamnarmadashivling.com/#org",
                name: "Shubham Narmada Shivling",
                url: "https://shubhamnarmadashivling.com",
                logo: {
                  "@type": "ImageObject",
                  url: "https://shubhamnarmadashivling.com/alok2.png",
                },
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Omkareshwar",
                  addressRegion: "Madhya Pradesh",
                  addressCountry: "India",
                },
              },
              {
                "@type": "LocalBusiness",
                "@id": "https://shubhamnarmadashivling.com/#local",
                name: "Original Narmadeshwar Shivling bakawan",
                areaServed: "India",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "bakawan",
                  addressRegion: "Madhya Pradesh",
                  addressCountry: "India",
                },
              },
              {
                "@type": "Place",
                name: "Narmada River",
                geo: { "@type": "GeoCoordinates", latitude: "22.25", longitude: "76.15" },
              },
              {
                "@type": "Place",
                name: "Mahakaleshwar Temple",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Ujjain",
                  addressRegion: "Madhya Pradesh",
                  addressCountry: "India",
                },
              },
              {
                "@type": "Place",
                name: "Omkareshwar Temple",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Omkareshwar",
                  addressRegion: "Madhya Pradesh",
                  addressCountry: "India",
                },
              },
              {
                "@type": "Product",
                name: "Original Narmadeshwar Shivling",
                brand: { "@type": "Organization", name: "Shubham Narmada Shivling" },
                offers: { "@type": "Offer", priceCurrency: "INR", availability: "https://schema.org/InStock" },
              },
              {
                "@type": "WebSite",
                url: "https://shubhamnarmadashivling.com",
                potentialAction: {
                  "@type": "SearchAction",
                  target: "https://shubhamnarmadashivling.com/search?q={search_term_string}",
                  "query-input": "required name=search_term_string",
                },
              },
            ],
          }),
        }}
      />

      {/* IMAGE SCHEMA */}
      {blog.topImage && (
        <Script
          id="image-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ImageObject",
              contentUrl: imageUrl,
              description: "Asli Narmada River Shivling from bakawan Omkareshwar Madhya Pradesh India",
            }),
          }}
        />
      )}

      {/* FAQ SCHEMA */}
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
                name: "असली नर्मदा शिवलिंग क्या है?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "असली नर्मदेश्वर शिवलिंग नर्मदा नदी से प्राकृतिक रूप से प्राप्त शिवलिंग होता है जिसे घर पूजा में स्थापित करना शुभ माना जाता है।",
                },
              },
              {
                "@type": "Question",
                name: "घर में नर्मदेश्वर शिवलिंग रख सकते हैं क्या?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "जी हाँ, घर में नर्मदेश्वर शिवलिंग की स्थापना करने से सकारात्मक ऊर्जा प्राप्त होती है।",
                },
              },
              {
                "@type": "Question",
                name: "नर्मदेश्वर शिवलिंग की पहचान कैसे करें?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "असली नर्मदेश्वर शिवलिंग चिकना, अंडाकार और प्राकृतिक रेखाओं वाला होता है जो नर्मदा नदी से प्राप्त होता है।",
                },
              },
            ],
          }),
        }}
      />

      {/* ================= ORIGINAL PAGE ================= */}
      <main className="container mx-auto px-4 mt-24 blog-wrapper">
        {blog.topImage && (
          <section className="mb-8 w-full">
            <Image
              src={blog.topImage}
              alt="Asli Narmada River Shivling from bakawan Omkareshwar Madhya Pradesh"
              title="Original Narmadeshwar Shivling"
              loading="lazy"
              width={1200}
              height={600}
              className="w-full h-auto object-cover rounded-lg"
            />
          </section>
        )}

        <nav className="blog-nav mb-6">
          <Link href="/blog">← सभी ब्लॉग</Link>
        </nav>

        <article className="blog">
          <h1 className="blog-title mb-6">{blog.title}</h1>

          {blog.sections.map((s, i) => (
            <section key={i} className="blog-section mb-6">
              {s.title && <h2 className="text-2xl font-semibold mb-2">{s.title}</h2>}
              {s.paragraphs?.map((p, j) => (
                <p key={j} className="mb-2 text-gray-800">{p}</p>
              ))}
              {s.list && (
                <ul className="list-disc list-inside ml-4 text-gray-800">
                  {s.list.map((l, k) => (
                    <li key={k}>{l}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {/* INTERNAL LINK SEO */}
          <section className="mt-10">
            <h3 className="text-xl font-semibold mb-2">
              घर पूजा के लिए असली नर्मदेश्वर शिवलिंग देखें
            </h3>
            <Link href="/product">Original Shivling for Home Pooja</Link>
          </section>

          {/* CTA */}
          <section className="cta bg-blue-50 p-6 rounded-lg text-center mt-12">
            <h2 className="text-2xl font-bold mb-2 animate-bounce">
              📞 Original Shivling के लिए संपर्क करें
            </h2>
            <p className="mb-4">नर्मदा से सीधे प्राप्त शुद्ध नर्मदेश्वर शिवलिंग</p>
            <div className="cta-buttons flex justify-center gap-4">
              <a
                href="tel:+919630893459"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              >
                Call Now
              </a>
              <a
                href="https://wa.me/919630893459"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
              >
                WhatsApp
              </a>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}

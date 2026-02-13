import type { Metadata } from "next"; 
import Link from "next/link";
import Image from "next/image";
import { blogs } from "../../data/blogs";
import { notFound } from "next/navigation";
import Head from "next/head";

/* ================= STATIC ROUTES ================= */
export function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

/* ================= SEO METADATA ================= */
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const blog = blogs.find((b) => b.slug === params.slug);
  if (!blog) return {};

  return {
    title: `${blog.title} | Shubham Narmada Shivling`,
    description: blog.description,
    alternates: {
      canonical: `/blog/${blog.slug}`,
    },
  };
}

/* ================= PAGE ================= */
export default function BlogPage({ params }: any) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) return notFound();

  /* SEO Keywords */
  const keywords = [
    "shubham narmada shivling",
    "narmada shivling",
    "shivling blog",
    "narmadeshwar shivling",
    "original narmada shivling",
    "home pooja shivling",
    "temple shivling",
    "natural narmada shivling",
    "janeudhari shivling",
    "swayambhu shivling",
    "shiv puja guide",
    "spiritual blog india",
    "vedic spirituality",
    "mahadev worship",
    "hindu dharm blog",
    "shubham narmadashivling.com"
  ].join(",");

  return (
    <>
      {/* ===== SEO HEAD ===== */}
      <Head>
        <title>{blog.title} | Shubham Narmada Shivling</title>
        <meta name="description" content={blog.description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={`https://shubhamnarmadashivling.com/blog/${blog.slug}`} />
        <meta name="robots" content="index, follow" />

      {/* OpenGraph */}
<meta property="og:title" content={`${blog.title} | Shubham Narmada Shivling`} />
<meta property="og:description" content={blog.description} />
{blog.topImage && <meta property="og:image" content={`https://shubhamnarmadashivling.com${blog.topImage}`} />}
<meta property="og:url" content={`https://shubhamnarmadashivling.com/blog/${blog.slug}`} />
<meta property="og:type" content="article" />


        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${blog.title} | Shubham Narmada Shivling`} />
        <meta name="twitter:description" content={blog.description} />
        {blog.topImage && <meta name="twitter:image" content={`https://shubhamnarmadashivling.com${blog.topImage}`} />}

        {/* JSON-LD BlogPosting Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: blog.title,
              description: blog.description,
              image: blog.topImage ? `https://shubhamnarmadashivling.com${blog.topImage}` : undefined,
              author: {
                "@type": "Person",
                name: "Shubham Narmada Shivling"
              },
              publisher: {
                "@type": "Organization",
                name: "Shubham Narmada Shivling",
                logo: "https://shubhamnarmadashivling.com/logo.png"
              },
              url: `https://shubhamnarmadashivling.com/blog/${blog.slug}`,
              mainEntityOfPage: `https://shubhamnarmadashivling.com/blog/${blog.slug}`,
              datePublished: blog.datePublished || new Date().toISOString(),
            }),
          }}
        />
      </Head>

      {/* ===== ORIGINAL PAGE CONTENT ===== */}
      <main className="container mx-auto px-4 mt-24 blog-wrapper">

        {/* IMAGE AT TOP */}
        {blog.topImage && (
          <section className="mb-8 w-full">
            <Image
              src={blog.topImage}
              alt={`Shubham Narmada Shivling - ${blog.title}`}
              width={1200}
              height={600}
              className="w-full h-auto object-cover rounded-lg"
              priority
              style={{ width: "100%", height: "auto" }}
            />
          </section>
        )}

        {/* NAVIGATION */}
        <nav className="blog-nav mb-6">
          <Link href="/blog">← सभी ब्लॉग</Link>
        </nav>

        <article className="blog">

          {/* TITLE */}
          <h1 className="blog-title mb-6">{blog.title}</h1>

          {/* CONTENT */}
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

          {/* CTA SECTION */}
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

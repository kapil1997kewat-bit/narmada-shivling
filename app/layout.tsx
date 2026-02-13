import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Script from "next/script";

export const metadata = {
  title: "Narmada Shivling Shop – नर्मदा शिवलिंग शॉप",
  description: "Authentic Narmadeshwar Shivling from Bakawa, Khargone",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hi">
      <body className="min-h-screen flex flex-col overflow-x-hidden">
        <Header />
        <main className="flex-1 pt-[120px] md:pt-[140px] w-full max-w-7xl mx-auto px-4">
          {children}
        </main>
        <Footer />
        <FloatingButtons />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-65VV7JR3L1"
          strategy="afterInteractive"
        />
        <Script id="ga" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-65VV7JR3L1');
          `}
        </Script>

        {/* Auto-hide header */}
        <Script id="header-scroll" strategy="afterInteractive">
          {`
            let lastScroll = 0;
            const header = document.querySelector('header');
            window.addEventListener('scroll', () => {
              const currentScroll = window.pageYOffset;
              if (currentScroll > lastScroll && currentScroll > 100) {
                header.style.top = '-120px';
              } else {
                header.style.top = '0';
              }
              lastScroll = currentScroll;
            });
          `}
        </Script>

      </body>
    </html>
  );
}

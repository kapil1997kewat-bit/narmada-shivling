"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand - single line */}
        <div className="brand">
          <h3 className="brand-heading">
            Shubham Narmada Shivling – <span className="reserved">© {year} All Rights Reserved</span>
          </h3>
        </div>

        {/* Main Navigation */}
        <nav className="footer-col">
          <h4 className="section-heading">Navigation</h4>
          <Link href="/">Home</Link>
          <Link href="/product">Product</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/FAQ">FAQ</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Legal Links */}
        <nav className="footer-col">
          <h4 className="section-heading">Legal</h4>
          <Link href="/terms-conditions">Terms & Conditions</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/shipping-policy">Shipping Policy</Link>
          <Link href="/disclaimer">Disclaimer</Link>
        </nav>

        {/* Contact Info */}
        <div className="footer-section">
          <h4 className="section-heading">📞 Contact</h4>
          <p>Alok Kewat – <a href="tel:+919630893459">9630893459</a></p>
          <p>Shubham Kewat – <a href="tel:+918103316882">8103316882</a></p>

          <h4 className="section-heading">📍 Address</h4>
          <p>Bakawa, MP – 451113</p>

          <p>Support: 24×7 Available</p>
          <p>Email: <a href="mailto:Alokkewat1234@gmail.com">Alokkewat1234@gmail.com</a></p>
        </div>

      </div>

      <style jsx>{`
        /* ==============================
           GENERAL FOOTER STYLES (DESKTOP)
        ============================== */
        .footer {
          background: #f3f4f6;
          padding: 40px 20px;
          font-family: "Segoe UI", Roboto, sans-serif;
          color: #374151;
        }

        .footer-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 30px;
          max-width: 1200px;
          margin: auto;
        }

        .brand-heading {
          color: #ff7a00;
          margin: 0 0 6px;
          font-weight: 700;
          font-size: 18px;
        }

        .reserved {
          color: #ff7a00;
          font-weight: 400;
          font-size: 14px;
        }

        .section-heading {
          color: #ff7a00;
          font-weight: 700;
          margin: 4px 0 6px;
          font-size: 16px;
        }

        .footer p,
        .footer-col a,
        .footer-section p {
          font-size: 14px;
          color: #374151;
          font-weight: 400;
          margin: 0;
        }

        .footer-col {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .footer-col :global(a),
        .footer-section :global(a) {
          color: #ff7a00 !important;
          text-decoration: none !important;
          font-weight: 500;
          font-size: 14px;
          transition: 0.3s ease;
        }

        .footer-col :global(a:hover),
        .footer-section :global(a:hover) {
          opacity: 0.75;
          transform: translateX(4px);
        }

        .footer-section {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .footer-bottom {
          text-align: center;
          color: #6b7280;
          margin-top: 25px;
          font-size: 12px;
        }

        /* ==============================
           MOBILE FOOTER STYLES
        ============================== */
        @media (max-width: 768px) {
          .footer {
            background: #000;           /* Black background */
            padding: 40px 16px;
            color: #fff;                /* All text white */
          }

          .footer-container {
            display: flex;
            flex-direction: column;
            gap: 20px;
            max-width: 100%;
            margin: 0 auto;
          }

          .brand-heading {
            color: #ff7a00;            /* Brand + All Rights Reserved in orange */
            font-size: 16px;
            margin-bottom: 12px;
          }

          .footer-col a,
          .footer-section a,
          .footer p {
            color: #fff;               /* All text white */
          }

          .footer-col a:hover,
          .footer-section a:hover {
            color: #ff7a00;            /* Hover accent */
            transform: translateX(3px);
          }

          .section-heading {
            color: #ff7a00;
            font-size: 14px;
            margin-bottom: 6px;
          }

          .footer-section {
            gap: 4px;                  /* Compact spacing */
          }

          .footer-bottom {
            display: none;             /* Hide duplicate copyright on mobile */
          }
        }
/* ⭐ FORCE WHITE HEADINGS ON MOBILE ONLY */
@media (max-width: 768px) {
  .footer .brand-heading,
  .footer .section-heading {
    color: #ffffff !important;
  }
}

      `}</style>
    </footer>
  );
}

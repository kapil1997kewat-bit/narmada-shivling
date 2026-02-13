"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">

      {/* Logo */}
      <div className="logo">
        
        <span className="brand">Shubham Narmada Shivling</span>
      </div>

      {/* Hamburger */}
      <button
        className="menu-btn"
        onClick={() => setOpen(!open)}
        aria-label="Toggle Menu"
      >
        ☰
      </button>

      {/* Navigation */}
      <nav className={`nav ${open ? "open" : ""}`}>
        <Link href="/" onClick={() => setOpen(false)}>Home</Link>
        <Link href="/about" onClick={() => setOpen(false)}>About</Link>
        <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
        <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        <Link href="/product" onClick={() => setOpen(false)}>Product</Link>
        <Link href="/FAQ" onClick={() => setOpen(false)}>FAQ</Link>
      </nav>

    </header>
  );
}

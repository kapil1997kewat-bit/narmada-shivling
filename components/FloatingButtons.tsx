"use client";
import Image from "next/image";

export default function FloatingButtons() {
  return (
    <div className="floating-buttons">
      <a href="tel:+919630893459" aria-label="Call Now">
        <Image src="/icons/call.png" alt="Call" width={50} height={50} className="btn-img" />
      </a>

      <a href="https://wa.me/919630893459" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <Image src="/icons/whatsapp.png" alt="WA" width={50} height={50} className="btn-img" />
      </a>

      <a href="https://www.instagram.com/narmadashivling09" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <Image src="/icons/instagram.png" alt="IG" width={50} height={50} className="btn-img" />
      </a>

      <a href="https://www.facebook.com/share/16nQ9SpdD5/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <Image src="/icons/facebook.png" alt="FB" width={50} height={50} className="btn-img" />
      </a>

      <a href="https://www.youtube.com/@narmadashivling09" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
        <Image src="/icons/youtube.png" alt="YT" width={50} height={50} className="btn-img" />
      </a>
    </div>
  );
}

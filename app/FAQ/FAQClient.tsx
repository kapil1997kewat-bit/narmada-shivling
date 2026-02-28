"use client";

import { useState } from "react";
import { faqData } from "./faqData";

export default function FAQClient() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section style={{ background: "#f3f4f6", padding: "40px 0" }}>
      <div style={{ maxWidth: "1100px", margin: "auto" }}>
        {faqData.map((item, i) => (
          <div key={i} style={{ borderBottom: "1px solid #d1d5db" }}>
            <div
              onClick={() => setOpen(open === i ? -1 : i)}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
                padding: "16px 5px",
              }}
            >
              <span style={{ fontWeight: 500 }}>
                {String(i + 1).padStart(2, "0")}. {item.question}
              </span>

              <div
                style={{
                  width: 28,
                  height: 28,
                  background: "#14532d",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                }}
              >
                {open === i ? "-" : "+"}
              </div>
            </div>

            {open === i && (
              <div
                style={{
                  color: "#6b7280",
                  paddingBottom: "18px",
                  paddingRight: "60px",
                }}
              >
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
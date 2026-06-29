"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { SeismicMark } from "./SeismicMark";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(10,14,24,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid #27324A" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <SeismicMark size={34} spin={false} />
          <span className="font-display font-bold text-lg text-[#EAF0FA] tracking-tight">ZeroSqueeze</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "How It Works", href: "#how-it-works" },
            { label: "The Science", href: "/science" },
            { label: "Privacy", href: "/privacy" },
            { label: "Support", href: "/support" },
          ].map((l) => (
            <a key={l.label} href={l.href} className="text-sm text-[#A7B2C6] hover:text-[#EAF0FA] transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#download"
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
          style={{ background: "linear-gradient(135deg, #FF3D71, #A24BFF)", boxShadow: "0 0 20px rgba(255,61,113,0.3)" }}
        >
          Download Free
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-5 h-0.5 bg-[#EAF0FA] transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[#EAF0FA] transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[#EAF0FA] transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0C1322] border-t border-[#27324A] px-6 py-4 flex flex-col gap-4">
          {[
            { label: "How It Works", href: "#how-it-works" },
            { label: "The Science", href: "/science" },
            { label: "Privacy", href: "/privacy" },
            { label: "Support", href: "/support" },
          ].map((l) => (
            <a key={l.label} href={l.href} className="text-[#A7B2C6] text-sm py-1" onClick={() => setMenuOpen(false)}>{l.label}</a>
          ))}
          <a href="#download" className="mt-2 text-center px-4 py-2.5 rounded-full text-sm font-semibold text-white" style={{ background: "linear-gradient(135deg, #FF3D71, #A24BFF)" }}>
            Download Free
          </a>
        </div>
      )}
    </nav>
  );
}

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { SeismicMark } from "./SeismicMark";

const LINKS = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "The Science", href: "/science" },
  { label: "Privacy", href: "/privacy" },
  { label: "Support", href: "/support" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Esc closes the mobile menu; lock body scroll while it's open.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  const isActive = (href: string) => href.startsWith("/") && !href.includes("#") && pathname === href;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(10,14,24,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid #27324A" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5" aria-label="ZeroSqueeze home">
          <SeismicMark size={44} spin={false} glow={false} />
          <span className="font-display font-extrabold text-xl text-[#EAF0FA] tracking-tight">ZeroSqueeze</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => {
            const active = isActive(l.href);
            return (
              <Link
                key={l.label}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm transition-colors relative ${active ? "text-[#EAF0FA]" : "text-[#A7B2C6] hover:text-[#EAF0FA]"}`}
              >
                {l.label}
                {active && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full" style={{ background: "linear-gradient(90deg, #FF3D71, #A24BFF)" }} />
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <a
          href="/#download"
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
          style={{ background: "linear-gradient(135deg, #FF3D71, #A24BFF)", boxShadow: "0 0 20px rgba(255,61,113,0.3)" }}
        >
          Download Free
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span className={`block w-5 h-0.5 bg-[#EAF0FA] transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[#EAF0FA] transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[#EAF0FA] transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div id="mobile-menu" className="md:hidden bg-[#0C1322] border-t border-[#27324A] px-6 py-4 flex flex-col gap-4">
          {LINKS.map((l) => {
            const active = isActive(l.href);
            return (
              <Link
                key={l.label}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm py-1 ${active ? "text-[#EAF0FA] font-semibold" : "text-[#A7B2C6]"}`}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </Link>
            );
          })}
          <a href="/#download" className="mt-2 text-center px-4 py-2.5 rounded-full text-sm font-semibold text-white" style={{ background: "linear-gradient(135deg, #FF3D71, #A24BFF)" }} onClick={() => setMenuOpen(false)}>
            Download Free
          </a>
        </div>
      )}
    </nav>
  );
}

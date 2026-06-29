"use client";
import { SeismicMark } from "./SeismicMark";
import Link from "next/link";

export function CTABandSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(255,61,113,0.15) 0%, rgba(162,75,255,0.15) 100%)" }}
      />
      <div className="absolute inset-0 border-t border-b border-[#27324A]" />

      <div className="relative max-w-3xl mx-auto text-center flex flex-col items-center gap-8">
        <SeismicMark size={80} />
        <div>
          <h2 className="font-display font-bold text-[#EAF0FA]" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
            Ready to hear{" "}
            <span className="gradient-text">your heart?</span>
          </h2>
          <p className="text-[#A7B2C6] mt-4 text-lg max-w-md mx-auto">
            It's free, there's no account to make, and there's nothing to strap on. The phone in your hand is all you need.
          </p>
        </div>

        <a
          href="https://apple.com/app-store"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white text-lg transition-all hover:scale-105 active:scale-95"
          style={{ background: "linear-gradient(135deg, #FF3D71, #A24BFF)", boxShadow: "0 0 40px rgba(255,61,113,0.4), 0 0 80px rgba(162,75,255,0.2)" }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.15-2.19 1.28-2.17 3.81.02 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.77M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          Download on App Store
        </a>

        <p className="text-[#8B97AB] text-xs">
          Requires iPhone · iOS 16+ · Free · Estimates only, not a medical diagnosis
        </p>
      </div>
    </section>
  );
}

export function FooterSection() {
  return (
    <footer className="px-6 py-12 border-t border-[#27324A]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <SeismicMark size={28} />
              <span className="font-display font-bold text-[#EAF0FA]">ZeroSqueeze</span>
            </div>
            <p className="text-[#8B97AB] text-sm leading-relaxed max-w-xs">
              Heart checks on your iPhone. No cuff, no wearable, no needle.
            </p>
          </div>
          {/* Links */}
          <div>
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#8B97AB] block mb-4">Learn</span>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "How It Works", href: "/#how-it-works" },
                { label: "The Science", href: "/science" },
                { label: "Privacy", href: "/privacy" },
                { label: "FAQ", href: "/#faq" },
              ].map((l) => (
                <li key={l.label}><Link href={l.href} className="text-sm text-[#A7B2C6] hover:text-[#EAF0FA] transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#8B97AB] block mb-4">Support</span>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Support", href: "/support" },
                { label: "Contact", href: "mailto:support@zerosqueeze.app" },
                { label: "Privacy Policy", href: "/privacy" },
              ].map((l) => (
                <li key={l.label}><Link href={l.href} className="text-sm text-[#A7B2C6] hover:text-[#EAF0FA] transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#27324A] pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[#8B97AB] text-xs">© 2026 ZeroSqueeze. All rights reserved.</p>
          <p className="text-[#8B97AB] text-xs text-center">
            All readings are estimates only, not a medical diagnosis. Consult a healthcare professional for clinical measurements.
          </p>
        </div>
      </div>
    </footer>
  );
}

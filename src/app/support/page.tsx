"use client";
import { useState } from "react";
import { Navbar } from "@/components/marketing/Navbar";
import { CTABandSection, FooterSection } from "@/components/marketing/CTAAndFooter";

const faqs = [
  { q: "Is ZeroSqueeze a medical device?", a: "No. ZeroSqueeze is a wellness estimation tool, not a medical device. Readings are estimates for general awareness, not a substitute for clinical measurements or medical advice." },
  { q: "How accurate are the estimates?", a: "In internal testing, estimates correlate closely with cuff readings under consistent conditions. Accuracy varies by individual, phone model, and technique. Treat all values as estimates only." },
  { q: "Which iPhones are supported?", a: "iPhone 6 and newer, iOS 16 or later. For best SCG accuracy, iPhone 12 or newer is recommended due to improved accelerometer sensitivity." },
  { q: "Why does my reading vary?", a: "BP, HRV, and HR naturally fluctuate throughout the day. Trends over time are more meaningful than individual readings." },
  { q: "How do I get the best reading?", a: "Sit still for 2 minutes before measuring. Lie flat on a firm surface for the SCG step. Press your fingertip firmly (but not forcefully) over the camera lens for PPG. Avoid talking or moving during the 60-second session." },
  { q: "Does the app need an internet connection?", a: "No. All processing is entirely on-device. ZeroSqueeze works fully offline and has no network features whatsoever." },
  { q: "Can I use ZeroSqueeze if I have a pacemaker?", a: "Consult your cardiologist before use. The app uses no electrical signals or radiation, but we recommend getting clinical clearance for any cardiac condition." },
  { q: "How do I delete my data?", a: "Simply delete the app. Since all data lives on your device, removing the app removes all readings. If you enabled HealthKit, delete those entries separately in the Apple Health app." },
];

export default function SupportPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div style={{ background: "#0A0E18" }} className="min-h-svh relative">
      <div className="zs-bloom" aria-hidden />
      <Navbar />
      <main className="pt-28 pb-0 relative z-10">
        {/* Hero */}
        <section className="px-6 max-w-3xl mx-auto mb-16 text-center">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#8B97AB]">Support</span>
          <h1 className="font-display font-bold text-[#EAF0FA] mt-3 mb-4" style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}>
            How can we{" "}
            <span style={{ background: "linear-gradient(135deg, #FF3D71, #A24BFF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              help?
            </span>
          </h1>
          <p className="text-[#A7B2C6] text-lg max-w-xl mx-auto">
            Browse the FAQ below or reach out directly. We aim to respond within one business day.
          </p>
        </section>

        {/* Contact cards */}
        <section className="px-6 max-w-3xl mx-auto mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
                label: "Email Support",
                value: "support@zerosqueeze.app",
                href: "mailto:support@zerosqueeze.app",
                color: "#22D3EE",
              },
              {
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A24BFF" strokeWidth="1.5" strokeLinecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>,
                label: "Privacy Questions",
                value: "privacy@zerosqueeze.app",
                href: "mailto:privacy@zerosqueeze.app",
                color: "#A24BFF",
              },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="flex items-center gap-4 rounded-2xl border border-[#27324A] bg-[#141B2B] p-5 hover:border-opacity-70 transition-all group"
                style={{ borderColor: "#27324A" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = c.color + "50"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#27324A"; }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${c.color}12`, border: `1px solid ${c.color}30` }}>
                  {c.icon}
                </div>
                <div>
                  <span className="font-mono text-[10px] tracking-widest uppercase block text-[#8B97AB]">{c.label}</span>
                  <span className="text-sm text-[#EAF0FA] font-medium">{c.value}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 max-w-3xl mx-auto mb-20">
          <h2 className="font-display font-semibold text-[#EAF0FA] text-2xl mb-8">Frequently asked questions</h2>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-xl border bg-[#141B2B] overflow-hidden transition-all duration-200"
                style={{ borderColor: open === i ? "#FF3D7140" : "#27324A" }}>
                <button className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
                  <span className="font-display font-medium text-[#EAF0FA] text-base">{faq.q}</span>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200"
                    style={{ background: open === i ? "linear-gradient(135deg, #FF3D71, #A24BFF)" : "#27324A", transform: open === i ? "rotate(45deg)" : "none" }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M12 5v14M5 12h14" /></svg>
                  </div>
                </button>
                {open === i && (
                  <div className="px-6 pb-5">
                    <p className="text-[#A7B2C6] text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <CTABandSection />
      </main>
      <FooterSection />
    </div>
  );
}

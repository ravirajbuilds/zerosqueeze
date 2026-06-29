"use client";
import { PhoneFrame } from "./PhoneFrame";

export function GallerySection() {
  const screens = [
    { label: "Today Dashboard", variant: "dashboard" as const },
    { label: "BP Trend", variant: "bp" as const },
    { label: "HRV History", variant: "hrv" as const },
  ];

  return (
    <section id="gallery" className="py-24 px-6 overflow-hidden" style={{ background: "linear-gradient(180deg, transparent 0%, rgba(255,61,113,0.04) 50%, transparent 100%)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#FF3D71]">App Screens</span>
          <h2 className="font-display font-bold text-[#EAF0FA] mt-3" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Built for clarity,{" "}
            <span className="gradient-text">designed for calm</span>
          </h2>
          <p className="text-[#A7B2C6] mt-4 max-w-xl mx-auto">Every number at a glance. No clutter, no noise — just your heart, in numbers.</p>
        </div>

        <div className="flex justify-center gap-6 lg:gap-12 flex-wrap">
          {screens.map((s, i) => (
            <div key={s.label} className="flex flex-col items-center gap-4" style={{ transform: i === 1 ? "translateY(-20px)" : "none" }}>
              <PhoneFrame variant={s.variant} />
              <span className="font-mono text-[10px] tracking-widest uppercase text-[#717C90]">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

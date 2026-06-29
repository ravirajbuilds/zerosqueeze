"use client";
import { SeismicMark } from "./SeismicMark";
import { PhoneFrame } from "./PhoneFrame";
import { ScoreRing } from "./ScoreRing";

export function HeroSection() {
  return (
    <section className="relative min-h-svh flex items-center overflow-hidden pt-24">
      {/* Background gradient */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(162,75,255,0.12) 0%, rgba(255,61,113,0.08) 30%, transparent 70%)" }} />

      <div className="relative max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text side */}
        <div className="flex flex-col gap-6">
          {/* Eyebrow */}
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#FF3D71]">iPhone · No Cuff · No Wearable</span>

          {/* Headline */}
          <h1 className="font-display font-bold leading-[1.05] text-[#EAF0FA]" style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}>
            Your heart,{" "}
            <span className="gradient-text">in numbers</span>
,{" "}no cuff, no wearable
          </h1>

          <p className="text-[#A7B2C6] text-lg leading-relaxed max-w-[480px]">
            Rest your phone on your chest and a finger on the camera. In about a minute you get your heart rate, HRV, a blood-pressure reading, even a hemoglobin estimate. It all stays on your phone. These are estimates, not a medical diagnosis.
          </p>

          {/* Metric chips floating */}
          <div className="flex flex-wrap gap-2 mt-2">
            {[
              { label: "HR", value: "62 bpm", color: "#FF3D71" },
              { label: "HRV", value: "48 ms", color: "#22D3EE" },
              { label: "BP", value: "118/76", color: "#A24BFF" },
              { label: "Hgb", value: "14.2 g/dL", color: "#FF7A4D" },
              { label: "SpO2", value: "98%", color: "#2FD27A" },
            ].map((c) => (
              <span
                key={c.label}
                className="px-3 py-1 rounded-full text-xs font-mono border"
                style={{ color: c.color, borderColor: `${c.color}40`, background: `${c.color}10` }}
              >
                {c.label} · {c.value}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <a
              id="download"
              href="https://apple.com/app-store"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full font-semibold text-white transition-all hover:scale-105 active:scale-95"
              style={{ background: "linear-gradient(135deg, #FF3D71, #A24BFF)", boxShadow: "0 0 30px rgba(255,61,113,0.35)" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.15-2.19 1.28-2.17 3.81.02 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.77M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download on App Store
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-[#EAF0FA] border border-[#27324A] hover:border-[#FF3D71]/40 transition-all"
            >
              See how it works
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>
        </div>

        {/* Phone side */}
        <div className="flex justify-center lg:justify-end items-center relative">
          {/* Spiral wavefront glow behind */}
          <div className="absolute opacity-70">
            <SeismicMark size={340} spin glow />
          </div>
          <div className="relative animate-float z-10">
            <PhoneFrame />
          </div>
          {/* Floating Heart Check score card — the app's signature result. */}
          <div
            className="hidden lg:block absolute -left-10 bottom-6 z-20 zs-card-tint p-4 w-[220px] animate-float"
            style={{ ["--tint" as string]: "#FF3D71", animationDelay: "0.8s" }}
          >
            <span className="zs-eyebrow block mb-3" style={{ ["--tint" as string]: "#A7B2C6" }}>Heart Check</span>
            <div className="flex items-center gap-3">
              <ScoreRing value={92} size={72} label="" color="#FF3D71" />
              <div className="flex flex-col gap-0.5">
                <span className="font-display font-extrabold text-[#EAF0FA] text-lg leading-none">Excellent</span>
                <span className="font-mono text-[11px] text-[#A7B2C6]">Heart age 31</span>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-[#27324A] flex items-baseline gap-1.5">
              <span className="font-display font-bold text-xl" style={{ color: "#A24BFF" }}>118/76</span>
              <span className="font-mono text-[10px] text-[#717C90]">mmHg · cuffless</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Is ZeroSqueeze a medical device?",
    a: "No. ZeroSqueeze is a wellness estimation tool, not a medical device. All readings are estimates intended for general awareness. They are not a substitute for clinical measurements or medical advice. Always consult a healthcare professional for diagnosis.",
  },
  {
    q: "How accurate are the blood pressure estimates?",
    a: "In internal testing, ZeroSqueeze estimates correlate closely with cuff readings under consistent conditions. However, accuracy varies by individual, phone model, and measurement technique. Treat all values as estimates, not clinical-grade measurements.",
  },
  {
    q: "Which iPhone models are supported?",
    a: "ZeroSqueeze requires an iPhone with a rear camera flash (iPhone 6 and newer) running iOS 16 or later. The accelerometer-based SCG feature works best on iPhone 12 and newer due to improved sensor sensitivity.",
  },
  {
    q: "Does my data ever leave my phone?",
    a: "Never. All signal processing happens entirely on your device. ZeroSqueeze has no server, no analytics, and no account system. If you enable HealthKit, readings are stored locally in Apple Health only.",
  },
  {
    q: "How long does a measurement take?",
    a: "A full Heart Check, with the chest, finger, and fusion steps, takes about 45 to 60 seconds. You'll need to stay still during the measurement for best accuracy.",
  },
  {
    q: "Can my phone really estimate hemoglobin without a needle?",
    a: "ZeroSqueeze models hemoglobin from the color and pulsatility of light through your fingertip during the camera (PPG) reading. To sharpen the estimate it uses your sex to set the reference range and an optional skin-tone selection, since melanin changes how light moves through skin. It's a wellness estimate for anemia awareness, not a blood test, so confirm any concerning result with a clinician.",
  },
  {
    q: "What is heart age?",
    a: "Heart age takes your Heart Check (heart rate, HRV, blood-pressure index, and pulse transit time) and turns it into a single number you can compare to your real age. It's a directional wellness signal, not a clinical measurement.",
  },
  {
    q: "Why does my reading vary between sessions?",
    a: "Blood pressure, HRV, heart rate, and hemoglobin estimates naturally fluctuate throughout the day based on activity, stress, hydration, lighting, and posture. Small reading-to-reading variation is normal and expected. Trends over time are more meaningful than individual readings.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-6" style={{ background: "linear-gradient(180deg, transparent 0%, rgba(10,14,24,0.8) 100%)" }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#717C90]">Questions</span>
          <h2 className="font-display font-bold text-[#EAF0FA] mt-3" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Common <span className="gradient-text">questions</span>
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border bg-[#141B2B] overflow-hidden transition-all duration-300"
              style={{ borderColor: open === i ? "#FF3D71" + "40" : "#27324A" }}
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-display font-medium text-[#EAF0FA] text-base">{faq.q}</span>
                <div
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300"
                  style={{
                    background: open === i ? "linear-gradient(135deg, #FF3D71, #A24BFF)" : "#27324A",
                    transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </div>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-[#A7B2C6] leading-relaxed text-sm">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center mt-10 text-[#717C90] text-sm">
          More questions?{" "}
          <a href="/support" className="text-[#22D3EE] hover:text-[#EAF0FA] transition-colors">Visit the support page</a>
        </p>
      </div>
    </section>
  );
}

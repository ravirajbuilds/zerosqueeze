"use client";
import { ScoreRing } from "./ScoreRing";
import { BPGauge } from "./BPGauge";
import { MetricChipsGrid } from "./MetricChip";

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Eyebrow */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#22D3EE]">Two Sensors, One Heartbeat</span>
          <h2 className="font-display font-bold text-[#EAF0FA] mt-3" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Your iPhone already has{" "}
            <span className="gradient-text">everything</span>
          </h2>
          <p className="text-[#A7B2C6] mt-4 max-w-xl mx-auto text-lg">
            Two sensors. Zero accessories. Real biometric data in under a minute.
          </p>
        </div>

        {/* Sensor cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF3D71" strokeWidth="1.5" strokeLinecap="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" />
                  <path d="M12 6v6l3 3" />
                </svg>
              ),
              eyebrow: "Accelerometer",
              title: "Chest SCG",
              desc: "Seismocardiography captures the micro-vibrations of your heartbeat through the phone placed on your chest — no electrode required.",
              color: "#FF3D71",
            },
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M6.4 6.4a8 8 0 1 0 11.2 0" />
                </svg>
              ),
              eyebrow: "Camera + Flash",
              title: "Finger PPG",
              desc: "Photoplethysmography uses the rear camera and flash to detect blood volume changes in your fingertip with each pulse.",
              color: "#22D3EE",
            },
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#A24BFF" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              ),
              eyebrow: "AI Fusion",
              title: "Heart Check",
              desc: "Both signals are fused on-device by a machine learning model trained on thousands of validated readings to produce your Heart Check score.",
              color: "#A24BFF",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-[#27324A] bg-[#141B2B] p-6 flex flex-col gap-4 hover:border-opacity-80 transition-colors"
              style={{ boxShadow: `0 0 0 0 transparent`, transition: "box-shadow 0.3s" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${f.color}18`; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: `${f.color}15`, border: `1px solid ${f.color}30` }}
              >
                {f.icon}
              </div>
              <div>
                <span className="font-mono text-[10px] tracking-widest uppercase block mb-1" style={{ color: f.color }}>{f.eyebrow}</span>
                <h3 className="font-display font-semibold text-xl text-[#EAF0FA]">{f.title}</h3>
              </div>
              <p className="text-[#A7B2C6] text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Live data showcase */}
        <div className="rounded-2xl border border-[#27324A] bg-[#0C1322] p-8">
          <span className="font-mono text-[10px] tracking-widest uppercase text-[#717C90] block mb-8">Sample Reading · Estimates Only</span>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="flex justify-center">
              <ScoreRing value={92} size={140} label="Heart Score" color="#FF3D71" />
            </div>
            <div className="lg:col-span-2 flex flex-col gap-6">
              <BPGauge systolic={118} diastolic={76} />
              <MetricChipsGrid />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

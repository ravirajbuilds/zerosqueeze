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
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#22D3EE]">Two sensors you already carry</span>
          <h2 className="font-display font-bold text-[#EAF0FA] mt-3" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Your iPhone already has{" "}
            <span className="gradient-text">what it takes</span>
          </h2>
          <p className="text-[#A7B2C6] mt-4 max-w-xl mx-auto text-lg">
            No band to charge, nothing to buy. Two sensors that ship inside every iPhone do the work, and a reading takes under a minute.
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
              desc: "Lie back, rest the phone on your chest, and its motion sensor picks up the tiny vibrations each heartbeat makes. No electrodes, no straps.",
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
              desc: "Cover the rear camera and flash with a fingertip. The camera watches the light change as blood pulses through, the same trick a pulse oximeter uses.",
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
              desc: "Run both sensors at once and the app lines the signals up to read your blood pressure and a heart-health score. It all happens on the phone.",
              color: "#A24BFF",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="zs-card-tint p-6 flex flex-col gap-4"
              style={{ ["--tint" as string]: f.color, transition: "box-shadow 0.3s" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${f.color}22`; }}
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

        {/* More than a scanner */}
        <div className="text-center mb-12">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#22D3EE]">More than a scanner</span>
          <h2 className="font-display font-bold text-[#EAF0FA] mt-3" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
            A daily picture of your <span className="gradient-text">heart health</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            {
              eyebrow: "Hemoglobin",
              title: "A check for anemia",
              desc: "Get a hemoglobin estimate from your fingertip, no needle involved. We use your skin tone and sex to set the right range, then tell you if it reads low.",
              color: "#FF7A4D",
            },
            {
              eyebrow: "Trends",
              title: "How ready you are today",
              desc: "One score, built from your heart rate and HRV over time, that tells you whether you've recovered or you're pushing it.",
              color: "#22D3EE",
            },
            {
              eyebrow: "Calm",
              title: "Breathe it down",
              desc: "Follow a paced breathing session to bring your pulse down, then take another reading and watch the numbers move.",
              color: "#A24BFF",
            },
          ].map((f) => (
            <div key={f.title} className="zs-card-tint p-6 flex flex-col gap-3" style={{ ["--tint" as string]: f.color }}>
              <span className="zs-eyebrow block" style={{ ["--tint" as string]: f.color }}>{f.eyebrow}</span>
              <h3 className="font-display font-semibold text-xl text-[#EAF0FA]">{f.title}</h3>
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

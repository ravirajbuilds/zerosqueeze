"use client";

export function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      title: "Place phone on chest",
      desc: "Lie flat and rest your iPhone face-up on your sternum. The accelerometer captures micro-vibrations from each heartbeat — the SCG signal.",
      color: "#FF3D71",
    },
    {
      num: "02",
      title: "Cover the lens with your finger",
      desc: "Press your fingertip lightly over the rear camera and flash. The PPG sensor reads subtle changes in blood volume with every pulse.",
      color: "#22D3EE",
    },
    {
      num: "03",
      title: "Get your Heart Check",
      desc: "Measuring both at once lets ZeroSqueeze time the pulse from chest to fingertip — the pulse transit time. In under 60 seconds, on-device AI fuses the signals into a cuffless blood-pressure index, a heart-health score, and your estimated heart age. Nothing leaves your phone.",
      color: "#A24BFF",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 px-6" style={{ background: "linear-gradient(180deg, transparent 0%, rgba(162,75,255,0.04) 50%, transparent 100%)" }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#A24BFF]">How It Works</span>
          <h2 className="font-display font-bold text-[#EAF0FA] mt-3" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Three steps to{" "}
            <span className="gradient-text">know your heart</span>
          </h2>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden md:block absolute left-[28px] top-12 bottom-12 w-px" style={{ background: "linear-gradient(to bottom, #FF3D71, #22D3EE, #A24BFF)" }} />

          <div className="flex flex-col gap-10">
            {steps.map((s, i) => (
              <div key={s.num} className="flex gap-6 md:gap-8 items-start">
                {/* Number badge */}
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center font-display font-bold text-sm relative z-10"
                  style={{
                    background: `${s.color}15`,
                    border: `2px solid ${s.color}60`,
                    color: s.color,
                    boxShadow: `0 0 20px ${s.color}20`,
                  }}
                >
                  {s.num}
                </div>
                {/* Content */}
                <div className="flex-1 pt-3 pb-6">
                  <h3 className="font-display font-semibold text-xl text-[#EAF0FA] mb-2">{s.title}</h3>
                  <p className="text-[#A7B2C6] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

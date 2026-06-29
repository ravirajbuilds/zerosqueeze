"use client";

export function PrivacySection() {
  const points = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2FD27A" strokeWidth="1.5" strokeLinecap="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Runs on your phone",
      desc: "Every calculation happens right on your iPhone. None of it gets sent to a server, because there isn't one.",
      color: "#2FD27A",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      title: "No account required",
      desc: "No sign-up, no email, no cloud profile. Your health data stays in Apple's Health app on your device.",
      color: "#22D3EE",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#A24BFF" strokeWidth="1.5" strokeLinecap="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
        </svg>
      ),
      title: "Nothing collected",
      desc: "No analytics, no ad kits, no trackers. We genuinely have no idea who you are, and we'd like to keep it that way.",
      color: "#A24BFF",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFB020" strokeWidth="1.5" strokeLinecap="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
      title: "HealthKit integration",
      desc: "Readings are optionally saved to Apple Health with your consent. You control what's stored and for how long.",
      color: "#FFB020",
    },
  ];

  return (
    <section id="privacy" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#2FD27A]">Privacy First</span>
          <h2 className="font-display font-bold text-[#EAF0FA] mt-3" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Nothing leaves{" "}
            <span className="gradient-text">your phone</span>
          </h2>
          <p className="text-[#A7B2C6] mt-4 max-w-xl mx-auto text-lg">
            Your heart data belongs to you, full stop. We didn't bolt privacy on at the end. It's the reason the app has no account and no server.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {points.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-[#27324A] bg-[#141B2B] p-6 flex gap-4"
            >
              <div
                className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: `${p.color}12`, border: `1px solid ${p.color}30` }}
              >
                {p.icon}
              </div>
              <div>
                <h3 className="font-display font-semibold text-[#EAF0FA] mb-1.5">{p.title}</h3>
                <p className="text-[#A7B2C6] text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <a href="/privacy" className="flex justify-center mt-10">
          <span className="inline-flex items-center gap-2 text-sm text-[#2FD27A] hover:text-[#EAF0FA] transition-colors">
            Read our full privacy policy
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </span>
        </a>
      </div>
    </section>
  );
}

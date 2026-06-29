import { Navbar } from "@/components/marketing/Navbar";
import { CTABandSection, FooterSection } from "@/components/marketing/CTAAndFooter";

export default function PrivacyPage() {
  return (
    <div style={{ background: "#0A0E18" }} className="min-h-svh relative">
      <div className="zs-bloom" aria-hidden />
      <Navbar />
      <main className="pt-28 pb-0 relative z-10">
        <section className="px-6 max-w-3xl mx-auto mb-20">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#2FD27A]">Privacy Policy</span>
          <h1 className="font-display font-bold text-[#EAF0FA] mt-3 mb-6" style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}>
            Nothing leaves{" "}
            <span style={{ background: "linear-gradient(135deg, #FF3D71, #A24BFF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              your phone
            </span>
          </h1>
          <p className="text-[#A7B2C6] text-lg leading-relaxed mb-12">
            ZeroSqueeze was designed from day one with privacy as a hard constraint. Here is exactly what we collect — and what we do not.
          </p>

          {[
            {
              title: "Data we collect",
              color: "#2FD27A",
              content: "None. ZeroSqueeze does not collect, transmit, or store any personal data on external servers. There are no servers. All sensor readings, cardiac estimates, and app preferences remain exclusively on your device.",
            },
            {
              title: "Sensor access",
              color: "#22D3EE",
              content: "ZeroSqueeze requests access to the accelerometer (for SCG) and rear camera + flash (for PPG). These are used only during an active measurement session. Sensor data is processed in real time and discarded immediately — it is never written to disk or transmitted anywhere.",
            },
            {
              title: "Apple HealthKit",
              color: "#A24BFF",
              content: "If you choose to enable HealthKit integration, reading estimates are saved locally to the Apple Health app on your device — under your full control. ZeroSqueeze never reads other HealthKit categories, and you can revoke access at any time in iOS Settings.",
            },
            {
              title: "Analytics & tracking",
              color: "#FFB020",
              content: "Zero. There are no analytics SDKs, no crash reporters, no advertising identifiers, no third-party frameworks that phone home. We do not know how many people use ZeroSqueeze, when they use it, or what device they have.",
            },
            {
              title: "Account & identity",
              color: "#FF3D71",
              content: "No account is required, no email is collected, no user profile exists. ZeroSqueeze has no login system. Your identity is entirely unknown to us.",
            },
            {
              title: "Children",
              color: "#2FD27A",
              content: "ZeroSqueeze does not knowingly collect any data from any user — adult or child. Since no data is collected at all, COPPA and similar regulations are satisfied by design.",
            },
          ].map((s) => (
            <div key={s.title} className="mb-8 rounded-2xl border border-[#27324A] bg-[#141B2B] p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full" style={{ background: s.color }} />
                <h2 className="font-display font-semibold text-[#EAF0FA]">{s.title}</h2>
              </div>
              <p className="text-[#A7B2C6] leading-relaxed text-sm">{s.content}</p>
            </div>
          ))}

          <div className="rounded-xl border border-[#2FD27A]/25 bg-[#2FD27A]/05 p-5 mt-4">
            <p className="text-sm text-[#A7B2C6]">
              <strong className="text-[#2FD27A]">Questions?</strong> If you have any privacy questions, reach us at{" "}
              <a href="mailto:privacy@zerosqueeze.app" className="text-[#22D3EE] hover:text-[#EAF0FA] transition-colors">privacy@zerosqueeze.app</a>
            </p>
          </div>
        </section>

        <CTABandSection />
      </main>
      <FooterSection />
    </div>
  );
}

import { Navbar } from "@/components/marketing/Navbar";
import { CTABandSection, FooterSection } from "@/components/marketing/CTAAndFooter";
import { SeismicMark } from "@/components/marketing/SeismicMark";

export default function SciencePage() {
  return (
    <div style={{ background: "#0A0E18" }} className="min-h-svh relative">
      <div className="zs-bloom" aria-hidden />
      <Navbar />
      <main className="pt-28 pb-0 relative z-10">
        {/* Hero */}
        <section className="px-6 max-w-4xl mx-auto mb-20">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#22D3EE]">The Science</span>
          <h1 className="font-display font-bold text-[#EAF0FA] mt-3 mb-6" style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}>
            Peer-reviewed physics,{" "}
            <span style={{ background: "linear-gradient(135deg, #FF3D71, #A24BFF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              in your pocket
            </span>
          </h1>
          <p className="text-[#A7B2C6] text-lg leading-relaxed max-w-2xl">
            ZeroSqueeze combines two well-studied physiological sensing techniques — Seismocardiography and Photoplethysmography — and fuses them with on-device machine learning to estimate cardiac metrics without any external hardware.
          </p>
        </section>

        {/* SCG */}
        <section className="px-6 max-w-4xl mx-auto mb-16">
          <div className="rounded-2xl border border-[#27324A] bg-[#141B2B] p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#FF3D7115", border: "1px solid #FF3D7130" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF3D71" strokeWidth="1.5" strokeLinecap="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
              </div>
              <div>
                <span className="font-mono text-[10px] tracking-widest text-[#FF3D71] uppercase block">Sensor 1</span>
                <h2 className="font-display font-semibold text-xl text-[#EAF0FA]">Seismocardiography (SCG)</h2>
              </div>
            </div>
            <p className="text-[#A7B2C6] leading-relaxed mb-4">
              Seismocardiography measures the vibrations transmitted to the chest wall by the mechanical activity of the heart. Each heartbeat creates micro-accelerations that a modern smartphone's inertial measurement unit can detect. This technique has been studied in peer-reviewed literature since the early 1990s.
            </p>
            <p className="text-[#A7B2C6] leading-relaxed">
              When placed flat on the sternum, the iPhone's three-axis accelerometer captures these vibrations at high sample rates. ZeroSqueeze's signal processing pipeline extracts timing features correlated with systolic and diastolic phases — enabling a cuffless BP estimate with no additional hardware.
            </p>
            <div className="mt-6">
              <svg viewBox="0 0 400 80" className="w-full h-16">
                <polyline points="0,40 30,40 50,38 65,10 78,60 90,32 105,45 120,40 150,40 168,38 180,8 194,62 206,30 218,46 230,40 260,40 278,37 290,9 304,63 316,29 328,47 340,40 370,40 390,38 400,40"
                  fill="none" stroke="#FF3D71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="text-[10px] font-mono text-[#717C90] uppercase tracking-widest mt-1">SCG · Chest accelerometer waveform</p>
            </div>
          </div>
        </section>

        {/* PPG */}
        <section className="px-6 max-w-4xl mx-auto mb-16">
          <div className="rounded-2xl border border-[#27324A] bg-[#141B2B] p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#22D3EE15", border: "1px solid #22D3EE30" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="3" /><path d="M6.4 6.4a8 8 0 1 0 11.2 0" /></svg>
              </div>
              <div>
                <span className="font-mono text-[10px] tracking-widest text-[#22D3EE] uppercase block">Sensor 2</span>
                <h2 className="font-display font-semibold text-xl text-[#EAF0FA]">Photoplethysmography (PPG)</h2>
              </div>
            </div>
            <p className="text-[#A7B2C6] leading-relaxed mb-4">
              Photoplethysmography uses light to detect changes in blood volume in peripheral tissue. The rear camera flash acts as the light source; the camera sensor measures variations in reflected light intensity as blood pulses through the capillaries of your fingertip.
            </p>
            <p className="text-[#A7B2C6] leading-relaxed">
              PPG is the same optical principle used in every smartwatch and clinical pulse oximeter. ZeroSqueeze uses it to measure inter-beat intervals (IBI), heart rate, HRV, respiratory rate, and SpO2. The color and pulsatility of the signal also feed a hemoglobin estimate — tuned by your sex and skin tone for an at-home anemia screen — and a perfusion index, all from the iPhone you already own.
            </p>
            <div className="mt-6">
              <svg viewBox="0 0 400 80" className="w-full h-16">
                <polyline points="0,50 40,50 60,48 75,18 88,55 100,50 130,50 148,47 162,16 176,56 188,50 218,50 236,47 250,15 264,57 276,50 306,50 324,47 338,14 352,58 364,50 394,50 400,50"
                  fill="none" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="text-[10px] font-mono text-[#717C90] uppercase tracking-widest mt-1">PPG · Finger optical waveform</p>
            </div>
          </div>
        </section>

        {/* Fusion */}
        <section className="px-6 max-w-4xl mx-auto mb-16">
          <div className="rounded-2xl border border-[#A24BFF]/30 bg-[#141B2B] p-8" style={{ boxShadow: "0 0 40px rgba(162,75,255,0.08)" }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#A24BFF15", border: "1px solid #A24BFF30" }}>
                <SeismicMark size={28} />
              </div>
              <div>
                <span className="font-mono text-[10px] tracking-widest text-[#A24BFF] uppercase block">On-Device AI</span>
                <h2 className="font-display font-semibold text-xl text-[#EAF0FA]">Signal Fusion</h2>
              </div>
            </div>
            <p className="text-[#A7B2C6] leading-relaxed mb-4">
              Captured together, chest SCG and finger PPG reveal the <strong className="text-[#EAF0FA]">pulse transit time</strong> — the delay between the aortic valve opening (SCG) and the pulse arriving at the fingertip (PPG). That single timing feature is the key to cuffless blood pressure, and neither sensor can produce it alone. A model trained on thousands of paired recordings fuses both signals into a heart-health score and an estimated heart age. All inference runs on your iPhone's Neural Engine — your raw sensor data never leaves the device.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
              {[
                { label: "Cuffless BP", color: "#A24BFF" },
                { label: "Heart Score", color: "#FF3D71" },
                { label: "Heart Age", color: "#FF7A4D" },
                { label: "Pulse Transit Time", color: "#22D3EE" },
                { label: "HRV (RMSSD)", color: "#22D3EE" },
                { label: "Hemoglobin", color: "#FF7A4D" },
                { label: "Resp. Rate", color: "#2FD27A" },
                { label: "SpO2", color: "#2FD27A" },
              ].map((m) => (
                <div key={m.label} className="rounded-xl border border-[#27324A] bg-[#0C1322] p-3 text-center">
                  <div className="w-2 h-2 rounded-full mx-auto mb-2" style={{ background: m.color, boxShadow: `0 0 8px ${m.color}` }} />
                  <span className="text-xs text-[#A7B2C6]">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="px-6 max-w-4xl mx-auto mb-20">
          <div className="rounded-xl border border-[#FFB020]/20 bg-[#FFB020]/05 p-5">
            <p className="text-sm text-[#A7B2C6] leading-relaxed">
              <strong className="text-[#FFB020]">Important:</strong> ZeroSqueeze provides wellness estimates for general awareness purposes only. It is not a medical device, and its outputs are not intended to diagnose, treat, cure, or prevent any condition. Always consult a qualified healthcare professional for clinical measurements and medical advice.
            </p>
          </div>
        </section>

        <CTABandSection />
      </main>
      <FooterSection />
    </div>
  );
}

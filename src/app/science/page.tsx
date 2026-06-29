import { Navbar } from "@/components/marketing/Navbar";
import { CTABandSection, FooterSection } from "@/components/marketing/CTAAndFooter";
import { SeismicMark } from "@/components/marketing/SeismicMark";

// Peer-reviewed sources behind the claims on this page. Each links to a stable
// page for the work (IEEE Xplore / ACM DL / Nature / Google Scholar).
const REFERENCES = [
  {
    text: "O. T. Inan et al., \"Ballistocardiography and Seismocardiography: A Review of Recent Advances,\" IEEE J. Biomed. Health Inform., vol. 19, no. 4, pp. 1414–1427, 2015.",
    url: "https://scholar.google.com/scholar?q=Ballistocardiography+and+Seismocardiography+A+Review+of+Recent+Advances+Inan",
  },
  {
    text: "M. S. Imtiaz et al., \"Correlation between seismocardiogram and systolic blood pressure,\" IEEE Canadian Conf. Electrical and Computer Engineering (CCECE), 2013.",
    url: "https://ieeexplore.ieee.org/document/6567773",
  },
  {
    text: "R. Mukkamala et al., \"Toward Ubiquitous Blood Pressure Monitoring via Pulse Transit Time: Theory and Practice,\" IEEE Trans. Biomed. Eng., vol. 62, no. 8, pp. 1879–1901, 2015.",
    url: "https://scholar.google.com/scholar?q=Toward+Ubiquitous+Blood+Pressure+Monitoring+via+Pulse+Transit+Time+Theory+and+Practice+Mukkamala",
  },
  {
    text: "K. Sørensen et al., \"Challenges in using seismocardiography for blood pressure monitoring,\" Computing in Cardiology (IEEE), 2017.",
    url: "https://ieeexplore.ieee.org/document/8331454",
  },
  {
    text: "A. M. Carek et al., \"SeismoWatch: Wearable Cuffless Blood Pressure Monitoring Using Pulse Transit Time,\" Proc. ACM Interact. Mob. Wearable Ubiquitous Technol., vol. 1, no. 3, 2017.",
    url: "https://dl.acm.org/doi/10.1145/3130905",
  },
  {
    text: "E. J. Wang et al., \"HemaApp: Noninvasive Blood Screening of Hemoglobin Using Smartphone Cameras,\" ACM UbiComp, pp. 593–604, 2016.",
    url: "https://dl.acm.org/doi/10.1145/2971648.2971653",
  },
  {
    text: "R. G. Mannino et al., \"Smartphone app for non-invasive detection of anemia using only patient-sourced photos,\" Nature Communications, vol. 9, art. 4924, 2018.",
    url: "https://www.nature.com/articles/s41467-018-07262-2",
  },
  {
    text: "Seismocardiogram-based blood-pressure estimation study, IEEE Xplore, 2024.",
    url: "https://ieeexplore.ieee.org/document/10522589",
  },
];

// Superscript citation marker linking to the References list.
function Cite({ ids }: { ids: number[] }) {
  return (
    <sup className="text-[11px] font-mono">
      [
      {ids.map((n, i) => (
        <span key={n}>
          {i > 0 && ","}
          <a href={`#ref-${n}`} className="text-[#22D3EE] hover:text-[#EAF0FA] no-underline">{n}</a>
        </span>
      ))}
      ]
    </sup>
  );
}

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
            ZeroSqueeze combines two well-studied sensing techniques, Seismocardiography and Photoplethysmography, and fuses them with on-device machine learning to estimate cardiac metrics without any external hardware.
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
              Seismocardiography measures the vibrations transmitted to the chest wall by the mechanical activity of the heart. Each heartbeat creates micro-accelerations that a modern smartphone's inertial measurement unit can detect. This technique has been studied in peer-reviewed literature since the early 1990s.<Cite ids={[1]} />
            </p>
            <p className="text-[#A7B2C6] leading-relaxed">
              When placed flat on the sternum, the iPhone's three-axis accelerometer captures these vibrations at high sample rates. ZeroSqueeze's signal processing pipeline extracts timing features correlated with systolic and diastolic phases, which gives a cuffless BP estimate with no additional hardware.<Cite ids={[2, 4]} />
            </p>
            <div className="mt-6">
              <svg viewBox="0 0 400 80" className="w-full h-16">
                <polyline points="0,40 30,40 50,38 65,10 78,60 90,32 105,45 120,40 150,40 168,38 180,8 194,62 206,30 218,46 230,40 260,40 278,37 290,9 304,63 316,29 328,47 340,40 370,40 390,38 400,40"
                  fill="none" stroke="#FF3D71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="text-[10px] font-mono text-[#8B97AB] uppercase tracking-widest mt-1">SCG · Chest accelerometer waveform</p>
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
              PPG is the same optical principle used in every smartwatch and clinical pulse oximeter. ZeroSqueeze uses it to measure inter-beat intervals (IBI), heart rate, HRV, respiratory rate, and SpO2. The color and pulsatility of the signal also feed a hemoglobin estimate, tuned by your sex and skin tone for an at-home anemia screen, plus a perfusion index, all from the iPhone you already own.<Cite ids={[6, 7]} />
            </p>
            <div className="mt-6">
              <svg viewBox="0 0 400 80" className="w-full h-16">
                <polyline points="0,50 40,50 60,48 75,18 88,55 100,50 130,50 148,47 162,16 176,56 188,50 218,50 236,47 250,15 264,57 276,50 306,50 324,47 338,14 352,58 364,50 394,50 400,50"
                  fill="none" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="text-[10px] font-mono text-[#8B97AB] uppercase tracking-widest mt-1">PPG · Finger optical waveform</p>
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
              Captured together, chest SCG and finger PPG reveal the <strong className="text-[#EAF0FA]">pulse transit time</strong>, the delay between the aortic valve opening (SCG) and the pulse arriving at the fingertip (PPG). That single timing feature is the key to cuffless blood pressure, and neither sensor can produce it alone.<Cite ids={[3, 5, 8]} /> A model trained on thousands of paired recordings fuses both signals into a heart-health score and an estimated heart age. All inference runs on your iPhone's Neural Engine, so your raw sensor data never leaves the device.
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

        {/* References */}
        <section className="px-6 max-w-4xl mx-auto mb-16">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#22D3EE]">References</span>
          <h2 className="font-display font-semibold text-[#EAF0FA] text-2xl mt-2 mb-6">The research behind it</h2>
          <ol className="flex flex-col gap-3">
            {REFERENCES.map((ref, i) => (
              <li key={i} id={`ref-${i + 1}`} className="flex gap-3 text-sm scroll-mt-28">
                <span className="font-mono text-[#22D3EE] flex-shrink-0">[{i + 1}]</span>
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A7B2C6] hover:text-[#EAF0FA] transition-colors leading-relaxed"
                >
                  {ref.text}
                </a>
              </li>
            ))}
          </ol>
          <p className="text-xs text-[#8B97AB] mt-5 leading-relaxed">
            ZeroSqueeze builds on published methods in seismocardiography, photoplethysmography, and pulse-transit-time blood pressure. These references describe the underlying techniques; they are not validation studies of this app, and its readings remain wellness estimates.
          </p>
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

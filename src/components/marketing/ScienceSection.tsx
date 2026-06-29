"use client";

export function ScienceSection() {
  return (
    <section id="science" className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text */}
        <div>
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#22D3EE]">The Science</span>
          <h2 className="font-display font-bold text-[#EAF0FA] mt-3 mb-6" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
            Peer-reviewed physics,{" "}
            <span className="gradient-text">on your phone</span>
          </h2>
          <div className="flex flex-col gap-6 text-[#A7B2C6] leading-relaxed">
            <p>
              <strong className="text-[#EAF0FA]">Seismocardiography (SCG)</strong> is a technique studied since the 1990s that measures the mechanical vibrations the beating heart transmits through the chest wall. Published research shows a strong correlation between SCG waveform features and blood pressure.
            </p>
            <p>
              <strong className="text-[#EAF0FA]">Photoplethysmography (PPG)</strong> is the same optical principle used in every smartwatch and pulse oximeter — detecting changes in light absorption as blood volume pulses through your fingertip. ZeroSqueeze uses the iPhone's camera flash as the light source.
            </p>
            <p>
              Measured at the same moment, the two signals reveal the <strong className="text-[#EAF0FA]">pulse transit time</strong> — how long the pulse takes to travel from the chest to the fingertip. On-device machine learning turns that into a cuffless blood-pressure index, a heart-health score, and an estimated heart age. From the PPG signal alone it also models <strong className="text-[#EAF0FA]">hemoglobin</strong>, using your skin tone and sex to set the reference range. All processing happens locally — your data never touches a server.
            </p>
            <div className="rounded-xl border border-[#22D3EE]/20 bg-[#22D3EE]/05 p-4">
              <p className="text-sm text-[#22D3EE]/80">
                <strong className="text-[#22D3EE]">Important:</strong> ZeroSqueeze provides estimates for general wellness awareness, not medical diagnosis. Always consult a healthcare professional for clinical measurements.
              </p>
            </div>
          </div>
          <a href="/science" className="inline-flex items-center gap-2 mt-8 text-[#22D3EE] hover:text-[#EAF0FA] transition-colors text-sm font-medium">
            Read the full science page
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </div>

        {/* Visual: waveform diagram */}
        <div className="rounded-2xl border border-[#27324A] bg-[#141B2B] p-8 flex flex-col gap-6">
          <span className="font-mono text-[10px] tracking-widest uppercase text-[#717C90]">Signal Fusion</span>
          {/* SCG waveform */}
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-mono text-[10px] text-[#FF3D71] uppercase tracking-wider">SCG · Chest</span>
              <span className="font-mono text-[9px] text-[#717C90]">Accelerometer</span>
            </div>
            <svg viewBox="0 0 300 60" className="w-full h-14">
              <polyline
                points="0,30 20,30 35,30 45,10 55,50 65,25 75,35 90,30 110,30 120,30 135,12 145,48 155,22 165,38 180,30 200,30 215,30 228,8 238,52 248,20 260,40 275,30 300,30"
                fill="none"
                stroke="#FF3D71"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {/* PPG waveform */}
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-mono text-[10px] text-[#22D3EE] uppercase tracking-wider">PPG · Finger</span>
              <span className="font-mono text-[9px] text-[#717C90]">Camera + Flash</span>
            </div>
            <svg viewBox="0 0 300 60" className="w-full h-14">
              <polyline
                points="0,40 30,40 50,38 60,15 70,42 80,40 110,40 130,38 140,14 150,43 160,40 190,40 210,37 220,13 230,44 240,40 270,40 290,38 300,40"
                fill="none"
                stroke="#22D3EE"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {/* Fusion output */}
          <div className="border-t border-[#27324A] pt-4 flex items-center justify-between">
            <div>
              <span className="font-mono text-[10px] text-[#A24BFF] uppercase tracking-wider block mb-1">AI Fusion Output</span>
              <span className="font-display font-bold text-2xl text-[#EAF0FA]">118/76 <span className="text-sm font-normal text-[#717C90]">mmHg</span></span>
            </div>
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #A24BFF20, #FF3D7120)", border: "1px solid #A24BFF40" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A24BFF" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /><circle cx="12" cy="12" r="1" fill="#A24BFF" /></svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

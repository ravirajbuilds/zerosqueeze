"use client";

interface BPGaugeProps {
  systolic?: number;
  diastolic?: number;
}

export function BPGauge({ systolic = 118, diastolic = 76 }: BPGaugeProps) {
  // Position on scale: 90-180 systolic range
  const pct = Math.min(Math.max((systolic - 90) / 90, 0), 1);

  return (
    <div className="rounded-2xl border border-[#27324A] bg-[#141B2B] p-5">
      <div className="flex justify-between items-center mb-4">
        <span className="font-mono text-[10px] tracking-widest text-[#FF3D71] uppercase">Blood Pressure</span>
        <span className="font-mono text-[9px] text-[#8B97AB] bg-[#27324A]/40 px-2 py-0.5 rounded-full">SCG CALIBRATED</span>
      </div>
      <div className="flex items-baseline gap-2 mb-4">
        <span className="font-display text-5xl font-bold text-[#EAF0FA]">{systolic}</span>
        <span className="font-display text-3xl text-[#8B97AB]">/</span>
        <span className="font-display text-5xl font-bold text-[#EAF0FA]">{diastolic}</span>
        <span className="font-mono text-xs text-[#A7B2C6] ml-1">mmHg</span>
      </div>
      {/* Range bar */}
      <div className="relative w-full h-2 rounded-full overflow-hidden mb-2">
        <div className="absolute inset-0 rounded-full" style={{ background: "linear-gradient(to right, #2FD27A 0%, #2FD27A 40%, #FFB020 55%, #FF3D71 75%, #A24BFF 100%)" }} />
        {/* Needle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg rounded-full"
          style={{ left: `${pct * 92 + 4}%`, boxShadow: "0 0 6px rgba(255,255,255,0.8)" }}
        />
      </div>
      <div className="flex justify-between text-[10px] font-mono text-[#8B97AB]">
        <span>OPTIMAL</span>
        <span>NORMAL</span>
        <span>ELEVATED</span>
        <span className="text-[#FF3D71]">HIGH</span>
      </div>
      <p className="mt-3 text-xs text-[#8B97AB]">Estimates only, not a medical diagnosis.</p>
    </div>
  );
}

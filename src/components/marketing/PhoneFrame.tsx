"use client";
import { ScoreRing } from "./ScoreRing";

type PhoneVariant = "dashboard" | "bp" | "hrv";

interface PhoneFrameProps {
  variant?: PhoneVariant;
}

export function PhoneFrame({ variant = "dashboard" }: PhoneFrameProps) {
  return (
    <div className="relative mx-auto" style={{ width: 240, height: 480 }}>
      {/* Phone bezel */}
      <div
        className="absolute inset-0 rounded-[2.5rem] border-4 border-[#27324A]"
        style={{
          background: "linear-gradient(145deg, #1A2338 0%, #0C1322 100%)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)",
        }}
      />
      {/* Notch */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-4 bg-[#0A0E18] rounded-full z-10" />
      {/* Screen content */}
      <div className="absolute inset-2 rounded-[2rem] overflow-hidden bg-[#0A0E18] flex flex-col p-4 pt-8 gap-3">
        {/* Status bar */}
        <div className="flex justify-between items-center mb-1">
          <span className="text-[8px] font-mono text-[#717C90]">9:41 AM</span>
          <span className="text-[8px] font-mono text-[#717C90]">ZeroSqueeze</span>
        </div>

        {variant === "dashboard" && <DashboardScreen />}
        {variant === "bp" && <BPScreen />}
        {variant === "hrv" && <HRVScreen />}

        {/* Bottom disclaimer */}
        <p className="text-[6px] font-mono text-[#717C90] text-center mt-auto">Estimates · not a diagnosis</p>
      </div>
      {/* Side buttons */}
      <div className="absolute -right-1 top-24 w-1 h-8 bg-[#27324A] rounded-full" />
      <div className="absolute -left-1 top-20 w-1 h-6 bg-[#27324A] rounded-full" />
      <div className="absolute -left-1 top-28 w-1 h-6 bg-[#27324A] rounded-full" />
    </div>
  );
}

function ScreenTitle({ text }: { text: string }) {
  return <span className="font-mono text-[8px] tracking-widest text-[#717C90] uppercase block">{text}</span>;
}

/* ---------------- Today Dashboard ---------------- */
function DashboardScreen() {
  return (
    <>
      <div className="flex justify-center">
        <ScoreRing value={92} size={72} label="Score" color="#FF3D71" />
      </div>
      {/* Mini BP readout */}
      <div className="rounded-lg border border-[#27324A] bg-[#141B2B] p-2.5">
        <span className="font-mono text-[7px] tracking-widest text-[#717C90] uppercase block mb-1">Blood Pressure</span>
        <div className="flex items-baseline gap-1">
          <span className="font-display font-bold text-sm text-[#EAF0FA]">118</span>
          <span className="text-[#717C90] text-xs">/</span>
          <span className="font-display font-bold text-sm text-[#EAF0FA]">76</span>
          <span className="font-mono text-[7px] text-[#717C90]">mmHg</span>
        </div>
        <div className="w-full h-1 rounded-full mt-1.5 bg-[#0C1322] overflow-hidden">
          <div className="h-full w-[38%] rounded-full" style={{ background: "linear-gradient(to right, #2FD27A, #FFB020)" }} />
        </div>
      </div>
      {/* Mini metric chips */}
      <div className="grid grid-cols-2 gap-1.5">
        {[
          { label: "HR", value: "62", unit: "bpm", color: "#FF3D71" },
          { label: "HRV", value: "48", unit: "ms", color: "#22D3EE" },
          { label: "SpO2", value: "98", unit: "%", color: "#2FD27A" },
          { label: "RR", value: "14", unit: "br/m", color: "#A24BFF" },
        ].map((m) => (
          <div key={m.label} className="rounded-md border border-[#27324A] bg-[#0C1322] p-1.5">
            <span className="font-mono text-[7px] text-[#717C90] uppercase block">{m.label}</span>
            <span className="font-display font-bold text-xs" style={{ color: m.color }}>{m.value}</span>
            <span className="font-mono text-[6px] text-[#717C90]"> {m.unit}</span>
          </div>
        ))}
      </div>
    </>
  );
}

/* ---------------- BP Trend ---------------- */
function BPScreen() {
  const sys = [124, 120, 122, 117, 119, 116, 118];
  const dia = [80, 78, 79, 75, 77, 74, 76];
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  return (
    <>
      <ScreenTitle text="Blood Pressure · 7 days" />
      <div className="flex items-baseline gap-1.5 -mt-1">
        <span className="font-display font-bold text-3xl text-[#EAF0FA]">118</span>
        <span className="text-[#717C90] text-lg">/</span>
        <span className="font-display font-bold text-3xl text-[#EAF0FA]">76</span>
        <span className="font-mono text-[8px] text-[#717C90] ml-0.5">mmHg avg</span>
      </div>
      <Sparkline series={[sys, dia]} colors={["#FF3D71", "#A24BFF"]} min={70} max={130} />
      <div className="flex justify-between px-0.5">
        {days.map((d, i) => (
          <span key={i} className="font-mono text-[7px] text-[#717C90]">{d}</span>
        ))}
      </div>
      <div className="flex gap-3 mt-1">
        <span className="font-mono text-[7px] text-[#FF3D71]">● Systolic</span>
        <span className="font-mono text-[7px] text-[#A24BFF]">● Diastolic</span>
      </div>
    </>
  );
}

function Sparkline({ series, colors, min, max }: { series: number[][]; colors: string[]; min: number; max: number }) {
  const w = 200, h = 64, pad = 4;
  const n = series[0].length;
  const x = (i: number) => pad + (i / (n - 1)) * (w - pad * 2);
  const y = (v: number) => h - pad - ((v - min) / (max - min)) * (h - pad * 2);
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full" style={{ height: 64 }}>
      {series.map((s, si) => {
        const d = s.map((v, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(" ");
        return (
          <g key={si}>
            <path d={d} fill="none" stroke={colors[si]} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ filter: `drop-shadow(0 0 3px ${colors[si]}66)` }} />
            {s.map((v, i) => (
              <circle key={i} cx={x(i)} cy={y(v)} r={1.6} fill={colors[si]} />
            ))}
          </g>
        );
      })}
    </svg>
  );
}

/* ---------------- HRV History ---------------- */
function HRVScreen() {
  const vals = [38, 44, 41, 49, 46, 52, 48];
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const max = 56;
  return (
    <>
      <ScreenTitle text="Heart Rate Variability" />
      <div className="flex items-baseline gap-1.5 -mt-1">
        <span className="font-display font-bold text-3xl text-[#22D3EE]">48</span>
        <span className="font-mono text-[8px] text-[#717C90]">ms · 7-day avg 45</span>
      </div>
      {/* Bar chart */}
      <div className="flex items-end justify-between gap-1.5 h-20 px-0.5">
        {vals.map((v, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm"
            style={{
              height: `${(v / max) * 100}%`,
              background: i === vals.length - 1 ? "#22D3EE" : "#1F5560",
              boxShadow: i === vals.length - 1 ? "0 0 6px #22D3EE88" : "none",
            }}
          />
        ))}
      </div>
      <div className="flex justify-between gap-1.5 px-0.5">
        {days.map((d, i) => (
          <span key={i} className="flex-1 text-center font-mono text-[7px] text-[#717C90]">{d}</span>
        ))}
      </div>
      <div className="rounded-md border border-[#27324A] bg-[#0C1322] p-1.5 mt-1">
        <span className="font-mono text-[7px] text-[#717C90] uppercase">Trend</span>
        <span className="font-display font-bold text-xs text-[#2FD27A] ml-1">↑ Recovering</span>
      </div>
    </>
  );
}

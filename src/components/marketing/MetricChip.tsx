"use client";

interface MetricChipProps {
  label: string;
  value: string | number;
  unit: string;
  color: string;
}

export function MetricChip({ label, value, unit, color }: MetricChipProps) {
  return (
    <div className="rounded-xl border border-[#27324A] bg-[#141B2B] p-4 flex flex-col gap-2">
      <span className="font-mono text-[10px] tracking-widest uppercase text-[#717C90]">{label}</span>
      <div className="flex items-baseline gap-1">
        <span className="font-display text-2xl font-bold" style={{ color }}>{value}</span>
        <span className="font-mono text-xs text-[#717C90]">{unit}</span>
      </div>
      <div className="w-full h-0.5 rounded-full" style={{ background: `linear-gradient(to right, ${color}60, transparent)` }} />
    </div>
  );
}

export function MetricChipsGrid() {
  const metrics = [
    { label: "Heart Rate", value: 62, unit: "bpm", color: "#FF3D71" },
    { label: "HRV", value: 48, unit: "ms", color: "#22D3EE" },
    { label: "Hemoglobin", value: 14.2, unit: "g/dL", color: "#FF7A4D" },
    { label: "Resp Rate", value: 14, unit: "br/m", color: "#A24BFF" },
    { label: "Perfusion", value: 3.4, unit: "PI%", color: "#2FD27A" },
    { label: "Est. SpO2", value: 98, unit: "%", color: "#22D3EE" },
  ];
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {metrics.map((m) => <MetricChip key={m.label} {...m} />)}
    </div>
  );
}

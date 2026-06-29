"use client";
import { useEffect, useRef, useState } from "react";

interface ScoreRingProps {
  value: number; // 0-100
  size?: number;
  label?: string;
  color?: string;
}

export function ScoreRing({ value, size = 100, label = "Score", color = "#FF3D71" }: ScoreRingProps) {
  const [animated, setAnimated] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(value); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  const r = (size / 2) * 0.78;
  const circ = 2 * Math.PI * r;
  const offset = circ - (animated / 100) * circ * 0.75;

  return (
    <div ref={ref} className="flex flex-col items-center" style={{ gap: size * 0.07 }}>
      <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ transform: "rotate(-135deg)" }}>
          {/* Track */}
          <circle
            cx={size / 2} cy={size / 2} r={r}
            fill="none"
            stroke="#27324A"
            strokeWidth={size * 0.06}
            strokeDasharray={`${circ * 0.75} ${circ * 0.25}`}
            strokeLinecap="round"
          />
          {/* Fill */}
          <circle
            cx={size / 2} cy={size / 2} r={r}
            fill="none"
            stroke={color}
            strokeWidth={size * 0.06}
            strokeDasharray={`${circ * 0.75} ${circ * 0.25}`}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 1.4s cubic-bezier(0.34,1.56,0.64,1)", filter: `drop-shadow(0 0 6px ${color}88)` }}
          />
        </svg>
        <span className="absolute font-display font-bold text-[#EAF0FA] leading-none" style={{ fontSize: size * 0.27 }}>{animated}</span>
      </div>
      {label && (
        <span className="font-mono uppercase tracking-widest text-[#717C90] leading-none" style={{ fontSize: Math.max(size * 0.1, 9) }}>{label}</span>
      )}
    </div>
  );
}

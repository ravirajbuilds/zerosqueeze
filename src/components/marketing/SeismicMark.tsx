"use client";

interface SeismicMarkProps {
  size?: number;
  className?: string;
}

export function SeismicMark({ size = 120, className = "" }: SeismicMarkProps) {
  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Expanding rings */}
      <div
        className="absolute rounded-full border border-[#FF3D71]/30 animate-seismic-ring"
        style={{ width: size * 0.5, height: size * 0.5 }}
      />
      <div
        className="absolute rounded-full border border-[#A24BFF]/20 animate-seismic-ring-delay"
        style={{ width: size * 0.5, height: size * 0.5 }}
      />
      <div
        className="absolute rounded-full border border-[#FF3D71]/10 animate-seismic-ring-delay2"
        style={{ width: size * 0.5, height: size * 0.5 }}
      />
      {/* Core glow */}
      <div
        className="absolute rounded-full animate-seismic-pulse"
        style={{
          width: size * 0.28,
          height: size * 0.28,
          background: "radial-gradient(circle, rgba(255,61,113,0.9) 0%, rgba(162,75,255,0.6) 60%, transparent 100%)",
          boxShadow: "0 0 30px rgba(255,61,113,0.6), 0 0 60px rgba(162,75,255,0.3)",
        }}
      />
      {/* Waveform icon */}
      <svg
        width={size * 0.38}
        height={size * 0.38}
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative z-10"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        <circle cx="12" cy="12" r="1" fill="white" />
      </svg>
    </div>
  );
}

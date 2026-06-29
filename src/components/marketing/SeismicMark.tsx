"use client";

interface SeismicMarkProps {
  size?: number;
  className?: string;
  /** Disable the slow rotation (e.g. for the small navbar mark). */
  spin?: boolean;
}

/**
 * The ZeroSqueeze mark — a glowing rose→violet spiral wavefront radiating from
 * a bright focus core, matching the iOS app icon (seismic ripple / sonar ping).
 * Built from logarithmic-spiral arms stroked with the signature pulse gradient.
 */
export function SeismicMark({ size = 120, className = "", spin = true }: SeismicMarkProps) {
  const cx = 50;
  const cy = 52;
  // Logarithmic spiral r = a·e^(bθ). Focus sits slightly low-left like the icon.
  const arm = (rot: number) => {
    const a = 1.4;
    const b = 0.30;
    const pts: string[] = [];
    for (let t = 0; t <= 7.2; t += 0.12) {
      const r = a * Math.exp(b * t);
      if (r > 50) break;
      const ang = t + rot;
      const x = cx + r * Math.cos(ang);
      const y = cy + r * Math.sin(ang);
      pts.push(`${x.toFixed(2)},${y.toFixed(2)}`);
    }
    return pts.join(" ");
  };
  // Three interleaved arms → the swirling double-spiral wavefront.
  const arms = [0, (2 * Math.PI) / 3, (4 * Math.PI) / 3];
  const gid = "zs-spiral-grad";

  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Ambient bloom behind the mark */}
      <div
        className="absolute rounded-full animate-bloom-breathe"
        style={{
          width: size * 0.92,
          height: size * 0.92,
          background:
            "radial-gradient(circle, rgba(162,75,255,0.28) 0%, rgba(255,61,113,0.14) 45%, transparent 72%)",
          filter: `blur(${size * 0.06}px)`,
        }}
      />
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className={spin ? "animate-spin-slow relative" : "relative"}
        style={{ filter: `drop-shadow(0 0 ${size * 0.04}px rgba(255,61,113,0.45))` }}
      >
        <defs>
          <linearGradient id={gid} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF3D71" />
            <stop offset="100%" stopColor="#A24BFF" />
          </linearGradient>
        </defs>
        {arms.map((rot, i) => (
          <polyline
            key={i}
            points={arm(rot)}
            fill="none"
            stroke={`url(#${gid})`}
            strokeWidth={size > 80 ? 2.6 : 3.2}
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={0.92 - i * 0.12}
          />
        ))}
      </svg>
      {/* Bright sensor focus core */}
      <div
        className="absolute rounded-full animate-seismic-pulse"
        style={{
          width: size * 0.12,
          height: size * 0.12,
          left: `${cx}%`,
          top: `${cy}%`,
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, #FFFFFF 0%, #FF3D71 55%, rgba(162,75,255,0.5) 100%)",
          boxShadow: "0 0 16px rgba(255,61,113,0.9), 0 0 36px rgba(162,75,255,0.5)",
        }}
      />
    </div>
  );
}

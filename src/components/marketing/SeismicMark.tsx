"use client";

interface SeismicMarkProps {
  size?: number;
  className?: string;
  /** Slow rotation of the spiral (nice behind the hero; off for the navbar). */
  spin?: boolean;
  /** Ambient bloom behind the mark. */
  glow?: boolean;
}

/**
 * The ZeroSqueeze mark — the actual app icon art: a glowing rose→violet spiral
 * wavefront with a bright focus core. Shipped PNG (transparent rounded corners),
 * so it blends straight onto the ink background.
 */
export function SeismicMark({ size = 120, className = "", spin = false, glow = true }: SeismicMarkProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      {glow && (
        <div
          className="absolute rounded-full animate-bloom-breathe"
          style={{
            width: size * 0.85,
            height: size * 0.85,
            background:
              "radial-gradient(circle, rgba(255,61,113,0.30) 0%, rgba(162,75,255,0.18) 45%, transparent 72%)",
            filter: `blur(${size * 0.07}px)`,
          }}
        />
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.png"
        alt="ZeroSqueeze"
        width={size}
        height={size}
        className={`relative object-contain ${spin ? "animate-spin-slow" : ""}`}
        style={{ width: size, height: size }}
      />
    </div>
  );
}

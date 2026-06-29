import { ImageResponse } from "next/og";

export const alt = "ZeroSqueeze — heart checks on your iPhone, no cuff or wearable";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Branded social share card: deep ink, rose->violet glow, the tagline.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(1000px 600px at 80% 10%, rgba(162,75,255,0.35), transparent 60%), radial-gradient(900px 600px at 10% 95%, rgba(255,61,113,0.30), transparent 60%), #0A0E18",
        }}
      >
        <div
          style={{
            fontSize: 30,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#22D3EE",
            fontWeight: 700,
            display: "flex",
          }}
        >
          iPhone · No cuff · No wearable
        </div>
        <div
          style={{
            fontSize: 92,
            fontWeight: 800,
            color: "#EAF0FA",
            lineHeight: 1.05,
            marginTop: 24,
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          Your heart, in numbers
        </div>
        <div style={{ fontSize: 34, color: "#A7B2C6", marginTop: 28, maxWidth: 900, display: "flex" }}>
          Heart rate, HRV, blood pressure, even hemoglobin. In about a minute, all on your phone.
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 56 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "linear-gradient(135deg, #FF3D71, #A24BFF)",
              display: "flex",
            }}
          />
          <div style={{ fontSize: 40, fontWeight: 800, color: "#EAF0FA", display: "flex" }}>ZeroSqueeze</div>
        </div>
      </div>
    ),
    { ...size }
  );
}

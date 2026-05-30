import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Nexus Uplift Foundation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#1a2744",
          padding: "72px 80px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Dot grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(232,93,63,0.18)",
            filter: "blur(120px)",
          }}
        />

        {/* Top — logo row */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, position: "relative" }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "#e85d3f",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: 20, height: 20, background: "white", borderRadius: "50%" }} />
          </div>
          <span style={{ color: "rgba(255,255,255,0.9)", fontSize: 22, fontWeight: 600, letterSpacing: "-0.02em" }}>
            Nexus Uplift Foundation
          </span>
        </div>

        {/* Centre — headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20, position: "relative" }}>
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "#e85d3f",
            }}
          >
            Science-Based Health Education
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: 800,
            }}
          >
            Empowering Kids Through Health
          </div>
          <div
            style={{
              fontSize: 22,
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.5,
              maxWidth: 680,
            }}
          >
            Replacing dangerous health myths with science — one child, one community at a time.
          </div>
        </div>

        {/* Bottom — location + accent bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative" }}>
          <span style={{ fontSize: 16, color: "rgba(255,255,255,0.35)", letterSpacing: "0.04em" }}>
            Freetown, Sierra Leone
          </span>
          <div style={{ width: 48, height: 4, borderRadius: 99, background: "#e85d3f" }} />
        </div>
      </div>
    ),
    { ...size }
  );
}

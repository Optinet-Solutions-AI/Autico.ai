import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Autico.ai — AI agents that ship work, not slides";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#050810",
          color: "#ffffff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 20% 20%, rgba(61,160,236,0.20) 0%, transparent 60%), radial-gradient(ellipse 60% 60% at 80% 80%, rgba(0,229,204,0.10) 0%, transparent 60%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <svg width="64" height="64" viewBox="0 0 64 64">
            <path d="M32 4 L56 18 L56 46 L32 60 L8 46 L8 18 Z" fill="#3DA0EC" />
            <path d="M22 46 L32 18 L36 18 L46 46 H40 L37.5 39 H26.5 L24 46 Z M28 33 H35 L31.5 23.5 Z" fill="#FFFFFF" />
          </svg>
          <div style={{ fontSize: 36, fontWeight: 600, letterSpacing: -0.5 }}>
            <span style={{ color: "#FFFFFF" }}>Autico</span>
            <span style={{ color: "#3DA0EC" }}>.ai</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 84,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2.5,
              maxWidth: 1000,
              color: "#FFFFFF",
            }}
          >
            AI agents that ship work,{" "}
            <span style={{ color: "#3DA0EC" }}>not slides.</span>
          </div>
          <div style={{ fontSize: 26, color: "#8892b0", maxWidth: 900, lineHeight: 1.4 }}>
            Strategy · Build · Operate · 30+ AI blueprints, deployed in weeks.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", color: "#5a6480", fontSize: 20 }}>
          <span>autico.ai</span>
          <span>30 products • 12 industries</span>
        </div>
      </div>
    ),
    { ...size },
  );
}

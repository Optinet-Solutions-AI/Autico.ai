"use client";

import dynamic from "next/dynamic";

const EtherealShadows = dynamic(() => import("@/components/EtherealShadows"), {
  ssr: false,
});

export default function PageBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
      {/* Layer 1: deep navy base — already painted by html bg, here for safety */}
      <div className="absolute inset-0" style={{ background: "#050810" }} />

      {/* Layer 2: ambient blue/cyan radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 20% 25%, rgba(61,160,236,0.18) 0%, transparent 60%), radial-gradient(ellipse 60% 60% at 85% 75%, rgba(0,229,204,0.12) 0%, transparent 60%)",
        }}
      />

      {/* Layer 3: animated ethereal shadows */}
      <EtherealShadows
        color="rgba(61, 160, 236, 0.42)"
        animation={{ scale: 55, speed: 30 }}
        noise={{ opacity: 0.5, scale: 1.2 }}
      />
    </div>
  );
}

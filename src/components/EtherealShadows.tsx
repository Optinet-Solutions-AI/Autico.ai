"use client";

import React, { useRef, useId, useEffect } from "react";

type AnimationConfig = { scale: number; speed: number };
type NoiseConfig = { opacity: number; scale: number };

type EtherealShadowsProps = {
  className?: string;
  color?: string;
  sizing?: "fill" | "stretch";
  animation?: AnimationConfig;
  noise?: NoiseConfig;
};

function mapRange(value: number, fromLow: number, fromHigh: number, toLow: number, toHigh: number) {
  if (fromLow === fromHigh) return toLow;
  return toLow + ((value - fromLow) / (fromHigh - fromLow)) * (toHigh - toLow);
}

export default function EtherealShadows({
  className = "",
  color = "rgba(61, 160, 236, 0.55)",
  sizing = "fill",
  animation = { scale: 60, speed: 35 },
  noise,
}: EtherealShadowsProps) {
  const id = `ethereal-${useId().replace(/:/g, "")}`;
  const animationEnabled = !!animation && animation.scale > 0;
  const feColorMatrixRef = useRef<SVGFEColorMatrixElement>(null);

  const displacementScale = animation ? mapRange(animation.scale, 1, 100, 20, 100) : 0;
  const animationDuration = animation ? mapRange(animation.speed, 1, 100, 1000, 50) : 1;

  // Plain rAF hue rotation — no framer-motion dependency. ~30 kB lighter bundle.
  // Pauses when document is hidden to spare CPU/battery.
  useEffect(() => {
    if (!feColorMatrixRef.current || !animationEnabled) return;
    const cycleSeconds = animationDuration / 25;
    const start = performance.now();
    let raf = 0;
    let isVisible = typeof document !== "undefined" && document.visibilityState === "visible";

    const onVisibility = () => {
      isVisible = document.visibilityState === "visible";
    };
    document.addEventListener("visibilitychange", onVisibility);

    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);
      if (!isVisible || !feColorMatrixRef.current) return;
      const elapsed = (now - start) / 1000;
      const value = ((elapsed / cycleSeconds) * 360) % 360;
      feColorMatrixRef.current.setAttribute("values", String(value));
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [animationEnabled, animationDuration]);

  return (
    <div className={className} style={{ overflow: "hidden", position: "relative", width: "100%", height: "100%" }} aria-hidden>
      <div
        style={{
          position: "absolute",
          inset: -displacementScale,
          filter: animationEnabled ? `url(#${id}) blur(4px)` : "none",
          willChange: "filter",
        }}
      >
        {animationEnabled && (
          <svg style={{ position: "absolute", width: 0, height: 0 }}>
            <defs>
              <filter id={id}>
                <feTurbulence
                  result="undulation"
                  numOctaves={2}
                  baseFrequency={`${mapRange(animation.scale, 0, 100, 0.001, 0.0005)},${mapRange(animation.scale, 0, 100, 0.004, 0.002)}`}
                  seed={0}
                  type="turbulence"
                />
                <feColorMatrix
                  ref={feColorMatrixRef}
                  in="undulation"
                  type="hueRotate"
                  values="180"
                />
                <feColorMatrix
                  in="dist"
                  result="circulation"
                  type="matrix"
                  values="4 0 0 0 1  4 0 0 0 1  4 0 0 0 1  1 0 0 0 0"
                />
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="circulation"
                  scale={displacementScale}
                  result="dist"
                />
                <feDisplacementMap
                  in="dist"
                  in2="undulation"
                  scale={displacementScale}
                  result="output"
                />
              </filter>
            </defs>
          </svg>
        )}
        <div
          style={{
            backgroundColor: color,
            maskImage: `url('/textures/shadow-mask.webp')`,
            WebkitMaskImage: `url('/textures/shadow-mask.webp')`,
            maskSize: sizing === "stretch" ? "100% 100%" : "cover",
            WebkitMaskSize: sizing === "stretch" ? "100% 100%" : "cover",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskPosition: "center",
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      {noise && noise.opacity > 0 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url('/textures/noise.webp')`,
            backgroundSize: noise.scale * 200,
            backgroundRepeat: "repeat",
            opacity: noise.opacity / 2,
            mixBlendMode: "overlay",
          }}
        />
      )}
    </div>
  );
}

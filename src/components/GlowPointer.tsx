"use client";

import { useEffect } from "react";

/**
 * Single document-level pointer listener that publishes cursor coordinates
 * as CSS custom properties on :root. All `.glow-card` elements consume them.
 *
 * Updates are throttled to one per animation frame via rAF, so a 200 Hz
 * mouse doesn't set CSS variables 200 times per second.
 */
export default function GlowPointer() {
  useEffect(() => {
    const root = document.documentElement;
    let queued = false;
    let lastX = 0;
    let lastY = 0;

    const flush = () => {
      queued = false;
      root.style.setProperty("--glow-x", lastX.toFixed(0));
      root.style.setProperty("--glow-y", lastY.toFixed(0));
      root.style.setProperty(
        "--glow-xp",
        (lastX / window.innerWidth).toFixed(3),
      );
      root.style.setProperty(
        "--glow-yp",
        (lastY / window.innerHeight).toFixed(3),
      );
    };

    const handler = (e: PointerEvent) => {
      lastX = e.clientX;
      lastY = e.clientY;
      if (queued) return;
      queued = true;
      requestAnimationFrame(flush);
    };

    document.addEventListener("pointermove", handler, { passive: true });
    return () => document.removeEventListener("pointermove", handler);
  }, []);

  return null;
}

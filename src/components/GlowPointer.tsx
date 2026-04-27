"use client";

import { useEffect } from "react";

/**
 * Single document-level pointer listener that publishes cursor coordinates
 * as CSS custom properties on :root. All `.glow-card` elements consume them.
 *
 * Mounted once at the root layout. Avoids attaching N listeners per card.
 */
export default function GlowPointer() {
  useEffect(() => {
    const root = document.documentElement;

    const handler = (e: PointerEvent) => {
      root.style.setProperty("--glow-x", e.clientX.toFixed(0));
      root.style.setProperty("--glow-y", e.clientY.toFixed(0));
      root.style.setProperty(
        "--glow-xp",
        (e.clientX / window.innerWidth).toFixed(3),
      );
      root.style.setProperty(
        "--glow-yp",
        (e.clientY / window.innerHeight).toFixed(3),
      );
    };

    document.addEventListener("pointermove", handler, { passive: true });
    return () => document.removeEventListener("pointermove", handler);
  }, []);

  return null;
}

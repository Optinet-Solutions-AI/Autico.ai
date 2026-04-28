"use client";

import { useEffect, useRef, useState } from "react";

type NumberTickerProps = {
  value: number;
  duration?: number; // ms
  prefix?: string;
  suffix?: string;
  className?: string;
};

/**
 * Animates a number from 0 → value the first time the element enters
 * the viewport. Uses a single rAF loop with easeOutCubic.
 */
export default function NumberTicker({
  value,
  duration = 1500,
  prefix = "",
  suffix = "",
  className = "",
}: NumberTickerProps) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let started = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;
        started = true;

        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setDisplay(Math.round(value * eased));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.4 },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

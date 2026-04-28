import type { CSSProperties, ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  direction?: "left" | "right";
  speed?: number; // seconds per loop
  pauseOnHover?: boolean;
  className?: string;
};

/**
 * Pure-CSS infinite scroll marquee. Server component — no JS needed.
 * Children are rendered twice (one duplicate for seamless wrap).
 */
export default function Marquee({
  children,
  direction = "left",
  speed = 40,
  pauseOnHover = true,
  className = "",
}: MarqueeProps) {
  const style = { "--marquee-duration": `${speed}s` } as CSSProperties;
  return (
    <div
      className={`marquee ${className}`}
      style={style}
      data-direction={direction}
      data-pause={pauseOnHover ? "true" : "false"}
    >
      <div className="marquee-track">
        <div className="marquee-content">{children}</div>
        <div className="marquee-content" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

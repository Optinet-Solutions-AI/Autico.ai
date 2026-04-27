// Abstract AI/agent visual — original geometric SVG.
// Replaces the reference site's robotic-claw photo (we are NOT copying their image).

export default function HeroVisual() {
  return (
    <div className="relative w-full aspect-square max-w-[560px] mx-auto">
      {/* Outer halo */}
      <div
        className="absolute inset-0 rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(0,229,204,0.28) 0%, rgba(79,168,232,0.10) 35%, transparent 65%)",
        }}
      />

      <svg viewBox="0 0 600 600" className="relative w-full h-full">
        <defs>
          <linearGradient id="core-grad" x1="0" y1="0" x2="600" y2="600">
            <stop offset="0" stopColor="#4FA8E8" />
            <stop offset="1" stopColor="#00E5CC" />
          </linearGradient>
          <linearGradient id="ring-grad" x1="0" y1="0" x2="600" y2="0">
            <stop offset="0" stopColor="rgba(0,229,204,0.85)" />
            <stop offset="0.5" stopColor="rgba(79,168,232,0.6)" />
            <stop offset="1" stopColor="rgba(0,229,204,0.2)" />
          </linearGradient>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="rgba(0,229,204,0.55)" />
            <stop offset="1" stopColor="rgba(0,229,204,0)" />
          </radialGradient>
          <filter id="blur-soft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>

        {/* Outer orbit ring */}
        <g className="orbit-slow" style={{ transformOrigin: "300px 300px" }}>
          <circle cx="300" cy="300" r="240" fill="none" stroke="url(#ring-grad)" strokeWidth="1" strokeDasharray="2 4" opacity="0.5" />
          <circle cx="540" cy="300" r="6" fill="#00E5CC" />
          <circle cx="60" cy="300" r="4" fill="#4FA8E8" opacity="0.7" />
        </g>

        {/* Mid orbit (counter rotating) */}
        <g className="orbit-rev" style={{ transformOrigin: "300px 300px" }}>
          <circle cx="300" cy="300" r="180" fill="none" stroke="rgba(0,229,204,0.35)" strokeWidth="1" />
          <circle cx="480" cy="300" r="5" fill="#00E5CC" />
          <circle cx="120" cy="300" r="3" fill="#FF4D4D" opacity="0.8" />
        </g>

        {/* Inner orbit */}
        <g className="orbit-slow" style={{ transformOrigin: "300px 300px", animationDuration: "12s" }}>
          <circle cx="300" cy="300" r="120" fill="none" stroke="rgba(79,168,232,0.4)" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="420" cy="300" r="4" fill="#4FA8E8" />
          <circle cx="180" cy="300" r="3" fill="#00E5CC" />
        </g>

        {/* Glow behind hex */}
        <circle cx="300" cy="300" r="100" fill="url(#glow)" filter="url(#blur-soft)" />

        {/* Central hexagonal core */}
        <g className="float-slow" style={{ transformOrigin: "300px 300px" }}>
          <path
            d="M300 180 L408 240 L408 360 L300 420 L192 360 L192 240 Z"
            fill="url(#core-grad)"
          />
          <path
            d="M300 180 L408 240 L408 360 L300 420 L192 360 L192 240 Z"
            fill="none"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="1.5"
          />

          {/* "A" monogram inside */}
          <path
            d="M260 360 L300 240 L320 240 L360 360 H340 L330 332 H290 L280 360 Z M295 318 H325 L312.5 280 Z"
            fill="#050810"
          />

          {/* Connection points on hex vertices */}
          <circle cx="300" cy="180" r="4" fill="#fff" />
          <circle cx="408" cy="240" r="4" fill="#fff" opacity="0.85" />
          <circle cx="408" cy="360" r="4" fill="#fff" opacity="0.7" />
          <circle cx="300" cy="420" r="4" fill="#fff" opacity="0.6" />
          <circle cx="192" cy="360" r="4" fill="#fff" opacity="0.7" />
          <circle cx="192" cy="240" r="4" fill="#fff" opacity="0.85" />
        </g>

        {/* Connection lines from hex to outer satellites */}
        <g opacity="0.25" stroke="#00E5CC" strokeWidth="0.8" fill="none">
          <line x1="300" y1="180" x2="300" y2="60" />
          <line x1="408" y1="240" x2="540" y2="180" />
          <line x1="408" y1="360" x2="540" y2="420" />
          <line x1="300" y1="420" x2="300" y2="540" />
          <line x1="192" y1="360" x2="60" y2="420" />
          <line x1="192" y1="240" x2="60" y2="180" />
        </g>

        {/* Satellite nodes */}
        <g>
          <circle cx="300" cy="60" r="6" fill="#00E5CC" />
          <circle cx="540" cy="180" r="5" fill="#4FA8E8" />
          <circle cx="540" cy="420" r="5" fill="#00E5CC" opacity="0.85" />
          <circle cx="300" cy="540" r="6" fill="#4FA8E8" />
          <circle cx="60" cy="420" r="5" fill="#00E5CC" />
          <circle cx="60" cy="180" r="4" fill="#FF4D4D" opacity="0.8" />
        </g>
      </svg>
    </div>
  );
}

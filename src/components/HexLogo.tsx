export function HexLogo({ size = 36, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="hex-grad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#4FA8E8" />
          <stop offset="1" stopColor="#00E5CC" />
        </linearGradient>
      </defs>
      <path d="M32 4 L56 18 L56 46 L32 60 L8 46 L8 18 Z" fill="url(#hex-grad)" />
      <path
        d="M32 4 L56 18 L56 46 L32 60 L8 46 L8 18 Z"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="1.2"
      />
      <path
        d="M22 46 L32 18 L36 18 L46 46 H40 L37.5 39 H26.5 L24 46 Z M28 33 H35 L31.5 23.5 Z"
        fill="#050810"
      />
    </svg>
  );
}

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
      <path
        d="M32 4 L56 18 L56 46 L32 60 L8 46 L8 18 Z"
        fill="#3DA0EC"
      />
      <path
        d="M32 4 L56 18 L56 46 L32 60 L8 46 L8 18 Z"
        stroke="rgba(255,255,255,0.18)"
        strokeWidth="1.2"
      />
      <path
        d="M22 46 L32 18 L36 18 L46 46 H40 L37.5 39 H26.5 L24 46 Z M28 33 H35 L31.5 23.5 Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

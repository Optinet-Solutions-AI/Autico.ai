// Small circular badge with the author's first initial.
// Hue is derived from a stable hash of the author name so each builder
// has a consistent color across every place they appear.

function hueForAuthor(name: string): number {
  let h = 0;
  for (let i = 0; i < name.length; i++) {
    h = (h * 31 + name.charCodeAt(i)) | 0;
  }
  // Map to 180–260 (cyan→blue→indigo) to stay inside our brand palette
  const range = 80;
  return 180 + (Math.abs(h) % range);
}

export function AuthorBadge({ name, size = 22 }: { name: string; size?: number }) {
  const hue = hueForAuthor(name);
  const initial = (name[0] ?? "?").toUpperCase();
  return (
    <span
      className="inline-flex items-center justify-center rounded-full font-display font-semibold leading-none align-middle"
      style={{
        width: size,
        height: size,
        fontSize: size * 0.46,
        background: `hsl(${hue} 80% 60% / 0.15)`,
        border: `1px solid hsl(${hue} 80% 65% / 0.4)`,
        color: `hsl(${hue} 80% 75%)`,
      }}
      aria-hidden
    >
      {initial}
    </span>
  );
}

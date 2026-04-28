import type { Product } from "@/lib/products";

const paths: Record<Product["category"], string> = {
  agent:
    "M12 3l8 4v5c0 5-3.5 9-8 10-4.5-1-8-5-8-10V7l8-4z M9 12l2 2 4-4",
  automation:
    "M4 7h16 M4 12h16 M4 17h10 M19 17l3 3 m-3-3l3-3",
  vision:
    "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
  data:
    "M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3v12c0 1.7-3.6 3-8 3s-8-1.3-8-3V6z M4 6c0 1.7 3.6 3 8 3s8-1.3 8-3 M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3",
  voice:
    "M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3z M19 11a7 7 0 0 1-14 0 M12 18v3 M9 21h6",
  ops:
    "M12 2v4 M12 18v4 M4.93 4.93l2.83 2.83 M16.24 16.24l2.83 2.83 M2 12h4 M18 12h4 M4.93 19.07l2.83-2.83 M16.24 7.76l2.83-2.83 M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z",
};

const labels: Record<Product["category"], string> = {
  agent: "Autonomous agent",
  automation: "Workflow automation",
  vision: "Computer vision",
  data: "Data + analytics",
  voice: "Voice AI",
  ops: "AI operations",
};

export function CategoryIcon({
  category,
  size = 24,
  className = "",
}: {
  category: Product["category"];
  size?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d={paths[category]} />
    </svg>
  );
}

export function categoryLabel(c: Product["category"]) {
  return labels[c];
}

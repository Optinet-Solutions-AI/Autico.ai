import Link from "next/link";
import { HexLogo } from "@/components/HexLogo";

const cols = [
  {
    title: "Product",
    links: [
      { href: "/showcase", label: "Showcase" },
      { href: "/integrations", label: "Integrations" },
      { href: "/#services", label: "Services" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/blog", label: "Blog" },
      { href: "/press", label: "Press" },
      { href: "/#contact", label: "Contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/docs", label: "Documentation" },
      { href: "/showcase", label: "Case studies" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[var(--color-bg)] border-t border-[var(--color-border)]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-blue)]/40 to-transparent" aria-hidden />
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <HexLogo size={34} />
              <span className="font-display text-[18px] font-semibold tracking-tight">
                <span className="text-white">Autico</span>
                <span className="text-[var(--color-blue)]">.ai</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-[var(--color-fg-muted)]">
              An AI agency that ships. Strategy, builds, and operations for teams shipping autonomous products.
            </p>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-[12px] uppercase tracking-[0.18em] text-[var(--color-fg-dim)]">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-[14px] text-[var(--color-fg-muted)] transition hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-[var(--color-border)] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12.5px] text-[var(--color-fg-dim)]">
            © {new Date().getFullYear()} Autico.ai — all rights reserved.
          </p>
          <p className="text-[12.5px] text-[var(--color-fg-dim)]">
            <Link href="/privacy" className="hover:text-[var(--color-fg-muted)] transition">Privacy</Link>
            <span className="mx-2">·</span>
            <Link href="/terms" className="hover:text-[var(--color-fg-muted)] transition">Terms</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

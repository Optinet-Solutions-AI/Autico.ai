import Link from "next/link";
import { HexLogo } from "@/components/HexLogo";

const links = [
  { href: "/showcase", label: "Showcase" },
  { href: "/integrations", label: "Integrations" },
  { href: "/blog", label: "Blog" },
  { href: "/press", label: "Press" },
  { href: "/docs", label: "Docs" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[rgba(5,8,16,0.72)] backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5 group">
          <HexLogo size={34} className="transition group-hover:scale-105" />
          <span className="font-display text-[20px] font-semibold tracking-tight">
            <span className="logo-gradient-text">Autico</span>
            <span className="text-[var(--color-accent)]">.ai</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-1.5 text-[13.5px] font-medium text-[var(--color-fg-muted)] transition hover:text-[var(--color-fg)] hover:bg-white/5"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/#contact"
            className="hidden sm:inline-flex h-9 items-center rounded-md border border-[var(--color-border-strong)] glass-card px-3.5 text-[13.5px] font-medium transition hover:text-[var(--color-accent)]"
          >
            Book a call
          </Link>
          <Link
            href="/showcase"
            className="inline-flex h-9 items-center rounded-md bg-[var(--color-accent)] px-3.5 text-[13.5px] font-semibold text-[var(--color-on-accent)] transition hover:bg-[var(--color-accent-hover)]"
          >
            See our work
          </Link>
        </div>
      </div>
    </header>
  );
}

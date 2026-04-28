import Link from "next/link";
import { products, type Product } from "@/lib/products";
import { AuthorBadge } from "@/components/AuthorBadge";

const statusLabel: Record<Product["status"], string> = {
  live: "Live",
  beta: "Beta",
  concept: "Concept",
};

export default function Showcase() {
  return (
    <section id="showcase" className="border-b border-[var(--color-border)]">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-[12px] uppercase tracking-[0.2em] text-[var(--color-accent)]">Showcase</p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-semibold tracking-tight">
              {products.length} AI products. Battle-tested blueprints.
            </h2>
            <p className="mt-4 text-[var(--color-fg-muted)] text-[15.5px] leading-relaxed">
              Each one is something we&rsquo;ve shipped, will ship, or can ship for you in under 30 days.
            </p>
          </div>
          <Link href="/showcase" className="text-[14px] text-[var(--color-fg-muted)] hover:text-white transition">
            Browse the full library →
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <Link
              key={p.slug}
              href={`/showcase/${p.slug}`}
              className="glow-card group p-6 block"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-[0.16em] text-[var(--color-fg-dim)]">
                  {p.category}
                </span>
                <span className={`rounded-full px-2 py-0.5 text-[10.5px] uppercase tracking-wider ${
                  p.status === "live"
                    ? "bg-[var(--color-accent-soft)] text-[var(--color-accent)]"
                    : p.status === "beta"
                      ? "bg-white/5 text-[var(--color-fg-muted)]"
                      : "bg-white/5 text-[var(--color-fg-dim)]"
                }`}>
                  {statusLabel[p.status]}
                </span>
              </div>

              <h3 className="mt-3 font-display text-lg font-semibold tracking-tight transition group-hover:text-[var(--color-blue)]">
                {p.name}
              </h3>
              <p className="mt-1.5 text-[14px] leading-relaxed text-[var(--color-fg-muted)]">
                {p.tagline}
              </p>

              <div className="mt-6 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-[12.5px] text-[var(--color-fg-dim)] transition group-hover:text-[var(--color-accent)]">
                  Read more <span aria-hidden>→</span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] text-[var(--color-fg-dim)]">
                  <AuthorBadge name={p.author} size={20} />
                  {p.author}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

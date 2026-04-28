import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import { products, type Product } from "@/lib/products";
import { JsonLd, itemListSchema, breadcrumbSchema, siteUrl } from "@/lib/schema";
import { AuthorBadge } from "@/components/AuthorBadge";

export const metadata: Metadata = {
  title: `Showcase — ${products.length} production AI blueprints`,
  description: `Browse ${products.length} AI products built and shipped by Autico.ai — voice agents, automation, vision, data, and ops. Each one deployable for your team in under 30 days.`,
  alternates: { canonical: "/showcase" },
  openGraph: {
    title: `Showcase — ${products.length} AI products built by Autico.ai`,
    description: `${products.length} production AI blueprints. Voice, vision, data, agents, automation, ops. Deployed in weeks.`,
    url: "/showcase",
  },
};

const statusLabel: Record<Product["status"], string> = {
  live: "Live",
  beta: "Beta",
  concept: "Concept",
};

const allCategories: Array<Product["category"]> = ["agent", "automation", "voice", "data", "vision", "ops"];

export default function ShowcasePage() {
  const counts = {
    live: products.filter((p) => p.status === "live").length,
    beta: products.filter((p) => p.status === "beta").length,
    concept: products.filter((p) => p.status === "concept").length,
  };
  const builders = new Set(products.map((p) => p.author)).size;
  const categoriesUsed = new Set(products.map((p) => p.category)).size;

  return (
    <>
      <JsonLd
        data={[
          itemListSchema(products, "/showcase"),
          breadcrumbSchema([
            { name: "Home", url: siteUrl },
            { name: "Showcase", url: `${siteUrl}/showcase` },
          ]),
        ]}
      />
      <Nav />
      <main>
        <section className="relative overflow-hidden border-b border-[var(--color-border)]">
          <div className="ambient-glow" aria-hidden />
          <div className="absolute inset-0 bg-grid" aria-hidden />
          <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28 md:pb-20">
            <div className="max-w-3xl">
              <p className="text-[12px] uppercase tracking-[0.2em] text-[var(--color-accent)]">Showcase</p>
              <h1 className="mt-3 font-display text-4xl md:text-6xl font-semibold tracking-[-0.03em] leading-[1.05]">
                {products.length} AI products. <span className="hero-gradient-text">Battle-tested blueprints.</span>
              </h1>
              <p className="mt-5 max-w-2xl text-[16px] md:text-[17px] leading-relaxed text-[var(--color-fg-muted)]">
                Each product below is something we&rsquo;ve shipped, will ship, or can build for you in under 30 days.
                Voted on by the team — top picks already in production.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                <span className="rounded-full border border-[var(--color-accent)]/40 bg-[var(--color-accent-soft)] px-3 py-1 text-[12px] font-medium text-[var(--color-accent)]">
                  {counts.live} Live
                </span>
                <span className="rounded-full border border-[var(--color-border-strong)] bg-[var(--color-bg-elev)] px-3 py-1 text-[12px] font-medium text-[var(--color-fg-muted)]">
                  {counts.beta} Beta
                </span>
                <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elev)] px-3 py-1 text-[12px] font-medium text-[var(--color-fg-dim)]">
                  {counts.concept} Concept
                </span>
                <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elev)] px-3 py-1 text-[12px] font-medium text-[var(--color-fg-dim)]">
                  {builders} builders
                </span>
                <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elev)] px-3 py-1 text-[12px] font-medium text-[var(--color-fg-dim)]">
                  {categoriesUsed} categories
                </span>
              </div>
            </div>
          </div>
        </section>

        {allCategories.map((cat) => {
          const items = products.filter((p) => p.category === cat);
          if (items.length === 0) return null;
          return (
            <section key={cat} className="border-b border-[var(--color-border)]">
              <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="flex items-baseline justify-between mb-8">
                  <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight capitalize">{cat}</h2>
                  <span className="text-[12px] uppercase tracking-[0.18em] text-[var(--color-fg-dim)]">
                    {items.length} {items.length === 1 ? "product" : "products"}
                  </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/showcase/${p.slug}`}
                      id={p.slug}
                      className="glow-card group p-6 block scroll-mt-24"
                    >
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.16em] text-[var(--color-fg-dim)]">
                          <AuthorBadge name={p.author} size={20} />
                          by {p.author}
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

                      <span className="mt-6 inline-flex items-center gap-1.5 text-[12.5px] text-[var(--color-fg-dim)] transition group-hover:text-[var(--color-accent)]">
                        Read more <span aria-hidden>→</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        <section className="border-b border-[var(--color-border)]">
          <div className="mx-auto max-w-3xl px-6 py-20 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
              Want one of these built for you?
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-[var(--color-fg-muted)]">
              Pick a blueprint above or describe your own. We&rsquo;ll come back with a fixed-price, fixed-timeline build.
            </p>
            <Link
              href="/#contact"
              className="mt-8 inline-flex h-11 items-center rounded-lg bg-[var(--color-blue)] px-5 text-[14px] font-semibold text-white transition hover:bg-[var(--color-blue-hover)] shadow-[0_8px_28px_-4px_rgba(61,160,236,0.45)]"
            >
              Book a discovery call
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

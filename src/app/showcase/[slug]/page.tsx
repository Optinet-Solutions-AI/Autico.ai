import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { products, type Product } from "@/lib/products";
import { JsonLd, productSchema, breadcrumbSchema, siteUrl } from "@/lib/schema";

export const dynamicParams = false;

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug);
  if (!p) return { title: "Not found" };
  const title = `${p.name} — ${p.tagline.replace(/\.$/, "")}`;
  return {
    title,
    description: p.tagline,
    alternates: { canonical: `/showcase/${p.slug}` },
    openGraph: {
      title: `${p.name} — Autico.ai`,
      description: p.tagline,
      url: `/showcase/${p.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${p.name} — Autico.ai`,
      description: p.tagline,
    },
  };
}

const statusLabel: Record<Product["status"], string> = {
  live: "Live",
  beta: "Beta",
  concept: "Concept",
};

const statusBlurb: Record<Product["status"], string> = {
  live: "In production with active customers.",
  beta: "Built and field-testing with select clients.",
  concept: "Validated demand, not yet built — first commission shapes it.",
};

const categoryLabel: Record<Product["category"], string> = {
  agent: "Autonomous agents",
  automation: "Workflow automation",
  voice: "Voice AI",
  data: "Data + analytics",
  vision: "Computer vision",
  ops: "AI operations",
};

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const idx = products.findIndex((p) => p.slug === slug);
  const prev = products[(idx - 1 + products.length) % products.length];
  const next = products[(idx + 1) % products.length];

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          productSchema(product),
          breadcrumbSchema([
            { name: "Home", url: siteUrl },
            { name: "Showcase", url: `${siteUrl}/showcase` },
            { name: product.name, url: `${siteUrl}/showcase/${product.slug}` },
          ]),
        ]}
      />
      <Nav />
      <main>
        <section className="relative overflow-hidden border-b border-[var(--color-border)]">
          <div className="ambient-glow" aria-hidden />
          <div className="absolute inset-0 bg-grid" aria-hidden />

          <div className="relative mx-auto max-w-4xl px-6 pt-20 pb-16 md:pt-24 md:pb-20">
            <nav aria-label="Breadcrumb" className="text-[12.5px] text-[var(--color-fg-dim)]">
              <ol className="flex items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-[var(--color-fg-muted)]">Home</Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href="/showcase" className="hover:text-[var(--color-fg-muted)]">Showcase</Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-[var(--color-fg-muted)]">{product.name}</li>
              </ol>
            </nav>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-[var(--color-border-strong)] bg-[var(--color-bg-card)] px-2.5 py-0.5 text-[11.5px] uppercase tracking-[0.14em] text-[var(--color-fg-muted)]">
                {categoryLabel[product.category]}
              </span>
              <span
                className={`rounded-full px-2.5 py-0.5 text-[11px] uppercase tracking-wider ${
                  product.status === "live"
                    ? "bg-[var(--color-accent-soft)] text-[var(--color-accent)]"
                    : "bg-white/5 text-[var(--color-fg-muted)]"
                }`}
              >
                {statusLabel[product.status]}
              </span>
              <span className="text-[12px] text-[var(--color-fg-dim)]">by {product.author}</span>
            </div>

            <h1 className="mt-5 font-display text-4xl md:text-6xl font-semibold leading-[1.05] tracking-[-0.03em]">
              <span className="hero-gradient-text">{product.name}</span>
            </h1>

            <p className="mt-5 max-w-2xl text-[17px] md:text-[18px] leading-relaxed text-[var(--color-fg-muted)]">
              {product.tagline}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/#contact"
                className="inline-flex h-11 items-center gap-2 rounded-lg bg-[var(--color-blue)] px-5 text-[14px] font-semibold text-white transition hover:bg-[var(--color-blue-hover)] shadow-[0_8px_28px_-4px_rgba(61,160,236,0.45)]"
              >
                Build {product.name} for us →
              </Link>
              <Link
                href="/showcase"
                className="inline-flex h-11 items-center gap-2 rounded-lg border border-[var(--color-border-strong)] glass-card px-5 text-[14px] font-medium transition hover:text-[var(--color-accent)]"
              >
                Back to all 30 products
              </Link>
            </div>
          </div>
        </section>

        <section className="border-b border-[var(--color-border)]">
          <div className="mx-auto max-w-4xl px-6 py-16 grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="font-display text-[12px] uppercase tracking-[0.2em] text-[var(--color-accent)]">
                Who it&rsquo;s for
              </h2>
              <p className="mt-3 text-[15.5px] leading-relaxed text-[var(--color-fg-muted)]">
                Teams operating in {categoryLabel[product.category].toLowerCase()} who need a
                production-grade implementation, not a demo. Typically 5–500 employee businesses
                with a measurable problem this addresses today.
              </p>
            </div>
            <div>
              <h2 className="font-display text-[12px] uppercase tracking-[0.2em] text-[var(--color-accent)]">
                Status
              </h2>
              <p className="mt-3 text-[15.5px] leading-relaxed text-[var(--color-fg-muted)]">
                {statusBlurb[product.status]}
              </p>
            </div>
            <div>
              <h2 className="font-display text-[12px] uppercase tracking-[0.2em] text-[var(--color-accent)]">
                What we deliver
              </h2>
              <ul className="mt-3 space-y-2 text-[15.5px] text-[var(--color-fg-muted)]">
                <li>• Discovery + scope (1 week)</li>
                <li>• Build + integration (2–4 weeks)</li>
                <li>• Live deployment + monitoring</li>
                <li>• Optional ongoing operation</li>
              </ul>
            </div>
            <div>
              <h2 className="font-display text-[12px] uppercase tracking-[0.2em] text-[var(--color-accent)]">
                Tech stack
              </h2>
              <p className="mt-3 text-[15.5px] leading-relaxed text-[var(--color-fg-muted)]">
                Stack chosen per engagement — typically TypeScript + Python, OpenAI / Anthropic /
                Gemini, your data warehouse, and your existing tools. SOC2-ready by default.
              </p>
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="border-b border-[var(--color-border)]">
            <div className="mx-auto max-w-4xl px-6 py-16">
              <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
                More in {categoryLabel[product.category].toLowerCase()}
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/showcase/${r.slug}`}
                    className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5 transition hover:border-[var(--color-border-strong)]"
                  >
                    <h3 className="font-display text-[15px] font-semibold tracking-tight group-hover:text-[var(--color-accent)] transition">
                      {r.name}
                    </h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-[var(--color-fg-muted)]">
                      {r.tagline}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="border-b border-[var(--color-border)]">
          <div className="mx-auto max-w-4xl px-6 py-10 flex items-center justify-between text-[13px]">
            <Link
              href={`/showcase/${prev.slug}`}
              className="group flex items-center gap-2 text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition"
            >
              <span aria-hidden className="transition-transform group-hover:-translate-x-0.5">←</span>
              <span>
                <span className="block text-[11px] uppercase tracking-[0.16em] text-[var(--color-fg-dim)]">Previous</span>
                <span className="block">{prev.name}</span>
              </span>
            </Link>
            <Link
              href={`/showcase/${next.slug}`}
              className="group flex items-center gap-2 text-right text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition"
            >
              <span>
                <span className="block text-[11px] uppercase tracking-[0.16em] text-[var(--color-fg-dim)]">Next</span>
                <span className="block">{next.name}</span>
              </span>
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function StubPage({ title, blurb }: { title: string; blurb: string }) {
  return (
    <>
      <Nav />
      <main className="min-h-[calc(100vh-4rem)]">
        <section className="border-b border-[var(--color-border)]">
          <div className="mx-auto max-w-3xl px-6 py-32 text-center">
            <p className="text-[12px] uppercase tracking-[0.2em] text-[var(--color-accent)]">{title}</p>
            <h1 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-tight">Coming soon.</h1>
            <p className="mt-6 text-[16px] text-[var(--color-fg-muted)] leading-relaxed">{blurb}</p>
            <Link
              href="/"
              className="mt-10 inline-flex h-11 items-center rounded-lg border border-[var(--color-border-strong)] glass-card px-5 text-[14px] font-medium transition hover:text-[var(--color-accent)]"
            >
              ← Back to home
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

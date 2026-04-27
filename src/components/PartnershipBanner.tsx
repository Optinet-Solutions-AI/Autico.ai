import Link from "next/link";

export default function PartnershipBanner() {
  return (
    <section id="partnership" className="border-y border-[var(--color-border)]">
      <div
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,77,77,0.05) 0%, rgba(10,15,26,0.8) 50%, rgba(0,229,204,0.05) 100%)",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-3.5">
          <Link href="/blog" className="group flex items-center justify-center gap-3 text-[13.5px]">
            <span className="rounded-full border border-[var(--color-accent)]/40 bg-[var(--color-accent-soft)] px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--color-accent)]">
              New
            </span>
            <span className="text-[var(--color-fg-muted)] group-hover:text-[var(--color-fg)] transition">
              Autico is partnering with leading agencies to deploy production AI in 30 days
            </span>
            <span className="text-[var(--color-cyan)] transition group-hover:translate-x-0.5">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

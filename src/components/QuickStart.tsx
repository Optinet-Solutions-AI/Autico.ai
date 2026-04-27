const steps = [
  {
    n: "01",
    title: "Tell us where AI hurts",
    body: "30-minute discovery. We map the workflow, the data, and the unit economics before promising anything.",
  },
  {
    n: "02",
    title: "Pick a blueprint",
    body: "Choose from 30 production-tested products or scope a custom build. Fixed-price, fixed-timeline.",
  },
  {
    n: "03",
    title: "Ship in weeks",
    body: "We integrate, deploy, and run it. You see live metrics by week two and a flagship by week six.",
  },
];

export default function QuickStart() {
  return (
    <section className="border-b border-[var(--color-border)]">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-[12px] uppercase tracking-[0.2em] text-[var(--color-accent)]">How it works</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">From idea to deployed agent in three steps.</h2>
          <p className="mt-4 text-[var(--color-fg-muted)] text-[15.5px] leading-relaxed">
            No discovery doc trilogy. No six-month roadmap. We move fast because we&rsquo;ve done this thirty times.
          </p>
        </div>

        <ol className="mt-12 grid gap-4 md:grid-cols-3">
          {steps.map((s) => (
            <li key={s.n} className="relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 transition hover:border-[var(--color-accent)]/40">
              <span className="font-mono text-[12px] text-[var(--color-accent)]">{s.n}</span>
              <h3 className="mt-2 text-lg font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-[var(--color-fg-muted)]">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

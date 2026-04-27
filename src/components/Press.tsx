const items = [
  { outlet: "TechCrunch", headline: "How small teams are deploying AI in weeks", date: "Coming soon" },
  { outlet: "The Information", headline: "The agency model that fits the agent era", date: "Coming soon" },
  { outlet: "a16z Future", headline: "Operator-grade AI: lessons from 30 deployments", date: "Coming soon" },
  { outlet: "Stratechery", headline: "Autonomous workflows are eating the consulting stack", date: "Coming soon" },
];

export default function Press() {
  return (
    <section className="border-b border-[var(--color-border)]">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="text-[12px] uppercase tracking-[0.2em] text-[var(--color-accent)]">Press</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">In the conversation.</h2>
          </div>
          <a href="/press" className="text-[14px] text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition">
            All press →
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <article key={it.outlet} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 transition hover:border-[var(--color-border-strong)]">
              <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)]">{it.outlet}</p>
              <h3 className="mt-3 text-[15.5px] font-medium leading-snug tracking-tight">{it.headline}</h3>
              <p className="mt-6 text-[12px] text-[var(--color-fg-dim)]">{it.date}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

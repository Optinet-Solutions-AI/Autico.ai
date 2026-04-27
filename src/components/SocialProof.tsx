const quotes = [
  {
    quote: "They shipped a working voice agent in two weeks. Our intake calls went from a 6-hour queue to instant.",
    name: "Operator",
    role: "Healthcare clinic group",
  },
  {
    quote: "The team thinks like product engineers, not consultants. We got code, not a deck.",
    name: "VP Engineering",
    role: "Series B SaaS",
  },
  {
    quote: "Autico replaced four off-the-shelf tools with one agent that actually works.",
    name: "Founder",
    role: "Real estate ops platform",
  },
];

export default function SocialProof() {
  return (
    <section className="border-b border-[var(--color-border)]">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[12px] uppercase tracking-[0.2em] text-[var(--color-accent)]">What teams say</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">Built for operators who measure outcomes.</h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {quotes.map((q, i) => (
            <figure key={i} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 transition hover:border-[var(--color-border-strong)]">
              <span className="block text-[var(--color-accent)] text-3xl leading-none">&ldquo;</span>
              <blockquote className="mt-2 text-[15px] leading-relaxed text-[var(--color-fg)]">
                {q.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 text-[13px]">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--color-bg-elev)] text-[var(--color-accent)] font-semibold">
                  {q.name[0]}
                </span>
                <span>
                  <span className="block font-medium text-[var(--color-fg)]">{q.name}</span>
                  <span className="block text-[var(--color-fg-muted)]">{q.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

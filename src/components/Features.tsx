type Feature = {
  title: string;
  body: string;
  icon: string; // SVG path
  wide?: boolean;
  extra?: string;
};

const features: Feature[] = [
  {
    title: "Strategy",
    body: "We find where AI moves the P&L — not where it looks impressive in a demo.",
    extra: "30-minute discovery, then a written 1-pager that maps the workflow, the data, the unit economics, and the right first cut.",
    icon: "M3 12 L10 5 L21 16 M3 12 L3 21 H12",
    wide: true,
  },
  {
    title: "Build",
    body: "Production agents in TypeScript and Python. Tests, telemetry, and rollback included.",
    icon: "M4 7 L20 7 M4 12 L20 12 M4 17 L14 17",
  },
  {
    title: "Integrate",
    body: "Your stack, your data, your tools. CRMs, warehouses, voice, vision — we ship the glue.",
    icon: "M8 4 L4 8 L8 12 M16 12 L20 16 L16 20 M14 4 L10 20",
  },
  {
    title: "Deploy",
    body: "Vercel, AWS, GCP, on-prem, or your private VPC. SOC2-ready by default.",
    extra: "We don't hand off a repo and disappear — we ship to live infra and stay until the metrics move.",
    icon: "M12 3 L21 8 V16 L12 21 L3 16 V8 Z",
    wide: true,
  },
  {
    title: "Operate",
    body: "Live dashboards, drift alerts, eval suites. We watch the agent so your team can sleep.",
    icon: "M3 3 V21 H21 M7 14 L11 10 L14 13 L20 7",
  },
  {
    title: "Train",
    body: "Upskill your team with hands-on workshops. By month three, they ship without us.",
    extra: "Pair-programming sprints, weekly reviews, and a transition plan that ends with us as on-call instead of in-the-weeds.",
    icon: "M12 3 L22 9 L12 15 L2 9 Z M6 11 V17 C6 17 9 20 12 20 C15 20 18 17 18 17 V11",
    wide: true,
  },
];

export default function Features() {
  return (
    <section id="services" className="border-b border-[var(--color-border)]">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-[12px] uppercase tracking-[0.2em] text-[var(--color-accent)]">Services</p>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-semibold tracking-tight">
            A full-stack AI partner. End-to-end.
          </h2>
          <p className="mt-4 text-[var(--color-fg-muted)] text-[15.5px] leading-relaxed">
            Strategy through operations. We don&rsquo;t hand off — we deploy, run, and own the result with you.
          </p>
        </div>

        {/* Bento layout: alternating wide/narrow per row, 3-col grid */}
        <div className="mt-12 grid gap-4 grid-cols-1 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className={`glow-card group p-7 md:p-8 ${f.wide ? "md:col-span-2" : "md:col-span-1"}`}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--color-accent-soft)] text-[var(--color-accent)] transition group-hover:bg-[var(--color-blue)] group-hover:text-white">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d={f.icon} />
                </svg>
              </div>
              <h3 className="mt-5 font-display text-xl md:text-2xl font-semibold tracking-tight">
                {f.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[var(--color-fg-muted)]">
                {f.body}
              </p>
              {f.wide && f.extra && (
                <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-[var(--color-fg-dim)]">
                  {f.extra}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

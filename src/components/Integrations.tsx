const integrations = [
  "OpenAI", "Anthropic", "Gemini", "Vercel", "Supabase", "AWS",
  "GCP", "Azure", "HubSpot", "Salesforce", "Slack", "Notion",
  "Linear", "Stripe", "Twilio", "Segment", "Snowflake", "Databricks",
];

export default function Integrations() {
  return (
    <section className="border-b border-[var(--color-border)]">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="text-[12px] uppercase tracking-[0.2em] text-[var(--color-accent)]">Integrations</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">Plays well with your stack.</h2>
          </div>
          <a href="/integrations" className="text-[14px] text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition">
            View all 50+ integrations →
          </a>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-px rounded-xl border border-[var(--color-border)] bg-[var(--color-border)] overflow-hidden">
          {integrations.map((name) => (
            <div key={name} className="bg-[var(--color-bg-card)] aspect-[3/2] grid place-items-center transition hover:bg-[var(--color-bg-elev)]">
              <span className="text-[14px] font-medium text-[var(--color-fg-muted)]">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

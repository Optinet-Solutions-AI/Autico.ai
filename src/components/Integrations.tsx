import Marquee from "@/components/Marquee";

const rowOne = [
  "OpenAI", "Anthropic", "Gemini", "Vercel", "Supabase", "AWS",
  "GCP", "Azure", "Cloudflare",
];

const rowTwo = [
  "HubSpot", "Salesforce", "Slack", "Notion", "Linear", "Stripe",
  "Twilio", "Segment", "Snowflake",
];

const rowThree = [
  "Databricks", "PostHog", "Cal.com", "Resend", "Plaid", "Intercom",
  "Zapier", "Make", "Mixpanel",
];

function BrandChip({ name }: { name: string }) {
  return (
    <div className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-[13.5px] font-medium text-[var(--color-fg-muted)] backdrop-blur-sm transition hover:text-white hover:border-[var(--color-blue)]/30 hover:bg-[var(--color-blue)]/5">
      <span className="grid h-1.5 w-1.5 place-items-center rounded-full bg-[var(--color-accent)]/70" />
      {name}
    </div>
  );
}

export default function Integrations() {
  return (
    <section className="border-b border-[var(--color-border)]">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="text-[12px] uppercase tracking-[0.2em] text-[var(--color-accent)]">Integrations</p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-semibold tracking-tight">
              Plays well with your stack.
            </h2>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[var(--color-fg-muted)]">
              From foundation models to CRMs, warehouses, and voice — we ship the glue.
            </p>
          </div>
          <a href="/integrations" className="text-[14px] text-[var(--color-fg-muted)] hover:text-white transition">
            View all 50+ integrations →
          </a>
        </div>

        <div className="space-y-3">
          <Marquee speed={50} direction="left">
            {rowOne.map((n) => <BrandChip key={n} name={n} />)}
          </Marquee>
          <Marquee speed={45} direction="right">
            {rowTwo.map((n) => <BrandChip key={n} name={n} />)}
          </Marquee>
          <Marquee speed={55} direction="left">
            {rowThree.map((n) => <BrandChip key={n} name={n} />)}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

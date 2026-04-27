import Link from "next/link";
import HeroVisual from "@/components/HeroVisual";
import { HexLogo } from "@/components/HexLogo";

const features = [
  {
    title: "Operator-Grade",
    body: "Built by senior shippers",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <rect x="4" y="10" width="16" height="10" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </svg>
    ),
  },
  {
    title: "Flexible",
    body: "Adapt. Extend. Integrate.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m0 6v4a2 2 0 0 0 2 2h4M15 3h4a2 2 0 0 1 2 2v4m0 6v4a2 2 0 0 1-2 2h-4" />
      </svg>
    ),
  },
  {
    title: "Powerful",
    body: "Built for real impact",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3 9-9 6 6-9 9z" />
        <path d="M9 12 7 14M16 7l1 1" />
      </svg>
    ),
  },
  {
    title: "Built Together",
    body: "Your team, our team",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="ambient-glow" aria-hidden />
      <div className="starfield" aria-hidden />
      <div className="wave-grid" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-24 md:pt-28 md:pb-32 lg:pt-32 lg:pb-40">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-[1.05fr_1fr] items-center">
          {/* LEFT — text + tagline + features */}
          <div className="relative">
            <div className="fade-up flex items-center gap-3">
              <HexLogo size={56} />
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] leading-none">
                <span className="logo-gradient-text">Autico</span>
                <span className="text-[var(--color-accent)]">.ai</span>
              </h1>
            </div>

            <div className="fade-up mt-6 flex items-center gap-4" style={{ animationDelay: "60ms" }}>
              <p className="font-display text-2xl md:text-[28px] font-medium text-[var(--color-fg)] tracking-tight">
                Strategy. Build. Operate.
              </p>
            </div>
            <div className="cyan-divider mt-3 fade-up" style={{ animationDelay: "60ms" }} />

            <p
              className="fade-up mt-6 max-w-xl text-[16px] md:text-[17px] leading-relaxed text-[var(--color-fg-muted)]"
              style={{ animationDelay: "120ms" }}
            >
              We design, build, and run autonomous AI products for ambitious teams.
              From voice agents to data pipelines — 30+ proven blueprints, deployed in weeks.
            </p>

            <div
              className="fade-up mt-8 flex flex-col sm:flex-row gap-3"
              style={{ animationDelay: "180ms" }}
            >
              <Link
                href="#contact"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[var(--color-accent)] px-5 text-[14.5px] font-semibold text-[var(--color-on-accent)] transition glow-accent hover:bg-[var(--color-accent-hover)]"
              >
                Book a discovery call
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
              <Link
                href="/showcase"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-[var(--color-border-strong)] glass-card px-5 text-[14.5px] font-medium transition hover:text-[var(--color-accent)]"
              >
                See 30 products
                <span aria-hidden>→</span>
              </Link>
            </div>

            {/* 4 feature cells — openclaw signature */}
            <div
              className="fade-up mt-12 grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-6"
              style={{ animationDelay: "240ms" }}
            >
              {features.map((f) => (
                <div key={f.title} className="flex flex-col items-start">
                  <span className="text-[var(--color-accent)]">{f.icon}</span>
                  <span className="mt-3 font-display text-[15px] font-semibold text-[var(--color-fg)] tracking-tight">
                    {f.title}
                  </span>
                  <span className="mt-1 text-[12px] text-[var(--color-fg-dim)] leading-snug">
                    {f.body}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — abstract AI visual */}
          <div className="fade-up relative" style={{ animationDelay: "300ms" }}>
            <HeroVisual />
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/35 to-transparent" aria-hidden />
    </section>
  );
}

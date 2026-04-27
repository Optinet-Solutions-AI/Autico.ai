"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("loading");
    setError(null);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message: message || "Newsletter signup", source: "newsletter" }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        setState("error");
        setError(data.error ?? "Something went wrong");
        return;
      }
      setState("success");
      setEmail("");
      setName("");
      setMessage("");
    } catch {
      setState("error");
      setError("Network error");
    }
  }

  return (
    <section id="contact" className="border-b border-[var(--color-border)]">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="max-w-lg">
            <p className="text-[12px] uppercase tracking-[0.2em] text-[var(--color-accent)]">Contact</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">Tell us what to automate.</h2>
            <p className="mt-4 text-[var(--color-fg-muted)] text-[15.5px] leading-relaxed">
              Drop your details. We&rsquo;ll come back within one business day with a 30-minute slot
              and a sketch of what we&rsquo;d build for you.
            </p>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 md:p-8"
          >
            <div className="grid gap-3">
              <input
                required
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-11 rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-bg-elev)] px-3.5 text-[14px] outline-none transition focus:border-[var(--color-accent)]"
              />
              <input
                required
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11 rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-bg-elev)] px-3.5 text-[14px] outline-none transition focus:border-[var(--color-accent)]"
              />
              <textarea
                placeholder="What would you like to automate?"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-bg-elev)] p-3.5 text-[14px] outline-none transition focus:border-[var(--color-accent)] resize-none"
              />
              <button
                type="submit"
                disabled={state === "loading"}
                className="h-11 rounded-lg bg-[var(--color-accent)] text-[14px] font-semibold text-black transition hover:bg-[var(--color-accent-hover)] disabled:opacity-60"
              >
                {state === "loading" ? "Sending…" : state === "success" ? "Sent ✓" : "Book a call"}
              </button>
              {error && <p className="text-[12.5px] text-red-400">{error}</p>}
              {state === "success" && (
                <p className="text-[12.5px] text-[var(--color-accent)]">Got it — we&rsquo;ll be in touch.</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

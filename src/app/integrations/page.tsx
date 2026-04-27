import type { Metadata } from "next";
import StubPage from "@/components/StubPage";

export const metadata: Metadata = {
  title: "Integrations — Plug Autico into your stack",
  description:
    "Autico ships AI agents that integrate with the tools your team already uses — CRMs, data warehouses, chat, voice, and vision APIs. 50+ integrations supported.",
  alternates: { canonical: "/integrations" },
  openGraph: { title: "Integrations — Autico.ai", description: "50+ integrations: CRMs, warehouses, voice, vision.", url: "/integrations" },
};

export default function IntegrationsPage() {
  return (
    <StubPage
      title="Integrations"
      blurb="A full catalogue of platforms and tools we plug into — from CRMs to data warehouses to voice and vision APIs."
    />
  );
}

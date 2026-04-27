import type { Metadata } from "next";
import StubPage from "@/components/StubPage";

export const metadata: Metadata = {
  title: "Documentation — Engagement playbooks",
  description:
    "Internal handbooks, API references, and engagement playbooks for Autico.ai clients. Public docs coming soon.",
  alternates: { canonical: "/docs" },
  openGraph: { title: "Documentation — Autico.ai", description: "Engagement playbooks for Autico clients.", url: "/docs" },
};

export default function DocsPage() {
  return (
    <StubPage
      title="Documentation"
      blurb="Internal handbooks, API references, and engagement playbooks for Autico.ai clients."
    />
  );
}

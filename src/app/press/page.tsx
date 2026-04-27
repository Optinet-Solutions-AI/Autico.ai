import type { Metadata } from "next";
import StubPage from "@/components/StubPage";

export const metadata: Metadata = {
  title: "Press — Coverage of Autico.ai",
  description:
    "Press coverage and conversations about Autico.ai's work in autonomous AI products. Press inquiries: john@optinetsolutions.com.",
  alternates: { canonical: "/press" },
  openGraph: { title: "Press — Autico.ai", description: "Press coverage and inquiries.", url: "/press" },
};

export default function PressPage() {
  return (
    <StubPage
      title="Press"
      blurb="Coverage and conversations about Autico.ai's work. Press inquiries: john@optinetsolutions.com."
    />
  );
}

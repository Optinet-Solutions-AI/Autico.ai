import type { Metadata } from "next";
import StubPage from "@/components/StubPage";

export const metadata: Metadata = {
  title: "Blog — Field notes from 30 AI deployments",
  description:
    "Practical write-ups from production AI work — what we built, what shipped, what broke, and what we learned. Updates monthly.",
  alternates: { canonical: "/blog" },
  openGraph: { title: "Autico.ai Blog", description: "Field notes from 30 AI deployments.", url: "/blog" },
};

export default function BlogPage() {
  return (
    <StubPage
      title="Blog"
      blurb="Field notes, post-mortems, and playbooks from 30 AI deployments. Subscribe below to be the first to read."
    />
  );
}

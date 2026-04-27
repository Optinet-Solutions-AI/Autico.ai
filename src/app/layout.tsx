import type { Metadata, Viewport } from "next";
import "./globals.css";
import { JsonLd, organizationSchema, websiteSchema, professionalServiceSchema } from "@/lib/schema";
import PageBackground from "@/components/PageBackground";
import GlowPointer from "@/components/GlowPointer";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Autico.ai — AI agents that ship work, not slides",
    template: "%s — Autico.ai",
  },
  description:
    "We design, build, and run autonomous AI products for ambitious teams. From voice agents to data pipelines — 30+ proven blueprints, deployed in weeks.",
  keywords: ["AI agency", "autonomous agents", "AI consulting", "voice AI", "AI automation", "AI products", "Autico"],
  authors: [{ name: "Autico.ai" }],
  creator: "Autico.ai",
  publisher: "Autico.ai",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Autico.ai — AI agents that ship work, not slides",
    description: "30+ AI products, deployed in weeks. Strategy, build, and operations from a senior team.",
    url: "/",
    siteName: "Autico.ai",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Autico.ai — AI agents that ship work, not slides",
    description: "30+ AI products, deployed in weeks.",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/icon.svg",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#050810",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@600,700&f[]=satoshi@400,500,700&display=swap"
        />
        <link rel="preload" as="image" href="/textures/shadow-mask.webp" type="image/webp" fetchPriority="low" />
        <JsonLd data={[organizationSchema, websiteSchema, professionalServiceSchema]} />
      </head>
      <body>
        <PageBackground />
        <GlowPointer />
        {children}
      </body>
    </html>
  );
}

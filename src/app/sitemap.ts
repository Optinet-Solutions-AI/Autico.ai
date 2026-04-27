import type { MetadataRoute } from "next";
import { products } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://autico.ai";
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/showcase`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/integrations`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${base}/press`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/docs`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];

  const productRoutes: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${base}/showcase/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: p.status === "live" ? 0.85 : p.status === "beta" ? 0.75 : 0.65,
  }));

  return [...staticRoutes, ...productRoutes];
}

// JSON-LD Schema.org helpers. Output via <script type="application/ld+json">.

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://autico.ai";

export const siteUrl = SITE_URL;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Autico.ai",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  email: "john@optinetsolutions.com",
  sameAs: [`${SITE_URL}`],
  description:
    "Autico.ai is an AI agency that designs, builds, and runs autonomous AI products for ambitious teams.",
  slogan: "AI agents that ship work, not slides.",
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Autico.ai",
  url: SITE_URL,
  description:
    "30+ AI products, deployed in weeks. Strategy, build, and operations from a senior team.",
  publisher: { "@type": "Organization", name: "Autico.ai" },
};

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Autico.ai",
  url: SITE_URL,
  description:
    "AI agency offering strategy, build, and operations for autonomous AI products.",
  areaServed: "Worldwide",
  serviceType: [
    "AI agent development",
    "Voice AI",
    "Computer vision",
    "Workflow automation",
    "Data engineering",
    "AI strategy",
    "AI operations",
  ],
  priceRange: "$$$",
  email: "john@optinetsolutions.com",
};

export type ProductSchemaInput = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  status: "live" | "beta" | "concept";
  author: string;
};

export function productSchema(p: ProductSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.tagline,
    url: `${SITE_URL}/showcase/${p.slug}`,
    brand: { "@type": "Brand", name: "Autico.ai" },
    category: p.category,
    image: `${SITE_URL}/opengraph-image`,
    offers: {
      "@type": "Offer",
      availability:
        p.status === "live"
          ? "https://schema.org/InStock"
          : p.status === "beta"
            ? "https://schema.org/PreOrder"
            : "https://schema.org/PreSale",
      priceCurrency: "USD",
      seller: { "@type": "Organization", name: "Autico.ai" },
    },
    creator: { "@type": "Person", name: p.author },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export function itemListSchema<T extends { slug: string; name: string; tagline: string }>(
  items: T[],
  basePath: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    numberOfItems: items.length,
    itemListElement: items.map((p, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: `${SITE_URL}${basePath}/${p.slug}`,
      name: p.name,
      description: p.tagline,
    })),
  };
}

export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

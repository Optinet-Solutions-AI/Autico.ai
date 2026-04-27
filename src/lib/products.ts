// The 30 products from the AI Engineering Weekend Challenge.
// Source of truth: Weekend_Challenge_Ideas.docx (kept in repo root).
// Status convention: `live` = shipped or shippable today, `beta` = high-impact
// idea with infra in place, `concept` = strong idea, not built yet.

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  category: "agent" | "automation" | "vision" | "data" | "voice" | "ops";
  status: "live" | "beta" | "concept";
  author: string;
};

export const products: Product[] = [
  { slug: "farmdirect", name: "FarmDirect", tagline: "Farmer-to-consumer map platform with AI harvest prediction.", category: "automation", status: "concept", author: "Jose" },
  { slug: "noshowguard", name: "NoShowGuard", tagline: "AI no-show prediction + auto-rebook for clinic appointments.", category: "automation", status: "beta", author: "Jose" },
  { slug: "queuesmart", name: "QueueSmart", tagline: "QR-based digital queue with AI wait-time forecasting for clinics.", category: "automation", status: "concept", author: "Jose" },
  { slug: "competitorscope", name: "CompetitorScope", tagline: "Real-time competitor intel for iGaming operators — weekly AI brief.", category: "data", status: "beta", author: "Ian Jay" },
  { slug: "affiliateguard", name: "AffiliateGuard+", tagline: "Compliance + dead-link revenue audit for iGaming affiliates.", category: "ops", status: "beta", author: "Ian Jay" },
  { slug: "geogen", name: "GeoGen+", tagline: "Per-geo, per-streamer landing pages on autopilot for iGaming.", category: "automation", status: "concept", author: "Ian Jay" },
  { slug: "instantsite", name: "InstantSite Library", tagline: "Pre-built websites for small businesses — launch in minutes.", category: "automation", status: "beta", author: "Revo" },
  { slug: "claimyoursite", name: "ClaimYourSite", tagline: "We pre-build the site, owner clicks claim. One-decision sale.", category: "automation", status: "beta", author: "Revo" },
  { slug: "reputationlift", name: "ReputationLift", tagline: "Review + Maps profile boosting bundle for local businesses.", category: "automation", status: "concept", author: "Revo" },
  { slug: "procurement-autopilot", name: "Procurement Autopilot", tagline: "WhatsApp-native procurement tracker for independent restaurants.", category: "automation", status: "concept", author: "Jas" },
  { slug: "clientportal", name: "ClientPortal", tagline: "Auto-generated branded client portals for B2B SMBs.", category: "automation", status: "concept", author: "Jas" },
  { slug: "salongbp", name: "SalonGBP", tagline: "Vertical-native Google Business Profile manager for salons.", category: "automation", status: "concept", author: "Jas" },
  { slug: "threatscope", name: "ThreatScope", tagline: "1-page competitor threat analysis delivered as cold-email demo.", category: "data", status: "beta", author: "Cathy" },
  { slug: "leakyfunnel", name: "LeakyFunnel", tagline: "Site speed + pixel audit with a quantified lost-revenue figure.", category: "data", status: "beta", author: "Cathy" },
  { slug: "instantsop", name: "InstantSOP", tagline: "Public docs → private AI knowledge base, working in the cold email.", category: "agent", status: "concept", author: "Cathy" },
  { slug: "revenueleak-audit", name: "RevenueLeak Audit", tagline: "5-leak conversion audit for local businesses with done-for-you fixes.", category: "automation", status: "concept", author: "Ralph" },
  { slug: "ai-phone-agent", name: "AI Phone Agent", tagline: "24/7 AI voice receptionist for plumbers, dentists, and HVAC.", category: "voice", status: "beta", author: "Ralph" },
  { slug: "reviewboost", name: "ReviewBoost", tagline: "Consistent 5-star review generation with QR + AI follow-ups.", category: "automation", status: "concept", author: "Ralph" },
  { slug: "reviewbooster-ai", name: "ReviewBooster AI", tagline: "Reviews → testimonials, social posts, email campaigns, and insight.", category: "automation", status: "concept", author: "Ciri" },
  { slug: "missedcall-monetizer", name: "MissedCall Monetizer", tagline: "Lost calls → instant SMS + booking page, with recovered revenue tracked.", category: "automation", status: "beta", author: "Ciri" },
  { slug: "local-seo-autopilot", name: "Local SEO Autopilot", tagline: "Set-and-forget local ranking engine for SMBs.", category: "automation", status: "concept", author: "Ciri" },
  { slug: "smartroute", name: "SmartRoute Revenue OS", tagline: "Conversion + LTV optimization layer for iGaming operators.", category: "data", status: "concept", author: "Leo" },
  { slug: "brokenbonus-detector", name: "BrokenBonus Detector", tagline: "Continuous crawl that quantifies broken-link revenue leaks for iGaming.", category: "automation", status: "concept", author: "Leo" },
  { slug: "marketing-automation", name: "Marketing Automation System", tagline: "Lead → conversion → delivery → retention, unified and AI-orchestrated.", category: "automation", status: "concept", author: "Leo" },
  { slug: "dentaldesk", name: "DentalDesk", tagline: "AI voice receptionist + CRM + portal for Cebu dental clinics.", category: "voice", status: "concept", author: "Ivan" },
  { slug: "bureaucracy-buffer", name: "Bureaucracy Buffer", tagline: "Pre-filled renewal checklists 30 days before any document expires.", category: "ops", status: "concept", author: "Ivan" },
  { slug: "subscription-auditor", name: "Subscription Auditor", tagline: "Cancel vampire subscriptions you haven't used in 45 days.", category: "data", status: "concept", author: "Ivan" },
  { slug: "inbound-lead-responder", name: "Inbound Lead Responder", tagline: "AI replies, qualifies, and books in under 60 seconds across DMs.", category: "agent", status: "live", author: "John" },
  { slug: "faceless-video-studio", name: "Faceless Video Studio", tagline: "12–60 short-form videos a month — scripted, voiced, posted.", category: "automation", status: "live", author: "John" },
  { slug: "airbnb-optimizer", name: "Airbnb Optimizer", tagline: "Listing rewrite + smart pricing + auto guest messaging for Airbnb.", category: "automation", status: "live", author: "John" },
];

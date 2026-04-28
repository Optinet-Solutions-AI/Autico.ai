// The 32 final products from the AI Engineering Weekend Challenge.
// Source of truth: final_lineup_master.md (kept in repo root).
// 11 builders × 3 ideas, except Sere (2 + 1 outstanding).

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  category: "agent" | "automation" | "vision" | "data" | "voice" | "ops";
  status: "live" | "beta" | "concept";
  author: string;
};

export const products: Product[] = [
  // 01. Chris
  { slug: "listing-optimizer", name: "Listing Optimizer", tagline: "Booking.com / Airbnb listing rewriter for small hotels and Airbnb hosts, multilingual.", category: "automation", status: "concept", author: "Chris" },
  { slug: "gbp-fixer", name: "GBP Fixer", tagline: "Google Business Profile fixer with a 0–100 audit score cold-email hook.", category: "automation", status: "concept", author: "Chris" },
  { slug: "website-redesign", name: "Website Redesign", tagline: "AI-generated modern replacement for outdated local business websites.", category: "automation", status: "beta", author: "Chris" },

  // 02. Jose
  { slug: "farmdirect", name: "FarmDirect", tagline: "Farmer-to-consumer map platform with AI harvest prediction.", category: "automation", status: "concept", author: "Jose" },
  { slug: "noshowguard", name: "NoShowGuard", tagline: "AI no-show prediction + auto-rebook for clinic appointments.", category: "automation", status: "beta", author: "Jose" },
  { slug: "queuesmart", name: "QueueSmart", tagline: "QR-based digital queue with AI wait-time forecasting for clinics.", category: "automation", status: "concept", author: "Jose" },

  // 03. Jas
  { slug: "procurement-autopilot", name: "Procurement Autopilot", tagline: "WhatsApp-native procurement tracker for independent restaurants.", category: "automation", status: "beta", author: "Jas" },
  { slug: "clientportal", name: "ClientPortal", tagline: "Auto-generated branded client portals for B2B SMBs.", category: "automation", status: "concept", author: "Jas" },
  { slug: "list-liquidator", name: "List Liquidator", tagline: "AI calls every contact to verify your B2B lead list — $5 per confirmed live.", category: "voice", status: "beta", author: "Jas" },

  // 04. John
  { slug: "inbound-lead-responder", name: "Inbound Lead Responder", tagline: "AI replies, qualifies, and books in under 60 seconds across DMs.", category: "agent", status: "live", author: "John" },
  { slug: "faceless-video-studio", name: "Faceless Video Studio", tagline: "12–60 short-form videos a month — scripted, voiced, posted.", category: "automation", status: "live", author: "John" },
  { slug: "menulift", name: "MenuLift", tagline: "AI menu optimizer for tourist-area restaurants — rewrite, reprice, translate.", category: "automation", status: "beta", author: "John" },

  // 05. Cathy
  { slug: "threatscope", name: "ThreatScope", tagline: "1-page competitor threat analysis delivered as cold-email demo.", category: "data", status: "beta", author: "Cathy" },
  { slug: "leakyfunnel", name: "LeakyFunnel", tagline: "Site speed + pixel audit with a quantified lost-revenue figure.", category: "data", status: "beta", author: "Cathy" },
  { slug: "instantsop", name: "InstantSOP", tagline: "Public docs → private AI knowledge base, working in the cold email.", category: "agent", status: "concept", author: "Cathy" },

  // 06. Ralph
  { slug: "revenue-leak-audit", name: "Revenue Leak Audit", tagline: "5-leak conversion audit for local businesses with done-for-you fixes.", category: "automation", status: "concept", author: "Ralph" },
  { slug: "ghost-job-detector", name: "Ghost Job Detector", tagline: "Detects completed-but-unbilled jobs in your messages and auto-drafts invoices.", category: "data", status: "beta", author: "Ralph" },
  { slug: "reviews-booster", name: "Reviews Booster", tagline: "Consistent 5-star review generation with QR + AI follow-ups.", category: "automation", status: "concept", author: "Ralph" },

  // 07. Sere
  { slug: "auto-reputation-manager", name: "Auto-Reputation Manager", tagline: "AI replies to every review and surfaces the action that wins customers back.", category: "automation", status: "concept", author: "Sere" },
  { slug: "auto-follow-up", name: "Auto-Follow-Up", tagline: "Win-back automation for lapsed customers — SMS, WhatsApp, email.", category: "automation", status: "concept", author: "Sere" },
  { slug: "inventory-restock-predictor", name: "Inventory Restock Predictor", tagline: "Predicts stockouts for small shops and auto-orders from suppliers.", category: "data", status: "concept", author: "Sere" },

  // 08. Leo
  { slug: "smartroute", name: "SmartRoute Revenue OS", tagline: "Conversion + LTV optimization layer for iGaming operators.", category: "data", status: "concept", author: "Leo" },
  { slug: "brokenbonus-detector", name: "BrokenBonus Detector", tagline: "Continuous crawl that quantifies broken-link revenue leaks for iGaming.", category: "automation", status: "concept", author: "Leo" },
  { slug: "marketing-automation", name: "Marketing Automation System", tagline: "Lead → conversion → delivery → retention, unified and AI-orchestrated.", category: "automation", status: "concept", author: "Leo" },

  // 09. Ivan
  { slug: "dentaldesk", name: "DentalDesk", tagline: "AI voice receptionist + CRM + portal for local service businesses.", category: "voice", status: "concept", author: "Ivan" },
  { slug: "bureaucracy-buffer", name: "Bureaucracy Buffer", tagline: "Pre-filled renewal checklists 30 days before any document expires.", category: "ops", status: "concept", author: "Ivan" },
  { slug: "subscription-auditor", name: "Subscription Auditor", tagline: "Cancel vampire subscriptions you haven't used in 45 days.", category: "data", status: "concept", author: "Ivan" },

  // 10. Revo
  { slug: "hashtag-finder", name: "Hashtag Finder", tagline: "AI hashtag discovery to push your posts into search and discovery feeds.", category: "data", status: "concept", author: "Revo" },
  { slug: "promo-page-generator", name: "Promo Page Generator", tagline: "One-click landing pages for local-business promotions, ready to share.", category: "automation", status: "concept", author: "Revo" },
  { slug: "content-generator", name: "Content Generator", tagline: "Daily captions + hashtags + content plans for SMBs to post themselves.", category: "automation", status: "concept", author: "Revo" },

  // 11. Ian Jay
  { slug: "affiliateguard", name: "AffiliateGuard+", tagline: "Compliance + dead-link revenue audit for iGaming affiliates.", category: "ops", status: "beta", author: "Ian Jay" },
  { slug: "geogen", name: "GeoGen+", tagline: "Per-geo, per-streamer landing pages on autopilot for iGaming.", category: "automation", status: "concept", author: "Ian Jay" },
  { slug: "permitprofit", name: "PermitProfit", tagline: "Permit-triggered marketing kits for general contractors — €500/project.", category: "automation", status: "concept", author: "Ian Jay" },
];

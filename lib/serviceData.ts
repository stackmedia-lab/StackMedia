export type ServiceDetail = {
  slug: string;
  title: string;
  eyebrow: string;
  intro: string;
  capabilities: string[];
  deliverables: { title: string; desc: string }[];
  process: { n: string; t: string; d: string }[];
  hero: string;
  faq: { q: string; a: string }[];
};

export const servicePages: Record<string, ServiceDetail> = {
  "paid-media": {
    slug: "paid-media",
    eyebrow: "Performance Marketing",
    hero: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600",
    title: "Paid media built to compound, not just convert.",
    intro:
      "We architect cross-channel paid programs across Google, Meta, TikTok, LinkedIn and programmatic — wired to a single source of truth for spend, creative and revenue.",
    capabilities: [
      "Channel strategy & budget modeling",
      "Account architecture & restructuring",
      "Creative briefing & production",
      "Landing page experimentation",
      "MMM & incrementality testing",
      "Weekly reporting & forecasting",
      "First-party data strategy",
      "Attribution & tracking setup",
    ],
    deliverables: [
      { title: "90-day growth roadmap", desc: "A prioritized plan covering channels, creative, and conversion — built around your unit economics." },
      { title: "Forecast & spend model", desc: "Scenario-based financial models so you know what to expect before you commit budget." },
      { title: "Tracking & attribution setup", desc: "Server-side tracking, GA4, GTM, and cross-channel attribution configured from day one." },
      { title: "Weekly experiment log", desc: "Every test documented with hypothesis, result, and next action. Learning compounds." },
    ],
    process: [
      { n: "01", t: "Audit", d: "Deep account and analytics review to surface quick wins and structural issues." },
      { n: "02", t: "Strategy", d: "Channel mix, budget model, and 90-day roadmap built on your data." },
      { n: "03", t: "Launch", d: "Rebuild tracking, restructure accounts, ship first creative batches." },
      { n: "04", t: "Compound", d: "Weekly iteration cycles that build on each other across creative, bids and pages." },
    ],
    faq: [
      { q: "What ad spend do you work with?", a: "We work with brands spending $25k–$2M+/month. Our pricing scales with complexity, not just spend." },
      { q: "Do you produce creative in-house?", a: "Yes — we have an embedded creative pod that briefs, produces and edits paid social creative on a weekly cadence." },
      { q: "How do you measure incrementality?", a: "We use geo-lift tests, holdout audiences and MMM where data permits. We don't rely on platform attribution alone." },
      { q: "How quickly will we see results?", a: "Tracking and structural wins show up in weeks. Meaningful ROAS improvement typically lands in the first 60 days." },
    ],
  },
  "google-ads": {
    slug: "google-ads",
    eyebrow: "Google Advertising",
    hero: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1600",
    title: "Google Ads engineered for efficient, scalable growth.",
    intro:
      "Search, Performance Max, Shopping, Demand Gen and YouTube — built around your unit economics, not vanity ROAS metrics that don't move the business.",
    capabilities: [
      "Search & branded campaigns",
      "Shopping & feed management",
      "Performance Max with asset groups",
      "YouTube & Demand Gen",
      "Audience signals & first-party data",
      "Enhanced conversions & server-side",
      "Bid strategy & budget pacing",
      "Keyword research & SQR",
    ],
    deliverables: [
      { title: "Account audit & restructure", desc: "Full account teardown and rebuild for campaign clarity, bid efficiency and Quality Score." },
      { title: "PMax asset groups + signals", desc: "Properly segmented Performance Max with custom signals and audience lists." },
      { title: "Conversion tracking with EC", desc: "Enhanced Conversions with server-side support and GA4 linkage for accurate data." },
      { title: "Weekly performance reviews", desc: "Transparent reporting against agreed KPIs — no black boxes, no vanity metrics." },
    ],
    process: [
      { n: "01", t: "Audit", d: "Complete account audit covering structure, keywords, bids, and conversion tracking." },
      { n: "02", t: "Rebuild", d: "Campaign architecture rebuilt for clarity and signal quality." },
      { n: "03", t: "Optimize", d: "Systematic bid, audience and keyword optimization on a weekly cadence." },
      { n: "04", t: "Scale", d: "Budget scaling playbook tied to efficiency thresholds, not gut feel." },
    ],
    faq: [
      { q: "Do you use Performance Max?", a: "Where it makes sense. We segment PMax by margin and intent, and pair it with a strong Search foundation." },
      { q: "Can you fix our Google tracking?", a: "Yes — GA4, GTM, server-side tagging and Enhanced Conversions are part of standard onboarding." },
      { q: "Do you handle Google Shopping feeds?", a: "Yes, including feed optimization, custom labels, and supplemental feeds for Merchant Center." },
    ],
  },
  "meta-ads": {
    slug: "meta-ads",
    eyebrow: "Meta Advertising",
    hero: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1600",
    title: "Meta Ads with creative that earns the click.",
    intro:
      "Facebook & Instagram acquisition built around a creative system — concepts, hooks, iterations and reporting all in one weekly operating rhythm.",
    capabilities: [
      "Acquisition & retargeting campaigns",
      "Advantage+ Shopping campaigns",
      "Creative testing framework",
      "UGC & static production",
      "Conversions API & server-side events",
      "Catalog & DPA setup",
      "Audience strategy & lookalikes",
      "Creative fatigue monitoring",
    ],
    deliverables: [
      { title: "Account restructure", desc: "Clean campaign architecture aligned with business objectives and funnel stages." },
      { title: "Creative brief library", desc: "Documented brief templates for concepts, hooks, formats and testing priorities." },
      { title: "Weekly ad shipments", desc: "8–20 net-new creative variants per week across concepts, hooks and formats." },
      { title: "CAPI implementation", desc: "Conversions API with server-side event matching for signal quality and iOS resilience." },
    ],
    process: [
      { n: "01", t: "Audit", d: "Account health check, pixel audit, and creative performance analysis." },
      { n: "02", t: "Brief", d: "Creative brief library built from your best performers and competitive research." },
      { n: "03", t: "Ship", d: "Weekly creative production and ad shipment cadence." },
      { n: "04", t: "Learn", d: "Winner identification, loser killing, and hypothesis-driven iteration." },
    ],
    faq: [
      { q: "How many ads do you ship per week?", a: "Typical accounts receive 8–20 net-new variants per week across concepts, hooks and formats." },
      { q: "Do you handle UGC?", a: "Yes — we source, brief and edit UGC through vetted creator networks at scale." },
      { q: "How do you handle iOS attribution?", a: "We implement CAPI server-side events, use modeled conversions, and triangulate with MER and holdouts." },
    ],
  },
  "tiktok-ads": {
    slug: "tiktok-ads",
    eyebrow: "TikTok Advertising",
    hero: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=1600",
    title: "TikTok Ads that look like content, not ads.",
    intro:
      "We build native creative engines on TikTok — Spark Ads, creator partnerships and trend-aware production that scales beyond a single viral hit.",
    capabilities: [
      "Spark Ads & whitelisting",
      "Creator sourcing & management",
      "Trend monitoring & rapid response",
      "Hook & retention frameworks",
      "TikTok Pixel & Events API",
      "Creative iteration cadence",
      "In-Feed and TopView formats",
      "TikTok Shop integration",
    ],
    deliverables: [
      { title: "Creator roster", desc: "Vetted creator network matched to your brand voice, product, and audience." },
      { title: "Content concept board", desc: "Weekly creative concepts built on trending formats and platform-native hooks." },
      { title: "Spark Ads setup", desc: "Whitelist and amplify organic content that already proves resonance before paid scaling." },
      { title: "Performance dashboard", desc: "Platform-native metrics alongside business outcomes — views to revenue." },
    ],
    process: [
      { n: "01", t: "Research", d: "Competitor creative analysis and trend auditing for your category." },
      { n: "02", t: "Creator match", d: "Sourcing creators who genuinely use your product category." },
      { n: "03", t: "Produce", d: "Weekly creative output — both creator-led and in-house produced." },
      { n: "04", t: "Amplify", d: "Spark winning organic content and scale paid based on hook rate and CVR." },
    ],
    faq: [
      { q: "Is TikTok right for B2B?", a: "Often yes — for mid-funnel awareness and recruiting. We'll tell you honestly if the economics don't work." },
      { q: "Do we need a big creator budget?", a: "Not to start. We source nano and micro creators who often outperform macro accounts for conversion intent." },
      { q: "How do you measure TikTok's impact?", a: "We look at MER lift, holdouts, and search volume trends alongside platform metrics." },
    ],
  },
  seo: {
    slug: "seo",
    eyebrow: "Organic Growth",
    hero: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1600",
    title: "SEO that compounds — even after AI Overviews.",
    intro:
      "Technical foundations, editorial velocity and authority building. We build organic engines that survive algorithm shifts and continue to grow through AI-first SERPs.",
    capabilities: [
      "Technical SEO & Core Web Vitals",
      "Content strategy & editorial briefs",
      "Programmatic SEO",
      "Digital PR & link earning",
      "Internal linking systems",
      "SERP & entity research",
      "Schema & structured data",
      "International SEO",
    ],
    deliverables: [
      { title: "Technical audit & roadmap", desc: "Full site crawl, Core Web Vitals analysis, and a prioritized fix list with dev briefs." },
      { title: "Content calendar", desc: "Topic clusters built on search demand, entity gaps, and conversion intent." },
      { title: "Link acquisition plan", desc: "Digital PR strategy, outreach targets, and earned media playbook." },
      { title: "Monthly rank & traffic report", desc: "Keyword rank tracking, traffic attribution, and conversion impact." },
    ],
    process: [
      { n: "01", t: "Audit", d: "Technical SEO audit, competitor gap analysis, and opportunity sizing." },
      { n: "02", t: "Fix", d: "Technical remediation delivered as dev tickets with clear acceptance criteria." },
      { n: "03", t: "Publish", d: "Content production against editorial calendar with briefing and editing support." },
      { n: "04", t: "Amplify", d: "Link building, digital PR, and internal linking to compound authority." },
    ],
    faq: [
      { q: "How long until we see SEO results?", a: "Technical wins land in 30–60 days. Content and authority typically compounds from month 4 onward." },
      { q: "How do you handle AI Overviews?", a: "We structure content for featured snippets and entity coverage — the same signals that win AI Overview placement." },
      { q: "Do you write the content?", a: "Yes — we have editorial staff who specialize in performance-focused content that ranks and converts." },
    ],
  },
  gbp: {
    slug: "gbp",
    eyebrow: "Local SEO",
    hero: "https://images.unsplash.com/photo-1556742400-b5b7c5121f2f?w=1600",
    title: "Google Business Profile that drives real-world visits.",
    intro:
      "Maps visibility, reviews velocity, and local landing pages tuned to your service areas. We manage everything from single-location practices to 300+ location franchises.",
    capabilities: [
      "GBP optimization & management",
      "Review generation systems",
      "Local citations & NAP consistency",
      "Service area landing pages",
      "Local schema markup",
      "Q&A management",
      "Competitor local analysis",
      "Multi-location management",
    ],
    deliverables: [
      { title: "GBP audit & optimization", desc: "Every field optimized, categories set, and service areas configured correctly." },
      { title: "Review automation", desc: "Compliant review request flows via SMS, email and QR codes." },
      { title: "Local landing pages", desc: "SEO-optimized pages for each service area, location, or service line." },
      { title: "Monthly local report", desc: "Views, searches, calls, direction requests, and review velocity tracking." },
    ],
    process: [
      { n: "01", t: "Audit", d: "GBP health check, citation audit, and competitor benchmarking." },
      { n: "02", t: "Optimize", d: "Profile completion, category selection, and content optimization." },
      { n: "03", t: "Reviews", d: "Launch review generation system and respond to all incoming reviews." },
      { n: "04", t: "Expand", d: "Local landing pages and citation building to extend geographic reach." },
    ],
    faq: [
      { q: "Do you handle multi-location?", a: "Yes — we manage portfolios from 3 to 300+ locations with bulk tooling and dedicated workflows." },
      { q: "Can you help with negative reviews?", a: "We have a response framework and can flag reviews that violate Google's policies for removal." },
      { q: "How quickly can GBP drive results?", a: "Optimization changes surface in Maps rankings within 2–4 weeks. Review velocity improvements are faster." },
    ],
  },
  "web-design": {
    slug: "web-design",
    eyebrow: "Web Design & Development",
    hero: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1600",
    title: "Websites engineered to convert at speed.",
    intro:
      "We design and build fast, accessible, conversion-focused sites on Next.js, Webflow or Shopify — with experimentation infrastructure baked into every build.",
    capabilities: [
      "UX & conversion design",
      "Next.js & React development",
      "Webflow design & build",
      "Shopify & headless commerce",
      "CMS & headless integrations",
      "Core Web Vitals & accessibility",
      "A/B testing infrastructure",
      "Landing page systems",
    ],
    deliverables: [
      { title: "Discovery & sitemap", desc: "User research, IA mapping, and conversion-focused sitemap before a pixel is designed." },
      { title: "High-fidelity design", desc: "Full Figma designs with a component system, responsive states and interaction specs." },
      { title: "Production build", desc: "Clean, performant code with Lighthouse scores above 90 across all categories." },
      { title: "Experimentation framework", desc: "A/B testing setup with a backlog of conversion experiments ready to run post-launch." },
    ],
    process: [
      { n: "01", t: "Discovery", d: "Stakeholder interviews, analytics audit, and conversion audit of existing site." },
      { n: "02", t: "Design", d: "Wireframes, component system, and high-fidelity designs with client sign-off." },
      { n: "03", t: "Build", d: "Development sprint with weekly previews. QA across devices, browsers and speeds." },
      { n: "04", t: "Launch", d: "Staged launch, redirect mapping, and 30-day post-launch monitoring." },
    ],
    faq: [
      { q: "How long does a site take?", a: "Marketing sites: 6–10 weeks. Headless commerce: 10–16 weeks. Landing page systems: 3–4 weeks." },
      { q: "Do you work with our existing CMS?", a: "Yes — we work with Sanity, Contentful, Prismic, and can migrate from WordPress." },
      { q: "Do you handle hosting and deployment?", a: "We recommend and configure Vercel or Netlify, with full CI/CD pipelines and preview environments." },
    ],
  },
  branding: {
    slug: "branding",
    eyebrow: "Brand & Identity",
    hero: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600",
    title: "Brand systems with strategy at the core.",
    intro:
      "Identity, voice and visual systems built to stretch across paid creative, web and product without losing coherence — even after you hire 50 more people.",
    capabilities: [
      "Brand strategy & positioning",
      "Naming & verbal identity",
      "Logo & identity system",
      "Typography & color systems",
      "Brand guidelines",
      "Launch toolkits",
      "Creative templates",
      "Brand architecture",
    ],
    deliverables: [
      { title: "Brand strategy document", desc: "Positioning, audience definition, brand voice, and competitive differentiation framework." },
      { title: "Complete identity system", desc: "Logo suite, typography, color system, iconography, and motion principles." },
      { title: "Brand guidelines", desc: "Usage rules, do/don't examples, and practical guidance for every touchpoint." },
      { title: "Asset library", desc: "Figma component library and export-ready assets for web, social, print and paid." },
    ],
    process: [
      { n: "01", t: "Strategy", d: "Workshops to define positioning, audience, and differentiation before design starts." },
      { n: "02", t: "Explore", d: "Direction development with three distinct creative territories." },
      { n: "03", t: "Refine", d: "Client-selected direction built into a complete system." },
      { n: "04", t: "Deliver", d: "Final files, guidelines, templates and launch support." },
    ],
    faq: [
      { q: "Can you rebrand without disrupting paid?", a: "Yes — we phase rollouts so creative testing and revenue continue uninterrupted through the transition." },
      { q: "Do you handle naming?", a: "Yes — naming is offered as part of brand strategy engagements or as a standalone project." },
      { q: "What do you deliver in Figma?", a: "A component-based design library with all brand elements, organized for handoff to any designer or developer." },
    ],
  },
};

import { marcusAvatar, priyaAvatar, elenaAvatar } from "../assets";

export const COMPANY = {
  name: "Prysmors",
  legalName: "Prysmors LLC",
  founder: "Rikaz Rifferrd",
  founderRole: "Founder & CEO",
  founded: "April 20, 2024",
  address: "555 Fulston St, Ste C140, San Francisco, CA 94102",
  phone: "+1 315-931-1053",
  phoneHref: "tel:+13159311053",
  email: "hello@prysmors.com",
  website: "prysmors.com",
};

export const TRUST_LOGOS = [
  "SAP", "Salesforce", "Workday", "Snowflake", "Oracle", "NetSuite", "AWS", "Azure", "ServiceNow", "HubSpot",
];

export const DATA_SOURCES = [
  { name: "ERP Systems", connected: true },
  { name: "CRM Platforms", connected: true },
  { name: "Financial Systems", connected: true },
  { name: "HR Platforms", connected: true },
  { name: "Supply Chain Systems", connected: true },
  { name: "Enterprise Databases", connected: true },
  { name: "Data Warehouses", connected: true },
  { name: "Cloud Applications", connected: false },
  { name: "Market Intelligence APIs", connected: false },
];

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const CAPABILITIES = [
  {
    id: "01",
    title: "Decision Intelligence Engine",
    desc: "Continuously analyzes enterprise data and generates prioritized, AI-powered recommendations for strategic action.",
    icon: "brain-circuit",
  },
  {
    id: "02",
    title: "Predictive Analytics",
    desc: "Forecasts business performance, surfaces operational risk, and identifies emerging growth opportunities before they surface.",
    icon: "trending-up",
  },
  {
    id: "03",
    title: "Scenario Simulation",
    desc: "Models multiple strategic outcomes, evaluates alternatives, and estimates financial and operational impact.",
    icon: "git-branch",
  },
  {
    id: "04",
    title: "Enterprise Knowledge Graph",
    desc: "Integrates structured and unstructured data across business systems to support contextual AI reasoning.",
    icon: "network",
  },
  {
    id: "05",
    title: "Executive Intelligence",
    desc: "Real-time strategic KPIs, predictive insight visualizations and executive-ready reporting, on demand.",
    icon: "layout-dashboard",
  },
  {
    id: "06",
    title: "API & Extensibility",
    desc: "Enterprise-grade APIs and SDKs so decision intelligence can be embedded anywhere in your stack.",
    icon: "plug-zap",
  },
];

export const PIPELINE_STEPS = [
  {
    title: "Data Ingestion",
    desc: "ERP, CRM, financial, HR, supply-chain and warehouse systems connect in minutes.",
    icon: "database",
  },
  {
    title: "AI Reasoning Engine",
    desc: "Contextual models reason over enterprise + market data in real time.",
    icon: "cpu",
  },
  {
    title: "Predictive Modeling",
    desc: "Forecasts performance and risk across every business function.",
    icon: "trending-up",
  },
  {
    title: "Scenario Simulation",
    desc: "Strategic alternatives are simulated and scored automatically.",
    icon: "git-branch",
  },
  {
    title: "Executive Delivery",
    desc: "Recommendations are pushed to leadership as decision-ready reports.",
    icon: "send",
  },
];

export const HEALTH_METRICS = [
  { label: "Active Data Sources", value: "128", suffix: "" },
  { label: "AI Prediction Accuracy", value: "97.4", suffix: "%" },
  { label: "GPU Utilization", value: "82", suffix: "%" },
  { label: "Recommendation Confidence", value: "94", suffix: "%" },
];

export const TESTIMONIALS = [
  {
    quote:
      "Prysmors replaced three disconnected reporting tools with a single decision layer. Our leadership team now plans quarters in days, not weeks.",
    name: "Elena Voss",
    role: "Chief Strategy Officer",
    company: "Northbridge Financial",
    avatar: elenaAvatar,
  },
  {
    quote:
      "The scenario simulation engine changed how we approach capital allocation. We can pressure-test a decision before it ever reaches the board.",
    name: "Marcus Idehen",
    role: "VP Operations",
    company: "Kestrel Manufacturing",
    avatar: marcusAvatar,
  },
  {
    quote:
      "It's the first analytics platform that feels built for executives, not analysts. The predictive dashboards are genuinely something we open every morning.",
    name: "Priya Anand",
    role: "CEO",
    company: "Solace Health Systems",
    avatar: priyaAvatar,
  },
];

export const CLIENT_LOGOS = [
  "Northbridge",
  "Kestrel Mfg.",
  "Solace Health",
  "Vantar Retail",
  "Ferro Logistics",
  "Meridian Gov.",
];

export const PRICING_TIERS = [
  {
    name: "Essentials",
    price: "$2,400",
    period: "/mo",
    desc: "For a single department piloting decision intelligence.",
    features: [
      "Up to 12 connected data sources",
      "Predictive analytics dashboard",
      "Monthly executive report",
      "Standard support (business hours)",
      "1 workspace, 5 seats",
    ],
    cta: "Start with Essentials",
    featured: false,
  },
  {
    name: "Growth",
    price: "$6,800",
    period: "/mo",
    desc: "For cross-functional teams running on live recommendations.",
    features: [
      "Up to 60 connected data sources",
      "Scenario simulation engine",
      "Real-time executive dashboard",
      "Priority support + solutions engineer",
      "5 workspaces, 40 seats",
      "API & SDK access",
    ],
    cta: "Start with Growth",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For global organizations deploying decision intelligence at scale.",
    features: [
      "Unlimited data sources & workspaces",
      "Dedicated GPU inference capacity",
      "Custom model calibration",
      "24/7 support + dedicated CSM",
      "SSO, audit logs, custom SLAs",
      "On-prem / VPC deployment options",
    ],
    cta: "Talk to Sales",
    featured: false,
  },
];

export const WHY_US = [
  {
    id: "01",
    title: "AI-Native Architecture",
    desc: "Built from the ground up as a decision engine, not a retrofitted dashboard.",
    icon: "cpu",
  },
  {
    id: "02",
    title: "Enterprise-Grade Security",
    desc: "SOC 2-aligned controls, encryption in transit and at rest, and full audit trails.",
    icon: "shield-check",
  },
  {
    id: "03",
    title: "NVIDIA-Accelerated Compute",
    desc: "GPU-accelerated inference for real-time predictive and simulation workloads.",
    icon: "zap",
  },
  {
    id: "04",
    title: "Dedicated Implementation",
    desc: "A senior solutions team embeds with yours through rollout and adoption.",
    icon: "users",
  },
];

export const FAQS = [
  {
    q: "What exactly is an Enterprise Decision Intelligence platform?",
    a: "It's a unified AI layer that sits above your existing systems — ERP, CRM, financial and operational data — and continuously turns that data into forecasts, simulated scenarios and prioritized recommendations for leadership, rather than static historical reports.",
  },
  {
    q: "How is Prysmors different from traditional BI tools?",
    a: "Traditional BI tells you what already happened. Prysmors is forward-looking: it predicts what's likely to happen, simulates what could happen under different strategies, and recommends what to do next — continuously, not on a reporting cycle.",
  },
  {
    q: "Which systems can Prysmors integrate with?",
    a: "Prysmors connects to ERP, CRM, financial systems, HR platforms, supply-chain tools, cloud data warehouses and external market-intelligence APIs through pre-built connectors and an open integration SDK.",
  },
  {
    q: "How long does implementation take?",
    a: "Most enterprise deployments reach first production insights within 6–8 weeks, with a dedicated solutions team managing data connections, model calibration and executive dashboard configuration.",
  },
  {
    q: "Is my enterprise data secure?",
    a: "Yes. Data is encrypted in transit and at rest, access is governed by enterprise SSO and role-based permissions, and every recommendation is fully auditable back to its source data.",
  },
  {
    q: "Do you offer an API for custom integrations?",
    a: "Yes. The Prysmors Decision Intelligence API and analytics SDK let engineering teams embed predictive scoring, recommendations and simulation results directly into internal tools.",
  },
];

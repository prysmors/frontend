

export const COMPANY = {
  name: "Prysmors",
  legalName: "Prysmors LLC",
  founder: "Rikaz Riffered",
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
      "Prysmors has transformed the way our leadership team approaches strategic planning. Instead of relying on static reports, we now have predictive insights that help us anticipate challenges and make decisions with greater confidence. It's become an essential part of our executive decision-making process.",
    name: "Sarah Mitchell",
    role: "Chief Strategy Officer",
    company: "Global Manufacturing Group",
  },
  {
    quote:
      "The platform brings together data from multiple business systems into one intelligent view. Our teams spend less time gathering information and more time acting on meaningful insights. The AI recommendations have significantly improved the speed of our operational decisions.",
    name: "Daniel Foster",
    role: "VP of Operations",
    company: "Horizon Retail Solutions",
  },
  {
    quote:
      "What impressed us most was Prysmors' ability to forecast potential business outcomes before they happen. The scenario planning capabilities have helped us evaluate investment decisions with far greater clarity and reduced uncertainty.",
    name: "Emily Carter",
    role: "Chief Financial Officer",
    company: "Apex Financial Services",
  },
  {
    quote:
      "Prysmors delivers more than dashboards, it provides context behind the numbers. Executive reporting has become faster, collaboration has improved, and our leadership team has a shared understanding of business performance across every department.",
    name: "Michael Reynolds",
    role: "Director of Business Intelligence",
    company: "Nova Healthcare Systems",
  },
  {
    quote:
      "As our organization continued to grow, we needed a smarter way to connect enterprise data and support strategic planning. Prysmors has given us a reliable decision intelligence platform that scales with our business and helps us stay ahead of change.",
    name: "Jessica Morgan",
    role: "Chief Digital Officer",
    company: "Summit Enterprise Group",
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
    href: "https://buy.stripe.com/test_5kQ6oIeie9sve32e2jgjC01",
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
    href: "https://buy.stripe.com/test_9B6aEY4HE0VZ0cc5vNgjC00",
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
    q: "What is Prysmors?",
    a: "Prysmors is an AI-native Enterprise Decision Intelligence platform that helps organizations transform data into strategic business decisions. By combining predictive analytics, AI reasoning, scenario simulation, and enterprise knowledge, it enables leadership teams to make faster and more informed decisions.",
  },
  {
    q: "How is Prysmors different from traditional Business Intelligence platforms?",
    a: "Traditional BI platforms primarily focus on historical reporting and dashboards. Prysmors goes beyond reporting by analyzing enterprise data in real time, forecasting future outcomes, simulating business scenarios, and providing AI-powered recommendations to support proactive decision-making.",
  },
  {
    q: "Which industries can benefit from Prysmors?",
    a: "Prysmors is designed for organizations across multiple industries, including finance, manufacturing, healthcare, retail, logistics, technology, and government. Any enterprise looking to improve strategic planning and operational decision-making can benefit from the platform.",
  },
  {
    q: "Can Prysmors integrate with our existing business systems?",
    a: "Yes. Prysmors is built to integrate with leading ERP systems, CRM platforms, financial software, HR applications, cloud services, enterprise databases, and external data sources, allowing organizations to unify their business intelligence without replacing existing infrastructure.",
  },
  {
    q: "Is Prysmors suitable for enterprises of different sizes?",
    a: "Absolutely. The platform is designed with a scalable architecture that supports growing businesses as well as large enterprises. It adapts to evolving data volumes, users, and business requirements while maintaining enterprise-grade performance and security.",
  },
  {
    q: "How can my organization get started with Prysmors?",
    a: "Getting started is simple. Schedule a personalized demo with our team to explore how Prysmors can support your business goals. We'll walk you through the platform, discuss your requirements, and recommend the best approach for implementation.",
  },
];

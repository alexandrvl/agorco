export const site = {
  name: "agorco",
  url: "https://agorco.com",
  title: "agorco — data-intensive IT products",
  description:
    "Estonian software studio. We design and build data-intensive IT products. Energy, retail, logistics, and lending are where we have shipped; the same stack and domain practice apply in other companies.",
  email: "dev@agorco.com",
  linkedIn: "https://ee.linkedin.com/in/aleksandr-gortujev-57a822144",
  linkedInLabel: "Principal on LinkedIn",
  legal: "agorco · software studio · Tallinn, Estonia",
  cta: {
    label: "Discuss a product",
    shortLabel: "Discuss",
    href: "#contact",
  },
  principal: {
    name: "Aleksandr Gortujev",
    initials: "AG",
    role: "Principal — product, architecture, delivery",
    location: "Tallinn, Estonia",
    line: "One-principal studio with a bench of senior architects, developers, and product managers. Building production systems since 2007.",
    photoAlt:
      "Over-the-shoulder view of architects at a whiteboard sketching an MDM C4 diagram: HES to MDM to TSO and billing, with containers for ingestion, TSO-gw, and billing exchange",
  },
  hero: {
    eyebrow: "Software studio · Tallinn, Estonia",
    heading: "We build data-intensive IT products.",
    lead: "One principal and a senior bench. Energy, retail, logistics, and lending are where we have already shipped — the stack and the domain practice apply in other companies as well.",
    proof: {
      href: "#work",
      items: [
        "630,000+ meters",
        "5+ years in production",
        "national retail POS",
      ],
    },
  },
  nav: [
    { href: "#work", label: "Work" },
    { href: "#approach", label: "Approach" },
    { href: "#contact", label: "Contact" },
  ],
  approach: {
    heading: "How we engage",
    lead: "We model the domain, ship, and stay until the facts are in production. Delivery can be a product you operate, or a partnership on the product itself — that depends on the work.",
    steps: [
      {
        title: "Name the problem",
        description:
          "What the business cannot see or cannot run today, and the context around it — a live system, a new product, or both.",
      },
      {
        title: "Agree what done looks like",
        description:
          "A written decision attached to a delivery constraint: scope, ownership, and the production facts you will have.",
      },
      {
        title: "Ship and run",
        description:
          "Architecture and delivery until operators can act. Metrics and monitoring are part of the product, not a dashboard after go-live.",
      },
    ],
  },
  work: {
    heading: "Selected work",
    featured: {
      domain: "DSO · meter data",
      org: "Elektrilevi · Eesti Energia",
      years: "5+ years",
      title: "National-scale DSO meter-data management",
      metrics: [
        { value: "630,000+", label: "customers served" },
        { value: "15 min", label: "meter-data intervals" },
        { value: "5+ years", label: "in production" },
        { value: "Before 10:00", label: "on the market" },
      ],
      tags: ["DSO", "MDM", "Estfeed", "AVP", "Siemens", "Landis+Gyr"],
      constraint:
        "Fifteen-minute intervals for more than 630,000 customers, held for 5+ years. Vendors, the distribution operator, and Elering still had to share the same facts. The DSO must put that data on the market before 10:00.",
      values: [
        {
          kicker: "Settlement-ready series",
          statement:
            "A bounded context for DSO meter data: operational reports and lakehouse tables the business can query, hardware and MDM still in the picture.",
        },
        {
          kicker: "Meter-to-cash",
          statement:
            "Complete, timely series cuts the cost of getting from meter read to settlement. Gaps and late facts are what inflate meter-to-cash.",
        },
        {
          kicker: "Fewer contacts",
          statement:
            "When operators close meter issues before the customer calls, you skip the contact. A call is expensive; a silent fix is not.",
        },
        {
          kicker: "10:00 obligation",
          statement:
            "The DSO is obligated to provide meter data before 10:00. Delivery is met, not hoped for.",
        },
      ],
      result:
        "Operators and the business see the same fifteen-minute facts — settlement and self-service consumption, fewer costly customer contacts, and data on the market before 10:00.",
      tools:
        "Medallion lakehouse with Apache Iceberg and Trino; Estfeed and AVP contracts; Siemens MDM and Landis+Gyr hardware; OT on the Purdue Model; Azure hub-and-spoke.",
      flow: [
        {
          kicker: "Field",
          title: "Meters",
          note: "15-minute intervals at national scale",
        },
        {
          kicker: "OT / MDM",
          title: "Hardware and head-end",
          note: "Siemens, Landis+Gyr, Estfeed, AVP",
        },
        {
          kicker: "Lakehouse",
          title: "Same facts",
          note: "Iceberg, Trino, operational reports",
        },
        {
          kicker: "Obligation",
          title: "On the market",
          note: "Before 10:00, operators included",
        },
      ],
    },
    also: [
      {
        icon: "retail",
        domain: "Retail",
        org: "Nixor EE AS",
        years: "8 years",
        title: "POS, self-checkout, and fiscal hardware",
        metric: "8 years on the floor",
        image: "retail",
        imageAlt:
          "Self-checkout kiosks and POS hardware on a grocery store floor",
        constraint:
          "Store-floor systems for large Estonian retail chains, including the national EEK to EUR change on software and databases without stopping the floor.",
        result:
          "Faster queues lift the end-customer experience and let shops take more orders at peak — revenue the line would otherwise drop.",
      },
      {
        icon: "logistics",
        domain: "Logistics",
        org: "Omniva",
        years: "National carrier",
        title: "Addressing and GIS routing",
        metric: "National postal network",
        image: "logistics",
        imageAlt:
          "Logistics operations room with an Estonia routing map and a sorting hall beyond",
        constraint:
          "Addressing and GIS routing for Estonia’s national postal carrier — the network already in production, not a greenfield map.",
        result:
          "Routes and addresses the floor could use, on the carrier’s live network.",
      },
      {
        icon: "gaming",
        domain: "Live sport",
        org: "Gamesys / Snowcat Games",
        years: "In-event",
        title: "Recommendations on the live event",
        metric: "Real-time with the event",
        image: "sport",
        imageAlt:
          "Live-event operations floor with stadium video and real-time charts",
        constraint:
          "Recommendations on Google Cloud Dataflow for live sport. The pipeline had to keep up with the market as the event moved.",
        result:
          "The house did not lose money when the market moved because the pipeline kept up with the event in real time.",
      },
      {
        icon: "fintech",
        domain: "Lending",
        org: "IuteCredit Europe AS",
        years: "Multi-country",
        title: "First ATM for a new network",
        metric: "Rolled out across countries",
        image: "lending",
        imageAlt: "Street ATM at night with a glowing interface",
        constraint:
          "First ATM for a new ATM network, with full product ownership — hardware, software, and the customer at the machine.",
        result:
          "The same product then went to multiple countries: experience at the machine for the end customer, and money for the company.",
      },
    ],
  },
  stack: {
    heading: "Stack",
    lead: "What we ship with. The same pieces apply when the domain is new.",
    items: [
      "Java",
      "Spring Boot",
      "Python",
      "Kubernetes",
      "Medallion architecture",
      "Apache Iceberg",
      "PyIceberg",
      "Trino",
      "DuckDB",
      "Vortex",
      "Apache DataFusion",
      "PostgreSQL",
      "Redis",
      "LanceDB",
      "Azure hub-and-spoke",
      "AWS",
      "Kafka",
      "RisingWave",
      "Google Cloud Dataflow",
      "Cloudflare",
      "GitHub Copilot",
      "Microsoft Copilot Studio",
      "M365 Copilot",
      "Domain-driven design",
      "C4",
      "Architecture Decision Records",
      "Grafana",
      "Prometheus",
      "Purdue Model OT",
      "Siemens MDM",
      "Landis+Gyr",
      "Estfeed",
      "AVP",
    ],
    techLinks: [
      { name: "Vortex", url: "https://vortex.dev/blog" },
      { name: "LanceDB", url: "https://lancedb.com/" },
      { name: "Apache DataFusion", url: "https://datafusion.apache.org/" },
      { name: "RisingWave", url: "https://risingwave.com/" },
      { name: "Python", url: "https://www.python.org/" },
      { name: "PyIceberg", url: "https://py.iceberg.apache.org/" },
      { name: "DuckDB", url: "https://duckdb.org/" },
      { name: "PostgreSQL", url: "https://www.postgresql.org/" },
      { name: "Redis", url: "https://redis.io/" },
      { name: "Cloudflare", url: "https://www.cloudflare.com/" },
    ],
  },
  contact: {
    heading: "If the product has to show the business something",
    lead: "Write the problem and the context. That is enough to decide whether we should take it on together. Replies from Aleksandr at the address below.",
  },
} as const;

export function mailtoHref(): string {
  return `mailto:${site.email}`;
}

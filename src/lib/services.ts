export type ServiceCategory = {
  slug: string;
  num: string;
  title: string;
  short: string;
  long: string[];
  responseTime: string;
  priceRange: string;
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    slug: "emergency",
    num: "01",
    title: "Emergency same-day cleaning",
    short:
      "When your facility needs hands on the ground today, not tomorrow.",
    long: [
      "Surprise inspections, walk-throughs, executive visits, weather events. Whatever just landed on your desk, we put a crew there before the day ends.",
      "Crew leads pre-cleared for sensitive sites. Photo documentation before and after. Payment captured after sign-off.",
    ],
    responseTime: "On-site within 4 hours.",
    priceRange: "Trip charge $400 · $85–$125 per worker / hr.",
  },
  {
    slug: "biohazard",
    num: "02",
    title: "Biohazard & trauma cleanup",
    short:
      "Blood, bodily fluids, infectious response. OSHA-compliant. Discreet.",
    long: [
      "Crime scene aftermath, accidents, suicide cleanup, unattended deaths. Crews trained in bloodborne-pathogen protocols, full PPE, sealed disposal chain.",
      "We work directly with insurers and property managers. Unmarked vehicles available on request.",
    ],
    responseTime: "Crew assembling within 60 minutes.",
    priceRange: "Quoted on call · 2–3× base rate.",
  },
  {
    slug: "post-construction",
    num: "03",
    title: "Post-construction cleanup",
    short:
      "Rough, final, and white-glove. Walkthrough-ready by your deadline.",
    long: [
      "Drywall dust, cement residue, paint overspray, debris. Heavy-duty equipment, HEPA vacuums, microfiber finish.",
      "Phased crews so we move with your trades. We hand off to ownership ready for inspection.",
    ],
    responseTime: "On-site within 4–8 hours.",
    priceRange: "$0.15–$0.45 per sq ft typical.",
  },
  {
    slug: "post-event",
    num: "04",
    title: "Post-event & venue turnover",
    short:
      "Ballrooms, country clubs, conference centers. Reset for the next booking.",
    long: [
      "Late-night, overnight, sunrise turnaround. Carpet extraction, hard-floor reset, kitchen and bar rinse-down.",
      "We work alongside venue staff and respect house protocols. Crews briefed on access, freight, and noise rules.",
    ],
    responseTime: "On-site at scheduled load-out.",
    priceRange: "Per-event quote · typical 4–8 hour crews.",
  },
  {
    slug: "multifamily",
    num: "05",
    title: "Move-out & multifamily turnover",
    short:
      "Units, common areas, post-eviction. By morning, ready to lease.",
    long: [
      "Apartment complexes, condos, student housing. Full-unit deep clean, appliance detail, carpet and tile.",
      "Post-eviction biohazard surcharge handled in-line. Volume pricing for property managers running 10+ turns a month.",
    ],
    responseTime: "Same-day or next-morning windows.",
    priceRange: "$185–$420 per unit · volume tiers.",
  },
  {
    slug: "flood",
    num: "06",
    title: "Flood, water damage & sewage",
    short:
      "Extraction, drying, antimicrobial. Crew on-site before the carpet sets.",
    long: [
      "Burst pipes, roof leaks, sprinkler discharge, sewage backups, septic failures. Containment-first protocols, IICRC-trained leads where category 2/3 water is suspected.",
      "We coordinate directly with restoration and adjusters. We do the cleanup; we don&rsquo;t pretend to be a remediation contractor.",
    ],
    responseTime: "Extraction crew within 4 hours, 24/7.",
    priceRange: "$95–$140 per worker / hr · equipment billed.",
  },
  {
    slug: "vandalism",
    num: "07",
    title: "Vandalism & graffiti response",
    short:
      "Same-day response so the storefront opens tomorrow.",
    long: [
      "Spray paint, broken-glass clean-up, biohazard from break-ins, exterior pressure-wash, signage rinse.",
      "Coordinated with PD report numbers and insurance claims. We document everything for your file.",
    ],
    responseTime: "On-site within 4 hours.",
    priceRange: "Quoted on call · 1.5–2× base rate.",
  },
  {
    slug: "vendor-no-show",
    num: "08",
    title: "Vendor no-show coverage",
    short:
      "Your nightly cleaner missed. We&rsquo;re already moving.",
    long: [
      "Specifically built for facility managers whose recurring vendor failed at 9pm. We hold capacity for backup calls.",
      "One call, full crew, billed at our standard rate. We don&rsquo;t poach your contract &mdash; we just cover the gap.",
    ],
    responseTime: "On-site within 4 hours of confirmation.",
    priceRange: "$400 trip + $85–$125 per worker / hr.",
  },
  {
    slug: "recurring",
    num: "09",
    title: "Recurring commercial cleaning",
    short:
      "After we earn the emergency, we earn the contract.",
    long: [
      "Once we&rsquo;ve handled an emergency in your building, we&rsquo;re happy to quote the recurring scope. Generally 20&ndash;40% below national franchise vendors for equivalent specs.",
      "Day porter, nightly, weekly, or scheduled deep-clean. Same vetted crew leads each visit.",
    ],
    responseTime: "Onboarding inside 5 business days.",
    priceRange: "Custom · scope-dependent.",
  },
];

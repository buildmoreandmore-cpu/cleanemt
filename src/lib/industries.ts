export type Industry = {
  slug: string;
  num: string;
  name: string;
  hook: string;
  certifications: string;
  protocols: string;
  typicalJobs: string[];
};

export const INDUSTRIES: Industry[] = [
  {
    slug: "veterinary-and-animal",
    num: "01",
    name: "Veterinary hospitals & animal facilities",
    hook: "Parvo, kennel cough, post-surgical biohazard. Animal-safe chemistry.",
    certifications:
      "Bloodborne pathogens, parvo-grade disinfection (potassium peroxymonosulfate), HEPA filtration.",
    protocols:
      "Containment of outbreak rooms, sealed waste handling, post-clean ATP swab on request.",
    typicalJobs: [
      "Parvo or panleukopenia outbreak response",
      "Surgical suite turnover",
      "Boarding kennel deep clean",
      "Post-euthanasia room reset",
    ],
  },
  {
    slug: "multifamily",
    num: "02",
    name: "Multifamily property management",
    hook: "Unit turns, post-eviction, common-area emergencies, after-hours response.",
    certifications:
      "Bloodborne pathogen protocols for post-eviction. Bonded crew, key-handling chain of custody.",
    protocols:
      "Photo documentation per unit, walk-through with property staff, signed sign-off form.",
    typicalJobs: [
      "Post-eviction biohazard & deep clean",
      "Standard make-ready turnover",
      "Common-area flood / sewage response",
      "Trash chute & dumpster room reset",
    ],
  },
  {
    slug: "auto-dealerships",
    num: "03",
    name: "Auto dealerships & service centers",
    hook: "Showroom glass, service-bay floors, customer lounges. Pre-event polish.",
    certifications:
      "Hazardous-fluid handling for service bays. Floor polishing on terrazzo & polished concrete.",
    protocols:
      "After-hours scheduling around service writers. We work around lifts, parts, and vehicle inventory.",
    typicalJobs: [
      "Pre-event showroom prep",
      "Service-bay floor degrease",
      "Customer lounge & restroom reset",
      "Post-renovation white-glove",
    ],
  },
  {
    slug: "medical-and-dental",
    num: "04",
    name: "Medical & dental offices",
    hook: "OSHA-compliant disinfection, exam-room turnover, biohazard handling.",
    certifications:
      "Bloodborne pathogen training, EPA List N disinfectants, HIPAA-aware crew briefings.",
    protocols:
      "We never enter charts, devices, or patient files. Biohazard waste sealed and handed to your medical-waste contractor.",
    typicalJobs: [
      "Exam room turnover",
      "Post-procedure spill response",
      "Lobby & waiting room reset",
      "Annual deep clean (CMS prep)",
    ],
  },
  {
    slug: "restaurants",
    num: "05",
    name: "Restaurants & food service",
    hook: "Hood degreasing, post-shift kitchen reset, health-inspection prep.",
    certifications:
      "ServSafe-aware crew, food-grade disinfectants, hood-cleaning partner network.",
    protocols:
      "Late-night and overnight shifts. We hand off to your morning prep team without overlap.",
    typicalJobs: [
      "Post-shift kitchen deep clean",
      "Front-of-house reset before health inspection",
      "Grease trap area & dish-pit detail",
      "Patio & exterior pressure wash",
    ],
  },
  {
    slug: "office-and-coworking",
    num: "06",
    name: "Office buildings & coworking",
    hook: "Vendor no-show coverage, post-event reset, executive walk-through.",
    certifications:
      "$2M general liability standard. Building-access protocols (proximity cards, escort, sign-in).",
    protocols:
      "Tenant-aware crews. We respect locked floors, secure rooms, and mailroom chain of custody.",
    typicalJobs: [
      "Vendor no-show coverage",
      "Post-event conference room reset",
      "Executive floor pre-visit polish",
      "Carpet extraction & spot treatment",
    ],
  },
  {
    slug: "construction",
    num: "07",
    name: "Construction sites & general contractors",
    hook: "Rough-clean, final-clean, white-glove. Phased to your trades.",
    certifications:
      "OSHA 10 crew leads, hard-hat & PPE compliant, lift-equipment operators on-call.",
    protocols:
      "We coordinate with your superintendent. Daily punch-list updates and dust-control documentation.",
    typicalJobs: [
      "Rough-clean post-drywall",
      "Final-clean pre-substantial completion",
      "White-glove pre-handoff",
      "Site debris haul-off coordination",
    ],
  },
  {
    slug: "retail",
    num: "08",
    name: "Retail & big-box",
    hook: "Holiday & event surge, vandalism response, restroom reset.",
    certifications:
      "Bonded crew for after-hours store access. Floor-care equipment for hard surface and tile.",
    protocols:
      "Compliance with store loss-prevention protocols. Crew leads carry COI on request.",
    typicalJobs: [
      "Overnight floor scrub & polish",
      "Restroom emergency response",
      "Vandalism & graffiti same-day",
      "Post-event holiday reset",
    ],
  },
  {
    slug: "schools",
    num: "09",
    name: "Schools, day care & after-school",
    hook: "Sanitization response, outbreak-grade disinfection, summer deep clean.",
    certifications:
      "Crew background checks meet GA child-safe vendor standards. EPA List N disinfectants.",
    protocols:
      "Crews scheduled outside instruction hours. Chemical safety data sheets on file with your facilities lead.",
    typicalJobs: [
      "Norovirus / flu outbreak response",
      "Cafeteria deep clean",
      "Summer reset between semesters",
      "Post-event auditorium turnover",
    ],
  },
  {
    slug: "industrial-and-warehouse",
    num: "10",
    name: "Industrial & warehouse",
    hook: "Spill response, dock & dock-door reset, pre-audit deep clean.",
    certifications:
      "Forklift-area awareness, lockout-tagout-aware crew leads, hazmat-spill containment kits.",
    protocols:
      "Coordinated with your safety lead. Crews stage outside the operating envelope.",
    typicalJobs: [
      "Hydraulic / oil spill response",
      "Pre-audit floor scrub & restripe",
      "Loading dock & dumpster pad reset",
      "Office-area cleaning inside the warehouse",
    ],
  },
  {
    slug: "country-clubs-and-venues",
    num: "11",
    name: "Country clubs, event venues & hospitality",
    hook: "Late-night ballroom turnover, member-event reset, F&B detail.",
    certifications:
      "Member-property NDAs available. Crew dress code matched to venue standard.",
    protocols:
      "We arrive at load-out, leave before first member arrival. Linen and china left for venue staff.",
    typicalJobs: [
      "Wedding & gala load-out turnover",
      "Member-tournament dining reset",
      "Locker room deep clean",
      "Post-event banquet kitchen detail",
    ],
  },
  {
    slug: "government-and-nonprofit",
    num: "12",
    name: "Government & nonprofit facilities",
    hook: "Public-building emergencies, voting-day prep, after-hours response.",
    certifications:
      "Government-procurement vetting, W-9 & GA vendor registration on file. Bonded crews available.",
    protocols:
      "We accept POs, net-30 terms, and standard government insurance riders. COI to certificate holder within 1 hour.",
    typicalJobs: [
      "Voting-precinct reset",
      "Public-building biohazard response",
      "Pre-inspection deep clean",
      "Community-event turnover",
    ],
  },
];

import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const industries: Record<
  string,
  {
    title: string;
    meta: string;
    hero: string;
    problem: string;
    costLine: string;
    painPoints: string[];
    solution: string;
    testimonial: { name: string; role: string; text: string };
  }
> = {
  "office-buildings": {
    title: "Office Building Cleaning Staff",
    meta: "Same-day janitorial staff for office buildings. Vetted cleaners deployed in hours, not weeks.",
    hero: "Your Office Deserves Better Than Last-Minute No-Shows",
    problem:
      "A dirty office costs you more than you think. Employees call in sick 1.8x more in unclean workplaces. Client meetings in dusty conference rooms lose deals.",
    costLine:
      "The average office loses $18,000/year in productivity from poor workplace cleanliness.",
    painPoints: [
      "Contract cleaners no-show with zero notice",
      "Locked into monthly contracts you can't scale",
      "Quality drops after the first month",
      "No accountability when standards slip",
    ],
    solution:
      "Book 1-10 vetted cleaning professionals for your office. Today. No contracts, no commitments. Pay per job, scale up or down anytime.",
    testimonial: {
      name: "Sarah K.",
      role: "Office Manager, Tech Startup",
      text: "Our regular crew ghosted us before a board meeting. SameDayScrub had 3 people there in 2 hours. Lifesaver.",
    },
  },
  "airbnb-vacation-rentals": {
    title: "Commercial & Managed Rental Turnover Cleaning",
    meta: "Same-day turnover cleaning for managed properties and commercial rentals. Never miss a tenant deadline again.",
    hero: "Never Miss Another Turnover Deadline",
    problem:
      "Missed turnovers mean lost revenue, tenant complaints, and property damage claims. Every hour a unit sits dirty is money left on the table.",
    costLine:
      "Property managers who miss turnovers lose an average of $2,400/year in vacancy costs and tenant credits.",
    painPoints: [
      "Tenant moves out Friday, new lease starts Monday",
      "Your regular cleaning crew cancels last minute",
      "Quality inconsistency across multiple properties",
      "Managing 10+ units means constant scheduling headaches",
    ],
    solution:
      "On-demand turnover crews dispatched same day. We handle the clean so you protect your leases and your revenue.",
    testimonial: {
      name: "James R.",
      role: "Property Manager, 12 Units",
      text: "I use SameDayScrub for every turnover. Vacancy time dropped by 40% in three months. The consistency is unreal.",
    },
  },
  warehouses: {
    title: "Warehouse & Industrial Cleaning Staff",
    meta: "Same-day warehouse cleaning crews. OSHA-ready janitorial staff deployed in hours.",
    hero: "Clean Warehouses Pass Inspections. Dirty Ones Don't.",
    problem:
      "OSHA fines for unclean facilities start at $15,625 per violation. A failed inspection shuts down operations and costs tens of thousands.",
    costLine:
      "The average OSHA workplace cleanliness violation costs $15,625. Repeat violations: $156,259.",
    painPoints: [
      "Surprise inspections with no time to prepare",
      "High turnover in cleaning staff",
      "Specialized cleaning needs (dust, debris, hazmat prep)",
      "Night shift and weekend coverage gaps",
    ],
    solution:
      "Vetted industrial cleaning crews deployed same day. Day shift, night shift, weekends. Scale your crew with your workload.",
    testimonial: {
      name: "Linda M.",
      role: "Warehouse Ops Director",
      text: "Post-construction cleanup done in a single shift. These guys don't mess around. We passed our inspection the next morning.",
    },
  },
  "retail-stores": {
    title: "Retail Store Cleaning Staff",
    meta: "Same-day cleaning staff for retail stores. Keep your store spotless for customers.",
    hero: "Customers Notice a Dirty Store. They Just Don't Come Back.",
    problem:
      "95% of shoppers say store cleanliness affects whether they return. A dirty fitting room or restroom costs you repeat customers.",
    costLine:
      "Retailers with clean stores see 12% higher customer return rates on average.",
    painPoints: [
      "Holiday rush means more mess, same budget",
      "Grand openings and events need extra hands",
      "Restrooms need attention throughout the day",
      "Evening deep cleans after closing",
    ],
    solution:
      "Scale your cleaning crew for the moment. Holiday rush, grand opening, or daily maintenance — book the staff you need, when you need them.",
    testimonial: {
      name: "David P.",
      role: "Store Manager, Boutique Chain",
      text: "We book extra crew every Black Friday weekend. Our stores stay immaculate while competitors look like war zones.",
    },
  },
  "post-construction": {
    title: "Post-Construction Cleanup Crews",
    meta: "Same-day post-construction cleaning crews. Get your site client-ready fast.",
    hero: "The Build Is Done. The Dust Shouldn't Be.",
    problem:
      "Construction dust, debris, and residue delay handoffs and final inspections. Every day the site isn't clean is a day you're not getting paid.",
    costLine:
      "Construction project delays cost an average of $1,500/day in carrying costs.",
    painPoints: [
      "General contractor needs site ready for walkthrough tomorrow",
      "Subcontractors left more mess than expected",
      "Final inspection is in 48 hours",
      "Regular cleaners can't handle construction-grade mess",
    ],
    solution:
      "Heavy-duty cleaning crews deployed same day. We handle rough clean, final clean, and everything in between so you hand off on time.",
    testimonial: {
      name: "Mike T.",
      role: "General Contractor",
      text: "Called at 7am, crew of 5 arrived by 10am. Site was walkthrough-ready by end of day. Now I use them on every project.",
    },
  },
  "schools-facilities": {
    title: "School & Facility Cleaning Staff",
    meta: "Same-day janitorial staff for schools and facilities. Keep students and staff healthy.",
    hero: "Healthy Students Start with Clean Schools",
    problem:
      "Flu season, staff shortages, and events create cleaning emergencies schools can't handle alone. Absenteeism from illness costs districts millions.",
    costLine:
      "School districts lose $200/day per absent student in state funding. A flu outbreak can cost $50,000+ in a single week.",
    painPoints: [
      "Custodial staff calls out sick during flu season",
      "Summer deep clean needs more hands than you have",
      "Events and assemblies create unexpected messes",
      "Budget constraints mean understaffed cleaning crews",
    ],
    solution:
      "Supplemental cleaning staff for when your team needs backup. Same-day deployment, background-checked, and trained for educational facilities.",
    testimonial: {
      name: "Principal Torres",
      role: "K-8 School",
      text: "During COVID we needed extra sanitization crews weekly. SameDayScrub became part of our reopening plan.",
    },
  },
};

export function generateStaticParams() {
  return Object.keys(industries).map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const data = industries[params.slug];
  if (!data) return {};
  return {
    title: `${data.title} | SameDayScrub`,
    description: data.meta,
    openGraph: {
      title: `${data.title} | SameDayScrub`,
      description: data.meta,
    },
  };
}

export default function IndustryPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = industries[params.slug];
  if (!data) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-background">
        <div className="max-w-5xl mx-auto px-4 py-20 md:py-32 text-center">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">
            {data.title}
          </p>
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 text-balance">
            {data.hero}
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-6">
            {data.problem}
          </p>
          {/* Financial framing — visually prominent */}
          <div className="bg-navy text-white rounded-card px-6 py-5 max-w-2xl mx-auto mb-10">
            <p className="font-heading text-xl md:text-2xl font-bold">
              {data.costLine}
            </p>
          </div>
          <Link
            href="/book"
            className="inline-block bg-primary hover:bg-primary-hover text-white font-semibold px-8 py-3.5 rounded-full text-lg transition-colors"
          >
            Book a Crew
          </Link>
        </div>
      </section>

      {/* Pain Points */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy text-center mb-12">
            Sound Familiar?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.painPoints.map((point) => (
              <div
                key={point}
                className="bg-white rounded-card p-6 border border-gray-200 flex items-start gap-4"
              >
                <span className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-error/10 flex items-center justify-center">
                  <svg
                    className="w-3.5 h-3.5 text-error"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </span>
                <p className="text-navy font-medium">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
            Here&rsquo;s How We Fix It
          </h2>
          <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            {data.solution}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mb-10">
            {[
              { label: "Deployed", value: "Same Day" },
              { label: "Contracts", value: "None" },
              { label: "Workers", value: "Vetted" },
            ].map((stat) => (
              <div key={stat.label} className="bg-secondary rounded-card p-5">
                <p className="font-heading text-2xl font-bold text-primary">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
          <Link
            href="/book"
            className="inline-block bg-primary hover:bg-primary-hover text-white font-semibold px-8 py-3.5 rounded-full text-lg transition-colors"
          >
            Book a Crew
          </Link>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <svg
            className="w-10 h-10 text-primary mx-auto mb-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M11.3 2.5c-1 .5-3.3 2-4.5 4-.7 1.2-1.1 2.6-1.1 4.3 0 .4 0 .8.1 1.2H7c1.7 0 3 1.3 3 3v2c0 1.7-1.3 3-3 3H5c-1.7 0-3-1.3-3-3V12c0-3 .8-5.4 2.4-7.3C5.5 3.5 7 2.4 8.3 1.8l3 .7zm11 0c-1 .5-3.3 2-4.5 4-.7 1.2-1.1 2.6-1.1 4.3 0 .4 0 .8.1 1.2H18c1.7 0 3 1.3 3 3v2c0 1.7-1.3 3-3 3h-2c-1.7 0-3-1.3-3-3V12c0-3 .8-5.4 2.4-7.3C16.5 3.5 18 2.4 19.3 1.8l3 .7z" />
          </svg>
          <blockquote className="text-white text-lg md:text-xl font-medium mb-6 italic">
            &ldquo;{data.testimonial.text}&rdquo;
          </blockquote>
          <p className="text-primary font-semibold">{data.testimonial.name}</p>
          <p className="text-gray-400 text-sm">{data.testimonial.role}</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-navy mb-4">
            Stop losing money to dirty facilities.
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Book vetted cleaning staff today. No contracts. Cancel anytime.
          </p>
          <Link
            href="/book"
            className="inline-block bg-primary hover:bg-primary-hover text-white font-semibold px-10 py-4 rounded-full text-lg transition-colors"
          >
            Book a Crew Now
          </Link>
        </div>
      </section>
    </>
  );
}

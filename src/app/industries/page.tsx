import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industries We Serve | SameDayScrub",
  description:
    "Commercial janitorial staffing for offices, warehouses, retail, post-construction, schools, and managed properties. Same-day deployment.",
};

const verticals = [
  {
    slug: "office-buildings",
    title: "Office Buildings",
    desc: "Vetted cleaning pros for your workspace. No contracts, no commitments.",
    stat: "$18K",
    statLabel: "avg. lost to poor office cleanliness per year",
  },
  {
    slug: "airbnb-vacation-rentals",
    title: "Commercial & Managed Rentals",
    desc: "Same-day turnover cleaning for managed properties and commercial rentals.",
    stat: "$2,400",
    statLabel: "avg. lost per year from missed turnovers",
  },
  {
    slug: "warehouses",
    title: "Warehouses & Industrial",
    desc: "OSHA-ready cleaning crews deployed same day. Day or night shift.",
    stat: "$15,625",
    statLabel: "avg. OSHA cleanliness violation fine",
  },
  {
    slug: "retail-stores",
    title: "Retail Stores",
    desc: "Keep your store spotless for every customer, every season.",
    stat: "12%",
    statLabel: "higher return rate with clean stores",
  },
  {
    slug: "post-construction",
    title: "Post-Construction",
    desc: "Heavy-duty cleanup crews so you hand off on time, every time.",
    stat: "$1,500",
    statLabel: "daily cost of construction delays",
  },
  {
    slug: "schools-facilities",
    title: "Schools & Facilities",
    desc: "Supplemental janitorial staff to keep students and staff healthy.",
    stat: "$50K+",
    statLabel: "cost of a single flu outbreak to a district",
  },
];

export default function IndustriesIndex() {
  return (
    <>
      <section className="bg-background">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 text-center">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-4">
            Industries We Serve
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Commercial janitorial staffing built for your industry. Vetted
            crews, no contracts, real accountability.
          </p>
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {verticals.map((v) => (
              <Link
                key={v.slug}
                href={`/industries/${v.slug}`}
                className="group bg-white rounded-card p-6 border border-gray-200 hover:border-primary transition-colors flex flex-col"
              >
                <p className="font-heading text-3xl font-bold text-primary mb-1">
                  {v.stat}
                </p>
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-4">
                  {v.statLabel}
                </p>
                <h2 className="font-heading text-xl font-bold text-navy mb-2 group-hover:text-primary transition-colors">
                  {v.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4 flex-1">{v.desc}</p>
                <span className="text-primary font-semibold text-sm">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-4">
            Don&rsquo;t see your industry?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            We deploy cleaning staff to any commercial facility. If it needs
            cleaning, we&rsquo;ve got you covered.
          </p>
          <Link
            href="/book"
            className="inline-block bg-primary hover:bg-primary-hover text-white font-semibold px-8 py-3.5 rounded-full text-lg transition-colors"
          >
            Book a Crew
          </Link>
        </div>
      </section>
    </>
  );
}

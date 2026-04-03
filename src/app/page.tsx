import Link from "next/link";
import PriceCalculator from "@/components/ui/PriceCalculator";

const steps = [
  {
    icon: "1",
    title: "Tell us what you need",
    desc: "Pick your date, time, and crew size. We know you're busy — this takes under 60 seconds.",
  },
  {
    icon: "2",
    title: "We match you with vetted pros",
    desc: "Every cleaner is background-checked and rated. You'll know exactly who's coming.",
  },
  {
    icon: "3",
    title: "They show up. Job done.",
    desc: "No chasing, no excuses. Your space is spotless, and you can get back to running your business.",
  },
];

const stats = [
  { value: "500+", label: "Jobs Completed" },
  { value: "4.9", label: "Average Rating" },
  { value: "2hr", label: "Average Response Time" },
];

const industryIcons: Record<string, React.ReactNode> = {
  "office-buildings": (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
  ),
  "schools-facilities": (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
  ),
  warehouses: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
    </svg>
  ),
  "retail-stores": (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
    </svg>
  ),
  "post-construction": (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1a2.25 2.25 0 010-3.182l.71-.71a2.25 2.25 0 013.182 0l.71.71a2.25 2.25 0 010 3.182l-5.1 5.1m0 0L3 21m8.42-5.83l5.1-5.1a2.25 2.25 0 000-3.182l-.71-.71a2.25 2.25 0 00-3.182 0l-.71.71a2.25 2.25 0 000 3.182l5.1 5.1m0 0L21 21" />
    </svg>
  ),
  "airbnb-vacation-rentals": (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
    </svg>
  ),
};

const industries = [
  { name: "Office Buildings", slug: "office-buildings" },
  { name: "Schools & Facilities", slug: "schools-facilities" },
  { name: "Warehouses", slug: "warehouses" },
  { name: "Retail Stores", slug: "retail-stores" },
  { name: "Post-Construction", slug: "post-construction" },
  { name: "Commercial Rentals", slug: "airbnb-vacation-rentals" },
];

const painPoints = [
  {
    stat: "$500+",
    headline: "per no-show incident",
    desc: "Emergency scrambling for last-minute replacements drains your budget and your patience.",
  },
  {
    stat: "1.8x",
    headline: "more sick days",
    desc: "Dirty workplaces don't just look bad — they cost you in absenteeism and lost productivity.",
  },
  {
    stat: "$2,400/yr",
    headline: "lost per failed inspection",
    desc: "Health code violations, failed walkthroughs, and tenant complaints add up fast.",
  },
];

const testimonials = [
  {
    name: "Sarah K.",
    role: "Office Manager, Atlanta",
    text: "We had a last-minute client visit and needed our office spotless by noon. I booked at 8 AM and had a crew of 3 by 9:30. They were professional, thorough, and left the place looking brand new. This is our go-to now.",
    stars: 5,
  },
  {
    name: "James R.",
    role: "Property Manager, 12 Units",
    text: "I manage a dozen Airbnb turnovers every week. SameDayScrub has never missed a checkout deadline — not once in 6 months. That reliability is worth every penny when your reviews depend on it.",
    stars: 5,
  },
  {
    name: "Linda M.",
    role: "Warehouse Operations Director",
    text: "After a major renovation, we needed post-construction cleanup done in a single shift. They sent 5 people, and by end of day, the warehouse floor was cleaner than before the build. Seriously impressive turnaround.",
    stars: 5,
  },
];

const faqs = [
  {
    q: "How fast can you send someone?",
    a: "Most jobs are filled within 2 hours of booking. For larger crews or specialized work, we may need a few extra hours — but same-day service is our standard.",
  },
  {
    q: "Are workers background checked?",
    a: "Every worker passes a background check and ID verification before their first job. We take this seriously — your safety and trust come first.",
  },
  {
    q: "What if I need to cancel?",
    a: "Cancel anytime before the job starts for a full refund. No contracts, ever. We earn your business every single time.",
  },
  {
    q: "How are workers paid?",
    a: "Workers are paid within 24 hours of job completion. We handle all payments, taxes, and compliance so you don't have to.",
  },
  {
    q: "What areas do you serve?",
    a: "We currently serve major metro areas. Book to check availability in your area — we're expanding fast.",
  },
];

const trustBadges = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    label: "Background Checked",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Fully Insured",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    label: "Client Rated",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Same-Day Service",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-32 text-center">
          <p className="animate-fade-in-up text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            Commercial janitorial staffing
          </p>
          <h1 className="animate-fade-in-up stagger-1 font-heading text-4xl md:text-6xl font-bold text-navy mb-4 text-balance">
            Your Janitorial Crew No-Showed?
            <br />
            <span className="text-primary">We&apos;ll Be There in 2 Hours.</span>
          </h1>
          <p className="animate-fade-in-up stagger-2 text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Stop scrambling. Book vetted, background-checked commercial cleaning professionals in minutes.
            Offices, warehouses, retail, facilities — we staff them all, same day.
          </p>
          <div className="animate-fade-in-up stagger-3 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/book"
              className="animate-cta-pulse inline-block bg-primary hover:bg-primary-hover text-white font-semibold px-8 py-3.5 rounded-full text-lg transition-colors"
            >
              Book a Crew Today
            </Link>
            <Link
              href="#how-it-works"
              className="inline-block text-navy font-semibold px-8 py-3.5 rounded-full text-lg border-2 border-navy/20 hover:border-navy/40 transition-colors"
            >
              See How It Works
            </Link>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="border-t border-gray-200 bg-white">
          <div className="max-w-4xl mx-auto px-4 py-6 grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-2xl md:text-3xl font-bold text-primary">
                  {stat.value}
                </p>
                <p className="text-gray-500 text-xs md:text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-secondary py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-4">
            How It Works
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-lg mx-auto">
            Getting reliable cleaning staff shouldn&apos;t be stressful. Here&apos;s how we make it easy.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.icon} className="text-center">
                <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center font-heading font-bold text-xl mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-10">
            No contracts. No commitments. Cancel anytime.
          </p>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex flex-col items-center text-center gap-2 p-4 rounded-card bg-secondary"
              >
                <div className="text-primary">{badge.icon}</div>
                <p className="font-semibold text-sm text-navy">{badge.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-16 md:py-20 bg-navy text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-4">
            The Real Cost of Unreliable Cleaning Staff
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-lg mx-auto">
            The problem is bigger than a dirty floor. It hits your wallet, your team, and your reputation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {painPoints.map((point) => (
              <div
                key={point.stat}
                className="bg-white/10 backdrop-blur rounded-card p-6 text-center border border-white/10"
              >
                <p className="font-heading text-3xl md:text-4xl font-bold text-primary mb-1">
                  {point.stat}
                </p>
                <p className="font-semibold text-sm uppercase tracking-wide text-gray-300 mb-3">
                  {point.headline}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center bg-primary/10 border border-primary/30 rounded-card p-6 md:p-8 max-w-2xl mx-auto">
            <p className="font-heading text-lg md:text-xl font-bold text-white mb-2">
              SameDayScrub eliminates all three.
            </p>
            <p className="text-gray-300 text-sm">
              Book vetted staff today, not next week. Your space stays clean, your budget stays intact,
              and your reputation stays spotless.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-2">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 text-center mb-8 max-w-md mx-auto">
            No hidden fees. No surprise charges. You see the price before you book.
          </p>
          <PriceCalculator />
        </div>
      </section>

      {/* Industries */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-3">
            Industries We Serve
          </h2>
          <p className="text-gray-500 text-center mb-10 max-w-md mx-auto">
            Commercial-grade janitorial staff for every type of facility.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {industries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="group bg-white rounded-card p-5 text-center shadow-sm hover:shadow-md transition-shadow border border-transparent hover:border-primary/30 flex flex-col items-center gap-2"
              >
                <span className="text-primary group-hover:scale-110 transition-transform">
                  {industryIcons[ind.slug]}
                </span>
                <span className="font-semibold text-sm text-navy group-hover:text-primary transition-colors">
                  {ind.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-3">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 text-center mb-10 max-w-md mx-auto">
            Real feedback from facility managers and operations teams that count on us.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-card shadow-md p-6 flex flex-col">
                <StarRating count={t.stars} />
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-sm text-navy">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-center mb-10">
            Everything you need to know before booking.
          </p>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-card p-5 shadow-sm">
                <h3 className="font-heading font-semibold text-navy mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3">
            Tired of Unreliable Cleaning Staff?
          </h2>
          <p className="text-white/80 mb-8 max-w-md mx-auto">
            Book vetted professionals in 2 minutes. They show up. Job done.
          </p>
          <Link
            href="/book"
            className="inline-block bg-white text-primary font-semibold px-8 py-3.5 rounded-full text-lg hover:bg-gray-50 transition-colors"
          >
            Book a Crew Now
          </Link>
        </div>
      </section>
    </>
  );
}

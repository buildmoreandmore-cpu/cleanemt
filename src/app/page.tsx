import Link from "next/link";
import PriceCalculator from "@/components/ui/PriceCalculator";

const steps = [
  { icon: "1", title: "Choose your date & time", desc: "Pick when you need us — even today." },
  { icon: "2", title: "Pick how many workers", desc: "Scale your crew from 1 to 10." },
  { icon: "3", title: "We send vetted pros", desc: "Background-checked cleaners at your door." },
];

const industries = [
  "Office Buildings",
  "Schools & Facilities",
  "Warehouses",
  "Retail Stores",
  "Post-Construction",
  "Airbnb / Vacation Rentals",
];

const testimonials = [
  { name: "Sarah K.", role: "Office Manager", text: "Had a crew of 3 at our office within 2 hours of booking. Spotless work." },
  { name: "James R.", role: "Property Manager", text: "I use SameDayScrub for every Airbnb turnover. Never missed a checkout deadline." },
  { name: "Linda M.", role: "Warehouse Ops", text: "Post-construction cleanup done in a single shift. These guys don't mess around." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-32 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-navy mb-4 text-balance">
            Janitorial Staff. Same Day.
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-xl mx-auto mb-8">
            Book vetted cleaning professionals in minutes. They show up. Job done.
          </p>
          <Link
            href="/book"
            className="inline-block bg-primary hover:bg-primary-hover text-white font-semibold px-8 py-3.5 rounded-full text-lg transition-colors"
          >
            Book a Crew
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-secondary py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.icon} className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-heading font-bold text-lg mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-500 tracking-wide">
            All workers background checked &middot; Insured &middot; Rated by real clients
          </p>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-8">
            Simple, Transparent Pricing
          </h2>
          <PriceCalculator />
        </div>
      </section>

      {/* Industries */}
      <section className="bg-secondary py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-8">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {industries.map((ind) => (
              <div
                key={ind}
                className="bg-white rounded-card p-4 text-center text-sm font-semibold text-navy shadow-sm"
              >
                {ind}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-10">
            What Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-card shadow-md p-6">
                <p className="text-gray-600 text-sm mb-4">&ldquo;{t.text}&rdquo;</p>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-gray-400">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-primary py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
            Need someone today?
          </h2>
          <Link
            href="/book"
            className="inline-block bg-white text-primary font-semibold px-8 py-3.5 rounded-full text-lg hover:bg-gray-50 transition-colors"
          >
            Book Now
          </Link>
        </div>
      </section>
    </>
  );
}

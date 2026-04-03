import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="font-heading text-3xl font-bold mb-2">My Bookings</h1>
      <p className="text-gray-500 mb-8">View and manage your bookings.</p>

      <div className="bg-secondary rounded-card p-8 text-center space-y-4">
        <h2 className="font-heading text-xl font-bold text-navy">No bookings yet</h2>
        <p className="text-gray-500 max-w-md mx-auto">
          When you book your first crew, it&apos;ll show up here. Most bookings are confirmed within 2 hours.
        </p>
        <Link
          href="/book"
          className="inline-block bg-primary hover:bg-primary-hover text-white font-semibold px-6 py-3 rounded-full transition-colors"
        >
          Book Your First Crew
        </Link>
      </div>

      <div className="mt-8 bg-white rounded-card border p-6">
        <h3 className="font-heading font-bold text-lg mb-4">How it works</h3>
        <ul className="space-y-3 text-sm text-gray-600">
          <li className="flex items-start gap-3">
            <span className="bg-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">1</span>
            <span>Pick your date, time, and crew size — pricing is instant and transparent.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">2</span>
            <span>We match you with vetted, background-checked professionals in your area.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">3</span>
            <span>Your crew arrives on time — track status and leave a review right here.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

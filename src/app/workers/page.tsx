"use client";

export default function WorkersPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="font-heading text-3xl md:text-4xl font-bold mb-3">
        Get Paid to Clean
      </h1>
      <p className="text-gray-600 text-lg mb-10">
        Same day work available now. Flexible schedule, vetted community.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {["Pick Your Own Hours", "Paid Within 24 Hours", "Background-Checked Community"].map((b) => (
          <div key={b} className="bg-secondary rounded-card p-4 text-center text-sm font-semibold">
            {b}
          </div>
        ))}
      </div>
      <p className="text-sm text-gray-500 text-center mb-10">
        Join 200+ vetted professionals earning $20+/hr
      </p>

      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-sm font-semibold mb-1">Full Name</label>
          <input type="text" required className="w-full border rounded-lg px-3 py-2.5 text-sm" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input type="email" required className="w-full border rounded-lg px-3 py-2.5 text-sm" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Phone</label>
            <input type="tel" required className="w-full border rounded-lg px-3 py-2.5 text-sm" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">City / ZIP (Service Area)</label>
          <input type="text" required className="w-full border rounded-lg px-3 py-2.5 text-sm" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Experience</label>
          <select className="w-full border rounded-lg px-3 py-2.5 text-sm">
            <option>None</option>
            <option>1-2 years</option>
            <option>3-5 years</option>
            <option>5+ years</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Have your own supplies?</label>
          <select className="w-full border rounded-lg px-3 py-2.5 text-sm">
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Upload ID</label>
          <input type="file" className="w-full border rounded-lg px-3 py-2.5 text-sm" />
        </div>
        <button
          type="submit"
          className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-3 rounded-full transition-colors"
        >
          Submit Application
        </button>
      </form>

      <div className="mt-10 bg-secondary rounded-card p-6">
        <h3 className="font-heading font-bold text-sm mb-3 text-gray-400 uppercase tracking-wide">What workers say</h3>
        <blockquote className="text-gray-700 italic">
          &ldquo;I pick up shifts when I want. Got paid the same day my first week.&rdquo;
        </blockquote>
        <p className="text-sm text-gray-500 mt-2 font-semibold">— Carlos M.</p>
      </div>
    </div>
  );
}

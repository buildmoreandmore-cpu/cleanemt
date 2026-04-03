export default function AdminPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="font-heading text-3xl font-bold mb-2">Admin Dashboard</h1>
      <p className="text-gray-500 mb-8">Manage bookings, workers, and revenue.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {[
          { label: "Today", value: "$0" },
          { label: "This Week", value: "$0" },
          { label: "This Month", value: "$0" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-card shadow-sm p-5">
            <p className="text-xs text-gray-400 mb-1">{s.label}</p>
            <p className="font-heading text-2xl font-bold">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-secondary rounded-card p-8 text-center">
        <p className="text-gray-500">Connect your Supabase project to start managing bookings and workers. See the setup guide in your project README.</p>
      </div>
    </div>
  );
}

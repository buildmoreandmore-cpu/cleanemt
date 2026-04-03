export default function DashboardPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="font-heading text-3xl font-bold mb-2">My Bookings</h1>
      <p className="text-gray-500 mb-8">View and manage your bookings.</p>

      <div className="bg-secondary rounded-card p-8 text-center">
        <p className="text-gray-500">No bookings yet. Connect Supabase to see your bookings here.</p>
      </div>
    </div>
  );
}

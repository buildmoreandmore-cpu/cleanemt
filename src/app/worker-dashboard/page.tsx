export default function WorkerDashboardPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="font-heading text-3xl font-bold mb-2">Worker Dashboard</h1>
      <p className="text-gray-500 mb-8">Your assigned jobs and earnings.</p>

      <div className="bg-secondary rounded-card p-8 text-center">
        <p className="text-gray-500">Connect Supabase to see your job assignments here.</p>
      </div>
    </div>
  );
}

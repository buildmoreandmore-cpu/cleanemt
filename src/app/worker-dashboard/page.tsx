export default function WorkerDashboardPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="font-heading text-3xl font-bold mb-2">Worker Dashboard</h1>
      <p className="text-gray-500 mb-8">Your assigned jobs and earnings.</p>

      <div className="bg-secondary rounded-card p-8 text-center space-y-4">
        <h2 className="font-heading text-xl font-bold text-navy">Welcome to your dashboard</h2>
        <p className="text-gray-500 max-w-md mx-auto">
          Once you&apos;re approved and assigned a job, you&apos;ll see all your details here — schedule, address, and earnings.
        </p>
        <div className="inline-flex items-center gap-2 bg-white border rounded-full px-4 py-2 text-sm">
          <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
          <span className="text-gray-600">Application status: <span className="font-semibold">Pending review</span></span>
        </div>
        <div>
          <a href="#" className="text-primary hover:underline text-sm font-semibold">
            Update your profile
          </a>
        </div>
      </div>
    </div>
  );
}

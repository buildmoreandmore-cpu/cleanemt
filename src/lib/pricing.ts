export function calculateBookingPrice(workers: number, hours: number) {
  const baseRate = 25; // per worker per hour
  const total = workers * hours * baseRate * 100; // in cents
  const platformFee = Math.round(total * 0.2);
  const workerPayout = total - platformFee;
  return { total, platformFee, workerPayout };
}

export function formatCents(cents: number) {
  return `$${(cents / 100).toFixed(2)}`;
}

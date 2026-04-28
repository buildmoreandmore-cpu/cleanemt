// Emergency response pricing — buyer-facing.
// Trip charge captured at booking; hourly authorized via Stripe manual_capture
// and captured after job sign-off.
export const TRIP_CHARGE_CENTS = 40000; // $400

export const HOURLY_RATE_CENTS = {
  min: 8500, // $85/hr per worker
  max: 12500, // $125/hr per worker
};

export const SURGE_MULTIPLIER = {
  afterHours: 1.5,
  weekend: 1.5,
  holiday: 2.0,
  specialty: 2.5, // biohazard, sewage, mold, hoarding
};

export function formatCents(cents: number) {
  return `$${(cents / 100).toFixed(2)}`;
}

export function authorizationCeilingCents(opts: {
  workers: number;
  estimatedHours: number;
  multiplier?: number;
}) {
  const { workers, estimatedHours, multiplier = 1 } = opts;
  return Math.round(
    HOURLY_RATE_CENTS.max * multiplier * workers * estimatedHours,
  );
}

import Stripe from "stripe";
import { TRIP_CHARGE_CENTS } from "./pricing";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
  apiVersion: "2024-06-20",
});

/**
 * Create the dispatch payment chain:
 *   1. Trip charge ($400) — captured immediately on the customer&rsquo;s card.
 *   2. Hourly portion — authorized via manual capture, released or captured
 *      after job sign-off.
 *
 * Both intents share the same `customer` and metadata so the dispatcher can
 * reconcile them by job ID.
 */
export async function createDispatchPaymentIntents(opts: {
  jobId: string;
  customerId: string;
  paymentMethodId: string;
  estimatedHourlyCeilingCents: number;
}) {
  const { jobId, customerId, paymentMethodId, estimatedHourlyCeilingCents } = opts;

  const tripIntent = await stripe.paymentIntents.create({
    amount: TRIP_CHARGE_CENTS,
    currency: "usd",
    customer: customerId,
    payment_method: paymentMethodId,
    confirm: true,
    capture_method: "automatic",
    description: `SameDayScrub trip charge · ${jobId}`,
    metadata: { jobId, charge: "trip" },
  });

  const hourlyIntent = await stripe.paymentIntents.create({
    amount: estimatedHourlyCeilingCents,
    currency: "usd",
    customer: customerId,
    payment_method: paymentMethodId,
    confirm: true,
    capture_method: "manual", // released or captured at sign-off
    description: `SameDayScrub hourly hold · ${jobId}`,
    metadata: { jobId, charge: "hourly" },
  });

  return { tripIntent, hourlyIntent };
}

export async function captureHourly(opts: {
  paymentIntentId: string;
  actualAmountCents: number;
}) {
  return stripe.paymentIntents.capture(opts.paymentIntentId, {
    amount_to_capture: opts.actualAmountCents,
  });
}

export async function releaseHourlyHold(paymentIntentId: string) {
  return stripe.paymentIntents.cancel(paymentIntentId, {
    cancellation_reason: "abandoned",
  });
}

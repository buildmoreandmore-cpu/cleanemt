"use client";

import { useState } from "react";
import { calculateBookingPrice, formatCents } from "@/lib/pricing";

export default function PriceCalculator() {
  const [workers, setWorkers] = useState(1);
  const [hours, setHours] = useState(4);
  const { total } = calculateBookingPrice(workers, hours);

  return (
    <div className="bg-white rounded-card shadow-lg p-6 max-w-md mx-auto">
      <h3 className="font-heading text-lg font-bold mb-4">Price Calculator</h3>

      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-gray-600">Workers</span>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setWorkers(Math.max(1, workers - 1))}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center font-bold"
          >
            -
          </button>
          <span className="font-mono text-lg w-6 text-center">{workers}</span>
          <button
            onClick={() => setWorkers(Math.min(10, workers + 1))}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center font-bold"
          >
            +
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between mb-6">
        <span className="text-sm text-gray-600">Hours</span>
        <select
          value={hours}
          onChange={(e) => setHours(Number(e.target.value))}
          className="border rounded-lg px-3 py-1.5 text-sm"
        >
          <option value={2}>2 hours</option>
          <option value={4}>4 hours</option>
          <option value={6}>6 hours</option>
          <option value={8}>8 hours</option>
        </select>
      </div>

      <div className="border-t pt-4 flex items-center justify-between">
        <span className="text-gray-600 font-semibold">Total</span>
        <span className="font-heading text-2xl font-bold text-primary">
          {formatCents(total)}
        </span>
      </div>
      <p className="text-xs text-gray-400 mt-2">$25/hr per worker</p>
    </div>
  );
}

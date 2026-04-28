export default function LiveDot({ small = false }: { small?: boolean }) {
  // Two dots layered: an expanding "ping" ring that fades, plus a core dot
  // that blinks (opacity 1 → 0.3 → 1). Rhythmically synced so the beacon
  // looks like a dispatcher LED.
  const core = small ? "w-2 h-2" : "w-2.5 h-2.5";
  const box = small ? "w-2 h-2" : "w-2.5 h-2.5";

  return (
    <span
      className={`relative inline-flex items-center justify-center ${box}`}
      aria-hidden
    >
      <span
        className={`absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 live-ping`}
      />
      <span className={`relative ${core} rounded-full bg-accent live-blink`} />
    </span>
  );
}

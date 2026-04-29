export default function LiveDot({
  small = false,
  animate = true,
}: {
  small?: boolean;
  animate?: boolean;
}) {
  const core = small ? "w-2 h-2" : "w-2.5 h-2.5";

  if (!animate) {
    // Static brand/companion dot — solid, no ping or blink.
    return (
      <span
        className={`relative inline-block ${core} rounded-full bg-accent`}
        aria-hidden
      />
    );
  }

  // Live dispatcher LED — expanding ping ring + on/off blink core.
  return (
    <span
      className={`relative inline-flex items-center justify-center ${core}`}
      aria-hidden
    >
      <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 live-ping" />
      <span className={`relative ${core} rounded-full bg-accent live-blink`} />
    </span>
  );
}

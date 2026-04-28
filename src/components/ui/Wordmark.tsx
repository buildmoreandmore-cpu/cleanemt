const SIZES = {
  sm: "text-lg",
  md: "text-2xl",
  lg: "text-3xl",
  xl: "text-4xl md:text-5xl",
} as const;

export default function Wordmark({
  size = "md",
  tagline = false,
}: {
  size?: keyof typeof SIZES;
  tagline?: boolean;
}) {
  return (
    <span className="inline-flex items-baseline gap-2.5 leading-none">
      <span className={`display lowercase tracking-tighter ${SIZES[size]}`}>
        clean
        <span className="uppercase tracking-wide text-accent">EMT</span>
      </span>
      {tagline && (
        <span className="mono text-[10px] uppercase tracking-[0.22em] opacity-60 hidden md:inline-block">
          Emergency Mitigation Team
        </span>
      )}
    </span>
  );
}

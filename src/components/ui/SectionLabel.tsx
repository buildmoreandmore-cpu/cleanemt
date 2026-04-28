export default function SectionLabel({
  number,
  children,
  tone = "light",
}: {
  number: string;
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  const color = tone === "dark" ? "text-ink-soft/60" : "text-ink/50";
  return (
    <div className={`mono text-[11px] uppercase tracking-[0.2em] flex items-center gap-3 ${color}`}>
      <span>{number}</span>
      <span className="h-px flex-1 bg-current opacity-30 max-w-[60px]" />
      <span>{children}</span>
    </div>
  );
}

export default function LiveDot({ small = false }: { small?: boolean }) {
  const size = small ? "w-1.5 h-1.5" : "w-2 h-2";
  return (
    <span className={`inline-flex relative ${size}`}>
      <span className={`absolute inset-0 rounded-full bg-accent live-dot`} />
      <span className={`relative ${size} rounded-full bg-accent`} />
    </span>
  );
}

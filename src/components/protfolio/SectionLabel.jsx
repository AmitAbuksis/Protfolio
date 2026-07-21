export const SectionLabel = ({ index, title }) => {
  return (
    <div className="mb-12 flex items-center gap-4">
      <span className="font-mono text-xs font-medium uppercase tracking-[0.3em] text-[#00F5FF]">
        {index}
      </span>
      <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/40">
        // {title}
      </span>
      <div className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" />
    </div>
  );
}
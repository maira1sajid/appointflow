export default function Divider({ label = "or" }: { label?: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="h-px flex-1 bg-black/10" />
      <span className="text-xs font-medium uppercase tracking-wide text-ink-500">
        {label}
      </span>
      <span className="h-px flex-1 bg-black/10" />
    </div>
  );
}

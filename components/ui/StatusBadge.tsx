type StatusBadgeProps = {
  open?: boolean;
};

export default function StatusBadge({ open = true }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${
        open ? "bg-emerald-100 text-emerald-700" : "bg-ink-500/10 text-ink-500"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${open ? "bg-emerald-500" : "bg-ink-400"}`} />
      {open ? "Open today" : "Closed today"}
    </span>
  );
}

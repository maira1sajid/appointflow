import type { ReactNode } from "react";
import { PlusIcon } from "@/components/ui/icons";

type EmptyStateProps = {
  icon: ReactNode;
  title: string;
  description?: string;
  actionLabel: string;
  onAction?: () => void;
  compact?: boolean;
};

export default function EmptyState({
  icon,
  title,
  description,
  actionLabel,
  onAction,
  compact,
}: EmptyStateProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-brand-200 bg-brand-50/40 text-center ${
        compact ? "px-5 py-8" : "px-6 py-12"
      }`}
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-600 shadow-sm">
        {icon}
      </span>
      <div>
        <p className="font-bold text-ink-900">{title}</p>
        {description && <p className="mt-1 text-sm text-ink-500">{description}</p>}
      </div>
      <button
        type="button"
        onClick={onAction}
        className="mt-1 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand-500/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-brand-500/50"
      >
        <PlusIcon className="h-4 w-4" />
        {actionLabel}
      </button>
    </div>
  );
}

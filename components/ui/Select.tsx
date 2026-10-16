import type { ReactNode, SelectHTMLAttributes } from "react";
import { AlertIcon, ChevronDownIcon } from "@/components/ui/icons";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  error?: string;
  children: ReactNode;
};

export default function Select({ label, id, error, children, className, ...props }: SelectProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-ink-900">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          aria-invalid={Boolean(error)}
          className={`w-full appearance-none rounded-xl border bg-white px-4 py-2.5 pr-10 text-sm text-ink-900 transition-colors focus:outline-none focus:ring-4 ${
            error
              ? "border-red-400 focus:border-red-500 focus:ring-red-100"
              : "border-black/10 focus:border-brand-500 focus:ring-brand-100"
          } ${className ?? ""}`}
          {...props}
        >
          {children}
        </select>
        <ChevronDownIcon className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500" />
      </div>
      <div
        className={`grid transition-[grid-template-rows] duration-200 ease-out ${
          error ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <p className="flex items-center gap-1.5 overflow-hidden text-xs font-medium text-red-600">
          <AlertIcon className="h-3.5 w-3.5 shrink-0" />
          <span className="truncate">{error}</span>
        </p>
      </div>
    </div>
  );
}

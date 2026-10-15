import type { InputHTMLAttributes, ReactNode } from "react";
import { AlertIcon } from "@/components/ui/icons";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  icon?: ReactNode;
  error?: string;
};

export default function Input({ label, icon, id, className, error, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-ink-900">
        {label}
      </label>
      <div className="relative">
        {icon && (
          <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-500">
            {icon}
          </span>
        )}
        <input
          id={id}
          aria-invalid={Boolean(error)}
          className={`w-full rounded-xl border bg-white py-2.5 text-sm text-ink-900 placeholder:text-ink-500/60 transition-colors focus:outline-none focus:ring-4 ${
            error
              ? "border-red-400 focus:border-red-500 focus:ring-red-100"
              : "border-black/10 focus:border-brand-500 focus:ring-brand-100"
          } ${icon ? "pl-11 pr-4" : "px-4"} ${className ?? ""}`}
          {...props}
        />
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

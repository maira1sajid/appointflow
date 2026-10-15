import type { ChangeEvent, ReactNode } from "react";
import { AlertIcon, CheckIcon } from "@/components/ui/icons";

type CheckboxProps = {
  id: string;
  name?: string;
  label: ReactNode;
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: string;
};

export default function Checkbox({
  id,
  name,
  label,
  defaultChecked,
  checked,
  onChange,
  required,
  error,
}: CheckboxProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="flex cursor-pointer select-none items-center gap-2.5 text-sm text-ink-700"
      >
        <input
          id={id}
          name={name}
          type="checkbox"
          defaultChecked={defaultChecked}
          checked={checked}
          onChange={onChange}
          required={required}
          aria-invalid={Boolean(error)}
          className="peer sr-only"
        />
        <span
          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border bg-white transition-colors peer-checked:border-brand-600 peer-checked:bg-brand-600 [&>svg]:opacity-0 peer-checked:[&>svg]:opacity-100 ${
            error ? "border-red-400" : "border-black/15"
          }`}
        >
          <CheckIcon className="h-3 w-3 text-white transition-opacity" />
        </span>
        {label}
      </label>
      <div
        className={`grid transition-[grid-template-rows] duration-200 ease-out ${
          error ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <p className="flex items-center gap-1.5 overflow-hidden pl-[1.9rem] text-xs font-medium text-red-600">
          <AlertIcon className="h-3.5 w-3.5 shrink-0" />
          <span className="truncate">{error}</span>
        </p>
      </div>
    </div>
  );
}

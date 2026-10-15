"use client";

import { useState } from "react";
import type { InputHTMLAttributes } from "react";
import { AlertIcon, EyeIcon, EyeOffIcon, LockIcon } from "@/components/ui/icons";

type PasswordInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label?: string;
  error?: string;
};

export default function PasswordInput({
  label = "Password",
  id,
  error,
  ...props
}: PasswordInputProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-ink-900">
        {label}
      </label>
      <div className="relative">
        <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-500">
          <LockIcon className="h-4 w-4" />
        </span>
        <input
          id={id}
          type={visible ? "text" : "password"}
          aria-invalid={Boolean(error)}
          className={`w-full rounded-xl border bg-white py-2.5 pl-11 pr-10 text-sm text-ink-900 placeholder:text-ink-500/60 transition-colors focus:outline-none focus:ring-4 ${
            error
              ? "border-red-400 focus:border-red-500 focus:ring-red-100"
              : "border-black/10 focus:border-brand-500 focus:ring-brand-100"
          }`}
          {...props}
        />
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? "Hide password" : "Show password"}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-500 transition-colors hover:text-brand-600"
        >
          {visible ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
        </button>
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

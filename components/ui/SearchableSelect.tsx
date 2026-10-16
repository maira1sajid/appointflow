"use client";

import { useEffect, useRef, useState } from "react";
import { AlertIcon, ChevronDownIcon, PlusIcon } from "@/components/ui/icons";

type SearchableSelectProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
  searchPlaceholder?: string;
  error?: string;
  onOpen?: () => void;
  loading?: boolean;
  allowCustomValue?: boolean;
};

export default function SearchableSelect({
  id,
  label,
  value,
  onChange,
  options,
  placeholder = "Select an option",
  searchPlaceholder = "Search...",
  error,
  onOpen,
  loading = false,
  allowCustomValue = true,
}: SearchableSelectProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (open) searchRef.current?.focus();
  }, [open]);

  const handleToggle = () => {
    if (!open) {
      setQuery("");
      onOpen?.();
    }
    setOpen((o) => !o);
  };

  const filtered = options.filter((option) => option.toLowerCase().includes(query.toLowerCase()));

  return (
    <div ref={containerRef} className="flex min-w-0 flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-ink-900">
        {label}
      </label>
      <div className="relative min-w-0">
        <button
          type="button"
          id={id}
          onClick={handleToggle}
          aria-haspopup="listbox"
          aria-expanded={open}
          className={`flex w-full items-center justify-between gap-2 rounded-xl border bg-white px-4 py-2.5 text-left text-sm transition-colors focus:outline-none focus:ring-4 ${
            value ? "text-ink-900" : "text-ink-500/60"
          } ${
            error
              ? "border-red-400 focus:border-red-500 focus:ring-red-100"
              : "border-black/10 focus:border-brand-500 focus:ring-brand-100"
          }`}
        >
          <span className="min-w-0 truncate">
            {loading && !open ? "Loading..." : value || placeholder}
          </span>
          <ChevronDownIcon
            className={`h-4 w-4 shrink-0 text-ink-500 transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {open && (
          <div className="absolute inset-x-0 top-full z-20 mt-2 max-w-full overflow-hidden rounded-xl border border-black/10 bg-white shadow-xl">
            <div className="border-b border-black/5 p-2">
              <input
                ref={searchRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={searchPlaceholder}
                className="w-full min-w-0 rounded-lg border border-black/10 px-3 py-2 text-sm text-ink-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
              />
            </div>
            <ul role="listbox" className="max-h-56 overflow-y-auto py-1">
              {loading ? (
                <li className="px-4 py-3 text-sm text-ink-500">Loading...</li>
              ) : filtered.length === 0 ? (
                allowCustomValue && query.trim() ? (
                  <li>
                    <button
                      type="button"
                      onClick={() => {
                        onChange(query.trim());
                        setOpen(false);
                      }}
                      className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-brand-600 transition-colors hover:bg-brand-50"
                    >
                      <PlusIcon className="h-3.5 w-3.5 shrink-0" />
                      <span className="min-w-0 truncate">Use &quot;{query.trim()}&quot;</span>
                    </button>
                  </li>
                ) : (
                  <li className="px-4 py-3 text-sm text-ink-500">No results found</li>
                )
              ) : (
                filtered.map((option) => (
                  <li key={option}>
                    <button
                      type="button"
                      onClick={() => {
                        onChange(option);
                        setOpen(false);
                      }}
                      className={`w-full truncate px-4 py-2.5 text-left text-sm transition-colors hover:bg-brand-50 ${
                        option === value ? "font-semibold text-brand-600" : "text-ink-900"
                      }`}
                    >
                      {option}
                    </button>
                  </li>
                ))
              )}
            </ul>
          </div>
        )}
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

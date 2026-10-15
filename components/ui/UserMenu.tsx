"use client";

import { useEffect, useRef, useState } from "react";
import Avatar from "@/components/ui/Avatar";
import { useAuth } from "@/components/providers/AuthProvider";
import { ChevronDownIcon, LogoutIcon } from "@/components/ui/icons";

export default function UserMenu() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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

  if (!user) return null;

  const initials = `${user.first_name.charAt(0)}${user.last_name.charAt(0)}`.toUpperCase();

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="Account menu"
        className="flex items-center gap-2 rounded-full py-1 pl-1 pr-3 transition-colors hover:bg-brand-50"
      >
        <Avatar initials={initials} size={34} />
        <span className="hidden text-sm font-semibold text-ink-900 sm:inline">
          {user.first_name}
        </span>
        <ChevronDownIcon
          className={`h-3.5 w-3.5 text-ink-500 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`absolute right-0 top-full z-50 mt-2 w-56 origin-top-right rounded-2xl bg-white p-2 shadow-2xl ring-1 ring-black/5 transition-all duration-150 ${
          open ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
        }`}
      >
        <div className="border-b border-black/5 px-3 py-2.5">
          <p className="truncate text-sm font-bold text-ink-900">
            {user.first_name} {user.last_name}
          </p>
          <p className="truncate text-xs text-ink-500">{user.email}</p>
        </div>
        <button
          type="button"
          onClick={() => {
            setOpen(false);
            logout();
          }}
          className="mt-1 flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-semibold text-red-600 transition-colors hover:bg-red-50"
        >
          <LogoutIcon className="h-4 w-4" />
          Log Out
        </button>
      </div>
    </div>
  );
}

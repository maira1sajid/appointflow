"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import Avatar from "@/components/ui/Avatar";
import NavLinks from "@/components/ui/NavLinks";
import { CloseIcon, LogoutIcon, MenuIcon } from "@/components/ui/icons";
import { useAuth } from "@/components/providers/AuthProvider";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [open]);

  const drawer = (
    <>
      <div
        className={`fixed inset-0 z-60 bg-ink-900/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <div
        className={`fixed inset-y-0 right-0 z-70 flex h-dvh w-[85%] max-w-xs flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
      >
        <div className="flex items-center justify-between border-b border-black/5 px-5 py-4">
          <Logo />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-ink-700 transition-colors hover:bg-brand-100 hover:text-brand-600"
          >
            <CloseIcon className="h-4 w-4" />
          </button>
        </div>

        <div className="flex flex-1 flex-col overflow-y-auto px-5 py-6">
          <p className="mb-2 px-3 text-xs font-bold uppercase tracking-wide text-ink-500">
            Menu
          </p>
          <NavLinks variant="vertical" onNavigate={() => setOpen(false)} />

          <div className="mt-8 flex flex-col gap-3 border-t border-black/5 pt-6">
            {isAuthenticated && user ? (
              <>
                <div className="flex items-center gap-3 rounded-xl bg-brand-50/60 px-3 py-2.5">
                  <Avatar
                    initials={`${user.first_name.charAt(0)}${user.last_name.charAt(0)}`.toUpperCase()}
                    size={38}
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-ink-900">
                      {user.first_name} {user.last_name}
                    </p>
                    <p className="truncate text-xs text-ink-500">{user.email}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    logout();
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-red-100 px-5 py-2.5 text-sm font-semibold text-red-600 transition-colors hover:bg-red-50"
                >
                  <LogoutIcon className="h-4 w-4" />
                  Log Out
                </button>
              </>
            ) : (
              <>
                <Button
                  href="/login"
                  variant="ghost"
                  size="md"
                  className="w-full justify-center border border-black/10"
                  onClick={() => setOpen(false)}
                >
                  Log In
                </Button>
                <Button
                  href="/signup"
                  variant="primary"
                  size="md"
                  className="w-full justify-center"
                  onClick={() => setOpen(false)}
                >
                  Sign Up Free
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="flex h-10 w-10 items-center justify-center rounded-xl text-ink-900 transition-colors hover:bg-brand-50 active:scale-95"
      >
        <MenuIcon className="h-6 w-6" />
      </button>

      {mounted && createPortal(drawer, document.body)}
    </div>
  );
}

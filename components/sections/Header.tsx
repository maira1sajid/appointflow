"use client";

import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import NavLinks from "@/components/ui/NavLinks";
import UserMenu from "@/components/ui/UserMenu";
import MobileMenu from "@/components/sections/MobileMenu";
import { useAuth } from "@/components/providers/AuthProvider";

export default function Header() {
  const { isAuthenticated } = useAuth();

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Logo />
        <NavLinks />
        <div className="hidden items-center gap-3 lg:flex">
          {isAuthenticated ? (
            <UserMenu />
          ) : (
            <>
              <Button href="/login" variant="ghost" size="sm">
                Log In
              </Button>
              <Button href="/signup" variant="primary" size="sm">
                Sign Up Free
              </Button>
            </>
          )}
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}

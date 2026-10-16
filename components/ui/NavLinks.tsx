"use client";

import type { MouseEvent } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { setPendingScrollTarget } from "@/lib/scrollTarget";

export const navLinks = [
  { label: "Home", id: "" },
  { label: "Features", id: "features" },
  { label: "How it Works", id: "how-it-works" },
  { label: "Testimonials", id: "testimonials" },
  { label: "FAQs", href: "/faqs" },
] as const;

type NavLinksProps = {
  variant?: "horizontal" | "vertical";
  onNavigate?: () => void;
};

export default function NavLinks({ variant = "horizontal", onNavigate }: NavLinksProps) {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  const handleClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();

    if (!isHome) {
      if (id) setPendingScrollTarget(id);
      router.push("/");
      onNavigate?.();
      return;
    }

    if (!id) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    onNavigate?.();
  };

  const linkClassName =
    variant === "vertical"
      ? "group flex items-center justify-between rounded-lg px-3 py-3.5 text-base font-semibold text-ink-900 transition-colors hover:bg-brand-50 hover:text-brand-600 active:bg-brand-100"
      : "text-sm font-medium text-ink-700 transition-colors hover:text-brand-600";

  const items = navLinks.map((link) =>
    "href" in link ? (
      <Link key={link.label} href={link.href} onClick={onNavigate} className={linkClassName}>
        {link.label}
        {variant === "vertical" && (
          <span className="text-ink-500 transition-transform group-hover:translate-x-0.5 group-hover:text-brand-600">
            →
          </span>
        )}
      </Link>
    ) : (
      <Link
        key={link.label}
        href={link.id ? `/#${link.id}` : "/"}
        onClick={(e) => handleClick(e, link.id)}
        className={linkClassName}
      >
        {link.label}
        {variant === "vertical" && (
          <span className="text-ink-500 transition-transform group-hover:translate-x-0.5 group-hover:text-brand-600">
            →
          </span>
        )}
      </Link>
    )
  );

  if (variant === "vertical") {
    return <nav className="flex flex-col divide-y divide-black/5">{items}</nav>;
  }

  return <nav className="hidden items-center gap-8 lg:flex">{items}</nav>;
}

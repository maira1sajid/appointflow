"use client";

import type { MouseEvent } from "react";

export const navLinks = [
  { label: "Home", id: "" },
  { label: "Features", id: "features" },
  { label: "How it Works", id: "how-it-works" },
  { label: "Testimonials", id: "testimonials" },
  { label: "FAQs", id: "faqs" },
];

type NavLinksProps = {
  variant?: "horizontal" | "vertical";
  onNavigate?: () => void;
};

export default function NavLinks({ variant = "horizontal", onNavigate }: NavLinksProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (!id) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    onNavigate?.();
  };

  if (variant === "vertical") {
    return (
      <nav className="flex flex-col divide-y divide-black/5">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={`#${link.id}`}
            onClick={(e) => handleClick(e, link.id)}
            className="group flex items-center justify-between rounded-lg px-3 py-3.5 text-base font-semibold text-ink-900 transition-colors hover:bg-brand-50 hover:text-brand-600 active:bg-brand-100"
          >
            {link.label}
            <span className="text-ink-500 transition-transform group-hover:translate-x-0.5 group-hover:text-brand-600">
              →
            </span>
          </a>
        ))}
      </nav>
    );
  }

  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {navLinks.map((link) => (
        <a
          key={link.label}
          href={`#${link.id}`}
          onClick={(e) => handleClick(e, link.id)}
          className="text-sm font-medium text-ink-700 transition-colors hover:text-brand-600"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}

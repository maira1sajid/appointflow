import { Suspense } from "react";
import Logo from "@/components/ui/Logo";
import CurrentYear from "@/components/ui/CurrentYear";
import SocialLinks from "@/components/ui/SocialLinks";
import ContactInfo from "@/components/ui/ContactInfo";
import FooterLinkGroup from "@/components/ui/FooterLinkGroup";

const company = [
  { label: "About Us", href: "/about" },
  { label: "Register a Business", href: "/business/register" },
  { label: "FAQs", href: "/faqs" },
];

export default function Footer() {
  return (
    <footer className="bg-ink-900 pt-10 pb-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-100/80">
              The simplest way for service businesses to manage bookings,
              reduce no-shows, and keep clients coming back.
            </p>
            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <FooterLinkGroup title="Company" links={company} />

            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">
                Contact
              </h4>
              <ContactInfo />
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-5 sm:flex-row">
          <p className="text-xs text-brand-100/60">
            © <Suspense fallback="2026"><CurrentYear /></Suspense> AppointFlow. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-brand-100/60">
            <a href="/terms" className="hover:text-accent-400">
              Terms &amp; Conditions
            </a>
            <a href="/privacy" className="hover:text-accent-400">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import Button from "@/components/ui/Button";
import { ClipboardIcon, UsersIcon } from "@/components/ui/icons";

export default function AboutCta() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_120%_90%_at_50%_-20%,_#8b6ef0_0%,_#6d4cf0_40%,_#5a34e8_75%,_#4725bd_100%)] py-16 sm:py-20">
      <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_30%,black,transparent)]" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-accent-500/30 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-[100px]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-brand-50/90">
          We take the information you share with us seriously. Customer
          details are shared only with the business you book with, so it can
          provide your service. We do not sell personal information. Read
          our{" "}
          <Link href="/privacy" className="font-semibold text-white underline underline-offset-2">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/terms" className="font-semibold text-white underline underline-offset-2">
            Terms &amp; Conditions
          </Link>
          .
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="rounded-2xl bg-white/10 p-6 text-left ring-1 ring-white/10 backdrop-blur">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/20 text-accent-400">
              <UsersIcon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-lg font-extrabold text-white">
              Looking for a service?
            </h3>
            <p className="mt-1.5 text-sm text-brand-50/80">
              Find a business near you, see the free times and book in a few
              clicks.
            </p>
            <Button href="/signup" variant="secondary" size="md" className="mt-5">
              Find a Business
            </Button>
          </div>

          <div className="rounded-2xl bg-white/10 p-6 text-left ring-1 ring-white/10 backdrop-blur">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/20 text-accent-400">
              <ClipboardIcon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-lg font-extrabold text-white">Run a business?</h3>
            <p className="mt-1.5 text-sm text-brand-50/80">
              Bring your services, staff and bookings into one simple system,
              and let customers book you online.
            </p>
            <Button href="/business/register" variant="secondary" size="md" className="mt-5">
              List Your Business
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

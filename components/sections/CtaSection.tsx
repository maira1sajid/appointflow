import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/icons";

const benefits = [
  "Verified business profile",
  "Reach new customers",
  "Simple booking management",
];

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_120%_90%_at_50%_-20%,_#8b6ef0_0%,_#6d4cf0_40%,_#5a34e8_75%,_#4725bd_100%)] py-12 sm:py-16">
      <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_30%,black,transparent)]" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-accent-500/30 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-[100px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-400/20 blur-[100px]" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 text-center sm:px-6">
        <Badge>For Business Owners</Badge>

        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
          Ready to{" "}
          <span className="text-gradient-accent">grow your business?</span>
        </h2>

        <p className="max-w-xl text-base leading-relaxed text-brand-50/90 sm:text-lg">
          Submit your business details, get approved, and start accepting
          bookings directly from your own AppointFlow page — no more missed
          calls, no more double bookings.
        </p>

        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {benefits.map((benefit) => (
            <li
              key={benefit}
              className="flex items-center gap-2 text-sm font-medium text-white"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-500/20">
                <CheckIcon className="h-3 w-3 text-accent-400" />
              </span>
              {benefit}
            </li>
          ))}
        </ul>

        <div className="mt-2">
          <Button href="/business/register" variant="secondary" size="lg">
            Register Your Business
            <span aria-hidden className="text-base">
              →
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}

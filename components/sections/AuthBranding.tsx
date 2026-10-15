import { Suspense } from "react";
import Logo from "@/components/ui/Logo";
import CurrentYear from "@/components/ui/CurrentYear";
import BackButton from "@/components/ui/BackButton";
import { CheckIcon, StarIcon } from "@/components/ui/icons";

const points = [
  "Book appointments in seconds — no calls needed",
  "Get reminders so you never miss a visit",
  "View, reschedule, or cancel bookings anytime",
];

type AuthBrandingProps = {
  title: string;
  subtitle: string;
};

export default function AuthBranding({ title, subtitle }: AuthBrandingProps) {
  return (
    <div className="relative hidden overflow-hidden bg-[radial-gradient(ellipse_120%_90%_at_10%_-10%,_#7c5cf5_0%,_#5a34e8_35%,_#2a1670_75%,_#140b33_100%)] p-12 lg:flex lg:flex-col">
      <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-24 -right-20 h-96 w-96 rounded-full bg-accent-500/30 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-brand-400/30 blur-[100px]" />

      <div className="relative flex flex-col items-start gap-6">
        <BackButton variant="light" className="-ml-2" />
        <Logo variant="light" />
      </div>

      <div className="relative flex max-w-md flex-1 flex-col justify-center">
        <h2 className="text-3xl font-extrabold leading-tight text-white">
          {title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-brand-50/90">
          {subtitle}
        </p>

        <ul className="mt-8 flex flex-col gap-3">
          {points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 text-sm text-white/90"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-500/20">
                <CheckIcon className="h-3 w-3 text-accent-400" />
              </span>
              {point}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex items-center gap-3 rounded-2xl bg-white/10 p-4 ring-1 ring-white/10 backdrop-blur">
          <div className="flex gap-0.5 text-accent-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="h-4 w-4" />
            ))}
          </div>
          <p className="text-xs text-white/80">
            Rated 4.9/5 by 25,000+ happy customers
          </p>
        </div>
      </div>

      <p className="relative text-xs text-white/40">
        © <Suspense fallback="2026"><CurrentYear /></Suspense> AppointFlow. All rights reserved.
      </p>
    </div>
  );
}

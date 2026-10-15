import Link from "next/link";
import { CalendarCheckIcon } from "@/components/ui/icons";

type LogoProps = {
  variant?: "dark" | "light";
};

export default function Logo({ variant = "dark" }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-ink-900";
  const subTextColor =
    variant === "light" ? "text-brand-100" : "text-brand-600";

  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      <span className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 text-white shadow-lg shadow-brand-500/40 ring-1 ring-white/20 transition-transform group-hover:scale-105">
        <CalendarCheckIcon className="h-6 w-6" />
        <span className="absolute -right-1 -top-1 h-3.5 w-3.5 rounded-full bg-accent-400 ring-2 ring-white" />
      </span>
      <span className={`text-[1.4rem] font-extrabold tracking-tight ${textColor}`}>
        Appoint<span className={subTextColor}>Flow</span>
      </span>
    </Link>
  );
}

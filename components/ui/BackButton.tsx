"use client";

import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@/components/ui/icons";

type BackButtonProps = {
  variant?: "dark" | "light";
  className?: string;
};

export default function BackButton({ variant = "dark", className = "" }: BackButtonProps) {
  const router = useRouter();
  const colors =
    variant === "light"
      ? "text-white/80 hover:text-white hover:bg-white/10"
      : "text-ink-700 hover:text-brand-600 hover:bg-brand-50";
  const ringColor = variant === "light" ? "border-white/25" : "border-black/10";

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className={`flex items-center gap-2 rounded-full py-2 pl-2 pr-4 text-sm font-semibold transition-colors ${colors} ${className}`}
    >
      <span className={`flex h-7 w-7 items-center justify-center rounded-full border ${ringColor}`}>
        <ArrowLeftIcon className="h-4 w-4" />
      </span>
      Back
    </button>
  );
}

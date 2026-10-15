import type { ReactNode } from "react";

type SocialButtonProps = {
  icon: ReactNode;
  label: string;
};

export default function SocialButton({ icon, label }: SocialButtonProps) {
  return (
    <button
      type="button"
      className="flex w-full items-center justify-center gap-3 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-ink-900 transition-colors hover:bg-brand-50/60"
    >
      {icon}
      {label}
    </button>
  );
}

import Avatar from "@/components/ui/Avatar";
import { QuoteIcon, StarIcon } from "@/components/ui/icons";

type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
  initials: string;
  gradient: string;
};

export default function TestimonialCard({
  quote,
  name,
  role,
  initials,
  gradient,
}: TestimonialCardProps) {
  return (
    <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-black/5 bg-white p-7 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand-200/50">
      <div
        className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${gradient} opacity-10 blur-2xl`}
      />
      <QuoteIcon className="absolute -bottom-2 -right-1 h-20 w-20 text-brand-50" />

      <div className="relative">
        <div
          className={`mb-5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br ${gradient} text-white shadow-sm`}
        >
          <QuoteIcon className="h-3.5 w-3.5" />
        </div>
        <div className="mb-3 flex gap-0.5 text-accent-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} className="h-4 w-4" />
          ))}
        </div>
        <p className="relative text-sm leading-relaxed text-ink-700">
          “{quote}”
        </p>
      </div>

      <div className="relative mt-8 flex items-center gap-3 border-t border-black/5 pt-5">
        <Avatar initials={initials} gradient={gradient} size={44} />
        <div>
          <p className="text-sm font-bold text-ink-900">{name}</p>
          <p className="text-xs text-ink-500">{role}</p>
        </div>
      </div>
    </div>
  );
}

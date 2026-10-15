type StepCardProps = {
  number: string;
  title: string;
  description: string;
};

export default function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="relative rounded-2xl bg-brand-50/60 p-6">
      <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-ink-900 text-sm font-bold text-white">
        {number}
      </span>
      <h3 className="mb-2 text-base font-bold text-ink-900">{title}</h3>
      <p className="text-sm leading-relaxed text-ink-500">{description}</p>
    </div>
  );
}

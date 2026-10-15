import CountUp from "@/components/ui/CountUp";

type StatCardProps = {
  end: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

export default function StatCard({
  end,
  decimals = 0,
  prefix = "",
  suffix = "",
  label,
}: StatCardProps) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-2xl font-extrabold text-white sm:text-3xl">
        <CountUp end={end} decimals={decimals} prefix={prefix} suffix={suffix} />
      </span>
      <span className="text-xs font-medium text-brand-100 sm:text-sm">
        {label}
      </span>
    </div>
  );
}

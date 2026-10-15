type AvatarProps = {
  initials: string;
  gradient?: string;
  size?: number;
  className?: string;
};

export default function Avatar({
  initials,
  gradient = "from-brand-500 to-accent-500",
  size = 40,
  className = "",
}: AvatarProps) {
  return (
    <span
      style={{ width: size, height: size }}
      className={`flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${gradient} font-bold text-white ${className}`}
    >
      <span style={{ fontSize: size * 0.38 }}>{initials}</span>
    </span>
  );
}

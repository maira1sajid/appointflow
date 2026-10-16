import type { ReactNode } from "react";
import Image from "next/image";

type AvatarProps = {
  initials?: string;
  icon?: ReactNode;
  image?: string;
  alt?: string;
  gradient?: string;
  size?: number;
  className?: string;
};

export default function Avatar({
  initials,
  icon,
  image,
  alt = "",
  gradient = "from-brand-500 to-accent-500",
  size = 40,
  className = "",
}: AvatarProps) {
  if (image) {
    return (
      <span
        style={{ width: size, height: size }}
        className={`relative block shrink-0 overflow-hidden rounded-full ${className}`}
      >
        <Image src={image} alt={alt} fill sizes={`${size}px`} className="object-cover" />
      </span>
    );
  }

  return (
    <span
      style={{ width: size, height: size }}
      className={`flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${gradient} font-bold text-white ${className}`}
    >
      {icon ?? <span style={{ fontSize: size * 0.38 }}>{initials}</span>}
    </span>
  );
}

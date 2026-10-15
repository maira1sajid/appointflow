type FooterLinkGroupProps = {
  title: string;
  links: { label: string; href: string }[];
};

export default function FooterLinkGroup({
  title,
  links,
}: FooterLinkGroupProps) {
  return (
    <div>
      <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">
        {title}
      </h4>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-brand-100/80 transition-colors hover:text-accent-400"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

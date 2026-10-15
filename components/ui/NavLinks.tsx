const links = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQs", href: "#faqs" },
];

export default function NavLinks() {
  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="text-sm font-medium text-ink-700 transition-colors hover:text-brand-600"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}

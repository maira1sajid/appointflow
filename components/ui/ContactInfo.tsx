import { MailIcon, PhoneIcon, PinIcon } from "@/components/ui/icons";

const items = [
  { Icon: MailIcon, text: "hello@appointflow.com", href: "mailto:hello@appointflow.com" },
  { Icon: PhoneIcon, text: "+1 (555) 234-7890", href: "tel:+15552347890" },
  { Icon: PinIcon, text: "120 Market Street, San Francisco, CA", href: "#" },
];

export default function ContactInfo() {
  return (
    <ul className="flex flex-col gap-3">
      {items.map(({ Icon, text, href }) => (
        <li key={text}>
          <a
            href={href}
            className="flex items-start gap-3 text-sm text-brand-100/80 transition-colors hover:text-accent-400"
          >
            <Icon className="mt-0.5 h-4 w-4 shrink-0" />
            <span>{text}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

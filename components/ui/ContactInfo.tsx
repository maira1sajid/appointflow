import { MailIcon, PhoneIcon, PinIcon } from "@/components/ui/icons";

const items = [
  { Icon: MailIcon, text: "hello@appointflow.com", href: "mailto:hello@appointflow.com" },
  { Icon: PhoneIcon, text: "+92 300 1234567", href: "tel:+923001234567" },
  { Icon: PinIcon, text: "Islamabad, Pakistan", href: "#" },
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

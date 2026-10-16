import Badge from "@/components/ui/Badge";
import { BuildingIcon, CalendarCheckIcon, ClipboardIcon, UsersIcon } from "@/components/ui/icons";

const parts = [
  {
    icon: <BuildingIcon className="h-5 w-5" />,
    title: "Business profile",
    description: "Its name, category, address and description.",
  },
  {
    icon: <ClipboardIcon className="h-5 w-5" />,
    title: "Services",
    description: "A list of services, each with a duration and a price.",
  },
  {
    icon: <UsersIcon className="h-5 w-5" />,
    title: "Staff members",
    description: "Their own working hours, breaks and days off.",
  },
  {
    icon: <CalendarCheckIcon className="h-5 w-5" />,
    title: "Bookings & schedule",
    description: "A live, up-to-date view of every appointment.",
  },
];

export default function AboutPlatform() {
  return (
    <section className="bg-brand-50/50 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge>How It&apos;s Built</Badge>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            One platform, many businesses
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-500">
            AppointFlow is not built for a single shop. It is built to serve
            many businesses on one platform, each with its own space. Every
            business on AppointFlow has its own:
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {parts.map((part) => (
            <div
              key={part.title}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 text-white">
                {part.icon}
              </div>
              <h3 className="mb-1.5 text-base font-bold text-ink-900">{part.title}</h3>
              <p className="text-sm leading-relaxed text-ink-500">{part.description}</p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-ink-500">
          Businesses stay separate. Each business can see only its own
          private data, and staff can see only what their role allows. A
          salon never sees a clinic&apos;s bookings, and the other way round.
          For customers, this means everything is in one place — you can
          look at different businesses, compare services, and manage all
          your appointments from a single account.
        </p>
      </div>
    </section>
  );
}

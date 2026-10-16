import Badge from "@/components/ui/Badge";
import { CheckIcon } from "@/components/ui/icons";

const customerItems = [
  "Browse businesses and see what each one offers.",
  "See real, available time slots for the service you want.",
  'Choose a staff member, or pick "Any available" to get the earliest time.',
  "Book in a few steps — you log in or sign up only at the last step.",
  "See all your appointments in one place, and cancel or reschedule when your plans change.",
];

const businessItems = [
  "Set up a business profile and add services with their duration and price.",
  "Add staff, and set working hours, breaks and days off for each person.",
  "See every booking in one place, and mark appointments as completed or cancelled.",
  "Get a simple overview of upcoming appointments and bookings each day.",
  "Avoid double bookings — a staff member can't have two overlapping appointments.",
  "Free up time automatically. When an appointment is cancelled, its slot becomes available again.",
];

function ChecklistCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm sm:p-8">
      <h3 className="text-lg font-extrabold tracking-tight text-ink-900">{title}</h3>
      <ul className="mt-5 flex flex-col gap-3.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-ink-500">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <CheckIcon className="h-3 w-3" />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AboutWhatWeDo() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge>What We Do</Badge>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            Built for both sides of the booking
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ChecklistCard title="For Customers" items={customerItems} />
          <ChecklistCard title="For Businesses" items={businessItems} />
        </div>
      </div>
    </section>
  );
}

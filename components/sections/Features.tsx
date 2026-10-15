import Badge from "@/components/ui/Badge";
import FeatureCard from "@/components/ui/FeatureCard";

const features = [
  {
    title: "Real-Time Availability",
    description:
      "Your calendar updates the moment a slot is booked, so you never get double-booked across staff or locations.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6">
        <rect x="3.5" y="4.5" width="17" height="16" rx="3" />
        <path d="M3.5 9.5h17M8 3v3M16 3v3" strokeLinecap="round" />
        <circle cx="12" cy="14.5" r="2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Automated Reminders",
    description:
      "SMS and email reminders cut no-shows by up to 70%, keeping your schedule full and predictable.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6">
        <path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.7 21a2 2 0 01-3.4 0" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Online Payments",
    description:
      "Collect deposits or full payments at checkout with secure, built-in payment processing.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6">
        <rect x="3" y="6" width="18" height="13" rx="2.5" />
        <path d="M3 10.5h18" strokeLinecap="round" />
        <path d="M7 15h4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Team Scheduling",
    description:
      "Manage multiple staff members, services, and locations from a single, unified dashboard.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6">
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 20c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5" strokeLinecap="round" />
        <circle cx="17" cy="8" r="2.4" />
        <path d="M15.5 14.6c2.6.3 4.5 2.6 4.5 5.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Custom Booking Page",
    description:
      "A branded, mobile-friendly page your clients can use to book in seconds — no app download needed.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6">
        <rect x="5" y="2.5" width="14" height="19" rx="2.5" />
        <path d="M9.5 18.5h5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Insightful Analytics",
    description:
      "Track revenue, repeat clients, and peak hours with dashboards that help your business grow.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6">
        <path d="M4 20V10M12 20V4M20 20v-7" strokeLinecap="round" />
        <path d="M3 20h18" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge>Why AppointFlow</Badge>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            Everything you need to run a fully booked calendar
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-500">
            From the first click to the final follow-up, AppointFlow handles
            the busywork so you can focus on your clients.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

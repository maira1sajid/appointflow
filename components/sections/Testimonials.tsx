import Badge from "@/components/ui/Badge";
import TestimonialsCarousel from "@/components/sections/TestimonialsCarousel";

const testimonials = [
  {
    quote:
      "No-shows dropped almost overnight once reminders kicked in. AppointFlow paid for itself in the first week.",
    name: "Amara Chen",
    role: "Owner, Glow Beauty Studio",
    initials: "AC",
    gradient: "from-brand-500 to-brand-700",
  },
  {
    quote:
      "Our front desk used to spend hours on the phone. Now clients book themselves and we just show up ready.",
    name: "Daniel Reyes",
    role: "Manager, Peak Physio Clinic",
    initials: "DR",
    gradient: "from-accent-400 to-accent-600",
  },
  {
    quote:
      "The analytics alone are worth it. We finally know our busiest hours and staff accordingly.",
    name: "Priya Nair",
    role: "Founder, Nair Consulting",
    initials: "PN",
    gradient: "from-fuchsia-400 to-brand-600",
  },
  {
    quote:
      "Switching to AppointFlow took one afternoon. Our clients love how easy it is to rebook in two taps.",
    name: "Jordan Lee",
    role: "Director, Urban Dental",
    initials: "JL",
    gradient: "from-emerald-400 to-brand-500",
  },
  {
    quote:
      "The branded booking page makes us look so much more professional. Bookings are up 40% since launch.",
    name: "Sofia Martinez",
    role: "Founder, FlexFit Studio",
    initials: "SM",
    gradient: "from-sky-400 to-brand-600",
  },
  {
    quote:
      "Support is fantastic and the dashboard gives us exactly what we need without the clutter.",
    name: "Owen Walsh",
    role: "Co-owner, Zenith Spa",
    initials: "OW",
    gradient: "from-rose-400 to-fuchsia-500",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative scroll-mt-20 overflow-hidden bg-white py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-3xl -translate-x-1/2 rounded-full bg-brand-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 -right-10 h-72 w-72 rounded-full bg-accent-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge>Loved by businesses</Badge>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            Thousands of businesses book smarter with us
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-500">
            Real teams, real calendars, real results — see why they switched
            to AppointFlow.
          </p>
        </div>

        <TestimonialsCarousel testimonials={testimonials} />
      </div>
    </section>
  );
}

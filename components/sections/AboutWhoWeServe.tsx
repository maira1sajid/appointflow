import Badge from "@/components/ui/Badge";
import FeatureCard from "@/components/ui/FeatureCard";
import { BuildingIcon, StarIcon, UserIcon, UsersIcon } from "@/components/ui/icons";

const industries = [
  {
    icon: <BuildingIcon className="h-6 w-6" />,
    title: "Dental Clinics",
    description:
      "Manage dentists' schedules and let patients book check-ups and treatments without calling.",
  },
  {
    icon: <StarIcon className="h-6 w-6" />,
    title: "Salons & Beauty",
    description: "Keep stylists' days organised, with services of different lengths and prices.",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Consultants",
    description: "Offer time slots for sessions and meetings, and keep your calendar free of clashes.",
  },
  {
    icon: <UsersIcon className="h-6 w-6" />,
    title: "Clinics",
    description: "Coordinate several staff members and services in one schedule.",
  },
];

export default function AboutWhoWeServe() {
  return (
    <section className="bg-brand-50/50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge>Who We Serve</Badge>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            Built for any appointment-based business
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-500">
            AppointFlow works for any business that runs on appointments.
            Today we focus on:
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <FeatureCard key={industry.title} {...industry} />
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-xl text-center text-sm leading-relaxed text-ink-500">
          If your business works on bookings, you can list your business and
          set up in minutes.
        </p>
      </div>
    </section>
  );
}

import Badge from "@/components/ui/Badge";
import FeatureCard from "@/components/ui/FeatureCard";
import { CheckIcon, ClockIcon, LockIcon, UsersIcon } from "@/components/ui/icons";

const values = [
  {
    icon: <ClockIcon className="h-6 w-6" />,
    title: "Simple",
    description:
      "Booking should take seconds, not phone calls. We keep every step short and clear, for customers and for businesses.",
  },
  {
    icon: <CheckIcon className="h-6 w-6" />,
    title: "Reliable",
    description:
      "We only show times that are really free, and we check again at the moment you confirm. That is how we keep double bookings out of the system.",
  },
  {
    icon: <UsersIcon className="h-6 w-6" />,
    title: "Fair to Everyone",
    description:
      "Customers get clear times and easy cancellation. Businesses keep control of their own schedule, services and rules.",
  },
  {
    icon: <LockIcon className="h-6 w-6" />,
    title: "Private",
    description:
      "Each business sees only its own data, and your personal details are used to manage your bookings.",
  },
];

export default function AboutValues() {
  return (
    <section className="bg-brand-50/50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge>Our Values</Badge>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            What we build around
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <FeatureCard key={value.title} {...value} />
          ))}
        </div>
      </div>
    </section>
  );
}

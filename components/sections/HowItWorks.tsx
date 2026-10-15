import Badge from "@/components/ui/Badge";
import StepCard from "@/components/ui/StepCard";
import DashboardMock from "@/components/ui/DashboardMock";

const steps = [
  {
    number: "01",
    title: "Create your page",
    description: "Add your services, team, and availability in minutes.",
  },
  {
    number: "02",
    title: "Share your link",
    description: "Clients book themselves — no calls or texts required.",
  },
  {
    number: "03",
    title: "Get reminders",
    description: "Automated nudges keep everyone on time, every time.",
  },
  {
    number: "04",
    title: "Grow with insights",
    description: "See what's working and fill the gaps in your calendar.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative scroll-mt-20 overflow-hidden bg-brand-50/50 py-20 sm:py-28"
    >
      <div className="bg-grid-light pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_70%_60%_at_20%_40%,black,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-200/40 via-transparent to-accent-200/30 blur-2xl" />
            <DashboardMock />
          </div>

          <div className="order-1 lg:order-2">
            <Badge>Simple by design</Badge>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
              Up and running in four easy steps
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-500">
              No complicated setup, no training required. Most businesses are
              taking their first booking within the hour.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {steps.map((step) => (
                <StepCard key={step.number} {...step} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

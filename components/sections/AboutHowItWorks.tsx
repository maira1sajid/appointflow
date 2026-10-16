import Badge from "@/components/ui/Badge";
import StepCard from "@/components/ui/StepCard";

const customerSteps = [
  { number: "1", title: "Choose a service", description: "Find a business and pick what you need." },
  { number: "2", title: "Pick a time", description: "Select a staff member and a free time slot." },
  {
    number: "3",
    title: "Confirm",
    description: "Log in or sign up, confirm, and manage the booking any time from My Appointments.",
  },
];

const businessSteps = [
  { number: "1", title: "Send a request", description: "Tell us about your business." },
  { number: "2", title: "Get approved", description: "We review the request and give you access." },
  {
    number: "3",
    title: "Set up and go live",
    description:
      "Add your services, staff and working hours, and your business appears on the website for customers to book.",
  },
];

export default function AboutHowItWorks() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge>How It Works</Badge>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            From browsing to booked, either way
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-brand-600">
              For Customers
            </h3>
            <div className="flex flex-col gap-4">
              {customerSteps.map((step) => (
                <StepCard key={step.number} {...step} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-brand-600">
              For Businesses
            </h3>
            <div className="flex flex-col gap-4">
              {businessSteps.map((step) => (
                <StepCard key={step.number} {...step} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

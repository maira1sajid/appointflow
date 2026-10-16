import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_120%_90%_at_50%_-20%,_#7c5cf5_0%,_#5a34e8_40%,_#2a1670_80%,_#120c24_100%)] py-20 sm:py-24">
      <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_30%,black,transparent)]" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-accent-500/30 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-[100px]" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 text-center lg:px-8">
        <Badge>About AppointFlow</Badge>
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
          One platform for every{" "}
          <span className="text-gradient-accent">appointment-based business.</span>
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-brand-50/90 sm:text-lg">
          AppointFlow helps clinics, salons and consultants manage their
          bookings in one place, and helps customers find a business and book
          a time in seconds. No phone tag, no paper diaries, no double
          bookings.
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <Button href="/signup" variant="secondary" size="lg">
            Find a Business
          </Button>
          <Button href="/business/register" variant="outline-light" size="lg">
            List Your Business
          </Button>
        </div>
      </div>
    </section>
  );
}

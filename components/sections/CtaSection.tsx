import Button from "@/components/ui/Button";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-brand-700 via-brand-600 to-brand-500 py-16 sm:py-20">
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl" />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Ready to fill your calendar?
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-brand-50/90">
          Join thousands of businesses using AppointFlow to book smarter,
          reduce no-shows, and delight their clients.
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <Button href="/signup" variant="secondary" size="lg">
            Start Free — No Card Needed
          </Button>
          <Button href="/login" variant="outline-light" size="lg">
            Log In
          </Button>
        </div>
      </div>
    </section>
  );
}

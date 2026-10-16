import Badge from "@/components/ui/Badge";

export default function AboutStory() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <Badge>Our Story</Badge>
        <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
          Why we built AppointFlow
        </h2>
        <div className="mt-6 flex flex-col gap-4 text-left text-base leading-relaxed text-ink-500">
          <p>
            Booking an appointment should be simple. In reality, it often
            means phone calls that go unanswered, messages that get lost, and
            waiting for someone to reply with a time that may not even be
            free.
          </p>
          <p>
            For businesses, the problem is the other side of the same coin.
            Paper diaries and chat messages make it easy to double book a
            staff member, forget a change, or leave a gap in the day that
            nobody can fill. Time that should go to customers goes to
            managing the schedule.
          </p>
          <p>
            We built AppointFlow to fix both sides at once. Customers see
            which times are really free and book online. Businesses get one
            clear system for their services, staff and bookings.
          </p>
        </div>
      </div>
    </section>
  );
}

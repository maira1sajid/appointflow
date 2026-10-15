import Badge from "@/components/ui/Badge";

const faqs = [
  {
    question: "Is there a free plan?",
    answer:
      "Yes. AppointFlow is free for a single calendar with unlimited bookings. Upgrade anytime for teams, payments, and advanced reminders.",
  },
  {
    question: "Can clients book without creating an account?",
    answer:
      "Absolutely — your booking page works for guests. Clients can also sign up to manage and reschedule their own appointments.",
  },
  {
    question: "Does it sync with Google or Outlook calendar?",
    answer:
      "Yes, AppointFlow syncs two-way with Google Calendar, Outlook, and iCloud so you're never double-booked.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "There are no contracts. Cancel or change your plan whenever you need to, directly from your dashboard.",
  },
];

export default function Faqs() {
  return (
    <section id="faqs" className="scroll-mt-20 bg-brand-50/50 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge>FAQs</Badge>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            Questions? We&apos;ve got answers
          </h2>
        </div>

        <div className="mt-12 flex flex-col gap-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 open:ring-brand-200"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-ink-900">
                {faq.question}
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

import Badge from "@/components/ui/Badge";
import { FAQ_GROUPS } from "@/lib/faqs";

export default function Faqs() {
  return (
    <section className="bg-brand-50/50 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge>FAQs</Badge>
          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink-500">
            Everything you need to know about booking appointments and
            managing your account on AppointFlow.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-12">
          {FAQ_GROUPS.map((group) => (
            <div key={group.title}>
              <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-brand-600">
                {group.title}
              </h2>
              <div className="flex flex-col gap-4">
                {group.items.map((faq) => (
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
                    <p className="mt-3 text-sm leading-relaxed text-ink-500">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

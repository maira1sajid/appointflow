import Link from "next/link";
import Header from "@/components/sections/Header";
import BusinessRegisterWizard from "@/components/sections/BusinessRegisterWizard";
import { ArrowLeftIcon } from "@/components/ui/icons";

export default function BusinessRegisterTemplate() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-brand-50/40 px-4 py-6 sm:px-6 lg:py-8">
        <div className="mx-auto max-w-2xl">
          <Link
            href="/"
            className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-ink-500 transition-colors hover:text-brand-600"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Exit
          </Link>

          <div className="rounded-3xl bg-white p-6 shadow-xl shadow-brand-500/5 ring-1 ring-black/5 sm:p-10">
            <BusinessRegisterWizard />
          </div>
        </div>
      </main>
    </>
  );
}

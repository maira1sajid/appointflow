import type { ReactNode } from "react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Badge from "@/components/ui/Badge";

type LegalPageTemplateProps = {
  title: string;
  children: ReactNode;
};

export default function LegalPageTemplate({ title, children }: LegalPageTemplateProps) {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <section className="border-b border-black/5 bg-brand-50/50 py-8 sm:py-10">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <Badge>Legal</Badge>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
              {title}
            </h1>
          </div>
        </section>

        <section className="py-14 sm:py-16">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">{children}</div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import BusinessHero from "@/components/sections/BusinessHero";
import BusinessServices from "@/components/sections/BusinessServices";
import BusinessHours from "@/components/sections/BusinessHours";
import BusinessTeam from "@/components/sections/BusinessTeam";

export default function BusinessProfileTemplate() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-brand-50/30">
        <BusinessHero />

        <section className="mx-auto max-w-5xl px-6 py-10 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
            <BusinessServices />
            <BusinessHours />
          </div>
        </section>

        <BusinessTeam />
      </main>
      <Footer />
    </>
  );
}

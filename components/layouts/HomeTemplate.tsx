import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import CtaSection from "@/components/sections/CtaSection";
import Footer from "@/components/sections/Footer";
import CleanHashOnLoad from "@/components/ui/CleanHashOnLoad";

export default function HomeTemplate() {
  return (
    <>
      <CleanHashOnLoad />
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

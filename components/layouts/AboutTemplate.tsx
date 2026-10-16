import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import AboutHero from "@/components/sections/AboutHero";
import AboutStory from "@/components/sections/AboutStory";
import AboutPlatform from "@/components/sections/AboutPlatform";
import AboutWhatWeDo from "@/components/sections/AboutWhatWeDo";
import AboutWhoWeServe from "@/components/sections/AboutWhoWeServe";
import AboutHowItWorks from "@/components/sections/AboutHowItWorks";
import AboutValues from "@/components/sections/AboutValues";
import AboutCta from "@/components/sections/AboutCta";

export default function AboutTemplate() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <AboutHero />
        <AboutStory />
        <AboutPlatform />
        <AboutWhatWeDo />
        <AboutWhoWeServe />
        <AboutHowItWorks />
        <AboutValues />
        <AboutCta />
      </main>
      <Footer />
    </>
  );
}

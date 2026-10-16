import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Faqs from "@/components/sections/Faqs";

export default function FaqsTemplate() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Faqs />
      </main>
      <Footer />
    </>
  );
}

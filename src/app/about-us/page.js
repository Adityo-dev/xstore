import AboutUsHero from "@/components/aboutUs/AboutUsHero";
import FactSheet from "@/components/aboutUs/FactSheet";
import OurPlayersTalk from "@/components/aboutUs/OurPlayersTalk";

function page() {
  return (
    <section className="space-y-10 md:space-y-12 lg:space-y-20 mb-16 md:mb-24 pt-32 xl:pt-44">
      <AboutUsHero />
      <FactSheet />
      <OurPlayersTalk />
    </section>
  );
}

export default page;

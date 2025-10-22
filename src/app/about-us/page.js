import AboutUsHero from "@/components/aboutUs/AboutUsHero";
import FactSheet from "@/components/aboutUs/FactSheet";
import OurPlayersTalk from "@/components/aboutUs/OurPlayersTalk";

function page() {
  return (
    <section className="space-y-20">
      <AboutUsHero />
      <FactSheet />
      <OurPlayersTalk />
    </section>
  );
}

export default page;

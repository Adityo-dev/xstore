import AboutUsHero from "./_components/AboutUsHero/AboutUsHero";
import FactSheet from "./_components/FactSheet/FactSheet";
import OurPlayersTalk from "./_components/OurPlayersTalk/OurPlayersTalk";

export default function AboutUsPage() {
  return (
    <section className="space-y-10 md:space-y-12 lg:space-y-20 mb-16 md:mb-24 pt-32 xl:pt-44">
      <AboutUsHero />
      <FactSheet />
      <OurPlayersTalk />
    </section>
  );
}

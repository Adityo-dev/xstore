import Banner1 from "./_components/Banners/Banner1/Banner1";
import PreOrderBanner from "./_components/Banners/PreOrderBanner/PreOrderBanner";
import Blog from "./_components/Blog/Blog";
import ComboOffers from "./_components/ComboOffers/ComboOffers";
import CurrentlyTrending from "./_components/CurrentlyTrending/CurrentlyTrending";
import Hero from "./_components/Hero/Hero";
import Marquee from "@/components/shared/Marquee";
import RecentReleases from "./_components/RecentReleases/RecentReleases";
import TodayDiscounts from "./_components/TodayDiscounts/TodayDiscounts";
import TrustBadges from "./_components/TrustBadges/TrustBadges";

export default function Home() {
  return (
    <section className="space-y-10 md:space-y-12 lg:space-y-20 mb-16 md:mb-24">
      <Hero />
      <TrustBadges />
      <RecentReleases />
      <Banner1 />
      <CurrentlyTrending />
      <ComboOffers />
      <Marquee />
      <TodayDiscounts />
      <PreOrderBanner />
      <Blog />
    </section>
  );
}

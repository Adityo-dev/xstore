import Banner1 from "@/components/main/banners/Banner1";
import Banner2 from "@/components/main/banners/Banner2";
import Blog from "@/components/main/blog/Blog";
import Bundle from "@/components/main/bundle/Bundle";
import CurrentlyTrending from "@/components/main/currentlyTrending/CurrentlyTrending";
import Hero from "@/components/main/hero/Hero";
import Marquee from "@/components/shared/Marquee";
import RecentReleases from "@/components/main/recentReleases/RecentReleases";
import TodayDiscounts from "@/components/main/todayDiscounts/TodayDiscounts";
import TrustBadges from "@/components/main/trustBadges/TrustBadges";

export default function Home() {
  return (
    <section className="space-y-10 md:space-y-12 lg:space-y-20 mb-16 md:mb-24">
      <Hero />
      <TrustBadges />
      <RecentReleases />
      <Banner1 />
      <CurrentlyTrending />
      <Bundle />
      <Marquee />
      <TodayDiscounts />
      <Banner2 />
      <Blog />
    </section>
  );
}

import Banner1 from "@/components/main/home/_components/Banners/Banner1";
import Banner2 from "@/components/main/home/_components/Banners/Banner2";
import Blog from "@/components/main/home/_components/Blog/Blog";
import Bundle from "@/components/main/home/_components/Bundle/Bundle";
import CurrentlyTrending from "@/components/main/home/_components/CurrentlyTrending/CurrentlyTrending";
import Hero from "@/components/main/home/_components/Hero/Hero";
import Marquee from "@/components/shared/Marquee";
import RecentReleases from "@/components/main/home/_components/RecentReleases/RecentReleases";
import TodayDiscounts from "@/components/main/home/_components/TodayDiscounts/TodayDiscounts";
import TrustBadges from "@/components/main/home/_components/TrustBadges/TrustBadges";

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

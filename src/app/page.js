import Banner1 from "@/components/banners/Banner1";
import Banner2 from "@/components/banners/Banner2";
import Blog from "@/components/blog/Blog";
import Bundle from "@/components/bundle/Bundle";
import CurrentlyTrending from "@/components/currentlyTrending/CurrentlyTrending";
import Hero from "@/components/hero/Hero";
import Marquee from "@/components/Marquee";
import RecentReleases from "@/components/recentReleases/RecentReleases";
import TodayDiscounts from "@/components/todayDiscounts/TodayDiscounts";

export default function Home() {
  return (
    <section className="space-y-20 mb-24">
      <Hero />
      <RecentReleases />
      <Marquee />
      <Bundle />
      <Banner2 />
      <CurrentlyTrending />
      <Banner1 />
      <TodayDiscounts />
      <Blog />
    </section>
  );
}

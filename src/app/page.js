import dynamic from "next/dynamic";
import Hero from "@/components/hero/Hero";
import RecentReleases from "@/components/recentReleases/RecentReleases";

const Marquee = dynamic(() => import("@/components/Marquee"));
const Bundle = dynamic(() => import("@/components/bundle/Bundle"));
const Banner2 = dynamic(() => import("@/components/banners/Banner2"));
const CurrentlyTrending = dynamic(() => import("@/components/currentlyTrending/CurrentlyTrending"));
const Banner1 = dynamic(() => import("@/components/banners/Banner1"));
const TodayDiscounts = dynamic(() => import("@/components/todayDiscounts/TodayDiscounts"));
const Blog = dynamic(() => import("@/components/blog/Blog"));

export default function Home() {
  return (
    <section className="space-y-10 md:space-y-12 lg:space-y-20 mb-16 md:mb-24">
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

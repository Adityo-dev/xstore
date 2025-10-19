import Banner from "@/components/banner/Banner";
import Blog from "@/components/blog/Blog";
import Bundle from "@/components/bundle/Bundle";
import CurrentlyTrending from "@/components/currentlyTrending/CurrentlyTrending";
import Hero from "@/components/hero/Hero";
import Marquee from "@/components/Marquee";
import RecentReleases from "@/components/recentReleases/RecentReleases";

export default function Home() {
  return (
    <div className="space-y-20">
      <Hero />
      <RecentReleases />
      <Marquee />
      <Bundle />
      <CurrentlyTrending />
      <Banner />
      <Blog />
    </div>
  );
}

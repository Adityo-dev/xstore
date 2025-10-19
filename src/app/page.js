import Hero from "@/components/hero/Hero";
import Marquee from "@/components/Marquee";
import RecentReleases from "@/components/recentReleases/RecentReleases";

export default function Home() {
  return (
    <div className="space-y-20">
      <Hero />
      <RecentReleases />
      <Marquee />
    </div>
  );
}

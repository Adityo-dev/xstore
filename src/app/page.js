import Hero from "@/components/hero/Hero";
import RecentReleases from "@/components/recentReleases/RecentReleases";

export default function Home() {
  return (
    <div className="space-y-10">
      <Hero />
      <RecentReleases />
    </div>
  );
}

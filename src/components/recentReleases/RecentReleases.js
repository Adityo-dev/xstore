import { products } from "@/data/products";
import RowCard from "../cards/RowCard";
import SectionHeader from "../SectionHeader";

const recentReleases = products.filter((product) => product.isRecent);

function RecentReleases() {
  return (
    <section className="container mx-auto">
      <SectionHeader
        title={"Recent Releases"}
        btn={"Discover All"}
        btnUrl={"/recent"}
      />

      <div className="grid grid-cols-3 gap-6">
        {recentReleases.slice(0, 6).map((game) => (
          <RowCard key={game?.id} game={game} />
        ))}
      </div>
    </section>
  );
}

export default RecentReleases;

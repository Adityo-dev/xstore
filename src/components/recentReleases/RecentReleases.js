import { products } from "@/data/products";
import RowCard from "../cards/RowCard";
import SectionHeader from "../SectionHeader";

const recentReleases = products.filter((product) => product.isRecent);

function RecentReleases() {
  return (
    <>
      <SectionHeader
        title={"Recent Releases"}
        btn={"Discover All"}
        btnUrl={"/recent"}
      />

      <div className="container mx-auto px-4 grid xl:grid-cols-2 2xl:grid-cols-3 gap-4 md:gap-6">
        {recentReleases.slice(0, 6).map((game) => (
          <RowCard key={game?.id} game={game} />
        ))}
      </div>
    </>
  );
}

export default RecentReleases;

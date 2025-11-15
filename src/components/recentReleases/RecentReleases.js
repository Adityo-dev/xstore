import { getFilteredProducts } from "@/lib/products";
import Container from "../Container";
import SectionHeader from "../SectionHeader";
import RowCard from "../cards/RowCard";

export default async function RecentReleases() {
  const products = await getFilteredProducts("isRecent");

  if (!products || products.length === 0) return null;

  return (
    <>
      <SectionHeader
        title={"Recent Releases"}
        btn={"Discover All"}
        btnUrl={"/recent"}
      />

      <Container className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-4 md:gap-6">
        {products.slice(0, 6).map((game) => (
          <RowCard key={game?.id} game={game} />
        ))}
      </Container>
    </>
  );
}

import { getFilteredProducts } from "@/lib/products";
import RowCard from "../cards/RowCard";
import Container from "../Container";
import SectionHeader from "../SectionHeader";

export default async function RecentReleases() {
  const products = await getFilteredProducts("isRecent");

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

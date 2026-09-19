import { getFilteredProducts } from "@/lib/products";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import RowCard from "@/components/ui/cards/RowCard";

export default async function RecentReleases() {
  const products = await getFilteredProducts("isRecent");

  if (!products || products.length === 0) return null;

  return (
    <>
      <SectionHeader
        title="Recent Releases"
        btn="Discover All"
        btnUrl="/recent"
      />

      <Container className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
        {products.slice(0, 6).map((game: any) => (
          <RowCard key={game?.id} game={game} />
        ))}
      </Container>
    </>
  );
}

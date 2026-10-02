import { getFilteredProducts } from "@/lib/products";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import RecentReleasesContent from "./_components/RecentReleasesContent";

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

      <Container>
        <RecentReleasesContent products={products} />
      </Container>
    </>
  );
}

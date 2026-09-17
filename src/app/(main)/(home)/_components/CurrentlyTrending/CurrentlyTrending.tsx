import { getFilteredProducts } from "@/lib/products";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import TrendingBanner from "./_components/TrendingBanner/TrendingBanner";
import TrendingProducts from "./_components/TrendingProducts/TrendingProducts";

async function CurrentlyTrending() {
  const products = await getFilteredProducts("isTrending");

  if (!products || products.length === 0) return null;
  return (
    <>
      <SectionHeader title={"Currently Trending"} />

      <Container className="grid grid-cols-12 gap-6">
        <TrendingBanner />

        <div className="col-span-full md:col-span-8 xl:col-span-9">
          <TrendingProducts products={products} />
        </div>
      </Container>
    </>
  );
}

export default CurrentlyTrending;

import { getFilteredProducts } from "@/lib/products";
import Container from "../Container";
import SectionHeader from "../SectionHeader";
import TrendingBanner from "./TrendingBanner";
import TrendingProducts from "./TrendingProducts";

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

import { getFilteredProducts } from "@/lib/products";
import Container from "../Container";
import SectionHeader from "../SectionHeader";
import DiscountedProducts from "./DiscountedProducts";
import DiscountsBanner from "./DiscountsBanner";

async function TodayDiscounts() {
  const products = await getFilteredProducts("isDiscounted");
  if (!products || products.length === 0) return null;

  return (
    <>
      <SectionHeader title={"Today’s Discounts"} />

      <Container className="grid grid-cols-12 gap-6">
        <div className="col-span-full md:col-span-8 xl:col-span-9">
          <DiscountedProducts products={products} />
        </div>

        <DiscountsBanner />
      </Container>
    </>
  );
}

export default TodayDiscounts;

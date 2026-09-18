import { getProducts } from "@/lib/products";
import SectionHeader from "@/components/shared/SectionHeader";
import RelatedProductsCards from "./_components/RelatedProductsCards/RelatedProductsCards";

async function RelatedProducts() {
  const products = await getProducts();

  return (
    <section className="container mx-auto">
      <SectionHeader title={"Related products"} />

      <RelatedProductsCards products={products} />
    </section>
  );
}

export default RelatedProducts;

import { getProducts } from "@/lib/products";
import SectionHeader from "../SectionHeader";
import RelatedProductsCards from "./RelatedProductsCards";

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

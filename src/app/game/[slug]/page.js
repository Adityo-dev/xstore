import RelatedProducts from "@/components/relatedProducts/RelatedProducts";
import SinglePage from "@/components/singlePage/SinglePage";
import { getProducts } from "@/lib/products";

export default async function Page({ params }) {
  const { slug } = params;
  const products = await getProducts();

  const data = products.find((item) => item.id === Number(slug));

  return (
    <section className="space-y-10 md:space-y-12 lg:space-y-20 mb-16 md:mb-24 pt-32 xl:pt-44">
      <SinglePage data={data} />
      {data && <RelatedProducts />}
    </section>
  );
}

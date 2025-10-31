import RelatedProducts from "@/components/relatedProducts/RelatedProducts";
import SinglePage from "@/components/singlePage/SinglePage";
import { products } from "@/data/products";

function Page({ params }) {
  // slug
  const { slug } = params;
  let data = products.find((item) => item?.id === Number(slug));

  return (
    <section className="space-y-10 md:space-y-12 lg:space-y-20 mb-16 md:mb-24 pt-32 xl:pt-44">
      <SinglePage data={data} />
      <RelatedProducts />
    </section>
  );
}

export default Page;

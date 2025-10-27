"use client";
import RelatedProducts from "@/components/relatedProducts/RelatedProducts";
import SinglePage from "@/components/singlePage/SinglePage";
import { products } from "@/data/products";

function Page({ params }) {
  const { slug } = params;
  let data = products.find((item) => item?.id === Number(slug));

  return (
    <section className="py-44">
      <SinglePage data={data} />
      <RelatedProducts />
    </section>
  );
}

export default Page;

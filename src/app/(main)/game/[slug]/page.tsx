import RelatedProducts from "./_components/RelatedProducts/RelatedProducts";
import SinglePage from "./_components/SinglePage/SinglePage";
import { getProducts } from "@/lib/products";

interface GamePageProps {
  params: Promise<{ slug: string }>;
}

export default async function GamePage({ params }: GamePageProps) {
  const { slug } = await params;
  const products = await getProducts();

  const data = products.find((item: any) => item.id === Number(slug));

  return (
    <section className="space-y-10 md:space-y-12 lg:space-y-20 mb-16 md:mb-24 pt-32 xl:pt-44">
      <SinglePage data={data} />
      {data && <RelatedProducts />}
    </section>
  );
}

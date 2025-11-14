"use client";
import ColumCard from "../cards/ColumCard";
import DotsSlider from "../DotsSlider";
import { useProductsData } from "../hooks/useProductsData";
import SectionHeader from "../SectionHeader";

function RelatedProducts() {
  const { products, loading, error } = useProductsData();

  return (
    <section className="container mx-auto">
      <SectionHeader title={"Related products"} />

      <div className="px-4">
        <DotsSlider
          data={products.slice(0, 10)}
          CardComponent={ColumCard}
          uniqueId="related-products"
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          paginationColor="#6c63ff"
          breakpoints={{
            400: { slidesPerView: 2 },
            700: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1440: { slidesPerView: 5 },
          }}
        />
      </div>
    </section>
  );
}

export default RelatedProducts;

"use client";
import { products } from "@/data/products";
import ColumCard from "../cards/ColumCard";
import DotsSlider from "../DotsSlider";
import SectionHeader from "../SectionHeader";

const trending = products.filter((product) => product.isRecent);

function RelatedProducts() {
  return (
    <section className="container mx-auto">
      <SectionHeader title={"Related products"} />

      <DotsSlider
        data={trending}
        CardComponent={ColumCard}
        uniqueId="related-products"
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        paginationColor="#6c63ff"
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 5 },
        }}
      />
    </section>
  );
}

export default RelatedProducts;

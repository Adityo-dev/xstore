"use client";
import ColumCard from "@/components/ui/cards/ColumCard";
import DotsSlider from "@/components/shared/DotsSlider/DotsSlider";

interface RelatedProductsCardsProps {
  products: any[];
}

function RelatedProductsCards({ products }: RelatedProductsCardsProps) {
  return (
    <div className="px-4">
      <DotsSlider
        data={products.slice(0, 10)}
        CardComponent={ColumCard}
        uniqueId="related-products"
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        breakpoints={{
          400: { slidesPerView: 2 },
          700: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1440: { slidesPerView: 5 },
        }}
      />
    </div>
  );
}

export default RelatedProductsCards;

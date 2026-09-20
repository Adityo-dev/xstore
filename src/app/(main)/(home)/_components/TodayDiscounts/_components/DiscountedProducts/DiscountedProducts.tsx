"use client";

import ColumCard from "@/components/ui/cards/ColumCard";
import DotsSlider from "@/components/shared/DotsSlider/DotsSlider";

interface DiscountedProductsProps {
  products: any[];
}

function DiscountedProducts({ products }: DiscountedProductsProps) {
  return (
    <DotsSlider
      data={products.slice(0, 10)}
      CardComponent={ColumCard}
      uniqueId="todays-discounts"
      slidesPerView={4}
      spaceBetween={20}
      loop={true}
      breakpoints={{
        0: { slidesPerView: 1 },
        320: { slidesPerView: 2 },
        480: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      }}
    />
  );
}

export default DiscountedProducts;

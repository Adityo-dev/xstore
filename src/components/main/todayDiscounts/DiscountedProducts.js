"use client";

import ColumCard from "@/components/ui/cards/ColumCard";
import DotsSlider from "@/components/shared/DotsSlider";

function DiscountedProducts({ products }) {
  return (
    <DotsSlider
      data={products}
      CardComponent={ColumCard}
      uniqueId="todays-discounts"
      slidesPerView={1}
      spaceBetween={20}
      loop={true}
      breakpoints={{
        320: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      }}
    />
  );
}

export default DiscountedProducts;

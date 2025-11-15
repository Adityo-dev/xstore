"use client";

import ColumCard from "../cards/ColumCard";
import DotsSlider from "../DotsSlider";

function DiscountedProducts({ products }) {
  return (
    <DotsSlider
      data={products}
      CardComponent={ColumCard}
      uniqueId="todays-discounts"
      slidesPerView={1}
      spaceBetween={20}
      loop={true}
      paginationColor="#6c63ff"
      breakpoints={{
        320: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      }}
    />
  );
}

export default DiscountedProducts;

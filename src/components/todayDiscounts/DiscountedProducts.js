"use client";

import ColumCard from "../cards/ColumCard";
import DotsSlider from "../DotsSlider";

function DiscountedProducts({ products }) {
  return (
    <div className="col-span-full sm:col-span-9">
      <DotsSlider
        data={products}
        CardComponent={ColumCard}
        uniqueId="todays-discounts"
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        paginationColor="#6c63ff"
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      />
    </div>
  );
}

export default DiscountedProducts;

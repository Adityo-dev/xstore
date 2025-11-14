"use client";
import ColumCard from "../cards/ColumCard";
import DotsSlider from "../DotsSlider";

function TrendingProducts({ products }) {
  return (
    <div className="col-span-full sm:col-span-8">
      <DotsSlider
        data={products}
        CardComponent={ColumCard}
        uniqueId="currently-trending"
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

export default TrendingProducts;

// components/TrendingProducts.jsx
"use client";
import ColumCard from "../cards/ColumCard";
import DotsSlider from "../DotsSlider";

function TrendingProducts({ products }) {
  return (
    <DotsSlider
      data={products}
      CardComponent={ColumCard}
      uniqueId="currently-trending"
      slidesPerView={1}
      spaceBetween={16}
      loop={true}
      breakpoints={{
        320: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      }}
    />
  );
}

export default TrendingProducts;

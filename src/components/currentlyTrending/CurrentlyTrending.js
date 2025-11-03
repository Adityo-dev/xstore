"use client";
import { products } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import ColumCard from "../cards/ColumCard";
import Container from "../Container";
import DotsSlider from "../DotsSlider";
import SectionHeader from "../SectionHeader";

const trending = products.filter((product) => product.isRecent);

function CurrentlyTrending() {
  return (
    <>
      <SectionHeader title={"Currently Trending"} />

      <Container className="grid grid-cols-10 gap-6">
        <div className="col-span-full sm:col-span-2 rounded-lg h-full overflow-hidden relative">
          <Image
            src={"/images/banner2.png"}
            width={600}
            height={600}
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-5 text-center">
            <h2 className="text-nowrap text-[30px] font-semibold font-marcellus">
              Row Game
            </h2>
            <Link href="">
              <button className="bg-[#776BF8] hover:bg-[#fff] hover:text-[#776BF8] px-8 py-2 rounded-lg cursor-pointer text-[17px] font-semibold transition duration-300">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
        <div className="col-span-full sm:col-span-8">
          <DotsSlider
            data={trending}
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
      </Container>
    </>
  );
}

export default CurrentlyTrending;

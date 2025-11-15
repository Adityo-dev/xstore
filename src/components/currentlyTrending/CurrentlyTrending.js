import { getFilteredProducts } from "@/lib/products";
import Image from "next/image";
import Container from "../Container";
import SectionHeader from "../SectionHeader";
import CustomButton from "../ui/buttons/CustomButton";
import TrendingProducts from "./TrendingProducts";

async function CurrentlyTrending() {
  const products = await getFilteredProducts("isTrending");

  return (
    <>
      <SectionHeader title={"Currently Trending"} />

      <Container className="grid grid-cols-12 gap-6">
        <div className="col-span-full md:col-span-4 xl:col-span-3 rounded-lg h-full overflow-hidden relative">
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
            <CustomButton href={"#"}>Shop Now</CustomButton>
          </div>
        </div>

        <div className="col-span-full md:col-span-8 xl:col-span-9">
          <TrendingProducts products={products} />
        </div>
      </Container>
    </>
  );
}

export default CurrentlyTrending;

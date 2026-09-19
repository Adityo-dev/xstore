import Image from "next/image";
import DynamicActionButton from "@/components/shared/DynamicActionButton/DynamicActionButton";

function TrendingBanner() {
  return (
    <div className="col-span-full md:col-span-4 xl:col-span-3 rounded-lg h-full overflow-hidden relative">
      <Image
        src={"/images/banner2.png"}
        width={600}
        height={600}
        alt="Trending Banner"
        className="w-full h-full object-cover"
      />

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-5 text-center">
        <h2 className="text-nowrap text-[30px] font-semibold font-marcellus text-white">
          Row Game
        </h2>
        <DynamicActionButton href="#" label="Shop Now" />
      </div>
    </div>
  );
}

export default TrendingBanner;

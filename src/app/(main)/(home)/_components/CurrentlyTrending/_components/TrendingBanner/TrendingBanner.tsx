import Image from "next/image";
import DynamicActionButton from "@/components/shared/DynamicActionButton/DynamicActionButton";

function TrendingBanner() {
  return (
    <div className="col-span-full md:col-span-4 xl:col-span-3 rounded-lg h-full min-h-[360px] md:min-h-0 overflow-hidden relative group">
      <Image
        src={"/images/banner2.png"}
        fill
        sizes="(max-width: 768px) 100vw, 350px"
        alt="Trending Banner"
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />

      {/* Subtle bottom gradient overlay for enhanced readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-4 text-center z-10 w-full px-4">
        <h2 className="text-nowrap text-[26px] sm:text-[30px] font-semibold font-marcellus text-white drop-shadow-md">
          Row Game
        </h2>
        <DynamicActionButton href="#" label="Shop Now" />
      </div>
    </div>
  );
}

export default TrendingBanner;

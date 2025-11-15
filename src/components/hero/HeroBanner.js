import Image from "next/image";
import CustomButton from "../ui/buttons/CustomButton";

function HeroBanner({ slide }) {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center md:justify-between gap-12 w-full h-[480px] md:h-[400px] lg:h-[500px] px-4 sm:px-6 md:px-10 lg:px-20 overflow-hidden">
      {/* BG Image  */}
      <Image
        src={slide?.bgCover}
        alt="Slide Background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />

      {/* Left Side: Image */}
      <div className="relative z-[2] w-[160px] sm:w-[220px] md:w-[260px] lg:w-[300px] flex justify-center mb-6 md:mb-0">
        <Image
          src={slide?.image}
          width={600}
          height={600}
          alt={slide?.title}
          priority
          className="rounded-lg shadow-xl border border-white/30 object-cover"
        />
      </div>

      {/* Right Side: Text */}
      <div className="relative z-[2] text-white text-center md:text-left flex flex-col items-center md:items-start gap-1 sm:gap-2">
        <h2 className="text-[14px] sm:text-[18px] md:text-[22px] uppercase tracking-widest font-light">
          {slide?.title}
        </h2>
        <p className="text-[36px] sm:text-[50px] md:text-[70px] lg:text-[90px] font-marcellus uppercase leading-tight">
          {slide?.subtitle}
        </p>
        <p className="text-sm sm:text-lg md:text-xl text-gray-200 mb-3 sm:mb-4">
          {slide?.available}
        </p>
        <CustomButton
          href="/shop"
          className="px-5 py-2 sm:px-7 sm:py-3 text-xs sm:text-sm md:text-base font-semibold transition-all"
        >
          Purchase Now
        </CustomButton>
      </div>
    </div>
  );
}

export default HeroBanner;

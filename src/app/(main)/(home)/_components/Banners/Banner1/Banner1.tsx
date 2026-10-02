import Image from "next/image";
import Container from "@/components/shared/Container";
import DynamicActionButton from "@/components/shared/DynamicActionButton/DynamicActionButton";

function Banner1() {
  return (
    <div className="relative w-full overflow-hidden min-h-[380px] sm:min-h-[440px] md:min-h-[500px] lg:min-h-[550px] flex items-center justify-center py-10 sm:py-16 md:py-20">
      {/* Background Banner Image */}
      <Image
        src="/images/banner1.png"
        alt="XStore Games Banner"
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />

      {/* Dark Overlay for Text Legibility */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />

      {/* Content */}
      <Container className="text-center px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-semibold font-marcellus capitalize leading-tight text-white drop-shadow-lg max-w-4xl mx-auto">
          Elevate Your Setup with Premium Gear
        </h2>

        {/* Description */}
        <p className="text-xs sm:text-base md:text-[18px] font-medium mt-3 sm:mt-4 mb-6 sm:mb-8 text-gray-200 max-w-2xl mx-auto drop-shadow-md leading-relaxed">
          Discover the ultimate collection of flagship keyboards, mice, and high-performance monitors crafted for champions.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xs sm:max-w-none mx-auto w-full">
          <DynamicActionButton
            href="/shop"
            label="Shop Now"
            className="w-full sm:w-auto text-center"
          />
          <DynamicActionButton
            href="/shop"
            label="Explore Collection"
            variant="outline"
            className="w-full sm:w-auto text-center border-white text-white hover:bg-white hover:text-primary"
          />
        </div>
      </Container>
    </div>
  );
}

export default Banner1;

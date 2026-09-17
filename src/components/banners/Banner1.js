import Image from "next/image";
import Container from "../Container";

function Banner1() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Banner Image - Responsive Height */}
      <Image
        src="/images/banner1.png"
        width={1600}
        height={800}
        alt="XStore Games Banner"
        className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] object-cover"
        priority
      />

      {/* Dark Overlay for Text Legibility */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />

      {/* Overlay Content - Same on Desktop, Responsive on Mobile */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Container className="text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-semibold font-marcellus capitalize leading-tight text-white drop-shadow-lg">
            Elevate Your Setup with Premium Gear
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-[18px] font-medium mt-4 mb-8 text-gray-200 max-w-3xl mx-auto drop-shadow-md">
            Discover the ultimate collection of flagship keyboards, mice, and high-performance monitors crafted for champions.
          </p>

          <div className="flex justify-center space-x-4 sm:space-x-6">
            <button className="flex items-center gap-2 text-[17px] font-semibold py-2 px-5 rounded transition-all duration-300 bg-[#776BF8] hover:bg-[#fff] hover:text-[#776BF8] cursor-pointer text-white">
              Shop Now
            </button>
            <button className="flex items-center gap-2 text-[17px] font-semibold py-2 px-5 rounded transition-all duration-300 bg-transparent border border-white hover:bg-white hover:text-[#776BF8] cursor-pointer text-white">
              Explore Collection
            </button>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Banner1;

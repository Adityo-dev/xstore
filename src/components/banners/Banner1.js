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

      {/* Overlay Content - Same on Desktop, Responsive on Mobile */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Container className="text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-semibold font-marcellus capitalize leading-tight">
            XStore Elementor Games Dark Demo - WooCommerce Theme
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-[17px] font-medium mt-4 mb-6 text-white max-w-3xl mx-auto">
            Play hundreds of console and PC games, plus get online multiplayer
            and EA Play.
          </p>

          <div className="flex justify-center space-x-6">
            <button className="font-semibold text-[#776BF8] transition cursor-pointer">
              Join Now
            </button>
            <button className="font-semibold text-white hover:text-[#776BF8] transition cursor-pointer">
              Explore Game Library
            </button>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Banner1;

import Image from "next/image";
import Container from "../Container";

function Banner2() {
  return (
    <Container>
      <div className="h-full min-h-[350px] md:min-h-[500px] bg-[#23262F] grid grid-cols-1 lg:grid-cols-12 items-center rounded-lg overflow-hidden relative">
        {/* Image Section */}
        <div className="col-span-1 lg:col-span-7 h-[250px] sm:h-[300px] md:h-[400px] lg:h-full">
          <Image
            src="/images/banner3.jpg"
            width={1500}
            height={600}
            alt="Gran Turismo 2"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="col-span-1 lg:col-span-5 p-5 md:p-8 text-left">
          <h2 className="text-2xl sm:text-3xl md:text-[30px] font-semibold font-marcellus text-white leading-snug">
            Gran Turismo 2 Racing Simulation Video Game
          </h2>
          <p className="text-[#DBDCE1] text-base sm:text-[17px] leading-relaxed mt-4 mb-8 md:mb-12">
            There are many variations of passages of available, but majority
            have suffered alteration in some forms by injected humours randomise
            words don’t look believable.
          </p>
          <button className="bg-[#776BF8] hover:bg-[#fff] hover:text-[#776BF8] px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg cursor-pointer text-base sm:text-[17px] font-semibold transition duration-300">
            Purchase Now
          </button>
        </div>
      </div>
    </Container>
  );
}

export default Banner2;

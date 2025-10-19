import Image from "next/image";

function Banner2() {
  return (
    <div className="container mx-auto min-h-[500px] bg-[#23262F] grid grid-cols-12 items-center gap-6 rounded-lg overflow-hidden relative">
      <Image
        src={"/images/banner3.jpg"}
        width={1500}
        height={600}
        alt=""
        className="w-full h-full col-span-8"
      />

      <div className="col-span-4 p-6">
        <h2 className="text-[30px] font-semibold">
          Gran Turismo 2 Racing Simulation Video Game
        </h2>
        <p className="text-[#DBDCE1] text-[17px] leading-relaxed mt-4 mb-12">
          There are many variations of passages of available, but majority have
          suffered alteration in some forms by injected humours randomise words
          don’t look believable.
        </p>
        <button className="bg-[#776BF8] hover:bg-[#fff] hover:text-[#776BF8] px-8 py-3 rounded-lg cursor-pointer text-[17px] font-semibold transition duration-300">
          Purchase Now
        </button>
      </div>
    </div>
  );
}

export default Banner2;

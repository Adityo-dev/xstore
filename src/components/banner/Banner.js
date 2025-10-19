import Image from "next/image";

function Banner() {
  return (
    <div className="relative">
      <Image
        src={"/images/banner1.png"}
        width={1600}
        height={800}
        alt=""
        className="w-full max-h-[550px] h-full object-cover relative"
      />

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
        style={{
          backgroundImage: `url("/images/Shadow.png")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2 className="text-[40px] font-semibold capitalize text-nowrap">
          XStore Elementor Games Dark Demo - WooCommerce Theme
        </h2>
        <p className="text-[17px] font-medium mt-4 mb-6">
          Play hundreds of console and PC games, plus get online multiplayer and
          EA Play.
        </p>
        <div className="space-x-6">
          <button className="font-semibold">Join Now </button>
          <button className="font-semibold">Explore Game Library</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;

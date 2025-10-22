import Image from "next/image";

function AboutUsHero() {
  return (
    <section className="container mx-auto pt-44 text-center space-y-20">
      <div>
        <h2 className="text-[50px] font-semibold font-marcellus">
          Crafting Unforgettable Experiences
        </h2>
        <p className="text-[20px] font-semibold mt-1">
          There are many variations of passages available but majority have
          suffered alteration in some forms by believable.
        </p>
        <div className="flex items-center justify-center gap-4 mt-4">
          <Image
            src={"/images/profile.png"}
            width={150}
            height={150}
            alt=""
            className="w-fit h-fit"
          />
          <p className="text-start text-[17px] leading-5 font-semibold text-[#8e919f]">
            30M+ customer in 180 <br /> countries
          </p>
        </div>
      </div>

      <Image
        src={"/images/aboutHero.png"}
        width={1600}
        height={600}
        alt=""
        className="w-full max-h-[550px] rounded-lg"
      />
    </section>
  );
}

export default AboutUsHero;

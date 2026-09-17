"use client";
import Marquee from "react-fast-marquee";

export default function GameMarquee() {
  const items = [
    "Nintendo",
    "PS5",
    "Switch",
    "Xbox-One",
    "Nintendo",
    "PS4",
    "Xbox Series X",
    "Nintendo",
    "Switch",
  ];

  return (
    <div className="overflow-hidden">
      {/* Layer 1 - Left to Right */}
      <Marquee gradient={false} speed={20} direction="right">
        {items.map((item, index) => (
          <span
            key={index}
            className="mx-4 sm:mx-6 md:mx-10 text-[30px] md:text-[40px] lg:text-[50px] font-semibold font-marcellus text-white opacity-20 capitalize"
          >
            {item}
          </span>
        ))}
      </Marquee>

      {/* Layer 2 - Right to Left */}
      <Marquee gradient={false} speed={20}>
        {items.map((item, index) => (
          <span
            key={index}
            className="mx-4 sm:mx-6 md:mx-10 text-[30px] md:text-[40px] lg:text-[50px] font-semibold font-marcellus text-white opacity-100 capitalize"
          >
            {item}
          </span>
        ))}
      </Marquee>

      {/* Layer 3 - Left to Right */}
      <Marquee gradient={false} speed={20} direction="right">
        {items.map((item, index) => (
          <span
            key={index}
            className="mx-4 sm:mx-6 md:mx-10 text-[30px] md:text-[40px] lg:text-[50px] font-semibold font-marcellus text-white opacity-20 capitalize"
          >
            {item}
          </span>
        ))}
      </Marquee>
    </div>
  );
}

import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";

function SocialIconAndPayment() {
  return (
    <div className="border-t border-[#FFFFFF24] mt-4 pt-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
      <div className="flex justify-center space-x-5 text-xl text-white">
        <FaFacebookF className="hover:text-[#776BF8] cursor-pointer transition" />
        <FaInstagram className="hover:text-[#776BF8] cursor-pointer transition" />
        <FaYoutube className="hover:text-[#776BF8] cursor-pointer transition" />
        <FaTelegramPlane className="hover:text-[#776BF8] cursor-pointer transition" />
      </div>
      <div className="flex flex-wrap justify-center gap-4 items-center">
        {[
          { id: 1, src: "/logos/pay-pal.png", alt: "PayPal" },
          { id: 2, src: "/logos/visa.png", alt: "Visa" },
          { id: 3, src: "/logos/bkash.png", alt: "Bkash" },
          { id: 4, src: "/logos/nogads.png", alt: "Nogad" },
        ].map((logo) => (
          <div
            key={logo.id}
            className="w-14 lg:w-16 h-8 lg:h-10 bg-white flex items-center justify-center rounded-sm"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={40}
              height={24}
              className="object-contain w-fit h-fit"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SocialIconAndPayment;

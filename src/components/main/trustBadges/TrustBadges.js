import { FiTruck, FiShield, FiHeadphones, FiCreditCard } from "react-icons/fi";
import Container from "@/components/shared/Container";

const badges = [
  {
    id: 1,
    icon: <FiTruck className="text-3xl text-white group-hover:text-[#776BF8] transition-colors duration-300" />,
    title: "Free Shipping",
    description: "On orders over $99",
  },
  {
    id: 2,
    icon: <FiShield className="text-3xl text-white group-hover:text-[#776BF8] transition-colors duration-300" />,
    title: "1 Year Warranty",
    description: "Premium build quality",
  },
  {
    id: 3,
    icon: <FiHeadphones className="text-3xl text-white group-hover:text-[#776BF8] transition-colors duration-300" />,
    title: "24/7 Support",
    description: "Dedicated gaming experts",
  },
  {
    id: 4,
    icon: <FiCreditCard className="text-3xl text-white group-hover:text-[#776BF8] transition-colors duration-300" />,
    title: "Secure Checkout",
    description: "100% encrypted payments",
  },
];

export default function TrustBadges() {
  return (
    <Container className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-4">
      {badges.map((badge) => (
        <div
          key={badge.id}
          className="flex items-center gap-5 p-5 md:p-6 bg-[#23262F] rounded-lg border border-transparent hover:border-[#776BF8]/50 hover:bg-[#2a2d36] transition-all duration-300 group"
        >
          <div className="w-14 h-14 flex flex-shrink-0 items-center justify-center bg-[#18191c] rounded-full border border-gray-800 group-hover:border-[#776BF8]/30 transition-all duration-300">
            {badge.icon}
          </div>
          <div>
            <h3 className="text-white font-semibold text-[15px] md:text-[16px]">
              {badge.title}
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              {badge.description}
            </p>
          </div>
        </div>
      ))}
    </Container>
  );
}

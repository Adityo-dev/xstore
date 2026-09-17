import Link from "next/link";
import { FiMonitor, FiHeadphones, FiMousePointer } from "react-icons/fi";
import { BsKeyboard } from "react-icons/bs";

const categories = [
  {
    id: 1,
    title: "Mechanical Keyboards",
    icon: <BsKeyboard className="text-4xl sm:text-5xl mb-4 text-[#776BF8]" />,
    link: "/shop?category=keyboards",
    description: "Premium typing experience",
  },
  {
    id: 2,
    title: "Gaming Mice",
    icon: <FiMousePointer className="text-4xl sm:text-5xl mb-4 text-[#776BF8]" />,
    link: "/shop?category=mice",
    description: "Ultra-fast precision",
  },
  {
    id: 3,
    title: "High-Hz Monitors",
    icon: <FiMonitor className="text-4xl sm:text-5xl mb-4 text-[#776BF8]" />,
    link: "/shop?category=monitors",
    description: "Crystal clear visuals",
  },
  {
    id: 4,
    title: "Pro Audio Gear",
    icon: <FiHeadphones className="text-4xl sm:text-5xl mb-4 text-[#776BF8]" />,
    link: "/shop?category=audio",
    description: "Studio grade sound",
  },
];

export default function ShopByCategory() {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-12 gap-4">
        <div>
          <h2 className="text-3xl md:text-5xl font-marcellus text-white uppercase tracking-wider">
            Shop by Category
          </h2>
          <p className="text-gray-400 mt-2 text-sm md:text-base">
            Find exactly what you need to complete your ultimate setup.
          </p>
        </div>
        <Link
          href="/shop"
          className="text-[#776BF8] hover:text-white transition-colors uppercase tracking-widest text-sm font-semibold border-b border-[#776BF8] hover:border-white pb-1"
        >
          View All Categories
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={category.link}
            className="group relative flex flex-col items-center text-center p-8 rounded-xl bg-[#131417] border border-gray-800 hover:border-[#776BF8] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#776BF8]/10 overflow-hidden"
          >
            {/* Background Glow on Hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#776BF8]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10">
              {category.icon}
              <h3 className="text-white font-medium text-lg md:text-xl uppercase tracking-wide group-hover:text-[#776BF8] transition-colors">
                {category.title}
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                {category.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

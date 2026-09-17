import {
  FaDesktop,
  FaFire,
  FaGamepad,
  FaHeadphones,
  FaKeyboard,
  FaMicrophone,
  FaTag,
} from "react-icons/fa";
import DotsSlider from "@/components/shared/DotsSlider";
import CategoriesCard from "@/components/ui/cards/CategoriesCard";

const menuItems = [
  {
    id: 1,
    icon: <FaGamepad />,
    name: "Consoles",
    url: "/shop?category=Consoles",
  },
  {
    id: 2,
    icon: <FaKeyboard />,
    name: "Keyboards",
    url: "/shop?category=Keyboards",
  },
  {
    id: 3,
    icon: <FaMicrophone />,
    name: "Streaming Setup",
    url: "/shop?category=Streaming+Gear",
  },
  {
    id: 4,
    icon: <FaHeadphones />,
    name: "Headsets",
    url: "/shop?category=Headsets",
  },
  {
    id: 5,
    icon: <FaDesktop />,
    name: "Monitors & Gear",
    url: "/shop?category=Monitors",
  },
  {
    id: 6,
    icon: <FaFire />,
    name: "Bestsellers",
    url: "/shop?sort_by=popularity",
  },
  {
    id: 7,
    icon: <FaTag />,
    name: "Hot Deals",
    url: "/shop?availability=on_sale",
  },
];

function PopularCategories() {
  return (
    <DotsSlider
      data={menuItems}
      CardComponent={CategoriesCard}
      uniqueId="popular-categories"
      slidesPerView={1}
      spaceBetween={20}
      loop={true}
      breakpoints={{
        400: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
        1280: { slidesPerView: 5 },
        1440: { slidesPerView: 7 },
      }}
    />
  );
}

export default PopularCategories;

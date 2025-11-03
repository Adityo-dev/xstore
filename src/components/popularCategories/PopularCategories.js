import {
  FaChartLine,
  FaFire,
  FaGamepad,
  FaGift,
  FaRandom,
  FaTag,
  FaTicketAlt,
} from "react-icons/fa";
import DotsSlider from "../DotsSlider";
import CategoriesCard from "../cards/CategoriesCard";

const menuItems = [
  {
    id: 1,
    icon: <FaFire />,
    name: "Bestsellers",
    url: "/bestsellers",
  },
  {
    id: 2,
    icon: <FaTag />,
    name: "Deal of the Day",
    url: "/deal-of-the-day",
  },
  {
    id: 3,
    icon: <FaChartLine />,
    name: "Trending Games",
    url: "/trending-games",
  },
  {
    id: 4,
    icon: <FaRandom />,
    name: "Random Keys",
    url: "/random-keys",
  },
  {
    id: 5,
    icon: <FaGamepad />,
    name: "Game Accounts",
    url: "/game-accounts",
  },
  {
    id: 6,
    icon: <FaTicketAlt />,
    name: "Coupon Deal",
    url: "/coupon-deal",
  },
  {
    id: 7,
    icon: <FaGift />,
    name: "Redeem Code",
    url: "/redeem-code",
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
      paginationColor="#6c63ff"
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

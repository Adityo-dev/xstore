import {
  FaChartLine,
  FaFire,
  FaGamepad,
  FaGift,
  FaRandom,
  FaTag,
  FaTicketAlt,
} from "react-icons/fa";

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
    <section className="container mx-auto grid grid-cols-7 gap-6">
      {menuItems.map((item) => (
        <div
          key={item?.id}
          className="flex items-center gap-2 border border-[#FFFFFF38] w-full p-4 rounded-lg cursor-pointer"
        >
          <p className="text-[#776BF8] text-xl">{item?.icon}</p>
          <p className="text-lg font-semibold text-nowrap">{item?.name}</p>
        </div>
      ))}
    </section>
  );
}

export default PopularCategories;

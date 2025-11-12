"use client";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoEyeOutline } from "react-icons/io5";
import { useAside } from "../context/AsideContext";
import { useCart } from "../context/CartContext";
import AsideAddToCard from "./AsideAddToCard";
import AsideViewDetails from "./AsideViewDetails";

function AddToCartAndView({ data }) {
  const { addToCart } = useCart();
  const { openAside } = useAside();

  const handleOpenCart = () => {
    addToCart(data);
    openAside({
      children: <AsideAddToCard data={data} />,
      title: "🛒 Your Cart",
    });
  };

  const handleOpenView = () => {
    openAside({
      children: (
        <AsideViewDetails data={data} onAddToCart={() => handleOpenCart()} />
      ),
      title: "View Details",
    });
  };

  return (
    <div className="flex flex-col xl:flex-row items-center gap-2 xl:gap-3">
      <button
        onClick={handleOpenCart}
        className="bg-white text-[#776BF8] w-8 xl:w-10 h-8 xl:h-10 flex items-center justify-center xl:rounded-full shadow-md hover:bg-[#37a937] hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer"
      >
        <AiOutlineShoppingCart size={20} />
      </button>

      <button
        onClick={handleOpenView}
        className="bg-white text-[#776BF8] w-8 xl:w-10 h-8 xl:h-10 flex items-center justify-center xl:rounded-full shadow-md hover:bg-[#37a937] hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer"
      >
        <IoEyeOutline size={20} />
      </button>
    </div>
  );
}

export default AddToCartAndView;

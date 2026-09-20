"use client";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoEyeOutline } from "react-icons/io5";
import { useModal } from "@/context/ModalContext";
import { useCart } from "@/context/CartContext";

interface AddToCartAndViewProps {
  data: any;
}

function AddToCartAndView({ data }: AddToCartAndViewProps) {
  const { addToCart } = useCart();
  const { openModal } = useModal();

  const handleOpenCart = (itemWithQty: any) => {
    addToCart(itemWithQty);
    openModal({
      view: "CART_DRAWER",
      layout: "DRAWER",
      position: "right",
      title: "🛒 Your Cart",
      data: itemWithQty,
    });
  };

  const handleOpenView = () => {
    openModal({
      view: "PRODUCT_QUICK_VIEW",
      layout: "DRAWER",
      position: "right",
      title: "View Details",
      data: data,
    });
  };

  return (
    <div className="flex flex-col xl:flex-row items-center gap-2 xl:gap-3">
      <button
        onClick={() => handleOpenCart({ ...data, quantity: 1 })}
        className="bg-white text-primary w-8 xl:w-10 h-8 xl:h-10 flex items-center justify-center xl:rounded-full shadow-md hover:bg-secondary hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer"
        title="Add to Cart"
      >
        <AiOutlineShoppingCart size={20} />
      </button>

      <button
        onClick={handleOpenView}
        className="bg-white text-primary w-8 xl:w-10 h-8 xl:h-10 flex items-center justify-center xl:rounded-full shadow-md hover:bg-secondary hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer"
        title="View Details"
      >
        <IoEyeOutline size={20} />
      </button>
    </div>
  );
}

export default AddToCartAndView;

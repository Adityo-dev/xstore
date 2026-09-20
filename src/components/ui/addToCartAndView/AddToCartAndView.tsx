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
    <div className="bg-[#111111]/90 p-1.5 rounded-lg border border-white/10 flex flex-col gap-1.5 shadow-xl">
      <button
        onClick={() => handleOpenCart({ ...data, quantity: 1 })}
        className="w-9 h-9 bg-white text-secondary hover:bg-secondary hover:text-white rounded flex items-center justify-center transition-all duration-300 cursor-pointer"
        title="Add to Cart"
      >
        <AiOutlineShoppingCart size={20} />
      </button>

      <button
        onClick={handleOpenView}
        className="w-9 h-9 bg-white text-secondary hover:bg-secondary hover:text-white rounded flex items-center justify-center transition-all duration-300 cursor-pointer"
        title="View Details"
      >
        <IoEyeOutline size={20} />
      </button>
    </div>
  );
}

export default AddToCartAndView;

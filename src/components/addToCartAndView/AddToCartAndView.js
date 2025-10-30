"use client";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoEyeOutline } from "react-icons/io5";
import AsidePanel from "../asidePanel/AsidePanel";
import { useCart } from "../context/CartContext";
import AsideAddToCard from "./AsideAddToCard";
import AsideViewDetails from "./AsideViewDetails";

function AddToCartAndView({ data }) {
  const [openAside, setOpenAside] = useState(false);
  const [panelType, setPanelType] = useState(null);
  const { addToCart } = useCart();

  const openPanel = (type) => {
    setPanelType(type);
    setOpenAside(true);
  };

  const handleAsideAddToCartOpen = (item) => {
    addToCart(item);
    setPanelType("cart");
    setOpenAside(true);
  };

  return (
    <>
      <div className="flex items-center gap-3">
        {/* Add to Cart */}
        <button
          onClick={() => {
            openPanel("cart");
            addToCart(data);
          }}
          className="bg-white text-black w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-[#37a937] hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer"
        >
          <AiOutlineShoppingCart size={20} />
        </button>

        {/* View Details */}
        <button
          onClick={() => openPanel("view")}
          className="bg-white text-black w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-[#37a937] hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer"
        >
          <IoEyeOutline size={20} />
        </button>
      </div>

      {/* Dynamic Aside Panel */}
      {openAside && (
        <AsidePanel
          isOpen={openAside}
          onClose={() => setOpenAside(false)}
          title={panelType === "cart" ? "🛒 Your Cart" : ""}
        >
          {panelType === "cart" ? (
            /* ---------------- CART CONTENT ---------------- */
            <AsideAddToCard data={data} />
          ) : (
            /* ---------------- VIEW DETAILS CONTENT ---------------- */
            <AsideViewDetails
              data={data}
              onAddToCart={handleAsideAddToCartOpen}
            />
          )}
        </AsidePanel>
      )}
    </>
  );
}

export default AddToCartAndView;

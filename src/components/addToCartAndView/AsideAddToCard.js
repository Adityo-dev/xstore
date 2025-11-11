"use client";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import CustomButton from "../ui/buttons/CustomButton";

export default function AsideAddToCard() {
  const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();

  return (
    <section className="w-full h-full flex flex-col">
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {/* cart items */}
        <div className="space-y-2">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#1b1b1b] rounded-md p-3 flex gap-3 items-start"
            >
              <div className="w-16 h-16 relative rounded overflow-hidden flex-shrink-0">
                <Image
                  src={item.cartImage.src}
                  alt={item.cartImage.alt || item.title}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h4 className="text-sm font-semibold truncate max-w-[170px]">
                    {item.title}
                  </h4>
                  <button
                    onClick={() => removeFromCart(item?.id)}
                    className="text-white/60 hover:text-white cursor-pointer"
                  >
                    ✕
                  </button>
                </div>

                <div className="mt-3 flex items-center gap-3">
                  <div className="flex items-center rounded bg-[#111111] p-1">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-2 py-0.5 text-sm select-none cursor-pointer"
                    >
                      -
                    </button>
                    <div className="px-3 text-sm"> {item.quantity}</div>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-0.5 text-sm select-none cursor-pointer"
                    >
                      +
                    </button>
                  </div>

                  <div className="ml-auto text-sm font-semibold">
                    × ${item.salePrice.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* footer */}
      <div>
        <div className="flex items-center justify-between mb-4 py-4 border-y  border-white/6">
          <p className="text-sm font-semibold text-white/90">Subtotal:</p>
          <p className="text-sm font-semibold">${totalPrice.toFixed(2)}</p>
        </div>

        <CustomButton
          href={"/cart"}
          className="w-full block text-center mb-3"
          hoverDefault={true}
        >
          View Cart
        </CustomButton>

        <CustomButton href={"/checkout"} className="w-full block text-center">
          Checkout
        </CustomButton>
      </div>
    </section>
  );
}

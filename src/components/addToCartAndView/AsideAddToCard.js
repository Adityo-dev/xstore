"use client";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function AsideAddToCard() {
  const recommended = [
    { id: 1, title: "Family Zoo The Story...", image: "/images/rec-1.jpg" },
    { id: 2, title: "Stormfall: Saga Of S...", image: "/images/rec-2.jpg" },
    { id: 3, title: "Lost Island: Blast A...", image: "/images/rec-3.jpg" },
  ];

  const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } =
    useCart();

  const handleQuantityChange = (id, type, currentQuantity) => {
    const newQuantity =
      type === "increase"
        ? currentQuantity + 1
        : currentQuantity > 1
        ? currentQuantity - 1
        : 1;

    updateQuantity(id, newQuantity);
  };

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
                  src={item.images[0].src}
                  alt={item.images[0].alt || item.title}
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
                      onClick={() =>
                        handleQuantityChange(item.id, "decrease", item.quantity)
                      }
                      className="px-2 py-0.5 text-sm select-none cursor-pointer"
                    >
                      -
                    </button>
                    <div className="px-3 text-sm"> {item.quantity}</div>
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, "increase", item.quantity)
                      }
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

        <div className="flex flex-col gap-3">
          <Link href={"/cart"}>
            <button className="w-full bg-white text-black py-2 rounded-md font-semibold cursor-pointer">
              View Cart
            </button>
          </Link>

          <Link href={"/checkout"}>
            <button className="w-full bg-[#7C5CFF] py-2 rounded-md font-semibold cursor-pointer">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

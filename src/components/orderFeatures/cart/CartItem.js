import Image from "next/image";
import Link from "next/link";

export default function CartItem({ item, onRemoveCart, onUpdateQuantity }) {
  return (
    <div className="grid md:grid-cols-[3fr_1fr_1fr_1fr_1fr] items-center border-b border-gray-700 py-3 gap-4">
      {/* Product */}
      <div className="flex items-center gap-4">
        <Link href={`/game/${item?.id}`}>
          <Image
            src={item.cartImage.src}
            alt={item.cartImage?.alt || item.title}
            width={75}
            height={75}
            className="rounded-md object-cover max-w-[80px] w-full h-full"
          />
        </Link>
        <div>
          <Link href={`/game/${item?.id}`}>
            <p className="font-semibold text-[15px] leading-snug text-gray-100">
              {item.title}
            </p>
          </Link>
          <button
            onClick={() => onRemoveCart(item.id)}
            className="text-[#776BF8] text-xs mt-2 hover:underline cursor-pointer"
          >
            Remove
          </button>
        </div>
      </div>

      {/* Price */}
      <p className="text-gray-300 text-[15px]">${item?.salePrice}</p>

      {/* SKU */}
      <p className="text-gray-400 text-[15px]">{item.sku || "N/A"}</p>

      {/* Quantity */}
      <div className="flex items-center justify-center">
        <div className="flex items-center bg-[#0d0d0d] border border-gray-600 rounded-md">
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            className="px-3 py-1 text-gray-300 hover:text-white cursor-pointer"
          >
            -
          </button>
          <span className="px-4 py-1 border-x border-gray-600 text-gray-200">
            {item.quantity}
          </span>
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="px-3 py-1 text-gray-300 hover:text-white cursor-pointer"
          >
            +
          </button>
        </div>
      </div>

      {/* Subtotal */}
      <p className="text-right font-semibold text-[15px]">
        ${(item.salePrice * item.quantity).toFixed(2)}
      </p>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function OrderItem({ item, updateQuantity }) {
  return (
    <div className="flex items-center justify-between gap-4 bg-[#272a31] p-3 rounded">
      <div className="flex items-center gap-3">
        <Link href={`/game/${item?.id}`}>
          <Image
            src={item.cartImage.src}
            alt={item.cartImage.alt || item.title}
            width={60}
            height={60}
            className="rounded-lg object-cover"
          />
        </Link>
        <div>
          <Link href={`/game/${item?.id}`}>
            <p className="text-sm font-medium">{item.title}</p>
          </Link>

          <div className="flex items-center gap-2 mt-1">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              disabled={item.quantity === 1}
              className="px-2 py-1 bg-[#2c2c2c] hover:bg-gray-700 rounded transition cursor-pointer"
            >
              -
            </button>

            <span className="px-2">{item.quantity}</span>

            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="px-2 py-1 bg-[#2c2c2c] hover:bg-gray-700 rounded transition cursor-pointer"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <p className="text-sm font-medium">
        ${(item.salePrice * item.quantity).toFixed(2)}
      </p>
    </div>
  );
}

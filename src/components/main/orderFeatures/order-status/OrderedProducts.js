import Image from "next/image";
import Link from "next/link";

export default function OrderedProducts({ items, total }) {
  return (
    <>
      <h3 className="text-lg font-semibold mb-3 text-white">
        Ordered Products
      </h3>

      <div className="space-y-3 flex-1 max-h-[250px] overflow-y-auto custom-scrollbar pr-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-[#1E2129] p-3 rounded-md"
          >
            <div className="flex items-center gap-3">
              <Link href={`/game/${item?.id}`}>
                <Image
                  src={item.cartImage.src}
                  alt={item.cartImage.alt}
                  width={50}
                  height={50}
                  className="rounded-md object-cover"
                />
              </Link>

              <>
                <Link href={`/game/${item?.id}`}>
                  <p className="text-sm font-medium">{item.title}</p>
                </Link>
                <p className="text-xs text-gray-400">Qty: {item.quantity}</p>
              </>
            </div>

            <p className="text-sm font-semibold">
              ${(item.salePrice * item.quantity).toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center border-t border-gray-700 mt-5 pt-3 text-lg font-bold">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </>
  );
}

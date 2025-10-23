import Image from "next/image";

function AsideAddToCard({ data }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3 bg-[#2a2a2a] p-3 rounded-lg">
        <div className="relative w-16 h-16 overflow-hidden rounded-md">
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-medium">{data.title}</p>
          <p className="text-green-500 font-semibold">${data.salePrice}</p>
        </div>
      </div>

      <p className="text-gray-300">Item added to your cart successfully ✅</p>

      <button className="mt-3 py-3 bg-[#37a937] rounded-md text-white font-semibold hover:bg-[#2e8a2e] transition">
        Go to Checkout
      </button>
    </div>
  );
}

export default AsideAddToCard;

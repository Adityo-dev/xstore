import Image from "next/image";
import Link from "next/link";

import AddToCartAndView from "../addToCartAndView/AddToCartAndView";
import GetStarRating from "../utils/GetStarRating";

function ColumCard({ data }) {
  return (
    <div className="group relative bg-[#23262F] rounded-lg overflow-hidden max-w-[300px] w-full h-full flex flex-col">
      {/* Image section */}
      <div className="relative">
        <Link href={""} className="block h-[250px] overflow-hidden relative">
          <Image
            src={data?.image}
            width={400}
            height={400}
            alt={data?.title || "Game Image"}
            className="w-full h-full object-cover hover:scale-110 transition duration-300"
          />
        </Link>

        {/* Button group animation */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[55%] opacity-0 group-hover:opacity-100 group-hover:top-[50%] transition-all duration-500 ease-in-out">
          <AddToCartAndView data={data} />
        </div>
      </div>

      {/* Content section */}
      <div className="flex flex-col justify-between flex-1 p-4">
        <div>
          <Link href={"#"}>
            <p className="font-semibold mb-3 line-clamp-2 min-h-[48px]">
              {data?.title}
            </p>
          </Link>
          <GetStarRating rating={data?.rating} />
        </div>

        <div className="flex items-center gap-2 mt-4 text-[15px]">
          <span className="line-through text-gray-400">
            ${data?.originalPrice}
          </span>
          <span className="font-semibold text-green-600">
            ${data?.salePrice}
          </span>
        </div>
      </div>

      {/* Tag badge */}
      {data?.tag && (
        <span className="absolute left-3 top-0 mt-2 px-2 py-1 text-[.70rem] font-semibold bg-[#37a937] text-white rounded">
          {data?.tag}
        </span>
      )}
    </div>
  );
}

export default ColumCard;

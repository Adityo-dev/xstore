import Link from "next/link";

import Image from "next/image";
import AddToCartAndView from "../addToCartAndView/AddToCartAndView";
import GetStarRating from "../ui/GetStarRating";

function ColumCard({ data }) {
  return (
    <div className="group relative bg-[#23262F] rounded-lg overflow-hidden w-full sm:max-w-[300px] h-full flex flex-col">
      {/* Image section */}
      <div className="relative">
        {data?.images?.[0] && (
          <Link
            key={data.images[0].id}
            href={`/game/${data?.id}`}
            className="block sm:h-[250px] overflow-hidden relative"
          >
            <Image
              src={data.images[0].src}
              width={400}
              height={400}
              alt={data.images[0].alt || "Game Image"}
              className="w-full h-full object-cover hover:scale-110 transition duration-300"
            />
          </Link>
        )}

        {/* Button group animation */}
        <div
          className="absolute top-1/2 right-2 xl:left-1/2 xl:right-auto xl:top-[55%] -translate-y-1/2 xl:-translate-x-1/2 xl:translate-y-0 flex flex-col gap-2
    bg-black/40 xl:bg-transparent backdrop-blur-md xl:backdrop-blur-0 opacity-100 xl:opacity-0 group-hover:xl:opacity-100 p-2 rounded-md
    transition-all duration-500 ease-in-out
  "
        >
          <AddToCartAndView data={data} />
        </div>
      </div>

      {/* Content section */}
      <div className="flex flex-col justify-between flex-1 p-4">
        <div>
          <Link href={"#"}>
            <p className="text-[17px] font-semibold mb-3 line-clamp-2 min-h-[48px]">
              {data?.title}
            </p>
          </Link>
          <GetStarRating rating={5} />
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

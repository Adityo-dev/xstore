import Image from "next/image";
import Link from "next/link";
import AddToCartAndView from "../addToCartAndView/AddToCartAndView";
import GetStarRating from "../ui/GetStarRating";

function ColumCard({ data }) {
  const isOutOfStock = data?.stock === 0;

  return (
    <div className="group relative bg-[#23262F] rounded-lg overflow-hidden w-full sm:max-w-[300px] h-full flex flex-col">
      {/* Image section */}
      <div className="relative">
        {data?.cartImage && (
          <Link
            href={`/game/${data?.id}`}
            className="block sm:h-[250px] overflow-hidden relative"
          >
            <Image
              src={data.cartImage.src}
              width={400}
              height={400}
              alt={data.cartImage.alt || "Game Image"}
              className={`w-full h-full object-cover transition duration-300 ${
                isOutOfStock ? "opacity-50 grayscale" : "hover:scale-110"
              }`}
            />
          </Link>
        )}

        {/* Stock Out overlay */}
        {isOutOfStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-10">
            <span className="text-white text-lg font-bold uppercase tracking-wider">
              Out of Stock
            </span>
          </div>
        )}

        {/* Button group animation */}
        {!isOutOfStock && (
          <div
            className="absolute top-1/2 right-2 xl:left-1/2 xl:right-auto xl:top-[55%] -translate-y-1/2 xl:-translate-x-1/2 xl:translate-y-0 flex flex-col gap-2
            bg-black/40 xl:bg-transparent backdrop-blur-md xl:backdrop-blur-0 opacity-100 xl:opacity-0 group-hover:xl:opacity-100 p-2 rounded-md
            transition-all duration-500 ease-in-out
          "
          >
            <AddToCartAndView data={data} />
          </div>
        )}
      </div>

      {/* Content section */}
      <div className="flex flex-col justify-between flex-1 p-4">
        <div>
          <Link href={`/game/${data?.id}`}>
            <p className="text-[17px] font-semibold mb-3 line-clamp-2 min-h-[48px]">
              {data?.title}
            </p>
          </Link>
          <GetStarRating reviews={data?.reviews} />
        </div>

        <div className="flex items-center gap-2 mt-4 text-[15px]">
          <span className="line-through text-gray-400">
            ${data?.originalPrice}
          </span>
          <span className="font-semibold text-[#37a937]">
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

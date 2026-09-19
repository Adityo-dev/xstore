import Image from "next/image";
import Link from "next/link";
import AddToCartAndView from "@/components/ui/addToCartAndView/AddToCartAndView";
import GetStarRating from "@/components/ui/GetStarRating";

interface ColumCardProps {
  data?: any;
}

function ColumCard({ data }: ColumCardProps) {
  const isOutOfStock = data?.stock === 0;
  const imgSrc = typeof data?.image === "string"
    ? data.image
    : (data?.cartImage?.src || data?.images?.[0] || "");
  const originalPrice = data?.originalPrice || data?.regularPrice || (data?.salePrice ? data.salePrice + 20 : null);
  const tag = data?.tag || data?.badge;

  const categoryName = (Array.isArray(data?.categories) && data?.categories[0]) || data?.category || data?.subtitle || "";

  const discountPercent =
    originalPrice && data?.salePrice && originalPrice > data.salePrice
      ? Math.round(((originalPrice - data.salePrice) / originalPrice) * 100)
      : null;

  return (
    <div className="group relative bg-secondary-dark rounded-lg overflow-hidden w-full sm:max-w-[300px] h-full flex flex-col border border-transparent hover:border-primary/40 transition-all duration-300">
      {/* Image section */}
      <div className="relative">
        {imgSrc && (
          <Link
            href={`/game/${data?.id}`}
            className="block w-full aspect-[4/3] relative overflow-hidden bg-primary-dark"
          >
            <Image
              src={imgSrc}
              fill
              alt={data?.title || "Product Image"}
              className={`object-cover transition duration-300 ${isOutOfStock ? "opacity-50 grayscale" : "group-hover:scale-105"
                }`}
              sizes="(max-width: 640px) 100vw, 300px"
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
            transition-all duration-500 ease-in-out z-20
          "
          >
            <AddToCartAndView data={data} />
          </div>
        )}
      </div>

      {/* Content section */}
      <div className="flex flex-col justify-between flex-1 p-3 sm:p-4 min-w-0">
        <div>
          {/* Category Name */}
          {categoryName && (
            <span className="text-[10px] sm:text-xs font-semibold text-primary uppercase tracking-wider mb-0.5 sm:mb-1 block line-clamp-1">
              {categoryName}
            </span>
          )}

          {/* Title */}
          <Link href={`/game/${data?.id}`}>
            <p className="text-xs sm:text-sm md:text-[17px] font-semibold mb-1 sm:mb-2 line-clamp-2 hover:text-primary transition-colors leading-snug">
              {data?.title}
            </p>
          </Link>

          {/* Rating */}
          <GetStarRating reviews={data?.reviews} />
        </div>

        {/* Pricing & SAVE Badge */}
        <div className="flex items-center gap-1.5 sm:gap-2 mt-2 sm:mt-3 text-xs sm:text-sm md:text-[15px] flex-wrap">
          {originalPrice && originalPrice > data?.salePrice && (
            <span className="line-through text-gray-400">
              ${originalPrice}
            </span>
          )}
          <span className="font-semibold text-secondary">
            ${data?.salePrice}
          </span>

          {discountPercent && discountPercent > 0 && (
            <span className="text-[10px] sm:text-[11px] font-bold text-danger bg-danger/10 px-1.5 py-0.5 rounded">
              SAVE {discountPercent}%
            </span>
          )}
        </div>
      </div>

      {/* Tag badge */}
      {tag && (
        <span className="absolute left-1.5 top-1.5 sm:left-2 sm:top-2 px-1.5 sm:px-2 py-0.5 text-[.65rem] sm:text-[.70rem] font-semibold bg-secondary text-white rounded z-10">
          {tag}
        </span>
      )}
    </div>
  );
}

export default ColumCard;

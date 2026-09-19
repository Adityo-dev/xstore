import GetStarRating from "@/components/ui/GetStarRating";
import Image from "next/image";
import Link from "next/link";

interface RowCardProps {
  game?: any;
}

function RowCard({ game }: RowCardProps) {
  const imgSrc = typeof game?.image === "string"
    ? game.image
    : (game?.cartImage?.src || game?.images?.[0] || "");
  const originalPrice = game?.originalPrice || game?.regularPrice || (game?.salePrice ? game.salePrice + 20 : null);
  const tag = game?.tag || game?.badge;

  const categoryName = (Array.isArray(game?.categories) && game?.categories[0]) || game?.category || game?.subtitle || "";

  const discountPercent =
    originalPrice && game?.salePrice && originalPrice > game.salePrice
      ? Math.round(((originalPrice - game.salePrice) / originalPrice) * 100)
      : null;

  return (
    <div className="group relative flex items-center gap-3 sm:gap-4 md:gap-6 bg-secondary-dark rounded-lg overflow-hidden min-h-[130px] sm:min-h-[160px] md:min-h-[180px] border border-transparent hover:border-primary/40 transition-all duration-300">
      <Link
        href={`/game/${game?.id}`}
        className="w-[130px] min-[400px]:w-[150px] sm:w-[190px] md:w-[220px] xl:w-[240px] aspect-[4/3] relative flex-shrink-0 bg-primary-dark overflow-hidden h-full"
      >
        {imgSrc && (
          <Image
            src={imgSrc}
            alt={game?.title || "Product Image"}
            fill
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 150px, (max-width: 1024px) 220px, 240px"
          />
        )}

        {/* Tag / Badge */}
        {tag && (
          <span className="absolute left-1.5 top-1.5 sm:left-2 sm:top-2 px-1.5 sm:px-2 py-0.5 text-[.65rem] sm:text-[.70rem] font-semibold bg-secondary text-white rounded z-10">
            {tag}
          </span>
        )}
      </Link>

      <div className="pr-3 sm:pr-4 py-3 sm:py-5 flex-1 flex flex-col justify-center min-w-0">
        {/* Category Name */}
        {categoryName && (
          <span className="text-[10px] sm:text-xs font-semibold text-primary uppercase tracking-wider mb-0.5 sm:mb-1 line-clamp-1">
            {categoryName}
          </span>
        )}

        {/* Title */}
        <Link href={`/game/${game?.id}`}>
          <p className="text-xs sm:text-sm md:text-[17px] font-semibold mb-1 sm:mb-2 line-clamp-2 hover:text-primary transition-colors leading-snug">
            {game?.title}
          </p>
        </Link>

        {/* Rating */}
        <GetStarRating reviews={game?.reviews} />

        {/* Pricing & SAVE Badge */}
        <div className="flex items-center gap-1.5 sm:gap-2 mt-2 sm:mt-3 text-xs sm:text-sm md:text-[15px] flex-wrap">
          {originalPrice && originalPrice > game?.salePrice && (
            <span className="line-through text-gray-400">
              ${originalPrice}
            </span>
          )}
          <span className="font-semibold text-secondary">
            ${game?.salePrice}
          </span>

          {discountPercent && discountPercent > 0 && (
            <span className="text-[10px] sm:text-[11px] font-bold text-danger bg-danger/10 px-1.5 py-0.5 rounded">
              SAVE {discountPercent}%
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default RowCard;

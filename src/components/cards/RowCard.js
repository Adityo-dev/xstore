import GetStarRating from "@/components/ui/GetStarRating";
import Image from "next/image";
import Link from "next/link";

function RowCard({ game }) {
  const imgSrc = typeof game?.image === "string"
    ? game.image
    : (game?.cartImage?.src || game?.images?.[0] || "");
  const originalPrice = game?.originalPrice || game?.regularPrice || (game?.salePrice ? game.salePrice + 20 : null);
  const tag = game?.tag || game?.badge;

  return (
    <div className="group relative flex items-center gap-4 md:gap-6 bg-[#23262F] rounded-lg overflow-hidden">
      <Link
        href={`/game/${game?.id}`}
        className="w-[160px] sm:w-[210px] aspect-[4/3] relative flex-shrink-0 bg-[#18191c] overflow-hidden"
      >
        {imgSrc && (
          <Image
            src={imgSrc}
            alt={game?.title || "Product Image"}
            fill
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 210px, 160px"
          />
        )}
      </Link>

      <div className="pr-4 py-4 flex-1">
        <Link href={`/game/${game?.id}`}>
          <p className="text-sm md:text-[17px] font-semibold mb-2 line-clamp-2">
            {game?.title}
          </p>
        </Link>
        <GetStarRating reviews={game?.reviews} />
        <div className="flex items-center gap-2 mt-3 text-[15px]">
          {originalPrice && originalPrice > game?.salePrice && (
            <span className="line-through text-gray-400">
              ${originalPrice}
            </span>
          )}
          <span className="font-semibold text-[#37a937]">
            ${game?.salePrice}
          </span>
        </div>

        {tag && (
          <span className="absolute left-3 top-0 inline-block mt-2 px-2 py-1 text-[.70rem] font-semibold bg-[#37a937] text-white rounded">
            {tag}
          </span>
        )}
      </div>
    </div>
  );
}

export default RowCard;

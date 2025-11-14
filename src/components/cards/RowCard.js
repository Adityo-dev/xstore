import GetStarRating from "@/components/ui/GetStarRating";
import Image from "next/image";
import Link from "next/link";

function RowCard({ game }) {
  return (
    <div className="group relative flex items-center gap-4 md:gap-6 bg-[#23262F] rounded-lg overflow-hidden">
      <Link
        href={`/game/${game?.id}`}
        className="w-[189px] sm:w-[220px] h-[189px] sm:h-[210px]"
      >
        <Image
          src={game?.cartImage.src}
          width={400}
          height={400}
          alt={game.cartImage.alt || "Game Image"}
          className="h-full w-full object-cover"
        />
      </Link>

      <div className="pr-2">
        <Link href={`/game/${game?.id}`}>
          <p className="text-sm md:text-[17px] font-semibold mb-3">
            {game?.title}
          </p>
        </Link>
        <GetStarRating rating={5} />
        <div className="flex items-center gap-2 mt-6 text-[15px]">
          <span className="line-through text-gray-400">
            ${game?.originalPrice}
          </span>
          <span className="font-semibold text-green-600">
            ${game?.salePrice}
          </span>
        </div>

        {/*  */}
        {game?.tag && (
          <span className="absolute left-3 top-0 inline-block mt-2 px-2 py-1 text-[.70rem] font-semibold bg-[#37a937] text-white rounded">
            {game?.tag}
          </span>
        )}
      </div>
    </div>
  );
}

export default RowCard;

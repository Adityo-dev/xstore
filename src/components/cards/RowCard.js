import GetStarRating from "@/components/utils/GetStarRating";
import Image from "next/image";

function RowCard({ game }) {
  return (
    <div className="group relative flex items-center gap-6 bg-[#23262F] rounded-lg overflow-hidden">
      <Image
        src={game?.image}
        width={400}
        height={400}
        alt=""
        className="w-[260px] h-[210px] object-cover"
      />

      <div>
        <p className="font-semibold mb-3">{game?.title}</p>
        <GetStarRating rating={game?.rating} />
        <div className="flex items-center gap-2 mt-6 text-[15px]">
          <span className="line-through text-gray-400">
            ${game?.originalPrice}
          </span>
          <span className="font-semibold text-green-600">
            ${game?.salePrice}
          </span>
        </div>

        {/*  */}
        <span className="absolute left-3 top-0 inline-block mt-2 px-2 py-1 text-[.70rem] font-semibold bg-[#37a937] text-white rounded">
          {game?.tag}
        </span>
      </div>
    </div>
  );
}

export default RowCard;

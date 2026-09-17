import { FaStar } from "react-icons/fa";

interface GetStarRatingProps {
  reviews?: Array<{ rating: number; [key: string]: any }>;
}

export default function GetStarRating({ reviews = [] }: GetStarRatingProps) {
  if (!reviews || reviews.length === 0) {
    return (
      <div className="flex items-center gap-1 text-sm">
        {[1, 2, 3, 4, 5].map((i) => (
          <FaStar key={i} className="text-gray-500" />
        ))}
      </div>
    );
  }

  const total = reviews.reduce((acc, review) => acc + (review?.rating || 0), 0);
  const averageRating = total / reviews.length;

  const stars = [];

  for (let i = 1; i <= 5; i++) {
    let fill = 0;
    if (averageRating >= i) {
      fill = 100;
    } else if (averageRating > i - 1) {
      fill = (averageRating - (i - 1)) * 100;
    }

    stars.push(
      <div key={i} className="relative w-4 h-4">
        <FaStar className="absolute text-gray-500" /> {/* background star */}
        <div
          className="absolute top-0 left-0 overflow-hidden"
          style={{ width: `${fill}%` }}
        >
          <FaStar className="text-yellow-400" />
        </div>
      </div>
    );
  }

  return <div className="flex items-center gap-1 text-sm">{stars}</div>;
}

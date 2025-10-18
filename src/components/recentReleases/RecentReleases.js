import Image from "next/image";

const games = [
  {
    id: 1,
    image: "/images/1.16-300x300.jpg",
    title: "Ghost Recon Breakpoint. Lorem ipsum dolor sit amet, consectetur",
    rating: 4, // out of 5
    originalPrice: 99.33,
    salePrice: 61.78,
    tag: "SALE",
  },
  {
    id: 2,
    image: "/images/1.1-300x300.jpg",
    title:
      "Experience Hogwart: in late 1800 and decide wizarding Exclusive world",
    rating: 5,
    originalPrice: 59.99,
    salePrice: 39.99,
    tag: "SALE",
  },
  {
    id: 3,
    image: "/images/1.6-300x300.jpg",
    title:
      "The Callistos Protocols: generation- survival horror Glen Schofield",
    rating: 4,
    originalPrice: 69.99,
    salePrice: 49.99,
    tag: "NEW",
  },
  {
    id: 4,
    image: "/images/1.9-300x300.jpg",
    title:
      "Soldier Inc: Mobile Warfare Rugged MMORTS Challenge Beginngs Pro Rated 5.00 out of 5",
    rating: 5,
    originalPrice: 49.99,
    salePrice: 29.99,
    tag: "SALE",
  },
  {
    id: 5,
    image: "/images/1.12-300x300.jpg",
    title: "Ghost Recon Breakpoint. Lorem ipsum dolor sit amet, consectetur",
    rating: 4,
    originalPrice: 79.99,
    salePrice: 59.99,
    tag: "HOT",
  },
  {
    id: 6,
    image: "/images/1.10-300x300.jpg",
    title: "Ghost Recon Breakpoint. Lorem ipsum dolor sit amet, consectetur",
    rating: 4,
    originalPrice: 69.99,
    salePrice: 54.99,
    tag: "SALE",
  },
];

function RecentReleases() {
  return (
    <section className="container mx-auto">
      <div className="flex items-center justify-between mb-7">
        <h2 className="text-[30px] font-semibold">Recent Releases</h2>
        <button>Discover All</button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {games.map((game) => (
          <div
            key={game?.id}
            className="relative flex items-center gap-6 bg-[#23262F] rounded-lg overflow-hidden"
          >
            <Image
              src={game?.image}
              width={400}
              height={400}
              alt=""
              className="w-[260px] h-[200px] object-cover"
            />
            <div>
              <p className="font-semibold">{game?.title}</p>
              <div className="flex items-center mt-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`text-yellow-400 ${
                      i < game.rating ? "filled" : "empty"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <div className="mt-2 flex items-center gap-2">
                <span className="line-through text-gray-400">
                  ${game.originalPrice}
                </span>
                <span className="font-bold text-green-600">
                  ${game.salePrice}
                </span>
              </div>
              <span className="absolute left-3 top-0 inline-block mt-2 px-2 py-1 text-[.70rem] font-semibold bg-[#37a937] text-white rounded">
                {game.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecentReleases;

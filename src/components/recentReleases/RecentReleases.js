import RowCards from "../cards/rowCards/RowCards";

const games = [
  {
    id: 1,
    image: "/images/1.16-300x300.jpg",
    title: "Ghost Recon Breakpoint. Lorem ipsum dolor sit amet, consectetur",
    rating: 4.6,
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
    rating: 4.5,
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
    rating: 4.5,
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
          <RowCards key={game?.id} game={game} />
        ))}
      </div>
    </section>
  );
}

export default RecentReleases;

import Link from "next/link";

const navigationData = [
  {
    id: 1,
    title: "Navigation",
    links: [
      { id: 1, name: "Sellers Support", url: "/sellers-support" },
      { id: 2, name: "Marketing Partnership", url: "/marketing-partnership" },
      { id: 3, name: "Affiliate Program", url: "/affiliate-program" },
      { id: 4, name: "Gaming Services Act", url: "/gaming-services-act" },
      { id: 5, name: "Business Center", url: "/business-center" },
    ],
  },
  {
    id: 2,
    title: "Cooperation",
    links: [
      { id: 1, name: "Reliability", url: "/reliability" },
      { id: 2, name: "Newsroom", url: "/newsroom" },
      { id: 3, name: "XStore Plus", url: "/xstore-plus" },
      { id: 4, name: "Import via API", url: "/import-api" },
    ],
  },
  {
    id: 3,
    title: "Categories",
    links: [
      { id: 1, name: "Trending Games", url: "/trending-games" },
      { id: 2, name: "New Games", url: "/new-games" },
      { id: 3, name: "Free to Play Games", url: "/free-to-play" },
      { id: 4, name: "Popular Games", url: "/popular-games" },
      { id: 5, name: "Best Games", url: "/best-games" },
    ],
  },
];

function NavigationLinks() {
  return (
    <div className="flex justify-between">
      {navigationData.map((section) => (
        <div key={section?.id}>
          <h3 className="text-base font-semibold uppercase mb-4">
            {section?.title}
          </h3>
          <ul className="space-y-3 text-sm font-semibold text-[#A9ABB2]">
            {section?.links.map((link) => (
              <li
                key={link?.id}
                className="hover:text-white cursor-pointer transition"
              >
                <Link href={link?.url}>{link?.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default NavigationLinks;

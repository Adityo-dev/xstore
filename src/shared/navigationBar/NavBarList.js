import Link from "next/link";

const navList = [
  {
    id: 1,
    name: "Home",
    url: "#",
  },
  {
    id: 2,
    name: "About us",
    url: "#",
  },
  {
    id: 3,
    name: "Shop",
    url: "#",
  },
  {
    id: 4,
    name: "FAQs",
    url: "#",
  },
  {
    id: 5,
    name: "Contacts",
    url: "#",
  },
];

function NavBarList() {
  return (
    <nav>
      <ul className="flex items-center gap-7">
        {navList.map((list) => (
          <Link href={list?.url} key={list?.id}>
            <li className="text-[17px] font-semibold hover:text-[#776BF8] transition">
              {list?.name}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default NavBarList;

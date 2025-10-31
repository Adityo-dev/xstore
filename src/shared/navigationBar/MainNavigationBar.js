import Image from "next/image";
import Link from "next/link";
import { RiMenuFill } from "react-icons/ri";
import NavBarList from "./NavBarList";
import NavBarRightSection from "./NavBarRightSection";
import Search from "./Search";

function MainNavigationBar() {
  return (
    <section className="z-10 fixed left-0 right-0 container mx-auto bg-[#23262F] py-[18px] px-[30px] rounded-[12px] mt-6 flex items-center justify-between">
      <div className="xl:hidden">
        <RiMenuFill size={18} />
      </div>
      <div className="flex items-center gap-[30px]">
        <Link href={"/"} className="shrink-0">
          <Image
            src={"/logos/Logo.png"}
            width={200}
            height={200}
            alt="Logo"
            className="w-[150px] max-h-[30px] object-contain"
          />
        </Link>

        <NavBarList />
        <div className="hidden xl:block">
          <Search />
        </div>
      </div>
      <NavBarRightSection />
    </section>
  );
}

export default MainNavigationBar;

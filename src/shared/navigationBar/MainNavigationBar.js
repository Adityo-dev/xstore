import Image from "next/image";
import NavBarList from "./NavBarList";
import NavBarRightSection from "./NavBarRightSection";
import Search from "./Search";

function MainNavigationBar() {
  return (
    <section className="container mx-auto bg-[#23262F] py-[18px] px-[30px] rounded-[12px] mt-6 flex items-center justify-between">
      <div className="flex items-center gap-[30px]">
        <Image
          src={"/logos/logo.png"}
          width={200}
          height={200}
          alt=""
          className="w-fit h-fit"
        />
        <NavBarList />
        <Search />
      </div>
      <NavBarRightSection />
    </section>
  );
}

export default MainNavigationBar;

import Container from "@/components/shared/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import MobileNavList from "./_components/MobileAsideNav/MobileAsideNav";
import NavBarList from "./_components/NavBarList/NavBarList";
import NavBarRightSection from "./_components/NavBarRightSection/NavBarRightSection";
import Search from "./_components/Search/Search";

export default function MainNavigationBar(): React.JSX.Element {
  return (
    <Container className="fixed left-0 right-0 z-50">
      <div className="bg-[#23262F] py-[20px] px-[12px] md:px-[30px] rounded-[12px] mt-3 sm:mt-6 flex items-center justify-between">
        <MobileNavList />
        <div className="flex items-center lg:gap-[30px]">
          <Link href="/" className="shrink-0">
            <Image
              src="/logos/Logo.png"
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
      </div>
    </Container>
  );
}

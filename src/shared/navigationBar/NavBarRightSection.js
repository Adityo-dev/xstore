import Link from "next/link";
import { FaOpencart } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import TotalItems from "./TotalItems";

function NavBarRightSection() {
  return (
    <div className="relative flex items-center gap-[30px] pr-[20px]">
      <div className="cursor-pointer hidden xl:block">
        <p className="text-[15px] font-semibold text-[#776BF8] text-end">
          Support 24/7
        </p>
        <p className="text-[17px] font-semibold">+8801770365981</p>
      </div>
      <Link
        href={"/account/login"}
        className="hidden xl:flex items-center gap-2 cursor-pointer border-s border-[#FFFFFF24] pl-[20px]"
      >
        <FiUser className="text-2xl" />
        <p className="text-[17px] font-semibold">Sign In</p>
      </Link>

      <Link href={"/cart"} className="relative">
        <FaOpencart className="text-2xl cursor-pointer" />
        <TotalItems />
      </Link>
    </div>
  );
}

export default NavBarRightSection;

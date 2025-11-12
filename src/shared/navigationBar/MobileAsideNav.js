"use client";
import { useAside } from "@/components/context/AsideContext";
import { RiMenuFill } from "react-icons/ri";
import MobileNavBar from "./MobileNavBar";

function MobileAsideNav() {
  const { openAside } = useAside();

  return (
    <div className="xl:hidden">
      <RiMenuFill
        size={26}
        onClick={() =>
          openAside({
            children: <MobileNavBar />,
            pos: "left",
          })
        }
      />
    </div>
  );
}

export default MobileAsideNav;

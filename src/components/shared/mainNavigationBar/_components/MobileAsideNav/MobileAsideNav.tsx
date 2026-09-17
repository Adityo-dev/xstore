"use client";

import { useAside } from "@/context/AsideContext";
import React from "react";
import { RiMenuFill } from "react-icons/ri";
import MobileNavBar from "../MobileNavBar/MobileNavBar";

export default function MobileAsideNav(): React.JSX.Element {
  const { openAside } = useAside();

  return (
    <div className="xl:hidden">
      <RiMenuFill
        size={26}
        className="cursor-pointer"
        onClick={() =>
          openAside({
            children: <MobileNavBar />,
            position: "left",
          })
        }
      />
    </div>
  );
}

"use client";

import React from "react";
import { RiMenuFill } from "react-icons/ri";
import { useModal } from "@/context/ModalContext";

export default function MobileAsideNav(): React.JSX.Element {
  const { openModal } = useModal();

  return (
    <div className="xl:hidden">
      <RiMenuFill
        size={26}
        className="cursor-pointer hover:text-primary transition duration-300"
        onClick={() =>
          openModal({
            view: "MOBILE_MENU",
            layout: "DRAWER",
            position: "left",
            title: "Navigation",
          })
        }
      />
    </div>
  );
}

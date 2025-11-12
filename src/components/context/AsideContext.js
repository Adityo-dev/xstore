"use client";
import { createContext, useContext, useState } from "react";

const AsideContext = createContext();

export const AsideProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(null);
  const [position, setPosition] = useState("right");
  const [title, setTitle] = useState("");

  const openAside = ({ children, pos = "right", title = "" }) => {
    setContent(children);
    setPosition(pos);
    setTitle(title);
    setIsOpen(true);
  };

  const closeAside = () => {
    setIsOpen(false);
    setContent(null);
    setTitle("");
  };

  return (
    <AsideContext.Provider
      value={{ isOpen, openAside, closeAside, content, position, title }}
    >
      {children}
    </AsideContext.Provider>
  );
};

export const useAside = () => useContext(AsideContext);

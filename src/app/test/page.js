// "use client";
// import { createContext, useContext, useState } from "react";

// const GlobalModalContext = createContext();

// export const GlobalModalProvider = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [direction, setDirection] = useState("right");
//   const [content, setContent] = useState(null);

//   const openModal = ({ direction = "right", content }) => {
//     setDirection(direction);
//     setContent(content);
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//     setTimeout(() => setContent(null), 300); // wait for animation
//   };

//   return (
//     <GlobalModalContext.Provider
//       value={{ isOpen, direction, content, openModal, closeModal }}
//     >
//       {children}
//     </GlobalModalContext.Provider>
//   );
// };

// export const useGlobalModal = () => useContext(GlobalModalContext);

// "use client";
// import { useGlobalModal } from "../context/GlobalModalContext";
// import { useEffect, useState } from "react";

// export default function GlobalModal() {
//   const { isOpen, closeModal, direction, content } = useGlobalModal();
//   const [show, setShow] = useState(false);

//   // smooth open/close animation trigger
//   useEffect(() => {
//     if (isOpen) setTimeout(() => setShow(true), 10);
//     else setShow(false);
//   }, [isOpen]);

//   if (!isOpen) return null;

//   // direction-wise style
//   const base =
//     "fixed bg-[#111] text-white z-[1001] shadow-lg transition-all duration-300 ease-in-out overflow-y-auto custom-scrollbar";

//   const directionClasses = {
//     right: `${base} top-0 right-0 h-full w-[400px] ${
//       show ? "translate-x-0" : "translate-x-full"
//     }`,
//     left: `${base} top-0 left-0 h-full w-[400px] ${
//       show ? "translate-x-0" : "-translate-x-full"
//     }`,
//     top: `${base} top-0 left-0 w-full h-[400px] ${
//       show ? "translate-y-0" : "-translate-y-full"
//     }`,
//     bottom: `${base} bottom-0 left-0 w-full h-[400px] ${
//       show ? "translate-y-0" : "translate-y-full"
//     }`,
//     center: `${base} top-1/2 left-1/2 w-[500px] rounded-lg transform ${
//       show
//         ? "-translate-x-1/2 -translate-y-1/2 scale-100 opacity-100"
//         : "-translate-x-1/2 -translate-y-1/2 scale-95 opacity-0"
//     }`,
//   };

//   return (
//     <>
//       {/* Overlay */}
//       <div
//         onClick={closeModal}
//         className={`fixed inset-0 bg-black/60 z-[1000] transition-opacity duration-300 ${
//           show ? "opacity-100" : "opacity-0"
//         }`}
//       ></div>

//       {/* Modal Panel */}
//       <div className={directionClasses[direction]}>
//         <div className="p-4 relative">
//           <button
//             onClick={closeModal}
//             className="absolute top-3 right-3 text-gray-300 hover:text-white text-xl"
//           >
//             ✕
//           </button>
//           {content}
//         </div>
//       </div>
//     </>
//   );
// }

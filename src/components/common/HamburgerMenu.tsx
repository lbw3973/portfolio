"use client";
import { useSidebarStore } from "@/stores/sidebarStore";

const activeStyle = [
  { condition: "translate-y-[9px] -rotate-45" },
  { condition: "opacity-0 translate-x-20" },
  { condition: "-translate-y-[9px] rotate-45" },
];
const HamburgerMenu = () => {
  const { isOpen, setToggle } = useSidebarStore();

  return (
    <div className="flex items-center p-2" onClick={setToggle}>
      <button className="flex flex-col justify-between w-5 h-5">
        {activeStyle.map((style, index) => (
          <span
            key={index}
            className={`w-full h-0.5 bg-black transition-all duration-200 ease-out shadow-lg ${
              isOpen && style.condition
            }`}
          ></span>
        ))}
      </button>
    </div>
  );
};

export default HamburgerMenu;

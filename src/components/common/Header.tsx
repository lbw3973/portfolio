"use client";
import Image from "next/image";
import React, { MouseEvent, useEffect, useState } from "react";
import profileImage from "/public/assets/images/profileImage.jpg";

enum SECTION {
  HOME = "Home",
  PROFILE = "Profile",
  WORK = "Work",
  CONTACT = "Contact",
}

const NAV_STYLE = `cursor-pointer font-bold text-[#71787d] hover:text-primary-normal hover:font-bold w-[120px]`;

function Header() {
  const [position, setPosition] = useState(0);
  const [isDocument, setIsDocument] = useState(false);

  function onScroll() {
    setPosition(window.scrollY);
  }

  useEffect(() => {
    setIsDocument(true);

    if (window.scrollY > 0) {
      setPosition(window.scrollY);
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const clickImageHandler = () => {
    window.open("https://github.com/lbw3973");
  };

  const clickNavHandler = (e: MouseEvent<HTMLUListElement>) => {
    const liEl = e.target as HTMLLIElement;
    const element = document.getElementById(liEl.innerText);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getCurrentSection = () => {
    if (isDocument) {
      const homeSection = document.getElementById(SECTION.HOME);
      const profileSection = document.getElementById(SECTION.PROFILE);
      const workSection = document.getElementById(SECTION.WORK);

      if (homeSection && profileSection && workSection) {
        const homePosition = homeSection.getBoundingClientRect().top + window.scrollY;
        const profilePosition =
          profileSection.getBoundingClientRect().top + window.scrollY - profileSection.clientHeight / 3;
        const workPosition =
          workSection!.getBoundingClientRect().top + window.scrollY - profileSection.clientHeight / 3;

        if (window.scrollY === 0) {
          return "";
        } else if (window.scrollY < profilePosition) {
          return SECTION.HOME;
        } else if (window.scrollY < workPosition) {
          return SECTION.PROFILE;
        } else {
          return SECTION.WORK;
        }
      }
    }
  };

  const getIndicatorPosition = () => {
    const current = getCurrentSection();

    switch (current) {
      case SECTION.HOME:
        return "w-[70px] left-[25px]";
      case SECTION.PROFILE:
        return "w-[78px] left-[158px]";
      case SECTION.WORK:
        return "w-[61px] left-[301px]";
      // case SECTION.CONTACT:
      //   return 'w-[92px] left-40'
      default:
        return "";
    }
  };

  return (
    <nav
      className={`fixed w-full flex items-center h-24 ${
        position > 0 && "bg-white !h-20 shadow-bottom"
      } duration-500 z-10`}
    >
      <div className="flex justify-between items-center min-w-[500px] w-[1200px] mx-auto my-5 px-4">
        <Image
          src={profileImage}
          alt="profileImage"
          width={50}
          height={50}
          className="rounded-full hover:cursor-pointer hover:opacity-50"
          onClick={clickImageHandler}
        />
        <ul className="flex gap-4 text-2xl text-center relative py-3" onClick={clickNavHandler}>
          <li className={`${NAV_STYLE} ${getCurrentSection() === SECTION.HOME && "text-[#9D5CBB]"}`}>
            <span>Home</span>
          </li>
          <li className={`${NAV_STYLE} ${getCurrentSection() === SECTION.PROFILE && "text-[#9D5CBB]"}`}>
            <span>Profile</span>
          </li>
          <li className={`${NAV_STYLE} ${getCurrentSection() === SECTION.WORK && "text-[#9D5CBB]"}`}>
            <span>Work</span>
          </li>
          <li className={`${NAV_STYLE}`}>
            <span>Contact</span>
          </li>
          <div className={`h-1 bg-[#9D5CBB] duration-500 absolute bottom-0 ${getIndicatorPosition()}`}></div>
        </ul>
      </div>
    </nav>
  );
}

export default Header;

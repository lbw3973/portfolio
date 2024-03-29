"use client";
import Image from "next/image";
import React, { MouseEvent, useEffect, useState } from "react";
import profileImage from "/public/assets/images/profileImage.jpg";
import HamburgerMenu from "./HamburgerMenu";
import { useSidebarStore } from "@/stores/sidebarStore";
import data from "@/constants/user.json";

enum SECTION {
  HOME = "Home",
  PROFILE = "Profile",
  WORK = "Work",
  CONTACT = "Contact",
}

const liEls = ["Home", "Profile", "Work", "Contact"];
const NAV_STYLE_PC = `cursor-pointer font-bold text-[#71787d] hover:text-primary-normal hover:font-bold w-[120px]`;

function Header() {
  const [position, setPosition] = useState(0);
  const [isDocument, setIsDocument] = useState(false);
  const { isOpen, setToggle } = useSidebarStore();

  const onScroll = () => {
    setPosition(window.scrollY);
  };

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
    window.open(data.github);
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
      const contactSection = document.getElementById(SECTION.CONTACT);

      if (homeSection && profileSection && workSection && contactSection) {
        const homePosition = homeSection.getBoundingClientRect().top + window.scrollY;
        const profilePosition =
          profileSection.getBoundingClientRect().top + window.scrollY - profileSection.clientHeight / 3;
        const workPosition =
          workSection!.getBoundingClientRect().top + window.scrollY - profileSection.clientHeight / 3;
        const contactPosition = contactSection.getBoundingClientRect().top + window.scrollY - 400;

        if (window.scrollY < profilePosition) {
          return SECTION.HOME;
        } else if (window.scrollY < workPosition) {
          return SECTION.PROFILE;
        } else if (
          window.scrollY < contactPosition &&
          document.body.clientHeight >= window.scrollY + window.innerHeight
        ) {
          return SECTION.WORK;
        } else {
          return SECTION.CONTACT;
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
      case SECTION.CONTACT:
        return "w-[92px] left-[422px]";
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
      <div className="relative flex justify-between items-center xl:w-[1200px] w-full mx-auto h-full px-4">
        <Image
          src={profileImage}
          alt="profileImage"
          width={50}
          height={50}
          className="z-10 rounded-full hover:cursor-pointer hover:opacity-50"
          onClick={clickImageHandler}
        />
        <ul className="relative hidden gap-4 py-3 text-2xl text-center md:flex" onClick={clickNavHandler}>
          {liEls.map(li => (
            <li key={li} className={`${NAV_STYLE_PC} ${getCurrentSection() === li && "text-[#9D5CBB]"}`}>
              <span>{li}</span>
            </li>
          ))}
          <div className={`h-1 bg-[#9D5CBB] duration-500 absolute bottom-0 ${getIndicatorPosition()}`}></div>
        </ul>
        <div className="z-10 block md:hidden">
          <HamburgerMenu />
        </div>
        <div
          className={`block md:hidden absolute left-0 w-full ${
            isOpen ? "h-[500px] visible  opacity-90" : "h-0 invisible  opacity-0"
          }  ${position > 0 ? "top-full" : "top-0"} duration-500`}
        >
          <ul
            className="flex flex-col h-full text-3xl text-[#71787d] font-bold"
            onClick={e => {
              clickNavHandler(e);
              setToggle();
            }}
          >
            {liEls.map(li => (
              <li key={li} className="flex items-center justify-center w-full h-full bg-white">
                <span>{li}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;

"use client";
import Image from "next/image";
import React from "react";
import profileImage from "/public/assets/images/profileImage.jpg";

const NAV_STYLE = `cursor-pointer text-[#71787d] hover:text-primary-normal hover:font-bold w-20`;

function Header() {
  const clickImageHandler = () => {
    window.open("https://github.com/lbw3973");
  };
  return (
    <nav className="fixed w-full flex items-center h-28">
      <div className="flex justify-between items-center min-w-[500px] w-[1200px] mx-auto my-5 px-4">
        <Image
          src={profileImage}
          alt="profileImage"
          width={50}
          height={50}
          className="rounded-full hover:cursor-pointer hover:opacity-50"
          onClick={clickImageHandler}
        />
        <ul className="flex gap-4 text-2xl text-center">
          <li className={`${NAV_STYLE} `}>Home</li>
          <li className={`${NAV_STYLE} `}>Profile</li>
          <li className={`${NAV_STYLE} `}>Work</li>
          <li className={`${NAV_STYLE} `}>Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;

"use client";
import Image from "next/image";
import React from "react";
import profileImage from "/public/assets/images/profileImage.jpg";

function Header() {
  const clickImageHandler = () => {
    window.open("https://github.com/lbw3973");
  };
  return (
    <div className="flex justify-between mt-5">
      <Image
        src={profileImage}
        alt="profileImage"
        width={50}
        height={50}
        className="rounded-full hover:cursor-pointer hover:opacity-50"
        onClick={clickImageHandler}
      />
      <ul className="flex gap-4 text-2xl">
        <li>Home</li>
        <li>About</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Header;

"use client";
import { IProjectItem } from "@/interface/projectItem";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { RiExternalLinkLine } from "react-icons/ri";

const LI_STYLE = "mb-3 grid grid-cols-[110px_1fr]";
const H6_STYLE = "text-[#7E7E7E] font-bold mr-5 whitespace-nowrap";

function ContentItem({ content, index }: { content: IProjectItem; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const [isRendered, setIsRendered] = useState(false);

  function onScroll() {
    setCurrentY(window.scrollY);
  }

  useEffect(() => {
    const offset = window.screen.height < 1080 ? 1500 : 300;
    setPosition(document.getElementById("Work")!.getBoundingClientRect().top + index * 460 + window.scrollY - offset);

    if (window.scrollY > 0) {
      setCurrentY(window.scrollY);
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const mouseOverHandler = () => {
    setIsHovered(true);
  };

  const mouseOutHandler = () => {
    setIsHovered(false);
  };

  const clickImageHanlder = () => {
    window.open(content.github);
  };

  const clickButtonHandler = () => {
    window.open(content.deploy);
  };

  const getIsRendered = () => {
    if (!isRendered && position < currentY) {
      setIsRendered(true);
    }
    return isRendered;
  };

  return (
    <div
      className={`h-[400px] mb-20 bg-work-Content  border-1 border-white shadow-content rounded-md p-12 flex gap-10 transition-project ${
        getIsRendered() ? "opacity-100 w-full" : "translate-x-1/2 w-0 opacity-0"
      } duration-500`}
    >
      <div
        className="w-[400px] h-[300px] rounded-md shadow-thumbnail border-black relative bg-black"
        onMouseOver={mouseOverHandler}
        onMouseOut={mouseOutHandler}
        onClick={clickImageHanlder}
      >
        <Image
          src={content.thumbnail}
          alt="thumbnail"
          width={400}
          height={300}
          className={`object-cover rounded-md cursor-pointer ${isHovered && "opacity-10"} duration-300`}
          style={{ width: "100%", height: "100%" }}
        />
        {isHovered && (
          <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 text-white flex items-center cursor-pointer text-xl">
            <span>GitHub로 이동하기</span>
            <RiExternalLinkLine />
          </div>
        )}
      </div>
      <div className="mx-auto w-[500px] flex flex-col justify-between">
        <div>
          <div className="flex items-center h-10 justify-between">
            <h2 className="mt-2 font-bold text-3xl h-full">{content.name}</h2>
            {content.deploy && (
              <button
                onClick={clickButtonHandler}
                className="w-[100px] h-full bg-[#ad97cf] rounded-lg text-white font-bold duration-300 ease-in-out hover:bg-[#9759bb]"
              >
                VIEW
              </button>
            )}
          </div>
          <ul className="my-5 text-base">
            <li className={LI_STYLE}>
              <h6 className={H6_STYLE}>작업인원</h6>
              <p>{content.workForce}</p>
            </li>
            <li className={LI_STYLE}>
              <h6 className={H6_STYLE}>작업기간</h6>
              <p>{content.period}</p>
            </li>
            <li className={LI_STYLE}>
              <h6 className={H6_STYLE}>사용기술</h6>
              <p>
                {content.languages.map((language, index) => (
                  <span key={Date.now().toString() + language}>
                    {language}
                    {content.languages.length - 1 !== index && ", "}
                  </span>
                ))}
              </p>
            </li>
            <li className={LI_STYLE}>
              <h6 className={H6_STYLE}>프로젝트 소개</h6>
              <p className="break-keep">{content.introduction}</p>
            </li>
            <li className={LI_STYLE}>
              <h6 className={H6_STYLE}>상세 역할</h6>
              <div>
                {content.parts.map(part => (
                  <p key={part} className="mb-2 break-keep">
                    {part}
                  </p>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContentItem;

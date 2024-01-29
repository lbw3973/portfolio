"use client";
import { IProjectItem } from "@/interface/projectItem";
import Image from "next/image";
import React, { RefObject, useEffect, useRef, useState } from "react";
import { RiExternalLinkLine } from "react-icons/ri";

const LI_STYLE = "mb-3 md:grid md:grid-cols-[110px_1fr] flex md:gap-1 gap-2 flex-col md:text-start text-center";
const H6_STYLE = "text-[#838383] font-bold md:mr-5 whitespace-nowrap";

function ContentItem({ content, index }: { content: IProjectItem; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentY, setCurrentY] = useState(0);
  const [outerHeightOffset, setOuterHeightOffset] = useState(0);
  const itemRef = useRef<HTMLDivElement>(null);

  const onScroll = () => {
    setCurrentY(window.scrollY);
  };

  useEffect(() => {
    setOuterHeightOffset(window.outerHeight - 130);

    window.addEventListener("resize", () => {
      setOuterHeightOffset(window.outerHeight - 130);
    });

    if (window.scrollY > 0) {
      setCurrentY(window.scrollY);
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const setAnimation = (ref: RefObject<HTMLDivElement>) => {
    const LocationTop = (ref.current?.offsetTop as number) - outerHeightOffset;
    return LocationTop < currentY;
  };

  const mouseOverHandler = () => {
    setIsHovered(true);
  };

  const mouseOutHandler = () => {
    setIsHovered(false);
  };

  return (
    <div
      ref={itemRef}
      className={`lg:h-[400px] mb-20 w-full bg-work-Content  border-1 border-white shadow-content rounded-md sm:p-12 p-6 flex flex-col lg:gap-10 gap-3 transition-project lg:flex-row ${
        setAnimation(itemRef) ? "opacity-100" : index % 2 ? "translate-x-2/3 opacity-0" : "-translate-x-2/3 opacity-0"
      } duration-1000 font-NanumSquareNeo`}
    >
      <div
        className="lg:w-[400px] sm:h-[300px] h-[200px] rounded-md shadow-thumbnail border-black relative hover:bg-black duration-300"
        onMouseOver={mouseOverHandler}
        onMouseOut={mouseOutHandler}
        onClick={() => window.open(content.github)}
      >
        <Image
          src={content.thumbnail === "" ? "/assets/images/noImage.png" : content.thumbnail}
          alt="thumbnail"
          // width={400}
          // height={300}
          fill
          className={`object-contain rounded-md cursor-pointer ${isHovered && "opacity-10"} duration-300`}
          style={{ width: "100%", height: "100%" }}
        />
        {isHovered && (
          <div className="absolute flex items-center text-white -translate-x-1/2 -translate-y-1/2 cursor-pointer sm:text-xl whitespace-nowrap top-1/2 left-1/2">
            <span>GitHub로 이동하기</span>
            <RiExternalLinkLine />
          </div>
        )}
      </div>
      <div className="block mb-2 text-xs lg:hidden">*이미지를 클릭하면 Github로 이동합니다.</div>
      <div className="mx-auto lg:w-[500px] flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between h-10">
            <h2 className="text-2xl font-bold sm:text-3xl break-keep">{content.name}</h2>
            {content.deploy && (
              <button
                onClick={() => window.open(content.deploy)}
                className="w-[100px] h-full bg-[#ad97cf] rounded-lg text-white font-bold duration-300 ease-in-out hover:bg-[#9759bb]"
              >
                VIEW
              </button>
            )}
          </div>
          <ul className="my-5 text-base">
            <li className={LI_STYLE}>
              <h6 className={H6_STYLE}>작업인원</h6>
              <p className="text-sm sm:text-base text-[#242424] font-semibold">{content.workForce}</p>
            </li>
            <li className={LI_STYLE}>
              <h6 className={H6_STYLE}>작업기간</h6>
              <p className="text-sm sm:text-base text-[#242424] font-semibold">{content.period}</p>
            </li>
            <li className={LI_STYLE}>
              <h6 className={H6_STYLE}>사용기술</h6>
              <p className="text-sm sm:text-base text-[#242424] font-semibold">
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
              <p className="text-sm break-keep sm:text-base text-[#242424] font-semibold leading-tight">
                {content.introduction}
              </p>
            </li>
            <li className={LI_STYLE}>
              <h6 className={H6_STYLE}>상세 역할</h6>
              <div>
                {content.parts.map(part => (
                  <p
                    key={part}
                    className="mb-2 text-sm leading-tight sm:text-base break-keep text-[#242424] font-semibold"
                  >
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

"use client";
import { IProjectItem } from "@/interface/projectItem";
import Image from "next/image";
import React, { useState } from "react";
import { RiExternalLinkLine } from "react-icons/ri";

function ContentItem({ content }: { content: IProjectItem }) {
  const [isHovered, setIsHovered] = useState(false);
  const mouseOverHandler = () => {
    setIsHovered(true);
  };
  const mouseOutHandler = () => {
    setIsHovered(false);
  };
  const clickImageHanlder = () => {
    window.open(content.github);
  };

  return (
    <div className="h-[400px] mb-20 bg-work-Content w-full border-1 border-white shadow-content rounded-md p-12 flex gap-10">
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
          <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 text-white flex items-center cursor-pointer">
            <span>GitHub로 이동하기</span>
            <RiExternalLinkLine />
          </div>
        )}
      </div>
      <div className="mx-auto w-[500px] flex flex-col justify-between">
        <div>
          <h2 className="mt-2 font-bold text-3xl">{content.name}</h2>
          <ul className="my-5 text-xl">
            <li className="mb-5">사용 언어 : {content.language}</li>
            {content.features.map(feature => (
              <li key={feature} className="mb-2">
                • {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="pb-4">
          <button className="w-[100px] h-[35px] bg-primary-normal rounded-lg">VIEW</button>
        </div>
      </div>
    </div>
  );
}

export default ContentItem;

"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import titleImage from "/public/assets/images/titleImage.png";

const H2_STYLES =
  "lg:text-[160px] md:text-[120px] sm:text-[80px] text-[60px] text-transparent bg-clip-text leading-tight";

function Title() {
  const [isMount, setIsMount] = useState(false);

  useEffect(() => {
    setIsMount(true);
  }, []);

  return (
    <section className="lg:h-[100vh] pt-28 lg:min-w-[1000px] px-4" id="Home">
      <div className="flex flex-col items-center h-full lg:justify-center lg:flex-row">
        <div className={`w-full text-center ${!isMount && "-translate-x-2/3 opacity-0"} duration-1000`}>
          <hgroup className="font-bold">
            <h2 className={`bg-title-First ${H2_STYLES}`}>Design</h2>
            <h2 className={`bg-title-Second ${H2_STYLES}`}>Growth</h2>
            <h3 className="md:text-2xl sm:text-xl text-[#9d5cbb] font-[SBAggroL] ml-4 break-keep">
              항상 배움의 자세로 성장하는 웹 개발자
            </h3>
          </hgroup>
        </div>
        <div className={`w-full ${!isMount && "translate-x-2/3 opacity-0"} duration-1000`}>
          <Image src={titleImage} alt="titleImage" width={800} height={800} className="animate-cloud" />
        </div>
      </div>
    </section>
  );
}

export default Title;

import Image from "next/image";
import React from "react";
import titleImage from "/public/assets/images/titleImage.png";

const H2_STYLES =
  "lg:text-[160px] md:text-[120px] sm:text-[80px] text-[60px] text-transparent bg-clip-text leading-tight";

function Title() {
  return (
    <section className="lg:h-[100vh] pt-28 md:min-w-[1000px] px-4" id="Home">
      <div className="flex items-center lg:justify-center h-full flex-col lg:flex-row">
        <div className="w-full text-center">
          <hgroup className="font-bold">
            <h2 className={`bg-title-First ${H2_STYLES}`}>Design</h2>
            <h2 className={`bg-title-Second ${H2_STYLES}`}>Growth</h2>
            <h3 className="md:text-2xl sm:text-xl text-[#9d5cbb] font-[SBAggroL] ml-4 break-keep">
              항상 배움의 자세로 성장하는 웹 개발자
            </h3>
          </hgroup>
        </div>
        <div className="w-full">
          <Image src={titleImage} alt="titleImage" width={800} height={800} className="animate-cloud" />
        </div>
      </div>
    </section>
  );
}

export default Title;

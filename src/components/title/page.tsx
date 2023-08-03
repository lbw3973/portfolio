import Image from "next/image";
import React from "react";
import titleImage from "/public/assets/images/titleImage.png";

const H2_STYLES = "text-[160px] text-transparent bg-clip-text leading-tight";

function Title() {
  return (
    <section className="h-[100vh] pt-28 min-w-[1000px] px-4">
      <div className="h-full flex items-center">
        <div className="w-full">
          <hgroup className="font-mono font-bold">
            <h2 className={`bg-title-First ${H2_STYLES}`}>Design</h2>
            <h2 className={`bg-title-Second ${H2_STYLES}`}>Growth</h2>
            <h3 className="text-2xl text-[#9d5cbb] font-[SBAggroL] ml-4">항상 배움의 자세로 성장하는 웹 개발자</h3>
          </hgroup>
        </div>
        <div className="min-w-[400px] w-full">
          <Image src={titleImage} alt="titleImage" width={800} height={800} className="animate-cloud" />
        </div>
      </div>
    </section>
  );
}

export default Title;

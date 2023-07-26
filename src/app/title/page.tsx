import Image from "next/image";
import React from "react";
import titleImage from "/public/assets/images/titleImage.png";

function Title() {
  return (
    <section className="h-[100vh] pt-28">
      <div className="h-full flex items-center">
        <div className="min-w-[600px] w-full">
          <hgroup className="font-mono font-bold">
            <h2 className="text-[120px] text-transparent bg-title-First bg-clip-text leading-tight">Design</h2>
            <h2 className="text-[120px] text-transparent bg-title-Second bg-clip-text leading-tight">Growth</h2>
          </hgroup>
        </div>
        <div className="min-w-[600px]">
          <Image src={titleImage} alt="titleImage" width={600} height={600} className="animate-cloud" />
        </div>
      </div>
    </section>
  );
}

export default Title;

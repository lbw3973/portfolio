import React from "react";

function SubTitle({ text }: { text: string }) {
  return (
    <div className="flex justify-center mt-6 mb-12 lg:mt-14 lg:mb-28 md:mt-10 md:mb-20">
      <h2 className="text-[40px] font-bold mb-2 after:w-3/4 after:h-1 after:mt-2.5 after:bg-[#9D5CBB] after:block after:translate-x-[15%]">
        {text}
      </h2>
    </div>
  );
}

export default SubTitle;

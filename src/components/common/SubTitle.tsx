import React from "react";

function SubTitle({ text }: { text: string }) {
  return (
    <div className="mt-14 mb-28 flex justify-center">
      <h2 className="text-[40px] font-bold mb-2 after:w-3/4 after:h-1 after:mt-2.5 after:bg-[#9D5CBB] after:block after:translate-x-[15%]">
        {text}
      </h2>
    </div>
  );
}

export default SubTitle;

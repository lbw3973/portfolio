import React from "react";

function SubTitle({ text }: { text: string }) {
  return (
    <div className="my-14">
      <h2 className="text-center text-3xl font-bold">{text}</h2>
      <div className="min-w-[968px] relative">
        <div className="w-8 h-1 bg-primary-normal absolute left-1/2 mt-1 -translate-x-1/2"></div>
      </div>
    </div>
  );
}

export default SubTitle;

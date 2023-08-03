import { IProjectItem } from "@/interface/projectItem";
import Image from "next/image";
import React from "react";

function ContentItem({ content }: { content: IProjectItem }) {
  return (
    <div className="h-[400px] mb-20 bg-work-Content w-full border-1 border-white shadow-content rounded-md p-12 flex gap-10">
      <div className="w-[400px] h-[300px] rounded-md shadow-thumbnail border-black relative -">
        <Image src={content.thumbnail} alt="thumbnail" layout="fill" objectFit="cover" className="rounded-md" />
      </div>
      <div className="mx-auto w-[500px]">
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
      </div>
    </div>
  );
}

export default ContentItem;

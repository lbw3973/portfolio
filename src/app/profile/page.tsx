import React from "react";
import data from "@/constants/data.json";
import Image from "next/image";
import SubTitle from "@/components/common/SubTitle";

function Profile() {
  return (
    <section className="pt-14 px-4 mb-14 min-w-[1000px]">
      <SubTitle text="Profile" />
      <div className="flex justify-between border-1 border-white p-10 rounded-md">
        <div className="flex flex-col gap-10 min-w-[500px]">
          <div className="leading-normal font-bold text-5xl">
            {data.title.map(item => (
              <p key={item}>{item}</p>
            ))}
          </div>
          <div className="leading-snug text-[#272727]">
            {data.subtitle.map((item, index) => (
              <p key={item} className={`${index ? "text-base" : "font-bold mb-1 text-xl"}`}>
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="h-full">
          <Image src={"https://picsum.photos/400/300"} alt="profileImage" width={400} height={300} />
          <div className="mt-5">
            <p className="leading-tight">
              <span className="text-xl font-bold mr-2">생년월일</span>
              {data.birth} (만 {new Date().getFullYear() - Number(data.birth.split(".")[0])}세)
            </p>
            <p className="leading-tight mt-2.5">
              <span className="text-xl font-bold mr-2">E-mail</span>
              {data.email}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;

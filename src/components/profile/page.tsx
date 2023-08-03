import React from "react";
import data from "@/constants/data.json";
import Image from "next/image";
import SubTitle from "@/components/common/SubTitle";
import Skills from "@/components/profile/Skills";

function Profile() {
  return (
    <section className="py-28 min-w-[1000px] px-4">
      <SubTitle text="Profile" />
      <div className="border-1 border-white p-10 rounded-md">
        <div className="flex justify-between mb-10 gap-10">
          <div className="flex flex-col justify-around min-w-[500px]">
            <div className="leading-relaxed font-bold text-5xl">
              {data.title.map(item => (
                <p key={item}>{item}</p>
              ))}
            </div>
            <div className="leading-snug text-[#272727]">
              {data.subtitle.map((item, index) => (
                <p key={item} className={`${index ? "text-xl" : "font-bold mb-1 text-2xl"}`}>
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="h-full">
            <Image src={"https://picsum.photos/400/300"} alt="profileImage" width={600} height={400} />
            <div className="mt-5 text-xl">
              <p className="leading-tight">
                <span className="text-2xl font-bold mr-2">생년월일</span>
                {data.birth} (만 {new Date().getFullYear() - Number(data.birth.split(".")[0])}세)
              </p>
              <p className="leading-tight mt-2.5">
                <span className="text-2xl font-bold mr-2">E-mail</span>
                {data.email}
              </p>
            </div>
          </div>
        </div>
        <Skills />
      </div>
    </section>
  );
}

export default Profile;

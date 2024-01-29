"use client";
import data from "@/constants/user.json";
import Image from "next/image";
import SubTitle from "@/components/common/SubTitle";
import Skills from "@/components/profile/Skills";
import { RefObject, useEffect, useRef, useState } from "react";

function Profile() {
  const [currentY, setCurrentY] = useState(0);
  const [outerHeightOffset, setOuterHeightOffset] = useState(0);
  const subTitleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const onScroll = () => {
    setCurrentY(window.scrollY);
  };

  useEffect(() => {
    setOuterHeightOffset(window.outerHeight - 130);

    window.addEventListener("resize", () => {
      setOuterHeightOffset(window.outerHeight - 130);
    });

    if (window.scrollY > 0) {
      setCurrentY(window.scrollY);
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const setAnimation = (ref: RefObject<HTMLDivElement>) => {
    const LocationTop = (ref.current?.offsetTop as number) - outerHeightOffset;
    return LocationTop < currentY;
  };

  return (
    <section className="lg:py-28 md:py-21 py-14 lg:min-w-[1000px] px-4" id="Profile">
      <SubTitle text="Profile" />
      <div className="p-4 overflow-hidden border-white rounded-md md:p-6 lg:p-10 border-1 font-NanumSquareNeo">
        <div className="flex flex-col gap-10 mb-16 overflow-hidden lg:flex-row justify-evenly">
          <div
            ref={subTitleRef}
            className={`flex flex-col justify-around gap-2 text-center lg:text-start lg:gap-0 ${
              setAnimation(subTitleRef) ? "opacity-100" : "-translate-x-1/2 opacity-10"
            } duration-1000`}
          >
            <div className="text-xl font-bold leading-relaxed lg:text-5xl md:text-4xl sm:text-3xl break-keep">
              {data.title.map(item => (
                <p key={item}>{item}</p>
              ))}
            </div>
            <div className="leading-snug text-[#272727]">
              {data.subtitle.map((item, index) => (
                <p
                  key={item}
                  className={`${
                    index
                      ? "lg:text-xl md:text-base sm:text-sm text-xs text-gray-heavy"
                      : "font-bold mb-1 lg:text-2xl md:text-xl sm:text-base text-sm"
                  }`}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div
            ref={imageRef}
            className={`h-full text-center lg:text-start ${
              setAnimation(imageRef) ? "opacity-100" : "translate-x-1/2 opacity-10"
            } duration-1000`}
          >
            <Image
              src={data.profileImage}
              alt="profileImage"
              width={200}
              height={200}
              className="mx-auto duration-300 rounded-md hover:opacity-70 md:w-[300px] md:h-[400px]"
            />
            <div className="mt-5">
              <p className="flex flex-col leading-tight xs:block">
                <span className="mr-2 text-xl font-bold sm:text-2xl">생년월일</span>
                <span className="sm:text-xl">
                  {data.birth} (만 {new Date().getFullYear() - Number(data.birth.split(".")[0])}세)
                </span>
              </p>
              <p className="flex flex-col xs:block leading-tight mt-2.5">
                <span className="mr-2 text-xl font-bold sm:text-2xl">E-mail</span>
                <span className="sm:text-xl">{data.email}</span>
              </p>
            </div>
          </div>
        </div>
        <div
          ref={skillsRef}
          className={`${setAnimation(skillsRef) ? "opacity-100" : "translate-y-1/2 opacity-10"} duration-1000`}
        >
          <Skills />
        </div>
      </div>
    </section>
  );
}

export default Profile;

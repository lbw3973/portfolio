"use client";
import React from "react";
import SubTitle from "../common/SubTitle";
import data from "@/constants/user.json";
import { BsPhone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import Image from "next/image";

const FLEX_COL = "flex flex-col items-center gap-2";

function Contact() {
  const clickGitHubHandler = () => {
    window.open(data.github);
  };
  const clickVelogHandler = () => {
    window.open(data.velog);
  };
  const clickNotionHandler = () => {
    window.open(data.notion);
  };

  return (
    <section className="pt-28 min-w-[1000px] px-4 mb-28" id="Contact">
      <div className="w-full h-[600px] bg-white rounded-lg pt-px">
        <SubTitle text="Contact Me" />
        <div className="mx-auto w-1/3 text-2xl">
          <div className={`${FLEX_COL} mb-[30px]`}>
            <BsPhone color="#9885D7" size={40} />
            <p>{data.phoneNumber}</p>
          </div>
          <div className={`${FLEX_COL} mb-[30px]`}>
            <TfiEmail color="#9885D7" size={40} />
            <p>{data.email}</p>
          </div>
          <div className="flex justify-evenly pt-10">
            <div className={FLEX_COL}>
              <p>GitHub</p>
              <Image
                src={"/assets/images/GitHub.png"}
                alt="GitHub"
                width={60}
                height={60}
                className="cursor-pointer"
                onClick={clickGitHubHandler}
              />
            </div>
            <div className={FLEX_COL}>
              <p>Notion</p>
              <Image
                src={"/assets/images/Notion.png"}
                alt="Notion"
                width={60}
                height={60}
                className="cursor-pointer"
                onClick={clickNotionHandler}
              />
            </div>
            <div className={FLEX_COL}>
              <p>Velog</p>
              <Image
                src={"/assets/images/Velog.png"}
                alt="Velog"
                width={60}
                height={60}
                className="cursor-pointer"
                onClick={clickVelogHandler}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

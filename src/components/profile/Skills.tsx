"use client";
import Image from "next/image";
import React from "react";
import SkillIcons from "@/constants/skillIcon.json";

function Skills() {
  return (
    <div className="flex items-center gap-10">
      <h3 className="font-bold text-2xl">Skills</h3>
      <div className="flex gap-10">
        {Object.values(SkillIcons).map(item => (
          <Image src={item.src} alt={item.src} key={item.src} width={60} height={60} className="hover:animate-icon" />
        ))}
      </div>
    </div>
  );
}

export default Skills;

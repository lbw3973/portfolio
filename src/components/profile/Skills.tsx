"use client";
import Image from "next/image";
import SkillIcons from "@/constants/skillIcon.json";

function Skills() {
  return (
    <div className="flex flex-col justify-center gap-10 lg:flex-row lg:items-center">
      <h3 className="text-xl font-bold text-center sm:text-2xl">Skills</h3>
      <div className="flex flex-wrap justify-center gap-8">
        {Object.values(SkillIcons).map(item => (
          <Image
            src={item.src}
            alt={item.src}
            key={item.src}
            width={40}
            height={40}
            className="duration-300 hover:scale-125 sm:w-[60px] sm:h-[60px]"
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;

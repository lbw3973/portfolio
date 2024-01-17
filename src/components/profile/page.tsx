import data from "@/constants/user.json";
import Image from "next/image";
import SubTitle from "@/components/common/SubTitle";
import Skills from "@/components/profile/Skills";

function Profile() {
  return (
    <section className="py-28 min-w-[1000px] px-4" id="Profile">
      <SubTitle text="Profile" />
      <div className="p-10 border-white rounded-md border-1 font-NanumSquareNeo">
        <div className="flex gap-10 mb-16 justify-evenly">
          <div className="flex flex-col justify-around min-w-[500px]">
            <div className="text-5xl font-bold leading-relaxed">
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
            <Image
              src={data.profileImage}
              alt="profileImage"
              width={400}
              height={400}
              className="duration-300 rounded-md hover:opacity-70"
            />
            <div className="mt-5 text-xl">
              <p className="leading-tight">
                <span className="mr-2 text-2xl font-bold">생년월일</span>
                {data.birth} (만 {new Date().getFullYear() - Number(data.birth.split(".")[0])}세)
              </p>
              <p className="leading-tight mt-2.5">
                <span className="mr-2 text-2xl font-bold">E-mail</span>
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

import data from "@/constants/user.json";
import Image from "next/image";
import SubTitle from "@/components/common/SubTitle";
import Skills from "@/components/profile/Skills";

function Profile() {
  return (
    <section className="py-28 lg:min-w-[1000px] px-4" id="Profile">
      <SubTitle text="Profile" />
      <div className="p-10 border-white rounded-md border-1 font-NanumSquareNeo">
        <div className="flex flex-col gap-10 mb-16 lg:flex-row justify-evenly">
          <div className="flex flex-col justify-around gap-2 text-center lg:text-start lg:gap-0">
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
          <div className="h-full text-center lg:text-start">
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
        <Skills />
      </div>
    </section>
  );
}

export default Profile;

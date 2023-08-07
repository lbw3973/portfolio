import Contact from "@/components/contact/page";
import Profile from "../components/profile/page";
import Projects from "../components/projects/page";
import Title from "../components/title/page";

export default function Home() {
  return (
    <main className="min-w-[500px] mx-auto max-w-[1200px]">
      <Title />
      <Profile />
      <Projects />
      <Contact />
    </main>
  );
}

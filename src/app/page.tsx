import Profile from "./profile/page";
import Title from "./title/page";

export default function Home() {
  return (
    <main className="min-w-[500px] mx-auto max-w-[1600px]">
      <Title />
      <Profile />
    </main>
  );
}

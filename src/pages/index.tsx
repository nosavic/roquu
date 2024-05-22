import Navbar from "@/components/Navbar";
import Sections from "@/components/Sections/Sections";
import TopInfo from "@/components/TopInfo";

export default function Home() {
  return (
    <main className="relative">
      <div className="py-[10px] sticky top-0  backdrop-blur-[10px]">
        <Navbar />
        <div className="bg-[#32383F95] h-[1px] w-[100%]  mt-[10px]" />
      </div>
      <div className="mx-[8px] flex-col flex gap-[10px] ">
        <TopInfo />
        <Sections />
      </div>
    </main>
  );
}

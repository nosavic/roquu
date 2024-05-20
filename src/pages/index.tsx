import Navbar from "@/components/Navbar";
import TopInfo from "@/components/TopInfo";

export default function Home() {
  return (
    <main>
      <div className="mt-[10px] ml-[20px] mr-[30px]">
        <Navbar />
      </div>
      <div className="bg-[#32383F95] h-[1px] w-[100%] mt-[10px] mb-[10px]" />
      <div className="mx-[8px] ">
        <TopInfo />
      </div>
    </main>
  );
}

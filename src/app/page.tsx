import Content from "@/components/content/page";
import Dashboard from "@/components/dashboard/page";
import Hero from "@/components/header/hero/page";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <div className="bg-[#065AF1] min-h-[1000px] w-full relative z-0">
        <div className="min-h-[700px]  2xl:min-h-[850px] 2xl:max-h-screen w-full bg-cover bg-center bg-no-repeat bg-[url(/icons/header/headerBg.svg)]">
          <Hero />
   
        </div>
      </div>
      <div className="bg-blue-500  4xl:bg-red-500 p-10 text-white">
            3xl ve 4xl ekranlarda farklı renklere bürünürüm!
          </div>
    </div>
  );
}

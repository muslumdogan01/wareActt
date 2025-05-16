import Content from "@/components/content/page";
import Dashboard from "@/components/dashboard/page";
import Hero from "@/components/header/hero/page";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <div className="relative w-full h-[900px] 4xl:h-[600px] z-0">

        <Image
          src="/icons/header/headerBg.svg"
          alt="Header background"
          fill
          priority
          sizes="100vw"
          className="object-cover "
        />

        {/* Hero içerik */}
        <div className="relative  z-10">
          <Hero />
        </div>
      </div>

      {/* Dashboard alanı */}
      <div className=" -mt-[40rem]  relative 4xl:h-[950px] h-[730px]  -z-10 bg-[#065AF1] pt-[100px] hidden lg:block">
       

        <Dashboard />
      </div>

      {/* Alt içerik */}
      <Content />
    </div>
  );
}

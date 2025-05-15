import Content from "@/components/content/page";
import Dashboard from "@/components/dashboard/page";
import Hero from "@/components/header/hero/page";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <div className="relative w-full xl:min-h-[554px] 2xl:min-h-[800px] 3xl:min-h-[900px]  z-0">
        <Image
          src="/images/header/headerBg.png"
          alt="Header background"
          fill
          priority
          className="object-fill hidden 4xl:block"
        />
        <Image
          src="/icons/header/headerBg.svg"
          alt="Header background"
          fill
          priority
          sizes="100vw"
          className="object-cover block 4xl:hidden"
        />

        {/* Hero içerik */}
        <div className="relative z-10">
          <Hero />
        </div>
        <div className=" w-full container mx-auto hidden lg:block">
          <Image
            src="/icons/content/square.svg"
            alt="kare"
            width={240}
            height={240}
            className="absolute right-16 bottom-[-60px] z-20"
            priority
          />
       
        </div>

      </div>

      {/* Dashboard alanı */}
      <div className="4xl:-mt-[230px] -mt-[230px] relative h-[600px] -z-10 bg-[#065AF1] pt-[100px] hidden lg:block">
        <Dashboard />
      </div>

      {/* Alt içerik */}
      <Content />
    </div>
  );
}

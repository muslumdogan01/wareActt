import Content from "@/components/content/page";
import MobileDashboard from "@/components/dashboard/mobileDashboard";
import Dashboard from "@/components/dashboard/page";
import Hero from "@/components/header/hero/page";
import Testimonials from "@/components/testimonials/page";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen relative">
      <div className="relative w-full bg-white lg:bg-transparent  h-[480px] lg:h-[900px] 4xl:h-[600px] z-0">
        <Image
          src="/icons/header/background.svg"
          alt="Header background"
          fill
          priority
          sizes="100vw"
          className="object-cover hidden lg:block"
        />

        <div className="relative  z-10">
          <Hero />
        </div>
      </div>

      <div className=" lg:-mt-[40rem]  relative 4xl:h-[950px] h-[730px]  -z-10 bg-[#065AF1] lg:pt-[100px] hidden lg:block">
        <Dashboard />
      </div>
     <div>
       <Content />
     </div>
      <div className="flex lg:hidden flex-col items-center justify-center ">
        <MobileDashboard />
      </div>
        <Testimonials/>
    </div>
  );
}

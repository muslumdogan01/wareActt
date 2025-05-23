import Content from "@/components/content/page";
import MobileDashboard from "@/components/dashboard/mobileDashboard";
import Dashboard from "@/components/dashboard/page";
import FAQSection from "@/components/faq/page";
import Hero from "@/components/header/hero/page";
import SignupCard from "@/components/signup/page";
import Testimonials from "@/components/testimonials/page";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full relative @container/Dashboard ">
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
        <div className="absolute bottom-0 left-0 w-full h-[510px] bg-[#065AF1]  -z-10"></div>
      </div>

      <div className="  relative  h-[150px]  @container/Dash @[5300px]/Dashboard:h-[350px]  z-20 bg-[#065AF1]  hidden lg:block">
        <Dashboard />
      </div>
     <div>
       <Content />
     </div>
      <div className="flex lg:hidden flex-col items-center justify-center ">
        <MobileDashboard />
      </div>
       <div>
         <Testimonials/>
       </div>
       <div className="bg-white">
        <FAQSection/>
       </div>
       <div className="bg-white">
        <SignupCard/>
       </div>
    </div>
  );
}

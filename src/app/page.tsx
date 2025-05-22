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
    <div className="w-full relative @container/Dash ">
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

      <div className=" lg:-mt-[34rem]  relative h-[600px] @[1300px]/Dash:h-[600px] @[3000px]/Dash:h-[650px] @[4000px]/Dash:h-[700px] @[5000px]/Dash:h-[800px] @[6000px]/Dash:h-[900px]  -z-10 bg-[#065AF1] lg:pt-[100px] hidden lg:block">
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

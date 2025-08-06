'use client'
import Content from "@/components/content/page";
import MobileDashboard from "@/components/dashboard/mobileDashboard";
import Dashboard from "@/components/dashboard/page";
import FAQSection from "@/components/faq/page";
import InsightWeb from "@/components/feature/insightWeb";
import Feature from "@/components/feature/page";
import Hero from "@/components/header/hero/page";
import SignupCard from "@/components/signup/page";
import Testimonials from "@/components/testimonials/page";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full relative  ">
      <div className="relative w-full bg-white lg:bg-[#065AF1] min-h-[470px] lg:min-h-[900px] z-0">
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
        <div className="w-full justify-center  z-20 absolute -bottom-70 4xl:-bottom-90 hidden lg:flex">
          <Dashboard />
        </div>
      </div>

      <div>
        <Content />
      </div>
      <div className="flex lg:hidden flex-col items-center justify-center ">
        <MobileDashboard />
      </div>
      <div>
        <Testimonials />
      </div>
      <div>
        <Feature />
      </div>
      <div className="bg-white lg:bg-[url('/images/content/productBg.png')] lg:bg-no-repeat lg:bg-cover lg:flex lg:flex-col lg:justify-center">
        <div className="max-w-[1440px] mx-auto -mt-70 z-20 relative hidden lg:block">
          <InsightWeb />
        </div>
        <div className="lg:max-w-[1440px] mt-[200px] lg:mx-auto">
          <FAQSection />
        </div>

        <div className="">
          <SignupCard />
        </div>
      </div>
    </div>
  );
}
